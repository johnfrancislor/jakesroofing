// Decorative moving layers. Server-rendered with deterministic values
// (no Math.random) so the markup is identical on every build.

// Diagonal rain streaks falling across a dark section
export function Rain({ drops = 36, className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: drops }, (_, i) => {
        const left = (i * 37) % 100;
        const dur = 0.9 + ((i * 7) % 10) / 10;
        const delay = -((i * 13) % 20) / 10;
        const h = 40 + ((i * 11) % 50);
        return (
          <span
            key={i}
            className="rain-drop absolute -top-24 w-px rounded-full bg-gradient-to-b from-transparent to-white/40"
            style={{ left: `${left}%`, height: h, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
          />
        );
      })}
    </div>
  );
}

// Slow-moving blurred colour blobs
export function Blobs({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <span className="anim-drift absolute -left-24 top-1/4 size-96 rounded-full bg-brand/15 blur-3xl" />
      <span className="anim-drift absolute -right-32 -top-20 size-[28rem] rounded-full bg-sky-400/10 blur-3xl" style={{ "--d": "-6s" }} />
      <span className="anim-drift absolute bottom-0 left-1/2 size-80 rounded-full bg-brand/10 blur-3xl" style={{ "--d": "-11s" }} />
    </div>
  );
}

// House outline that draws itself in
export function HouseLines({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 260" fill="none" className={`pointer-events-none ${className}`}>
      <path className="anim-draw" style={{ "--len": 700, "--d": "300ms" }} d="M10 130 200 14l190 116" stroke="#f6c330" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path className="anim-draw" style={{ "--len": 700, "--d": "900ms" }} d="M50 112v138h300V112" stroke="white" strokeOpacity=".35" strokeWidth="2" />
      <path className="anim-draw" style={{ "--len": 300, "--d": "1500ms" }} d="M170 250v-70h60v70" stroke="white" strokeOpacity=".35" strokeWidth="2" />
      <path className="anim-draw" style={{ "--len": 200, "--d": "1800ms" }} d="M90 150h45v40H90zM265 150h45v40h-45z" stroke="white" strokeOpacity=".25" strokeWidth="2" />
      <path className="anim-draw" style={{ "--len": 200, "--d": "1200ms" }} d="M290 70V30h28v58" stroke="white" strokeOpacity=".3" strokeWidth="2" />
    </svg>
  );
}

// Infinite horizontal scroller; children are rendered twice for a seamless loop
export function Marquee({ children, speed = "40s", reverse = false, className = "" }) {
  return (
    <div className={`marquee mask-x overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max" style={{ "--speed": speed, animationDirection: reverse ? "reverse" : "normal" }}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
