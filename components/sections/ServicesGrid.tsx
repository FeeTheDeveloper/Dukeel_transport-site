import { Card, CardBody, Container, SectionHeading } from "@/components/ui";

const services = [
  {
    title: "Freight & Linehaul",
    description:
      "Long-haul, regional, and last-mile freight movement with high-visibility routing and execution control.",
    metric: "Nationwide coverage",
  },
  {
    title: "Dedicated Fleet Ops",
    description:
      "Right-sized dedicated capacity aligned to your contract volumes and service-level objectives.",
    metric: "Guaranteed capacity",
  },
  {
    title: "Time-Critical Moves",
    description:
      "Priority dispatch, rapid routing, and real-time escalation paths for urgent or sensitive cargo.",
    metric: "Rapid response",
  },
  {
    title: "Defense & Gov Logistics",
    description:
      "Compliance-ready logistics support with disciplined execution and contract-grade reporting.",
    metric: "Secure workflows",
  },
  {
    title: "Yard & Facility Shuttles",
    description:
      "On-site and yard transfers to keep facilities fluid, optimized, and continuously supplied.",
    metric: "Zero downtime",
  },
  {
    title: "Control Tower",
    description:
      "End-to-end visibility, performance analytics, and proactive issue resolution.",
    metric: "Full visibility",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-light">
      <Container>
        <SectionHeading
          title="Services engineered for enterprise logistics."
          subtitle="A disciplined, aggressive approach to freight execution and fleet readiness."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} padding="lg" className="h-full">
              <CardBody className="flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                  {service.metric}
                </p>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-steel text-base leading-relaxed">
                  {service.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
