import { Star } from "lucide-react";
import { company, nav, services } from "@/lib/content";
import { Logo } from "../Logo";

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 sm:flex-row sm:items-center">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-ember-500 text-white">
            <Star className="size-7" />
          </span>
          <p className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl">
            We go beyond supply. We deliver <span className="text-ember-400">value</span>,{" "}
            <span className="text-ember-400">empowerment</span> and <span className="text-ember-400">reliability</span>.
          </p>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/70">
              A women-led supply and delivery company. {company.slogan.join(" ")}
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-ember-400 uppercase">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-ember-400 uppercase">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-ember-400 uppercase">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={company.phoneHref} className="transition-colors hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-navy-300/60 sm:flex-row sm:justify-between">
          <p>© <CopyrightYear /> Dontsha Dynamics. All rights reserved.</p>
          <p>Reliable · Inclusive · Excellence</p>
        </div>
      </div>
    </footer>
  );
}
