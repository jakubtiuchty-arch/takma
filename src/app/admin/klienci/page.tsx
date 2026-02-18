import { prisma } from '@/lib/db'
import Link from 'next/link'

interface PageProps {
  searchParams: Promise<{ szukaj?: string }>
}

export default async function CustomersPage({ searchParams }: PageProps) {
  const params = await searchParams
  const search = params.szukaj

  const customers = await prisma.customer.findMany({
    where: search
      ? {
          OR: [
            { company: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { nip: { contains: search } },
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
          ],
        }
      : undefined,
    include: {
      orders: { select: { totalBrutto: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Klienci</h1>

      <form className="flex gap-3 mb-6">
        <input
          name="szukaj"
          type="text"
          defaultValue={search || ''}
          placeholder="Szukaj (firma, email, NIP)..."
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-80"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Szukaj
        </button>
        {search && (
          <Link href="/admin/klienci" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
            Wyczyść
          </Link>
        )}
      </form>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Firma</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kontakt</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">NIP</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Zamówienia</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Obrót brutto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                    Brak klientów
                  </td>
                </tr>
              ) : (
                customers.map((customer) => {
                  const totalRevenue = customer.orders.reduce((sum, o) => sum + o.totalBrutto, 0) / 100
                  return (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <Link href={`/admin/klienci/${customer.id}`} className="text-sm font-medium text-blue-600 hover:underline">
                          {customer.company}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {customer.firstName} {customer.lastName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{customer.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 font-mono">{customer.nip || '—'}</td>
                      <td className="px-4 py-3 text-center text-sm">{customer.orders.length}</td>
                      <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                        {totalRevenue.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
