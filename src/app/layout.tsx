import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import LayoutShell from '@/components/layout/LayoutShell'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://takma.com.pl'),
  title: {
    default: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery | Sklep B2B AutoID',
    template: '%s | TAKMA',
  },
  description:
    'Sklep B2B z urządzeniami AutoID — drukarki etykiet, terminale mobilne, skanery kodów kreskowych. Zebra, Honeywell, Datalogic, TSC i inne. Ceny netto, dostawa 24h, 25 lat doświadczenia.',
  authors: [{ name: 'TAKMA' }],
  creator: 'TAKMA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'TAKMA',
    title: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery kodów',
    description: 'Drukarki etykiet od 800 zł netto, terminale mobilne, skanery. Zebra, Honeywell, Datalogic i inne marki. Doradztwo, sprzedaż i serwis dla firm B2B w całej Polsce.',
    images: [{ url: '/images/takma-og.png', width: 1200, height: 630, alt: 'TAKMA — Autoryzowany dystrybutor urządzeń AutoID' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TAKMA',
  url: 'https://takma.com.pl',
  logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/takma_logo.png', width: 300, height: 60 },
  description: 'Profesjonalne rozwiązania AutoID — drukarki etykiet, skanery kodów kreskowych, terminale mobilne, systemy RFID. 25+ lat doświadczenia, autoryzowany partner Zebra Technologies.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Poświęcka 1a',
    postalCode: '51-128',
    addressLocality: 'Wrocław',
    addressCountry: 'PL',
  },
  taxID: '915-100-43-77',
  foundingDate: '2001',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  knowsAbout: ['Drukarki etykiet', 'Skanery kodów kreskowych', 'Terminale mobilne', 'RFID', 'AutoID', 'Zebra Technologies'],
  sameAs: [
    'https://www.serwis-zebry.pl',
    'https://www.linkedin.com/company/takma',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Autoryzacja producenta',
      name: 'Zebra Premier Solution Partner',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Zebra Technologies',
        url: 'https://www.zebra.com',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Autoryzacja producenta',
      name: 'Zebra Premier Business Partner',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Zebra Technologies',
        url: 'https://www.zebra.com',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certyfikat serwisowy',
      name: 'Zebra Printer Repair Specialist',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Zebra Technologies',
        url: 'https://www.zebra.com',
      },
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TAKMA',
  url: 'https://takma.com.pl',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://takma.com.pl/katalog?szukaj={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get('x-next-pathname') || headersList.get('x-invoke-path') || ''
  const isAdmin = pathname.startsWith('/admin')
  const isPanel = pathname.startsWith('/panel')

  return (
    <html lang="pl" className={inter.variable}>
      <head>
        {!isAdmin && !isPanel && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
          </>
        )}
      </head>
      <LayoutShell>{children}</LayoutShell>
    </html>
  )
}
