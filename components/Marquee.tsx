import Image from "next/image";

type Props = { images: { src: string; alt: string }[] };

/** Endless strip of photos. Pauses on hover; static when reduced motion is on. */
export default function Marquee({ images }: Props) {
  const doubled = [...images, ...images];
  return (
    <div className="group relative overflow-hidden" aria-label="Moments from school life" role="region">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {doubled.map((img, i) => (
          <div
            key={i}
            aria-hidden={i >= images.length}
            className={`relative shrink-0 overflow-hidden ${i % 3 === 1 ? "arch-sm h-72 w-56 sm:h-96 sm:w-72" : "h-56 w-72 rounded-[1.5rem] sm:h-72 sm:w-96"} ${i % 2 ? "self-end" : "self-start"}`}
          >
            <Image src={img.src} alt={i < images.length ? img.alt : ""} fill sizes="400px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
