import { prisma } from '@/lib/db'
import Link from 'next/link'
import { QuoteStatus } from '@/generated/prisma/client'
import ListaOfert, { type OfertaDto } from './ListaOfert'

export const dynamic = 'force-dynamic'

const statusLabels: Record<QuoteStatus, string> = {
  REQUESTED: 'Zapytanie klienta',
  DRAFT: 'Szkic',
  SENT: 'Wysłana',
  ACCEPTED: 'Zaakceptowana',
  EXPIRED: 'Wygasła',
  REJECTED: 'Odrzucona',
}

const statusColors: Record<QuoteStatus, string> = {
  REQUESTED: 'bg-cyan-100 text-cyan-800 ring-1 ring-cyan-300',
  DRAFT: 'bg-gray-100 text-gray-700',
  SENT: 'bg-blue-100 text-blue-800',
  ACCEPTED: 'bg-green-100 text-green-800',
  EXPIRED: 'bg-yellow-100 text-yellow-800',
  REJECTED: 'bg-red-100 text-red-800',
}

/**
 * Lista ofert. Wszystkie oferty (ok. 110) idą do przeglądarki, bo filtrowanie
 * dzieje się tam w trakcie pisania — przy tej skali to szybsze i prostsze niż
 * zapytanie do bazy po każdym znaku. Do klienta nie wysyłamy pełnych notatek:
 * serwer skleja z nich pole `szukajka` (małymi literami) i tylko ono jedzie
 * dalej.
 */
export default async function QuotesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams

  const quotes = await prisma.quote.findMany({
    include: { items: { select: { partNumber: true, productName: true, description: true } } },
    orderBy: { createdAt: 'desc' },
  })

  // Zapytania klientów na górze — czekają na naszą wycenę.
  const posortowane = [...quotes].sort((a, b) => {
    if (a.status === 'REQUESTED' && b.status !== 'REQUESTED') return -1
    if (a.status !== 'REQUESTED' && b.status === 'REQUESTED') return 1
    return 0
  })

  const oferty: OfertaDto[] = posortowane.map((o) => {
    const pozycjeOpis = o.items.map((i) => i.partNumber || i.productName).filter(Boolean).join(', ')
    const szukajka = [
      o.quoteNumber, o.clientCompany, o.clientContact, o.clientEmail, o.clientNip, o.clientPhone, o.notes,
      ...o.items.flatMap((i) => [i.partNumber, i.productName, i.description]),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return {
      id: o.id,
      quoteNumber: o.quoteNumber,
      clientCompany: o.clientCompany,
      clientEmail: o.clientEmail,
      status: o.status,
      statusLabel: statusLabels[o.status],
      statusClass: statusColors[o.status],
      totalBrutto: o.totalBrutto,
      validUntil: o.validUntil.toLocaleDateString('pl-PL'),
      createdAt: o.createdAt.toLocaleDateString('pl-PL'),
      pozycji: o.items.length,
      pozycjeOpis,
      szukajka,
    }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Oferty</h1>
        <Link
          href="/admin/oferty/nowa"
          className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Nowa oferta
        </Link>
      </div>

      <ListaOfert oferty={oferty} fraza={(q ?? '').trim()} />
    </div>
  )
}
