"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides, school } from "@/lib/site";
import { ArrowLeft, ArrowRight } from "./Icons";

const DURATION = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome to Sharda Vidhya Mandir"
      className="on-dark relative h-[100svh] min-h-[620px] overflow-hidden bg-ink text-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {heroSlides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${active ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          >
            <div key={active ? `on-${index}` : "off"} className={`absolute inset-0 ${active ? "animate-kenburns" : ""}`}>
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

            <div className="container-x relative flex h-full flex-col justify-end pb-56 sm:pb-44">
              <p className="display-xl max-w-[14ch]">
                {slide.title.map((line, l) => (
                  <span key={l} className="block overflow-hidden pb-[0.08em]">
                    <span
                      className="block transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)]"
                      style={{
                        transform: active ? "translateY(0)" : "translateY(110%)",
                        transitionDelay: active ? `${350 + l * 120}ms` : "0ms",
                      }}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </p>
              <p
                className="mt-6 max-w-md text-lg text-cream/85 transition-all duration-1000"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "none" : "translateY(12px)",
                  transitionDelay: active ? "700ms" : "0ms",
                }}
              >
                {slide.caption}
              </p>
            </div>
          </div>
        );
      })}

      {/* Bottom bar: CTAs, counter, progress */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container-x flex flex-wrap items-end justify-between gap-6 pb-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/admissions#enquire" className="btn btn-blue">
              Admission enquiry <ArrowRight />
            </Link>
            <Link href="/campus" className="btn btn-ghost-light hidden sm:inline-flex">
              Explore the campus
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <p className="font-display text-xl tabular-nums" aria-live="polite">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-cream/50">/</span>
              <span className="text-cream/60">{String(count).padStart(2, "0")}</span>
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(index - 1)} className="grid size-12 place-items-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-ink">
                <ArrowLeft />
                <span className="sr-only">Previous slide</span>
              </button>
              <button type="button" onClick={() => go(index + 1)} className="grid size-12 place-items-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-ink">
                <ArrowRight />
                <span className="sr-only">Next slide</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container-x grid gap-2 pb-6" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
          {heroSlides.map((s, i) => (
            <button key={i} type="button" onClick={() => go(i)} className="group py-2" aria-label={`Go to slide ${i + 1}`}>
              <span className="block h-[2px] overflow-hidden bg-cream/25">
                <span
                  key={i === index ? `p-${index}-${paused}` : `p-${i}`}
                  className={`block h-full origin-left bg-cream ${i < index ? "scale-x-100" : "scale-x-0"} ${
                    i === index && !paused ? "animate-progress" : ""
                  } ${i === index && paused ? "scale-x-100 opacity-60" : ""}`}
                  style={{ animationDuration: `${DURATION}ms` }}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      <h1 className="sr-only">
        {school.name}: a CBSE senior secondary school in Ambabari, Sikar Road, Jaipur
      </h1>
    </section>
  );
}
