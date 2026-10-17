import Image from "next/image";
import Link from "next/link";
import { mainNav, moreNav, school } from "@/lib/site";
import { stock, svm } from "@/lib/images";
import { ArrowRight, Facebook, Instagram, Mail, Phone, Pin, Youtube } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative bg-ink text-cream">
      {/* Closing call to action */}
      <div className="relative overflow-hidden">
        <Image src={stock.hawaMahal} alt="" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink" />
        <div className="container-x relative grid gap-10 py-24 sm:py-32 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="display-xl max-w-[13ch]">Come and see the campus for yourself</h2>
          <div className="space-y-6">
            <p className="max-w-sm text-lg text-cream/80">
              Visit us on any working day between 8:30 am and 1:00 pm, or ask for a call back.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/admissions#enquire" className="btn btn-blue">
                Book a visit <ArrowRight />
              </Link>
              <a href={`tel:${school.phones[0].tel}`} className="btn btn-ghost-light">
                <Phone /> {school.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 border-t border-cream/15 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid size-16 place-items-center overflow-hidden rounded-full bg-cream">
              <Image src={svm.logoGold} alt="" width={64} height={64} className="size-full object-contain p-1" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold">{school.name}</p>
              <p className="text-sm text-cream/70">{school.motto}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
            Co-educational, English-medium CBSE senior secondary school. Affiliation No. {school.affiliationNo}, School Code{" "}
            {school.schoolCode}.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={school.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"><Instagram /></a>
            <a href={school.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"><Facebook /></a>
            <a href={`https://www.youtube.com/watch?v=${school.inspectionVideoId}`} target="_blank" rel="noreferrer" aria-label="YouTube" className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"><Youtube /></a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 font-display text-lg">Explore</p>
          <ul className="space-y-2.5 text-cream/75">
            {mainNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-cream">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer more">
          <p className="mb-4 font-display text-lg">For parents</p>
          <ul className="space-y-2.5 text-cream/75">
            {moreNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-cream">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <address className="space-y-4 not-italic text-cream/75">
          <p className="mb-4 font-display text-lg text-cream">Reach us</p>
          <p className="flex gap-3"><Pin className="mt-0.5 shrink-0" />{school.address.line1}, {school.address.line2} {school.address.pin}</p>
          <p className="flex gap-3">
            <Phone className="mt-0.5 shrink-0" />
            <span>
              {school.phones.map((p, i) => (
                <span key={p.tel}>
                  <a href={`tel:${p.tel}`} className="hover:text-cream">{p.display}</a>
                  {i < school.phones.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </p>
          <p className="flex gap-3"><Mail className="mt-0.5 shrink-0" /><a href={`mailto:${school.email}`} className="hover:text-cream">{school.email}</a></p>
        </address>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-x flex flex-col gap-3 py-6 pb-24 text-sm text-cream/60 sm:flex-row sm:justify-between sm:pb-6">
          <p>© {year} {school.name}, Jaipur. All rights reserved.</p>
          <Link href="/mandatory-disclosure" className="hover:text-cream">CBSE Mandatory Public Disclosure</Link>
        </div>
      </div>
    </footer>
  );
}
