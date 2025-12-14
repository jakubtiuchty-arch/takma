import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RFQDrawer from '@/components/rfq/RFQDrawer'

export const metadata: Metadata = {
  title: {
    default: 'TAKMA - Urządzenia AutoID | Drukarki etykiet, Skanery, Terminale',
    template: '%s | TAKMA',
  },
  description:
    'TAKMA - 20 lat doświadczenia na rynku AutoID. Drukarki etykiet, skanery kodów kreskowych, terminale mobilne, systemy RFID. Profesjonalne doradztwo i serwis w całej Polsce.',
  keywords: [
    'drukarki etykiet',
    'skanery kodów kreskowych',
    'terminale mobilne',
    'RFID',
    'AutoID',
    'Zebra',
    'Honeywell',
    'Datalogic',
    'etykiety',
    'TAKMA',
  ],
  authors: [{ name: 'TAKMA' }],
  creator: 'TAKMA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'TAKMA',
    title: 'TAKMA - Urządzenia AutoID',
    description: 'Profesjonalne rozwiązania AutoID dla Twojej firmy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RFQDrawer />
      </body>
    </html>
  )
}
