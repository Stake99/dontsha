import Image from "next/image";
import { Users } from "lucide-react";
import { clients, sectors } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";

export function Clients() {
  return (
    <section id="clients" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our valued clients"
              title="Trusted"
              accent="across sectors."
              intro="Our client base spans energy, property, food production and commercial sectors, a testament to our versatility and dependability as a supply partner."
            />
            <ul data-reveal className="mt-8 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-navy-50 px-4 py-2 font-display text-sm font-semibold tracking-wide text-navy-700 uppercase"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {clients.map((c, i) => (
              <li
                key={c.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="grid aspect-[4/3] place-items-center rounded-3xl bg-cream p-6 ring-1 ring-navy-900/5 transition-all duration-500 hover:bg-white hover:shadow-lg"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={c.width}
                  height={c.height}
                  className="h-auto max-h-24 w-full max-w-[11rem] object-contain mix-blend-multiply"
                />
              </li>
            ))}
            <li
              data-reveal
              style={{ "--reveal-delay": "350ms" } as React.CSSProperties}
              className="grid aspect-[4/3] place-items-center rounded-3xl bg-navy-800 p-6 text-center text-white"
            >
              <div>
                <Users className="mx-auto size-8 text-ember-400" />
                <p className="mt-3 font-display text-lg leading-tight font-bold">
                  And many more <span className="text-ember-400">partners…</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
