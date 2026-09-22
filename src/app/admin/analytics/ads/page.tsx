import { prisma } from '@/lib/db'
import { adsConfigured } from '@/lib/googleAds'
import { podsumowanieAds, godzinaKonta, type KampaniaAds, type PodsumowanieAds } from '@/lib/ads-daily'
import { AnalyticsTabs, Card, fmt } from '../_ui'
import { Md } from '../_markdown'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const zl = (v: number) => `${v.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł`
const zl0 = (v: number) => `${Math.round(v).toLocaleString('pl-PL')} zł`

/** Nazwy kampanii w koncie mają ogony typu „- MB - Verseo” i „[API]” — w tabeli tylko przeszkadzają. */
function skrocNazwe(n: string): string {
  return n.replace(/\s*\[API\]\s*$/, '').replace(/\s*-\s*(MB|DK)\s*-\s*Verseo\s*$/i, '').trim()
}

function Sekcja({ tytul, opis, children }: { tytul: string; opis?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
      <h3 className="text-sm font-semibold text-gray-700">{tytul}</h3>
      {opis && <p className="text-xs text-gray-400 mt-0.5 mb-3">{opis}</p>}
      <div className={opis ? '' : 'mt-3'}>{children}</div>
    </div>
  )
}

/**
 * Wydatek dzień po dniu. Słupek pokazuje koszt, kropka nad nim konwersje.
 * Linia budżetu mówi, gdzie konto by stanęło, gdyby Google nie dopuszczał
 * przekroczeń dziennych (rozlicza się na średniej miesięcznej).
 */
