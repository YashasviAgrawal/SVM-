import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  tone?: "ink" | "light";
};

export default function SectionHeading({ title, intro, align = "left", action, tone = "ink" }: Props) {
  const center = align === "center";
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-6 sm:mb-16 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}
    >
      <div className={center ? "max-w-2xl" : "max-w-2xl"}>
        <h2 className="display-lg">{title}</h2>
        {intro && <p className={`mt-5 text-lg ${tone === "light" ? "text-cream/80" : "text-ink-soft"}`}>{intro}</p>}
      </div>
      {action}
    </Reveal>
  );
}
