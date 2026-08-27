import SiteHeader from "./SiteHeader";

export default function InnerHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <>
      <SiteHeader />
      <section className="inner-hero">
        <div className="inner-sun" aria-hidden="true" />
        <div className="section-shell inner-hero-content"><p className="hero-kicker">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div>
        <div className="inner-dunes" aria-hidden="true" />
      </section>
    </>
  );
}
