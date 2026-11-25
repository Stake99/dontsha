import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Backpack,
  Bath,
  Briefcase,
  CupSoda,
  Dumbbell,
  GraduationCap,
  Handbag,
  Headphones,
  KeyRound,
  Laptop,
  Luggage,
  PawPrint,
  PenLine,
  ShoppingBag,
  Snowflake,
  Sofa,
  Sparkles,
  Umbrella,
  Volleyball,
  Wallet,
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
  phone: "069 988 0341",
  phoneHref: "tel:+27699880341",
  whatsappHref: "https://wa.me/27699880341",
  email: "dontshadynamics@gmail.com",
  address: ["11 Siedle Road", "Umbilo, Durban, 4001"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=11+Siedle+Road+Umbilo+Durban+4001",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Customisation", href: "#customisation" },
  { label: "Clients", href: "#clients" },
  { label: "Shop", href: "#shop" },
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
    items: ["Packaged food supplies", "Catering equipment and disposables", "Bulk food procurement"],
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

export type Store = "Amazon" | "Makro";

const amazon = (asin: string) => `https://www.amazon.co.za/dp/${asin}`;
const makro = (path: string) => `https://www.makro.co.za/${path}`;

export const shop: { title: string; products: { name: string; store: Store; href: string }[] }[] = [
  {
    title: "Kitchen appliances",
    products: [
      { name: "2-in-1 countertop blender with glass jug and grinder, 1.4L", store: "Amazon", href: amazon("B0HM9SBT2B") },
      { name: "Portable USB rechargeable personal blender", store: "Amazon", href: amazon("B0HM9JPRBF") },
      { name: "Handheld electric milk frother", store: "Amazon", href: amazon("B0HM93ZL2X") },
      { name: "Sunbeam hand blender with 1.5L glass jar and grinder, 400W", store: "Makro", href: makro("sunbeam-1-5-litre-glass-jar-stainless-steel-grinder-400-w-hand-blender/p/itm183f62ac5a726?pid=HBRHMKKNSMCUCVGH&lid=LSTHBRHMKKNSMCUCVGHSXYODT") },
      { name: "6L air fryer", store: "Makro", href: makro("fair-price-deals-6l-air-fryer/p/itm4a303999bb7bc?pid=ARFH45VCBGAXFZU6&lid=LSTARFH45VCBGAXFZU6BQDGK7") },
      { name: "Hinotori handheld milk beater", store: "Makro", href: makro("hinotori-handheld-milk-beater-black-kjbq-17-stainless-steel-spiral-whisk/p/itm802833ab44372?pid=WHKHNZM2HFR5D4BA&lid=LSTWHKHNZM2HFR5D4BAJALDTY") },
    ],
  },
  {
    title: "Cookware & storage",
    products: [
      { name: "Enamelled cast iron cookware set, 7 piece", store: "Amazon", href: amazon("B0HM9MNCY1") },
      { name: "Glass spice and sugar jars with bamboo lids, set of 3", store: "Amazon", href: amazon("B0HM94YH6K") },
      { name: "Enamel coated cast iron cookware set", store: "Makro", href: makro("smte-enamel-pots-non-stick-coated-cast-iron-cookware-set/p/itmdeb56f165988e?pid=CKSHGFYSBQHQFVGJ&lid=LSTCKSHGFYSBQHQFVGJ7WQZRG") },
      { name: "EZ Select glass utility container, 650ml", store: "Makro", href: makro("ez-select-glass-utility-container-650-ml/p/itm6842db0f8dea9?pid=CNRHB82HZVQZ5RCJ&lid=LSTCNRHB82HZVQZ5RCJAZIVKF") },
      { name: "Stainless steel double chafing dish, 6L", store: "Makro", href: makro("stainless-steel-double-chafing-dish-tsf02crsa8-6-l-pan/p/itm33f292162c697?pid=CHDHAE3PWK4GDVKZ&lid=LSTCHDHAE3PWK4GDVKZ4RUT3P") },
    ],
  },
  {
    title: "Tableware & drinkware",
    products: [
      { name: "White dinner plates, set of 4", store: "Amazon", href: amazon("B0HMS2Z6WK") },
      { name: "Stemless champagne flutes, set of 6", store: "Amazon", href: amazon("B0HM9QKKQB") },
      { name: "Red party cups, 10 pack", store: "Amazon", href: amazon("B0HN2VCSKB") },
      { name: "Home Classix Franschhoek tumblers, pack of 4", store: "Makro", href: makro("home-classix-pack-4-franschoek-tumbler-water-juice-glass-set/p/itm47da2b7555d5b?pid=GLSHBHRTNBFYH3BN&lid=LSTGLSHBHRTNBFYH3BNMLAFGU") },
      { name: "Home Classix 96412", store: "Makro", href: makro("home-classix-96412/p/itm5c7282346f0bf?pid=AFTH6ZWFC3E6QKPG&lid=LSTAFTH6ZWFC3E6QKPGZPKBHF") },
      { name: "Clear smoothie cups with lids, 650ml, pack of 25", store: "Makro", href: makro("charms-pack-25-650ml-clear-pet-smoothie-cup-lid-water-juice-glass/p/itm01e43c07e944b?pid=GLSHHAR5ASKXKPGM&lid=LSTGLSHHAR5ASKXKPGMWXWDBN") },
      { name: "Vaisselle festive plastic pack of 50", store: "Makro", href: makro("vaisselle-festive-pack-50-plastic/p/itm1ac18ccb8f6f2?pid=CSAHCPWZCBDPJQDY&lid=LSTCSAHCPWZCBDPJQDYFTRA3A") },
      { name: "Vacuum insulated stainless steel travel mug", store: "Makro", href: makro("generic-vacuum-insulated-travel-stainless-steel-coffee-mug/p/itm3ee8f18556918?pid=MUGHBYC6JUCHSUTP&lid=LSTMUGHBYC6JUCHSUTPJGWI9D") },
      { name: "His and hers glass coffee mugs, 2 pack", store: "Makro", href: makro("unbranded-2-pack-glasss-his-hers-glass-coffee-mug/p/itm08ad6088cff08?pid=MUGHNGA3BNUFHX3V&lid=LSTMUGHNGA3BNUFHX3VBHZLKE") },
      { name: "Bullet-shaped glass coffee mug, 225ml", store: "Makro", href: makro("crockery-centre-glass-bullet-shaped-225ml-coffee-mug/p/itmf072c1da2200f?pid=MUGH7Z97RX6ZAWWT&lid=LSTMUGH7Z97RX6ZAWWTMO0GKT") },
    ],
  },
  {
    title: "Festive & décor",
    products: [
      { name: "Artificial pine Christmas tree with folding stand", store: "Amazon", href: amazon("B0HM9NWS2F") },
      { name: "Christmas decoration combo: 48 baubles, tinsel and LED lights", store: "Amazon", href: amazon("B0HM94L2Z4") },
      { name: "Red and gold Christmas baubles, set of 30", store: "Amazon", href: amazon("B0HM99L8S8") },
      { name: "Unscented white tealight candles, 50 pack", store: "Amazon", href: amazon("B0HM9MSKWM") },
      { name: "Artificial Christmas tree", store: "Makro", href: makro("em-ct5-0-artificial-christmas-tree/p/itm709d6491d87fe?pid=XMTH5JWFBHGFNRJM&lid=LSTXMTH5JWFBHGFNRJMO6HYMF") },
      { name: "Red Christmas baubles set", store: "Makro", href: makro("deco-red-christmas-baubles-set-balls/p/itma4d89cdd4c748?pid=XTDH6AN7YRVMXWGV&lid=LSTXTDH6AN7YRVMXWGV2ZTIHB") },
      { name: "Metallic gold tinsel garland", store: "Makro", href: makro("tog-metallic-gold-tinsel-garland-garlands/p/itm0c8f20b46455a?pid=XTDHH255VPF4KREB&lid=LSTXTDHH255VPF4KREBO2K6MK") },
    ],
  },
  {
    title: "Gifting & stationery",
    products: [
      { name: "Satin ribbon set, 20 rolls in assorted colours", store: "Amazon", href: amazon("B0HM97VSP9") },
      { name: "Multicolour satin ribbon, pack of 20", store: "Makro", href: "https://business.makro.co.za/stationery-office-furniture/paper-filing/covers-tags/gift-wrap/generic-dd-gw-01-multicolor-satin-ribbon-pack-of-20-/p/RBNHS3RGW3XHCPRX" },
      { name: "Plaid paper cake boxes with 4 dividers", store: "Makro", href: makro("smte-plaid-paper-cake-box-4-dividers-188-cm-mini-bakery-pastry-gift/p/itm2a36e5387e581?pid=FESHKHGMTG38JPDQ&lid=LSTFESHKHGMTG38JPDQXHUQTD") },
      { name: "A4 hard cover books, 96 pages, 10 pack", store: "Makro", href: makro("freedom-stationary-10-pack-a4-1-quire-hard-cover-school-book-96-pages-examination-pad/p/itm0e40dbd69a550?pid=EXPH63RHXBPFAFZH&lid=LSTEXPH63RHXBPFAFZHE9CN7N") },
    ],
  },
  {
    title: "Cleaning & facilities",
    products: [
      { name: "Addis lift-top plastic bin", store: "Makro", href: makro("addis-lift-top-bin-plastic-dustbin/p/itmcf0ae31232e38?pid=DBNHFXHSPFYCCXZV&lid=LSTDBNHFXHSPFYCCXZV23NW7M") },
      { name: "Round wire mesh steel bin", store: "Makro", href: makro("kersol-round-wire-mesh-bin-steel-dustbin/p/itm4794e55387536?pid=DBNH76AXCUGZPNA5&lid=LSTDBNH76AXCUGZPNA5MPRBHL") },
      { name: "Chubby wet and dry scrubbing brush", store: "Makro", href: makro("prosafe-chubby-scrubbing-brush-wet-dry-wooden-handle-nylon/p/itmfecf83a96c847?pid=BRBH6RDJ2HVWHUFH&lid=LSTBRBH6RDJ2HVWHUFHJZUSDE") },
    ],
  },
  {
    title: "Games & toys",
    products: [
      { name: "Open Bar table tennis set", store: "Makro", href: makro("open-bar-table-tennis/p/itm97596a9e6484e?pid=TSPHZMM5HGCTUFRH&lid=LSTTSPHZMM5HGCTUFRH2SH0MS") },
      { name: "LEGO Creator 3in1 space robot set (31164)", store: "Makro", href: makro("lego-creator-3in1-space-toy-kids-building-set-31164-robots/p/itm379a78c525b2d?pid=BCNHNBZ6YEX92MUK&lid=LSTBCNHNBZ6YEX92MUKGVJCH4") },
    ],
  },
];

