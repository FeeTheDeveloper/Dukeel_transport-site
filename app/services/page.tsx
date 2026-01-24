import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardBody, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive freight, fleet, and logistics services built for enterprise supply chains.",
  openGraph: {
    title: "Our Services | Dukeel Transport",
    description: "Freight, fleet, and logistics operations engineered for performance.",
  },
};

const services = [
  {
    title: "Freight & Linehaul",
    subtitle: "National Coverage",
    description:
      "High-velocity freight execution across local, regional, and long-haul lanes with precise dispatch control and continuous visibility.",
    features: [
      "Full Truckload (FTL) lanes",
      "Regional distribution coverage",
      "Cross-country linehaul routing",
      "Real-time dispatch updates",
      "High-visibility status reporting",
    ],
    metric: "1,200+ lanes",
  },
  {
    title: "Dedicated Fleet Operations",
    subtitle: "Reserved Capacity",
    description:
      "Dedicated assets with optimized routing, load management, and SLA-driven performance for high-volume contracts.",
    features: [
      "Guaranteed capacity blocks",
      "Dedicated driver teams",
      "Custom lane design",
      "Scheduled pickup windows",
      "Seasonal surge planning",
    ],
    metric: "240+ assets",
  },
  {
    title: "Time-Critical & Expedited",
    subtitle: "Rapid Response",
    description:
      "Priority freight execution with rapid dispatch, escalated tracking, and constant status updates for critical moves.",
    features: [
      "24/7 dispatch escalation",
      "Priority capacity allocation",
      "On-demand team drivers",
      "Real-time ETA updates",
      "Direct command center access",
    ],
    metric: "30 min response",
  },
  {
    title: "Defense & Government Logistics",
    subtitle: "Compliance Ready",
    description:
      "Contract-grade logistics execution aligned to regulated procurement requirements and mission-sensitive delivery windows.",
    features: [
      "Secure routing procedures",
      "Contract reporting cadence",
      "Regulated chain-of-custody",
      "Dedicated account oversight",
      "Performance compliance dashboards",
    ],
    metric: "Mission aligned",
  },
  {
    title: "Control Tower Visibility",
    subtitle: "Full Transparency",
    description:
      "Centralized oversight for freight performance, lane analytics, and proactive exception management.",
    features: [
      "Real-time KPI dashboards",
      "Exception escalation paths",
      "Lane optimization reviews",
      "Risk mitigation planning",
      "Proactive communications",
    ],
    metric: "Live analytics",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Services
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Precision-built logistics capabilities.
            </h1>
            <p className="text-xl text-light/90 leading-relaxed">
              Every service is engineered to meet enterprise SLAs, protect
              mission-critical freight, and keep supply chains moving without
              disruption.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start mb-16">
            <SectionHeading
              title="Disciplined execution across every mile."
              subtitle="From long-haul freight to control tower analytics, Dukeel Transport provides a unified logistics command structure."
            />
            <div className="rounded-2xl border border-border bg-light/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-steel mb-2">
                Standard Service Guarantees
              </p>
              <ul className="space-y-3 text-steel">
                <li>Dedicated dispatch lead assigned per account</li>
                <li>Live load visibility within 15 minutes of pickup</li>
                <li>Operational KPI review every 30 days</li>
                <li>Escalation hotline for time-critical loads</li>
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            {services.map((service) => (
              <Card key={service.title} padding="lg" className="bg-white">
                <CardBody>
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
                        {service.metric}
                      </p>
                      <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                        {service.title}
                      </h2>
                      <p className="text-steel text-lg leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <Link href="/contact">
                        <Button variant="primary" size="md">
                          Request a Quote
                        </Button>
                      </Link>
                    </div>
                    <div className="rounded-2xl border border-border bg-light/70 p-6">
                      <p className="text-sm uppercase tracking-[0.3em] text-steel mb-3">
                        Key capabilities
                      </p>
                      <ul className="space-y-3 text-steel">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <span className="text-accent font-bold">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-accent">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Build your custom freight command plan.
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We align routes, capacity, and reporting to match your operational
              demands. Engage our team to build a tailored proposal.
            </p>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
              >
                Contact Operations
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
