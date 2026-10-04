import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Jake's Roofing home">
      <svg viewBox="0 0 48 40" className="h-9 w-11 shrink-0" aria-hidden="true">
        <path d="M2 22 24 4l22 18" fill="none" stroke="#f6c330" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20 24 9l14 11v17H10Z" fill={light ? "#ffffff" : "#0b1d36"} />
        <rect x="20" y="25" width="8" height="12" rx="1" fill="#f6c330" />
      </svg>
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          JAKE&apos;S ROOFING
        </span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-navy-700/70"}`}>
          New &amp; Re-Roof Specialists
        </span>
      </span>
    </Link>
  );
}
