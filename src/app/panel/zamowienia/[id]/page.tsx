import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { OrderStatus } from '@/generated/prisma/client'

const statusLabels: Record<OrderStatus, string> = {
  PENDING_PAYMENT: 'Oczekuje na płatność',
  AWAITING_PAYMENT: 'Oczekuje na przelew',
  PAID: 'Opłacone',
  PROCESSING: 'W realizacji',
  SHIPPED: 'Wysłane',
  DELIVERED: 'Dostarczone',
  CANCELLED: 'Anulowane',
  EXPIRED: 'Wygasłe',
  REFUNDED: 'Zwrócone',
}

const statusColors: Record<OrderStatus, string> = {
  PENDING_PAYMENT: 'bg-yellow-100 text-yellow-800',
  AWAITING_PAYMENT: 'bg-orange-100 text-orange-800',
  PAID: 'bg-green-100 text-green-800',
  PROCESSING: 'bg-blue-100 text-blue-800',
  SHIPPED: 'bg-indigo-100 text-indigo-800',
  DELIVERED: 'bg-emerald-100 text-emerald-800',
  CANCELLED: 'bg-red-100 text-red-800',
  EXPIRED: 'bg-gray-100 text-gray-600',
  REFUNDED: 'bg-purple-100 text-purple-800',
}

function formatPLN(amountInGrosze: number): string {
  return (amountInGrosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 }) + ' zł'
}

// Carrier tracking URLs
function getTrackingUrl(carrierName: string | null, trackingNumber: string): string | null {
  if (!carrierName) return null
  const carrier = carrierName.toLowerCase()
  if (carrier.includes('dhl')) return `https://www.dhl.com/pl-pl/home/sledzenie-przesylek.html?tracking-id=${trackingNumber}`
  if (carrier.includes('dpd')) return `https://tracktrace.dpd.com.pl/parcelDetails?typ=1&p1=${trackingNumber}`
  if (carrier.includes('inpost')) return `https://inpost.pl/sledzenie-przesylek?number=${trackingNumber}`
  if (carrier.includes('ups')) return `https://www.ups.com/track?tracknum=${trackingNumber}&loc=pl_PL`
  if (carrier.includes('fedex')) return `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`
  if (carrier.includes('gls')) return `https://gls-group.com/PL/pl/sledzenie-paczek?match=${trackingNumber}`
  if (carrier.includes('poczta')) return `https://emonitoring.poczta-polska.pl/?numer=${trackingNumber}`
  return null
}

// Timeline steps for order progress
interface TimelineStep {
  label: string
  date: Date | null
  isActive: boolean
  isCompleted: boolean
}

