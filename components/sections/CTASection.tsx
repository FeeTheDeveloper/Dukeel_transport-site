import Link from "next/link";
import { Button, Container } from "@/components/ui";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-accent font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Request a Quote
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Ready to deploy a hardened logistics plan?
            </h2>
            <p className="text-lg text-light/80 leading-relaxed">
              Our specialists will map your freight requirements, lane
              volatility, and service-level targets into a precision execution
              plan.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full">
                Request a Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="ghost"
                size="lg"
                className="w-full border-white text-white hover:bg-white/10"
              >
                Review Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
