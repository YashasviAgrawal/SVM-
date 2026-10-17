import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import { Phone, Whatsapp } from "@/components/Icons";
import { admissionDocuments, admissionSteps, faqs, fees, school } from "@/lib/site";
import { stock, svm } from "@/lib/images";

export const metadata: Metadata = {
  title: "Admissions 2027-28",
  description: "Admission process, documents and fee structure for Sharda Vidhya Mandir, a CBSE school on Sikar Road, Jaipur. Send an admission enquiry online.",
};

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        title="Join the SVM family"
        intro="Five simple steps from your first call to your child's first day."
        image={stock.family}
        focus="50% 35%"
      />

      {/* Steps — a real sequence, so numbered */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="How admission works" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-mist">
                <div className="arch-sm relative m-2 mb-0 aspect-[4/3]">
                  <Image src={s.image} alt="" fill sizes="(min-width:1024px) 20vw, (min-width:640px) 45vw, 90vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <span className="absolute bottom-3 left-3 grid size-12 place-items-center rounded-full bg-cream font-display text-2xl font-semibold text-dusk shadow-lg shadow-ink/15">
                    {i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="on-dark scroll-mt-20 bg-ink py-24 text-cream sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="display-lg max-w-[12ch]">Send an admission enquiry</h2>
            <p className="mt-6 max-w-sm text-lg text-cream/80">The office calls back within one working day to answer questions and fix a campus visit.</p>
            <div className="mt-10 space-y-3">
              <a href={`tel:${school.phones[2].tel}`} className="flex items-center gap-3 text-lg font-semibold hover:text-bluebell">
                <Phone /> {school.phones[2].display}
              </a>
              <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg font-semibold hover:text-bluebell">
                <Whatsapp width={20} height={20} /> WhatsApp the office
              </a>
            </div>
            <div className="relative mt-12 max-w-sm pb-12">
              <div className="arch relative aspect-[4/5] w-[72%]">
                <Image src={stock.motherDaughter} alt="" fill sizes="280px" className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[78%] rotate-[3deg] rounded-[1.25rem] bg-cream p-2 shadow-2xl shadow-black/30 transition-transform duration-700 hover:rotate-0">
                <div className="relative aspect-[11/6] overflow-hidden rounded-[0.9rem]">
                  <Image src={svm.pamphlet} alt="SVM Kids admission pamphlet" fill sizes="300px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <EnquiryForm tone="dark" />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="scroll-mt-20 py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading title="Fee structure 2026-27" intro="Annual school fee. Transport is charged separately by route." />
            <Reveal>
              <table className="w-full text-left">
                <caption className="sr-only">Annual fee by class, 2026-27</caption>
                <thead>
                  <tr className="border-b-2 border-ink text-sm text-ink-soft">
                    <th scope="col" className="py-3 font-semibold">Class</th>
                    <th scope="col" className="py-3 text-right font-semibold">Per year</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f) => (
                    <tr key={f.cls} className="border-b border-ink/10 transition-colors hover:bg-mist/60">
                      <th scope="row" className="py-5 pr-4 text-lg font-semibold">{f.cls}</th>
                      <td className="py-5 text-right font-display text-2xl font-semibold tabular-nums">{inr(f.fee)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          <Reveal delay={150} className="space-y-6 lg:pt-28">
            <div className="overflow-hidden rounded-[1.75rem] bg-beige">
              <div className="relative aspect-[16/9]">
                <Image src={stock.boysWithBook} alt="" fill sizes="(min-width:1024px) 35vw, 90vw" className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold">Documents to bring</h3>
                <ul className="mt-5 space-y-3">
                  {admissionDocuments.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-dusk" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="on-dark relative overflow-hidden rounded-[1.75rem] bg-ink p-8 text-cream">
              <Image src={stock.youngClass} alt="" fill sizes="(min-width:1024px) 35vw, 90vw" className="object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
              <div className="relative pt-24">
                <h3 className="font-display text-2xl font-semibold">RTE seats</h3>
                <p className="mt-3 text-cream/85">Seats in Class I are reserved under the Right to Education Act, as per government rules.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream pb-24 sm:pb-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] lg:aspect-[3/4] lg:max-w-sm lg:self-start lg:rounded-[999px_999px_1.25rem_1.25rem]">
            <Image src={stock.handRaised} alt="" fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover object-[50%_30%]" />
          </div>
          <div>
            <h2 className="display-lg mb-10">Questions parents ask</h2>
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
