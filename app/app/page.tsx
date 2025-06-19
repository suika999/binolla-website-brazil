
'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import FeaturesSection from '../components/features-section'
import WhyChooseSection from '../components/why-choose-section'
import PaymentMethodsSection from '../components/payment-methods-section'
import TestimonialsSection from '../components/testimonials-section'
import FAQSection from '../components/faq-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhyChooseSection />
        <PaymentMethodsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
