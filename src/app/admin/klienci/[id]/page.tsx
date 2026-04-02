import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
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

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CustomerDetailPage({ params }: PageProps) {
  const { id } = await params
  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      orders: {
        include: { items: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!customer) notFound()

  const totalRevenue = customer.orders.reduce((sum, o) => sum + o.totalBrutto, 0) / 100

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/klienci" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{customer.company}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer info */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Dane klienta</h2>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-gray-500">Firma</dt>
              <dd className="font-medium">{customer.company}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Kontakt</dt>
              <dd>{customer.firstName}{customer.lastName ? ` ${customer.lastName}` : ''}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Email</dt>
              <dd><a href={`mailto:${customer.email}`} className="text-blue-600 hover:underline">{customer.email}</a></dd>
            </div>
            {customer.phone && (
              <div>
                <dt className="text-gray-500">Telefon</dt>
                <dd>{customer.phone}</dd>
              </div>
            )}
            {customer.nip && (
              <div>
                <dt className="text-gray-500">NIP</dt>
                <dd className="font-mono">{customer.nip}</dd>
              </div>
            )}
            {customer.address && (
              <div>
                <dt className="text-gray-500">Adres</dt>
                <dd>{customer.address}</dd>
              </div>
            )}
          </dl>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Zamówienia:</span>
              <span className="font-medium">{customer.orders.length}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Łączny obrót:</span>
              <span className="font-bold">{totalRevenue.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Klient od:</span>
              <span>{customer.createdAt.toLocaleDateString('pl-PL')}</span>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Historia zamówień</h2>
          {customer.orders.length === 0 ? (
            <p className="text-gray-500 text-sm">Brak zamówień</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 text-left text-xs font-medium text-gray-500 uppercase">Nr</th>
                    <th className="pb-2 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                    <th className="pb-2 text-right text-xs font-medium text-gray-500 uppercase">Kwota brutto</th>
                    <th className="pb-2 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {customer.orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="py-3">
                        <Link href={`/admin/zamowienia/${order.id}`} className="text-sm font-medium text-blue-600 hover:underline">
                          {order.orderNumber}
                        </Link>
                      </td>
                      <td className="py-3 text-sm text-gray-600">
                        {order.createdAt.toLocaleDateString('pl-PL')}
                      </td>
                      <td className="py-3 text-sm text-right font-medium tabular-nums">
                        {(order.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                      </td>
                      <td className="py-3 text-center">
                        <span className={clsx('inline-flex px-2 py-1 rounded-full text-xs font-medium', statusColors[order.status])}>
                          {statusLabels[order.status]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
