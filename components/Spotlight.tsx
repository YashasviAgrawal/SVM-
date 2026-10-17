"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { achievements, events } from "@/lib/site";
import Carousel from "./Carousel";
import { ArrowRight } from "./Icons";

type Item = { title: string; text: string; image: string; href?: string; contain?: boolean };

const tabs: { id: string; label: string; items: Item[] }[] = [
  { id: "achievements", label: "Achievements", items: achievements },
  { id: "events", label: "Events", items: events.map((e) => ({ ...e, href: "/student-life#events" })) },
];

export default function Spotlight() {
  const [tab, setTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === tab)!;

  return (
    <div>
      <div role="tablist" aria-label="Spotlight" className="mb-10 inline-flex rounded-full bg-ink/5 p-1.5">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={t.id === tab}
            aria-controls={`panel-${t.id}`}
            id={`tab-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-6 py-2.5 text-[15px] font-bold transition-colors duration-300 ${
              t.id === tab ? "bg-ink text-cream" : "text-ink/60 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} key={current.id} className="animate-[fadeUp_.7s_cubic-bezier(.22,1,.36,1)]">
        <Carousel label={current.label}>
          {current.items.map((item, i) => (
            <article key={`${item.title}-${i}`} className="group w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
              <Link href={item.href ?? "#"} className="block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink/10">
                  {/* posters keep their full layout; a blurred copy fills the rest of the frame */}
                  {item.contain && <Image src={item.image} alt="" fill sizes="96px" className="scale-125 object-cover blur-2xl" aria-hidden />}
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 80vw"
                    className={`transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${item.contain ? "object-contain p-3" : "object-cover"}`}
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-bold text-dusk">
                  Read more <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
