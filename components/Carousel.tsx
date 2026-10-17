"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "./Icons";

type Props = { children: ReactNode; label: string; controlsTone?: "ink" | "light" };

/** Horizontal scroll-snap track with arrow buttons and a progress line. Swipe-friendly on phones. */
export default function Carousel({ children, label, controlsTone = "ink" }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const light = controlsTone === "light";
  const btn = `grid size-12 place-items-center rounded-full border transition-colors disabled:opacity-30 ${
    light ? "border-cream/40 hover:bg-cream hover:text-ink" : "border-ink/25 hover:bg-ink hover:text-cream"
  }`;

  return (
    <div role="region" aria-label={label}>
      <div
        ref={track}
        onScroll={update}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-10 lg:scroll-px-10 lg:px-10"
      >
        {children}
      </div>
      <div className="mt-8 flex items-center gap-6">
        <div className={`relative h-[2px] flex-1 ${light ? "bg-cream/20" : "bg-ink/15"}`}>
          <span
            className={`absolute inset-y-0 left-0 w-1/4 transition-[left] duration-300 ${light ? "bg-cream" : "bg-ink"}`}
            style={{ left: `${progress * 75}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button type="button" className={btn} onClick={() => step(-1)} disabled={edges.start}>
            <ArrowLeft /><span className="sr-only">Scroll back</span>
          </button>
          <button type="button" className={btn} onClick={() => step(1)} disabled={edges.end}>
            <ArrowRight /><span className="sr-only">Scroll forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
