"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  /** Use the clip-path image reveal instead of fade-up */
  variant?: "fade" | "image";
};

/** Adds `is-visible` once the element scrolls into view (runs once). */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", variant = "fade" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  const cls = variant === "image" ? "reveal-img" : "reveal";

  return (
    <Tag ref={ref} className={`${cls} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
