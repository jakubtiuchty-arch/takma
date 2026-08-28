import QuoteBuilder from '@/components/admin/quote/QuoteBuilder'
import Link from 'next/link'
import { prisma } from '@/lib/db'

interface PageProps {
  searchParams: Promise<{ fromRfq?: string; kopiaZ?: string }>
}

export default async function NewQuotePage({ searchParams }: PageProps) {
  const { fromRfq, kopiaZ } = await searchParams

  // „Dodaj podobną": bierzemy pozycje i warunki z istniejącej oferty, dane
  // klienta zostawiamy puste. Nowa oferta dostaje własny numer — nic nie
  // nadpisujemy w tej, z której kopiujemy.
  let kopia: {
    zrodloNumer: string
    items: {
      source: string; productId?: string; productName: string; partNumber?: string
      description?: string; quantity: number; priceNetto: number; purchasePrice?: number
      marginPercent?: number; discountPercent?: number; catalogPrice?: number
    }[]
    terms: {
      validDays: number; paymentTerms: string; deliveryTerms: string
      notes?: string; internalNotes?: string; freebiesNote?: string; zebraServiceBanner?: boolean
    }
  } | null = null

  if (kopiaZ) {
    const zrodlo = await prisma.quote.findUnique({
      where: { id: kopiaZ },
      include: { items: { orderBy: { position: 'asc' } } },
    })
    if (zrodlo) {
      const dni = Math.max(
        1,
        Math.round((zrodlo.validUntil.getTime() - zrodlo.createdAt.getTime()) / 86_400_000),
      )
      kopia = {
        zrodloNumer: zrodlo.quoteNumber,
        items: zrodlo.items.map((i) => ({
          source: i.source,
          productId: i.productId ?? undefined,
          productName: i.productName,
          partNumber: i.partNumber ?? undefined,
          description: i.description ?? undefined,
          quantity: i.quantity,
          priceNetto: i.priceNetto,
          purchasePrice: i.purchasePrice ?? undefined,
          marginPercent: i.marginPercent ?? undefined,
          discountPercent: i.discountPercent ?? undefined,
          catalogPrice: i.catalogPriceNetto ?? undefined,
        })),
        terms: {
          validDays: dni,
          paymentTerms: zrodlo.paymentTerms,
          deliveryTerms: zrodlo.deliveryTerms,
          notes: zrodlo.notes ?? undefined,
          internalNotes: zrodlo.internalNotes ?? undefined,
          freebiesNote: zrodlo.freebiesNote ?? undefined,
          zebraServiceBanner: zrodlo.zebraServiceBanner,
        },
      }
    }
  }

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
          {rfqData ? 'Wycena zapytania klienta' : kopia ? 'Nowa oferta na wzór poprzedniej' : 'Nowa oferta'}
        </h1>
      </div>

      {kopia && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Pozycje i warunki przepisane z oferty <strong>{kopia.zrodloNumer}</strong> ({kopia.items.length} poz.).
            Uzupełnij dane klienta — reszta jest gotowa, ceny możesz poprawić w tabeli.
          </p>
        </div>
      )}

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

      <QuoteBuilder copyData={kopia ? { items: kopia.items, terms: kopia.terms } : undefined} rfqData={rfqData ? {
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
