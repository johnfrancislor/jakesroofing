// Inline stroke icons (Lucide-style, 24x24) so the site has no icon dependency.
const paths = {
  home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-6h5v6" /></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
  award: <><circle cx="12" cy="9" r="5.5" /><path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" /></>,
  badge: <><path d="M12 2.5 14.6 4l3 .2.9 2.9 2.2 2-.9 2.9.9 2.9-2.2 2-.9 2.9-3 .2L12 21.5 9.4 20l-3-.2-.9-2.9-2.2-2 .9-2.9-.9-2.9 2.2-2 .9-2.9 3-.2L12 2.5Z" /><path d="m9 12 2 2 4-4" /></>,
  hardhat: <><path d="M3 18h18" /><path d="M4.5 18v-3a7.5 7.5 0 0 1 15 0v3" /><path d="M10 7.8V5.5h4v2.3" /><path d="M12 9.5v3" /></>,
  shakes: <><path d="M3 9h18M3 15h18" /><path d="M7 3v6M14 3v6M10 9v6M17 9v6M6 15v6M13 15v6M19 15v6" /><rect x="3" y="3" width="18" height="18" rx="2" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  flame: <><path d="M12 21c3.9 0 7-2.8 7-6.6 0-3.4-2.4-5.6-4.2-8.4-.6 2.2-1.6 3.4-3 4C12 7 10.6 4.6 8.5 3c.2 3.2-3.5 5.8-3.5 11.4C5 18.2 8.1 21 12 21Z" /></>,
  metal: <><path d="M3 20 12 4l9 16" /><path d="M7.5 12v8M12 4v16M16.5 12v8" /></>,
  tiles: <><path d="M3 8c1.5 2 3 2 4.5 0S10.5 6 12 8s3 2 4.5 0 3-2 4.5 0" /><path d="M3 14c1.5 2 3 2 4.5 0s3-2 4.5 0 3 2 4.5 0 3-2 4.5 0" /><path d="M3 20c1.5 2 3 2 4.5 0s3-2 4.5 0 3 2 4.5 0 3-2 4.5 0" /></>,
  wrench: <><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-2 2-1.3-1.3a4 4 0 0 1-5-5L5 16.5V19h2.5l7.7-7.7" /><path d="M14.7 6.3 17 4l3 3-2.3 2.3" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" /></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1" /><path d="M9 10h6M9 14h6M9 18h3" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M17.5 14.5A5 5 0 0 1 21.5 20" /></>,
  leaf: <><path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" /><path d="M5 19c3-4 6-7 10-9" /></>,
  phone: <><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  hammer: <><path d="m14 7-9.5 9.5a1.8 1.8 0 0 0 2.5 2.5L16.5 9.5" /><path d="m12 5 3-3 6 6-3 3-1.5-1.5L14 12l-2-2 2.5-2.5L12 5Z" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  checkSmall: <path d="m5 12 4.5 4.5L19 7" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  external: <><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
  quote: <><path d="M9 7H5v6h4v-6Zm0 6c0 2.5-1.5 4-4 4" /><path d="M19 7h-4v6h4v-6Zm0 6c0 2.5-1.5 4-4 4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m21 17-5-5-9 8" /></>,
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8Z" />,
};

export default function Icon({ name, className = "size-6", filled = false, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 1 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
