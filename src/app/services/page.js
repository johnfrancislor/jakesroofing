import Image from "next/image";
import Icon from "@/components/Icon";
import { Rain } from "@/components/Ambient";
import { CtaBand, PageHero, SectionHeading } from "@/components/Sections";
import { img, maintenance, roofViewers, services } from "@/lib/site";

export const metadata = {
  title: "Roofing Services",
  description:
    "Cedar shakes, asphalt shingles, torch-on, metal and concrete tile roofing, plus scheduled roof maintenance and repairs in Parksville and Qualicum Beach.",
};

const systems = [
  { title: "Cedar Shakes", image: img("progress", 96015), text: "A classic, attractive alternative to standard asphalt shingles, with natural West Coast character." },
  { title: "Asphalt Shingles", image: img("residential", 79071), text: "Available in a variety of colours and warranties. New fiberglass shingles have a Class A fire rating." },
  { title: "Torch-On", image: img("maintenance", 79087), text: "Commonly used to replace tar & gravel roofs. Torch-on is durable and fully waterproof." },
  { title: "Metal", image: img("progress", 79109), text: "Snap-lock metal (hidden fasteners) and traditional metal in assorted colours and grades." },
  { title: "Concrete Tiles", image: img("residential", 79070), text: "A great way to express a unique design with a polished, long-lasting look." },
  { title: "Repairs & Maintenance", image: img("maintenance", 79095), text: "Moss removal, ventilation, leak repairs and scheduled inspections to extend roof life." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Roof System, Done Right"
        text="New construction and re-roofing for homes and businesses. Shakes, shingles, torch-on, tile and metal."
        image={img("progress", 79108)}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Roofing systems"
            title="Specialists in New & Re-Roofing"
            text="Residential and commercial. Every estimate includes a professional opinion on the right product, ventilation and installation for your building."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger="100">
            {systems.map((s, i) => (
              <article key={s.title} className="spotlight lift group overflow-hidden rounded-2xl border border-navy-900/10 bg-white hover:border-brand/60">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={s.image} alt={`${s.title} roofing`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 grid size-9 place-items-center rounded-full bg-white/95 text-xs font-extrabold text-navy-900 shadow transition duration-500 group-hover:rotate-[360deg] group-hover:bg-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900 transition group-hover:text-brand-600">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{s.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4" data-stagger="90" data-stagger-type="zoom">
            {services.filter((s) => ["home", "building", "wrench", "flame"].includes(s.icon)).map((s) => (
              <div key={s.title} className="spotlight group bg-mist p-6 transition hover:bg-white">
                <Icon name={s.icon} className="icon-pop size-7 text-brand-600" />
                <h3 className="mt-3 font-bold text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-navy-700/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance program */}
      <section id="maintenance" className="relative isolate scroll-mt-28 overflow-hidden bg-navy-900 py-20 sm:py-24">
        <div className="bg-dots absolute inset-0 -z-10" />
        <Rain drops={20} className="-z-10 opacity-40" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Central Island Roof Maintenance"
              title="Add Years to the Life of Your Roof"
              text="Protect and prevent. Our scheduled spring & fall inspections catch small problems before they become expensive ones."
              light
            />
            <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-white">Your scheduled inspection can include</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2" data-stagger="70" data-stagger-type="left">
              {maintenance.includes.map((m) => (
                <li key={m} className="group flex gap-3 text-sm text-white/80 transition hover:text-white">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-navy-950 transition group-hover:scale-125">
                    <Icon name="checkSmall" className="size-3" />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-white">Perfect for</h3>
            <ul className="mt-4 flex flex-wrap gap-2" data-stagger="50" data-stagger-type="zoom">
              {maintenance.idealFor.map((m) => (
                <li key={m} className="cursor-default rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-navy-950">{m}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3" data-stagger="120" data-stagger-type="zoom">
              {[79086, 79089, 79097, 79093].map((id, i) => (
                <div key={id} className={`group relative aspect-square overflow-hidden rounded-xl ${i % 2 ? "sm:translate-y-6" : ""}`}>
                  <Image src={img("maintenance", id)} alt="Roof maintenance issue found during inspection" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-lg bg-navy-950/80 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Caught during inspection
                  </span>
                </div>
              ))}
            </div>
            <figure data-reveal="up" className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10">
              <blockquote className="text-sm leading-relaxed text-white/80">
                &ldquo;Other companies told us the roof could not be cleaned, but needed replacing at quite a high cost. I thank Jake for being an honest business man and informing us that our roof still has a number of years left in it.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-bold text-brand">Celia Myers, Parksville BC</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Roof viewer */}
      <section id="roof-viewer" className="scroll-mt-28 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Roof Viewer"
            title="Preview Your New Roof Online"
            text="Use these free tools from our suppliers. Upload a picture of your home and see exactly what your roof could look like. Try different materials and colours until you find the perfect look."
            center
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2" data-stagger="140">
            {roofViewers.map((v) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight lift group flex flex-col rounded-2xl border border-navy-900/10 p-7 hover:border-brand"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand/15 text-navy-900 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand">
                  <Icon name="image" className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{v.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/75">{v.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-900 group-hover:text-brand-600">
                  <span className="link-grow">Open tool</span> <Icon name="external" className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
