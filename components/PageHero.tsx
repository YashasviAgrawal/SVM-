import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  intro?: string;
  image: string;
  crumb: string;
  /** focus point for object-position, e.g. "50% 30%" */
  focus?: string;
};

/** Banner used at the top of every inner page. */
export default function PageHero({ title, intro, image, crumb, focus = "50% 50%" }: Props) {
  return (
    <section className="on-dark relative flex min-h-[62svh] items-end overflow-hidden bg-ink text-cream sm:min-h-[70svh]">
      <div className="absolute inset-0 animate-kenburns">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: focus }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/55" />
      <div className="container-x relative pb-14 pt-40 sm:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-cream/75">
          <Link href="/" className="hover:text-cream">Home</Link>
          <span className="mx-2" aria-hidden>/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="display-xl max-w-[16ch]">{title}</h1>
        {intro && <p className="mt-6 max-w-xl text-lg text-cream/85">{intro}</p>}
      </div>
    </section>
  );
}
