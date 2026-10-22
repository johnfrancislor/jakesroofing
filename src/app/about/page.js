import Image from "next/image";
import Icon from "@/components/Icon";
import { Blobs } from "@/components/Ambient";
import { CtaBand, PageHero, SectionHeading, Testimonials } from "@/components/Sections";
import { commercialClients, img, site, trust } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: "Meet Jake's Roofing Ltd., a locally owned roofing company serving Parksville and Qualicum Beach, owned by Ryan Jack.",
};

const values = [
  {
    icon: "users",
    title: "Hourly-paid crew, with benefits",
    text: "Most roofers are paid piece-work, which encourages rushing and cutting corners. Our employees are paid by the hour with a benefit package, so the job is done right the first time.",
  },
  {
    icon: "search",
    title: "An expert eye on every job",
    text: "Because Ryan has worked for many years on the tools, he looks at all aspects of the job: hazards, landscaping, framing, ventilation and the right product for your roof.",
  },
  {
    icon: "leaf",
    title: "Local & responsible",
    text: "We support local suppliers who provide quality materials, recycle wherever possible, and contribute to local charities.",
  },
  {
    icon: "shield",
    title: "Here for the long term",
    text: "A staffed office ready to take your calls, A+ with the BBB, in good standing with WCB, and a 5-year transferable labour warranty on re-roofs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Jake's Roofing"
        title="Built on Honest Work & Word of Mouth"
        text="Our goal is to build lasting relationships and provide the ongoing service you need for the maximum lifespan of your roof."
        image={img("residential", 79064)}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative isolate lg:sticky lg:top-32">
            <span aria-hidden="true" className="anim-spin-slow absolute -left-8 -top-8 -z-10 size-36 rounded-full border-2 border-dashed border-brand/40" />
            <div className="grid grid-cols-2 gap-4" data-stagger="140" data-stagger-type="zoom">
              <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src={img("progress", 96013)} alt="Crew installing a new cedar shake roof" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition duration-1000 group-hover:scale-110" />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image src={img("progress", 79108)} alt="New black standing seam metal roof" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover transition duration-1000 group-hover:scale-110" />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image src={img("commercial", 79048)} alt="Pharmasave building in Qualicum Beach" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover transition duration-1000 group-hover:scale-110" />
              </div>
            </div>
            <div className="anim-float absolute -bottom-5 right-6 flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-xs font-bold text-white shadow-xl">
              <Icon name="users" className="size-4 text-brand" /> Hourly-paid crew, with benefits
            </div>
          </div>

          <div>
            <p className="eyebrow" data-reveal="up">A note from the owner</p>
            <h2 data-reveal="up" style={{ "--d": "80ms" }} className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Hello, I&apos;m {site.owner}.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-navy-700/85" data-stagger="90">
              <p>
                I&apos;m the owner of Jake&apos;s Roofing Ltd., and I take pride in knowing our company has made a difference in the field of roofing. We employ several people, contribute to local charities, and continue to grow with a dedicated team that provides the very best customer service.
              </p>
              <p>
                Jake&apos;s Roofing has done roofs for many businesses as well as homeowners in our district: hundreds of residential homes in the Qualicum–Parksville area, and thousands of repairs on commercial and residential buildings over the years.
              </p>
              <p>
                We&apos;re picky about the products we use and the people we hire to install them. When you call for a free estimate, you&apos;re also getting a professional opinion on products, ventilation and installation of your preferred roofing system.
              </p>
              <p>
                We count on our customers to tell their friends, family and neighbours about us. That&apos;s how Jake&apos;s Roofing has grown into the company it is today. Thanks for considering Jake&apos;s for your roofing needs.
              </p>
            </div>
            <p data-reveal="left" className="mt-6 font-script text-3xl text-navy-800">— {site.owner}</p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2" data-stagger="110">
              {values.map((v) => (
                <div key={v.title} className="spotlight lift group rounded-2xl border border-navy-900/10 bg-white p-6 hover:border-brand/60">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand/15 transition duration-300 group-hover:bg-brand">
                    <Icon name={v.icon} className="icon-pop size-6 text-navy-900" />
                  </span>
                  <h3 className="mt-3 font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-900 py-16">
        <div className="bg-dots absolute inset-0 -z-10" />
        <Blobs className="-z-10 opacity-60" />
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4" data-stagger="110">
          {trust.map((t, i) => (
            <div key={t.title} className="group flex items-start gap-4">
              <span className="anim-float grid size-14 shrink-0 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-brand" style={{ "--d": `${-i}s` }}>
                <Icon name={t.icon} className="icon-pop size-7 text-brand transition group-hover:text-navy-950" />
              </span>
              <div>
                <h3 className="font-bold text-white">{t.title}</h3>
                <p className="mt-1 text-sm text-white/60">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Trusted by local businesses"
            title="Some of Our Commercial Clients"
            text="From Qualicum Beach storefronts to municipal water reservoirs, local businesses rely on Jake's Roofing."
            center
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-stagger="40" data-stagger-type="zoom">
            {commercialClients.map((c) => (
              <li key={c} className="group flex items-center gap-3 rounded-xl bg-mist px-4 py-3.5 text-sm font-semibold text-navy-800 transition duration-300 hover:-translate-y-1 hover:bg-navy-900 hover:text-white hover:shadow-lg">
                <Icon name="building" className="icon-pop size-5 shrink-0 text-brand-600 group-hover:text-brand" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
