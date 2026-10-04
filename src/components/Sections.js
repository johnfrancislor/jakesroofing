import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { img, site, testimonials } from "@/lib/site";

export function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {text && <p className={`mt-4 leading-relaxed ${light ? "text-white/70" : "text-navy-700/80"}`}>{text}</p>}
    </div>
  );
}

// Banner used at the top of every inner page
export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <Image src={image} alt="" fill preload sizes="100vw" className="-z-10 scale-110 object-cover opacity-30 blur-sm" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/60" />
      <div className="container-x py-20 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>}
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

export function TestimonialCard({ t }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm shadow-navy-900/5">
      <div className="flex gap-0.5 text-brand">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} name="star" filled className="size-4" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-700">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/5 pt-5">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-bold text-brand">{initials(t.name)}</span>
        <span>
          <span className="block text-sm font-bold text-navy-900">{t.name}</span>
          <span className="block text-xs text-navy-700/70">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ count = 3 }) {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="What our clients say" title="Real People. Real Results." />
          <Link href="/reviews/" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-600">
            Read all reviews <Icon name="arrow" className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, count).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const strip = [img("residential", 79064), img("progress", 96014), img("residential", 79080), img("commercial", 79047)];
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x grid items-stretch gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {strip.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
              <Image src={src} alt="Roofing project by Jake's Roofing" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-navy-900 p-8 sm:p-12">
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand/10" />
          <p className="eyebrow">Ready to get started?</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Get Your Free Roofing Estimate Today</h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Don&apos;t delay, call today! When you call Ryan for a free estimate, you also get a professional opinion on products, ventilation and installation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary">Get a Free Estimate</Link>
            <a href={site.phoneHref} className="flex items-center gap-3 text-white">
              <span className="grid size-11 place-items-center rounded-full border border-white/20">
                <Icon name="phone" className="size-5 text-brand" />
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
