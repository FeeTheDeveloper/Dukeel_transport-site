"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links?: NavLink[];
  className?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Navbar component with responsive mobile menu.
 * Includes brand logo, navigation links, and CTA button.
 */
export function Navbar({ links = defaultLinks, className = "" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`bg-white border-b border-border sticky top-0 z-50 ${className}`}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <Image
              src="/assets/logo.png"
              alt="Dukeel Transportation & Freight Corporation"
              width={44}
              height={44}
              className="h-10 w-10 lg:h-11 lg:w-11"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-primary leading-tight">
                Dukeel
              </span>
              <span className="text-xs text-steel hidden sm:block">
                Transportation & Freight
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel font-medium hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-steel hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-border py-4"
          >
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-steel font-medium hover:text-primary hover:bg-light rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <Button variant="primary" size="md" fullWidth>
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
