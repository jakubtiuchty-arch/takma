import Link from 'next/link'
import type { EndOfSaleInfo } from '@/data/end-of-sale'

// Południe czasu polskiego — data nie przeskoczy na sąsiedni dzień przy renderze w UTC;
// twarda spacja trzyma „r.” przy roku.
const fmtDate = (iso: string) =>
  `${new Date(`${iso}T12:00:00+01:00`).toLocaleDateString('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw',
  })}\u00a0r.`

/**
 * Boks o końcu sprzedaży modelu ogłoszonym przez producenta.
 * Bez zależności od bieżącej daty — karta bywa renderowana statycznie.
 */
export default function EndOfSaleNotice({ info }: { info: EndOfSaleInfo }) {
  const lastOrder = fmtDate(info.lastOrderDate)
  const rows = [
    { label: 'Ostatnie zamówienia u producenta', value: lastOrder },
    { label: 'Ostatnie dostawy od producenta', value: fmtDate(info.lastShipDate) },
    { label: 'Serwis i wsparcie techniczne', value: `do ${fmtDate(info.serviceEndDate)}` },
  ]

  return (
    <aside aria-label="Koniec sprzedaży" className="mx-3 sm:mx-5 mb-6 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:px-6">
      <p className="flex items-center gap-2 text-xs font-semibold text-gray-600">
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
        Koniec sprzedaży
      </p>
      <p className="mt-1.5 text-base font-bold leading-snug text-gray-900">{info.headline}</p>

      <dl className="mt-3 grid grid-cols-1 gap-x-4 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
        {rows.map(row => (
          <div key={row.label} className="contents">
            <dt className="pt-2 text-gray-600 sm:pb-2">{row.label}</dt>
            <dd className="pb-2 font-semibold text-gray-900 tabular-nums sm:pt-2 sm:text-right">{row.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-2 border-t border-gray-100 pt-3 text-sm leading-relaxed text-gray-600">
        Po {lastOrder} sprzedajemy {info.model} do wyczerpania zapasów.
      </p>
      {info.successor ? (
        <p className="mt-1.5 text-sm text-gray-600">
          Następca:{' '}
          <Link
            href={`/produkt/${info.successor.slug}`}
            className="font-semibold text-primary-600 hover:text-primary-800 underline decoration-primary-300"
          >
            {info.successor.name} <span aria-hidden="true">→</span>
          </Link>
        </p>
      ) : null}
    </aside>
  )
}
