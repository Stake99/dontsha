import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-3 font-display text-sm font-semibold tracking-[0.2em] uppercase ${light ? "text-ember-300" : "text-ember-600"}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div data-reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-4xl leading-[1.02] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-navy-800"}`}
      >
        {title} <span className="text-ember-500">{accent}</span>
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-navy-100/80" : "text-navy-700/80"}`}>{intro}</p>
      )}
    </div>
  );
}
