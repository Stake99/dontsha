import { services } from "@/lib/content";

export function Marquee() {
  const items = services.map((s) => s.title);
  const row = [...items, ...items];

  return (
    <div className="relative -rotate-1 bg-navy-800 py-5 shadow-lg">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-label="What we supply">
          {row.map((item, i) => (
            <li
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center gap-10 font-display text-xl font-semibold tracking-wide whitespace-nowrap text-white uppercase sm:text-2xl"
            >
              {item}
              <span className="size-2 rotate-45 bg-ember-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
