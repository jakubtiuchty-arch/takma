import Image from 'next/image'
import Link from 'next/link'
import { Product, products } from '@/data/products'

const fmt = (v: number) => v.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export type BundleItem = { product: Product; quantity: number; price: number; label: string; image: string; note?: string }

/** Składniki zestawu z cenami. Gdy składnik ma wskazany wariant (np. CardStudio 2.0 Standard),
 *  bierzemy cenę i nazwę tego wariantu, a nie najtańszego z karty. */
export function resolveItems(bundle: Product): BundleItem[] {
  return (bundle.bundleItems ?? [])
    .map((i): BundleItem | null => {
      const p = products.find((x) => x.id === i.productId)
      if (!p) return null
      const variant = i.variantPn ? p.variants?.find((v) => v.partNumber === i.variantPn) : undefined
      return {
        product: p,
        quantity: i.quantity,
        price: variant?.priceFrom ?? p.priceFrom ?? 0,
        label: variant?.name ? `${p.manufacturerId === 'zebra' ? 'Zebra ' : ''}${variant.name}` : p.name,
        image: i.image ?? p.images[0],
        // Własny opis składnika: opis karty potrafi wymieniać wszystkie wersje naraz,
        // a w zestawie jest jedna konkretna.
        note: i.note,
      }
    })
    .filter((x): x is BundleItem => x !== null)
}

function sumSeparately(items: BundleItem[]) {
  return items.reduce((s, i) => s + i.price * i.quantity, 0)
}

/** Sekcja „Co jest w zestawie” na karcie samego zestawu: składniki ze zdjęciami, ceny osobno i różnica. */
export function BundleContents({ bundle }: { bundle: Product }) {
  const items = resolveItems(bundle)
  if (!items.length) return null
  const separately = sumSeparately(items)
  const saving = bundle.priceFrom ? separately - bundle.priceFrom : 0
  return (
    <section id="w-zestawie">
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Co jest w zestawie</h2>
        <p className="text-sm text-gray-500">
          {bundle.bundleFactory ? 'Jeden numer katalogowy, jedno pudełko od producenta.' : 'Trzy pozycje, jedna cena, jedna przesyłka.'}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {items.map(({ product, quantity, price, label, image, note }) => (
          <article key={product.id} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
            <Link href={`/produkt/${product.slug}`} className="relative block h-36 w-full overflow-hidden rounded-lg bg-white">
              <Image src={image} alt={label} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-contain p-3" />
            </Link>
            <div className="mt-3 flex items-start justify-between gap-3">
              <Link href={`/produkt/${product.slug}`} className="font-semibold text-gray-900 leading-snug hover:text-blue-700">
                {label}
              </Link>
              <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-gray-700">{product.subcategoryIds?.includes('karty-plastikowe') ? `${quantity} opak. (${quantity * 100} kart)` : `${quantity} szt.`}</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{note ?? product.shortDescription}</p>
            {price ? (
              <p className="mt-auto pt-3 text-sm text-gray-500">
                <span className="font-medium text-gray-900 tabular-nums">{fmt(price * quantity)} zł</span> netto
              </p>
            ) : null}
          </article>
        ))}
      </div>
      {bundle.bundleExtras?.length ? (
        <p className="mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-700 sm:px-6">
          <span className="font-semibold text-gray-900">W tym samym pudełku:</span>{' '}
          {bundle.bundleExtras.join(' · ')}
        </p>
      ) : null}
      {bundle.priceFrom ? (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-6 grid gap-4 sm:grid-cols-3 sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">{bundle.bundleFactory ? 'Kupione osobno' : 'Suma osobno'}</p>
            <p className="mt-0.5 text-lg text-gray-500 line-through tabular-nums">{fmt(separately)} zł</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Cena zestawu</p>
            <p className="mt-0.5 text-2xl font-bold text-gray-900 tabular-nums">
              {fmt(bundle.priceFrom)} zł <span className="text-sm font-normal text-gray-500">netto</span>
            </p>
          </div>
          <div className="sm:justify-self-end">
            {saving > 0 ? (
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 tabular-nums">
                Oszczędzasz {fmt(saving)} zł
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
