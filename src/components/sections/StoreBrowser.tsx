"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Store } from "@/lib/content";

type Product = { name: string; href: string };
export type StoreGroup = {
  store: Store;
  logo: { src: string; width: number; height: number };
  accent: string;
  categories: { title: string; products: Product[] }[];
};

export function StoreBrowser({ stores }: { stores: StoreGroup[] }) {
  const [active, setActive] = useState<Store | null>(null);
  const current = stores.find((s) => s.store === active);

  return (
    <div className="mt-14">
      <div className="grid gap-5 sm:grid-cols-2">
        {stores.map(({ store, logo, accent, categories }) => {
          const count = categories.reduce((n, c) => n + c.products.length, 0);
          const selected = store === active;
          return (
            <button
              key={store}
              type="button"
              aria-expanded={selected}
              aria-controls="store-products"
              onClick={() => setActive(selected ? null : store)}
              className={`group relative flex flex-col items-center gap-5 rounded-[1.75rem] bg-white px-6 pt-10 pb-6 text-center ring-1 transition-all duration-300 ease-out-quint active:scale-[0.99] ${
                selected
                  ? `shadow-2xl ring-2 ${accent}`
                  : "ring-navy-900/5 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              <span className="grid h-20 place-items-center">
                <Image
                  src={logo.src}
                  alt={store}
                  width={logo.width}
                  height={logo.height}
                  unoptimized={logo.src.endsWith(".svg")}
                  sizes="14rem"
                  className="h-12 w-auto rounded-lg sm:h-14"
                />
              </span>
              <span className="text-sm text-navy-600">
                {count} products · {categories.length} categories
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selected ? "bg-navy-800 text-white" : "bg-cream text-navy-800 group-hover:bg-navy-800 group-hover:text-white"
                }`}
              >
                {selected ? "Hide products" : "View products"}
                <ChevronDown className={`size-4 transition-transform duration-300 ${selected ? "rotate-180" : ""}`} />
              </span>
            </button>
          );
        })}
      </div>

      <div id="store-products" aria-live="polite">
        {current ? (
          <div key={current.store} className="store-panel mt-8">
            <p className="mb-5 text-sm text-navy-600">
              Showing products on <span className="font-semibold text-navy-800">{current.store}</span>. Each link opens
              the store in a new tab.
            </p>
            <div className="grid gap-5 lg:grid-cols-2">
              {current.categories.map(({ title, products }) => (
                <div key={title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-navy-900/5 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl leading-tight font-bold text-navy-800 uppercase">{title}</h3>
                    <span className="shrink-0 text-sm text-navy-500">{products.length}</span>
                  </div>
                  <span className="mt-3 block h-0.5 w-10 bg-ember-500" />
                  <ul className="mt-4 divide-y divide-navy-900/5">
                    {products.map((p) => (
                      <li key={p.href}>
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 py-3 text-[0.95rem] leading-snug text-navy-700 transition-colors hover:text-navy-900"
                        >
                          <span className="min-w-0 flex-1">{p.name}</span>
                          <ArrowUpRight className="size-4 shrink-0 text-navy-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember-500" />
                          <span className="sr-only">(opens {current.store} in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-8 text-center text-navy-600">Choose a store above to see the products available there.</p>
        )}
      </div>
    </div>
  );
}
