import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Counter from "@/components/Counter";
import VideoFeature from "@/components/VideoFeature";
import { facilities, school } from "@/lib/site";
import { stock, svm } from "@/lib/images";

export const metadata: Metadata = {
  title: "Campus & Facilities",
  description: "A 9.9-acre campus in Ambabari, Jaipur with a swimming pool, science and computer labs, two libraries, 32 smart classrooms and school transport.",
};

const numbers = [
  { value: 9.9, decimals: 1, label: "acres of campus" },
  { value: 39, label: "classrooms" },
  { value: 75, label: "computers" },
  { value: 200, suffix: " Mbps", label: "campus Wi-Fi" },
];

export default function CampusPage() {
  const [feature, ...rest] = facilities;
  return (
    <>
      <PageHero crumb="Campus" title="A campus made for big days" intro="Open fields, a pool, labs and libraries in Ambabari." image={stock.poolLanes} />

      {/* Numbers */}
      <section className="pt-16 sm:pt-20">
        <div className="container-x">
          <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-16">
            <Image src={stock.yogaGround} alt="" fill sizes="(min-width:1312px) 1230px, 100vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/55" />
            <ul className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
              {numbers.map((n) => (
                <li key={n.label}>
                  <p className="whitespace-nowrap font-display text-4xl font-semibold sm:text-5xl"><Counter value={n.value} decimals={n.decimals} suffix={n.suffix} /></p>
                  <p className="mt-1 text-cream/80">{n.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bento of facilities */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="Everything within one gate" />
          <div className="grid auto-rows-[18rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="group relative overflow-hidden rounded-[2rem] sm:col-span-2 sm:row-span-2">
              <Image src={feature.image} alt={feature.name} fill sizes="(min-width:640px) 50vw, 90vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 text-cream">
                <h3 className="display-md">{feature.name}</h3>
                <p className="mt-2 text-cream/80">{feature.detail}, right on campus.</p>
              </div>
            </Reveal>
            {rest.map((f, i) => (
              <Reveal key={f.name} delay={(i % 4) * 80} className={`group relative overflow-hidden rounded-[2rem] ${i === 2 ? "lg:row-span-2" : ""}`}>
                <Image src={f.image} alt={f.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-cream">
                  <h3 className="font-display text-2xl font-semibold">{f.name}</h3>
                  <p className="text-sm text-cream/80">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative w-full max-w-md pb-10 pr-10 sm:pb-0">
            <Reveal variant="image" className="arch relative aspect-[4/5]">
              <Image src={stock.jaipurBus} alt="A yellow school bus passing Hawa Mahal, Jaipur" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            </Reveal>
            <Reveal delay={250} className="absolute -bottom-2 right-0 w-[48%] sm:-right-12 sm:bottom-8">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border-8 border-beige">
                <Image src={stock.schoolBus} alt="School bus" fill sizes="240px" className="object-cover" />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <h2 className="display-lg max-w-[13ch]">School buses across north Jaipur</h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              SVM buses run on routes across north Jaipur, as far out as Chomu. The transport fee depends on your route.
            </p>
            <a href={`tel:${school.phones[0].tel}`} className="btn btn-ink mt-8">Ask for the route list</a>
          </Reveal>
        </div>
      </section>

      {/* Video + gallery */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <VideoFeature videoId={school.inspectionVideoId} cover={svm.campus} title="Walk through SVM" subtitle="The campus film recorded for the CBSE inspection." />
          <div className="mt-24">
            <SectionHeading title="Around the campus" />
            <GalleryGrid
              images={[
                { src: svm.campus, alt: "Main building" },
                { src: stock.library, alt: "Library", tall: true },
                { src: stock.lab, alt: "Science lab" },
                { src: stock.poolOutdoor, alt: "Swimming pool", tall: true },
                { src: stock.track, alt: "Athletics track" },
                { src: stock.computerLab, alt: "Computer lab" },
                { src: stock.smartClass, alt: "Smart classroom" },
                { src: stock.stageGroup, alt: "Auditorium stage", tall: true },
                { src: stock.playground, alt: "Junior playground" },
                { src: stock.bookshelf, alt: "Book stacks", tall: true },
                { src: stock.labRoom, alt: "Chemistry lab" },
                { src: stock.schoolBus, alt: "School bus", tall: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
