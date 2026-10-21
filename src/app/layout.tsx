import type { Metadata, Viewport } from "next";
import { Barlow, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dontsha Dynamics | Women-led Supply & Delivery, Durban",
  description:
    "Dontsha Dynamics is a women-led supply and delivery company in Durban. Office supplies, uniforms and PPE, branding, furniture, catering and end-to-end procurement, delivered on time.",
  keywords: [
    "supply and delivery",
    "procurement",
    "women-led business",
    "B-BBEE supplier",
    "Durban",
    "office supplies",
    "PPE",
    "corporate uniforms",
  ],
  openGraph: {
    title: "Dontsha Dynamics | Supply & Delivery",
    description: "Empowering Supply. Enabling Inclusion. A women-led supply partner for South African businesses.",
    type: "website",
    locale: "en_ZA",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" suppressHydrationWarning className={`${barlow.variable} ${jakarta.variable} antialiased`}>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
