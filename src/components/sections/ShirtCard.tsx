"use client";

import Image from "next/image";
import { useState } from "react";
import type { ShirtFit } from "@/lib/content";

const fits: ShirtFit[] = ["Men", "Ladies"];

export function ShirtCard({ name, type, images }: { name: string; type: string; images: Record<ShirtFit, string> }) {
  const [fit, setFit] = useState<ShirtFit>("Men");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-navy-900/5 transition-shadow duration-500 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-50">
        {fits.map((f) => (
          <Image
            key={f}
            src={images[f]}
            alt={`${f === "Men" ? "Men’s" : "Ladies’"} ${type.toLowerCase()} ${name}, branded with a logo`}
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw"
            aria-hidden={f !== fit}
            className={`object-cover object-top transition-[opacity,scale] duration-500 ease-out-quint group-hover:scale-[1.03] ${
              f === fit ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider text-navy-700 uppercase backdrop-blur">
          {type}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h4 className="font-display text-lg leading-tight font-bold text-navy-800 uppercase">{name}</h4>
        <div role="group" aria-label={`Fit for ${name}`} className="mt-auto grid grid-cols-2 gap-1 rounded-full bg-cream p-1">
          {fits.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={f === fit}
              onClick={() => setFit(f)}
              className={`rounded-full py-1.5 text-sm font-semibold transition-colors ${
                f === fit ? "bg-navy-800 text-white" : "text-navy-600 hover:text-navy-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
