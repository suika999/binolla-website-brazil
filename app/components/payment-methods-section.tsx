
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Wallet
} from 'lucide-react'
import Image from 'next/image'

export default function PaymentMethodsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const paymentMethods = [
    {
      category: 'Cartões de Crédito/Débito',
      icon: CreditCard,
      methods: ['Visa', 'Mastercard', 'American Express', 'Elo'],
      processingTime: 'Instantâneo',
      minDeposit: 'R$ 50',
      fees: 'Sem taxas',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      category: 'PIX',
      icon: Zap,
      methods: ['PIX Instantâneo', 'QR Code', 'Chave PIX'],
      processingTime: 'Instantâneo',
      minDeposit: 'R$ 25',
      fees: 'Sem taxas',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      category: 'Transferência Bancária',
      icon: Building,
      methods: ['TED', 'DOC', 'Transferência Online'],
      processingTime: '1-2 horas',
      minDeposit: 'R$ 100',
      fees: 'Sem taxas',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      category: 'Carteiras Digitais',
      icon: Smartphone,
      methods: ['PayPal', 'Skrill', 'Neteller', 'PicPay'],
      processingTime: 'Instantâneo',
      minDeposit: 'R$ 50',
      fees: 'Sem taxas',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    },
    {
      category: 'Criptomoedas',
      icon: Wallet,
      methods: ['Bitcoin', 'Ethereum', 'USDT', 'Litecoin'],
      processingTime: '10-30 min',
      minDeposit: 'R$ 100',
      fees: 'Taxas de rede',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Todas as transações são protegidas por criptografia SSL de nível bancário'
    },
    {
      icon: Clock,
      title: 'Processamento Rápido',
      description: 'Depósitos instantâneos e saques processados em até 24 horas'
    },
    {
      icon: DollarSign,
      title: 'Sem Taxas Ocultas',
      description: 'Transparência total - você sempre sabe exatamente o que está pagando'
    }
  ]

  const depositSteps = [
    {
      step: '1',
      title: 'Escolha o Método',
      description: 'Selecione sua forma de pagamento preferida'
    },
    {
      step: '2',
      title: 'Insira o Valor',
      description: 'Digite o valor que deseja depositar'
    },
    {
      step: '3',
      title: 'Confirme',
      description: 'Confirme os dados e finalize a transação'
    },
    {
      step: '4',
      title: 'Comece a Negociar',
      description: 'Fundos disponíveis instantaneamente'
    }
  ]

  return (
    <section id="payments" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Métodos de Pagamento</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Deposite e Saque
            <span className="gradient-text"> com Facilidade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos os métodos de pagamento mais populares do Brasil para sua conveniência. Transações seguras, rápidas e sem complicações.
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${method.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {method.category}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tempo:</span>
                    <span className="font-medium text-gray-900">{method.processingTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mín. Depósito:</span>
                    <span className="font-medium text-gray-900">{method.minDeposit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taxas:</span>
                    <span className="font-medium text-green-600">{method.fees}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-sm text-gray-600 mb-2">Métodos disponíveis:</div>
                  <div className="flex flex-wrap gap-2">
                    {method.methods.map((paymentMethod, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {paymentMethod}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* How to Deposit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Fazer um Depósito
            </h3>
            <p className="text-xl text-gray-600">
              Processo simples e rápido em apenas 4 passos
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {depositSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                
                {index < depositSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              Fazer Primeiro Depósito
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Depósito mínimo de apenas R$ 25 • Sem taxas • Processamento instantâneo
            </p>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-blue-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">
              Seus Fundos Estão Seguros
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Fundos Segregados</h4>
              <p className="text-gray-600 text-sm">Seus fundos são mantidos separados dos fundos da empresa</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Criptografia SSL</h4>
              <p className="text-gray-600 text-sm">Todas as transações são protegidas por criptografia de nível bancário</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Regulamentação</h4>
              <p className="text-gray-600 text-sm">Regulamentados por autoridades financeiras internacionais</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
