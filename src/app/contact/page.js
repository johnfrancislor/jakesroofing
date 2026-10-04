import EstimateForm from "@/components/EstimateForm";
import Icon from "@/components/Icon";
import { PageHero } from "@/components/Sections";
import { img, site } from "@/lib/site";

export const metadata = {
  title: "Contact & Free Estimates",
  description: `Request a free roofing estimate from Jake's Roofing. Call ${site.phone} or visit us at 3810B Kriscott Road, Qualicum Beach.`,
};

export default function ContactPage() {
  const details = [
    { icon: "phone", label: "Phone / Fax", value: site.phone, href: site.phoneHref },
    { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "pin", label: "Office", value: `${site.address.line1}, ${site.address.line2}` },
    { icon: "mail", label: "Mailing address", value: site.address.mail },
    { icon: "clock", label: "Office hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Don't Delay, Call Today!"
        text="Free estimates for homes and businesses across Parksville, Qualicum Beach and Central Vancouver Island."
        image={img("progress", 96013)}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-6">
            <a href={site.phoneHref} className="block rounded-2xl bg-brand p-7 transition hover:bg-brand-600">
              <span className="text-sm font-bold uppercase tracking-wider text-navy-900/70">Call for your free estimate</span>
              <span className="mt-2 flex items-center gap-3 text-3xl font-extrabold text-navy-950">
                <Icon name="phone" className="size-7" /> {site.phone}
              </span>
            </a>

            <ul className="divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-white">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mist text-navy-900">
                    <Icon name={d.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-navy-700/60">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className="mt-0.5 block break-words font-semibold text-navy-900 hover:text-brand-600">{d.value}</a>
                    ) : (
                      <span className="mt-0.5 block font-semibold text-navy-900">{d.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-navy-900 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">Areas we serve</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.areas.map((a) => (
                  <li key={a} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85">{a}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-10">
            <p className="eyebrow">Free estimate</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900">Request Your Quote Today</h2>
            <p className="mt-3 text-navy-700/75">Tell us a little about your project and we&apos;ll get back to you during office hours.</p>
            <div className="mt-8">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-navy-900/10">
            <iframe
              title="Map to Jake's Roofing office"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`}
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
