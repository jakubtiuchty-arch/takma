'use client'

import { useState, useEffect } from 'react'
import { etykietaPowiazania } from '@/lib/koncesja-etykieta'
import { useQuoteStore, type QuoteItemData } from '@/store/quoteStore'

function formatPrice(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function PriceInput({ value, onChange }: { value: number; onChange: (grosze: number) => void }) {
  const [localValue, setLocalValue] = useState((value / 100).toFixed(2))

  useEffect(() => {
    setLocalValue((value / 100).toFixed(2))
  }, [value])

  const commit = () => {
    const val = parseFloat(localValue)
    if (!isNaN(val) && val >= 0) {
      onChange(Math.round(val * 100))
    } else {
      setLocalValue((value / 100).toFixed(2))
    }
  }

  return (
    <input
      type="text"
      inputMode="decimal"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => e.key === 'Enter' && commit()}
      className="w-full text-sm text-right border border-gray-200 rounded px-2 py-1 tabular-nums"
    />
  )
}

export interface TrafienieKoncesji {
  /**
   * CENNIK = cennik zakupowy producenta, bez limitu sztuk i klienta końcowego;
   * TRADEUP = lista programu Zebra Trade UP — rabat od ceny katalogowej.
   */
  source: 'ZEBRA' | 'JARLTECH' | 'CENNIK' | 'TRADEUP'
  requestId: string
  docNumber: string | null
  revision: string | null
  reseller: string
  endUser: string | null
  distributor: string | null
  /** 0 = ceny nie da się policzyć (Trade UP bez ceny katalogowej w BlueStar) */
  unitPrice: number
  currency: string
  unitPricePln: number
  pozostaloSztuk: number | null
  dniDoKonca: number
  rabatPct: number | null
  cenaKatalogowa: number | null
  uwagi: string | null
}

/** Stan u dystrybutorów z /api/admin/dostepnosc. */
interface Dostepnosc {
  found: boolean
  stockPL: number
  stockDE: number
  inDelivery: number
  incomingDate: string | null
  lastSync: string
}

/**
 * Kropka odróżnia stan od podpowiedzi cenowych, które też są zielone.
 * „Dostępny” zostaje stonowany; kolorem krzyczą tylko problemy.
 */
function Kropka({ kolor }: { kolor: string }) {
  return <span className={`inline-block w-1.5 h-1.5 rounded-full align-middle mr-1.5 ${kolor}`} />
}

/**
 * Czy towar jest, zanim oferta pójdzie do klienta. Liczy się to, co leży u
 * dystrybutorów teraz (PL + magazyny UE), porównane z ilością w ofercie;
 * dostawa w drodze to tylko informacja — status zostaje dwustanowy, jak w
 * sklepie, a wyjątkiem jest „za mało”, bo tego sklep nie musi wiedzieć.
 */
function LiniaDostepnosci({ d, ilosc, sprawdzam }: { d?: Dostepnosc; ilosc: number; sprawdzam: boolean }) {
  if (!d) {
    return sprawdzam ? <div className="mt-1 px-1 text-xs text-gray-400">Sprawdzam stan u dystrybutorów…</div> : null
  }
  if (!d.found) {
    return (
      <div className="mt-1 px-1 text-xs text-gray-400">
        <Kropka kolor="bg-gray-300" />
        Brak danych o stanie — dystrybutorzy nie podają tego numeru
      </div>
    )
  }

  const naStanie = d.stockPL + d.stockDE
  const gdzie = [
    d.stockPL > 0 ? `${d.stockPL} szt. w PL (24 h)` : '',
    d.stockDE > 0 ? `${d.stockDE} szt. w UE (2–3 dni)` : '',
  ]
    .filter(Boolean)
    .join(', ')
  const dostawa =
    d.inDelivery > 0
      ? `w dostawie ${d.inDelivery} szt.${d.incomingDate ? `, ok. ${new Date(d.incomingDate).toLocaleDateString('pl-PL')}` : ''}`
      : ''
  const godzina = new Date(d.lastSync).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })

  const [status, kropka, kolor, opis]: [string, string, string, string[]] =
    naStanie >= ilosc
      ? ['Dostępny', 'bg-emerald-500', 'text-gray-900', [gdzie, dostawa]]
      : naStanie > 0
        ? [
            'Za mało',
            'bg-amber-500',
            'text-amber-700',
            // Suma ma sens tylko przy dwóch magazynach — przy jednym powtarzałaby liczbę.
            [`w ofercie ${ilosc} szt., na stanie ${d.stockPL > 0 && d.stockDE > 0 ? `${naStanie}: ` : ''}${gdzie}`, dostawa],
          ]
        : ['Niedostępny', 'bg-red-500', 'text-red-600', [dostawa || 'brak u dystrybutorów']]

  return (
    <div className="mt-1 px-1 text-xs leading-relaxed">
      <Kropka kolor={kropka} />
      <span className={`font-medium ${kolor}`}>{status}</span>
      <span className="text-gray-500"> — {opis.filter(Boolean).join('; ')}</span>
      <span className="text-gray-400"> · stan z {godzina}</span>
    </div>
  )
}

