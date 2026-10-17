"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { school } from "@/lib/site";
import { stock, svm } from "@/lib/images";

/*
 * Mirrors the "shared vision" quote panel on the reference site.
 * These are the school's own published motto and mission. When the Principal and
 * Director send their messages and portraits, add them here as extra slides.
 */
const slides = [
  {
    quote: "Our mission is to open doors and open minds.",
    by: "The mission of Sharda Vidhya Mandir",
    note: "Written into the school's founding values",
    image: svm.campus,
  },
  {
    quote: "Service before self.",
    by: "School motto",
    note: `Carried by every SVM student since ${school.founded}`,
    image: stock.groupPhoto,
  },
  {
    quote: "Where modernity blends with tradition, and every child's talent is nurtured.",
    by: "Values at SVM",
    note: "Smart classrooms, Indian roots",
    image: stock.dancersSteps,
  },
];

export default function VisionQuotes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % slides.length), 8000);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section className="relative overflow-hidden bg-beige py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute -inset-4 arch bg-bluebell/50" aria-hidden />
          {slides.map((s, n) => (
            <div key={n} className={`arch absolute inset-0 transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}>
              <Image src={s.image} alt="" fill sizes="(min-width:1024px) 40vw, 90vw" className={`object-cover ${n === i ? "animate-kenburns" : ""}`} />
            </div>
          ))}
        </div>

        <div>
          <h2 className="mb-10 max-w-md text-lg font-semibold text-dusk">What we stand for</h2>
          <div className="relative min-h-[18rem] sm:min-h-[16rem]">
            {slides.map((s, n) => (
              <figure
                key={n}
                aria-hidden={n !== i}
                className={`absolute inset-0 transition-all duration-700 ${n === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
              >
                <svg viewBox="0 0 48 36" className="mb-6 h-9 w-12 text-bluebell" aria-hidden fill="currentColor">
                  <path d="M0 36V20C0 8 7 1 19 0v7c-6 1-9 5-9 11h9v18H0Zm29 0V20C29 8 36 1 48 0v7c-6 1-9 5-9 11h9v18H29Z" />
                </svg>
                <blockquote className="display-lg max-w-[20ch]">{s.quote}</blockquote>
                <figcaption className="mt-8">
                  <span className="block text-lg font-bold">{s.by}</span>
                  <span className="text-ink-soft">{s.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex gap-3">
            {slides.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Show statement ${n + 1}`}
                aria-pressed={n === i}
                className={`h-2.5 rounded-full transition-all duration-500 ${n === i ? "w-10 bg-ink" : "w-2.5 bg-ink/25 hover:bg-ink/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
