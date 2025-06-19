
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Headphones,
  Globe
} from 'lucide-react'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    accountType: 'demo'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        accountType: 'demo'
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Chat ao Vivo',
      description: 'Suporte instantâneo 24/7',
      value: 'Iniciar Chat',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Ligue para nossa central',
      value: '+55 11 4000-0000',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Envie sua mensagem',
      value: 'suporte@binolla.com',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Headphones,
      title: 'Suporte VIP',
      description: 'Para clientes premium',
      value: 'Acessar VIP',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    }
  ]

  const officeHours = [
    { day: 'Segunda - Sexta', hours: '08:00 - 22:00' },
    { day: 'Sábado', hours: '09:00 - 18:00' },
    { day: 'Domingo', hours: '10:00 - 16:00' },
    { day: 'Chat Online', hours: '24/7 Disponível' }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-lg">Entre em Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Comece Sua Jornada
            <span className="text-blue-400"> Hoje</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para ajudar você a dar os primeiros passos no mundo do trading. Entre em contato e descubra como podemos potencializar seus investimentos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Solicite uma Consulta Gratuita</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-white/50"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-white/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-white/50"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Conta</label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    >
                      <option value="demo" className="text-gray-900">Conta Demo</option>
                      <option value="real" className="text-gray-900">Conta Real</option>
                      <option value="vip" className="text-gray-900">Conta VIP</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-white/50 resize-none"
                    placeholder="Conte-nos sobre seus objetivos de investimento..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Solicitação Enviada!</h4>
                <p className="text-white/80">
                  Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                      <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <h4 className="font-semibold mb-2">{method.title}</h4>
                      <p className="text-white/70 text-sm mb-2">{method.description}</p>
                      <p className="text-blue-400 font-medium">{method.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-400" />
                Horários de Atendimento
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white/80">{schedule.day}</span>
                      <span className="font-medium text-blue-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold">Suporte Global</h4>
              </div>
              <p className="text-white/80 mb-4">
                Nossa equipe multilíngue oferece suporte em mais de 15 idiomas, garantindo que você sempre tenha a ajuda necessária.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Online agora</span>
                </div>
                <div className="text-white/60">Tempo médio de resposta: 2 min</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
