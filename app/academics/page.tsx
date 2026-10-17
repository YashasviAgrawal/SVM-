import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";
import { school, stages } from "@/lib/site";
import { stock } from "@/lib/images";

export const metadata: Metadata = {
  title: "Academics",
  description: "CBSE curriculum from Nursery to Class XII at Sharda Vidhya Mandir, Jaipur, with Science, Commerce and Humanities in senior secondary.",
};

const streams = [
  { name: "Science", subjects: "Physics, Chemistry, Biology or Mathematics, English, plus an elective", image: stock.scienceTube },
  { name: "Commerce", subjects: "Accountancy, Business Studies, Economics, English, plus an elective", image: stock.computerClass },
  { name: "Humanities", subjects: "History, Political Science, Geography, Economics, English, plus an elective", image: stock.library },
];

const methods = [
  { title: "Smart classrooms", text: "32 classrooms with digital boards and Educomp Smart Class content.", image: stock.smartClass },
  { title: "Hands-on labs", text: "Physics, Chemistry, Biology, Maths and Geography labs, plus two computer labs.", image: stock.labRoom },
  { title: "Reading culture", text: "Two libraries with 10,756 books for every age group.", image: stock.bookshelf },
  { title: "Care for every learner", text: "A special educator and a wellness counsellor support children who need more.", image: stock.girlsAtDesk },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        crumb="Academics"
        title="Learning that builds, stage by stage"
        intro="CBSE curriculum, English medium, Nursery to Class XII."
        image={stock.girlsAtDesk}
      />

      {/* Stages, alternating */}
      <section className="py-24 sm:py-32">
        <div className="container-x space-y-24 sm:space-y-32">
          {stages.map((s, i) => (
            <div key={s.name} className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal variant="image" className={`relative aspect-[4/5] overflow-hidden md:aspect-[5/6] ${i % 2 ? "rounded-[2rem]" : "arch"}`}>
                <Image src={s.image} alt={`${s.name} at SVM`} fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover" />
              </Reveal>
              <Reveal delay={150}>
                <p className="inline-block rounded-full bg-bluebell px-4 py-1.5 text-sm font-bold">{s.classes}</p>
                <h2 className="display-lg mt-5">{s.name}</h2>
                <p className="mt-5 max-w-md text-xl leading-relaxed text-ink-soft">{s.blurb}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Streams */}
      <section className="on-dark bg-ink py-24 text-cream sm:py-32">
        <div className="container-x">
          <SectionHeading tone="light" title="Three streams after Class X" intro="Choose the path that fits your child. All three are taught by subject specialists." />
          <div className="grid gap-6 md:grid-cols-3">
            {streams.map((s, i) => (
              <Reveal key={s.name} delay={i * 120} className="group relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image src={s.image} alt="" fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="font-display text-4xl font-semibold">{s.name}</h3>
                  <p className="mt-3 text-cream/80">{s.subjects}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-cream/60">Subject combinations are confirmed each year by the school.</p>
        </div>
      </section>

      {/* How we teach */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="How we teach" />
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {methods.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 120} className="grid grid-cols-[7rem_1fr] items-center gap-6 sm:grid-cols-[9rem_1fr]">
                <div className="arch-sm relative aspect-[3/4]">
                  <Image src={m.image} alt="" fill sizes="160px" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-ink-soft">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="bg-beige py-24 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal variant="image" className="arch relative aspect-[4/5] w-full max-w-sm">
            <Image src={stock.assemblyPrayer} alt="Students at morning prayer" fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
          </Reveal>
          <Reveal>
            <h2 className="display-lg max-w-[16ch]">The school day</h2>
            <p className="mt-5 max-w-md text-lg text-ink-soft">Timings change with the season. The second Saturday of every month is a holiday.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {school.timings.map((t) => (
                <div key={t.season} className="rounded-[1.5rem] bg-cream p-6">
                  <p className="text-ink-soft">{t.season}</p>
                  <p className="mt-1 font-display text-3xl font-semibold">{t.hours}</p>
                </div>
              ))}
            </div>
            <Link href="/admissions" className="btn btn-ink mt-10">
              Start an admission <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
