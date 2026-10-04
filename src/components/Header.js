"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const strip = (p) => p.replace(/\/+$/, "") || "/";
  const isActive = (href) => (href === "/" ? strip(pathname) === "/" : strip(pathname).startsWith(strip(href)));

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md shadow-navy-900/5" : ""}`}>
      <div className="hidden bg-navy-950 text-xs text-white/70 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="size-3.5 text-brand" />
            Serving Parksville, Qualicum Beach & Central Vancouver Island
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="size-3.5 text-brand" />
              {site.hoursShort}
            </span>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="size-3.5 text-brand" />
              {site.email}
            </a>
          </span>
        </div>
      </div>

      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-semibold transition ${
                    isActive(item.href) ? "text-navy-900" : "text-navy-700/70 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded bg-brand" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden items-center gap-2 text-sm font-bold text-navy-900 xl:flex">
            <span className="grid size-9 place-items-center rounded-full bg-mist">
              <Icon name="phone" className="size-4" />
            </span>
            {site.phone}
          </a>
          <Link href="/contact/" className="btn-primary hidden sm:inline-flex">
            Get a Free Estimate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg text-navy-900 hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        // Any link tap inside closes the menu
        <nav id="mobile-nav" className="border-t border-navy-900/10 bg-white lg:hidden" aria-label="Mobile" onClick={(e) => e.target.closest("a") && setOpen(false)}>
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 font-semibold ${isActive(item.href) ? "bg-mist text-navy-900" : "text-navy-700"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 grid gap-2 sm:grid-cols-2">
              <a href={site.phoneHref} className="btn-primary">
                <Icon name="phone" className="size-4" /> Call {site.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center rounded-lg border border-navy-900/15 px-6 py-3 text-sm font-bold">
                Request a Free Estimate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
