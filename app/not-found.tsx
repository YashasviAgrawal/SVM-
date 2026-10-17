import Link from "next/link";
import Image from "next/image";
import { stock } from "@/lib/images";

export default function NotFound() {
  return (
    <section className="on-dark relative flex min-h-[90svh] items-center overflow-hidden bg-ink text-cream">
      <Image src={stock.jaipurDoor} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="container-x relative">
        <p className="font-display text-8xl font-semibold text-bluebell">404</p>
        <h1 className="display-lg mt-4 max-w-[16ch]">This page has moved or no longer exists</h1>
        <p className="mt-6 max-w-md text-lg text-cream/80">Our website has a new home. Start from the homepage or look up admissions.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-blue">Go to the homepage</Link>
          <Link href="/admissions" className="btn btn-ghost-light">Admissions</Link>
        </div>
      </div>
    </section>
  );
}
