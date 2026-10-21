import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { QuoteForm } from "./QuoteForm";

const channels = [
  { icon: Phone, label: "Customer hotline", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "Email address", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Physical address", value: company.address.join(", "), href: company.mapsHref },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact us"
              title="Let’s streamline"
              accent="your supply."
              intro="Partner with us to streamline your operations while supporting inclusive and sustainable business growth."
            />
            <ul className="mt-10 space-y-3">
              {channels.map(({ icon: Icon, label, value, href }, i) => (
                <li key={label} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-navy-900/5 transition-all hover:shadow-lg hover:ring-ember-500/30"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-ember-500 text-ember-500 transition-colors group-hover:bg-ember-500 group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-wider text-navy-500 uppercase">{label}</span>
                      <span className="block font-display text-lg font-semibold break-words text-navy-800">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              data-reveal
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-transform hover:brightness-95 active:scale-[0.98]"
            >
              <MessageCircle className="size-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(10,22,40,0.3)] ring-1 ring-navy-900/5 sm:p-10"
          >
            <h3 className="font-display text-3xl font-bold text-navy-800 uppercase">Request a quote</h3>
            <p className="mt-2 mb-8 text-navy-700/80">
              Tell us what you need and we’ll come back with transparent pricing, no hidden costs.
            </p>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
