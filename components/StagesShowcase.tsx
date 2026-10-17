"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { stages } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

/** Hover (or tap) a stage on the left and the arch image on the right changes. */
export default function StagesShowcase() {
  const [active, setActive] = useState(stages.length - 1);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <ul className="border-t border-ink/15">
        {stages.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.name} className="border-b border-ink/15">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={on}
                className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-6 text-left"
              >
                <span>
                  <span className={`block font-display text-3xl font-semibold transition-colors duration-500 sm:text-4xl ${on ? "text-ink" : "text-ink/40"}`}>
                    {s.name}
                  </span>
                  <span
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <span className="overflow-hidden">
                      <span className="mt-2 block text-ink-soft">{s.blurb}</span>
                    </span>
                  </span>
                </span>
                <span className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-500 ${on ? "bg-bluebell text-ink" : "bg-ink/5 text-ink/50"}`}>
                  {s.classes}
                </span>
              </button>
              {/* image inline on small screens */}
              <div className={`arch-sm relative overflow-hidden transition-all duration-700 lg:hidden ${on ? "mb-6 h-64 opacity-100" : "h-0 opacity-0"}`}>
                <Image src={s.image} alt="" fill sizes="90vw" className="object-cover" />
              </div>
            </li>
          );
        })}
        <li className="pt-8">
          <Link href="/academics" className="btn btn-ghost">
            Explore academics <ArrowUpRight />
          </Link>
        </li>
      </ul>

      <div className="relative hidden aspect-[4/5] lg:block">
        {stages.map((s, i) => (
          <div
            key={s.name}
            className={`arch absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
              i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
            }`}
          >
            <Image src={s.image} alt={`${s.name} students at SVM`} fill sizes="40vw" className="object-cover" />
          </div>
        ))}
        <p className="absolute -left-6 bottom-10 rounded-2xl bg-cream px-5 py-4 shadow-xl shadow-ink/10">
          <span className="block font-display text-3xl font-semibold">{stages[active].classes}</span>
          <span className="text-sm text-ink-soft">{stages[active].name}</span>
        </p>
      </div>
    </div>
  );
}