function ItemRow({
  item,
  index,
  koncesje = [],
  dostepnosc,
  sprawdzamStan,
}: {
  item: QuoteItemData
  index: number
  koncesje?: TrafienieKoncesji[]
  dostepnosc?: Dostepnosc
  sprawdzamStan: boolean
}) {
  const { updateItem, removeItem, reorderItems } = useQuoteStore()
  const isCatalog = item.source === 'catalog'

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="px-3 py-2 text-sm text-gray-500 text-center w-10">
        <div className="flex flex-col gap-0.5">
          {index > 0 && (
            <button
              type="button"
              onClick={() => reorderItems(index, index - 1)}
              className="text-gray-400 hover:text-gray-600"
              title="W górę"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          )}
          <span>{index + 1}</span>
        </div>
      </td>
      <td className="px-3 py-2">
        <input
          type="text"
          value={item.productName}
          onChange={(e) => updateItem(item.id, { productName: e.target.value })}
          className="w-full text-sm border-0 bg-transparent focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5"
        />
        {item.partNumber && (
          <span className="text-xs text-gray-400 font-mono px-1">{item.partNumber}</span>
        )}
        {item.partNumber && <LiniaDostepnosci d={dostepnosc} ilosc={item.quantity} sprawdzam={sprawdzamStan} />}
        {/* Ceny specjalne — pokazujemy, nie wstawiamy sami. Cena formalnie
            dotyczy jednej szansy sprzedaży, więc decyzja należy do handlowca.
            Ten sam numer bywa i w koncesji Zebry, i w ofercie dystrybutora —
            wtedy widać obie, bo mówią o innej kwocie. Trade UP podaje rabat,
            a kwotę serwer liczy z bieżącej ceny katalogowej; gdy BlueStar jej
            nie zna, zostaje sam rabat i nie ma czego wstawić jako zakupu. */}
        {koncesje.map((koncesja) => (
          <div key={`${koncesja.source}-${koncesja.requestId}`} className="mt-1 px-1 text-xs leading-relaxed">
            <span className="text-emerald-700 font-medium">
              {koncesja.source === 'TRADEUP'
                ? koncesja.unitPricePln > 0
                  ? 'Cena z Trade UP '
                  : 'Trade UP'
                : koncesja.source === 'CENNIK'
                  ? 'Cena z cennika '
                  : 'Cena specjalna '}
              {koncesja.unitPricePln > 0 &&
                (koncesja.currency === 'PLN'
                  ? `${formatPrice(koncesja.unitPricePln)} zł`
                  : `${formatPrice(koncesja.unitPrice)} ${koncesja.currency} ≈ ${formatPrice(koncesja.unitPricePln)} zł`)}
            </span>
            <span className="text-gray-500">
              {koncesja.source === 'TRADEUP' ? (
                <>
                  {koncesja.rabatPct != null ? ` — ${koncesja.rabatPct.toLocaleString('pl-PL')} % od ceny katalogowej` : ' — rabat od ceny katalogowej'}
                  {koncesja.cenaKatalogowa != null
                    ? ` ${formatPrice(koncesja.cenaKatalogowa)} ${koncesja.currency}`
                    : ' (BlueStar nie podał ceny katalogowej — kwotę potwierdź u dystrybutora)'}
                  , lista {koncesja.revision ? `z ${koncesja.revision}` : 'programu'}, program jeszcze {koncesja.dniDoKonca} dni
                </>
              ) : koncesja.source === 'CENNIK' ? (
                <>
                  {` — cennik ${koncesja.distributor ?? koncesja.requestId}, obowiązuje jeszcze ${koncesja.dniDoKonca} dni`}
                </>
              ) : (
                <>
                  {koncesja.source === 'JARLTECH'
                    ? ` — oferta Jarltecha ${koncesja.docNumber ?? ''} na ${etykietaPowiazania(koncesja.requestId)}`
                    : ` — koncesja ${koncesja.requestId}`}
                  {' '}({koncesja.reseller}
                  {koncesja.endUser ? `, ${koncesja.endUser}` : ''})
                  {koncesja.pozostaloSztuk != null ? `, zostało ${koncesja.pozostaloSztuk} szt.` : ''}
                  , ważna jeszcze {koncesja.dniDoKonca} dni
                </>
              )}
            </span>
            {koncesja.unitPricePln > 0 && item.purchasePrice !== koncesja.unitPricePln && (
              <button
                type="button"
                onClick={() => updateItem(item.id, { purchasePrice: koncesja.unitPricePln })}
                className="ml-2 text-emerald-700 underline hover:text-emerald-800"
              >
                użyj jako ceny zakupu
              </button>
            )}
            {/* Warunki są te same dla każdej pozycji z dokumentu — rozwinięte
                pod każdym numerem zajmowałyby pół tabeli. */}
            {koncesja.uwagi && (
              <details className="text-gray-400">
                <summary className="cursor-pointer select-none hover:text-gray-600">warunki</summary>
                <p className="mt-0.5">{koncesja.uwagi}</p>
              </details>
            )}
          </div>
        ))}
      </td>
      <td className="px-3 py-2 w-20">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateItem(item.id, { quantity: Math.max(1, parseInt(e.target.value) || 1) })}
          min="1"
          className="w-full text-sm text-center border border-gray-200 rounded px-2 py-1"
        />
      </td>
      {/* Ile płacimy dystrybutorowi — podłoga przy udzielaniu rabatu. Zarobek
          liczy się zbiorczo w podsumowaniu, żeby wiersz został czytelny. */}
      <td className="px-3 py-2 w-28 text-right">
        {item.purchasePrice && item.purchasePrice > 0 ? (
          <span
            className={`text-sm tabular-nums ${item.priceNetto <= item.purchasePrice ? 'text-red-600 font-semibold' : 'text-gray-500'}`}
            title={item.priceNetto <= item.purchasePrice ? 'Cena sprzedaży nie pokrywa kosztu zakupu' : undefined}
          >
            {formatPrice(item.purchasePrice)} zł
          </span>
        ) : (
          <span className="text-xs text-gray-300">brak danych</span>
        )}
      </td>
      <td className="px-3 py-2 w-32">
        <PriceInput
          value={item.priceNetto}
          onChange={(newPrice) => {
            if (isCatalog && item.catalogPrice && item.catalogPrice > 0) {
              const discount = ((item.catalogPrice - newPrice) / item.catalogPrice) * 100
              updateItem(item.id, { priceNetto: newPrice, discountPercent: Math.max(0, discount) })
            } else if (!isCatalog && item.purchasePrice && item.purchasePrice > 0) {
              const margin = ((newPrice - item.purchasePrice) / item.purchasePrice) * 100
              updateItem(item.id, { priceNetto: newPrice, marginPercent: Math.max(0, margin) })
            } else {
              updateItem(item.id, { priceNetto: newPrice })
            }
          }}
        />
      </td>
      <td className="px-3 py-2 w-28 text-right text-sm font-medium tabular-nums">
        {formatPrice(item.priceNetto * item.quantity)} zł
      </td>
      <td className="px-3 py-2 w-28">
        {isCatalog && item.catalogPrice && item.catalogPrice > 0 ? (
          /* RABAT — produkt z katalogu */
          <div className="flex items-center gap-0.5">
            <span className="text-xs text-gray-400 mr-0.5">-</span>
            <input
              type="number"
              value={item.discountPercent !== undefined ? item.discountPercent.toFixed(1) : '0.0'}
              onChange={(e) => {
                const discount = parseFloat(e.target.value)
                if (!isNaN(discount) && item.catalogPrice) {
                  const clamped = Math.max(0, Math.min(100, discount))
                  const newPrice = Math.round(item.catalogPrice * (1 - clamped / 100))
                  updateItem(item.id, { priceNetto: newPrice, discountPercent: clamped })
                }
              }}
              step="0.1"
              min="0"
              max="100"
              className={`w-14 text-xs text-right border border-gray-200 rounded px-1.5 py-1 tabular-nums ${
                (item.discountPercent ?? 0) > 0 ? 'text-red-600' : 'text-gray-500'
              }`}
            />
            <span className="text-xs text-gray-400">%</span>
          </div>
        ) : !isCatalog && item.purchasePrice && item.purchasePrice > 0 ? (
          /* MARŻA — produkt z palca / import */
          <div className="flex items-center gap-0.5">
            <span className="text-xs text-gray-400 mr-0.5">+</span>
            <input
              type="number"
              value={item.marginPercent !== undefined ? item.marginPercent.toFixed(1) : '0.0'}
              onChange={(e) => {
                const margin = parseFloat(e.target.value)
                if (!isNaN(margin) && item.purchasePrice) {
                  const clamped = Math.max(0, margin)
                  const newPrice = Math.round(item.purchasePrice * (1 + clamped / 100))
                  updateItem(item.id, { priceNetto: newPrice, marginPercent: clamped })
                }
              }}
              step="0.1"
              min="0"
              className={`w-14 text-xs text-right border border-gray-200 rounded px-1.5 py-1 tabular-nums ${
                (item.marginPercent ?? 0) >= 10 ? 'text-green-600' : 'text-orange-600'
              }`}
            />
            <span className="text-xs text-gray-400">%</span>
          </div>
        ) : (
          <span className="text-xs text-gray-400 text-center block">—</span>
        )}
      </td>
      <td className="px-3 py-2 w-10">
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-600"
          title="Usuń"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default function QuoteItemsTable() {
  const items = useQuoteStore((s) => s.items)

  /**
   * Koncesje pobieramy dla wszystkich pozycji naraz, a nie przy dodawaniu —
   * dzięki temu podpowiedź działa też przy ofercie wczytanej do edycji,
   * skopiowanej z innej i przy pozycjach z importu PDF. Jedno zapytanie na
   * zmianę zestawu numerów katalogowych.
   */
  const [koncesje, setKoncesje] = useState<Record<string, TrafienieKoncesji[]>>({})
  const numery = items.map((i) => i.partNumber).filter(Boolean).join(',')

  /**
   * Stan u dystrybutorów — tak samo raz dla wszystkich pozycji. Poprzedni
   * wynik zostaje na ekranie, dopóki nie przyjdzie nowy; „sprawdzam” widać
   * tylko przy numerze, o którym jeszcze nic nie wiemy.
   */
  const [dostepnosc, setDostepnosc] = useState<Record<string, Dostepnosc>>({})
  const [sprawdzamStan, setSprawdzamStan] = useState(false)

  useEffect(() => {
    if (!numery) {
      setDostepnosc({})
      return
    }
    let aktualne = true
    setSprawdzamStan(true)
    fetch(`/api/admin/dostepnosc?pn=${encodeURIComponent(numery)}`)
      .then((r) => r.json())
      .then((d) => {
        if (aktualne) setDostepnosc((d?.wgPn ?? {}) as Record<string, Dostepnosc>)
      })
      .catch(() => {
        /* bez stanu tabela działa dalej */
      })
      .finally(() => {
        if (aktualne) setSprawdzamStan(false)
      })
    return () => {
      aktualne = false
    }
  }, [numery])

  useEffect(() => {
    if (!numery) {
      setKoncesje({})
      return
    }
    let aktualne = true
    fetch(`/api/admin/koncesje?pn=${encodeURIComponent(numery)}`)
      .then((r) => r.json())
      .then((d) => {
        if (!aktualne) return
        setKoncesje((d?.wgPn ?? {}) as Record<string, TrafienieKoncesji[]>)
      })
      .catch(() => {
        /* brak podpowiedzi to nie powód, żeby psuć tabelę */
      })
    return () => {
      aktualne = false
    }
  }, [numery])

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        Brak pozycji — dodaj produkty z katalogu, ręcznie lub z importu PDF
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-10">Lp.</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nazwa</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20">Ilość</th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28">Zakup</th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-32">Cena netto</th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28">Razem netto</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-28">Rabat/Marża</th>
            <th className="px-3 py-2 w-10" />
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <ItemRow
              key={item.id}
              item={item}
              index={i}
              koncesje={item.partNumber ? koncesje[item.partNumber] : undefined}
              dostepnosc={item.partNumber ? dostepnosc[item.partNumber] : undefined}
              sprawdzamStan={sprawdzamStan}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
