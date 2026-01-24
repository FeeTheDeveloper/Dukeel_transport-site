import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardBody, Container, SectionHeading } from "@/components/ui";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Engage Dukeel Transport for freight, fleet, and logistics execution. Request a quote or dispatch briefing.",
  openGraph: {
    title: "Contact Dukeel Transport",
    description: "Request a quote or dispatch briefing with our operations team.",
  },
};

const contactInfo = [
  {
    title: "24/7 Dispatch",
    value: "1-800-DUKEEL-1",
    icon: "☎️",
  },
  {
    title: "Email",
    value: "ops@dukeeltransport.com",
    icon: "✉️",
  },
  {
    title: "Headquarters",
    value: "Houston, TX",
    icon: "📍",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Contact
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Command a logistics response.
            </h1>
            <p className="text-xl text-light/90 leading-relaxed">
              Share your freight requirements and we&apos;ll respond with a
              disciplined execution plan built for performance.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Request a quote or dispatch briefing."
                subtitle="Our operations desk responds within 1 business day. For urgent requests, call dispatch directly."
                className="mb-8"
              />
              <ContactForm />
              <div className="mt-6 pt-6 border-t border-border text-sm text-steel">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:ops@dukeeltransport.com?subject=Logistics Inquiry"
                  className="text-accent font-semibold"
                >
                  ops@dukeeltransport.com
                </a>
                .
              </div>
            </div>

            <div>
              <SectionHeading
                title="Operations command desk"
                subtitle="Direct lines for dispatch, service escalations, and enterprise partnerships."
                className="mb-8"
              />
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <Card key={item.title} padding="md" hover>
                    <CardBody>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <p className="text-sm text-muted">{item.title}</p>
                          <p className="font-semibold text-primary">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>

              <Card padding="lg" className="bg-light border-0">
                <CardBody>
                  <h3 className="font-bold text-primary mb-4">Response Time</h3>
                  <div className="space-y-2 text-steel">
                    <div className="flex justify-between">
                      <span>Standard inquiries</span>
                      <span className="font-medium">Within 1 business day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active contracts</span>
                      <span className="font-medium">24/7 dispatch</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expedited requests</span>
                      <span className="font-medium">30 min triage</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mt-4">
                    For immediate escalation, call the dispatch line and select
                    option 1.
                  </p>
                </CardBody>
              </Card>

              <div className="mt-8 bg-primary rounded-xl p-6 text-white">
                <h4 className="font-bold mb-2 text-white">Quick Response</h4>
                <p className="text-light opacity-90 text-sm">
                  We provide a full response plan with lane analysis, capacity
                  options, and an execution timeline in every proposal.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <SectionHeading
            title="National reach, centralized command."
            subtitle="Headquartered in Houston, Texas with nationwide coverage and rapid deployment capabilities."
            align="center"
            className="mb-8"
          />
          <div className="bg-steel/10 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-steel">
              <div className="text-4xl mb-2">📍</div>
              <p className="font-medium">Houston, Texas</p>
              <p className="text-sm text-muted">
                Nationwide dispatch corridors and cross-dock partners
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-accent font-semibold uppercase tracking-[0.3em] text-sm mb-2">
                Immediate Support
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Need an expedited deployment?
              </h2>
            </div>
            <Link href="/services">
              <Button variant="primary" size="lg">
                Review Service Options
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
