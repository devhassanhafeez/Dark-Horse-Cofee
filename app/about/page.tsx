import type { Metadata } from "next";
import { Coffee, Compass, HeartHandshake } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover Dark Horse Coffee, a contemporary specialty coffee brand inspired by Omani hospitality and the spirit of Muscat.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerHero eyebrow="Our story · Muscat, Oman" title="Quiet confidence. Bold coffee." copy="Dark Horse is an independent coffee spirit—rooted in hospitality, driven by craft, and always willing to take the less expected path." />
      <section className="manifesto section-shell">
        <span className="section-number">01 / WHY DARK HORSE</span>
        <div><h2>For those who choose<br />their own rhythm.</h2><p>Our name is a tribute to individuality: the overlooked contender, the surprising favourite, the one with more character than noise. We bring that same mindset to every drink we serve.</p></div>
      </section>
      <section className="values-grid section-shell">
        <article><Coffee /><span>01</span><h3>Craft, made clear</h3><p>Thoughtful recipes, careful extraction, and ingredients chosen for flavour—not fashion.</p></article>
        <article><HeartHandshake /><span>02</span><h3>Omani welcome</h3><p>Warm, generous service that turns a daily coffee into a moment of belonging.</p></article>
        <article><Compass /><span>03</span><h3>Curious by nature</h3><p>Global coffee culture, interpreted with a distinctive point of view from Muscat.</p></article>
      </section>
      <section className="quote-section"><blockquote>“The best rituals feel familiar—and still manage to surprise you.”</blockquote><p>Dark Horse philosophy</p></section>
      <SiteFooter />
    </main>
  );
}
