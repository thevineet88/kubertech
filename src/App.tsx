import HeroSection from './components/HeroSection'
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
      {/* Hero owns the full viewport; Nav is rendered inside it at z-20 */}
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
      {/* Closing CTA */}
      <ContactSection />
      {/* Cal.com booking modal, opens on any "Book a 30-minute call" CTA */}
      <BookingModal />
    </div>
  )
}

export default App
