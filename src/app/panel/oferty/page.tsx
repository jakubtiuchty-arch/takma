import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { QuoteStatus } from '@/generated/prisma/client'

const statusLabels: Record<QuoteStatus, string> = {
  REQUESTED: 'Wysłane zapytanie',
  DRAFT: 'Szkic',
  SENT: 'Wyslana',
  ACCEPTED: 'Zaakceptowana',
  EXPIRED: 'Wygasla',
  REJECTED: 'Odrzucona',
}

const statusVariants: Record<QuoteStatus, string> = {
  REQUESTED: 'bg-cyan-100 text-cyan-800',
  DRAFT: 'bg-gray-100 text-gray-700',
  SENT: 'bg-blue-100 text-blue-800',
  ACCEPTED: 'bg-green-100 text-green-800',
  EXPIRED: 'bg-yellow-100 text-yellow-800',
  REJECTED: 'bg-red-100 text-red-800',
}

export default async function OfertyPage() {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  const quotes = await prisma.quote.findMany({
    where: { customerId: session.customerId },
    orderBy: { createdAt: 'desc' },
    include: { items: true },
  })

  const now = new Date()

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-900">Moje oferty</h1>
        <Link
          href="/panel/oferty/nowe"
          className="px-3 py-1.5 bg-primary-600 text-white rounded-md text-[13px] font-medium hover:bg-primary-700 transition-colors flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Nowe zapytanie
        </Link>
      </div>

      {quotes.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <svg
            className="mx-auto h-8 w-8 text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Nie masz jeszcze zadnych ofert
          </h3>
          <p className="text-sm text-gray-500 mb-3">Zapytaj o wycene!</p>
          <Link
            href="/panel/oferty/nowe"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white rounded-md text-[13px] font-medium hover:bg-primary-700 transition-colors"
          >
            Zapytaj o wycene
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">
                      Nr oferty
                    </th>
                    <th className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">
                      Data utworzenia
                    </th>
                    <th className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">
                      Wazna do
                    </th>
                    <th className="px-3 py-2.5 text-right text-xs font-medium text-gray-500 uppercase">
                      Kwota brutto
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-medium text-gray-500 uppercase">
                      Akcje
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {quotes.map((quote) => {
                    const isExpiredDate = quote.validUntil < now
                    return (
                      <tr key={quote.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2.5 text-sm font-medium text-gray-900">
                          {quote.quoteNumber}
                        </td>
                        <td className="px-3 py-2.5 text-sm text-gray-600">
                          {quote.createdAt.toLocaleDateString('pl-PL')}
                        </td>
                        <td className="px-3 py-2.5 text-sm">
                          <span className={clsx(isExpiredDate && 'text-red-600 font-medium')}>
                            {quote.validUntil.toLocaleDateString('pl-PL')}
                            {isExpiredDate && quote.status !== 'EXPIRED' && ' (wygasla)'}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-sm text-right font-medium tabular-nums">
                          {quote.status === 'REQUESTED' ? (
                            <span className="text-gray-400 text-xs font-normal">Oczekuje na wycenę</span>
                          ) : (
                            <>
                              {(quote.totalBrutto / 100).toLocaleString('pl-PL', {
                                minimumFractionDigits: 2,
                              })}{' '}
                              zl
                            </>
                          )}
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <span
                            className={clsx(
                              'inline-flex px-2 py-1 rounded-full text-xs font-medium',
                              statusVariants[quote.status]
                            )}
                          >
                            {statusLabels[quote.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {quote.status === 'REQUESTED' ? (
                              <span className="text-xs text-gray-400">Oczekuje na wycenę</span>
                            ) : (
                              <>
                                {quote.status !== 'DRAFT' && (
                                  <a
                                    href={`/api/admin/quote-pdf?id=${quote.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2.5 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                                  >
                                    Pobierz PDF
                                  </a>
                                )}
                                <button
                                  disabled
                                  className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed"
                                  title="Wkrotce dostepne"
                                >
                                  Zamow z oferty
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-2">
            {quotes.map((quote) => {
              const isExpiredDate = quote.validUntil < now
              return (
                <div
                  key={quote.id}
                  className="bg-white rounded-lg border border-gray-200 p-3"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {quote.quoteNumber}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {quote.createdAt.toLocaleDateString('pl-PL')}
                      </p>
                    </div>
                    <span
                      className={clsx(
                        'inline-flex px-2 py-1 rounded-full text-xs font-medium',
                        statusVariants[quote.status]
                      )}
                    >
                      {statusLabels[quote.status]}
                    </span>
                  </div>

                  <dl className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Kwota brutto</dt>
                      <dd className="font-medium tabular-nums">
                        {quote.status === 'REQUESTED' ? (
                          <span className="text-gray-400 text-xs font-normal">Oczekuje na wycenę</span>
                        ) : (
                          <>
                            {(quote.totalBrutto / 100).toLocaleString('pl-PL', {
                              minimumFractionDigits: 2,
                            })}{' '}
                            zl
                          </>
                        )}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Wazna do</dt>
                      <dd className={clsx(isExpiredDate && 'text-red-600 font-medium')}>
                        {quote.validUntil.toLocaleDateString('pl-PL')}
                        {isExpiredDate && quote.status !== 'EXPIRED' && ' (wygasla)'}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Pozycje</dt>
                      <dd>{quote.items.length}</dd>
                    </div>
                  </dl>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex gap-3">
                    {quote.status === 'REQUESTED' ? (
                      <span className="text-xs text-gray-400">Oczekuje na wycenę</span>
                    ) : (
                      <>
                        {quote.status !== 'DRAFT' && (
                          <a
                            href={`/api/admin/quote-pdf?id=${quote.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                          >
                            Pobierz PDF
                          </a>
                        )}
                        <button
                          disabled
                          className="px-3 py-1.5 text-sm font-medium text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed"
                          title="Wkrotce dostepne"
                        >
                          Zamow z oferty
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