export type ShirtFit = "Men" | "Ladies";

const shirt = (slug: string) => ({
  Men: `/images/shirts/mens-${slug}.jpg`,
  Ladies: `/images/shirts/ladies-${slug}.jpg`,
});

/** Brandable shirts. Every style comes in a men's and a ladies' fit. */
export const customShirts: { name: string; type: string; images: Record<ShirtFit, string> }[] = [
  { name: "Championship Golf Shirt", type: "Golf shirt", images: shirt("championship-golf-shirt") },
  { name: "Delta Golf Shirt", type: "Golf shirt", images: shirt("delta-golf-shirt") },
  { name: "Exhibit Golf Shirt", type: "Golf shirt", images: shirt("exhibit-golf-shirt") },
  { name: "Kensington Shirt", type: "Short sleeve", images: shirt("ss-kensington-shirt") },
  { name: "Kensington Shirt", type: "Long sleeve", images: shirt("ls-kensington-shirt") },
  { name: "Wildstone Shirt", type: "Short sleeve", images: shirt("ss-wildstone-shirt") },
  { name: "Wildstone Shirt", type: "Long sleeve", images: shirt("ls-wildstone-shirt") },
  { name: "Mawenzi Twill Shirt", type: "Long sleeve", images: shirt("ls-mawenzi-twill-shirt") },
  { name: "Eastwood Denim Shirt", type: "Long sleeve", images: shirt("ls-eastwood-denim-shirt") },
  { name: "Serengeti 2-Tone Bush Shirt", type: "Short sleeve", images: shirt("ss-serengeti-2-tone-bush-shirt") },
];

