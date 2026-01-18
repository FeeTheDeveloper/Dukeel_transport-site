import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  className?: string;
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Freight Shipping", href: "/services/freight" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Warehousing", href: "/services/warehousing" },
      { label: "Supply Chain", href: "/services/supply-chain" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Track Shipment", href: "/track" },
      { label: "Get a Quote", href: "/quote" },
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
    ],
  },
];

/**
 * Footer component with navigation sections, contact info, and legal links.
 * Enterprise-ready with accessibility and proper semantic structure.
 */
export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-primary text-white ${className}`}
      role="contentinfo"
    >
      {/* Main Footer */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <Image
                src="/assets/logo.png"
                alt="Dukeel Transportation & Freight Corporation"
                width={48}
                height={48}
                className="h-12 w-12 brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">Dukeel</span>
                <span className="text-sm text-light opacity-80">
                  Transportation & Freight Corporation
                </span>
              </div>
            </Link>
            <p className="text-light opacity-80 max-w-sm mb-6 leading-relaxed">
              Delivering excellence in transportation and freight services.
              Your trusted partner for reliable logistics solutions across the
              nation.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-light opacity-80">
              <p className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>1-800-DUKEEL-1</span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@dukeeltransport.com</span>
              </p>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-light opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-steel">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-light opacity-70">
              © {currentYear} Dukeel Transportation & Freight Corporation. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-light opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-light opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-light opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
