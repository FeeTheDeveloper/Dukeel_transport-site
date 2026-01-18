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
  title: "Services",
  description:
    "Comprehensive transportation and logistics services including freight transportation, government contract logistics, dedicated hauling, and time-critical freight.",
  openGraph: {
    title: "Our Services | Dukeel Transportation & Freight",
    description:
      "Freight Transportation, Government Logistics, Dedicated Hauling, and Time-Critical Freight Services",
  },
};

const services = [
  {
    title: "Freight Transportation",
    subtitle: "Local, Regional, Long-Haul",
    description:
      "Comprehensive freight transportation services covering local deliveries, regional distribution, and long-haul routes across the nation. Our fleet and logistics network ensure your cargo arrives safely and on time.",
    features: [
      "Full Truckload (FTL) services",
      "Less Than Truckload (LTL) options",
      "Cross-country long-haul capabilities",
      "Regional distribution networks",
      "Real-time shipment tracking",
    ],
    icon: "🚛",
  },
  {
    title: "Government & Defense Contract Logistics Support",
    subtitle: "Federal, State, Municipal",
    description:
      "Purpose-built logistics support for government agencies and defense contractors. We align with procurement standards, compliance requirements, and performance expectations for secure and reliable logistics execution.",
    features: [
      "DoD logistics support",
      "Federal agency transportation",
      "State contract fulfillment",
      "Municipal logistics services",
      "Compliance-ready operations",
    ],
    icon: "🏛️",
  },
  {
    title: "Dedicated Hauling & Load Management",
    subtitle: "Customized Solutions",
    description:
      "Dedicated hauling services with comprehensive load management for clients requiring consistent, reliable transportation. Our dedicated fleet solutions provide predictable capacity and personalized service.",
    features: [
      "Dedicated fleet assignments",
      "Custom routing solutions",
      "Load optimization",
      "Capacity planning",
      "Dedicated driver teams",
    ],
    icon: "📦",
  },
  {
    title: "Time-Critical & Priority Freight",
    subtitle: "Urgent Delivery",
    description:
      "When timing is everything, our time-critical freight services deliver. Aggressive response timelines and priority handling ensure your urgent shipments arrive when they're needed most.",
    features: [
      "Expedited shipping options",
      "24/7 dispatch availability",
      "Priority load handling",
      "Guaranteed delivery windows",
      "Real-time status updates",
    ],
    icon: "⏱️",
  },
  {
    title: "Contract-Based Transportation Services",
    subtitle: "Long-Term Partnerships",
    description:
      "Scalable contract-based transportation services designed for organizations requiring ongoing logistics support. Build a long-term partnership with reliable, consistent service delivery.",
    features: [
      "Multi-year contract options",
      "Volume-based pricing",
      "Dedicated account management",
      "Performance guarantees",
      "Scalable capacity",
    ],
    icon: "📋",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Our Services</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Core Services
            </h1>
            <p className="text-xl text-light opacity-90 leading-relaxed">
              Comprehensive transportation and logistics solutions built on
              military discipline, operational precision, and execution under
              pressure.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <p className="text-accent font-semibold mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-steel text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <Button variant="primary" size="md">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card padding="lg" className="bg-light border-0">
                    <CardBody>
                      <h4 className="font-bold text-primary mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-steel"
                          >
                            <span className="text-accent font-bold">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Need a Custom Logistics Solution?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific transportation and logistics
              requirements. We&apos;re ready to build a solution that fits your
              needs.
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
