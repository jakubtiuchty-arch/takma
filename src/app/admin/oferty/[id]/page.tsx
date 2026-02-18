import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { QuoteStatus } from '@/generated/prisma/client'
import QuoteActions from './QuoteActions'

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

function formatPrice(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function QuoteDetailPage({ params }: PageProps) {
  const { id } = await params
  const quote = await prisma.quote.findUnique({
    where: { id },
    include: { items: { orderBy: { position: 'asc' } } },
  })

  if (!quote) notFound()

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/oferty" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Oferta {quote.quoteNumber}</h1>
        <span className={clsx('px-2.5 py-1 rounded-full text-xs font-medium', statusColors[quote.status])}>
          {statusLabels[quote.status]}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Pozycje oferty</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-2 text-left text-xs font-medium text-gray-500 uppercase w-8">Lp.</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500 uppercase">Produkt</th>
                  <th className="pb-2 text-center text-xs font-medium text-gray-500 uppercase">Ilość</th>
                  <th className="pb-2 text-right text-xs font-medium text-gray-500 uppercase">Cena netto</th>
                  <th className="pb-2 text-right text-xs font-medium text-gray-500 uppercase">Razem netto</th>
                  <th className="pb-2 text-center text-xs font-medium text-gray-500 uppercase">Marża</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {quote.items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 text-sm text-gray-500">{item.position}</td>
                    <td className="py-2">
                      <div className="text-sm font-medium text-gray-900">{item.productName}</div>
                      {item.partNumber && <div className="text-xs text-gray-500 font-mono">PN: {item.partNumber}</div>}
                    </td>
                    <td className="py-2 text-center text-sm">{item.quantity}</td>
                    <td className="py-2 text-right text-sm tabular-nums">{formatPrice(item.priceNetto)} zł</td>
                    <td className="py-2 text-right text-sm font-medium tabular-nums">{formatPrice(item.totalNetto)} zł</td>
                    <td className="py-2 text-center">
                      {item.marginPercent != null ? (
                        <span className={`text-xs font-medium ${item.marginPercent >= 10 ? 'text-green-600' : 'text-orange-600'}`}>
                          {item.marginPercent.toFixed(1)}%
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 pt-4 border-t border-gray-200 space-y-1 text-sm text-right">
              <div className="flex justify-end gap-8">
                <span className="text-gray-500">Netto:</span>
                <span className="tabular-nums">{formatPrice(quote.subtotalNetto)} zł</span>
              </div>
              <div className="flex justify-end gap-8">
                <span className="text-gray-500">VAT 23%:</span>
                <span className="tabular-nums">{formatPrice(quote.vatAmount)} zł</span>
              </div>
              <div className="flex justify-end gap-8 text-lg font-bold">
                <span>Brutto:</span>
                <span className="tabular-nums">{formatPrice(quote.totalBrutto)} zł</span>
              </div>
            </div>

            {quote.freebiesNote && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-800">
                <strong>Gratisy:</strong> {quote.freebiesNote}
              </div>
            )}
          </div>

          {/* Notes */}
          {(quote.notes || quote.internalNotes) && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
              {quote.notes && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Uwagi (widoczne dla klienta)</h3>
                  <p className="text-sm text-gray-700">{quote.notes}</p>
                </div>
              )}
              {quote.internalNotes && (
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h3 className="text-sm font-medium text-yellow-800 mb-1">Notatki wewnętrzne</h3>
                  <p className="text-sm text-yellow-700">{quote.internalNotes}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <QuoteActions quoteId={quote.id} status={quote.status} hasEmail={!!quote.clientEmail} />

          {/* Client */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Klient</h2>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-gray-500">Firma</dt>
                <dd className="font-medium">{quote.clientCompany}</dd>
              </div>
              {quote.clientNip && (
                <div>
                  <dt className="text-gray-500">NIP</dt>
                  <dd className="font-mono">{quote.clientNip}</dd>
                </div>
              )}
              {quote.clientContact && (
                <div>
                  <dt className="text-gray-500">Kontakt</dt>
                  <dd>{quote.clientContact}</dd>
                </div>
              )}
              {quote.clientEmail && (
                <div>
                  <dt className="text-gray-500">Email</dt>
                  <dd><a href={`mailto:${quote.clientEmail}`} className="text-blue-600 hover:underline">{quote.clientEmail}</a></dd>
                </div>
              )}
              {quote.clientPhone && (
                <div>
                  <dt className="text-gray-500">Telefon</dt>
                  <dd>{quote.clientPhone}</dd>
                </div>
              )}
              {quote.clientAddress && (
                <div>
                  <dt className="text-gray-500">Adres</dt>
                  <dd>{quote.clientAddress}</dd>
                </div>
              )}
            </dl>
          </div>

          {/* Terms */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Warunki</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Ważna do</dt>
                <dd className="font-medium">{quote.validUntil.toLocaleDateString('pl-PL')}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Płatność</dt>
                <dd>{quote.paymentTerms}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Dostawa</dt>
                <dd>{quote.deliveryTerms}</dd>
              </div>
            </dl>
          </div>

          {/* Dates */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Daty</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Utworzono</dt>
                <dd>{quote.createdAt.toLocaleString('pl-PL')}</dd>
              </div>
              {quote.sentAt && (
                <div className="flex justify-between">
                  <dt className="text-gray-500">Wysłano</dt>
                  <dd>{quote.sentAt.toLocaleString('pl-PL')}</dd>
                </div>
              )}
              {quote.acceptedAt && (
                <div className="flex justify-between">
                  <dt className="text-gray-500">Zaakceptowano</dt>
                  <dd>{quote.acceptedAt.toLocaleString('pl-PL')}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
