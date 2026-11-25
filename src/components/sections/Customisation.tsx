import { ArrowRight } from "lucide-react";
import { customCategories, customShirts } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { ShirtCard } from "./ShirtCard";

export function Customisation() {
  return (
    <section id="customisation" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Customisation & branding"
            title="Your logo,"
            accent="on everything."
            intro="Corporate shirts, bags, gifts and accessories, branded with your logo and delivered ready for your team, clients or next event."
          />
          <a
            data-reveal
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start font-semibold text-navy-800 lg:self-auto"
          >
            <span className="border-b-2 border-ember-500 pb-0.5">Request a branding quote</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <h3 data-reveal className="mt-14 font-display text-2xl font-bold text-navy-800 uppercase sm:text-3xl">
          Branded shirts
          <span className="mt-3 block h-0.5 w-10 bg-ember-500" />
        </h3>
        <p data-reveal className="mt-4 max-w-2xl text-navy-700/80">
          Every style comes in a men’s and a ladies’ fit. Switch between them on each shirt.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {customShirts.map((s, i) => (
            <li
              key={s.images.Men}
              data-reveal
              style={{ "--reveal-delay": `${(i % 5) * 70}ms` } as React.CSSProperties}
            >
              <ShirtCard {...s} />
            </li>
          ))}
        </ul>

        <h3 data-reveal className="mt-20 font-display text-2xl font-bold text-navy-800 uppercase sm:text-3xl">
          More products we brand
          <span className="mt-3 block h-0.5 w-10 bg-ember-500" />
        </h3>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {customCategories.map(({ icon: Icon, name }, i) => (
            <li
              key={name}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 60}ms` } as React.CSSProperties}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-navy-900/5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-800 text-ember-400">
                <Icon className="size-5" />
              </span>
              <span className="font-semibold leading-snug text-navy-800">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
