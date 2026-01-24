import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { SignatureStamp } from "./SignatureStamp";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-primary text-white ${className}`} role="contentinfo">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <Image
                src="/assets/logo.png"
                alt="Dukeel Transport logo"
                width={52}
                height={52}
                className="h-12 w-12 brightness-0 invert"
              />
              <div>
                <p className="text-xl font-bold leading-tight">Dukeel</p>
                <p className="text-xs uppercase tracking-[0.3em] text-light/80">
                  Transport
                </p>
              </div>
            </Link>
            <p className="text-light/80 max-w-sm leading-relaxed">
              Aggressive, disciplined logistics execution for enterprise freight
              operations. Built to move critical cargo with speed, clarity, and
              operational control.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-light/70 mb-4">
              Operations
            </p>
            <ul className="space-y-3 text-sm text-light/80">
              <li>
                <Link href="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="hover:text-accent">
                  Coverage & Fleet
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-accent">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-light/70 mb-4">
              Company
            </p>
            <ul className="space-y-3 text-sm text-light/80">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Dukeel
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent">
                  Core Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-light/70 mb-4">
              Contact
            </p>
            <div className="space-y-3 text-sm text-light/80">
              <p>24/7 Dispatch Command</p>
              <p>1-800-DUKEEL-1</p>
              <p>ops@dukeeltransport.com</p>
              <p>Houston, TX</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <SignatureStamp className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(1.5rem,8vw,4rem)] text-white/5" />
        <Container className="relative py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-light/70">
              © {currentYear} Dukeel Transport. All rights reserved.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-light/60">
              Built for Vercel • Node 20 • Next.js App Router
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
