
'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Shield,
  Award,
  Globe
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Recursos', href: '#features' },
    { label: 'Tipos de Conta', href: '#accounts' },
    { label: 'Educação', href: '#education' },
    { label: 'Análises', href: '#analysis' },
    { label: 'Promoções', href: '#promotions' }
  ]

  const tradingLinks = [
    { label: 'Forex', href: '#forex' },
    { label: 'Ações', href: '#stocks' },
    { label: 'Commodities', href: '#commodities' },
    { label: 'Criptomoedas', href: '#crypto' },
    { label: 'Índices', href: '#indices' },
    { label: 'Opções Binárias', href: '#binary' }
  ]

  const supportLinks = [
    { label: 'Central de Ajuda', href: '#help' },
    { label: 'Contato', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Webinars', href: '#webinars' },
    { label: 'Tutoriais', href: '#tutorials' },
    { label: 'Status da Plataforma', href: '#status' }
  ]

  const legalLinks = [
    { label: 'Termos de Uso', href: '#terms' },
    { label: 'Política de Privacidade', href: '#privacy' },
    { label: 'Política de Cookies', href: '#cookies' },
    { label: 'Regulamentação', href: '#regulation' },
    { label: 'Divulgação de Riscos', href: '#risks' },
    { label: 'AML/KYC', href: '#aml' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold">Binolla</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                A Binolla é uma corretora líder em trading online, oferecendo acesso aos mercados financiais globais com segurança, tecnologia avançada e suporte especializado em português.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">suporte@binolla.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+55 11 4000-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">São Paulo, Brasil</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Trading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              {tradingLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-green-400" />
              <div>
                <div className="font-semibold">Regulamentada</div>
                <div className="text-sm text-gray-400">CySEC, FCA, ASIC</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-yellow-400" />
              <div>
                <div className="font-semibold">Premiada</div>
                <div className="text-sm text-gray-400">Melhor Corretora 2024</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">Global</div>
                <div className="text-sm text-gray-400">150+ Países</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Binolla. Todos os direitos reservados.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center space-x-4 text-sm"
            >
              {legalLinks.slice(0, 3).map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Risk Warning */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container-max py-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs text-gray-400 text-center leading-relaxed"
          >
            <strong>Aviso de Risco:</strong> Trading de CFDs envolve risco significativo de perda e pode não ser adequado para todos os investidores. 
            Certifique-se de entender completamente os riscos envolvidos e procure aconselhamento independente se necessário. 
            O desempenho passado não é indicativo de resultados futuros.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
