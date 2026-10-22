"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";

// Scroll progress bar, back-to-top button and a pulsing call button on mobile
export default function FloatingUi() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const shown = progress > 0.08;

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-brand-600 to-brand" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <a
        href={site.phoneHref}
        className="anim-pulse-ring fixed bottom-5 left-5 z-40 grid size-14 place-items-center rounded-full bg-brand text-navy-950 shadow-xl sm:hidden"
        aria-label={`Call ${site.phone}`}
      >
        <Icon name="phone" className="size-6" />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-navy-900 text-brand shadow-xl transition duration-500 hover:-translate-y-1 hover:bg-navy-800 ${
          shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
        aria-label="Back to top"
        tabIndex={shown ? 0 : -1}
      >
        <Icon name="arrow" className="size-5 -rotate-90" />
      </button>
    </>
  );
}
