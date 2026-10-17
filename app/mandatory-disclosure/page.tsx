import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Download, Play } from "@/components/Icons";
import { results, school } from "@/lib/site";
import { stock, svm } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure (CBSE Appendix IX)",
  description: "CBSE Mandatory Public Disclosure for Sharda Vidhya Mandir, Jaipur. Affiliation No. 1730101, School Code 10445.",
};

const general: [string, string][] = [
  ["Name of the school", school.name],
  ["Affiliation number", school.affiliationNo],
  ["School code", school.schoolCode],
  ["Complete address with PIN", `${school.address.line1}, ${school.address.line2} ${school.address.pin}`],
  ["Principal name and qualification", "Ms Juhi Shah, M.A., M.Ed."],
  ["School email", school.email],
  ["Contact details", `${school.phones[0].display}, ${school.phones[1].display}`],
];

const docs: [string, string][] = [
  ["Copies of affiliation / upgradation letter and recent extension of affiliation", "affiliation-letter.pdf"],
  ["Copies of society / trust / company registration and renewal certificate", "society-registration.pdf"],
  ["Copy of no-objection certificate (NOC) issued by the State Government", "noc.pdf"],
  ["Copies of recognition certificate under the RTE Act, 2009, and its renewal", "rte-recognition.pdf"],
  ["Copy of valid building safety certificate as per the national building code", "building-safety.pdf"],
  ["Copy of valid fire safety certificate issued by the competent authority", "fire-safety.pdf"],
  ["Copy of the DEO certificate submitted for affiliation / self-certification", "deo-certificate.pdf"],
  ["Copies of valid water, health and sanitation certificates", "water-health-sanitation.pdf"],
];

const academics: [string, string][] = [
  ["Fee structure of the school", "fee-structure.pdf"],
  ["Annual academic calendar", "academic-calendar.pdf"],
  ["List of School Management Committee (SMC)", "smc-list.pdf"],
  ["List of Parents Teachers Association (PTA) members", "pta-list.pdf"],
  ["Last three-year result of the board examination", "board-results.pdf"],
];

const staff: [string, string][] = [
  ["Principal", "1"],
  ["Total number of teachers", "52 (PGT 18, TGT 19, PRT 15)"],
  ["Details of special educator", "Ms Deepika Yadav"],
  ["Details of counsellor and wellness teacher", "Ms Manmeet Katyal"],
];

const infra: [string, string][] = [
  ["Total campus area of the school (in sq. m.)", "40,064"], // CONFIRM: newer page says 44,420
  ["Number and size of classrooms", "39"],
  ["Number and size of laboratories, including computer labs", "Physics, Chemistry, Biology, Mathematics, Geography, 2 computer labs"],
  ["Internet facility", "Yes, 200 Mbps"],
  ["Number of smart classrooms", "32"],
  ["Library books", "10,756"],
];

