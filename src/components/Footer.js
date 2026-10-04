import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Locally owned roofing contractor serving Parksville, Qualicum Beach and the surrounding area for over 19 years.
          </p>
          <p className="mt-4 text-xs font-semibold text-white/50">Licensed & Insured · WCB Covered · BBB A+</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.title}>
                <Link href="/services/" className="hover:text-brand">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-brand">
                <Icon name="phone" className="size-5 shrink-0 text-brand" />
                <span className="font-semibold text-white">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-brand">
                <Icon name="mail" className="size-5 shrink-0 text-brand" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="pin" className="size-5 shrink-0 text-brand" />
              <span>{site.address.line1}<br />{site.address.line2}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="size-5 shrink-0 text-brand" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name} All rights reserved.</p>
          <p>Shakes · Shingles · Torch-On · Tile · Metal</p>
        </div>
      </div>
    </footer>
  );
}
