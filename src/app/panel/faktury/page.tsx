import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'

function formatPLN(amountInGrosze: number): string {
  return (amountInGrosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 }) + ' zł'
}

export default async function CustomerInvoicesPage() {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  const invoices = await prisma.invoice.findMany({
    where: { customerId: session.customerId },
    include: { order: { select: { orderNumber: true } } },
    orderBy: { issueDate: 'desc' },
  })

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Faktury</h1>

      {invoices.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-3">📄</div>
          <p className="text-gray-500 mb-1">Brak faktur</p>
          <p className="text-sm text-gray-400">Faktury pojawią się tutaj po ich wystawieniu w systemie KSeF.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {invoices.map(inv => (
            <div key={inv.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">{inv.invoiceNumber}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Zamówienie {inv.order.orderNumber} · {inv.issueDate.toLocaleDateString('pl-PL')}
                </p>
                {inv.ksefNumber && (
                  <p className="text-[10px] text-gray-400 mt-0.5 font-mono truncate">KSeF: {inv.ksefNumber}</p>
                )}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <p className="text-sm font-bold text-gray-900 tabular-nums">{formatPLN(inv.totalBrutto)}</p>
                <a
                  href={`/api/panel/invoices/${inv.id}/pdf`}
                  target="_blank"
                  className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Pobierz PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
