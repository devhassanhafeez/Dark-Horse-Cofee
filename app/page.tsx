import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const favourites = [
  { name: "Horse Brew", note: "Our signature house ritual", tone: "No. 01" },
  { name: "Spanish Latte", note: "Velvety, balanced, deeply comforting", tone: "No. 02" },
  { name: "V60", note: "A clean expression of origin", tone: "No. 03" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <CinematicHero />
      <section className="marquee" aria-label="Brand qualities">
        <div className="marquee-track"><span>Specialty coffee</span><i /><span>Muscat, Oman</span><i /><span>Roasted with intention</span><i /><span>Dark Horse rituals</span><i /><span aria-hidden="true">Specialty coffee</span><i aria-hidden="true" /><span aria-hidden="true">Muscat, Oman</span></div>
      </section>
      <section className="story-bridge section-shell" id="story">
        <div className="eyebrow"><Sparkles size={14} /> Born in Muscat</div>
        <div className="story-grid">
          <h2>From desert stillness,<br />a bolder ritual.</h2>
          <div className="story-copy">
            <p>Dark Horse Coffee brings precise brewing and generous Omani hospitality into one contemporary coffee experience. Familiar warmth, unexpected character, and a cup worth slowing down for.</p>
            <Link className="text-link" href="/about">Our story <ArrowUpRight size={18} /></Link>
          </div>
        </div>
        <div className="dune-line" aria-hidden="true" />
      </section>
      <section className="ritual-section">
        <div className="section-shell ritual-layout">
          <div className="ritual-sticky">
            <span className="section-number">02 / THE RITUAL</span>
            <h2>Every cup has<br />a point of view.</h2>
            <p>Espresso with clarity. Matcha with calm. Signatures made to be remembered. Explore a menu designed for every pace of Muscat.</p>
            <Link className="dark-button" href="/products">Explore the full menu <ArrowDownRight size={18} /></Link>
          </div>
          <div className="favourites-list">
            {favourites.map((item) => (
              <article className="favourite-card" key={item.name}><span>{item.tone}</span><div><h3>{item.name}</h3><p>{item.note}</p></div><ArrowUpRight size={24} /></article>
            ))}
          </div>
        </div>
      </section>
      <section className="origin-section section-shell">
        <div className="origin-orbit" aria-hidden="true"><div className="origin-bean" /><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /></div>
        <div className="origin-copy"><span className="section-number">03 / ORIGIN</span><h2>A global bean.<br />An Omani soul.</h2><p>We honour the journey from farm to cup, then finish it with the welcome, detail, and quiet confidence of Oman.</p></div>
      </section>
      <section className="visit-panel">
        <div className="visit-glow" aria-hidden="true" />
        <div className="visit-content"><MapPin size={22} /><span>Muscat · Sultanate of Oman</span><h2>Meet your<br />new daily ritual.</h2><p>Opening details and order line coming soon.</p><Link className="light-button" href="/contact">Stay connected</Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
