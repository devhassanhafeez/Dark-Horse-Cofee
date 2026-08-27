import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Coffee Menu",
  description: "Explore espresso, iced coffee, matcha, drip coffee and signature drinks at Dark Horse Coffee in Muscat, Oman.",
};

const menu = [
  { category: "Hot Drinks", number: "01", items: ["Espresso", "Macchiato", "Americano", "Coffee Latte", "Cappuccino", "Cortado", "Flat White", "Spanish Latte", "Caramel Latte", "Mocha Latte", "Salted Caramel", "Hot Chocolate", "Hot Matcha"] },
  { category: "Iced Coffee", number: "02", items: ["Iced Americano", "Iced Latte", "Iced Spanish Latte", "Iced Caramel Latte", "Iced Mocha", "Iced Salted Caramel"] },
  { category: "Iced Drinks", number: "03", items: ["Strawberry Iced Tea", "Peach Iced Tea", "Passion Fruit Iced Tea", "Kombucha", "Iced Matcha", "Coconut Matcha"] },
  { category: "Drip Coffee", number: "04", items: ["V60", "AeroPress", "Cold Brew", "Milk Brew"] },
  { category: "Signatures", number: "05", items: ["Horse Brew", "Pineapple Breeze"] },
];

export default function ProductsPage() {
  return (
    <main>
      <InnerHero eyebrow="The menu · Crafted for every pace" title="Find your ritual." copy="From bright, precise espresso to slow-brewed coffee and unmistakable signatures—each drink carries the Dark Horse character." />
      <section className="menu-intro section-shell"><p>Our complete drinks menu</p><span>Prices and seasonal availability will be added before opening.</span></section>
      <section className="menu-grid section-shell">
        {menu.map((group) => (
          <article className="menu-group" key={group.category}>
            <div className="menu-heading"><span>{group.number}</span><h2>{group.category}</h2></div>
            <ul>{group.items.map((item) => <li key={item}><span>{item}</span><i /></li>)}</ul>
          </article>
        ))}
      </section>
      <section className="menu-note"><span>Ask your barista</span><h2>Make it yours.</h2><p>Alternative milk, sweetness preferences, and brewing recommendations are available on request.</p></section>
      <SiteFooter />
    </main>
  );
}
