import { prisma } from '@/lib/db'
import Link from 'next/link'
import clsx from 'clsx'
import { InvoiceStatus } from '@/generated/prisma/client'
import InvoiceActions, { SyncKsefButton } from './InvoiceActions'

const statusLabels: Record<InvoiceStatus, string> = {
  DRAFT: 'Szkic',
  PENDING: 'Oczekuje',
  SENT: 'Wysłana',
  ACCEPTED: 'Zaakceptowana',
  REJECTED: 'Odrzucona',
  ERROR: 'Błąd',
}

const statusColors: Record<InvoiceStatus, string> = {
  DRAFT: 'bg-gray-100 text-gray-600',
  PENDING: 'bg-yellow-100 text-yellow-700',
  SENT: 'bg-blue-100 text-blue-700',
  ACCEPTED: 'bg-green-100 text-green-700',
  REJECTED: 'bg-red-100 text-red-700',
  ERROR: 'bg-red-100 text-red-700',
}

interface PageProps {
  searchParams: Promise<{ page?: string; status?: string }>
}

export default async function InvoicesPage({ searchParams }: PageProps) {
  const params = await searchParams
  const page = parseInt(params.page || '1')
  const statusFilter = params.status as InvoiceStatus | undefined
  const perPage = 20

  const where = statusFilter ? { ksefStatus: statusFilter } : {}

  const [invoices, total, statusCounts] = await Promise.all([
    prisma.invoice.findMany({
      where,
      include: {
        order: { select: { orderNumber: true, status: true } },
        customer: { select: { company: true, email: true, nip: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.invoice.count({ where }),
    prisma.invoice.groupBy({
      by: ['ksefStatus'],
      _count: true,
    }),
  ])

  const totalPages = Math.ceil(total / perPage)
  const totalAll = statusCounts.reduce((sum, s) => sum + s._count, 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Faktury</h1>
          <p className="text-sm text-gray-500 mt-0.5">{totalAll} faktur z KSeF</p>
        </div>
        <SyncKsefButton />
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-6">
        <Link
          href="/admin/faktury"
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
            !statusFilter ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          Wszystkie ({totalAll})
        </Link>
        {statusCounts.map(s => (
          <Link
            key={s.ksefStatus}
            href={`/admin/faktury?status=${s.ksefStatus}`}
            className={clsx(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
              statusFilter === s.ksefStatus ? 'bg-gray-900 text-white' : clsx(statusColors[s.ksefStatus], 'hover:opacity-80')
            )}
          >
            {statusLabels[s.ksefStatus]} ({s._count})
          </Link>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nr faktury</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zamówienie</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nabywca</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Brutto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">KSeF</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Akcje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoices.map(inv => (
              <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <Link href={`/admin/faktury/${inv.id}`} className="text-sm font-medium text-blue-600 hover:underline">
                    {inv.invoiceNumber}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={`/admin/zamowienia/${inv.orderId}`} className="text-sm text-gray-600 hover:text-blue-600">
                    {inv.order.orderNumber}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm text-gray-900">{inv.buyerName}</div>
                  {inv.buyerNip && <div className="text-xs text-gray-400">NIP: {inv.buyerNip}</div>}
                </td>
                <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                  {(inv.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {inv.issueDate.toLocaleDateString('pl-PL')}
                </td>
                <td className="px-4 py-3">
                  <span className={clsx('inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold', statusColors[inv.ksefStatus])}>
                    {statusLabels[inv.ksefStatus]}
                  </span>
                  {inv.ksefNumber && (
                    <div className="text-[10px] text-gray-400 mt-0.5 font-mono truncate max-w-[120px]">{inv.ksefNumber}</div>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <InvoiceActions invoiceId={inv.id} status={inv.ksefStatus} />
                </td>
              </tr>
            ))}
            {invoices.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-gray-400">
                  Brak faktur. Faktury tworzone są automatycznie lub ręcznie z poziomu zamówienia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {page > 1 && (
            <Link href={`/admin/faktury?page=${page - 1}${statusFilter ? `&status=${statusFilter}` : ''}`} className="px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50">←</Link>
          )}
          <span className="text-sm text-gray-500">{page} / {totalPages}</span>
          {page < totalPages && (
            <Link href={`/admin/faktury?page=${page + 1}${statusFilter ? `&status=${statusFilter}` : ''}`} className="px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50">→</Link>
          )}
        </div>
      )}
    </div>
  )
}
