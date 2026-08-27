import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-mark">DH<span>°</span></div>
      <div className="footer-copy"><p>Dark Horse Coffee</p><span>Specialty coffee, grounded in Muscat.</span></div>
      <nav aria-label="Footer navigation"><Link href="/about">Our story</Link><Link href="/products">Menu</Link><Link href="/contact">Contact</Link></nav>
      <small>© {new Date().getFullYear()} Dark Horse Coffee</small>
    </footer>
  );
}
