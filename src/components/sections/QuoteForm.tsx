"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { company, services } from "@/lib/content";

const field =
  "w-full rounded-xl border-0 bg-cream px-4 py-3.5 text-base text-navy-900 ring-1 ring-navy-900/10 transition placeholder:text-navy-400 focus:bg-white focus:ring-2 focus:ring-ember-500 focus:outline-none";

/**
 * There is no mail backend yet, so the form opens the visitor's email app
 * with the quote request pre-filled and addressed to Dontsha Dynamics.
 */
export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Quote request: ${get("service")} (${get("company") || get("name")})`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Service: ${get("service")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-navy-800">Full name</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Jane Dlamini" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-navy-800">Company</span>
        <input name="company" autoComplete="organization" className={field} placeholder="Your organisation" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-navy-800">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.co.za" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-navy-800">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+27 ..." />
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className="text-sm font-semibold text-navy-800">What do you need?</span>
        <select name="service" className={field} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className="text-sm font-semibold text-navy-800">Details</span>
        <textarea
          name="message"
          rows={4}
          required
          className={`${field} resize-y`}
          placeholder="Items, quantities, delivery location and timeline"
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy-500" aria-live="polite">
          {sent ? "Your email app should now be open with the request ready to send." : "Opens your email app with the request ready to send."}
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-7 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(238,125,23,0.8)] transition-all hover:bg-ember-600 active:scale-[0.98]"
        >
          Send request
          <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}
