import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Tilt from "@/components/Tilt";
import { Blobs, HouseLines, Marquee, Rain } from "@/components/Ambient";
import { CtaBand, RiseText, SectionHeading, Testimonials } from "@/components/Sections";
import { commercialClients, img, process, services, trust, whyUs } from "@/lib/site";

const materials = ["Cedar Shakes", "Asphalt Shingles", "Torch-On", "Snap-Lock Metal", "Concrete Tiles", "Roof Repairs", "Moss Removal", "Ventilation", "Gutters & Flashings"];

const stats = [
  { count: 19, suffix: "+", label: "Years serving the Island" },
  { count: 5, suffix: "-yr", label: "Transferable labour warranty" },
  { count: 100, suffix: "s", label: "Homes re-roofed locally" },
  { text: "A+", label: "Better Business Bureau rating" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image src="/images/hero-backdrop.webp" alt="" fill preload sizes="100vw" className="anim-ken-burns object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/40" />
        <Blobs className="-z-10" />
        <Rain className="-z-10" />
        <HouseLines className="absolute -bottom-6 left-[38%] -z-10 hidden w-[28rem] opacity-40 lg:block" />

        <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <p className="eyebrow anim-fade-up">Residential & Commercial Roofing</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <RiseText text="Quality Roofing for a Safer Tomorrow" start={150} step={80} highlight={["Safer", "Tomorrow"]} />
            </h1>
            <p className="anim-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/75" style={{ "--d": "650ms" }}>
              New and re-roof specialists serving Parksville, Qualicum Beach and the surrounding area for over 19 years. Honest advice, careful work and a roof built to last.
            </p>
            <div className="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "800ms" }}>
              <Link href="/contact/" className="btn-primary">
                <Icon name="clipboard" className="size-4" /> Get a Free Estimate
              </Link>
              <Link href="/services/" className="btn-ghost group">
                Our Services <Icon name="arrow" className="nudge size-4" />
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
              {trust.map((t, i) => (
                <li key={t.title} className="anim-fade-up group flex items-center gap-3 text-white" style={{ "--d": `${950 + i * 110}ms` }}>
                  <Icon name={t.icon} className="icon-pop size-7 shrink-0 text-brand" />
                  <span className="text-xs font-semibold leading-snug">{t.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="anim-fade-up relative mx-auto w-full max-w-md lg:max-w-none" style={{ "--d": "400ms" }}>
            <span aria-hidden="true" className="anim-spin-slow absolute -left-10 -top-10 size-40 rounded-full border-2 border-dashed border-brand/30" />
            <span aria-hidden="true" className="anim-float-x absolute -bottom-10 right-10 size-24 rounded-3xl bg-brand/20 blur-sm" />
            <Tilt>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl shadow-black/40">
                <Image src={img("residential", 79063)} alt="Craftsman home with a new roof by Jake's Roofing" fill preload sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>
            </Tilt>
            <div className="anim-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <span className="grid size-12 place-items-center rounded-xl bg-brand text-navy-950">
                <Icon name="badge" className="size-6" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-navy-900">5-Year Warranty</span>
                <span className="block text-xs text-navy-700/70">Transferable, on re-roofs</span>
              </span>
            </div>
            <div className="anim-float absolute -right-3 top-6 hidden rounded-2xl bg-navy-900/90 px-4 py-3 text-white shadow-xl backdrop-blur sm:block" style={{ "--d": "-2.5s" }}>
              <span className="block text-2xl font-extrabold text-brand">
                <span data-count="19">19</span>+
              </span>
              <span className="block text-xs text-white/70">Years serving<br />the Island</span>
            </div>
            <div className="anim-float absolute -right-6 bottom-24 hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-xl md:flex" style={{ "--d": "-1.2s" }}>
              <span className="flex text-brand">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" filled className="size-3.5" />)}
              </span>
              <span className="text-xs font-bold text-navy-900">BBB A+</span>
            </div>
          </div>
        </div>

        {/* Materials ticker */}
        <div className="border-y border-white/10 bg-navy-950/60 py-4 backdrop-blur">
          <Marquee speed="35s">
            {materials.map((m) => (
              <span key={m} className="flex items-center gap-6 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {m} <Icon name="home" className="size-4 text-brand" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 pt-12">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy-900/10 shadow-xl shadow-navy-900/10 lg:grid-cols-4" data-stagger="100">
            {stats.map((s) => (
              <div key={s.label} className="spotlight group bg-white px-6 py-7 text-center">
                <dt className="text-xs font-semibold uppercase tracking-wider text-navy-700/60">{s.label}</dt>
                <dd className="mt-2 text-4xl font-extrabold text-navy-900 transition group-hover:scale-110">
                  {s.text ?? (
                    <>
                      <span data-count={s.count}>{s.count}</span>
                      <span className="text-brand-600">{s.suffix}</span>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 pt-20 sm:pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Our Services"
              title="Complete Roofing Solutions"
              text="From small repairs to full re-roofs, we handle it all with quality workmanship and materials from local suppliers we trust."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-stagger="80">
              {services.slice(0, 6).map((s) => (
                <Link
                  href="/services/"
                  key={s.title}
                  className="spotlight lift group overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-6 hover:border-brand/60"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-brand/15 text-navy-900 transition duration-300 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/40">
                    <Icon name={s.icon} className="icon-pop size-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-700/75">{s.text}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-600 opacity-0 transition duration-300 group-hover:opacity-100">
                    Learn more <Icon name="arrow" className="nudge size-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div data-reveal="right" className="group flex flex-col overflow-hidden rounded-2xl shadow-lg shadow-navy-900/10">
            <div className="relative min-h-72 flex-1 overflow-hidden">
              <Image src={img("progress", 96014)} alt="Jake's Roofing crew installing a cedar shake roof" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-1000 group-hover:scale-110" />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-navy-900 shadow">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                Our crew at work
              </span>
            </div>
            <div className="flex gap-4 bg-navy-900 p-7">
              <Icon name="shield" className="icon-pop size-10 shrink-0 text-brand" />
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
      <section className="relative overflow-hidden bg-mist py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative" data-reveal="wipe">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={img("residential", 79059)} alt="Craftsman home with triple garage, re-roofed by Jake's Roofing" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 group-hover:scale-105" />
            </div>
            <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-tr-2xl rounded-bl-2xl bg-navy-900 px-6 py-4 text-white">
              <Icon name="home" className="size-7 text-brand" />
              <span className="text-sm font-semibold leading-tight">Local Experts.<br />Trusted by Homeowners.</span>
            </div>
            <div className="anim-float absolute -right-4 -top-4 hidden size-24 place-items-center rounded-full bg-brand text-center text-xs font-extrabold leading-tight text-navy-950 shadow-xl sm:grid">
              <span>
                <span className="block text-2xl">A+</span>BBB
              </span>
            </div>
          </div>

          <div className="relative">
            <SectionHeading
              eyebrow="About Us"
              title="Your Local Roofing Experts"
              text="Jake's Roofing Ltd. is owned by Ryan Jack, who spent years on the tools before running the company. We're a staffed local office with a dedicated, hourly-paid crew, and we've roofed hundreds of homes and many businesses across Parksville and Qualicum Beach."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2" data-stagger="70" data-stagger-type="left">
              {["Skilled, hourly-paid roofers", "Quality local materials", "Honest, transparent advice", "Clean, tidy job sites", "A+ rating with the BBB", "We recycle wherever possible"].map((item) => (
                <li key={item} className="group flex items-center gap-3 text-sm font-medium text-navy-800">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-navy-950 transition group-hover:scale-125">
                    <Icon name="checkSmall" className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6" data-reveal="up">
              <Link href="/about/" className="btn-primary">
                More About Us <Icon name="arrow" className="nudge size-4" />
              </Link>
              <p className="anim-float-x -rotate-6 font-script text-3xl text-navy-700">Your roof is our priority!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-16 sm:py-20">
        <div className="bg-dots absolute inset-0 -z-10" />
        <Blobs className="-z-10 opacity-60" />
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="Build with Confidence" center light />
          <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10" data-stagger="120" data-stagger-type="zoom">
            {whyUs.map((w, i) => (
              <div key={w.title} className="group px-6 text-center">
                <span className="anim-float mx-auto grid size-16 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition duration-300 group-hover:bg-brand group-hover:ring-brand" style={{ "--d": `${-i * 1.2}s` }}>
                  <Icon name={w.icon} className="icon-pop size-8 text-brand transition group-hover:text-navy-950" />
                </span>
                <h3 className="mt-5 font-bold text-white">{w.title}</h3>
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
          <SectionHeading eyebrow="How it works" title="Our Simple Process" text="Getting a new roof is easier than you think." />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line that fills in when the steps scroll into view */}
            <span aria-hidden="true" className="absolute left-7 right-7 top-7 hidden h-0.5 bg-navy-900/10 lg:block">
              <span data-reveal="wipe" className="block h-full bg-gradient-to-r from-brand to-brand-600" style={{ "--d": "300ms" }} />
            </span>
            {process.map((p, i) => (
              <li key={p.title} className="group relative" data-reveal="up" style={{ "--d": `${200 + i * 180}ms` }}>
                <span className="relative grid size-14 place-items-center rounded-full border-2 border-navy-900/10 bg-white text-navy-900 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-brand group-hover:bg-brand">
                  <Icon name={p.icon} className="icon-pop size-6" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-navy-900 text-[11px] font-bold text-brand">{i + 1}</span>
                </span>
                <h3 className="mt-4 font-bold text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/75">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Commercial clients ticker */}
      <section className="border-y border-navy-900/5 bg-white py-10">
        <p className="eyebrow mb-6 flex justify-center">Trusted by local businesses</p>
        <Marquee speed="55s">
          {commercialClients.map((c) => (
            <span key={c} className="mx-3 flex items-center gap-2 whitespace-nowrap rounded-full border border-navy-900/10 bg-mist px-5 py-2.5 text-sm font-semibold text-navy-800 transition hover:border-brand hover:bg-brand/10">
              <Icon name="building" className="size-4 text-brand-600" /> {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Roof viewer teaser */}
      <section className="pt-16">
        <div className="container-x">
          <Link
            href="/services/#roof-viewer"
            data-reveal="up"
            className="spotlight group flex flex-col items-start justify-between gap-6 rounded-2xl border border-navy-900/10 bg-gradient-to-r from-mist to-white p-8 transition hover:border-brand/60 sm:flex-row sm:items-center"
          >
            <div className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-brand transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon name="image" className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy-900">See your new roof before it&apos;s built</h3>
                <p className="mt-1 text-sm text-navy-700/75">Upload a photo of your home and try different materials and colours with our suppliers&apos; free roof visualizers.</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-brand group-hover:text-navy-950">
              Try the Roof Viewer <Icon name="arrow" className="nudge size-4" />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
