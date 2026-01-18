import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dukeel Transportation & Freight Corporation",
    template: "%s | Dukeel Transportation & Freight",
  },
  description:
    "Veteran-owned transportation and logistics company providing dependable freight, hauling, and logistics support for commercial clients and government agencies.",
  keywords: [
    "veteran-owned transportation",
    "freight logistics",
    "government contracting",
    "DoD logistics",
    "Texas freight company",
  ],
  authors: [{ name: "Dukeel Transportation & Freight Corporation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dukeel.com",
    siteName: "Dukeel Transportation & Freight Corporation",
    title: "Dukeel Transportation & Freight Corporation",
    description:
      "Veteran-owned transportation and logistics company providing dependable freight, hauling, and logistics support for commercial clients and government agencies.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dukeel Transportation & Freight Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dukeel Transportation & Freight Corporation",
    description:
      "Veteran-owned transportation and logistics company providing dependable freight, hauling, and logistics support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Government", href: "/government" },
  { label: "Readiness", href: "/readiness" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar links={navLinks} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
