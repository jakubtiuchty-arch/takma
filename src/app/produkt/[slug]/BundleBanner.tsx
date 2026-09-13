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
export default function BundleBanner({ bundle, image, compact }: { bundle: Product; image: string; compact?: boolean }) {
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
  // Liczby w zdaniu pod nagłówkiem biorą się ze składników zestawu, nie z kodu:
  // taśma na 200 wydruków (Pronto100) i na 300 (Magicard 300 / 600) dają inne zdanie.
  const ribbon = items.find((i) => i.product.subcategoryIds?.includes('tasmy-do-drukarek-kart'))
  const printer = items.find((i) => i.product.categoryId === 'drukarki-kart')
  const ribbonPrints = (() => {
    const m = (ribbon?.product.specifications.find((s) => s.name === 'Wydajność')?.value ?? '').replace(/\s/g, '').match(/\d+/)
    return m ? parseInt(m[0], 10) : null
  })()
  const cardsCount = items.find((i) => i.product.subcategoryIds?.includes('karty-plastikowe'))?.quantity
  const isDuplex = /dwustronn/i.test(printer?.product.specifications.find((s) => s.name === 'Druk jedno-/dwustronny')?.value ?? '')
  const cartBundle = { id: bundle.id, name: bundle.name, slug: bundle.slug, image: bundle.images[0], partNumber: pn, priceNetto: bundle.priceFrom, categoryId: bundle.categoryId }

  if (compact) {
    // Wariant niski: jeden wiersz — obraz, tekst ze składem w jednej linii, cena i przycisk
    return (
      <section id="zestaw-startowy" aria-labelledby="zestaw-startowy-h" className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,17rem)_1fr_auto] md:items-center">
          <div className="relative min-w-0 aspect-[16/9] md:aspect-auto md:h-full md:min-h-[150px] bg-white">
            <Image src={image} alt={`${bundle.name}: drukarka, taśma i karty`} fill sizes="(min-width: 768px) 17rem, 100vw" className="object-contain" />
          </div>
          <div className="min-w-0 px-5 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Zestaw startowy</p>
            <h2 id="zestaw-startowy-h" className="mt-0.5 text-lg font-bold text-gray-900 leading-tight text-balance">
              Drukuj od pierwszego dnia
            </h2>
            <p className="mt-1.5 text-sm text-gray-700">
              {items.map(({ product, quantity }, i) => (
                <span key={product.id}>
                  {i > 0 && <span className="mx-1.5 text-gray-300">·</span>}
                  <Link href={`/produkt/${product.slug}`} className="hover:text-blue-700 hover:underline underline-offset-2">
                    {shortName(product)}
                  </Link>
                  {product.subcategoryIds?.includes('karty-plastikowe') && quantity === 1 ? '' : quantity > 1 ? ` ×${quantity}` : ''}
                </span>
              ))}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Drukarka jest sprzedawana bez taśmy i kart.{ribbonPrints ? ` Taśma wystarcza na ${fmtInt(ribbonPrints)} stron w kolorze.` : ''}
            </p>
          </div>
          <div className="flex flex-col gap-2 border-t border-slate-100 px-5 py-4 sm:px-6 md:border-t-0 md:border-l md:items-end md:text-right">
            <p className="text-2xl font-bold text-gray-900 tabular-nums leading-none">
              {fmt(bundle.priceFrom)} zł <span className="text-sm font-normal text-gray-500">netto</span>
            </p>
            <p className="text-xs text-gray-500 tabular-nums">
              {saving > 0 && <>zamiast <span className="line-through">{fmt(separately)} zł</span> · <span className="font-semibold text-green-700">oszczędzasz {fmt(saving)} zł</span></>}
            </p>
            <div className="mt-1 flex items-center gap-4 md:justify-end">
              <BundleAddButton bundle={cartBundle} />
              <Link href={`/produkt/${bundle.slug}`} className="text-sm font-medium text-gray-700 hover:text-blue-700 underline underline-offset-4 whitespace-nowrap">
                Szczegóły
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
            Drukuj od pierwszego dnia
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Drukarka jest sprzedawana bez taśmy i kart.
            {ribbonPrints ? ` Zestaw zawiera taśmę na ${fmtInt(ribbonPrints)} stron w kolorze${isDuplex ? `, czyli do ${fmtInt(ribbonPrints / 2)} kart z nadrukiem po obu stronach` : ''}` : ''}
            {ribbonPrints && cardsCount ? ` i opakowanie ${fmtInt(cardsCount * 100)} kart.` : ribbonPrints ? '.' : ''}
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
