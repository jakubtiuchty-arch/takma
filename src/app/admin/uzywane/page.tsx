import Link from 'next/link'
import { prisma } from '@/lib/db'
import { KATEGORIE, stanOpis } from '@/lib/used-devices'
import UsedDeviceRowActions from './UsedDeviceRowActions'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const fmtPLN = (grosze: number) =>
  (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 0, maximumFractionDigits: 2 })

const STATUS: Record<string, { tekst: string; klasa: string }> = {
  AVAILABLE: { tekst: 'W ofercie', klasa: 'text-green-700 bg-green-50 border-green-200' },
  RESERVED: { tekst: 'Zarezerwowany', klasa: 'text-amber-700 bg-amber-50 border-amber-200' },
  SOLD: { tekst: 'Sprzedany', klasa: 'text-gray-500 bg-gray-50 border-gray-200' },
}

export default async function UzywanePage() {
  const sztuki = await prisma.usedDevice.findMany({ orderBy: [{ status: 'asc' }, { createdAt: 'desc' }] })
  const wOfercie = sztuki.filter(s => s.status === 'AVAILABLE')
  const wartosc = wOfercie.reduce((s, x) => s + x.priceNetto, 0)

  return (
    <div className="max-w-5xl">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Urządzenia używane</h1>
          <p className="text-sm text-gray-500">
            Każdy wiersz to jedna sztuka. Sprzedana znika z /uzywane sama, po numerze zamówienia.
          </p>
        </div>
        <Link
          href="/admin/uzywane/nowe"
          className="shrink-0 px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Dodaj egzemplarz
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {[
          { label: 'W ofercie', value: String(wOfercie.length) },
          { label: 'Wartość netto oferty', value: `${fmtPLN(wartosc)} zł` },
          { label: 'Sprzedane', value: String(sztuki.filter(s => s.status === 'SOLD').length) },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-gray-200 px-4 py-3">
            <p className="text-2xl font-bold text-gray-900 tabular-nums">{k.value}</p>
            <p className="text-sm text-gray-500">{k.label}</p>
          </div>
        ))}
      </div>

      {sztuki.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-400">
          Jeszcze pusto — dodaj pierwszy egzemplarz, a pojawi się na /uzywane.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left font-medium px-4 py-2.5">Egzemplarz</th>
                <th className="text-left font-medium px-4 py-2.5">Stan</th>
                <th className="text-right font-medium px-4 py-2.5">Cena</th>
                <th className="text-left font-medium px-4 py-2.5">Dostępność</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sztuki.map(s => {
                const st = STATUS[s.status] ?? STATUS.AVAILABLE
                return (
                  <tr key={s.id} className="align-top">
                    <td className="px-4 py-3">
                      <div className="flex items-start gap-3">
                        {s.images[0] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={s.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200" />
                        )}
                        <div>
                          <Link href={`/admin/uzywane/${s.id}`} className="font-medium text-gray-900 hover:text-primary-600">
                            {s.name}
                          </Link>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {KATEGORIE[s.category as keyof typeof KATEGORIE] ?? s.category}
                            {s.serialNumber && <> · s/n {s.serialNumber}</>}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{stanOpis(s.conditionGrade).etykieta}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap tabular-nums text-gray-900">
                      {fmtPLN(s.priceNetto)} zł
                      {s.newPriceNetto && (
                        <span className="block text-xs text-gray-400">nowy {fmtPLN(s.newPriceNetto)} zł</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${st.klasa}`}>
                        {st.tekst}
                      </span>
                      {s.orderNumber && <p className="text-xs text-gray-400 mt-1">{s.orderNumber}</p>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <UsedDeviceRowActions id={s.id} slug={s.slug} status={s.status} />
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
