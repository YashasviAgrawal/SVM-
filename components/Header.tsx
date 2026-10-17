"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, moreNav, school } from "@/lib/site";
import { svm, stock } from "@/lib/images";
import { ArrowUpRight, Close, Facebook, Instagram, Menu, Phone } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the menu on navigation, lock page scroll while it is open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
          solid ? "bg-cream/95 text-ink shadow-[0_1px_0_rgb(28_42_74/0.08)] backdrop-blur-md" : "on-dark text-cream"
        }`}
      >
        {/* utility strip */}
        <div
          className={`hidden overflow-hidden text-[13px] transition-[max-height,opacity] duration-500 lg:block ${
            solid ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="container-x flex items-center justify-between border-b border-cream/20 py-2">
            <p className="opacity-85">
              Affiliated to CBSE, New Delhi. Affiliation No. {school.affiliationNo}, School Code {school.schoolCode}
            </p>
            <nav aria-label="Utility" className="flex items-center gap-6">
              <Link href="/mandatory-disclosure" className="underline-offset-4 hover:underline">Mandatory Disclosure</Link>
              <Link href="/admissions#fees" className="underline-offset-4 hover:underline">Fee Structure</Link>
              <Link href="/contact#tc" className="underline-offset-4 hover:underline">Online TC</Link>
              <a href={`tel:${school.phones[0].tel}`} className="flex items-center gap-1.5 font-semibold">
                <Phone width={14} height={14} /> {school.phones[0].display}
              </a>
            </nav>
          </div>
        </div>

        <div className={`container-x flex items-center justify-between gap-6 transition-[padding] duration-500 ${solid ? "py-3" : "py-4 lg:py-5"}`}>
          <Link href="/" className="group flex items-center gap-3" aria-label="Sharda Vidhya Mandir, home">
            <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-cream ring-1 ring-ink/10 lg:size-14">
              <Image src={svm.logoGold} alt="" width={56} height={56} className="size-full object-contain p-1" priority />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight sm:text-xl">Sharda Vidhya Mandir</span>
              <span className="block text-[12px] opacity-80">Ambabari, Jaipur. Since 1987</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-2 text-[15px] font-semibold"
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-current transition-transform duration-500 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/admissions#enquire" className={`btn hidden sm:inline-flex ${solid ? "btn-ink" : "btn-blue"}`}>
              Apply now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className={`grid size-12 place-items-center rounded-full border transition-colors ${
                solid ? "border-ink/20 hover:bg-ink hover:text-cream" : "border-cream/40 hover:bg-cream hover:text-ink"
              }`}
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`on-dark fixed inset-0 z-[60] overflow-y-auto bg-ink text-cream transition-[clip-path] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? "" : "pointer-events-none"
        }`}
        style={{ clipPath: `circle(${open ? "150%" : "0%"} at calc(100% - 3rem) 3rem)` }}
        inert={!open}
      >
        <div className="container-x flex min-h-full flex-col py-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-semibold">Sharda Vidhya Mandir</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-12 place-items-center rounded-full border border-cream/30 transition-colors hover:bg-cream hover:text-ink"
            >
              <Close />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.3fr_1fr_0.9fr]">
            <nav aria-label="Menu primary">
              <ul className="space-y-1">
                {[{ label: "Home", href: "/" }, ...mainNav].map((item, i) => (
                  <li
                    key={item.href}
                    className={`transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                    style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-baseline gap-4 font-display text-[length:clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.15] transition-colors hover:text-bluebell"
                    >
                      {item.label}
                      <ArrowUpRight className="translate-y-[-0.2em] opacity-0 transition-opacity group-hover:opacity-100" width={28} height={28} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={`transition-opacity delay-500 duration-700 ${open ? "opacity-100" : "opacity-0"}`}>
              <ul className="grid gap-3 text-lg">
                {moreNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-cream/80 transition-colors hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-2 text-sm text-cream/75">
                <p>{school.address.line1}, {school.address.line2}</p>
                <p>
                  <a className="hover:text-cream" href={`tel:${school.phones[0].tel}`}>{school.phones[0].display}</a>
                  {"  /  "}
                  <a className="hover:text-cream" href={`mailto:${school.email}`}>{school.email}</a>
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={school.social.instagram} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full border border-cream/30 hover:bg-cream hover:text-ink" aria-label="Instagram"><Instagram /></a>
                <a href={school.social.facebook} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full border border-cream/30 hover:bg-cream hover:text-ink" aria-label="Facebook"><Facebook /></a>
              </div>
            </div>

            <div className={`relative hidden aspect-[3/4] lg:block transition-all delay-300 duration-1000 ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="arch absolute inset-0">
                <Image src={stock.blueUniforms} alt="" fill sizes="30vw" className="object-cover" />
              </div>
              <p className="absolute -bottom-3 left-6 rounded-full bg-bluebell px-4 py-2 text-sm font-bold text-ink">
                {school.motto}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
