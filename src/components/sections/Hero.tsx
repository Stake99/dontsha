import Image from "next/image";
import { ArrowRight, Award, BadgeCheck, ShieldCheck, Users } from "lucide-react";
import heroTruck from "../../../public/images/hero-truck.jpg";

const pillars = [
  { icon: ShieldCheck, label: "Reliable" },
  { icon: Users, label: "Inclusive" },
  { icon: Award, label: "Excellence" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-32 lg:pb-24">
      {/* Background swooshes echoing the brand profile */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-24 h-[620px] w-[1100px] text-navy-800 opacity-[0.06] sm:opacity-100"
        viewBox="0 0 1100 620"
        fill="none"
      >
        <path d="M0 620C260 560 520 520 760 380C930 280 1030 150 1100 0V620H0Z" fill="currentColor" opacity="0.04" />
        <path d="M80 640C360 560 640 500 860 330C990 230 1060 120 1110 10" stroke="#ee7d17" strokeWidth="2" />
        <path d="M10 660C320 590 610 540 840 380C980 280 1060 160 1110 60" stroke="#ee7d17" strokeOpacity=".35" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
        <div>
          <p
            data-reveal
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-navy-700 shadow-sm ring-1 ring-navy-900/5 sm:text-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-ember-500" />
            </span>
            Women-led supply &amp; delivery · Durban, South Africa
          </p>

          <h1
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="mt-7 font-display text-[3.4rem] leading-[0.92] font-bold tracking-tight text-navy-800 uppercase sm:text-7xl lg:text-[4.9rem]"
          >
            Empowering supply.
            <span className="mt-1 block text-ember-500">Enabling inclusion.</span>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mt-7 max-w-xl text-lg leading-relaxed text-navy-700/85"
          >
            From stationery and PPE to furniture, branding and catering, we source it, supply it and deliver it on
            time. One dependable partner for your operations, and procurement spend that counts toward your B-BBEE
            goals.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-7 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(238,125,23,0.8)] transition-all hover:bg-ember-600 active:scale-[0.98]"
            >
              Request a quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-navy-800 ring-1 ring-navy-900/10 transition-all hover:ring-navy-900/30 active:scale-[0.98]"
            >
              Explore our services
            </a>
          </div>

          <ul
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {pillars.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-ember-500/40 text-ember-500">
                  <Icon className="size-[18px]" />
                </span>
                <span className="font-display text-lg font-semibold text-navy-800">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="relative mx-auto w-full max-w-[26rem] lg:mr-4"
        >
          <div className="absolute -inset-4 rounded-[3rem] rounded-tl-[10rem] bg-gradient-to-br from-ember-400 to-ember-600 opacity-90 rotate-3 sm:-inset-5" />
          <div className="relative aspect-[3/5] overflow-hidden rounded-[2.5rem] rounded-tl-[9rem] bg-navy-800 shadow-2xl">
            <Image
              src={heroTruck}
              alt="A Dontsha Dynamics delivery truck being loaded with branded boxes at sunset"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 416px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/5 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
              <p className="font-display text-2xl leading-tight font-semibold text-white sm:text-3xl">
                If your business needs it,
                <br />
                <span className="text-ember-300">we supply it, and deliver it.</span>
              </p>
            </div>
          </div>

          <div className="absolute top-10 -left-4 flex animate-float items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl ring-1 ring-navy-900/5 backdrop-blur sm:-left-10">
            <span className="grid size-11 place-items-center rounded-xl bg-navy-800 text-ember-400">
              <BadgeCheck className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-xs text-navy-500">Counts toward your</span>
              <span className="font-display text-lg font-bold text-navy-800">B-BBEE spend</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
