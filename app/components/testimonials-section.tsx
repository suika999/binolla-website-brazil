
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Trader Profissional',
      location: 'São Paulo, SP',
      image: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      rating: 5,
      text: 'A Binolla transformou minha forma de investir. Com spreads baixos e execução rápida, consegui aumentar minha rentabilidade em 40% no último ano. O suporte em português é excepcional!',
      profit: '+127%',
      timeTrading: '2 anos'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Investidora Iniciante',
      location: 'Rio de Janeiro, RJ',
      image: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      rating: 5,
      text: 'Comecei do zero e a Binolla me deu todo o suporte necessário. Os webinars gratuitos e a conta demo me ajudaram muito. Hoje já tenho resultados consistentes!',
      profit: '+89%',
      timeTrading: '8 meses'
    },
    {
      name: 'Roberto Santos',
      role: 'Empresário',
      location: 'Belo Horizonte, MG',
      image: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      rating: 5,
      text: 'Uso a Binolla há 3 anos e posso dizer que é a melhor corretora que já usei. Segurança, tecnologia e atendimento de primeira. Recomendo para todos!',
      profit: '+245%',
      timeTrading: '3 anos'
    },
    {
      name: 'Mariana Costa',
      role: 'Analista Financeira',
      location: 'Porto Alegre, RS',
      image: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      rating: 5,
      text: 'A plataforma da Binolla é intuitiva e completa. As ferramentas de análise são profissionais e me ajudam a tomar decisões mais assertivas. Excelente experiência!',
      profit: '+156%',
      timeTrading: '1.5 anos'
    },
    {
      name: 'João Oliveira',
      role: 'Aposentado',
      location: 'Brasília, DF',
      image: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      rating: 5,
      text: 'Aos 65 anos, descobri o trading com a Binolla. O suporte paciente e os materiais educativos me deram confiança. Hoje complemento minha aposentadoria!',
      profit: '+78%',
      timeTrading: '10 meses'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const stats = [
    { value: '98.7%', label: 'Taxa de Satisfação' },
    { value: '4.8/5', label: 'Avaliação Média' },
    { value: '500K+', label: 'Clientes Satisfeitos' },
    { value: '24/7', label: 'Suporte Disponível' }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            O que Nossos
            <span className="gradient-text"> Clientes</span>
            <br />Dizem Sobre Nós
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Milhares de traders brasileiros já transformaram suas vidas financeiras com a Binolla. Veja alguns depoimentos reais de nossos clientes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="absolute top-6 left-6">
            <Quote className="w-12 h-12 text-blue-200" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {testimonials[currentTestimonial].profit}
                  </div>
                  <div className="text-gray-600">Lucro Total</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {testimonials[currentTestimonial].timeTrading}
                  </div>
                  <div className="text-gray-600">Tempo de Trading</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Veja Mais Depoimentos em Vídeo
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://i.pinimg.com/originals/e0/2b/12/e02b12fb04f5fd8262dca5b90c3df2e8.jpg"
                    alt={`Video testimonial ${video}`}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">Depoimento {video}</h4>
                  <p className="text-gray-600 text-sm">Como a Binolla mudou minha vida</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
