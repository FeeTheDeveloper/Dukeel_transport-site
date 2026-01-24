import { Card, CardBody, Container, SectionHeading } from "@/components/ui";

const testimonials = [
  {
    quote:
      "Dukeel executed our expedited freight lane with zero misses for 12 months straight. The control tower visibility is unmatched.",
    name: "Operations Director",
    company: "Enterprise Manufacturing Partner",
  },
  {
    quote:
      "We needed dedicated capacity across three states in under 48 hours. Dukeel mobilized immediately and never looked back.",
    name: "Supply Chain Lead",
    company: "Critical Infrastructure Provider",
  },
  {
    quote:
      "Disciplined dispatch, clear reporting, and no surprises. Their execution feels like an extension of our internal team.",
    name: "Logistics Manager",
    company: "Defense Contractor",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-light">
      <Container>
        <SectionHeading
          title="Trusted by high-stakes operators."
          subtitle="Performance, transparency, and relentless follow-through for every mission profile."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.quote} padding="lg" className="h-full">
              <CardBody className="flex h-full flex-col">
                <p className="text-2xl text-accent mb-4">“</p>
                <p className="text-steel text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-steel">{testimonial.company}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
