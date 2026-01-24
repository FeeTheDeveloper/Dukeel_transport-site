import Image from "next/image";
import Link from "next/link";
import { Button, Container } from "@/components/ui";
import { SignatureStamp } from "@/components/ui/SignatureStamp";

const quickStats = [
  { label: "On-time delivery", value: "99.4%" },
  { label: "Active fleet capacity", value: "240+" },
  { label: "States serviced", value: "48" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0b1f3b_0%,#102a4f_45%,#061425_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] [background-size:80px_80px]" />
      <SignatureStamp className="absolute left-1/2 top-24 -translate-x-1/2 text-[clamp(2.5rem,10vw,7rem)]" />
      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-5">
              Logistics Style 01
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Commanding freight operations for high-stakes supply chains.
            </h1>
            <p className="text-lg lg:text-xl text-light/90 mb-8 leading-relaxed">
              Dukeel Transport delivers enterprise-grade logistics with a
              disciplined, execution-first approach. We move critical freight
              with precision coverage, proactive dispatch, and uncompromising
              reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Services
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-light/70 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <Image
                src="/assets/hero-fleet.svg"
                alt="Dukeel Transport fleet coordination"
                width={520}
                height={520}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-accent px-6 py-4 text-primary shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em]">Dispatch</p>
              <p className="text-2xl font-bold">24/7</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
