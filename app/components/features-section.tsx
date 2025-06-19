
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Smartphone, 
  BarChart3,
  DollarSign,
  Users,
  Globe
} from 'lucide-react'

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Zap,
      title: 'Execução Instantânea',
      description: 'Ordens executadas em milissegundos com tecnologia de ponta para máxima eficiência.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Fundos segregados, criptografia SSL e regulamentação internacional para sua proteção.',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      title: 'Spreads Competitivos',
      description: 'Os menores spreads do mercado para maximizar seus lucros em cada operação.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Atendimento especializado em português disponível 24 horas por dia, 7 dias por semana.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Smartphone,
      title: 'Trading Mobile',
      description: 'Aplicativo móvel completo para negociar em qualquer lugar, a qualquer momento.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100'
    },
    {
      icon: BarChart3,
      title: 'Análise Avançada',
      description: 'Ferramentas profissionais de análise técnica e fundamental para decisões precisas.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: DollarSign,
      title: 'Bônus Exclusivos',
      description: 'Bônus de boas-vindas de até 80% e promoções especiais para traders brasileiros.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: Users,
      title: 'Educação Gratuita',
      description: 'Webinars, cursos e materiais educativos para aprimorar suas habilidades de trading.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Globe,
      title: '200+ Ativos',
      description: 'Forex, ações, commodities, criptomoedas e índices dos principais mercados globais.',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-100'
    }
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Recursos da Plataforma</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Por que Escolher a
            <span className="gradient-text"> Binolla</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra os recursos que fazem da Binolla a escolha preferida de milhares de traders brasileiros para investir nos mercados financeiros globais.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card group"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de traders que já descobriram as vantagens de negociar com a Binolla.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                Abrir Conta Real
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors duration-300">
                Testar Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
