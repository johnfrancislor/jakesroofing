"use client";

import { useRef } from "react";

// Tilts its content in 3D toward the pointer (mouse/pen only)
export default function Tilt({ children, max = 8, className = "" }) {
  const ref = useRef(null);

  function onMove(e) {
    if (e.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale(1.02)`;
  }

  function reset() {
    ref.current.style.transform = "";
  }

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className={`transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}
