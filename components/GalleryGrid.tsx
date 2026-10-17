"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryCategory } from "@/lib/images";
import Lightbox from "./Lightbox";
import { Expand } from "./Icons";

type Img = { src: string; alt: string; category?: GalleryCategory; tall?: boolean; contain?: boolean };
type Props = { images: Img[]; filters?: boolean; cols?: string };

/** Masonry photo grid with optional category filter chips and a lightbox. */
export default function GalleryGrid({ images, filters = false, cols = "columns-2 md:columns-3 lg:columns-4" }: Props) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(images.map((i) => i.category).filter(Boolean)))] as string[],
    [images],
  );
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = cat === "All" ? images : images.filter((i) => i.category === cat);

  return (
    <>
      {filters && (
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === cat}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-[15px] font-bold transition-colors ${
                c === cat ? "bg-ink text-cream" : "bg-ink/5 text-ink/70 hover:bg-ink/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className={`${cols} gap-3 sm:gap-4`}>
        {shown.map((img, i) => (
          <li key={`${cat}-${img.src}-${i}`} className="mb-3 break-inside-avoid sm:mb-4 animate-[fadeUp_.6s_cubic-bezier(.22,1,.36,1)_both]" style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className={`group relative block w-full overflow-hidden rounded-[1.25rem] bg-mist ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            >
              {img.contain && <Image src={img.src} alt="" fill sizes="96px" className="scale-125 object-cover blur-2xl" aria-hidden />}
              <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw" className={`transition-transform duration-700 group-hover:scale-105 ${img.contain ? "object-contain p-2" : "object-cover"}`} />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-4 text-left text-sm font-semibold text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                {img.alt}
                <Expand className="shrink-0" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox images={shown} index={open} onChange={setOpen} />
    </>
  );
}
