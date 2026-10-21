import { Target } from "lucide-react";
import { promises } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-ember-500/15 blur-3xl" />
      <svg aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-full w-[700px]" viewBox="0 0 700 800" fill="none">
        <path d="M-40 820C160 640 260 420 300 200C320 100 360 30 420 -20" stroke="#ee7d17" strokeOpacity=".35" strokeWidth="1.5" />
        <path d="M-80 820C120 650 220 440 260 220C280 120 320 40 380 -10" stroke="#ffffff" strokeOpacity=".08" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading light eyebrow="Our approach" title="We don’t just deliver supplies." accent="We deliver impact." />
            <div data-reveal className="mt-8 space-y-5 text-lg leading-relaxed text-navy-100/80">
              <p>
                Every order placed with us is a direct investment in{" "}
                <strong className="font-semibold text-white">women-led economic growth</strong>. We are proudly owned and
                operated by women, and we understand first-hand what it means to build something from the ground up with
                integrity, determination and purpose.
              </p>
              <p>
                Working with Dontsha Dynamics means more than ticking a supplier box. It means actively contributing to
                transformation. Our business counts toward your organisation’s{" "}
                <strong className="font-semibold text-ember-300">B-BBEE procurement spend</strong>, supporting compliance
                goals while you receive a reliable, professional and accountable service.
              </p>
            </div>
          </div>

          <div className="lg:pt-10">
            <p data-reveal className="font-display text-2xl leading-snug font-semibold">
              We operate with a <span className="text-ember-400">zero-compromise</span> approach to quality and delivery.
              Every client receives:
            </p>
            <ul className="mt-8 space-y-3">
              {promises.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                  className="group flex items-center gap-5 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08] sm:p-5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-ember-500/60 text-ember-400 transition-colors group-hover:bg-ember-500 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <p className="leading-snug">
                    <span className="font-display text-xl font-bold">{title}</span>{" "}
                    <span className="text-navy-100/70">{text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-gradient-to-r from-ember-500 to-ember-600 p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white text-ember-600">
            <Target className="size-7" />
          </span>
          <p className="font-display text-3xl leading-tight font-bold sm:text-4xl">
            Choosing Dontsha Dynamics is choosing to do <span className="text-navy-900">business with purpose.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