function Table({ id, letter, title, rows, files = false }: { id: string; letter: string; title: string; rows: [string, string][]; files?: boolean }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-6 flex items-baseline gap-4 font-display text-3xl font-semibold">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-bluebell text-xl">{letter}</span>
        {title}
      </h2>
      <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-ink/10">
        <table className="w-full text-left">
          <thead className="bg-ink text-sm text-cream">
            <tr>
              <th scope="col" className="w-14 px-4 py-3 font-semibold">S.No.</th>
              <th scope="col" className="px-4 py-3 font-semibold">Information</th>
              <th scope="col" className="px-4 py-3 font-semibold">{files ? "Document" : "Details"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, v], i) => (
              <tr key={k} className="border-t border-ink/10 odd:bg-white/50">
                <td className="px-4 py-4 align-top tabular-nums text-ink-soft">{i + 1}</td>
                <th scope="row" className="px-4 py-4 align-top font-medium">{k}</th>
                <td className="px-4 py-4 align-top">
                  {files ? (
                    <a href={`/disclosure/${v}`} target="_blank" className="inline-flex items-center gap-2 whitespace-nowrap font-bold text-dusk underline underline-offset-4">
                      <Download /> View PDF
                    </a>
                  ) : (
                    v
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function DisclosurePage() {
  return (
    <>
      <PageHero
        crumb="Mandatory Disclosure"
        title="Mandatory public disclosure"
        intro={`As required by CBSE (Appendix IX). Affiliation No. ${school.affiliationNo}, School Code ${school.schoolCode}.`}
        image={stock.bookshelf}
      />

      <div className="container-x grid gap-12 py-20 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="Sections" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col">
            {[
              ["general", "A. General information"],
              ["documents", "B. Documents"],
              ["academics", "C. Results and academics"],
              ["staff", "D. Staff"],
              ["infrastructure", "E. Infrastructure"],
            ].map(([id, label]) => (
              <li key={id}>
                <Link href={`#${id}`} className="block rounded-full bg-mist px-4 py-2 text-sm font-semibold hover:bg-bluebell">{label}</Link>
              </li>
            ))}
          </ul>
          <div className="arch relative mt-8 hidden aspect-[3/4] lg:block">
            <Image src={svm.campus} alt="Sharda Vidhya Mandir building" fill sizes="224px" className="object-cover" />
          </div>
          <p className="mt-4 hidden text-sm text-ink-soft lg:block">
            Affiliation No. {school.affiliationNo}
            <br />
            School Code {school.schoolCode}
          </p>
        </nav>

        <div className="min-w-0 space-y-16 overflow-x-auto">
          <Table id="general" letter="A" title="General information" rows={general} />
          <Table id="documents" letter="B" title="Documents and information" rows={docs} files />
          <Table id="academics" letter="C" title="Result and academics" rows={academics} files />

          <section aria-label="Board results">
            <div className="grid gap-6 md:grid-cols-2">
              {(["classX", "classXII"] as const).map((k) => (
                <div key={k} className="overflow-hidden rounded-[1.5rem] ring-1 ring-ink/10">
                  <table className="w-full text-left">
                    <caption className="bg-mist px-4 py-3 text-left font-display text-xl font-semibold">Result, Class {k === "classX" ? "X" : "XII"}</caption>
                    <thead className="text-sm text-ink-soft">
                      <tr><th className="px-4 py-2">Year</th><th className="px-4 py-2">Registered</th><th className="px-4 py-2">Passed</th><th className="px-4 py-2">Pass %</th></tr>
                    </thead>
                    <tbody>
                      {results[k].map((r) => (
                        <tr key={r.year} className="border-t border-ink/10 tabular-nums">
                          <td className="px-4 py-3">{r.year}</td>
                          <td className="px-4 py-3">{r.appeared}</td>
                          <td className="px-4 py-3">{r.passed}</td>
                          <td className="px-4 py-3 font-bold">{((r.passed / r.appeared) * 100).toFixed(2)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </section>

          <Table id="staff" letter="D" title="Staff (teaching)" rows={staff} />
          <Table id="infrastructure" letter="E" title="School infrastructure" rows={infra} />

          <a
            href={`https://www.youtube.com/watch?v=${school.inspectionVideoId}`}
            target="_blank"
            rel="noreferrer"
            className="group on-dark relative flex min-h-[18rem] items-end overflow-hidden rounded-[1.5rem] bg-ink p-6 text-cream sm:p-8"
          >
            <Image src={svm.campus} alt="" fill sizes="(min-width:1024px) 60vw, 90vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
            <span className="absolute right-6 top-6 grid size-16 place-items-center rounded-full bg-cream/20 backdrop-blur-md transition-colors group-hover:bg-cream group-hover:text-ink">
              <Play width={24} height={24} />
            </span>
            <span className="relative">
              <span className="block font-display text-2xl font-semibold">School inspection video</span>
              <span className="mt-1 block text-cream/80 underline underline-offset-4">Watch on YouTube</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
