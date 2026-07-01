import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import TestimonialsSection from './components/TestimonialsSection'
import ProofBar from './components/ProofBar'
import ServicesSection from './components/ServicesSection'
import AISection from './components/AISection'
import AboutSection from './components/AboutSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ClientsSection from './components/ClientsSection'
import ContactSection from './components/ContactSection'
import BookingModal from './components/BookingModal'
import RivianCaseStudy from './pages/RivianCaseStudy'
import CustomPrintPlatformCaseStudy from './pages/CustomPrintPlatformCaseStudy'
import Services from './pages/Services'
import MarksAndSpencerCaseStudy from './pages/MarksAndSpencerCaseStudy'
import RemoteEngineeringIndia from './pages/RemoteEngineeringIndia'
import CaseStudiesHub from './pages/CaseStudiesHub'
import NewsletterIndex from './pages/NewsletterIndex'
import NewsletterIssue from './pages/NewsletterIssue'
import Seo from './components/Seo'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kuber Tech Solutions',
  url: 'https://kubertechsolutions.in',
  logo: 'https://kubertechsolutions.in/logos/KuberTechLogo.png',
  description:
    "We build high-performance full-stack applications, cloud infrastructure, and production AI systems for funded startups in AI, HealthTech, FinTech, and EdTech.",
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: ['US', 'GB', 'AE', 'IN'],
  sameAs: [
    'https://www.linkedin.com/company/kubertechsolutions/',
    'https://github.com/thevineet88',
    'https://www.instagram.com/the.vineeet',
  ],
}

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
      <ProofBar />
      <ServicesSection />
      <AISection />
      <AboutSection />
      <CaseStudiesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <BookingModal />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudiesHub />} />
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
        <Route path="/newsletter" element={<NewsletterIndex />} />
        <Route path="/newsletter/:slug" element={<NewsletterIssue />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
