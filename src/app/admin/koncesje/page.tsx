import { prisma } from '@/lib/db'
import { kursEur } from '@/lib/koncesje'
import ImportKoncesji from './ImportKoncesji'
import WierszPozycji from './WierszPozycji'
import UsunKoncesje from './UsunKoncesje'

export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Ceny specjalne przyznane na konkretną szansę sprzedaży: koncesja od Zebry i
 * oparta na niej oferta dystrybutora. Panel istnieje po to, żeby przy
 * wystawianiu oferty podpowiedź o tańszym zakupie pojawiała się sama, zamiast
 * czekać w PDF-ie na czyimś dysku.
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
  // Ceny w euro też po polsku — przecinek dzieli grosze, jak w kwotach złotowych.
  const kwota = (setne: number) => (setne / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const Karta = ({ k, wygasla }: { k: (typeof koncesje)[number]; wygasla: boolean }) => {
    const dni = Math.ceil((k.endDate.getTime() - teraz.getTime()) / 86_400_000)
    // Dokumentów będzie przybywać, a każdy ma po kilkanaście numerów — karty
    // startują zwinięte, żeby lista mieściła się na ekranie. Nagłówek niesie
    // tyle, ile trzeba do wyboru: kto, na co, do kiedy i w jakich cenach.
    const ceny = k.items.map((i) => i.unitPrice)
    const widelki =
      ceny.length === 0
        ? null
        : Math.min(...ceny) === Math.max(...ceny)
          ? `${kwota(ceny[0])} ${k.currency}`
          : `${kwota(Math.min(...ceny))}–${kwota(Math.max(...ceny))} ${k.currency}`
    const pozycji = `${k.items.length} ${k.items.length === 1 ? 'pozycja' : k.items.length % 10 >= 2 && k.items.length % 10 <= 4 && (k.items.length % 100 < 12 || k.items.length % 100 > 14) ? 'pozycje' : 'pozycji'}`

    return (
      <details className={`group rounded-2xl border bg-white overflow-hidden mb-3 ${wygasla ? 'border-gray-200 opacity-70' : 'border-gray-200'}`}>
        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden px-5 py-4 flex flex-wrap items-start justify-between gap-3 hover:bg-gray-50">
          <div className="flex items-start gap-3 min-w-0">
            <svg
              className="w-4 h-4 mt-1 shrink-0 text-gray-400 transition-transform group-open:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900">
                {k.reseller}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  {k.source === 'JARLTECH'
                    ? `oferta Jarltecha ${k.docNumber ?? ''} → koncesja ${k.requestId}`
                    : `PC ${k.requestId}`}
                  {k.revision ? ` rev. ${k.revision}` : ''}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                {k.endUser ? <>klient końcowy: {k.endUser} · </> : null}
                zakup przez {k.distributor || '—'} · {pozycji}
                {widelki ? ` · ${widelki}` : ''}
              </p>
              <p className={`text-sm mt-1 ${wygasla ? 'text-gray-400' : dni <= 14 ? 'text-amber-600 font-medium' : 'text-gray-500'}`}>
                {k.startDate.toLocaleDateString('pl-PL')} – {k.endDate.toLocaleDateString('pl-PL')}
                {wygasla ? ' · wygasła' : ` · zostało ${dni} dni`}
              </p>
            </div>
          </div>
          <UsunKoncesje id={k.id} etykieta={`${k.source === 'JARLTECH' ? `oferta ${k.docNumber ?? k.requestId}` : k.requestId} (${k.reseller})`} />
        </summary>

        <table className="w-full text-sm border-t border-gray-200">
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
                cena={`${kwota(i.unitPrice)} ${k.currency}`}
                cenaPln={`${zl(k.currency === 'PLN' ? i.unitPrice : Math.round(i.unitPrice * kurs))} zł`}
                rabat={i.discountPct != null ? `${i.discountPct.toFixed(1)}%` : '—'}
                maxQty={i.maxQty}
                usedQty={i.usedQty}
                zablokowany={wygasla}
              />
            ))}
          </tbody>
        </table>
      </details>
    )
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Ceny specjalne</h1>
      <p className="text-sm text-gray-500 mb-5">
        Koncesje Zebry i oferty Jarltecha wystawione na te koncesje. Gdy w kreatorze oferty dodasz numer
        objęty aktywnym dokumentem, zobaczysz podpowiedź z ceną zakupu i pozostałym limitem sztuk.
        Koncesja mówi, ile Zebra pozwala zapłacić; oferta dystrybutora — ile faktycznie zapłacimy.
        Kliknij kartę, żeby zobaczyć numery i ceny.
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
