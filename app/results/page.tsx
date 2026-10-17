import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { results } from "@/lib/site";
import { stock, svm } from "@/lib/images";

export const metadata: Metadata = {
  title: "Board Results & Toppers",
  description: "CBSE Class X and Class XII board results at Sharda Vidhya Mandir, Jaipur: 100% Class X results in 2024, 2025 and 2026.",
};

function ResultBars({ title, image, rows }: { title: string; image: string; rows: { year: string; appeared: number; passed: number }[] }) {
  return (
    <Reveal className="overflow-hidden rounded-[2rem] bg-cream">
      <div className="on-dark relative flex aspect-[16/7] items-end bg-ink p-8 text-cream sm:p-10">
        <Image src={image} alt="" fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        <h3 className="relative font-display text-4xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-7 p-8 sm:p-10">
        {rows.map((r) => {
          const pct = (r.passed / r.appeared) * 100;
          return (
            <li key={r.year}>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <span className="font-semibold">{r.year}</span>
                <span className="font-display text-3xl font-semibold tabular-nums">{pct % 1 === 0 ? pct : pct.toFixed(2)}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-mist">
                <div className="h-full origin-left rounded-full bg-dusk transition-transform duration-[1600ms] ease-out [.is-visible_&]:scale-x-100 scale-x-0" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-sm text-ink-soft">{r.passed} of {r.appeared} students passed</p>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}

export default function ResultsPage() {
  return (
    <>
      <PageHero crumb="Results" title="100% in Class X, three years running" intro="CBSE board results as published in our mandatory disclosure." image={stock.girlInClass} />

      <section className="bg-beige py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="Board results" />
          <div className="grid gap-6 lg:grid-cols-2">
            <ResultBars title="Class X" image={stock.newspaperReaders} rows={results.classX} />
            <ResultBars title="Class XII" image={stock.classTeacher} rows={results.classXII} />
          </div>
        </div>
      </section>

      <section id="toppers" className="scroll-mt-24 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="Our 2024-25 toppers" intro="Tap a poster to see it full size." />
          <Reveal>
            <GalleryGrid
              cols="columns-1 sm:columns-2"
              images={[
                { src: svm.toppersX, alt: "Class X toppers 2024-25", contain: true },
                { src: svm.toppersXII, alt: "Class XII Science and Commerce toppers 2024-25", contain: true },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-ink py-24 text-cream">
        <Image src={stock.library} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="container-x relative">
          <h2 className="display-lg max-w-[18ch]">Behind every result is a student who kept going, and a teacher who kept faith</h2>
        </div>
      </section>
    </>
  );
}
