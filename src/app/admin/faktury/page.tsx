import { prisma } from '@/lib/db'
import Link from 'next/link'
import clsx from 'clsx'

export default async function InvoicesPage() {
  // Show proforma invoices from orders with PROFORMA payment method
  const proformaOrders = await prisma.order.findMany({
    where: { paymentMethod: 'PROFORMA' },
    include: { customer: true },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Faktury</h1>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <h2 className="text-sm font-medium text-gray-700">Faktury pro forma</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nr zamówienia</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Klient</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Kwota brutto</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Proforma</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {proformaOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                    Brak faktur pro forma
                  </td>
                </tr>
              ) : (
                proformaOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/admin/zamowienia/${order.id}`} className="text-sm font-medium text-blue-600 hover:underline">
                        {order.orderNumber}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {order.createdAt.toLocaleDateString('pl-PL')}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">{order.customer.company}</div>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                      {(order.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={clsx(
                        'inline-flex px-2 py-1 rounded-full text-xs font-medium',
                        order.paidAt ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      )}>
                        {order.paidAt ? 'Opłacona' : 'Oczekuje'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {order.proformaSentAt ? (
                        <span className="text-xs text-green-600">Wysłana {order.proformaSentAt.toLocaleDateString('pl-PL')}</span>
                      ) : (
                        <span className="text-xs text-gray-400">Nie wysłana</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Uwaga:</strong> Generator faktur VAT wymaga integracji z KSeF (Krajowy System e-Faktur).
          Na ten moment system obsługuje tylko faktury pro forma generowane przy zamówieniach.
        </p>
      </div>
    </div>
  )
}
