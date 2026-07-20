import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import AmbientMeshBackground from "../components/AmbientMeshBackground";
import CapabilitiesOrbit from "../components/CapabilitiesOrbit";
import LiveSection from "../components/LiveSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ClosingCTA from "../components/ClosingCTA";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ProofBar from "../components/ProofBar";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import JsonLd from "../components/JsonLd";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kuber Tech Solutions",
  url: "https://kubertechsolutions.in",
  logo: "https://kubertechsolutions.in/kuber_logo_dark.jpeg",
  description:
    "We build high-performance full-stack applications, cloud infrastructure, IoT and connected hardware, and production AI systems for funded startups in AI, HealthTech, FinTech, EdTech, and connected devices.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: ["US", "GB", "AE", "IN"],
  sameAs: [
    "https://www.linkedin.com/company/kubertechsolutions/",
    "https://github.com/thevineet88",
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <JsonLd data={organizationJsonLd} />
      <Nav />
      <HeroSection />
      <div className="relative isolate overflow-hidden bg-[#0A0A0B]">
        <AmbientMeshBackground />
        <CapabilitiesOrbit />
        <LiveSection />
        <CaseStudiesSection />
        <ProofBar />
        <ClientsSection />
        <TestimonialsSection />
        <ClosingCTA />
        <Footer />
      </div>
      <BookingModal />
    </div>
  );
}
