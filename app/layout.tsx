import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dark-house-coffee.com"),
  title: {
    default: "Dark Horse Coffee | Specialty Coffee in Muscat, Oman",
    template: "%s | Dark Horse Coffee",
  },
  description: "Dark Horse Coffee is a contemporary specialty coffee experience in Muscat, Oman—serving espresso, signature drinks, matcha and slow-brewed coffee.",
  keywords: ["coffee Muscat", "specialty coffee Oman", "coffee shop Muscat", "Dark Horse Coffee", "iced coffee Oman", "V60 Muscat"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dark Horse Coffee — Muscat, Oman",
    description: "A bold coffee ritual shaped by Omani warmth, desert calm and a taste for the unexpected.",
    type: "website",
    locale: "en_OM",
    siteName: "Dark Horse Coffee",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-OM">
      <body className="antialiased">{children}</body>
    </html>
  );
}
