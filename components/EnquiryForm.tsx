"use client";

import { useState, type FormEvent } from "react";
import { school } from "@/lib/site";
import { ArrowRight } from "./Icons";

const classes = ["Nursery", "KG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI Science", "XI Commerce", "XI Humanities"];

type State = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export default function EnquiryForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Enquiry not sent");
      setState({ status: "sent" });
      form.reset();
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Enquiry not sent",
      });
    }
  }

  const dark = tone === "dark";
  const field = `w-full rounded-2xl border px-5 py-4 text-base outline-none transition-colors placeholder:opacity-60 focus:border-dusk ${
    dark ? "border-cream/25 bg-cream/5 text-cream focus:border-bluebell" : "border-ink/15 bg-white/70 text-ink"
  }`;
  const label = `mb-2 block text-sm font-semibold ${dark ? "text-cream/80" : "text-ink-soft"}`;

  if (state.status === "sent") {
    return (
      <div role="status" className={`rounded-[1.75rem] p-10 ${dark ? "bg-cream/10" : "bg-mist"}`}>
        <p className="display-md">Thank you. Your enquiry has reached the school office.</p>
        <p className={`mt-4 ${dark ? "text-cream/80" : "text-ink-soft"}`}>
          We will call you within one working day. For anything urgent, call {school.phones[2].display}.
        </p>
        <button type="button" onClick={() => setState({ status: "idle" })} className={`btn mt-8 ${dark ? "btn-blue" : "btn-ink"}`}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid content-start gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor="parent" className={label}>Parent&apos;s name</label>
        <input id="parent" name="parent" required autoComplete="name" className={field} placeholder="Full name" />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Mobile number</label>
        <input id="phone" name="phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+\s-]{10,15}" className={field} placeholder="10-digit mobile" />
      </div>
      <div>
        <label htmlFor="child" className={label}>Child&apos;s name</label>
        <input id="child" name="child" required className={field} placeholder="Full name" />
      </div>
      <div>
        <label htmlFor="grade" className={label}>Admission for class</label>
        <select id="grade" name="grade" required defaultValue="" className={field}>
          <option value="" disabled>Choose a class</option>
          {classes.map((c) => (
            <option key={c} value={c} className="text-ink">{c}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Anything you would like to ask (optional)</label>
        <textarea id="message" name="message" rows={3} className={field} placeholder="Transport route, campus visit date, sibling at SVM…" />
      </div>
      {/* honeypot for bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" disabled={state.status === "sending"} className={`btn ${dark ? "btn-blue" : "btn-ink"} disabled:opacity-60`}>
          {state.status === "sending" ? "Sending…" : "Send enquiry"} <ArrowRight />
        </button>
        {state.status === "error" && (
          <p role="alert" className={dark ? "text-beige" : "text-red-700"}>
            {state.message}. Please call {school.phones[0].display} or try again.
          </p>
        )}
      </div>
    </form>
  );
}
