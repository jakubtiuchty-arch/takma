import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { OrderStatus } from '@/generated/prisma/client'
import OrderStatusForm from './OrderStatusForm'
import OrderTrackingForm from './OrderTrackingForm'
import OrderNotesForm from './OrderNotesForm'

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

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = await params
  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true, customer: true },
  })

  if (!order) notFound()

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/zamowienia" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Zamówienie {order.orderNumber}</h1>
        <span className={clsx('px-2.5 py-1 rounded-full text-xs font-medium', statusColors[order.status])}>
          {statusLabels[order.status]}
        </span>
        <a
          href={`/api/admin/orders/${order.id}/print`}
          target="_blank"
          className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 7.159H5.25" />
          </svg>
          Drukuj PDF
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Pozycje zamówienia</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-2 text-left text-xs font-medium text-gray-500 uppercase">Produkt</th>
                  <th className="pb-2 text-center text-xs font-medium text-gray-500 uppercase">Ilość</th>
                  <th className="pb-2 text-right text-xs font-medium text-gray-500 uppercase">Cena netto</th>
                  <th className="pb-2 text-right text-xs font-medium text-gray-500 uppercase">Razem netto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3">
                      <div className="text-sm font-medium text-gray-900">{item.productName}</div>
                      <div className="text-xs text-gray-500">PN: {item.partNumber}</div>
                    </td>
                    <td className="py-3 text-center text-sm">{item.quantity}</td>
                    <td className="py-3 text-right text-sm tabular-nums">
                      {(item.priceNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </td>
                    <td className="py-3 text-right text-sm font-medium tabular-nums">
                      {(item.totalNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 pt-4 border-t border-gray-200 space-y-1 text-sm text-right">
              <div className="flex justify-end gap-8">
                <span className="text-gray-500">Netto:</span>
                <span className="tabular-nums">{(order.subtotalNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</span>
              </div>
              {order.shippingNetto > 0 && (
                <div className="flex justify-end gap-8">
                  <span className="text-gray-500">Dostawa:</span>
                  <span className="tabular-nums">{(order.shippingNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</span>
                </div>
              )}
              <div className="flex justify-end gap-8">
                <span className="text-gray-500">VAT 23%:</span>
                <span className="tabular-nums">{(order.vatAmount / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</span>
              </div>
              <div className="flex justify-end gap-8 text-lg font-bold">
                <span>Brutto:</span>
                <span className="tabular-nums">{(order.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</span>
              </div>
            </div>
          </div>

          {/* Tracking */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Przesyłka</h2>
            {order.trackingNumber ? (
              <div className="space-y-2 text-sm">
                <div><span className="text-gray-500">Kurier:</span> {order.carrierName}</div>
                <div><span className="text-gray-500">Nr przesyłki:</span> <span className="font-mono">{order.trackingNumber}</span></div>
                {order.shippedAt && <div><span className="text-gray-500">Data wysyłki:</span> {order.shippedAt.toLocaleDateString('pl-PL')}</div>}
              </div>
            ) : (
              <OrderTrackingForm orderId={order.id} />
            )}
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Notatki</h2>
            {order.customerNotes && (
              <div className="mb-4 p-3 bg-yellow-50 rounded-lg text-sm">
                <span className="font-medium text-yellow-800">Uwagi klienta:</span>
                <p className="mt-1 text-yellow-700">{order.customerNotes}</p>
              </div>
            )}
            <OrderNotesForm orderId={order.id} currentNotes={order.adminNotes || ''} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Zmień status</h2>
            <OrderStatusForm orderId={order.id} currentStatus={order.status} />
          </div>

          {/* Customer */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Klient</h2>
            <div className="space-y-2 text-sm">
              <div className="font-medium text-gray-900">{order.customer.company}</div>
              <div className="text-gray-600">{order.customer.firstName}{order.customer.lastName ? ` ${order.customer.lastName}` : ''}</div>
              <div className="text-gray-600">{order.customer.email}</div>
              {order.customer.phone && <div className="text-gray-600">{order.customer.phone}</div>}
              {order.customer.nip && <div className="text-gray-500">NIP: {order.customer.nip}</div>}
              {order.customer.address && order.customer.address.split(',').map((part, i) => (
                <div key={i} className="text-gray-500">{part.trim()}</div>
              ))}
              <Link href={`/admin/klienci/${order.customer.id}`} className="text-blue-600 hover:underline text-xs font-medium inline-block mt-2">
                Karta klienta →
              </Link>
            </div>
          </div>

          {/* Dates */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Daty</h2>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-500">Utworzono:</span> {order.createdAt.toLocaleString('pl-PL')}</div>
              {order.paidAt && <div><span className="text-gray-500">Opłacono:</span> {order.paidAt.toLocaleString('pl-PL')}</div>}
              {order.shippedAt && <div><span className="text-gray-500">Wysłano:</span> {order.shippedAt.toLocaleString('pl-PL')}</div>}
              {order.deliveredAt && <div><span className="text-gray-500">Dostarczono:</span> {order.deliveredAt.toLocaleString('pl-PL')}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
