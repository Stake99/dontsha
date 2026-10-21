import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Award,
  BadgeCheck,
  Gift,
  Handshake,
  Headset,
  Paperclip,
  Scale,
  Shirt,
  ShieldCheck,
  ShoppingCart,
  Tag,
  Timer,
  TrendingUp,
  Truck,
  UserRound,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export const company = {
  name: "Dontsha Dynamics",
  tagline: "Supply & Delivery",
  slogan: ["Empowering Supply.", "Enabling Inclusion."],
  phone: "+27 83 722 7471",
  phoneHref: "tel:+27837227471",
  whatsappHref: "https://wa.me/27837227471",
  email: "hlengijuqu@icloud.com",
  address: ["11 Siedle Road", "Umbilo, Durban, 4001"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=11+Siedle+Road+Umbilo+Durban+4001",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export const overview: { icon: LucideIcon; text: string }[] = [
  {
    icon: UserRound,
    text: "A women-led supply and delivery company committed to reliable, efficient and inclusive procurement solutions across a wide range of industries.",
  },
  {
    icon: Handshake,
    text: "Founded on empowerment, integrity and service excellence, we give organisations seamless access to essential goods and operational supplies, while championing gender inclusivity and economic participation.",
  },
  {
    icon: ShieldCheck,
    text: "Businesses need more than products. They need consistency, quality and a dependable partner they can trust to deliver every time.",
  },
];

export const vision =
  "To become a trusted and leading supply partner, recognised for delivering value-driven solutions while advancing inclusive and sustainable business practices.";

export const mission =
  "To provide efficient, reliable and timely supply solutions, supporting businesses with high-quality products, promoting women empowerment, and building long-term partnerships through trust and excellence.";

export const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Users, title: "Inclusivity & Empowerment", text: "Proudly women-led and committed to gender equality." },
  { icon: ShieldCheck, title: "Reliability", text: "Consistent, on-time delivery you can count on." },
  { icon: Award, title: "Quality", text: "Only trusted, durable products supplied." },
  { icon: Scale, title: "Integrity", text: "Transparent and ethical business practices." },
  { icon: UserRound, title: "Customer-Centricity", text: "Tailored solutions to meet each client’s needs." },
];

export const services: { icon: LucideIcon; title: string; items: string[] }[] = [
  {
    icon: Paperclip,
    title: "Office & Operational Supplies",
    items: [
      "Stationery, paper, files and office consumables",
      "Printing equipment and office accessories",
      "Cleaning materials and hygiene products",
    ],
  },
  {
    icon: Shirt,
    title: "Uniforms & Workwear",
    items: ["Corporate uniforms", "Protective clothing (PPE)", "Custom-branded apparel"],
  },
  {
    icon: Gift,
    title: "Promotional Items & Branding",
    items: ["Corporate gifts", "Branded merchandise", "Marketing and promotional materials"],
  },
  {
    icon: Armchair,
    title: "Furniture Supply",
    items: ["Office desks and chairs", "Storage units and filing systems", "Custom office furniture solutions"],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Catering Supplies",
    items: ["Packaged food supplies", "Catering for meetings and events", "Bulk food procurement"],
  },
  {
    icon: Truck,
    title: "General Supply & Delivery",
    items: [
      "End-to-end sourcing of business requirements",
      "Bulk procurement and logistics",
      "Tailored supply solutions based on client needs",
    ],
  },
];

export const reasons: { icon: LucideIcon; text: string }[] = [
  { icon: UserRound, text: "Women-led, inclusive business" },
  { icon: ShoppingCart, text: "One-stop solution for diverse supply needs" },
  { icon: Truck, text: "Reliable and efficient delivery network" },
  { icon: Award, text: "Commitment to quality and service excellence" },
  { icon: TrendingUp, text: "Flexible and scalable procurement support" },
  { icon: Tag, text: "Competitive pricing across all categories" },
  { icon: Headset, text: "Responsive, dedicated customer support" },
  { icon: Timer, text: "Fast turnaround on all orders" },
];

export const promises: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: UserRound, title: "A dedicated point of contact", text: "for seamless communication" },
  { icon: Tag, title: "Transparent pricing", text: "with no hidden costs" },
  { icon: BadgeCheck, title: "On-time delivery", text: "backed by accountability" },
  { icon: TrendingUp, title: "Flexible procurement", text: "that scales with your needs" },
];

export const clients = [
  { name: "Regus", src: "/images/clients/regus.png", width: 177, height: 94 },
  { name: "Maxprop", src: "/images/clients/maxprop.png", width: 157, height: 116 },
  { name: "Energy sector client", src: "/images/clients/rs.png", width: 131, height: 114 },
  { name: "uShaka Marine World", src: "/images/clients/ushaka.png", width: 192, height: 139 },
  { name: "Nombanjinji Family Property", src: "/images/clients/nombanjinji.png", width: 219, height: 121 },
];

export const sectors = ["Energy", "Property", "Food production", "Commercial"];
