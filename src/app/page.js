import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, SectionHeading, Testimonials } from "@/components/Sections";
import { img, process, services, trust, whyUs } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <Image src="/images/hero-backdrop.webp" alt="" fill preload sizes="100vw" className="-z-10 object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/40" />

        <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow">Residential & Commercial Roofing</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Quality Roofing for a <span className="text-brand">Safer Tomorrow</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              New and re-roof specialists serving Parksville, Qualicum Beach and the surrounding area for over 19 years. Honest advice, careful work and a roof built to last.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-primary">
                <Icon name="clipboard" className="size-4" /> Get a Free Estimate
              </Link>
              <Link href="/services/" className="btn-ghost">
                Our Services <Icon name="arrow" className="size-4" />
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
              {trust.map((t) => (
                <li key={t.title} className="flex items-center gap-3 text-white">
                  <Icon name={t.icon} className="size-7 shrink-0 text-brand" />
                  <span className="text-xs font-semibold leading-snug">{t.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl shadow-black/40">
              <Image src={img("residential", 79063)} alt="Craftsman home with a new roof by Jake's Roofing" fill preload sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <span className="grid size-12 place-items-center rounded-xl bg-brand text-navy-950">
                <Icon name="badge" className="size-6" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-navy-900">5-Year Warranty</span>
                <span className="block text-xs text-navy-700/70">Transferable, on re-roofs</span>
              </span>
            </div>
            <div className="absolute -right-3 top-6 hidden rounded-2xl bg-navy-900/90 px-4 py-3 text-white shadow-xl backdrop-blur sm:block">
              <span className="block text-2xl font-extrabold text-brand">19+</span>
              <span className="block text-xs text-white/70">Years serving<br />the Island</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Our Services"
              title="Complete Roofing Solutions"
              text="From small repairs to full re-roofs, we handle it all with quality workmanship and materials from local suppliers we trust."
            />
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-navy-900/5 sm:grid-cols-2 xl:grid-cols-3">
              {services.slice(0, 6).map((s) => (
                <div key={s.title} className="group bg-white p-6 transition hover:bg-mist">
                  <span className="grid size-12 place-items-center rounded-full bg-brand/15 text-navy-900 transition group-hover:bg-brand">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-700/75">{s.text}</p>
                </div>
              ))}
            </div>
            <Link href="/services/" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-600">
              View all services & maintenance plans <Icon name="arrow" className="size-4" />
            </Link>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg shadow-navy-900/10">
            <div className="relative min-h-72 flex-1">
              <Image src={img("progress", 96014)} alt="Jake's Roofing crew installing a cedar shake roof" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="flex gap-4 bg-navy-900 p-7">
              <Icon name="shield" className="size-10 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-bold text-white">Protect Your Property</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  A well-built roof adds value, prevents costly damage and keeps your home or business safe through every West Coast winter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={img("residential", 79059)} alt="Craftsman home with triple garage, re-roofed by Jake's Roofing" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-tr-2xl rounded-bl-2xl bg-navy-900 px-6 py-4 text-white">
              <Icon name="home" className="size-7 text-brand" />
              <span className="text-sm font-semibold leading-tight">Local Experts.<br />Trusted by Homeowners.</span>
            </div>
          </div>

          <div className="relative">
            <SectionHeading
              eyebrow="About Us"
              title="Your Local Roofing Experts"
              text="Jake's Roofing Ltd. is owned by Ryan Jack, who spent years on the tools before running the company. We're a staffed local office with a dedicated, hourly-paid crew, and we've roofed hundreds of homes and many businesses across Parksville and Qualicum Beach."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Skilled, hourly-paid roofers", "Quality local materials", "Honest, transparent advice", "Clean, tidy job sites", "A+ rating with the BBB", "We recycle wherever possible"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-navy-800">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-navy-950">
                    <Icon name="checkSmall" className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/about/" className="btn-primary">More About Us</Link>
              <p className="-rotate-6 font-script text-3xl text-navy-700">Your roof is our priority!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="Build with Confidence" center light />
          <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {whyUs.map((w) => (
              <div key={w.title} className="px-6 text-center">
                <Icon name={w.icon} className="mx-auto size-10 text-brand" />
                <h3 className="mt-4 font-bold text-white">{w.title}</h3>
                <p className="mt-1.5 text-sm text-white/60">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_3fr] lg:items-center">
          <SectionHeading title="Our Simple Process" text="Getting a new roof is easier than you think." />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid size-14 place-items-center rounded-full border-2 border-navy-900/10 bg-white text-navy-900 shadow-sm">
                    <Icon name={p.icon} className="size-6" />
                  </span>
                  {i < process.length - 1 && <Icon name="arrow" className="hidden size-5 text-navy-700/40 lg:block lg:flex-1" />}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">
                  {i + 1}. {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/75">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roof viewer teaser */}
      <section className="pb-4">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-navy-900/10 bg-gradient-to-r from-mist to-white p-8 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-brand">
                <Icon name="image" className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy-900">See your new roof before it&apos;s built</h3>
                <p className="mt-1 text-sm text-navy-700/75">Upload a photo of your home and try different materials and colours with our suppliers&apos; free roof visualizers.</p>
              </div>
            </div>
            <Link href="/services/#roof-viewer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800">
              Try the Roof Viewer <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
