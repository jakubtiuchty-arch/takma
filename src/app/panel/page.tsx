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

export default async function CustomerDashboard() {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  const customer = await prisma.customer.findUnique({
    where: { id: session.customerId },
    include: {
      orders: {
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: { items: true },
      },
      devices: true,
      quotes: {
        where: { status: 'SENT' },
        select: { id: true },
      },
    },
  })

  if (!customer) redirect('/panel/login')

  const allOrders = await prisma.order.findMany({
    where: { customerId: session.customerId },
    select: { totalBrutto: true },
  })

  const totalOrders = allOrders.length
  const totalValue = allOrders.reduce((sum, o) => sum + o.totalBrutto, 0)
  const devicesCount = customer.devices.length
  const activeQuotes = customer.quotes.length

  const statCards = [
    { label: 'Zamówienia', value: totalOrders.toString(), dot: 'bg-blue-500' },
    { label: 'Łączna wartość', value: formatPLN(totalValue), dot: 'bg-green-500' },
    { label: 'Urządzenia', value: devicesCount.toString(), dot: 'bg-purple-500' },
    { label: 'Aktywne oferty', value: activeQuotes.toString(), dot: 'bg-amber-500' },
  ]

  return (
    <div className="max-w-5xl">
      {/* Powitanie */}
      <div className="mb-5">
        <h1 className="text-lg font-semibold text-gray-900">
          Witaj, {customer.firstName}!
        </h1>
        <p className="text-sm text-gray-500">{customer.company}</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-lg border border-gray-200 px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <span className={clsx('w-1.5 h-1.5 rounded-full', card.dot)} />
              <span className="text-xs text-gray-500">{card.label}</span>
            </div>
            <p className="text-lg font-semibold text-gray-900 tabular-nums">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Ostatnie zamówienia */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-900">Ostatnie zamówienia</h2>
          <Link href="/panel/zamowienia" className="text-sm text-blue-600 hover:underline font-medium">
            Zobacz wszystkie
          </Link>
        </div>

        {customer.orders.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-sm text-gray-500">Nie masz jeszcze żadnych zamówień</p>
            <Link href="/" className="text-xs text-blue-600 hover:underline mt-1.5 inline-block">
              Przejdź do sklepu
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">Nr zamówienia</th>
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                    <th className="pb-3 text-right text-xs font-medium text-gray-500 uppercase">Kwota brutto</th>
                    <th className="pb-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="pb-3 text-right text-xs font-medium text-gray-500 uppercase"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {customer.orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="py-3 text-sm font-medium text-gray-900">
                        {order.orderNumber}
                      </td>
                      <td className="py-3 text-sm text-gray-600">
                        {order.createdAt.toLocaleDateString('pl-PL')}
                      </td>
                      <td className="py-3 text-sm text-right font-medium tabular-nums">
                        {formatPLN(order.totalBrutto)}
                      </td>
                      <td className="py-3 text-center">
                        <span className={clsx('inline-flex px-2 py-1 rounded-full text-xs font-medium', statusColors[order.status])}>
                          {statusLabels[order.status]}
                        </span>
                      </td>
                      <td className="py-3 text-right">
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

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {customer.orders.map((order) => (
                <Link
                  key={order.id}
                  href={`/panel/zamowienia/${order.id}`}
                  className="block p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{order.orderNumber}</span>
                    <span className={clsx('inline-flex px-2 py-0.5 rounded-full text-xs font-medium', statusColors[order.status])}>
                      {statusLabels[order.status]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{order.createdAt.toLocaleDateString('pl-PL')}</span>
                    <span className="font-medium tabular-nums">{formatPLN(order.totalBrutto)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Szybkie akcje */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-3">Szybkie akcje</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Link
            href="/kontakt"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium text-[13px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Nowe zapytanie ofertowe
          </Link>
          <Link
            href="/panel/urzadzenia"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors font-medium text-[13px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Dodaj urządzenie
          </Link>
          <Link
            href="/panel/zamowienia"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-[13px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            Zamów ponownie
          </Link>
        </div>
      </div>
    </div>
  )
}