function WykresDni({ dni, budzet }: { dni: PodsumowanieAds['dni']; budzet: number }) {
  // Zapas nad najwyższym słupkiem, żeby kropka konwersji miała gdzie stanąć.
  const max = Math.max(budzet * 1.1, ...dni.map((d) => d.koszt)) * 1.12
  const maxKonw = Math.max(1, ...dni.map((d) => d.konwersje))
  // Pozycja kropki liczona w procentach wysokości wykresu, nie w pikselach —
  // przy dniu o najwyższym koszcie offset w px wychodził poza kontener.
  const kropka = (d: { koszt: number; konwersje: number }) =>
    Math.min(95, (d.koszt / max) * 100 + 4 + (d.konwersje / maxKonw) * 12)
  return (
    <div className="relative">
      <div className="flex items-end gap-[3px] h-40 relative">
        {budzet > 0 && (
          <div
            className="absolute left-0 right-0 border-t border-dashed border-amber-400 pointer-events-none"
            style={{ bottom: `${(budzet / max) * 100}%` }}
          >
            <span className="absolute -top-4 right-0 text-[10px] text-amber-600">budżet {zl0(budzet)}</span>
          </div>
        )}
        {dni.map((d) => (
          <div
            key={d.data}
            className="flex-1 h-full flex flex-col justify-end relative group"
            title={`${d.data}: ${zl(d.koszt)}, ${d.klikniecia} kliknięć, ${d.konwersje.toFixed(1)} konwersji`}
          >
            {d.konwersje > 0 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"
                style={{ bottom: `${kropka(d)}%` }}
              />
            )}
            <div
              className="bg-blue-500/80 group-hover:bg-blue-600 transition-colors rounded-t min-h-[2px]"
              style={{ height: `${(d.koszt / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
        <span>{dni[0]?.data}</span>
        <span className="text-emerald-600">● konwersje</span>
        <span>{dni[dni.length - 1]?.data}</span>
      </div>
    </div>
  )
}

function PasekBudzetu({ k }: { k: KampaniaAds }) {
  const utracone = k.utraconeBudzet ?? 0
  if (!utracone) return <span className="text-gray-300">—</span>
  const mocne = utracone > 0.15 && k.konwersje > 0
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-12 h-1.5 rounded-full bg-gray-100 overflow-hidden inline-block align-middle">
        <span
          className={`block h-full ${mocne ? 'bg-amber-500' : 'bg-gray-300'}`}
          style={{ width: `${Math.min(100, utracone * 100)}%` }}
        />
      </span>
      <span className={mocne ? 'text-amber-700 font-medium' : 'text-gray-400'}>{(utracone * 100).toFixed(0)}%</span>
    </span>
  )
}

/** Kafel bez porównania — tam, gdzie zmiana procentowa wprowadzałaby w błąd. */
function Kafel({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-gray-900 tabular-nums">{value}</div>
      <div className="mt-0.5 text-xs text-gray-400">{sub}</div>
    </div>
  )
}

function Zmiana({ teraz, przed }: { teraz: number; przed: number }) {
  if (!przed) return <span className="text-gray-300">—</span>
  const d = (teraz - przed) / przed
  if (Math.abs(d) < 0.03) return <span className="text-gray-400">bez zmian</span>
  return <span className={d > 0 ? 'text-gray-600' : 'text-gray-500'}>{d > 0 ? '+' : ''}{(d * 100).toFixed(0)}%</span>
}

export default async function AdsPage() {
  if (!adsConfigured()) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
        <AnalyticsTabs active="ads" />
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
          <h2 className="text-lg font-semibold mb-2">Brak konfiguracji Google Ads API</h2>
          <p className="text-sm text-gray-600">
            Ustaw w env: <code className="text-xs bg-gray-100 px-1 rounded">GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN</code>.
          </p>
        </div>
      </div>
    )
  }

  let p: PodsumowanieAds | null = null
  let blad: string | null = null
  try {
    p = await podsumowanieAds()
  } catch (e) {
    blad = (e as Error).message
  }

  const digest = await prisma.adsDigest.findFirst({ orderBy: { date: 'desc' } })

  // Koszt pozyskania liczony na realnych zamówieniach z bazy, nie na konwersjach Ads.
  // Ads liczy też kliki w telefon i mail, więc jego „koszt/konwersję” jest zaniżony.
  const kosztZaZamowienie = p && p.sklep30.zamowienia > 0
    ? p.dni.reduce((a, d) => a + d.koszt, 0) / p.sklep30.zamowienia
    : 0
  const koszt30 = p ? p.dni.reduce((a, d) => a + d.koszt, 0) : 0

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        {p && (
          <span className="text-xs text-gray-400">
            dane na {p.dzien}, godz. {godzinaKonta()} (strefa konta)
          </span>
        )}
      </div>
      <AnalyticsTabs active="ads" />

      {blad && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
          <b>Błąd Google Ads API:</b> {blad}
        </div>
      )}

      {p && (
        <>
          {p.uwagi.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="text-sm font-semibold text-amber-800 mb-1.5">Do sprawdzenia ({p.uwagi.length})</div>
              <ul className="text-sm text-amber-900 space-y-1 list-disc list-inside">
                {p.uwagi.map((u, i) => <li key={i}>{u}</li>)}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <Card label={`Dziś do ${godzinaKonta()}`} value={zl0(p.dzis.koszt)} cur={p.dzis.koszt} prev={p.okno7.koszt / 7} compareLabel="vs śr. dzienna" />
            <Card label="Wczoraj" value={zl0(p.wczoraj.koszt)} cur={p.wczoraj.koszt} prev={p.wczorajTydzienTemu.koszt} compareLabel="vs tydzień temu" />
            <Card label="Koszt (7 dni)" value={zl0(p.okno7.koszt)} cur={p.okno7.koszt} prev={p.poprzednie7.koszt} compareLabel="vs poprzednie 7" />
            <Card label="Konwersje Ads (7 dni)" value={p.okno7.konwersje.toFixed(1)} cur={p.okno7.konwersje} prev={p.poprzednie7.konwersje} compareLabel="vs poprzednie 7" />
          </div>

          {/* Druga linia kafli to już nie Ads, tylko baza sklepu. Celowo bez porównań
              procentowych: gclid ma część zamówień, więc te liczby są dolną granicą
              i zestawianie ich z kosztem dawałoby fałszywy wynik rentowności. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2">
            <Kafel
              label="Zamówienia przypisane do Ads"
              value={`${fmt(p.sklep30.zamowienia)} z ${fmt(p.sklep30.zamowieniaOgolem)}`}
              sub={`opłacone w 30 dniach · pokrycie ${p.sklep30.zamowieniaOgolem ? Math.round((p.sklep30.zamowienia / p.sklep30.zamowieniaOgolem) * 100) : 0}%`}
            />
            <Kafel label="Marża z tych zamówień" value={zl0(p.sklep30.marzaNetto)} sub={`przychód netto ${zl0(p.sklep30.przychodNetto)}`} />
            <Kafel label="Koszt za zamówienie" value={kosztZaZamowienie ? zl0(kosztZaZamowienie) : '—'} sub={`koszt Ads 30 dni: ${zl0(koszt30)}`} />
            <Kafel label="Leady z Ads (30 dni)" value={fmt(p.sklep30.leady)} sub="formularze i zapytania z gclid" />
          </div>
          <p className="text-xs text-gray-400 mb-6">
            Zamówienia i leady liczone z bazy sklepu po identyfikatorze kliknięcia. Klient, który zadzwonił albo wrócił
            później bez parametru w adresie, nie zostanie przypisany — marża jest więc dolną granicą, a nie wynikiem kampanii.
          </p>

          <Sekcja
            tytul="Wydatek dzień po dniu (30 dni)"
            opis="Słupek to koszt, zielona kropka nad nim — liczba konwersji tego dnia. Google rozlicza budżet na średniej miesięcznej, więc pojedynczy dzień może przekroczyć linię."
          >
            <WykresDni dni={p.dni} budzet={p.budzetDzienny} />
          </Sekcja>

          <Sekcja tytul="Kampanie (7 dni)" opis="Kolumna „Traci przez budżet” mówi, jaki udział wyświetleń kampania straciła dlatego, że skończyły się pieniądze. Pomarańczowy pasek przy kampanii z konwersjami oznacza, że dołożenie budżetu ma sens.">
            <div className="overflow-x-auto -mx-5 px-5">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-xs text-gray-500 border-b border-gray-200">
                    <th className="text-left font-medium pb-2">Kampania</th>
                    <th className="text-right font-medium pb-2">Koszt</th>
                    <th className="text-right font-medium pb-2">Zmiana</th>
                    <th className="text-right font-medium pb-2">Kliknięcia</th>
                    <th className="text-right font-medium pb-2">Konwersje</th>
                    <th className="text-right font-medium pb-2">Koszt/konw.</th>
                    <th className="text-right font-medium pb-2">Budżet</th>
                    <th className="text-right font-medium pb-2">Traci przez budżet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {p.kampanie.filter((k) => k.koszt > 0).map((k) => (
                    <tr key={k.id} className={k.status === 'PAUSED' ? 'text-gray-400' : ''}>
                      <td className="py-2 pr-3">
                        <div className="text-gray-800">{skrocNazwe(k.nazwa)}</div>
                        {k.status === 'PAUSED' && <div className="text-[11px] text-gray-400">wstrzymana</div>}
                      </td>
                      <td className="py-2 text-right tabular-nums whitespace-nowrap">{zl(k.koszt)}</td>
                      <td className="py-2 text-right tabular-nums whitespace-nowrap text-xs"><Zmiana teraz={k.koszt} przed={k.kosztPoprzednio} /></td>
                      <td className="py-2 text-right tabular-nums">{fmt(k.klikniecia)}</td>
                      <td className={`py-2 text-right tabular-nums ${k.konwersje === 0 && k.koszt > 150 ? 'text-red-600 font-medium' : ''}`}>
                        {k.konwersje.toFixed(1)}
                      </td>
                      <td className="py-2 text-right tabular-nums whitespace-nowrap text-gray-600">
                        {k.konwersje > 0 ? zl(k.koszt / k.konwersje) : '—'}
                      </td>
                      <td className="py-2 text-right tabular-nums whitespace-nowrap text-gray-500">{zl0(k.budzetDzienny)}</td>
                      <td className="py-2 text-right whitespace-nowrap text-xs"><PasekBudzetu k={k} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Sekcja>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <Sekcja tytul="Co się liczy jako konwersja (7 dni)" opis="Wszystkie akcje, także pomocnicze. Konto jest wspólne z serwis-zebry.pl, dlatego widać tu również tamte zdarzenia.">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {p.akcje.map((a) => (
                    <tr key={a.nazwa}>
                      <td className="py-1.5 pr-2 text-gray-800">{a.nazwa}</td>
                      <td className="py-1.5 text-right tabular-nums text-gray-700">{a.konwersje.toFixed(1)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-400 whitespace-nowrap">{zl(a.wartosc)}</td>
                    </tr>
                  ))}
                  {p.akcje.length === 0 && <tr><td className="py-2 text-xs text-gray-400">Brak konwersji w oknie</td></tr>}
                </tbody>
              </table>
            </Sekcja>

            <Sekcja tytul="Hasła bez ani jednej konwersji (7 dni)" opis="Kandydaci do wykluczeń. Sortowane po koszcie.">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {p.frazyBezKonwersji.map((f, i) => (
                    <tr key={i}>
                      <td className="py-1.5 pr-2">
                        <div className="text-gray-800 truncate max-w-[240px]" title={f.fraza}>{f.fraza}</div>
                        <div className="text-[11px] text-gray-400 truncate max-w-[240px]">{skrocNazwe(f.kampania)}</div>
                      </td>
                      <td className="py-1.5 text-right tabular-nums text-gray-700 whitespace-nowrap">{zl(f.koszt)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-400">{f.klikniecia}</td>
                    </tr>
                  ))}
                  {p.frazyBezKonwersji.length === 0 && <tr><td className="py-2 text-xs text-gray-400">Każde hasło z kosztem dało konwersję</td></tr>}
                </tbody>
              </table>
            </Sekcja>
          </div>

          {digest && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-3">Komentarz wieczorny ({digest.date})</h2>
              <Md text={digest.summary} />
            </div>
          )}
        </>
      )}
    </div>
  )
}
