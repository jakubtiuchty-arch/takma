import { createElement } from 'react'
import { renderToBuffer } from '@react-pdf/renderer'
import { ensureFonts } from '@/lib/quote-pdf/render'
import { ProformaPdfDoc, type ProformaPdfData } from './ProformaPdf'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'

export type ProformaForPdf = Omit<ProformaPdfData, 'logoSrc' | 'issuedAt' | 'dueDate'> & {
  issuedAt?: Date
}

/** Termin płatności pro formy: 7 dni od wystawienia, jak w mailu. */
export function proformaDueDate(issuedAt: Date): Date {
  return new Date(issuedAt.getTime() + 7 * 24 * 60 * 60 * 1000)
}

export async function renderProformaPdf(data: ProformaForPdf): Promise<Buffer> {
  ensureFonts()
  const issuedAt = data.issuedAt ?? new Date()
  const element = createElement(ProformaPdfDoc, {
    p: { ...data, issuedAt, dueDate: proformaDueDate(issuedAt), logoSrc: `${SITE_URL}/images/takma_logo.png` },
  }) as Parameters<typeof renderToBuffer>[0]
  return Buffer.from(await renderToBuffer(element))
}

export function proformaPdfFilename(orderNumber: string): string {
  return `pro-forma-${orderNumber.replace(/[^A-Za-z0-9-]+/g, '-')}-TAKMA.pdf`
}