/** Product categories we can brand with a client's logo. */
export const customCategories: { icon: LucideIcon; name: string }[] = [
  { icon: Umbrella, name: "Beach and Outdoor" },
  { icon: ShoppingBag, name: "Beach Bags" },
  { icon: Briefcase, name: "Conference Bags" },
  { icon: CupSoda, name: "Coolers and Lunchware" },
  { icon: Handbag, name: "Crossbody and Waist Bags" },
  { icon: Backpack, name: "Drawstring Bags and Backpacks" },
  { icon: Sofa, name: "Home and Living" },
  { icon: KeyRound, name: "Lanyards, Wrist Straps and Keyholders" },
  { icon: Sparkles, name: "Personal Care and Pamper Gifts" },
  { icon: PawPrint, name: "Pet Accessories" },
  { icon: Wallet, name: "Purses and Wallets" },
  { icon: GraduationCap, name: "School Accessories" },
  { icon: ShoppingBag, name: "Shopper and Tote Bags" },
  { icon: Dumbbell, name: "Sports and Fitness" },
  { icon: Volleyball, name: "Sports Bags" },
  { icon: PenLine, name: "Stationery" },
  { icon: Laptop, name: "Tech Sleeves" },
  { icon: Bath, name: "Toiletry and Cosmetic Bags" },
  { icon: Luggage, name: "Travel Accessories" },
  { icon: Headphones, name: "Tech Accessories" },
  { icon: Snowflake, name: "Winter Items" },
];
