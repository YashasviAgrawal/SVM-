import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { Clock, Mail, Phone, Pin, Whatsapp } from "@/components/Icons";
import { school } from "@/lib/site";
import { stock, svm } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: "Address, phone numbers, email and map for Sharda Vidhya Mandir, B-11 Metal Colony, Ambabari, Sikar Road, Jaipur.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${school.geo.lat},${school.geo.lng}&z=16&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${school.geo.lat},${school.geo.lng}`;

  const cards = [
    { icon: <Pin width={22} height={22} />, title: "Visit", lines: [school.address.line1, `${school.address.line2} ${school.address.pin}`], href: directions, cta: "Get directions", image: svm.campus },
    { icon: <Phone width={22} height={22} />, title: "Call", lines: school.phones.map((p) => p.display), href: `tel:${school.phones[0].tel}`, cta: "Call the office", image: stock.motherDaughter },
    { icon: <Mail width={22} height={22} />, title: "Write", lines: [school.email, `Principal: ${school.principalEmail}`], href: `mailto:${school.email}`, cta: "Send an email", image: stock.writing },
    { icon: <Clock width={22} height={22} />, title: "Office hours", lines: [school.officeHours, "Second Saturday closed"], href: `https://wa.me/${school.whatsapp}`, cta: "WhatsApp us", image: stock.classTeacher },
  ];

  return (
    <>
      <PageHero crumb="Contact" title="We'd love to hear from you" intro="Call, write, or simply walk in during office hours." image={stock.jaipurDoor} />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-mist">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={c.image} alt="" fill sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              </div>
              <div className="relative flex flex-1 flex-col p-7 pt-0">
                <span className="-mt-6 grid size-12 place-items-center rounded-full bg-cream text-dusk shadow-lg shadow-ink/10">{c.icon}</span>
                <h2 className="mt-5 font-display text-2xl font-semibold">{c.title}</h2>
                <div className="mt-2 flex-1 space-y-1 text-ink-soft">
                  {c.lines.map((l) => <p key={l} className="break-words">{l}</p>)}
                </div>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-6 font-bold text-dusk underline underline-offset-4">
                  {c.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="on-dark relative grid min-h-[420px] place-items-center overflow-hidden rounded-[2rem] bg-ink text-cream">
            {/* shown while the map loads, or if it is blocked */}
            <Image src={stock.hawaMahal} alt="" fill sizes="(min-width:1024px) 55vw, 90vw" className="object-cover" />
            <span className="absolute inset-0 bg-ink/55" />
            <a href={directions} target="_blank" rel="noreferrer" className="btn btn-blue relative">
              <Pin /> Open in Google Maps
            </a>
            <iframe title="Map to Sharda Vidhya Mandir" src={mapSrc} className="absolute inset-0 size-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
          <Reveal delay={120} className="arch relative min-h-[420px]">
            <Image src={svm.campus} alt="Sharda Vidhya Mandir building" fill sizes="(min-width:1024px) 35vw, 90vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-beige py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="display-lg max-w-[12ch]">Ask us anything</h2>
            <p className="mt-6 max-w-sm text-lg text-ink-soft">Admissions, transport, fees or a campus visit. The office replies within one working day.</p>
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-ink mt-8">
              <Whatsapp width={20} height={20} /> Chat on WhatsApp
            </a>
            <Reveal variant="image" className="arch relative mt-12 aspect-[4/3] max-w-sm sm:aspect-[4/5] sm:max-w-xs">
              <Image src={stock.family} alt="" fill sizes="(min-width:1024px) 25vw, 320px" className="object-cover" />
            </Reveal>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div id="tc" className="on-dark relative scroll-mt-24 overflow-hidden rounded-[2rem] bg-ink p-8 pt-40 text-cream sm:p-10 sm:pt-48">
            <Image src={stock.writing} alt="" fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20" />
            <div className="relative">
              <h2 className="display-md">Transfer certificate</h2>
              <p className="mt-4 text-lg text-cream/85">
                To request or verify a TC, email {school.email} with the student&apos;s name, class and admission number, or visit the office.
              </p>
              <a href={`mailto:${school.email}?subject=${encodeURIComponent("Transfer certificate request")}`} className="btn btn-blue mt-8">Request a TC</a>
            </div>
          </div>
          <div id="careers" className="on-dark relative scroll-mt-24 overflow-hidden rounded-[2rem] bg-ink p-8 pt-40 text-cream sm:p-10 sm:pt-48">
            <Image src={stock.teacherBoard} alt="" fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20" />
            <div className="relative">
              <h2 className="display-md">Teach at SVM</h2>
              <p className="mt-4 text-lg text-cream/85">
                We are always glad to hear from qualified teachers (PRT, TGT, PGT) and support staff. Send your CV with the post you are applying for.
              </p>
              <a href={`mailto:${school.email}?subject=${encodeURIComponent("Job application")}`} className="btn btn-blue mt-8">Send your CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
