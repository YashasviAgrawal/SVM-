import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import VisionQuotes from "@/components/VisionQuotes";
import StagesShowcase from "@/components/StagesShowcase";
import QuickLinks from "@/components/QuickLinks";
import VideoFeature from "@/components/VideoFeature";
import Carousel from "@/components/Carousel";
import Spotlight from "@/components/Spotlight";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ArrowUpRight, Instagram } from "@/components/Icons";
import { facilities, school, stats } from "@/lib/site";
import { gallery, stock, svm } from "@/lib/images";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* ── Introduction + numbers ── */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="display-lg max-w-[15ch]">A Jaipur school that has grown with its families since 1987</h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft">
              From a single building in Ambabari to two campuses and about 2,200 students, Sharda Vidhya Mandir has kept
              one promise: a school where children are known by name, taught with care and encouraged to serve.
            </p>
            <Link href="/about" className="btn btn-ink mt-10">
              Our story <ArrowRight />
            </Link>
          </Reveal>

          <div className="relative mx-auto w-full max-w-lg">
            <Reveal variant="image" className="arch relative aspect-[4/5]">
              <Image src={svm.campus} alt="The Sharda Vidhya Mandir building, Ambabari" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            </Reveal>
            <Reveal delay={250} className="absolute -bottom-10 -left-4 w-[46%] sm:-left-12">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border-8 border-cream">
                <Image src={stock.boyOnBench} alt="A student in uniform on campus" fill sizes="240px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={400} className="absolute -right-2 top-10 sm:-right-8">
              <p className="grid size-32 place-items-center rounded-full bg-bluebell text-center font-display leading-tight shadow-xl shadow-ink/10 sm:size-36">
                <span>
                  <span className="block text-4xl font-semibold">39</span>
                  <span className="text-sm">years of SVM</span>
                </span>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="container-x mt-28">
          <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-16">
            <Image src={stock.assemblyPrayer} alt="" fill sizes="(min-width:1312px) 1230px, 100vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/35" />
            <ul className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((s, i) => (
                <Reveal as="li" key={s.label} delay={i * 80} className="px-2 lg:border-l lg:border-cream/20 lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                  <p className="font-display text-5xl font-semibold">
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} format={s.format === "plain" ? "plain" : "indian"} />
                  </p>
                  <p className="mt-2 text-cream/80">{s.label}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <VisionQuotes />

      {/* ── Learning stages (like the reference site's campus list) ── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            title="Nursery to Class XII, on one campus"
            intro="Five stages, one CBSE pathway. Hover a stage to look inside."
          />
          <StagesShowcase />
        </div>
      </section>

      {/* ── Quick links ── */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x">
          <QuickLinks />
        </div>
      </section>

      {/* ── Life at SVM video ── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <VideoFeature
            videoId={school.inspectionVideoId}
            cover={stock.boysAtTable}
            title="Life at SVM"
            subtitle="Walk through our classrooms, labs, grounds and pool in this short campus film."
          />
        </div>
      </section>

      {/* ── Campus facilities ── */}
      <section className="on-dark overflow-hidden bg-ink py-24 text-cream sm:py-32">
        <div className="container-x">
          <SectionHeading
            tone="light"
            title="Nine acres of room to learn and play"
            intro="Labs, libraries, a swimming pool and open fields, all within one gate."
            action={
              <Link href="/campus" className="btn btn-ghost-light shrink-0">
                Tour the campus <ArrowUpRight />
              </Link>
            }
          />
          <Carousel label="Campus facilities" controlsTone="light">
            {facilities.map((f, i) => (
              <figure key={f.name} className="group w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[28%]">
                <div className={`relative overflow-hidden ${i % 2 === 0 ? "arch aspect-[3/4]" : "aspect-[3/4] rounded-[1.75rem]"}`}>
                  <Image src={f.image} alt={f.name} fill sizes="(min-width:1024px) 28vw, 78vw" className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-5 bottom-5">
                    <span className="block font-display text-2xl font-semibold">{f.name}</span>
                    <span className="text-sm text-cream/80">{f.detail}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ── In the spotlight ── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            title="In the spotlight"
            intro="Results, toppers and the events that fill our school year."
            action={
              <Link href="/results" className="btn btn-ghost shrink-0">
                All results <ArrowUpRight />
              </Link>
            }
          />
          <Spotlight />
        </div>
      </section>

      {/* ── Admissions band ── */}
      <section className="relative overflow-hidden bg-beige py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="display-lg max-w-[14ch]">Planning admission for 2027-28?</h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              We admit from Nursery to Class XI. Send an enquiry and our office will call you to plan a campus visit.
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-2 gap-6">
              <div className="rounded-2xl bg-cream p-5">
                <dt className="text-sm text-ink-soft">Fee from</dt>
                <dd className="mt-1 font-display text-2xl font-semibold sm:text-3xl">₹45,000<span className="text-base font-normal text-ink-soft"> / year</span></dd>
              </div>
              <div className="rounded-2xl bg-cream p-5">
                <dt className="text-sm text-ink-soft">Office hours</dt>
                <dd className="mt-1 font-display text-2xl font-semibold sm:text-3xl">8:30 – 1</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/admissions#enquire" className="btn btn-ink">
                Send an enquiry <ArrowRight />
              </Link>
              <Link href="/admissions#fees" className="btn btn-ghost">
                See the fee structure
              </Link>
            </div>
          </Reveal>

          <div className="relative mx-auto w-full max-w-md pb-14">
            <Reveal variant="image" className="arch relative aspect-[4/5]">
              <Image src={stock.family} alt="A family together" fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
            </Reveal>
            <Reveal delay={250} className="absolute bottom-0 -left-2 z-10 w-[80%] rotate-[-4deg] rounded-[1.25rem] bg-cream p-2 shadow-2xl shadow-ink/25 transition-transform duration-700 hover:rotate-0 sm:-left-14">
              <div className="relative aspect-[11/6] overflow-hidden rounded-[0.9rem]">
                <Image src={svm.pamphlet} alt="SVM Kids admission pamphlet" fill sizes="(min-width:1024px) 28vw, 75vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Moments marquee ── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            title="Moments from the year"
            action={
              <Link href="/gallery" className="btn btn-ghost shrink-0">
                Open the gallery <ArrowUpRight />
              </Link>
            }
          />
        </div>
        <Marquee images={gallery.filter((g) => !g.contain).slice(0, 12)} />
      </section>

      {/* ── Follow our stories ── */}
      <section className="pb-24 sm:pb-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <h2 className="display-lg max-w-[10ch]">Follow our stories</h2>
            <p className="mt-6 max-w-sm text-lg text-ink-soft">
              Daily life at SVM, shared on Instagram at{" "}
              <a href={school.social.instagram} target="_blank" rel="noreferrer" className="font-bold text-dusk underline underline-offset-4">
                {school.social.instagramHandle}
              </a>
            </p>
            <a href={school.social.instagram} target="_blank" rel="noreferrer" className="btn btn-ink mt-8">
              <Instagram /> Follow on Instagram
            </a>
          </Reveal>
          <ul className="grid grid-cols-3 gap-3">
            {[stock.bhavai, stock.cricket, stock.scoutsMap, stock.musicKids, stock.girlAtBoard, stock.poolOutdoor].map((src, i) => (
              <Reveal as="li" key={src + i} delay={i * 70}>
                <a
                  href={school.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-[1.25rem] bg-mist"
                >
                  <Image src={src} alt="" fill sizes="(min-width:1024px) 18vw, 32vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute inset-0 grid place-items-center bg-ink/50 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Instagram width={28} height={28} />
                  </span>
                  <span className="sr-only">View on Instagram</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
