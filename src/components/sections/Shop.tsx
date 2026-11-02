import { ArrowUpRight } from "lucide-react";
import { shop, type Store } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";

const storeBadge: Record<Store, string> = {
  Amazon: "bg-navy-800 text-white",
  Makro: "bg-ember-500 text-white",
};

export function Shop() {
  return (
    <section id="shop" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shop online"
          title="Buy our products"
          accent="on Amazon & Makro."
          intro="Our product range is also available through Amazon and Makro. Choose a product to open it in the store. For bulk or business orders, request a quote below."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {shop.map(({ title, products }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              className="rounded-[1.75rem] bg-white p-6 ring-1 ring-navy-900/5 sm:p-8"
            >
              <h3 className="font-display text-2xl leading-tight font-bold text-navy-800 uppercase">{title}</h3>
              <span className="mt-3 block h-0.5 w-10 bg-ember-500" />
              <ul className="mt-5 divide-y divide-navy-900/5">
                {products.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-3 text-[0.95rem] leading-snug text-navy-700 transition-colors hover:text-navy-900"
                    >
                      <span
                        className={`w-16 shrink-0 rounded-full px-2 py-1 text-center text-[0.7rem] font-semibold tracking-wider uppercase ${storeBadge[p.store]}`}
                      >
                        {p.store}
                      </span>
                      <span className="min-w-0 flex-1">{p.name}</span>
                      <ArrowUpRight className="size-4 shrink-0 text-navy-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember-500" />
                      <span className="sr-only">(opens {p.store} in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
