import Image from "next/image";
import Link from "next/link";
import { quickLinks } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

/** Photo tiles with the school's own icons from the original site. Hover zooms the photo. */
export default function QuickLinks() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {quickLinks.map((q, i) => {
        const last = i === quickLinks.length - 1;
        return (
          <li key={q.label} className={last ? "col-span-2 sm:col-span-1" : ""}>
            <Link
              href={q.href}
              className={`group on-dark relative flex ${last ? "aspect-[2/1]" : "aspect-[4/5]"} sm:aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink p-5 text-cream sm:p-6`}
            >
              <Image
                src={q.image}
                alt=""
                fill
                sizes="(min-width:1024px) 20vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/5 transition-colors duration-700 group-hover:bg-ink/25" />
              <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-cream/15 backdrop-blur-sm transition-colors duration-500 group-hover:bg-cream group-hover:text-ink">
                <ArrowUpRight />
              </span>
              <span className="relative grid size-14 place-items-center rounded-full bg-cream shadow-lg shadow-ink/20 transition-transform duration-700 group-hover:-translate-y-1 sm:size-16">
                <Image src={q.icon} alt="" width={64} height={64} className="size-9 object-contain sm:size-10" />
              </span>
              <span className="relative mt-4 font-display text-xl font-semibold sm:text-2xl">{q.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
