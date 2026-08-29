import { prisma } from '@/lib/db'
import { kursEur } from '@/lib/koncesje'
import ImportKoncesji from './ImportKoncesji'
import WierszPozycji from './WierszPozycji'
import UsunKoncesje from './UsunKoncesje'

export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Koncesje cenowe Zebry — ceny specjalne przyznane na konkretną szansę
 * sprzedaży. Panel istnieje po to, żeby przy wystawianiu oferty podpowiedź o
 * tańszym zakupie pojawiała się sama, zamiast czekać w PDF-ie na czyimś dysku.
 */
export default async function KoncesjePage() {
  const teraz = new Date()
  const [koncesje, kurs] = await Promise.all([
    prisma.priceConcession.findMany({
      include: { items: { orderBy: { partNumber: 'asc' } } },
      orderBy: { endDate: 'desc' },
    }),
    kursEur(),
  ])

  const aktywne = koncesje.filter((k) => k.startDate <= teraz && k.endDate >= teraz)
  const wygasle = koncesje.filter((k) => k.endDate < teraz)

  const zl = (grosze: number) => (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const Karta = ({ k, wygasla }: { k: (typeof koncesje)[number]; wygasla: boolean }) => {
    const dni = Math.ceil((k.endDate.getTime() - teraz.getTime()) / 86_400_000)
    return (
      <div className={`rounded-2xl border bg-white overflow-hidden mb-4 ${wygasla ? 'border-gray-200 opacity-70' : 'border-gray-200'}`}>
        <div className="px-5 py-4 border-b border-gray-200 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-gray-900">
              {k.reseller}
              <span className="ml-2 text-sm font-normal text-gray-500">PC {k.requestId}{k.revision ? ` rev. ${k.revision}` : ''}</span>
            </p>
            <p className="text-sm text-gray-500 mt-0.5">
              {k.endUser ? <>klient końcowy: {k.endUser} · </> : null}
              zakup przez {k.distributor || '—'} · waluta {k.currency}
            </p>
            <p className={`text-sm mt-1 ${wygasla ? 'text-gray-400' : dni <= 14 ? 'text-amber-600 font-medium' : 'text-gray-500'}`}>
              {k.startDate.toLocaleDateString('pl-PL')} – {k.endDate.toLocaleDateString('pl-PL')}
              {wygasla ? ' · wygasła' : ` · zostało ${dni} dni`}
            </p>
          </div>
          <UsunKoncesje id={k.id} etykieta={`${k.requestId} (${k.reseller})`} />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left font-medium px-5 py-2">Numer katalogowy</th>
              <th className="text-right font-medium px-3 py-2">Cena specjalna</th>
              <th className="text-right font-medium px-3 py-2">≈ PLN</th>
              <th className="text-right font-medium px-3 py-2">Rabat</th>
              <th className="text-right font-medium px-3 py-2">Limit</th>
              <th className="text-right font-medium px-5 py-2">Wykorzystano</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {k.items.map((i) => (
              <WierszPozycji
                key={i.id}
                id={i.id}
                partNumber={i.partNumber}
                description={i.description}
                cena={`${(i.unitPrice / 100).toFixed(2)} ${k.currency}`}
                cenaPln={`${zl(k.currency === 'PLN' ? i.unitPrice : Math.round(i.unitPrice * kurs))} zł`}
                rabat={i.discountPct != null ? `${i.discountPct.toFixed(1)}%` : '—'}
                maxQty={i.maxQty}
                usedQty={i.usedQty}
                zablokowany={wygasla}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Koncesje cenowe Zebry</h1>
      <p className="text-sm text-gray-500 mb-5">
        Ceny specjalne przyznane na konkretną szansę sprzedaży. Gdy w kreatorze oferty dodasz numer
        objęty aktywną koncesją, zobaczysz podpowiedź z ceną zakupu i pozostałym limitem sztuk.
      </p>

      <ImportKoncesji />

      {koncesje.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-400">
          Nie ma jeszcze żadnej koncesji — wczytaj pierwszy dokument powyżej.
        </div>
      ) : (
        <>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Aktywne ({aktywne.length})
          </h2>
          {aktywne.length === 0 ? (
            <p className="text-sm text-gray-400 mb-6">Żadna koncesja nie obowiązuje w tej chwili.</p>
          ) : (
            aktywne.map((k) => <Karta key={k.id} k={k} wygasla={false} />)
          )}

          {wygasle.length > 0 && (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mt-8 mb-3">
                Wygasłe ({wygasle.length})
              </h2>
              {wygasle.map((k) => <Karta key={k.id} k={k} wygasla />)}
            </>
          )}
        </>
      )}
    </div>
  )
}
