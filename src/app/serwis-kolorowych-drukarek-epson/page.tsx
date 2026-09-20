import type { Metadata } from 'next'
import BrandServicePage, { generateMetadata as brandMetadata } from '../serwis/[brand]/page'

/**
 * Serwis Epson ColorWorks ma własny adres zamiast /serwis/epson, bo to fraza, której
 * szuka klient. Strona jest tą samą stroną marki co pozostałe — różni się tylko URL-em,
 * a `path` w `brands.ts` pilnuje, żeby kanoniczny i breadcrumbs wskazywały ten adres.
 */
const PARAMS = { params: { brand: 'epson' } }

export function generateMetadata(): Metadata {
  return brandMetadata(PARAMS)
}

export default function SerwisEpsonColorWorks() {
  return <BrandServicePage {...PARAMS} />
}
