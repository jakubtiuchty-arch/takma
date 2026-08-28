import { prisma } from '@/lib/db'
import Link from 'next/link'
import clsx from 'clsx'
import DeleteQuoteButton from './DeleteQuoteButton'
import { QuoteStatus } from '@/generated/prisma/client'

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
 * Warunek wyszukiwania. Jedno pole obsługuje trzy rzeczy naraz, bo w praktyce
 * handlowiec pamięta albo numer katalogowy, albo model, albo firmę — i nie
 * chce się zastanawiać, w którą rubrykę wpisać. Szukamy też po numerze oferty,
 * NIP-ie i mailu, bo to darmowy dodatek przy tej samej strukturze zapytania.
 */
function warunekSzukania(q: string) {
  const fraza = { contains: q, mode: 'insensitive' as const }
  return {
    OR: [
      { quoteNumber: fraza },
      { clientCompany: fraza },
      { clientContact: fraza },
      { clientEmail: fraza },
      { clientNip: fraza },
      { clientPhone: fraza },
      { notes: fraza },
      { items: { some: { OR: [{ partNumber: fraza }, { productName: fraza }, { description: fraza }] } } },
    ],
  }
}

export default async function QuotesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const szukane = (q ?? '').trim()

  const quotesRaw = await prisma.quote.findMany({
    where: szukane ? warunekSzukania(szukane) : undefined,
    include: { items: true },
    orderBy: { createdAt: 'desc' },
    // Przy wyszukiwaniu podnosimy limit: sens ma znaleźć ofertę sprzed roku,
    // a nie tylko wśród stu najnowszych.
    take: szukane ? 300 : 100,
  })

  // REQUESTED na górze listy (priorytet)
  const quotes = quotesRaw.sort((a, b) => {
    if (a.status === 'REQUESTED' && b.status !== 'REQUESTED') return -1
    if (a.status !== 'REQUESTED' && b.status === 'REQUESTED') return 1
    return 0
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
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

      {/* Wyszukiwarka — zwykły formularz GET, więc wynik da się zapisać w
          zakładkach i odświeżyć bez utraty frazy. */}
      <form method="get" className="flex flex-wrap items-center gap-2 mb-6">
        <input
          type="search"
          name="q"
          defaultValue={szukane}
          placeholder="Numer katalogowy, model, klient, NIP, numer oferty…"
          className="flex-1 min-w-[260px] rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        <button type="submit" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
          Szukaj
        </button>
        {szukane && (
          <Link href="/admin/oferty" className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700">
            Wyczyść
          </Link>
        )}
      </form>

      {szukane && (
        <p className="text-sm text-gray-500 -mt-3 mb-4">
          {quotes.length === 0
            ? <>Brak ofert pasujących do &bdquo;{szukane}&rdquo;.</>
            : <>Znaleziono {quotes.length} {quotes.length === 1 ? 'ofertę' : quotes.length < 5 ? 'oferty' : 'ofert'} dla &bdquo;{szukane}&rdquo;.</>}
        </p>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nr oferty</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Klient</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Pozycje</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Kwota brutto</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ważna do</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utworzona</th>
                <th className="px-4 py-3 w-10"><span className="sr-only">Akcje</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-gray-500">
                    {szukane ? (
                      <>Nic nie pasuje do &bdquo;{szukane}&rdquo;. <Link href="/admin/oferty" className="text-blue-600 hover:underline">Pokaż wszystkie</Link></>
                    ) : (
                      <>Brak ofert. <Link href="/admin/oferty/nowa" className="text-blue-600 hover:underline">Utwórz pierwszą ofertę</Link></>
                    )}
                  </td>
                </tr>
              ) : (
                quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/admin/oferty/${quote.id}`} className="text-sm font-medium text-blue-600 hover:underline">
                        {quote.quoteNumber}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">{quote.clientCompany}</div>
                      {quote.clientEmail && <div className="text-xs text-gray-500">{quote.clientEmail}</div>}
                    </td>
                    <td className="px-4 py-3 text-center text-sm">
                      {quote.items.length}
                      {szukane && quote.items.length > 0 && (
                        <span className="block text-xs text-gray-400 text-left max-w-[220px] truncate" title={quote.items.map((i) => i.productName).join(', ')}>
                          {quote.items.map((i) => i.partNumber || i.productName).join(', ')}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                      {(quote.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={clsx('inline-flex px-2 py-1 rounded-full text-xs font-medium', statusColors[quote.status])}>
                        {statusLabels[quote.status]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {quote.validUntil.toLocaleDateString('pl-PL')}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {quote.createdAt.toLocaleDateString('pl-PL')}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DeleteQuoteButton quoteId={quote.id} quoteNumber={quote.quoteNumber} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
