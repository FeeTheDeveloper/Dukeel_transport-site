import { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Button,
  SectionHeading,
  Card,
  CardBody,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Government Contracting",
  description:
    "Purpose-built to support federal, state, and municipal transportation needs. Aligned with procurement standards, compliance requirements, and performance expectations.",
  openGraph: {
    title: "Government Contracting | Dukeel Transportation & Freight",
    description:
      "Federal, State, and Municipal Transportation & Logistics Support",
  },
};

const targetAgencies = [
  {
    name: "Department of Defense (DoD)",
    description:
      "Defense logistics support for military installations, bases, and operations requiring secure, reliable transportation.",
    icon: "🎖️",
  },
  {
    name: "Department of Transportation (DOT)",
    description:
      "Transportation infrastructure support and logistics services aligned with federal transportation standards.",
    icon: "🛣️",
  },
  {
    name: "FEMA & Emergency Response Units",
    description:
      "Rapid-response logistics for emergency management, disaster relief, and critical supply chain operations.",
    icon: "🚨",
  },
  {
    name: "State & Municipal Procurement Offices",
    description:
      "Local government transportation solutions for state agencies, cities, and municipal departments.",
    icon: "🏛️",
  },
];

const capabilities = [
  "Rapid onboarding for contracts requiring reliability",
  "Accountability and secure logistics execution",
  "Compliance with federal procurement standards",
  "Performance-driven service delivery",
  "Scalable operations for contract growth",
  "Veteran-owned business advantages",
];

export default function GovernmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">
              Government Contracting
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Government Contracting Focus
            </h1>
            <p className="text-xl text-light opacity-90 leading-relaxed">
              Purpose-built to support federal, state, and municipal
              transportation needs. Aligned with procurement standards,
              compliance requirements, and performance expectations.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Built for Government Partnership"
                subtitle="Dukeel Transportation is structured from the ground up to meet the rigorous demands of government contracting. Our veteran-owned status, compliance-ready operations, and mission-driven approach make us an ideal partner for federal, state, and local agencies."
              />
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Discuss Partnership
                  </Button>
                </Link>
              </div>
            </div>
            <Card padding="lg" className="bg-light border-0">
              <CardBody>
                <h3 className="text-xl font-bold text-primary mb-6">
                  Our Capabilities
                </h3>
                <ul className="space-y-4">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl">✓</span>
                      <span className="text-steel">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>

      {/* Target Agencies */}
      <section className="py-16 lg:py-24 bg-light">
        <Container>
          <SectionHeading
            title="Target Agencies"
            subtitle="We provide logistics support for a wide range of government agencies at the federal, state, and municipal levels."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {targetAgencies.map((agency) => (
              <Card key={agency.name} hover padding="lg">
                <CardBody>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{agency.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {agency.name}
                      </h3>
                      <p className="text-steel">{agency.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Rapid Onboarding */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Rapid Onboarding for Government Contracts
              </h2>
              <p className="text-xl text-light opacity-90 mb-8 leading-relaxed">
                We understand the urgency of government contracts. Our
                streamlined onboarding process ensures rapid deployment for
                contracts requiring reliability, accountability, and secure
                logistics execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Start Onboarding Process
                  </Button>
                </Link>
                <Link href="/readiness">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Business Credentials
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Partner with a Veteran-Owned Contractor?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your agency&apos;s transportation and
              logistics requirements.
            </p>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
