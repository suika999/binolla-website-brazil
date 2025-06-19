
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  Globe,
  Zap,
  HeadphonesIcon,
  BookOpen,
  DollarSign,
  CheckCircle,
  Star
} from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Regulamentação internacional, fundos segregados e criptografia de nível bancário.',
      stats: '100% Seguro'
    },
    {
      icon: TrendingUp,
      title: 'Spreads Competitivos',
      description: 'Os menores spreads do mercado para maximizar seus lucros em cada operação.',
      stats: 'A partir de 0.1 pips'
    },
    {
      icon: Zap,
      title: 'Execução Rápida',
      description: 'Tecnologia de ponta com execução de ordens em milissegundos.',
      stats: '< 50ms'
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte 24/7',
      description: 'Atendimento especializado em português disponível 24 horas por dia.',
      stats: '24/7 Disponível'
    },
    {
      icon: BookOpen,
      title: 'Educação Gratuita',
      description: 'Webinars, cursos e materiais educativos para todos os níveis.',
      stats: '500+ Recursos'
    },
    {
      icon: DollarSign,
      title: 'Bônus Exclusivos',
      description: 'Bônus de boas-vindas e promoções especiais para traders brasileiros.',
      stats: 'Até 80% Bônus'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Melhor Corretora 2024',
      description: 'Premiada como a melhor corretora de Forex na América Latina'
    },
    {
      icon: Users,
      title: '500K+ Traders Ativos',
      description: 'Mais de meio milhão de traders confiam na nossa plataforma'
    },
    {
      icon: Globe,
      title: '150+ Países',
      description: 'Presença global com serviços em mais de 150 países'
    },
    {
      icon: Star,
      title: '4.8/5 Avaliação',
      description: 'Excelente avaliação dos nossos clientes em todas as plataformas'
    }
  ]

  const testimonialStats = [
    { value: '98.7%', label: 'Taxa de Satisfação' },
    { value: '2 min', label: 'Tempo de Resposta' },
    { value: '99.9%', label: 'Uptime da Plataforma' },
    { value: '15+', label: 'Idiomas Suportados' }
  ]

  return (
    <section id="why-choose" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Por que Binolla?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            A Escolha de
            <span className="gradient-text"> Milhares</span>
            <br />de Traders Brasileiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra por que a Binolla é considerada a melhor plataforma de trading do Brasil. Nossa combinação única de tecnologia, segurança e suporte faz toda a diferença.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{benefit.stats}</span>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reconhecimento Internacional
            </h3>
            <p className="text-xl text-gray-600">
              Nossa excelência é reconhecida mundialmente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/originals/e0/2b/12/e02b12fb04f5fd8262dca5b90c3df2e8.jpg"
                alt="Binolla Trading Success"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1M+</div>
                      <div className="text-sm text-gray-600">Operações/Mês</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$2.5B</div>
                      <div className="text-sm text-gray-600">Volume Mensal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Números que
              <span className="gradient-text"> Impressionam</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nossa dedicação à excelência se reflete em cada métrica. Veja por que milhares de traders escolhem a Binolla todos os dias.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {testimonialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="btn-primary flex-1">
                Começar Agora
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 flex-1">
                Saiba Mais
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
