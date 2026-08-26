import Link from 'next/link'
import { danePulpitu } from './_dashboard/dane'
import WykresObrotu from './_dashboard/WykresObrotu'

export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Pulpit sklepu.
 *
 * Układ według zasad, które powtarzają się we wszystkich przewodnikach po
 * pulpitach: jedna liczba główna największa i w lewym górnym rogu (tam pada
 * wzrok), przy każdej liczbie punkt odniesienia (poprzedni okres albo typowy
 * dzień), trend na wykresie zamiast w tabeli, a na końcu lista rzeczy, które
 * wymagają decyzji. Bez tego ostatniego pulpit jest tablicą wyników, a nie
 * narzędziem pracy.
 */

const zl = (n: number, dokladnie = false) =>
  n.toLocaleString('pl-PL', {
    minimumFractionDigits: dokladnie ? 2 : 0,
    maximumFractionDigits: dokladnie ? 2 : 0,
  })

const STATUS_ETYKIETA: Record<string, { tekst: string; klasa: string }> = {
  PENDING_PAYMENT: { tekst: 'Czeka na płatność', klasa: 'text-amber-700 bg-amber-50 border-amber-200' },
  AWAITING_PAYMENT: { tekst: 'Pro forma', klasa: 'text-amber-700 bg-amber-50 border-amber-200' },
  PAID: { tekst: 'Opłacone', klasa: 'text-green-700 bg-green-50 border-green-200' },
  PROCESSING: { tekst: 'W realizacji', klasa: 'text-blue-700 bg-blue-50 border-blue-200' },
  SHIPPED: { tekst: 'Wysłane', klasa: 'text-blue-700 bg-blue-50 border-blue-200' },
  DELIVERED: { tekst: 'Dostarczone', klasa: 'text-gray-600 bg-gray-50 border-gray-200' },
  CANCELLED: { tekst: 'Anulowane', klasa: 'text-gray-500 bg-gray-50 border-gray-200' },
  EXPIRED: { tekst: 'Wygasłe', klasa: 'text-gray-500 bg-gray-50 border-gray-200' },
  REFUNDED: { tekst: 'Zwrócone', klasa: 'text-gray-500 bg-gray-50 border-gray-200' },
}

/** Zmiana procentowa z zabezpieczeniem na dzielenie przez zero. */
function zmiana(teraz: number, poprzednio: number): { tekst: string; wzrost: boolean | null } {
  if (poprzednio <= 0) return { tekst: teraz > 0 ? 'brak odniesienia' : '—', wzrost: null }
  const proc = ((teraz - poprzednio) / poprzednio) * 100
  const znak = proc >= 0 ? '+' : '−'
  return { tekst: `${znak}${Math.abs(proc).toFixed(0)}%`, wzrost: proc >= 0 }
}

function Delta({ teraz, poprzednio }: { teraz: number; poprzednio: number }) {
  const z = zmiana(teraz, poprzednio)
  const kolor = z.wzrost === null ? 'text-gray-400' : z.wzrost ? 'text-green-700' : 'text-red-600'
  return <span className={`text-sm font-medium ${kolor}`}>{z.tekst}</span>
}

const kiedy = (d: Date) =>
  d.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })

