"use client";

import { useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";

// No backend yet: on submit this opens the visitor's email app with the
// request pre-filled to the office address. Swap for a form service/API later.
export default function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Estimate request: ${f.get("service")} (${f.get("name")})`;
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `Property address: ${f.get("address")}`,
      `Service: ${f.get("service")}`,
      "",
      f.get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-1.5 w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-navy-700/40 focus:border-brand focus:ring-3 focus:ring-brand/25";
  const label = "text-sm font-semibold text-navy-900";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={label}>
        Full name *
        <input name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
      </label>
      <label className={label}>
        Phone *
        <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="250-555-0123" />
      </label>
      <label className={label}>
        Email
        <input name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" />
      </label>
      <label className={label}>
        Service needed
        <select name="service" className={field} defaultValue="Re-roof">
          {["Re-roof", "New roof", "Roof repair", "Maintenance / inspection", "Commercial roofing", "Not sure yet"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Property address
        <input name="address" autoComplete="street-address" className={field} placeholder="Street, town" />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Tell us about your roof
        <textarea name="message" rows={5} className={field} placeholder="Roof type, age, any leaks or concerns…" />
      </label>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary">
          <Icon name="mail" className="size-4" /> Send Estimate Request
        </button>
        <p className="text-xs text-navy-700/60">Prefer to talk? Call <a href={site.phoneHref} className="font-bold text-navy-900">{site.phone}</a></p>
      </div>
      {sent && (
        <p className="rounded-lg bg-mist px-4 py-3 text-sm text-navy-800 sm:col-span-2" role="status">
          Your email app should open with your request ready to send. If it didn&apos;t, email us at <a href={`mailto:${site.email}`} className="font-bold">{site.email}</a>.
        </p>
      )}
    </form>
  );
}
