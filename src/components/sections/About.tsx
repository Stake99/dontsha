import { Eye, Target } from "lucide-react";
import { mission, overview, values, vision } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Company overview"
              title="More than a"
              accent="supplier."
              intro="We partner with organisations to provide seamless access to essential goods and operational supplies, owned and operated by women who built this business from the ground up."
            />
          </div>

          <ol className="space-y-4">
            {overview.map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group flex gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5 transition-shadow hover:shadow-lg sm:gap-7 sm:p-8"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-navy-800 text-white ring-4 ring-ember-500/25 transition-colors group-hover:bg-ember-500">
                  <Icon className="size-6" />
                </span>
                <p className="self-center border-l-2 border-ember-500/40 pl-5 text-lg leading-relaxed text-navy-700 sm:pl-7">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {[
            { icon: Eye, title: "Our vision", text: vision, dark: true },
            { icon: Target, title: "Our mission", text: mission, dark: false },
          ].map(({ icon: Icon, title, text, dark }, i) => (
            <article
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-10 ${dark ? "bg-navy-800 text-white" : "bg-ember-500 text-white"}`}
            >
              <Icon
                aria-hidden
                className={`absolute -right-6 -bottom-6 size-44 ${dark ? "text-white/[0.04]" : "text-white/10"}`}
                strokeWidth={1.2}
              />
              <span
                className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-ember-500" : "bg-navy-800"}`}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight uppercase">{title}</h3>
              <p className={`relative mt-4 text-lg leading-relaxed ${dark ? "text-navy-100/85" : "text-white/90"}`}>
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="What guides us" title="Our core" accent="values" />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-navy-900/10 ring-1 ring-navy-900/10 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="group bg-cream p-7 transition-colors hover:bg-white"
              >
                <span className="font-display text-sm font-semibold text-ember-600">0{i + 1}</span>
                <Icon className="mt-6 size-8 text-navy-800 transition-transform duration-500 ease-out-quint group-hover:-translate-y-1 group-hover:text-ember-500" />
                <h3 className="mt-5 font-display text-xl leading-tight font-bold text-navy-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
