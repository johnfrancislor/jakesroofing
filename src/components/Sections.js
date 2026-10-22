import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { Blobs, Marquee, Rain } from "./Ambient";
import { img, site, testimonials } from "@/lib/site";

// Splits a heading into words that rise in one after another
export function RiseText({ text, start = 0, step = 70, highlight = [] }) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span className={`anim-rise ${highlight.includes(w) ? "text-shimmer" : ""}`} style={{ "--d": `${start + i * step}ms` }}>
        {w}
      </span>
      {" "}
    </span>
  ));
}

export function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow" data-reveal="up">{eyebrow}</p>}
      <h2 data-reveal="up" style={{ "--d": "80ms" }} className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {text && (
        <p data-reveal="up" style={{ "--d": "160ms" }} className={`mt-4 leading-relaxed ${light ? "text-white/70" : "text-navy-700/80"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

// Banner used at the top of every inner page
export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src={image} alt="" fill preload sizes="100vw" className="anim-ken-burns object-cover opacity-30 blur-sm" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/60" />
      <Blobs className="-z-10" />
      <Rain drops={24} className="-z-10 opacity-60" />
      <div className="container-x py-20 sm:py-28">
        <p className="eyebrow anim-fade-up">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <RiseText text={title} start={120} />
        </h1>
        {text && (
          <p className="anim-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-white/75" style={{ "--d": "500ms" }}>
            {text}
          </p>
        )}
        <nav aria-label="Breadcrumb" className="anim-fade-up mt-8 flex items-center gap-2 text-sm text-white/50" style={{ "--d": "650ms" }}>
          <Link href="/" className="hover:text-brand">Home</Link>
          <Icon name="chevronRight" className="size-3.5" />
          <span className="text-white/80">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}

function initials(name) {
  return name
    .split(/\s|&/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ t, className = "" }) {
  return (
    <figure className={`spotlight lift group flex h-full flex-col rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm shadow-navy-900/5 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex gap-0.5 text-brand">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} name="star" filled className="size-4 transition-transform duration-300 group-hover:scale-125" style={{ transitionDelay: `${i * 40}ms` }} />
          ))}
        </div>
        <Icon name="quote" className="size-8 text-navy-900/10 transition duration-500 group-hover:-rotate-12 group-hover:text-brand/40" />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-700">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/5 pt-5">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-bold text-brand transition duration-300 group-hover:bg-brand group-hover:text-navy-950">
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-sm font-bold text-navy-900">{t.name}</span>
          <span className="block text-xs text-navy-700/70">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// Two rows of reviews scrolling in opposite directions; pause on hover
export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const rows = [testimonials.slice(0, half), testimonials.slice(half)];
  return (
    <section className="overflow-hidden bg-mist py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="What our clients say" title="Real People. Real Results." />
          <Link href="/reviews/" data-reveal="left" className="group inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-600">
            <span className="link-grow">Read all reviews</span> <Icon name="arrow" className="nudge size-4" />
          </Link>
        </div>
      </div>
      <div className="mt-12 space-y-6" data-reveal="up">
        {rows.map((row, r) => (
          <Marquee key={r} speed={r ? "70s" : "60s"} reverse={r === 1}>
            {row.map((t) => (
              <div key={t.name} className="w-[22rem] shrink-0 px-3 py-2 sm:w-[26rem]">
                <TestimonialCard t={t} />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  const strip = [img("residential", 79064), img("progress", 96014), img("residential", 79080), img("commercial", 79047)];
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x grid items-stretch gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2" data-stagger="110" data-stagger-type="zoom">
          {strip.map((src) => (
            <div key={src} className="group relative aspect-square overflow-hidden rounded-xl">
              <Image src={src} alt="Roofing project by Jake's Roofing" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" />
              <span className="absolute inset-0 bg-navy-950/0 transition duration-500 group-hover:bg-navy-950/20" />
            </div>
          ))}
        </div>
        <div data-reveal="right" className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-navy-900 p-8 sm:p-12">
          <div className="bg-dots absolute inset-0 -z-10" />
          <svg aria-hidden="true" viewBox="0 0 200 200" className="anim-spin-slow absolute -right-16 -top-16 -z-10 size-64 text-brand/20">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 10" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 8" />
          </svg>
          <span className="anim-float absolute bottom-6 right-8 -z-10 size-16 rounded-full bg-brand/10" />
          <p className="eyebrow">Ready to get started?</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Get Your Free Roofing Estimate Today</h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Don&apos;t delay, call today! When you call Ryan for a free estimate, you also get a professional opinion on products, ventilation and installation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary">
              Get a Free Estimate <Icon name="arrow" className="nudge size-4" />
            </Link>
            <a href={site.phoneHref} className="group flex items-center gap-3 text-white">
              <span className="anim-pulse-ring grid size-11 place-items-center rounded-full border border-white/20 transition group-hover:bg-brand group-hover:text-navy-950">
                <Icon name="phone" className="icon-pop size-5 text-brand group-hover:text-navy-950" />
              </span>
              <span>
                <span className="block text-lg font-bold">{site.phone}</span>
                <span className="block text-xs text-white/60">{site.hoursShort}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
