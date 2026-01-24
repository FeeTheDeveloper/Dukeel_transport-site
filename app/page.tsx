import { Metadata } from "next";
import {
  Hero,
  ServicesGrid,
  CoverageBand,
  Testimonials,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Enterprise Freight & Logistics Operations",
  description:
    "Dukeel Transport provides disciplined freight execution, dedicated fleet operations, and high-visibility logistics for enterprise supply chains.",
  openGraph: {
    title: "Dukeel Transport",
    description: "Enterprise freight, fleet, and logistics operations.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CoverageBand />
      <Testimonials />
      <CTASection />
    </>
  );
}
