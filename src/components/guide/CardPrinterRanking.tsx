import Image from 'next/image'
import Link from 'next/link'
import { products, type Product } from '@/data/products'
import { cardPrinterVerdicts, cardPrinterUseCases } from '@/data/rankings/drukarki-kart'

/** Drukarki kart z katalogu (bez zestawów), od najtańszej. Nowy produkt w kategorii trafia tu automatycznie. */
export function cardPrinters(): Product[] {
  return products
    .filter((p) => p.categoryId === 'drukarki-kart' && !p.bundleItems)
    .sort((a, b) => (a.priceFrom ?? Infinity) - (b.priceFrom ?? Infinity))
}

/** Slugi do odświeżania cen na żywo (GuideLivePrices). */
export function cardPrinterRankingSlugs(): string[] {
  return cardPrinters().map((p) => p.slug)
}

const spec = (p: Product, ...names: string[]) => {
  for (const n of names) {
    const s = p.specifications.find((x) => x.name === n)
    if (s) return s.value
  }
  return '—'
}

const fmtPrice = (v?: number) => (v ? `od ${Math.round(v).toLocaleString('pl-PL')} zł` : 'cena na zapytanie')

function PriceSpan({ p }: { p: Product }) {
  return (
    <span data-live-price={p.slug} className="font-semibold text-gray-900 whitespace-nowrap">
      {fmtPrice(p.priceFrom)}
    </span>
  )
}

/** Tabela porównawcza i karty z ocenami. Wartości w tabeli: skrót z konfiguracji rankingu, a gdy go brak — specyfikacja produktu. */
export function CardPrinterRankingTable() {
  const list = cardPrinters()
  return (
    <div className="not-prose">
      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-200">
              <th className="py-2 pr-3 font-semibold">Model</th>
              <th className="py-2 pr-3 font-semibold">Druk</th>
              <th className="py-2 pr-3 font-semibold">Kolor</th>
              <th className="py-2 pr-3 font-semibold">Kodowanie</th>
              <th className="py-2 pr-3 font-semibold">Łączność</th>
              <th className="py-2 pr-3 font-semibold">Zabezpieczenia</th>
              <th className="py-2 font-semibold">Cena netto</th>
            </tr>
          </thead>
          <tbody>
            {list.map((p) => {
              const v = cardPrinterVerdicts.find((x) => x.productId === p.id)
              return (
                <tr key={p.id} className="border-b border-gray-100 align-top">
                  <td className="py-2.5 pr-3 font-semibold text-gray-900 whitespace-nowrap">
                    <Link href={`/produkt/${p.slug}`} className="hover:text-primary-600 hover:underline">{p.name}</Link>
                  </td>
                  <td className="py-2.5 pr-3 text-gray-700">{v?.table.druk ?? spec(p, 'Druk jedno-/dwustronny')}</td>
                  <td className="py-2.5 pr-3 text-gray-700 whitespace-nowrap">{v?.table.predkosc ?? spec(p, 'Prędkość druku (YMCKO)', 'Prędkość druku kolorowego')}</td>
                  <td className="py-2.5 pr-3 text-gray-700">{v?.table.kodowanie ?? spec(p, 'Kodowanie (opcja)', 'Kodowanie')}</td>
                  <td className="py-2.5 pr-3 text-gray-700">{v?.table.lacznosc ?? spec(p, 'Łączność (standard)', 'Łączność')}</td>
                  <td className="py-2.5 pr-3 text-gray-700">{v?.table.zabezpieczenia ?? spec(p, 'Zabezpieczenia', 'Zabezpieczenia wizualne')}</td>
                  <td className="py-2.5"><PriceSpan p={p} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">Ceny netto za wersję podstawową, odświeżane z cennika sklepu; gwarancja producenta 3 lata dla każdego modelu.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {list.map((p) => {
          const v = cardPrinterVerdicts.find((x) => x.productId === p.id)
          return (
            <article key={p.id} className="rounded-xl border border-gray-200 bg-white p-4 flex flex-col">
              <div className="flex gap-4">
                <Link href={`/produkt/${p.slug}`} className="relative w-24 h-24 shrink-0 rounded-lg bg-white overflow-hidden">
                  {p.images[0] && <Image src={p.images[0]} alt={p.imageDescriptions?.[0] ?? p.name} fill sizes="96px" className="object-contain p-1" />}
                </Link>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    <Link href={`/produkt/${p.slug}`} className="hover:text-primary-600">{p.name}</Link>
                  </h3>
                  {v ? <p className="mt-1 text-sm text-gray-600">Najlepsza do: {v.bestFor}</p> : <p className="mt-1 text-sm text-gray-500">Ocena w przygotowaniu</p>}
                  <p className="mt-1 text-sm"><PriceSpan p={p} /> <span className="text-gray-500">netto</span></p>
                </div>
              </div>
              {v && (
                <>
                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    {v.pros.map((t) => <li key={t} className="flex gap-2"><span className="text-green-700 font-semibold shrink-0">+</span><span>{t}</span></li>)}
                    {v.cons.map((t) => <li key={t} className="flex gap-2"><span className="text-gray-400 font-semibold shrink-0">–</span><span>{t}</span></li>)}
                  </ul>
                  <p className="mt-3 text-sm text-gray-800 text-justify hyphens-auto">{v.verdict}</p>
                </>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

/** Rekomendacje według zastosowania; model i alternatywa z katalogu, uzasadnienie z konfiguracji. */
export function CardPrinterUseCases() {
  return (
    <div className="not-prose space-y-4">
      {cardPrinterUseCases.map((u) => {
        const p = products.find((x) => x.id === u.productId)
        const alt = u.alternativeId ? products.find((x) => x.id === u.alternativeId) : undefined
        if (!p) return null
        return (
          <div key={u.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-base font-semibold text-gray-900">{u.title}</h3>
            <p className="mt-1 text-sm text-gray-700">
              <Link href={`/produkt/${p.slug}`} className="font-semibold text-primary-700 hover:underline">{p.name}</Link>
              {' '}(<PriceSpan p={p} /> netto): {u.reason}.
              {alt && u.alternativeReason && (
                <> Alternatywa: <Link href={`/produkt/${alt.slug}`} className="font-semibold text-primary-700 hover:underline">{alt.name}</Link>, {u.alternativeReason}.</>
              )}
            </p>
          </div>
        )
      })}
    </div>
  )
}