function getTimelineSteps(order: {
  status: OrderStatus
  createdAt: Date
  paidAt: Date | null
  shippedAt: Date | null
  deliveredAt: Date | null
}): TimelineStep[] {
  const isCancelled = order.status === 'CANCELLED' || order.status === 'EXPIRED' || order.status === 'REFUNDED'

  if (isCancelled) {
    return [
      { label: 'Złożone', date: order.createdAt, isActive: false, isCompleted: true },
      { label: statusLabels[order.status], date: null, isActive: true, isCompleted: false },
    ]
  }

  const steps: TimelineStep[] = [
    {
      label: 'Złożone',
      date: order.createdAt,
      isActive: order.status === 'PENDING_PAYMENT' || order.status === 'AWAITING_PAYMENT',
      isCompleted: true,
    },
    {
      label: 'Opłacone',
      date: order.paidAt,
      isActive: order.status === 'PAID' || order.status === 'PROCESSING',
      isCompleted: !!order.paidAt,
    },
    {
      label: 'Wysłane',
      date: order.shippedAt,
      isActive: order.status === 'SHIPPED',
      isCompleted: !!order.shippedAt,
    },
    {
      label: 'Dostarczone',
      date: order.deliveredAt,
      isActive: order.status === 'DELIVERED',
      isCompleted: !!order.deliveredAt,
    },
  ]

  return steps
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CustomerOrderDetailPage({ params }: PageProps) {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  const { id } = await params

  const order = await prisma.order.findFirst({
    where: {
      id,
      customerId: session.customerId,
    },
    include: { items: true },
  })

  if (!order) notFound()

  const timelineSteps = getTimelineSteps(order)
  const trackingUrl = order.trackingNumber
    ? getTrackingUrl(order.carrierName, order.trackingNumber)
    : null

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/panel" className="hover:text-gray-900">Panel</Link>
        <span>/</span>
        <Link href="/panel/zamowienia" className="hover:text-gray-900">Zamówienia</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{order.orderNumber}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <Link href="/panel/zamowienia" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          Zamówienie {order.orderNumber}
        </h1>
        <span className={clsx('px-3 py-1 rounded-full text-sm font-medium', statusColors[order.status])}>
          {statusLabels[order.status]}
        </span>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Status zamówienia</h2>
        <div className="flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200" style={{ left: '2rem', right: '2rem' }} />
          <div
            className="absolute top-4 left-0 h-0.5 bg-blue-500 transition-all"
            style={{
              left: '2rem',
              width: `${Math.max(0, (timelineSteps.filter(s => s.isCompleted).length - 1) / (timelineSteps.length - 1) * 100)}%`,
              maxWidth: 'calc(100% - 4rem)',
            }}
          />

          {timelineSteps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center z-10" style={{ width: `${100 / timelineSteps.length}%` }}>
              <div
                className={clsx(
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2',
                  step.isCompleted
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : step.isActive
                      ? 'bg-white border-blue-500 text-blue-500'
                      : 'bg-white border-gray-300 text-gray-400'
                )}
              >
                {step.isCompleted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={clsx(
                'mt-2 text-xs font-medium',
                step.isCompleted || step.isActive ? 'text-gray-900' : 'text-gray-400'
              )}>
                {step.label}
              </span>
              {step.date && (
                <span className="text-xs text-gray-400 mt-0.5">
                  {step.date.toLocaleDateString('pl-PL')}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tracking */}
          {order.trackingNumber && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Przesyłka</h2>
              <div className="space-y-2 text-sm">
                {order.carrierName && (
                  <div>
                    <span className="text-gray-500">Kurier: </span>
                    <span className="font-medium text-gray-900">{order.carrierName}</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-500">Nr przesyłki: </span>
                  {trackingUrl ? (
                    <a
                      href={trackingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-blue-600 hover:underline"
                    >
                      {order.trackingNumber}
                      <svg className="w-3.5 h-3.5 inline ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <span className="font-mono text-gray-900">{order.trackingNumber}</span>
                  )}
                </div>
                {order.shippedAt && (
                  <div>
                    <span className="text-gray-500">Data wysyłki: </span>
                    <span className="text-gray-900">{order.shippedAt.toLocaleDateString('pl-PL')}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Items table */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Pozycje zamówienia</h2>

            {/* Desktop table */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">Produkt</th>
                    <th className="pb-3 text-center text-xs font-medium text-gray-500 uppercase">Ilość</th>
                    <th className="pb-3 text-right text-xs font-medium text-gray-500 uppercase">Cena netto</th>
                    <th className="pb-3 text-right text-xs font-medium text-gray-500 uppercase">Razem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3">
                        <Link
                          href={`/produkt/${item.productSlug}`}
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {item.productName}
                        </Link>
                        <div className="text-xs text-gray-500">PN: {item.partNumber}</div>
                      </td>
                      <td className="py-3 text-center text-sm">{item.quantity}</td>
                      <td className="py-3 text-right text-sm tabular-nums">
                        {formatPLN(item.priceNetto)}
                      </td>
                      <td className="py-3 text-right text-sm font-medium tabular-nums">
                        {formatPLN(item.totalNetto)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="p-3 border border-gray-100 rounded-lg">
                  <Link
                    href={`/produkt/${item.productSlug}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {item.productName}
                  </Link>
                  <div className="text-xs text-gray-500 mb-2">PN: {item.partNumber}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{item.quantity} szt. x {formatPLN(item.priceNetto)}</span>
                    <span className="font-medium tabular-nums">{formatPLN(item.totalNetto)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-1 text-sm text-right">
              <div className="flex justify-end gap-8">
                <span className="text-gray-500">Netto:</span>
                <span className="tabular-nums w-28">{formatPLN(order.subtotalNetto)}</span>
              </div>
              {order.shippingNetto > 0 && (
                <div className="flex justify-end gap-8">
                  <span className="text-gray-500">Dostawa:</span>
                  <span className="tabular-nums w-28">{formatPLN(order.shippingNetto)}</span>
                </div>
              )}
              <div className="flex justify-end gap-8">
                <span className="text-gray-500">VAT 23%:</span>
                <span className="tabular-nums w-28">{formatPLN(order.vatAmount)}</span>
              </div>
              <div className="flex justify-end gap-8 text-lg font-bold pt-2">
                <span>Brutto:</span>
                <span className="tabular-nums w-28">{formatPLN(order.totalBrutto)}</span>
              </div>
            </div>
          </div>

          {/* Customer notes */}
          {order.customerNotes && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Notatki do zamówienia</h2>
              <p className="text-sm text-gray-700 bg-yellow-50 p-4 rounded-lg">
                {order.customerNotes}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Dates */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Daty</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div>
                  <span className="text-gray-500">Złożone: </span>
                  <span className="text-gray-900">{order.createdAt.toLocaleString('pl-PL')}</span>
                </div>
              </div>
              {order.paidAt && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-gray-500">Opłacone: </span>
                    <span className="text-gray-900">{order.paidAt.toLocaleString('pl-PL')}</span>
                  </div>
                </div>
              )}
              {order.shippedAt && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H6.375c-.621 0-1.125-.504-1.125-1.125v0c0-.621.504-1.125 1.125-1.125H20.25M2.25 14.25h1.875c.621 0 1.125.504 1.125 1.125v0c0 .621-.504 1.125-1.125 1.125H2.25m0 0V9a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v5.25m-13.5 0h13.5M12.75 6.75h3.75a2.25 2.25 0 012.25 2.25v.75" />
                  </svg>
                  <div>
                    <span className="text-gray-500">Wysłane: </span>
                    <span className="text-gray-900">{order.shippedAt.toLocaleString('pl-PL')}</span>
                  </div>
                </div>
              )}
              {order.deliveredAt && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <div>
                    <span className="text-gray-500">Dostarczone: </span>
                    <span className="text-gray-900">{order.deliveredAt.toLocaleString('pl-PL')}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Payment info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Płatność</h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">Metoda: </span>
                <span className="text-gray-900">{order.paymentMethod === 'ONLINE' ? 'Płatność online (Stripe)' : 'Przelew (proforma)'}</span>
              </div>
              {order.proformaUrl && (
                <div>
                  <a
                    href={order.proformaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Pobierz proformę
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Akcje</h2>
            <div className="space-y-2">
              <Link
                href="/panel/zamowienia"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
                Zamów ponownie
              </Link>
              <button
                disabled
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                title="Wkrótce dostępne"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Pobierz fakturę
                <span className="text-xs bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded">Wkrótce</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
