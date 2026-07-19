import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AmbientMeshBackground from "./components/AmbientMeshBackground";
import CapabilitiesOrbit from "./components/CapabilitiesOrbit";
import TestimonialsSection from "./components/TestimonialsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Seo from "./components/Seo";
import Preloader from "./components/Preloader";

const RivianCaseStudy = lazy(() => import("./pages/RivianCaseStudy"));
const CustomPrintPlatformCaseStudy = lazy(
  () => import("./pages/CustomPrintPlatformCaseStudy"),
);
const Services = lazy(() => import("./pages/Services"));
const MarksAndSpencerCaseStudy = lazy(
  () => import("./pages/MarksAndSpencerCaseStudy"),
);
const IoTXponentCaseStudy = lazy(() => import("./pages/IoTXponentCaseStudy"));
const RemoteEngineeringIndia = lazy(
  () => import("./pages/RemoteEngineeringIndia"),
);
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudiesHub = lazy(() => import("./pages/CaseStudiesHub"));
const NewsletterIndex = lazy(() => import("./pages/NewsletterIndex"));
const NewsletterIssue = lazy(() => import("./pages/NewsletterIssue"));
const NotFound = lazy(() => import("./pages/NotFound"));

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kuber Tech Solutions",
  url: "https://kubertechsolutions.in",
  logo: "https://kubertechsolutions.in/kuber_logo_dark.jpeg",
  description:
    "We build high-performance full-stack applications, cloud infrastructure, and production AI systems for funded startups in AI, HealthTech, FinTech, and EdTech.",
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

function Home() {
  return (
    <div className="w-full">
      <Seo
        title="Kuber Tech Solutions: AI, Cloud & Full-Stack Engineering"
        description="The engineering team behind fast, scalable, AI-enabled products. Full-stack, AI systems, and cloud infrastructure for funded startups in the US, UK, and UAE."
        path="/"
        jsonLd={organizationJsonLd}
      />
      <Nav />
      <HeroSection />
      <div className="relative isolate overflow-hidden bg-[#0A0A0B]">
        <AmbientMeshBackground />
        <CapabilitiesOrbit />
        <CaseStudiesSection />
        <ClientsSection />
        <TestimonialsSection />
        <Footer />
      </div>
      <BookingModal />
    </div>
  );
}

function App() {
  return (
    <>
      <Preloader />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudiesHub />} />
          <Route
            path="/case-studies/iot-xponent"
            element={<IoTXponentCaseStudy />}
          />
          <Route
            path="/case-studies/marks-and-spencer-performance"
            element={<MarksAndSpencerCaseStudy />}
          />
          <Route
            path="/case-studies/custom-print-platform"
            element={<CustomPrintPlatformCaseStudy />}
          />
          <Route
            path="/case-studies/rag-knowledge-engine"
            element={<RivianCaseStudy />}
          />
          <Route
            path="/remote-engineering-india"
            element={<RemoteEngineeringIndia />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<NewsletterIndex />} />
          <Route path="/newsletter/:slug" element={<NewsletterIssue />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
    </>
  );
}

export default App;
