import Image from "next/image";
import logoMark from "../../public/images/logo-mark.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid size-11 place-items-center rounded-xl ${inverted ? "bg-white" : "bg-white shadow-sm ring-1 ring-navy-900/5"}`}
      >
        <Image src={logoMark} alt="" className="h-auto w-10" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-bold tracking-tight ${inverted ? "text-white" : "text-navy-800"}`}
        >
          Dontsha
        </span>
        <span className="mt-0.5 font-display text-[0.62rem] font-semibold tracking-[0.28em] text-ember-500 uppercase">
          Dynamics
        </span>
      </span>
    </span>
  );
}
