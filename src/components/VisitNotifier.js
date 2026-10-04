"use client";

import { useEffect } from "react";

// Emails the project manager when someone opens the site (demo/pitch tracking).
// Static-host friendly: runs in the browser, looks up IP/location with GeoJS,
// and sends the email through Web3Forms. The recipient is whoever owns the
// Web3Forms access key, so no email address lives in this code.
//
// - Only fires once per browser tab session, so page clicks don't spam emails.
// - Never fires on localhost or in `next dev`.
// - Open any page with ?notrack once to mute your own browser (?track undoes it).

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const SITE_NAME = "Jake's Roofing (demo)";

function storage(type) {
  try {
    return window[type];
  } catch {
    return null;
  }
}

function describeDevice(ua) {
  const os =
    /iPhone/.test(ua) ? "iPhone (iOS)" :
    /iPad/.test(ua) ? "iPad (iPadOS)" :
    /Android/.test(ua) ? "Android" :
    /Windows/.test(ua) ? "Windows" :
    /Mac OS X|Macintosh/.test(ua) ? "Mac (macOS)" :
    /CrOS/.test(ua) ? "ChromeOS" :
    /Linux/.test(ua) ? "Linux" : "Unknown OS";
  const type = /iPad|Tablet/.test(ua) ? "Tablet" : /Mobi|iPhone|Android/.test(ua) ? "Mobile" : "Desktop";
  return `${type} · ${os} · screen ${window.screen.width}×${window.screen.height}`;
}

function describeBrowser(ua) {
  const rules = [
    ["Edge", /Edg\/([\d.]+)/],
    ["Opera", /OPR\/([\d.]+)/],
    ["Samsung Internet", /SamsungBrowser\/([\d.]+)/],
    ["Firefox", /(?:Firefox|FxiOS)\/([\d.]+)/],
    ["Chrome", /(?:Chrome|CriOS)\/([\d.]+)/],
    ["Safari", /Version\/([\d.]+).*Safari/],
  ];
  for (const [name, re] of rules) {
    const m = ua.match(re);
    if (m) return `${name} ${m[1].split(".")[0]}`;
  }
  return "Unknown browser";
}

async function lookupIp() {
  try {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    const g = await res.json();
    return {
      ip: g.ip,
      location: [g.city, g.region, g.country].filter(Boolean).join(", ") || "Unknown",
      isp: g.organization_name || "Unknown",
      maps: g.latitude ? `https://maps.google.com/?q=${g.latitude},${g.longitude}` : "n/a",
    };
  } catch {
    // Usually an ad/privacy blocker; still send the rest of the details
    return { ip: "Unavailable (blocked)", location: "Unavailable", isp: "Unavailable", maps: "n/a" };
  }
}

export default function VisitNotifier() {
  useEffect(() => {
    const local = storage("localStorage");
    const session = storage("sessionStorage");
    const params = new URLSearchParams(window.location.search);

    if (params.has("notrack")) local?.setItem("visit-notify-off", "1");
    if (params.has("track")) local?.removeItem("visit-notify-off");

    if (!ACCESS_KEY || process.env.NODE_ENV !== "production") return;
    if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return;
    if (local?.getItem("visit-notify-off") || session?.getItem("visit-notified")) return;
    session?.setItem("visit-notified", "1");

    (async () => {
      const ua = navigator.userAgent;
      const geo = await lookupIp();
      const now = new Date();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New visitor on ${SITE_NAME}: ${geo.location}`,
          from_name: `${SITE_NAME} visit alert`,
          "IP Address": geo.ip,
          Location: geo.location,
          "Network / ISP": geo.isp,
          "Map (approx.)": geo.maps,
          Device: describeDevice(ua),
          Browser: describeBrowser(ua),
          "Date / Time (visitor)": `${now.toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" })} (${tz})`,
          "Date / Time (UTC)": now.toUTCString(),
          "Landing page": window.location.href,
          "Came from": document.referrer || "Direct (typed link / bookmark / chat app)",
          "User agent": ua,
        }),
        keepalive: true,
      }).catch(() => {});
    })();
  }, []);

  return null;
}
