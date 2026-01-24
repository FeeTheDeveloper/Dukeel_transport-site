import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dukeel Transport, our mission, and the logistics leadership behind our enterprise freight operations.",
  openGraph: {
    title: "About Dukeel Transport",
    description:
      "Mission-first logistics leadership delivering disciplined freight execution.",
  },
};

const values = [
  {
    title: "Command-Level Precision",
    description:
      "Every lane is managed with disciplined dispatch oversight, measurable KPIs, and direct accountability.",
  },
  {
    title: "Operational Integrity",
    description:
      "We deliver on commitments, report with transparency, and own every escalation end to end.",
  },
  {
    title: "Relentless Readiness",
    description:
      "Fleet, people, and systems are prepared to deploy for high-impact freight missions at any hour.",
  },
];

const leadership = [
  {
    name: "Operations Command",
    role: "Logistics Leadership Team",
    focus: "Fleet readiness, dispatch discipline, execution metrics",
  },
  {
    name: "Client Strategy",
    role: "Enterprise Solutions",
    focus: "Service design, contract alignment, lane optimization",
  },
  {
    name: "Compliance & Safety",
    role: "Risk Assurance",
    focus: "Policy adherence, reporting, and controlled execution",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              About Dukeel
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Mission-first logistics leadership.
            </h1>
            <p className="text-xl text-light/90 leading-relaxed">
              Dukeel Transport is a disciplined logistics organization delivering
              freight execution for enterprise and government-adjacent supply
              chains. We prioritize readiness, transparency, and uncompromising
              execution.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                title="Engineered for high-stakes supply chains."
                subtitle="Our operations model combines tactical dispatch, visibility, and continuous improvement to keep freight moving with precision."
              />
              <div className="mt-8 flex flex-col gap-4">
                {values.map((value) => (
                  <Card key={value.title} padding="lg" className="bg-light/70">
                    <CardBody>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-steel">{value.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-primary/95 p-6 text-white">
              <Image
                src="/assets/hero-fleet.svg"
                alt="Dukeel Transport operations"
                width={480}
                height={480}
                className="h-auto w-full mb-6"
              />
              <p className="text-sm uppercase tracking-[0.3em] text-light/70 mb-2">
                Headquarters
              </p>
              <p className="text-2xl font-bold text-white">Houston, Texas</p>
              <p className="text-light/80 mt-4">
                Centralized command operations supporting nationwide freight
                coverage and strategic lane oversight.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <SectionHeading
            title="Leadership built for accountability."
            subtitle="Dedicated teams aligned to execution, strategy, and compliance keep every shipment aligned to contract expectations."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {leadership.map((leader) => (
              <Card key={leader.name} padding="lg">
                <CardBody>
                  <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
                    {leader.role}
                  </p>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-steel">{leader.focus}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-primary text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Partner with a logistics team that executes.
              </h2>
              <p className="text-lg text-light/80">
                Whether you need dedicated fleet capacity or a rapid-response
                freight solution, our operations team is ready to deploy.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Operations
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
