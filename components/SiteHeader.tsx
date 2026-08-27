import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const links = [["Home", "/"], ["Our story", "/about"], ["Menu", "/products"], ["Contact", "/contact"]];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="Dark Horse Coffee home">
        <Image src="/dark-horse-logo.jpeg" alt="" width={48} height={48} priority />
        <span><strong>Dark Horse</strong><small>Coffee · Muscat</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact">Call for order <span>↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><Menu size={21} /></summary>
        <nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      </details>
    </header>
  );
}
