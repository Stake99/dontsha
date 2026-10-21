import { reasons } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow="Why choose us" title="Why" accent="Dontsha Dynamics" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition-all duration-500 ease-out-quint hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-ember-500 transition-transform duration-500 ease-out-quint group-hover:scale-x-100" />
              <span className="grid size-14 place-items-center rounded-full bg-navy-800 text-white ring-4 ring-ember-500/20">
                <Icon className="size-6" />
              </span>
              <p className="mt-6 font-display text-xl leading-snug font-semibold text-navy-800">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
