import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";

const metrics = [
  { label: "Freight lanes", value: "1,200+" },
  { label: "On-call capacity", value: "24/7" },
  { label: "Avg. response", value: "30 min" },
  { label: "Managed partners", value: "75+" },
];

export function CoverageBand() {
  return (
    <section id="coverage" className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              title="Coverage built for mission-critical reach."
              subtitle="Strategic lanes, cross-dock coordination, and proactive routing across the contiguous United States."
              className="mb-10"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border bg-light/70 px-6 py-5"
                >
                  <p className="text-2xl font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-sm uppercase tracking-[0.25em] text-steel">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-border bg-primary/95 p-6">
              <Image
                src="/assets/coverage-map.svg"
                alt="Coverage map showing Dukeel Transport reach"
                width={520}
                height={520}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-5 right-6 rounded-full bg-accent px-5 py-3 text-primary shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em]">Coverage</p>
              <p className="text-xl font-bold">Nationwide</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
