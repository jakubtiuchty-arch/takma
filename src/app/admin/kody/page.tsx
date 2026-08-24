import { prisma } from '@/lib/db'
import RevokeButton from './RevokeButton'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const fmtDate = (d: Date) =>
  d.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })

const fmtPLN = (grosze: number) =>
  (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 0, maximumFractionDigits: 2 })

/**
 * Kody rabatowe wystawione automatycznie po zgłoszeniach z kart produktów.
 * Każdy kod to zobowiązanie: klient może nim zamówić w cenie promocyjnej, więc
 * do każdego trzeba załatwić voucher u Zebry albo kod wycofać.
 */
export default async function KodyPage() {
  const kody = await prisma.promoCode.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })
  const teraz = new Date()

  const doZalatwienia = kody.filter(k => !k.usedAt && !k.revoked && k.expiresAt > teraz)
  const wykorzystane = kody.filter(k => k.usedAt)

  const status = (k: (typeof kody)[number]) => {
    if (k.usedAt) return { tekst: `Wykorzystany · ${k.orderNumber ?? 'zamówienie'}`, klasa: 'text-green-700 bg-green-50 border-green-200' }
    if (k.revoked) return { tekst: 'Wycofany', klasa: 'text-gray-500 bg-gray-50 border-gray-200' }
    if (k.expiresAt < teraz) return { tekst: 'Wygasł', klasa: 'text-gray-500 bg-gray-50 border-gray-200' }
    return { tekst: `Aktywny do ${k.expiresAt.toLocaleDateString('pl-PL')}`, klasa: 'text-blue-700 bg-blue-50 border-blue-200' }
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Kody rabatowe</h1>
      <p className="text-sm text-gray-500 mb-6">
        Wystawiane automatycznie po zgłoszeniu z karty produktu objętego promocją. Do każdego
        aktywnego kodu trzeba zamówić voucher u Zebry — albo wycofać kod, zanim klient go użyje.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Czekają na voucher', value: doZalatwienia.length },
          { label: 'Wykorzystane', value: wykorzystane.length },
          { label: 'Wystawione łącznie', value: kody.length },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-gray-200 px-4 py-3">
            <p className="text-2xl font-bold text-gray-900 tabular-nums">{k.value}</p>
            <p className="text-sm text-gray-500">{k.label}</p>
          </div>
        ))}
      </div>

      {kody.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-400">
          Jeszcze żaden kod nie został wystawiony.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left font-medium px-4 py-2.5">Kod</th>
                <th className="text-left font-medium px-4 py-2.5">Klient</th>
                <th className="text-left font-medium px-4 py-2.5">Produkt</th>
                <th className="text-right font-medium px-4 py-2.5">Cena</th>
                <th className="text-left font-medium px-4 py-2.5">Status</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {kody.map(k => {
                const s = status(k)
                const aktywny = !k.usedAt && !k.revoked && k.expiresAt > teraz
                return (
                  <tr key={k.id} className="align-top">
                    <td className="px-4 py-3">
                      <p className="font-mono font-semibold text-gray-900">{k.code}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{fmtDate(k.createdAt)}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-gray-900">{k.name}</p>
                      <a href={`mailto:${k.email}`} className="text-xs text-blue-600 hover:underline">{k.email}</a>
                      {k.phone && <p className="text-xs text-gray-500">{k.phone}</p>}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-gray-900">{k.productName || '—'}</p>
                      <p className="text-xs text-gray-400 font-mono">{k.sku}</p>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap tabular-nums text-gray-900">
                      {fmtPLN(k.priceNetto)} zł
                      <span className="block text-xs text-gray-400">do {k.maxQty} szt.</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${s.klasa}`}>
                        {s.tekst}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {aktywny && <RevokeButton code={k.code} />}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
