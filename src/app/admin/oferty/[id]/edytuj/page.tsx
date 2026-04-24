import { prisma } from '@/lib/db'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import QuoteBuilder from '@/components/admin/quote/QuoteBuilder'
import type { EditData } from '@/components/admin/quote/QuoteBuilder'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditQuotePage({ params }: PageProps) {
  const { id } = await params
  const quote = await prisma.quote.findUnique({
    where: { id },
    include: { items: { orderBy: { position: 'asc' } } },
  })

  if (!quote) notFound()

  // Niedozwolone statusy — ACCEPTED (deal zamknięty), REQUESTED (ma flow "Wyceniaj")
  if (quote.status === 'ACCEPTED' || quote.status === 'REQUESTED') {
    redirect(`/admin/oferty/${id}`)
  }

  // Oblicz validDays na podstawie validUntil
  const now = new Date()
  const diffMs = quote.validUntil.getTime() - now.getTime()
  const validDays = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)))

  const editData: EditData = {
    quoteId: quote.id,
    client: {
      company: quote.clientCompany,
      nip: quote.clientNip || undefined,
      contact: quote.clientContact || undefined,
      email: quote.clientEmail || undefined,
      phone: quote.clientPhone || undefined,
      address: quote.clientAddress || undefined,
    },
    items: quote.items.map((item) => ({
      source: item.source,
      productId: item.productId || undefined,
      productName: item.productName,
      partNumber: item.partNumber || undefined,
      description: item.description || undefined,
      quantity: item.quantity,
      priceNetto: item.priceNetto,
      purchasePrice: item.purchasePrice || undefined,
      marginPercent: item.marginPercent ?? undefined,
    })),
    terms: {
      validDays,
      paymentTerms: quote.paymentTerms,
      deliveryTerms: quote.deliveryTerms,
      notes: quote.notes || undefined,
      internalNotes: quote.internalNotes || undefined,
      freebiesNote: quote.freebiesNote || undefined,
      zebraServiceBanner: quote.zebraServiceBanner,
    },
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href={`/admin/oferty/${id}`} className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          Edycja oferty {quote.quoteNumber}
        </h1>
      </div>

      <QuoteBuilder editData={editData} />
    </div>
  )
}
