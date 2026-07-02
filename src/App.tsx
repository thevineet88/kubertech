import { Suspense, lazy } from 'react'
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
import Seo from './components/Seo'

const RivianCaseStudy = lazy(() => import('./pages/RivianCaseStudy'))
const CustomPrintPlatformCaseStudy = lazy(() => import('./pages/CustomPrintPlatformCaseStudy'))
const Services = lazy(() => import('./pages/Services'))
const MarksAndSpencerCaseStudy = lazy(() => import('./pages/MarksAndSpencerCaseStudy'))
const RemoteEngineeringIndia = lazy(() => import('./pages/RemoteEngineeringIndia'))
const CaseStudiesHub = lazy(() => import('./pages/CaseStudiesHub'))
const NewsletterIndex = lazy(() => import('./pages/NewsletterIndex'))
const NewsletterIssue = lazy(() => import('./pages/NewsletterIssue'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
      <Suspense fallback={null}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
    </>
  )
}

export default App
