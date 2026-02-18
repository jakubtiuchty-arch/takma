import { prisma } from '@/lib/db'
import Link from 'next/link'
import clsx from 'clsx'
import { QuoteStatus } from '@/generated/prisma/client'

const statusLabels: Record<QuoteStatus, string> = {
  DRAFT: 'Szkic',
  SENT: 'Wysłana',
  ACCEPTED: 'Zaakceptowana',
  EXPIRED: 'Wygasła',
  REJECTED: 'Odrzucona',
}

const statusColors: Record<QuoteStatus, string> = {
  DRAFT: 'bg-gray-100 text-gray-700',
  SENT: 'bg-blue-100 text-blue-800',
  ACCEPTED: 'bg-green-100 text-green-800',
  EXPIRED: 'bg-yellow-100 text-yellow-800',
  REJECTED: 'bg-red-100 text-red-800',
}

export default async function QuotesPage() {
  const quotes = await prisma.quote.findMany({
    include: { items: true },
    orderBy: { createdAt: 'desc' },
    take: 100,
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                    Brak ofert. <Link href="/admin/oferty/nowa" className="text-blue-600 hover:underline">Utwórz pierwszą ofertę</Link>
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
                    <td className="px-4 py-3 text-center text-sm">{quote.items.length}</td>
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
