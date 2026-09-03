import { createElement } from 'react'
import { Font, renderToBuffer } from '@react-pdf/renderer'
import { QuotePdfDoc, type QuotePdfData } from './QuotePdf'
import { quoteHasZebra } from '@/lib/quote-zebra'

/**
 * Renderuje ofertę do PDF (Buffer). Czcionka i logotypy idą z public/ pod
 * adresem serwisu, bo funkcje na Vercelu nie mają gwarancji dostępu do plików
 * z public/ przez system plików.
 */

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'

let fontsRegistered = false
function ensureFonts() {
  if (fontsRegistered) return
  Font.register({
    family: 'DejaVu',
    fonts: [
      { src: `${SITE_URL}/fonts/DejaVuSans.ttf` },
      { src: `${SITE_URL}/fonts/DejaVuSans-Bold.ttf`, fontWeight: 'bold' },
    ],
  })
  Font.registerHyphenationCallback((word) => [word])
  fontsRegistered = true
}

export type QuoteForPdf = Omit<QuotePdfData, 'logoSrc' | 'zebraLogoSrc' | 'zebraService' | 'issuedAt' | 'items'> & {
  issuedAt?: Date | null
  items: (QuotePdfData['items'][number] & { productId?: string | null })[]
}

export async function renderQuotePdf(quote: QuoteForPdf): Promise<Buffer> {
  ensureFonts()
  const data: QuotePdfData = {
    ...quote,
    issuedAt: quote.issuedAt ?? new Date(),
    // baner serwisu tylko przy sprzęcie Zebry — jedna reguła dla maila i PDF
    zebraService: quoteHasZebra(quote.items),
    logoSrc: `${SITE_URL}/images/takma_logo.png`,
    zebraLogoSrc: `${SITE_URL}/images/partners/logo_zebra.png`,
  }
  const element = createElement(QuotePdfDoc, { q: data }) as Parameters<typeof renderToBuffer>[0]
  const buffer = await renderToBuffer(element)
  return Buffer.from(buffer)
}

export function quotePdfFilename(quoteNumber: string): string {
  return `oferta-${quoteNumber.replace(/[^A-Za-z0-9-]+/g, '-')}-TAKMA.pdf`
}
