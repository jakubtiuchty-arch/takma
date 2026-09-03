import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { renderQuotePdf, quotePdfFilename } from '@/lib/quote-pdf/render'

export const runtime = 'nodejs'

/**
 * PDF oferty dla klienta — link „Pobierz ofertę (PDF)” z maila ofertowego.
 * Dostęp tym samym tokenem co „Zamów w cenach z oferty”, więc link działa
 * tylko z wiadomości wysłanej do adresata.
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ numer: string }> }) {
  const { numer } = await params
  const token = req.nextUrl.searchParams.get('t')

  const quote = await prisma.quote.findUnique({
    where: { quoteNumber: decodeURIComponent(numer) },
    include: { items: { orderBy: { position: 'asc' } } },
  })
  if (!quote || !quote.orderToken || !token || quote.orderToken !== token) {
    return new NextResponse('Oferta nie znaleziona', { status: 404 })
  }

  const pdf = await renderQuotePdf({
    quoteNumber: quote.quoteNumber,
    issuedAt: quote.sentAt ?? quote.createdAt,
    validUntil: quote.validUntil,
    clientCompany: quote.clientCompany,
    clientContact: quote.clientContact,
    clientAddress: quote.clientAddress,
    clientNip: quote.clientNip,
    clientEmail: quote.clientEmail,
    clientPhone: quote.clientPhone,
    items: quote.items,
    subtotalNetto: quote.subtotalNetto,
    vatAmount: quote.vatAmount,
    totalBrutto: quote.totalBrutto,
    paymentTerms: quote.paymentTerms,
    deliveryTerms: quote.deliveryTerms,
    freebiesNote: quote.freebiesNote,
    notes: quote.notes,
  })

  return new NextResponse(pdf as unknown as BodyInit, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${quotePdfFilename(quote.quoteNumber)}"`,
      'Cache-Control': 'private, no-store',
    },
  })
}
