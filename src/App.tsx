import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import TestimonialsSection from './components/TestimonialsSection'
import ProofBar from './components/ProofBar'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ClientsSection from './components/ClientsSection'
import ContactSection from './components/ContactSection'
import BookingModal from './components/BookingModal'

function App() {
  return (
    <div className="w-full">
      <Nav />
      <HeroSection />
      {/* Proof bar: metrics above the fold */}
      <ProofBar />
      {/* What we do: two named offerings */}
      <ServicesSection />
      {/* How we work */}
      <AboutSection />
      {/* Case study / selected work */}
      <CaseStudiesSection />
      <ClientsSection />
      <TestimonialsSection />
      {/* Closing CTA */}
      <ContactSection />
      {/* Cal.com booking modal, opens on any "Book a 30-minute call" CTA */}
      <BookingModal />
      <Analytics />
    </div>
  )
}

export default App
