"use client";

import { useEffect } from "react";

// One observer drives all scroll motion on the current page:
// - [data-reveal]  → gets .is-in when it scrolls into view
// - [data-stagger] → its children get data-reveal + an increasing delay
// - [data-count]   → number counts up from 0 when visible
// - .spotlight     → --mx/--my follow the pointer for the hover glow
// Mounted from app/template.js, so it re-runs after every navigation.

function countUp(el) {
  const target = Number(el.dataset.count);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return (el.textContent = target);
  const start = performance.now();
  const dur = 1600;
  const tick = (t) => {
    const p = Math.min((t - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function ScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.add("fx");
    document.querySelectorAll("[data-stagger]").forEach((parent) => {
      const step = Number(parent.dataset.stagger) || 90;
      [...parent.children].forEach((child, i) => {
        if (!child.dataset.reveal) child.dataset.reveal = parent.dataset.staggerType || "up";
        child.style.setProperty("--d", `${i * step}ms`);
      });
    });

    // Observed node → elements to reveal. "wipe" elements start fully clipped,
    // which IntersectionObserver treats as invisible, so watch their parent instead.
    const targets = new Map();
    document.querySelectorAll("[data-reveal], [data-count]").forEach((el) => {
      const watch = el.dataset.reveal === "wipe" ? el.parentElement : el;
      targets.set(watch, [...(targets.get(watch) || []), el]);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          for (const el of targets.get(e.target)) {
            el.classList.add("is-in");
            if (el.dataset.count) countUp(el);
            // Once the entrance finishes, drop the reveal styles so the element's
            // own hover transforms/transitions (e.g. .lift) take over again
            if (el.dataset.reveal) {
              const delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
              setTimeout(() => el.removeAttribute("data-reveal"), delay + 1100);
            }
          }
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((_, node) => io.observe(node));

    const onMove = (e) => {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