export default async function AdminDashboard() {
  const d = await danePulpitu()
  const doZrobienia = d.uwaga.filter((u) => u.pilne).reduce((s, u) => s + u.ile, 0)
  const porownanieDnia = zmiana(d.dzis.obrot, d.typowyDzien.obrot)

  return (
    <div className="space-y-6">
      {/* Nagłówek — data i jedno zdanie o stanie dnia zamiast samego słowa „Dashboard" */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pulpit</h1>
          <p className="text-sm text-gray-500 mt-0.5 first-letter:uppercase">
            {new Date().toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long' })}
            {doZrobienia > 0 && <> · {doZrobienia} spraw czeka na Ciebie</>}
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/oferty/nowa" className="px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
            Nowa oferta
          </Link>
          <Link href="/admin/zamowienia" className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Zamówienia
          </Link>
        </div>
      </div>

      {/* Rząd główny: dziś (duże) + okresy z porównaniem */}
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">Obrót dzisiaj</p>
          <p className="text-4xl font-bold text-gray-900 tabular-nums mt-1">{zl(d.dzis.obrot)} <span className="text-2xl text-gray-400">zł</span></p>
          <p className="text-sm text-gray-500 mt-2">
            <span className={porownanieDnia.wzrost === null ? 'text-gray-400' : porownanieDnia.wzrost ? 'text-green-700 font-medium' : 'text-red-600 font-medium'}>
              {porownanieDnia.tekst}
            </span>{' '}
            wobec typowego {new Date().toLocaleDateString('pl-PL', { weekday: 'long' })} ({zl(d.typowyDzien.obrot)} zł)
          </p>
          <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-gray-900 tabular-nums">{d.dzis.zamowien}</p>
              <p className="text-sm text-gray-500">zamówień dziś</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 tabular-nums">{zl(d.dzis.sredniaKoszyka)} zł</p>
              <p className="text-sm text-gray-500">średni koszyk</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 2xl:col-span-3 grid sm:grid-cols-3 gap-4">
          {d.okresy.map((o) => (
            <Link key={o.etykieta} href="/admin/zamowienia"
              className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-gray-300 transition-colors">
              <p className="text-sm text-gray-500">{o.etykieta}</p>
              <p className="text-2xl font-bold text-gray-900 tabular-nums mt-1">{zl(o.obrot)} zł</p>
              <div className="mt-2">
                <Delta teraz={o.obrot} poprzednio={o.poprzednio} />
                <span className="text-xs text-gray-400 ml-1.5">vs poprzednie {o.etykieta}</span>
              </div>
              <p className="text-xs text-gray-400 mt-3">{o.zamowien} zamówień · średnio {zl(o.zamowien ? o.obrot / o.zamowien : 0)} zł</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Trend */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <WykresObrotu dni={d.dni} />
      </div>

      {/* Wymaga uwagi — to jest właściwy powód, dla którego pulpit się otwiera */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Wymaga uwagi</h2>
          <p className="text-sm text-gray-500 mt-0.5">sprawy, które czekają na decyzję albo działanie</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 divide-y sm:divide-y-0 divide-gray-100">
          {d.uwaga.map((u) => (
            <Link key={u.etykieta} href={u.href}
              className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <span className={`text-2xl font-bold tabular-nums ${u.ile === 0 ? 'text-gray-300' : u.pilne ? 'text-amber-600' : 'text-gray-900'}`}>
                {u.ile}
              </span>
              <span>
                <span className="block text-sm font-medium text-gray-900">{u.etykieta}</span>
                <span className="block text-xs text-gray-500 leading-relaxed">{u.opis}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Dwie listy: co wpadło i kto pyta */}
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6 items-start">
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Ostatnie zamówienia</h2>
            <Link href="/admin/zamowienia" className="text-sm text-primary-600 hover:text-primary-700">Wszystkie</Link>
          </div>
          {d.ostatnieZamowienia.length === 0 ? (
            <p className="px-6 py-8 text-center text-gray-400 text-sm">Jeszcze nic nie wpadło.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {d.ostatnieZamowienia.map((z) => {
                const s = STATUS_ETYKIETA[z.status] ?? STATUS_ETYKIETA.PENDING_PAYMENT
                return (
                  <li key={z.numer}>
                    <Link href="/admin/zamowienia" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors">
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-gray-900 truncate">{z.klient}</span>
                        <span className="block text-xs text-gray-400">{z.numer} · {z.pozycji} poz. · {kiedy(z.kiedy)}</span>
                      </span>
                      <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${s.klasa}`}>{s.tekst}</span>
                      <span className="shrink-0 text-sm font-semibold text-gray-900 tabular-nums w-24 text-right">{zl(z.kwota, true)} zł</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Ostatnie zapytania</h2>
            <Link href="/admin/leady" className="text-sm text-primary-600 hover:text-primary-700">Wszystkie</Link>
          </div>
          {d.ostatnieLeady.length === 0 ? (
            <p className="px-6 py-8 text-center text-gray-400 text-sm">Brak zapytań.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {d.ostatnieLeady.map((l, i) => (
                <li key={`${l.email}-${i}`}>
                  <Link href="/admin/leady" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 truncate">{l.imie}</span>
                      {l.zrodlo && <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{l.zrodlo}</span>}
                      <span className="ml-auto shrink-0 text-xs text-gray-400">{kiedy(l.kiedy)}</span>
                    </span>
                    <span className="block text-xs text-gray-500 truncate mt-0.5">{l.temat}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

      {/* Co się sprzedaje — pozycje zamówień, nie odsłony kart */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Najlepiej sprzedające się — 30 dni</h2>
          <p className="text-sm text-gray-500 mt-0.5">wartość netto pozycji w opłaconych zamówieniach</p>
        </div>
        {d.bestsellery.length === 0 ? (
          <p className="px-6 py-8 text-center text-gray-400 text-sm">Brak sprzedaży w tym okresie.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {d.bestsellery.map((b, i) => {
              const udzial = (b.obrot / d.bestsellery[0].obrot) * 100
              return (
                <li key={`${b.pn}-${i}`} className="px-6 py-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm text-gray-400 tabular-nums w-4">{i + 1}</span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-medium text-gray-900 truncate">{b.nazwa}</span>
                      <span className="block text-xs text-gray-400">{b.pn || '—'} · {b.sztuk} szt.</span>
                    </span>
                    <span className="text-sm font-semibold text-gray-900 tabular-nums">{zl(b.obrot)} zł</span>
                  </div>
                  {/* pasek udziału — porównanie w poziomie czyta się szybciej niż same liczby */}
                  <div className="ml-7 mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-primary-500" style={{ width: `${udzial}%` }} />
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      </div>

      {/* Stopka pulpitu — liczby, które warto mieć pod ręką, ale nie w centrum uwagi */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500 px-1">
        <span>Klienci w bazie: <span className="font-medium text-gray-900">{d.klienci.wszyscy}</span></span>
        <span>Nowi w 30 dniach: <span className="font-medium text-gray-900">{d.klienci.nowiWMiesiacu}</span></span>
        <span>Przychód liczony z zamówień opłaconych i w realizacji</span>
      </div>
    </div>
  )
}
