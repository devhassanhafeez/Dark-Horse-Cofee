import type { Metadata } from "next";
import { Clock3, MapPin, Phone } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact & Order",
  description: "Contact Dark Horse Coffee in Muscat, Oman for café updates, opening information and coffee orders.",
};

export default function ContactPage() {
  return (
    <main>
      <InnerHero eyebrow="Contact · Dark Horse Coffee" title="Let’s share a cup." copy="We are preparing our Muscat home. Follow the journey, ask a question, or return soon for our opening date and direct order line." />
      <section className="contact-grid section-shell">
        <article><MapPin /><span>Location</span><h2>Muscat, Oman</h2><p>Exact café location will be announced soon.</p></article>
        <article><Phone /><span>Call for order</span><h2>Order line coming soon</h2><p>Your phone and WhatsApp details can be connected here when ready.</p></article>
        <article><Clock3 /><span>Opening hours</span><h2>To be announced</h2><p>We will publish daily service hours before opening.</p></article>
      </section>
      <section className="contact-banner"><div><span>Muscat is calling</span><h2>Something bold<br />is brewing.</h2></div><p>Opening announcements, product prices, contact details and social links can be added as soon as you send them.</p></section>
      <SiteFooter />
    </main>
  );
}
