import type { Metadata } from 'next'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

export const metadata: Metadata = {
  title: 'SATO — drukarki, etykiety, taśmy i rozwiązania RFID | TAKMA',
  description: 'Poznaj ofertę SATO: drukarki etykiet, taśmy termotransferowe, etykiety i metki, opaski, RFID, metkownice oraz oprogramowanie. Dobierz produkty w TAKMA.',
  alternates: { canonical: 'https://www.takma.com.pl/sato' },
  openGraph: { title: 'SATO — produkty i rozwiązania do identyfikacji | TAKMA', description: 'Drukarki, materiały, RFID i oprogramowanie SATO. Modele oraz akcesoria w katalogu TAKMA.', url: 'https://www.takma.com.pl/sato', type: 'website', locale: 'pl_PL' },
}

export default function Page() {
  return <BrandPillarPage manufacturerId="sato" />
}
