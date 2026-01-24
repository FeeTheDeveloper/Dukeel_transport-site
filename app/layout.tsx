import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/ui";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://dukeeltransport.com"
  ),
  title: {
    default: "Dukeel Transport | Freight, Logistics & Fleet Operations",
    template: "%s | Dukeel Transport",
  },
  description:
    "Dukeel Transport delivers enterprise-grade freight, fleet, and logistics operations built for high-impact supply chains across the United States.",
  keywords: [
    "freight logistics",
    "fleet operations",
    "enterprise transportation",
    "supply chain performance",
    "Texas logistics company",
  ],
  authors: [{ name: "Dukeel Transport" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dukeeltransport.com",
    siteName: "Dukeel Transport",
    title: "Dukeel Transport",
    description:
      "Enterprise-grade freight, fleet, and logistics operations built for high-impact supply chains.",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dukeel Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dukeel Transport",
    description:
      "Enterprise-grade freight, fleet, and logistics operations built for high-impact supply chains.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar links={navLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
