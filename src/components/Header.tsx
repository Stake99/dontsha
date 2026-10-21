"use client";

import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 ease-out-quint sm:px-4 ${
          scrolled || open
            ? "bg-white/85 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.25)] ring-1 ring-navy-900/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a href="#top" aria-label="Dontsha Dynamics home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy-800 transition-colors hover:text-ember-600 md:flex"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember-500 sm:flex"
          >
            Request a quote
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-7xl origin-top overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-navy-900/5 transition-all duration-300 ease-out-quint lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-3" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 font-display text-xl font-semibold text-navy-800 hover:bg-navy-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-4 py-3.5 font-semibold text-white"
          >
            Request a quote <ArrowUpRight className="size-4" />
          </a>
          <a
            href={company.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-navy-700"
          >
            <Phone className="size-4" /> {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
