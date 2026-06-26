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
import JiffyCaseStudy from './pages/JiffyCaseStudy'

function Home() {
  return (
    <div className="w-full">
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
        <Route path="/rivian" element={<RivianCaseStudy />} />
        <Route path="/jiffy" element={<JiffyCaseStudy />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
