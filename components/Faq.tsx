import { Plus } from "./Icons";

export default function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-semibold sm:text-2xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mist transition-transform duration-500 group-open:rotate-45">
              <Plus />
            </span>
          </summary>
          <p className="max-w-2xl pb-6 text-lg text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
