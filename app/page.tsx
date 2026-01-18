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
  title: "Veteran-Owned Transportation, Freight & Logistics Solutions",
  description:
    "Dukeel Transportation & Freight Corporation is a veteran-owned transportation and logistics company providing dependable freight, hauling, and logistics support for commercial clients and government agencies.",
  openGraph: {
    title: "Dukeel Transportation & Freight Corporation",
    description:
      "Veteran-Owned Transportation, Freight & Logistics Solutions",
  },
};

const coreServices = [
  {
    title: "Freight Transportation",
    description: "Local, Regional, and Long-Haul freight services",
    icon: "🚛",
  },
  {
    title: "Government & Defense Logistics",
    description: "Contract logistics support for federal agencies",
    icon: "🏛️",
  },
  {
    title: "Dedicated Hauling",
    description: "Load management and dedicated transportation",
    icon: "📦",
  },
  {
    title: "Time-Critical Freight",
    description: "Priority freight for urgent delivery needs",
    icon: "⏱️",
  },
];

const whyDukeel = [
  "Veteran-owned and operated",
  "Mission-driven logistics execution",
  "Compliance-ready business structure",
  "Scalable operations for contract growth",
  "Aggressive response timelines",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold mb-4 text-lg">
              Veteran-Owned & Operated
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Transportation, Freight & Logistics Solutions
            </h1>
            <p className="text-xl text-light opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Built on military discipline, operational precision, and execution
              under pressure, we provide dependable freight, hauling, and
              logistics support for commercial clients and government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title="About Dukeel Transportation"
            subtitle="Dukeel Transportation & Freight Corporation is a veteran-owned transportation and logistics company headquartered in Texas. Built on military discipline, operational precision, and execution under pressure, we provide dependable freight, hauling, and logistics support for commercial clients and government agencies."
            align="center"
            className="mb-12"
          />
        </Container>
      </section>

      {/* Core Services Section */}
      <section className="py-16 lg:py-24 bg-light">
        <Container>
          <SectionHeading
            title="Core Services"
            subtitle="Comprehensive transportation and logistics solutions tailored to your needs."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service) => (
              <Card key={service.title} hover padding="lg">
                <CardBody>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-steel">{service.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Dukeel Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Dukeel?"
                subtitle="Our veteran-owned business brings military precision and discipline to every logistics operation."
              />
              <ul className="space-y-4 mt-8">
                {whyDukeel.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span className="text-steel text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Government Contracting Focus
              </h3>
              <p className="text-light opacity-90 mb-6 leading-relaxed">
                Purpose-built to support federal, state, and municipal
                transportation needs. Aligned with procurement standards,
                compliance requirements, and performance expectations.
              </p>
              <Link href="/government">
                <Button variant="primary" size="md">
                  Learn About Gov Contracts
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Partner with Dukeel?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Prepared for immediate engagement for contracting opportunities,
              partnerships, or logistics support inquiries.
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
