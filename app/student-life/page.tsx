import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Spotlight from "@/components/Spotlight";
import Marquee from "@/components/Marquee";
import { activities, events } from "@/lib/site";
import { stock } from "@/lib/images";

export const metadata: Metadata = {
  title: "Student Life",
  description: "NCC, scouts and guides, swimming, athletics, music, dance, Youth Parliament and the events that fill the year at Sharda Vidhya Mandir, Jaipur.",
};

export default function StudentLifePage() {
  return (
    <>
      <PageHero crumb="Student Life" title="Grow outside the classroom too" intro="Sport, stage, service and clubs, every week of the year." image={stock.dancersSteps} focus="50% 40%" />

      {/* Activities mosaic */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="Find your thing" intro="Clubs, teams and stage work that run alongside lessons." />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {activities.map((a, i) => (
              <Reveal as="li" key={a.name} delay={(i % 4) * 70}>
                <div className={`group relative overflow-hidden ${i % 5 === 0 ? "arch aspect-[3/4]" : "aspect-[3/4] rounded-[1.5rem]"}`}>
                  <Image src={a.image} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                  <p className="absolute inset-x-4 bottom-4 font-display text-xl font-semibold text-cream sm:text-2xl">{a.name}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Spotlight */}
      <section id="achievements" className="scroll-mt-24 bg-beige py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="Achievements and events" />
          <Spotlight />
        </div>
      </section>

      {/* Events calendar strip */}
      <section id="events" className="scroll-mt-24 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="The school year" intro="Highlights parents can look forward to. Dates are shared in circulars each term." />
          <ol className="divide-y divide-ink/15 border-y border-ink/15">
            {events.map((e) => (
              <Reveal as="li" key={e.title} className="group grid items-center gap-6 py-6 sm:grid-cols-[1fr_1.4fr_10rem]">
                <h3 className="font-display text-3xl font-semibold">{e.title}</h3>
                <p className="text-lg text-ink-soft">{e.text}</p>
                <div className="relative order-first h-44 overflow-hidden rounded-[1.5rem] sm:order-none sm:h-24 sm:rounded-full">
                  <Image src={e.image} alt="" fill sizes="160px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mt-24">
          <Marquee
            images={[
              { src: stock.track, alt: "Sports day" },
              { src: stock.soloDancer, alt: "Dance performance" },
              { src: stock.cricket, alt: "Cricket" },
              { src: stock.bhavai, alt: "Rajasthani folk dance" },
              { src: stock.scoutBadge, alt: "Scouts and guides" },
              { src: stock.stageGroup, alt: "Annual day" },
              { src: stock.boysLaughing, alt: "Friends on the field" },
              { src: stock.yogaGirl, alt: "Yoga and meditation" },
              { src: stock.planting, alt: "Planting saplings" },
              { src: stock.poolLanes, alt: "Swimming" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
