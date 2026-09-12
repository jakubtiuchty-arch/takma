import Image from 'next/image'
import Link from 'next/link'
import { Product, products } from '@/data/products'
import BundleAddButton from './BundleAddButton'

const fmt = (v: number) => v.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const fmtInt = (v: number) => Math.round(v).toLocaleString('pl-PL')

/** Jednostka składnika: karty plastikowe sprzedajemy na opakowania po 100 szt. */
function unitLabel(p: Product, qty: number) {
  return p.subcategoryIds?.includes('karty-plastikowe') ? `${qty} opak. (${qty * 100} kart)` : `${qty} szt.`
}

/** Krótka nazwa składnika w banerze: bez PN-u w nawiasie i bez pauzy z liczbą wydruków. */
function shortName(p: Product) {
  return p.name.replace(/\s*\([^)]*\)\s*$/, '').replace(/ — /, ', ')
}

/**
 * Niski baner zestawu startowego na karcie drukarki kart, między tabelą wariantów a opisem.
 * Obraz z Higgsfield (produkty 1:1 z renderów), cały tekst w HTML. Jeden przycisk: zestaw do koszyka.
 */
export default function BundleBanner({ bundle, image }: { bundle: Product; image: string }) {
  const items = (bundle.bundleItems ?? [])
    .map((i) => {
      const p = products.find((x) => x.id === i.productId)
      return p ? { product: p, quantity: i.quantity } : null
    })
    .filter((x): x is { product: Product; quantity: number } => x !== null)
  if (!items.length || !bundle.priceFrom) return null
  const separately = items.reduce((s, i) => s + (i.product.priceFrom ?? 0) * i.quantity, 0)
  const saving = separately - bundle.priceFrom
  const pn = bundle.specifications.find((s) => s.name === 'Part Number')?.value

  return (
    <section id="zestaw-startowy" aria-labelledby="zestaw-startowy-h" className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
        <div className="relative min-w-0 aspect-[16/9] md:aspect-auto md:h-full md:min-h-[200px] bg-white">
          <Image
            src={image}
            alt={`${bundle.name}: drukarka, taśma i karty`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="min-w-0 p-5 sm:p-6 flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Zestaw startowy</p>
          <h2 id="zestaw-startowy-h" className="mt-1 text-xl sm:text-2xl font-bold text-gray-900 leading-tight text-balance">
            Drukuj identyfikatory od pierwszego dnia
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Drukarka jest sprzedawana bez taśmy i kart. Zestaw zawiera taśmę na {fmtInt(300)} stron w kolorze, czyli do {fmtInt(150)} kart z nadrukiem po obu stronach, i opakowanie {fmtInt(100)} kart.
          </p>

          <ul className="mt-4 border-y border-slate-100 divide-y divide-slate-100 text-sm">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex items-baseline justify-between gap-4 py-2 min-w-0">
                <Link href={`/produkt/${product.slug}`} className="min-w-0 text-gray-900 hover:text-blue-700">
                  {shortName(product)}
                </Link>
                <span className="shrink-0 text-gray-500 tabular-nums">{unitLabel(product, quantity)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <div className="min-w-0">
              <p className="text-2xl font-bold text-gray-900 tabular-nums leading-none">
                {fmt(bundle.priceFrom)} zł <span className="text-sm font-normal text-gray-500">netto</span>
              </p>
              <p className="mt-1.5 text-xs text-gray-500 tabular-nums">
                {saving > 0 && (
                  <>
                    zamiast <span className="line-through">{fmt(separately)} zł</span>, <span className="font-semibold text-green-700">oszczędzasz {fmt(saving)} zł</span>
                    <span className="mx-1.5 text-gray-300">·</span>
                  </>
                )}
                {fmt(bundle.priceFrom * 1.23)} zł brutto
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <BundleAddButton
                bundle={{
                  id: bundle.id,
                  name: bundle.name,
                  slug: bundle.slug,
                  image: bundle.images[0],
                  partNumber: pn,
                  priceNetto: bundle.priceFrom,
                  categoryId: bundle.categoryId,
                }}
              />
              <Link
                href={`/produkt/${bundle.slug}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-700 underline underline-offset-4 whitespace-nowrap"
              >
                Szczegóły
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
