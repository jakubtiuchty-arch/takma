import QuoteBuilder from '@/components/admin/quote/QuoteBuilder'
import Link from 'next/link'
import { prisma } from '@/lib/db'

interface PageProps {
  searchParams: Promise<{ fromRfq?: string }>
}

export default async function NewQuotePage({ searchParams }: PageProps) {
  const { fromRfq } = await searchParams

  // Wczytaj dane z zapytania klienta (jeśli konwersja RFQ → oferta)
  let rfqData: {
    rfqQuoteId: string
    client: {
      company: string
      nip?: string | null
      contact?: string | null
      email?: string | null
      phone?: string | null
      address?: string | null
    }
    items: {
      productId?: string | null
      productName: string
      partNumber?: string | null
      description?: string | null
      quantity: number
    }[]
    notes?: string | null
  } | null = null

  if (fromRfq) {
    const rfq = await prisma.quote.findUnique({
      where: { id: fromRfq },
      include: { items: { orderBy: { position: 'asc' } } },
    })

    if (rfq && rfq.status === 'REQUESTED') {
      rfqData = {
        rfqQuoteId: rfq.id,
        client: {
          company: rfq.clientCompany,
          nip: rfq.clientNip,
          contact: rfq.clientContact,
          email: rfq.clientEmail,
          phone: rfq.clientPhone,
          address: rfq.clientAddress,
        },
        items: rfq.items.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
        })),
        notes: rfq.notes,
      }
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/oferty" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          {rfqData ? 'Wycena zapytania klienta' : 'Nowa oferta'}
        </h1>
      </div>

      {rfqData && (
        <div className="mb-6 bg-cyan-50 border border-cyan-200 rounded-xl p-4">
          <p className="text-sm text-cyan-800">
            Wyceniasz zapytanie od <strong>{rfqData.client.company}</strong>.
            Uzupełnij ceny i wyślij ofertę.
          </p>
          {rfqData.notes && (
            <p className="text-xs text-cyan-600 mt-1">
              Wiadomość klienta: <em>{rfqData.notes}</em>
            </p>
          )}
        </div>
      )}

      <QuoteBuilder rfqData={rfqData ? {
        rfqQuoteId: rfqData.rfqQuoteId,
        client: {
          company: rfqData.client.company,
          nip: rfqData.client.nip || undefined,
          contact: rfqData.client.contact || undefined,
          email: rfqData.client.email || undefined,
          phone: rfqData.client.phone || undefined,
          address: rfqData.client.address || undefined,
        },
        items: rfqData.items.map((item) => ({
          productId: item.productId || undefined,
          productName: item.productName,
          partNumber: item.partNumber || undefined,
          description: item.description || undefined,
          quantity: item.quantity,
        })),
      } : undefined} />
    </div>
  )
}
