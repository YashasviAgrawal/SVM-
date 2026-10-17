import { school } from "@/lib/site";
import { Phone, Whatsapp } from "./Icons";

/** WhatsApp + call buttons pinned bottom-right on every page. */
export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent("Hello, I would like to know about admissions at Sharda Vidhya Mandir.")}`}
        target="_blank"
        rel="noreferrer"
        className="group relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink/20 transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 [animation-duration:2.5s]" aria-hidden />
        <Whatsapp className="relative" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
      <a
        href={`tel:${school.phones[2].tel}`}
        className="grid size-14 place-items-center rounded-full bg-ink text-cream shadow-lg shadow-ink/20 transition-transform hover:scale-105 lg:hidden"
      >
        <Phone width={22} height={22} />
        <span className="sr-only">Call the school</span>
      </a>
    </div>
  );
}
