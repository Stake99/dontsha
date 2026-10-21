import { ArrowRight, Check, Handshake } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services & product offering"
            title="Everything your"
            accent="business runs on."
            intro="A comprehensive range of supply and delivery solutions, including but not limited to:"
          />
          <a
            data-reveal
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start font-semibold text-navy-800 lg:self-auto"
          >
            <span className="border-b-2 border-ember-500 pb-0.5">Ask about something else</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, items }, i) => (
            <li
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
              className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-cream p-7 ring-1 ring-navy-900/5 transition-all duration-500 ease-out-quint hover:-translate-y-1 hover:bg-navy-800 hover:shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-navy-800 text-white ring-4 ring-ember-500/20 transition-colors duration-500 group-hover:bg-ember-500">
                  <Icon className="size-6" />
                </span>
                <span className="font-display text-5xl font-bold text-navy-900/[0.07] transition-colors duration-500 group-hover:text-white/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-7 font-display text-2xl leading-tight font-bold text-navy-800 uppercase transition-colors duration-500 group-hover:text-white">
                {title}
              </h3>
              <span className="mt-4 h-0.5 w-10 bg-ember-500 transition-all duration-500 group-hover:w-16" />
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.95rem] leading-snug text-navy-700 transition-colors duration-500 group-hover:text-navy-100"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-ember-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div
          data-reveal
          className="mt-10 flex flex-col items-center gap-5 rounded-[1.75rem] border-2 border-dashed border-ember-500/40 p-7 text-center sm:flex-row sm:text-left"
        >
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ember-500 text-white">
            <Handshake className="size-6" />
          </span>
          <p className="font-display text-2xl font-bold text-navy-800 sm:text-3xl">
            If your business needs it, <span className="text-ember-500">we supply it, and deliver it.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
