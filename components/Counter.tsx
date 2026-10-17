"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  decimals?: number;
  suffix?: string;
  format?: "indian" | "plain";
  duration?: number;
};

/** Counts up from zero the first time it scrolls into view. */
export default function Counter({ value, decimals = 0, suffix = "", format = "indian", duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value); // render the final value on the server / without JS

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const from = format === "plain" ? Math.max(0, value - 60) : 0;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setN(from + (value - from) * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, format]);

  const shown =
    format === "plain"
      ? Math.round(n).toString()
      : n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      {suffix}
    </span>
  );
}
