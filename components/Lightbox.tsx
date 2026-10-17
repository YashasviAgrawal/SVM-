"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight, Close } from "./Icons";

type Props = {
  images: { src: string; alt: string }[];
  index: number | null;
  onChange: (i: number | null) => void;
};

export default function Lightbox({ images, index, onChange }: Props) {
  const open = index !== null;
  const go = useCallback(
    (d: number) => index !== null && onChange((index + d + images.length) % images.length),
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, onChange]);

  if (!open) return null;
  const img = images[index];

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="on-dark fixed inset-0 z-[70] bg-ink/95 text-cream backdrop-blur" onClick={() => onChange(null)}>
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <p className="text-sm tabular-nums text-cream/70">
          {index + 1} / {images.length}
        </p>
        <button type="button" autoFocus onClick={() => onChange(null)} className="grid size-12 place-items-center rounded-full bg-cream text-ink">
          <Close />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <figure className="absolute inset-x-4 bottom-20 top-20 sm:inset-x-24" onClick={(e) => e.stopPropagation()}>
        <Image key={img.src} src={img.src} alt={img.alt} fill sizes="100vw" className="animate-[fadeUp_.5s_ease-out] object-contain" />
        <figcaption className="absolute -bottom-12 inset-x-0 text-center text-cream/80">{img.alt}</figcaption>
      </figure>
      <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-cream/30 hover:bg-cream hover:text-ink sm:left-6">
        <ArrowLeft /><span className="sr-only">Previous photo</span>
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-cream/30 hover:bg-cream hover:text-ink sm:right-6">
        <ArrowRight /><span className="sr-only">Next photo</span>
      </button>
    </div>
  );
}
