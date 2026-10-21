# Dontsha Dynamics website

Marketing site for Dontsha Dynamics, a women-led supply and delivery company in Durban. Built with Next.js 16 (App Router), Tailwind CSS v4 and lucide-react.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build && pnpm start
```

## Where things live

- `src/lib/content.ts`: all copy, services, values, client list and contact details. Edit text here.
- `src/components/sections/`: one component per page section (Hero, About, Services, Approach, WhyUs, Clients, Contact, Footer).
- `public/images/`: logo, hero photo and client logos, extracted from the 2025 company profile PDF.
- `src/app/globals.css`: brand colours (`navy-*`, `ember-*`), fonts and the scroll-reveal animation.

## Quote form

There is no mail backend yet. The form opens the visitor's email app with the request pre-filled and addressed to the company email. To receive submissions directly, swap `QuoteForm.tsx` for a Server Action that posts to an email service such as Resend.
