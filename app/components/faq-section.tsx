
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Como posso começar a negociar na Binolla?',
      answer: 'Para começar, basta criar uma conta gratuita em nosso site, verificar sua identidade e fazer seu primeiro depósito. Oferecemos também uma conta demo gratuita para você praticar antes de investir dinheiro real.'
    },
    {
      question: 'Qual é o depósito mínimo necessário?',
      answer: 'O depósito mínimo na Binolla é de apenas R$ 50, tornando o trading acessível para todos os perfis de investidores. Você pode começar com um valor baixo e aumentar gradualmente conforme ganha experiência.'
    },
    {
      question: 'A Binolla é regulamentada e segura?',
      answer: 'Sim, a Binolla é regulamentada por autoridades financeiras internacionais como CySEC, FCA e ASIC. Seus fundos são mantidos em contas segregadas e protegidos por criptografia SSL de nível bancário.'
    },
    {
      question: 'Quais ativos posso negociar?',
      answer: 'Oferecemos mais de 200 ativos incluindo pares de moedas (Forex), ações das principais bolsas mundiais, commodities como ouro e petróleo, criptomoedas e índices dos mercados globais.'
    },
    {
      question: 'Como funciona o suporte ao cliente?',
      answer: 'Nosso suporte está disponível 24/7 em português através de chat ao vivo, e-mail e telefone. Nossa equipe é composta por especialistas em trading prontos para ajudar com qualquer dúvida.'
    },
    {
      question: 'Posso usar a plataforma no celular?',
      answer: 'Sim! Temos aplicativos móveis completos para iOS e Android, além da versão web responsiva. Você pode negociar, analisar gráficos e gerenciar sua conta de qualquer lugar.'
    },
    {
      question: 'Como funcionam os saques?',
      answer: 'Os saques são processados rapidamente, geralmente em até 24 horas. Você pode sacar via transferência bancária, PIX, cartão de crédito ou carteiras digitais, com total segurança e transparência.'
    },
    {
      question: 'Vocês oferecem educação em trading?',
      answer: 'Sim! Oferecemos webinars gratuitos, cursos online, análises de mercado diárias, e-books e uma seção completa de educação para traders de todos os níveis, do iniciante ao avançado.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-blue-600 font-semibold text-lg">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tire Suas
            <span className="gradient-text"> Dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encontre respostas para as perguntas mais comuns sobre trading na Binolla. Se não encontrar o que procura, nossa equipe está sempre disponível para ajudar.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para ajudar você a começar sua jornada no trading.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary">
                Falar com Especialista
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                Central de Ajuda
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
