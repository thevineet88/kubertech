import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ClientsSection from './components/ClientsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="w-full">
      {/* Hero owns the full viewport; Nav is rendered inside it at z-20 */}
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <CaseStudiesSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default App
