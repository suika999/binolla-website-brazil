
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Globe, TrendingUp, Shield, Award } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Users, value: '500K+', label: 'Traders Ativos' },
    { icon: Globe, value: '150+', label: 'Países Atendidos' },
    { icon: TrendingUp, value: '1M+', label: 'Operações/Mês' },
    { icon: Award, value: '15+', label: 'Prêmios Recebidos' },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Regulamentação internacional e fundos segregados para máxima proteção dos seus investimentos.'
    },
    {
      icon: TrendingUp,
      title: 'Tecnologia Avançada',
      description: 'Plataforma de última geração com execução rápida e ferramentas profissionais de análise.'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Equipe de especialistas disponível 24/7 para ajudar você a maximizar seus resultados.'
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">Sobre a Binolla</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                A Corretora que
                <span className="gradient-text"> Proporciona</span>
                <br />Oportunidades Reais
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Há mais de uma década, a Binolla tem sido pioneira em democratizar o acesso aos mercados financeiros globais. Nossa missão é fornecer as melhores condições de trading para investidores brasileiros.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <button className="btn-primary">
                Conhecer Mais
              </button>
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-900">Regulamentada por:</div>
                <div>CySEC, FCA, ASIC</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/originals/e0/2b/12/e02b12fb04f5fd8262dca5b90c3df2e8.jpg"
                alt="Binolla Trading Platform"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98.7%</div>
                  <div className="text-sm text-gray-600">Taxa de Satisfação</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
