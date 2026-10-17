"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Close, Play } from "./Icons";

type Props = { videoId: string; cover: string; title: string; subtitle: string };

/** Full-width cinematic banner with a play button that opens the YouTube video in a modal. */
export default function VideoFeature({ videoId, cover, title, subtitle }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="on-dark group relative isolate h-[78svh] min-h-[480px] overflow-hidden rounded-[2rem] text-cream">
        <Image src={cover} alt="" fill sizes="100vw" className="-z-10 object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/30" />
        <div className="flex h-full flex-col items-start justify-end gap-6 p-6 sm:p-12">
          <h2 className="display-xl max-w-[12ch]">{title}</h2>
          <p className="max-w-md text-lg text-cream/85">{subtitle}</p>
          <button type="button" onClick={() => setOpen(true)} className="btn btn-blue">
            <Play width={18} height={18} /> Play video
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play video"
          className="absolute right-6 top-6 grid size-20 place-items-center rounded-full bg-cream/15 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-cream hover:text-ink sm:right-12 sm:top-12 sm:size-28"
        >
          <span className="absolute inset-0 animate-ping rounded-full border border-cream/40 [animation-duration:2.8s]" aria-hidden />
          <Play width={30} height={30} />
        </button>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[70] grid place-items-center bg-ink/90 p-4 backdrop-blur" onClick={() => setOpen(false)}>
          <button type="button" onClick={() => setOpen(false)} autoFocus className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-cream text-ink">
            <Close />
            <span className="sr-only">Close video</span>
          </button>
          <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
