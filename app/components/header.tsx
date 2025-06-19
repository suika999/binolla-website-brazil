
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, TrendingUp } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-10 h-10">
              <TrendingUp className="w-10 h-10 text-blue-500" />
            </div>
            <span className="text-2xl font-bold text-white">Binolla</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Início', id: 'hero' },
              { label: 'Sobre', id: 'about' },
              { label: 'Recursos', id: 'features' },
              { label: 'Por que Binolla', id: 'why-choose' },
              { label: 'Pagamentos', id: 'payments' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contato', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/20"
            >
              Conta Demo
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Começar Trading
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-white/10">
            {[
              { label: 'Início', id: 'hero' },
              { label: 'Sobre', id: 'about' },
              { label: 'Recursos', id: 'features' },
              { label: 'Por que Binolla', id: 'why-choose' },
              { label: 'Pagamentos', id: 'payments' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contato', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/20"
              >
                Conta Demo
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full btn-primary"
              >
                Começar Trading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
