"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";
import { categories, gallery } from "@/lib/site";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const items = filter === "all" ? gallery : gallery.filter((g) => g.category === filter);

  const step = useCallback((dir) => setActive((i) => (i + dir + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  const tabs = [{ key: "all", label: "All Projects" }, ...categories];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {tabs.map((t) => {
          const count = t.key === "all" ? gallery.length : gallery.filter((g) => g.category === t.key).length;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={filter === t.key}
              onClick={() => setFilter(t.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === t.key ? "bg-navy-900 text-white" : "bg-mist text-navy-700 hover:bg-navy-900/10"
              }`}
            >
              {t.label} <span className={filter === t.key ? "text-brand" : "text-navy-700/50"}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <li key={g.src}>
            <button
              onClick={() => setActive(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-mist focus-visible:outline-3 focus-visible:outline-brand"
              aria-label={`Open photo: ${g.alt}`}
            >
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs font-semibold text-white">{categories.find((c) => c.key === g.category).label}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActive(null)}>
          <button className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close" onClick={() => setActive(null)}>
            <Icon name="close" />
          </button>
          <button
            className="absolute left-2 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >
            <Icon name="chevronLeft" />
          </button>
          <div className="relative aspect-square w-full max-w-[min(640px,80vh)]" onClick={(e) => e.stopPropagation()}>
            <Image src={items[active].src} alt={items[active].alt} fill sizes="640px" className="rounded-xl object-contain" />
          </div>
          <button
            className="absolute right-2 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >
            <Icon name="chevronRight" />
          </button>
          <p className="absolute bottom-5 text-sm text-white/60">
            {active + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
