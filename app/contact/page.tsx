"use client";

import { useState } from "react";
import {
  Container,
  Button,
  SectionHeading,
  Card,
  CardBody,
} from "@/components/ui";

const contactInfo = [
  {
    title: "Phone",
    value: "1-800-DUKEEL-1",
    icon: "📞",
  },
  {
    title: "Email",
    value: "contact@dukeeltransport.com",
    icon: "✉️",
  },
  {
    title: "Headquarters",
    value: "Texas, United States",
    icon: "📍",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert(
      "Thank you for your message. This is a demo form - no data was submitted."
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Get in Touch</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Contact & Engagement
            </h1>
            <p className="text-xl text-light opacity-90 leading-relaxed">
              Prepared for immediate engagement for contracting opportunities,
              partnerships, or logistics support inquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you within 24 hours."
                className="mb-8"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your transportation or logistics needs..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>

              {/* Mailto Fallback */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-steel text-sm mb-4 text-center">
                  Or reach us directly via email:
                </p>
                <a
                  href="mailto:contact@dukeeltransport.com?subject=Inquiry from Website"
                  className="block"
                >
                  <Button variant="ghost" size="md" fullWidth>
                    Email Us Directly: contact@dukeeltransport.com
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out through any of the following channels."
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

              {/* Business Hours */}
              <Card padding="lg" className="bg-light border-0">
                <CardBody>
                  <h3 className="font-bold text-primary mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-steel">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM CT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM CT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mt-4">
                    24/7 dispatch available for active contracts and emergencies.
                  </p>
                </CardBody>
              </Card>

              {/* Quick Response */}
              <div className="mt-8 bg-primary rounded-xl p-6 text-white">
                <h4 className="font-bold mb-2 text-white">Quick Response</h4>
                <p className="text-light opacity-90 text-sm">
                  We aim to respond to all inquiries within 24 business hours.
                  For urgent matters, please call our main line directly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 lg:py-24 bg-light">
        <Container>
          <SectionHeading
            title="Our Location"
            subtitle="Headquartered in Texas, serving clients nationwide."
            align="center"
            className="mb-8"
          />
          <div className="bg-steel/10 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-steel">
              <div className="text-4xl mb-2">📍</div>
              <p className="font-medium">Texas, United States</p>
              <p className="text-sm text-muted">Map integration coming soon</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
