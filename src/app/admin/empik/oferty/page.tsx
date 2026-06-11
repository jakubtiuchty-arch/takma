import Link from 'next/link'
import { empikListOffers } from '@/lib/empik/client'
import { PACK_SIZE_BY_SKU } from '@/lib/empik/offers'

export const dynamic = 'force-dynamic'

function money(n?: number): string {
  if (n === undefined || n === null) return '—'
  return `${n.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł`
}

export default async function EmpikOfertyPage() {
  const { offers, total } = await empikListOffers(100)
  const sorted = [...offers].sort((a, b) => (a.product_title || '').localeCompare(b.product_title || '', 'pl'))

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Oferty na Empiku</h1>
        <Link href="/admin/empik" className="text-sm text-blue-600 hover:underline">
          ← Empik
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4 mb-5">
        <p className="text-sm text-gray-500">
          Łącznie: {total}. Synchronizacja cronem 7:15 i 14:15 (ceny ×1,08 ×VAT, stany min 30).
        </p>
        <form action="/admin/empik/oferty/sync" method="post">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Synchronizuj teraz
          </button>
        </form>
      </div>

      {sorted.length === 0 ? (
        <p className="text-sm text-gray-500">Brak ofert.</p>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 font-medium">Produkt (karta Empika)</th>
                <th className="px-4 py-2 font-medium">SKU</th>
                <th className="px-4 py-2 font-medium">Pack</th>
                <th className="px-4 py-2 font-medium text-right">Cena</th>
                <th className="px-4 py-2 font-medium text-right">Stan</th>
                <th className="px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((o) => (
                <tr key={o.offer_id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-800">{o.product_title || '—'}</td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">{o.shop_sku}</td>
                  <td className="px-4 py-2 text-gray-500">{PACK_SIZE_BY_SKU[o.shop_sku] ? `×${PACK_SIZE_BY_SKU[o.shop_sku]}` : '—'}</td>
                  <td className="px-4 py-2 text-right text-gray-900">{money(o.price)}</td>
                  <td className="px-4 py-2 text-right text-gray-700">{o.quantity}</td>
                  <td className="px-4 py-2">
                    {o.active ? (
                      <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700">
                        aktywna
                      </span>
                    ) : (
                      <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-200 text-gray-600">
                        nieaktywna
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
