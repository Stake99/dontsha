import { shop, type Store } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { StoreBrowser, type StoreGroup } from "./StoreBrowser";

const storeMeta: Record<Store, Omit<StoreGroup, "store" | "categories">> = {
  Makro: { logo: { src: "/images/stores/makro.jpg", width: 800, height: 229 }, accent: "ring-[#e6c200]" },
  Amazon: { logo: { src: "/images/stores/amazon.svg", width: 603, height: 182 }, accent: "ring-[#ff9900]" },
};

/** Regroups the category-first shop list by store, dropping categories a store has no products in. */
const stores: StoreGroup[] = (["Makro", "Amazon"] as const).map((store) => ({
  store,
  ...storeMeta[store],
  categories: shop
    .map(({ title, products }) => ({
      title,
      products: products.filter((p) => p.store === store).map(({ name, href }) => ({ name, href })),
    }))
    .filter((c) => c.products.length > 0),
}));

export function Shop() {
  return (
    <section id="shop" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shop online"
          title="Buy our products"
          accent="on Amazon & Makro."
          intro="Our product range is also available through Amazon and Makro. Choose a store to see what’s available there. For bulk or business orders, request a quote below."
        />
        <div data-reveal>
          <StoreBrowser stores={stores} />
        </div>
      </div>
    </section>
  );
}
