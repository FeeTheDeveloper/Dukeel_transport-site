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
  title: "Business Readiness",
  description:
    "Business credentials and readiness information for Dukeel Transportation & Freight Corporation. EIN established, Texas-based veteran-owned entity, contract-ready operational framework.",
  openGraph: {
    title: "Business Readiness | Dukeel Transportation & Freight",
    description:
      "Business Credentials, Contract Readiness, and Growth Strategy",
  },
};

const businessCredentials = [
  {
    title: "EIN Established and Compliant",
    description:
      "Fully registered with the IRS with an active Employer Identification Number for all business operations and tax compliance.",
    status: "Active",
    icon: "✓",
  },
  {
    title: "Texas-Based Veteran-Owned Entity",
    description:
      "Legally established in Texas as a veteran-owned business entity, providing access to veteran-owned business advantages and certifications.",
    status: "Verified",
    icon: "🎖️",
  },
  {
    title: "Contract-Ready Operational Framework",
    description:
      "Operational systems and processes designed for contract execution, including documentation, reporting, and compliance tracking.",
    status: "Ready",
    icon: "📋",
  },
  {
    title: "SAM.gov Registration & CAGE Code",
    description:
      "Structured for System for Award Management (SAM.gov) registration and Commercial and Government Entity (CAGE) Code acquisition.",
    status: "In Progress",
    icon: "🏛️",
  },
];

const creditStrategy = [
  {
    title: "Vendor Credit Establishment",
    description:
      "Building relationships with vendors to establish net terms and trade credit for operational supplies and equipment.",
  },
  {
    title: "Fleet and Fuel Credit Acquisition",
    description:
      "Securing fleet cards and fuel credit lines to support transportation operations and reduce cash flow constraints.",
  },
  {
    title: "Operational Credit Lines",
    description:
      "Establishing business credit lines to support contract execution, equipment acquisition, and operational scaling.",
  },
];

export default function ReadinessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Business Readiness</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Business Credentials & Readiness
            </h1>
            <p className="text-xl text-light opacity-90 leading-relaxed">
              Dukeel Transportation is structured for success with established
              credentials, compliance-ready operations, and a disciplined
              approach to business growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Business Credentials */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title="Business Credentials"
            subtitle="Our business is built on a foundation of compliance, transparency, and operational readiness."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {businessCredentials.map((credential) => (
              <Card key={credential.title} padding="lg" hover>
                <CardBody>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{credential.icon}</div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        credential.status === "Active" ||
                        credential.status === "Verified" ||
                        credential.status === "Ready"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {credential.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-steel">{credential.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Credit & Growth Strategy */}
      <section className="py-16 lg:py-24 bg-light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Credit & Growth Strategy"
                subtitle="Disciplined business credit and growth strategy designed to support sustainable operations and contract execution capacity."
              />
              <p className="text-steel mt-6 leading-relaxed">
                Our strategic approach to business credit ensures we maintain
                the financial flexibility needed to execute contracts of varying
                sizes while building long-term creditworthiness and operational
                capacity.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Discuss Partnership
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              {creditStrategy.map((item, index) => (
                <Card key={item.title} padding="md">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          {item.title}
                        </h4>
                        <p className="text-steel text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Veteran-Owned Highlight */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🎖️</div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Veteran-Owned Advantage
                </h2>
                <p className="text-light opacity-90 leading-relaxed">
                  As a veteran-owned business, Dukeel Transportation brings
                  military discipline, leadership, and operational excellence to
                  every engagement. Our background provides unique advantages
                  for government contracting and commercial partnerships.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-4">Key Advantages</h4>
                <ul className="space-y-3 text-light">
                  <li className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    Service-Disabled Veteran-Owned eligibility
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    Set-aside contract opportunities
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    Mission-driven operational culture
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    Leadership under pressure
                  </li>
                </ul>
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
              Ready to Work with a Contract-Ready Partner?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our business is structured for immediate engagement. Contact us to
              discuss contracting opportunities or partnerships.
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
