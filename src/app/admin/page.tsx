import { prisma } from '@/lib/db'
import Link from 'next/link'

async function getStats() {
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const quarterAgo = new Date(now.getTime() - 91 * 24 * 60 * 60 * 1000)
  const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)

  const revenueSince = (gte: Date) =>
    prisma.order.aggregate({ _sum: { totalBrutto: true }, where: { createdAt: { gte } } })

  const [ordersToday, revWeek, revMonth, revQuarter, revYear, pendingOrders, activeQuotes, totalCustomers] =
    await Promise.all([
      prisma.order.count({ where: { createdAt: { gte: todayStart } } }),
      revenueSince(weekAgo),
      revenueSince(monthAgo),
      revenueSince(quarterAgo),
      revenueSince(yearAgo),
      prisma.order.count({
        where: { status: { in: ['PENDING_PAYMENT', 'AWAITING_PAYMENT', 'PROCESSING'] } },
      }),
      prisma.quote.count({ where: { status: { in: ['DRAFT', 'SENT'] } } }),
      prisma.customer.count(),
    ])

  const zl = (sum: { _sum: { totalBrutto: number | null } }) => (sum._sum.totalBrutto ?? 0) / 100

  return {
    ordersToday,
    weekRevenue: zl(revWeek),
    monthRevenue: zl(revMonth),
    quarterRevenue: zl(revQuarter),
    yearRevenue: zl(revYear),
    pendingOrders,
    activeQuotes,
    totalCustomers,
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    {
      label: 'Zamówienia dziś',
      value: stats.ordersToday.toString(),
      color: 'bg-blue-50 text-blue-700',
      iconColor: 'text-blue-500',
      href: '/admin/zamowienia',
    },
    {
      label: 'Obrót (7 dni)',
      value: `${stats.weekRevenue.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł`,
      color: 'bg-green-50 text-green-700',
      iconColor: 'text-green-500',
      href: '/admin/zamowienia',
    },
    {
      label: 'Obrót (30 dni)',
      value: `${stats.monthRevenue.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł`,
      color: 'bg-green-50 text-green-700',
      iconColor: 'text-green-500',
      href: '/admin/zamowienia',
    },
    {
      label: 'Obrót (3 miesiące)',
      value: `${stats.quarterRevenue.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł`,
      color: 'bg-green-50 text-green-700',
      iconColor: 'text-green-500',
      href: '/admin/zamowienia',
    },
    {
      label: 'Obrót (12 miesięcy)',
      value: `${stats.yearRevenue.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł`,
      color: 'bg-green-50 text-green-700',
      iconColor: 'text-green-500',
      href: '/admin/zamowienia',
    },
    {
      label: 'Oczekujące zamówienia',
      value: stats.pendingOrders.toString(),
      color: 'bg-amber-50 text-amber-700',
      iconColor: 'text-amber-500',
      href: '/admin/zamowienia',
    },
    {
      label: 'Aktywne oferty',
      value: stats.activeQuotes.toString(),
      color: 'bg-purple-50 text-purple-700',
      iconColor: 'text-purple-500',
      href: '/admin/oferty',
    },
    {
      label: 'Klienci',
      value: stats.totalCustomers.toString(),
      color: 'bg-slate-50 text-slate-700',
      iconColor: 'text-slate-500',
      href: '/admin/klienci',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-gray-500 mb-1">{card.label}</p>
            <p className={`text-2xl font-bold ${card.color.split(' ')[1]}`}>{card.value}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Szybkie akcje</h2>
          </div>
          <div className="space-y-2">
            <Link
              href="/admin/oferty/nowa"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Nowa oferta
            </Link>
            <Link
              href="/admin/zamowienia"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Zamówienia
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
