import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { committee, leadership, school, timeline } from "@/lib/site";
import { stock, svm } from "@/lib/images";

export const metadata: Metadata = {
  title: "About SVM",
  description: "The story, motto, mission and leadership of Sharda Vidhya Mandir, a CBSE school in Ambabari, Jaipur, since 1987.",
};

const values = [
  { title: "Service before self", text: "Our motto since day one. Students lead drives, camps and community work.", image: stock.groupPhoto },
  { title: "Modernity with tradition", text: "Smart classrooms and labs, with Indian music, dance and values at the core.", image: stock.dancers },
  { title: "Every talent nurtured", text: "Sport, arts and academics given equal care, so each child finds their strength.", image: stock.track },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Thirty-nine years of opening doors"
        intro="Founded in 1987 in Ambabari, Sharda Vidhya Mandir has grown alongside the families of north Jaipur."
        image={svm.campus}
      />

      {/* Story timeline */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="display-lg max-w-[12ch]">How SVM grew</h2>
              <p className="mt-6 max-w-md text-lg text-ink-soft">
                The school is run by the Sharda Vidhya Mandir Prabandh Samiti, registered in 1987.
              </p>
            </Reveal>
            <Reveal variant="image" className="arch relative mt-10 hidden aspect-[4/5] max-w-sm lg:block">
              <Image src={stock.amberFort} alt="Amber Fort, Jaipur" fill sizes="30vw" className="object-cover" />
            </Reveal>
          </div>

          <ol className="relative border-l-2 border-bluebell pl-8 sm:pl-12">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 60} className="relative grid items-center gap-5 pb-14 last:pb-0 sm:grid-cols-[1fr_9rem] sm:gap-8">
                <span className="absolute -left-[calc(2rem+9px)] top-3 size-4 rounded-full border-4 border-cream bg-dusk sm:-left-[calc(3rem+9px)]" aria-hidden />
                <div>
                  <p className="font-display text-5xl font-semibold text-dusk sm:text-6xl">{t.year}</p>
                  <p className="mt-3 max-w-md text-lg text-ink-soft">{t.text}</p>
                </div>
                <div className={`relative order-first aspect-[16/10] overflow-hidden sm:order-none sm:aspect-[4/5] ${i % 2 ? "rounded-[1.25rem]" : "arch-sm"}`}>
                  <Image src={t.image} alt="" fill sizes="(min-width:640px) 144px, 90vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="What guides us" intro={`Motto: ${school.motto}. Mission: ${school.mission}`} />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className={`relative aspect-[3/4] overflow-hidden ${i === 1 ? "arch" : "rounded-[1.75rem]"}`}>
                  <Image src={v.image} alt="" fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-lg text-ink-soft">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="School leadership" />
          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 120} className="group relative overflow-hidden rounded-[2rem] bg-mist">
                <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
                  {/* Replace with the leader's portrait when the school shares it */}
                  <div className="arch relative m-6 aspect-[3/4] bg-bluebell sm:mb-6 sm:mr-0">
                    <Image src={i === 0 ? stock.classTeacher : svm.campus} alt="" fill sizes="25vw" className="object-cover opacity-90 mix-blend-multiply" />
                    <span className="absolute inset-0 grid place-items-center font-display text-6xl font-semibold text-cream">
                      {l.name.split(" ").slice(1).map((w) => w[0]).join("")}
                    </span>
                  </div>
                  <div className="flex flex-col justify-end p-8 pt-0 sm:pt-8">
                    <p className="text-sm font-bold text-dusk">{l.role}</p>
                    <h3 className="mt-1 font-display text-3xl font-semibold">{l.name}</h3>
                    <p className="mt-2 text-ink-soft">{l.detail}</p>
                    <a href={`mailto:${i === 0 ? school.principalEmail : school.email}`} className="mt-6 font-bold text-dusk underline underline-offset-4">
                      Write to the {l.role.toLowerCase()}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 grid overflow-hidden rounded-[2rem] bg-beige lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[16rem]">
              <Image src={stock.assemblyPrayer} alt="Students at morning prayer" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-3xl font-semibold">Managing committee</h3>
              <p className="mt-2 text-ink-soft">Sharda Vidhya Mandir Prabandh Samiti, registered 1987</p>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-[1.25rem] bg-ink/10 sm:grid-cols-2">
                {committee.map((c) => (
                  <li key={c.name} className="flex items-center gap-4 bg-cream p-5 sm:odd:last:col-span-2">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-bluebell font-display text-sm font-semibold" aria-hidden>
                      {c.name.split(" ").slice(1).map((w) => w[0]).join("")}
                    </span>
                    <span>
                      <span className="block font-semibold">{c.name}</span>
                      <span className="text-sm text-ink-soft">{c.role}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Safety & policies */}
      <section className="on-dark bg-ink py-24 text-cream sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="display-lg max-w-[14ch]">A safe school, by policy and in practice</h2>
            <p className="mt-6 max-w-md text-lg text-cream/80">
              SVM has a POCSO committee, a grievance committee and an internal committee against sexual harassment, a special
              educator and a wellness counsellor. Parents can reach the grievance officer, Mr Anupam Kumar Shah, directly.
            </p>
            <a href={`mailto:${school.email}`} className="btn btn-blue mt-8">Contact the grievance officer</a>
          </Reveal>
          <Reveal variant="image" className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={stock.youngClass} alt="Young students in a classroom" fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
