import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
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

interface PageProps {
  searchParams: Promise<{ status?: string }>
}

export default async function CustomerOrdersPage({ searchParams }: PageProps) {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  const params = await searchParams
  const statusFilter = params.status as OrderStatus | undefined

  const orders = await prisma.order.findMany({
    where: {
      customerId: session.customerId,
      ...(statusFilter && { status: statusFilter }),
    },
    include: { items: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-900">Moje zamówienia</h1>
      </div>

      {/* Filtr statusu */}
      <form className="flex flex-wrap gap-2 mb-4">
        <select
          name="status"
          defaultValue={statusFilter || ''}
          className="px-2.5 py-1.5 border border-gray-300 rounded-md text-[13px] bg-white"
        >
          <option value="">Wszystkie statusy</option>
          {Object.entries(statusLabels).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
        <button
          type="submit"
          className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[13px] font-medium hover:bg-blue-700"
        >
          Filtruj
        </button>
        {statusFilter && (
          <Link href="/panel/zamowienia" className="px-3 py-1.5 text-[13px] text-gray-600 hover:text-gray-900">
            Wyczyść
          </Link>
        )}
      </form>

      {orders.length === 0 ? (
        /* Empty state */
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <svg className="w-10 h-10 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h2 className="text-sm font-semibold text-gray-900 mb-1">
            Nie masz jeszcze żadnych zamówień
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            Twoje zamówienia pojawią się tutaj po złożeniu pierwszego zakupu.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md text-[13px] font-medium hover:bg-blue-700 transition-colors"
          >
            Przejdź do sklepu
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
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nr zamówienia</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                    <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Pozycje</th>
                    <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Kwota brutto</th>
                    <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Akcja</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-3 py-2.5">
                        <Link
                          href={`/panel/zamowienia/${order.id}`}
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {order.orderNumber}
                        </Link>
                      </td>
                      <td className="px-3 py-2.5 text-sm text-gray-600">
                        {order.createdAt.toLocaleDateString('pl-PL')}
                      </td>
                      <td className="px-3 py-2.5 text-sm text-center text-gray-600">
                        {order.items.length}
                      </td>
                      <td className="px-3 py-2.5 text-sm text-right font-medium tabular-nums">
                        {formatPLN(order.totalBrutto)}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className={clsx('inline-flex px-2 py-1 rounded-full text-xs font-medium', statusColors[order.status])}>
                          {statusLabels[order.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <Link
                          href={`/panel/zamowienia/${order.id}`}
                          className="text-sm text-blue-600 hover:underline font-medium"
                        >
                          Szczegóły
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {orders.map((order) => (
              <Link
                key={order.id}
                href={`/panel/zamowienia/${order.id}`}
                className="block bg-white rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{order.orderNumber}</span>
                  <span className={clsx('inline-flex px-2 py-0.5 rounded-full text-xs font-medium', statusColors[order.status])}>
                    {statusLabels[order.status]}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-500">{order.createdAt.toLocaleDateString('pl-PL')}</span>
                  <span className="font-medium tabular-nums">{formatPLN(order.totalBrutto)}</span>
                </div>
                <div className="text-xs text-gray-400">
                  {order.items.length} {order.items.length === 1 ? 'pozycja' : order.items.length < 5 ? 'pozycje' : 'pozycji'}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
