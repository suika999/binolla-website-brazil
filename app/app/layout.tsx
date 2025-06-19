
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Binolla Brasil - Plataforma de Trading Online | Forex e Opções Binárias',
  description: 'Descubra a Binolla, a corretora líder em trading online no Brasil. Negocie Forex, opções binárias e mais de 200 ativos com segurança. Conta demo gratuita, bônus até 80% e suporte 24h.',
  keywords: 'Binolla, Binolla Brasil, trading online Brasil, forex Brasil, opções binárias Brasil, corretora forex, plataforma trading, investir forex Brasil, conta demo trading, trading para iniciantes Brasil',
  authors: [{ name: 'Binolla' }],
  creator: 'Binolla',
  publisher: 'Binolla',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://binolla.com'),
  alternates: {
    canonical: '/pt/',
    languages: {
      'pt-BR': '/pt/',
    },
  },
  openGraph: {
    title: 'Binolla Brasil - Plataforma de Trading Online Líder',
    description: 'A corretora que proporciona oportunidades reais. Trading levado a sério com mais de 200 ativos, conta demo gratuita e suporte 24h em português.',
    url: 'https://binolla.com/pt/',
    siteName: 'Binolla',
    images: [
      {
        url: 'https://i.pinimg.com/originals/e0/2b/12/e02b12fb04f5fd8262dca5b90c3df2e8.jpg',
        width: 1200,
        height: 630,
        alt: 'Binolla Trading Platform',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binolla Brasil - Trading Online Profissional',
    description: 'Negocie com segurança na plataforma de trading mais confiável do Brasil. Conta demo gratuita, bônus exclusivos e suporte 24h.',
    images: ['https://i.pinimg.com/originals/e0/2b/12/e02b12fb04f5fd8262dca5b90c3df2e8.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Binolla",
              "description": "Plataforma de trading online para Forex, opções binárias e mais de 200 ativos financeiros",
              "url": "https://binolla.com/pt/",
              "logo": "https://i.pinimg.com/736x/c3/b6/16/c3b616fe8c9838c4f65ca748827ee8af.jpg",
              "image": "https://i.pinimg.com/originals/e0/2b/12/e02b12fb04f5fd8262dca5b90c3df2e8.jpg",
              "telephone": "+1-800-BINOLLA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite 305, Griffith Corporate Centre, Beachmont",
                "addressLocality": "Kingstown",
                "addressCountry": "VC"
              },
              "sameAs": [
                "https://www.instagram.com/binolla",
                "https://www.facebook.com/binolla",
                "https://t.me/binolla"
              ],
              "serviceType": "Financial Trading Platform",
              "areaServed": "BR",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Trading Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Forex Trading",
                      "description": "Negociação de pares de moedas com spreads competitivos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Opções Binárias",
                      "description": "Trading de opções binárias com diversos ativos"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
