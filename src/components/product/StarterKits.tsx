'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products, variantSizeSlug, type Product, type ProductVariant } from '@/data/products'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import { useCartStore } from '@/store/cartStore'
import { PlusIcon, CheckIcon } from '@/components/ui/Icons'
import AskAboutProductButton from '@/app/produkt/[slug]/AskAboutProductButton'

/**
 * Komplet na pierwszy wydruk (audyt ZD421t, ZD-10): dwie pary etykieta + taśma z cenami live
 * i jednym przyciskiem do koszyka. To dodatek pod wyborem wariantu, nie osobna sekcja jak opis:
 * zwarta karta z miniaturą, jedną linią pozycji i jedną liczbą wydruków.
 * Dane kompletów siedzą w `Product.starterKits`; tu tylko rozwiązujemy PN → produkt/wariant.
 */
type Kit = { title: string; description: string; partNumbers: string[]; image?: string; facts?: string[] }
type Row = { product: Product; variant: ProductVariant }

function resolve(pn: string): Row | null {
  for (const product of products) {
    const variant = product.variants?.find(v => v.partNumber === pn)
    if (variant) return { product, variant }
  }
  return null
}

const fmt = (v: number) => v.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const fmtInt = (v: number) => Math.round(v).toLocaleString('pl-PL')
const isLabelRow = (r: Row) => !!r.product.subcategoryIds?.some(id => id.startsWith('etykiety'))
const labelsPerRoll = (r: Row) => parseInt((r.variant.attributes['Etykiet w rolce'] ?? '').replace(/\s/g, ''), 10) || null
const labelHeightMm = (r: Row) => { const m = (r.variant.attributes['Rozmiar'] ?? '').match(/\d+\s*[×x]\s*(\d+)/); return m ? parseInt(m[1], 10) : null }
const ribbonLengthM = (r: Row) => parseInt((r.variant.attributes['Długość'] ?? '').replace(/\s/g, ''), 10) || null
/** Ile etykiet o danej wysokości zadrukuje rolka taśmy (odstęp między etykietami 3 mm). */
const ribbonPrints = (lengthM: number, labelH: number) => Math.floor((lengthM * 1000) / (labelH + 3))
const shortName = (r: Row) => `${r.product.name.replace(/^(Etykiety termotransferowe|Taśma termotransferowa) Zebra /, '')} ${(r.variant.attributes['Rozmiar'] ?? r.variant.name ?? '').replace(/\s*mm\/m.*$/, ' mm')}`.trim()

export default function StarterKits({ kits, printerName, printerSlug }: { kits: Kit[]; printerName: string; printerSlug: string }) {
  const resolved = kits.map(k => ({ ...k, rows: k.partNumbers.map(resolve).filter((r): r is Row => r !== null) })).filter(k => k.rows.length > 0)
  const allPns = resolved.flatMap(k => k.rows.map(r => r.variant.partNumber))
  const { stockData, loading } = useStockData(allPns)
  const { addItem, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (resolved.length === 0) return null

  const livePrice = (pn: string): number | undefined => {
    const s = stockData.get(pn)
    return s && (s.found || s.totalStock > 0) && s.price ? s.price : undefined
  }
  const cartId = (r: Row) => `${r.product.slug}__${r.variant.partNumber}`

  return (
    <section id="komplet">
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
        <h2 className="text-lg font-bold text-gray-900">Komplet na pierwszy wydruk</h2>
        <p className="text-sm text-gray-500">W pudełku drukarki {printerName} nie ma etykiet ani taśmy.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {resolved.map(kit => {
          const prices = kit.rows.map(r => livePrice(r.variant.partNumber))
          const complete = prices.every(p => p !== undefined)
          const total = complete ? prices.reduce((a, p) => a + (p ?? 0), 0) : undefined
          const allInCart = mounted && kit.rows.every(r => isInCart(cartId(r)))
          const labelRow = kit.rows.find(isLabelRow)
          const ribbonRow = kit.rows.find(r => !isLabelRow(r))
          const labelsInRoll = labelRow ? labelsPerRoll(labelRow) : null
          const labelH = labelRow ? labelHeightMm(labelRow) : null
          const ribbonLen = ribbonRow ? ribbonLengthM(ribbonRow) : null
          const prints = ribbonLen && labelH ? ribbonPrints(ribbonLen, labelH) : null
          const kitPrints = labelsInRoll && prints ? Math.min(labelsInRoll, prints) : (labelsInRoll ?? prints)
          const ribbonsForRoll = labelsInRoll && prints && prints < labelsInRoll ? Math.ceil(labelsInRoll / prints) : null
          const addKit = () => {
            kit.rows.forEach((r, i) => {
              if (isInCart(cartId(r))) return
              addItem({
                id: cartId(r),
                name: `${r.product.name} ${r.variant.attributes['Rozmiar'] ?? r.variant.name ?? ''}`.trim(),
                slug: r.product.slug,
                image: r.product.images[0],
                partNumber: r.variant.partNumber,
                priceNetto: prices[i],
                categoryId: 'materialy-eksploatacyjne',
              })
            })
          }
          return (
            <article key={kit.title} className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {kit.image && (
                <div className="relative w-full h-32 sm:w-32 sm:h-32 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                  <Image src={kit.image} alt={kit.title} fill className="object-cover" sizes="(min-width: 640px) 128px, 100vw" />
                </div>
              )}
              <div className="min-w-0 flex-1 flex flex-col">
                {/* Tytuł + jedno zdanie o zastosowaniu (fakty są w tym zdaniu, nie w osobnej linii) */}
                <h3 className="font-bold text-gray-900 leading-tight">{kit.title}</h3>
                <p className="text-sm text-gray-600 mt-0.5">{kit.facts?.length ? kit.facts.join(' · ') : kit.description}</p>
                {/* Dwie pozycje jako czytelne wiersze: nazwa i jedna liczba; PN w dymku */}
                <ul className="mt-3 space-y-1">
                  {kit.rows.map(r => (
                    <li key={r.variant.partNumber} className="flex items-baseline justify-between gap-3 text-sm">
                      <Link
                        href={`/produkt/${r.product.slug}/${variantSizeSlug(r.variant)}/${r.variant.partNumber}`}
                        title={`PN ${r.variant.partNumber}`}
                        className="font-medium text-gray-900 hover:text-primary-700 truncate"
                      >
                        {shortName(r)}
                      </Link>
                      <span className="text-gray-500 whitespace-nowrap tabular-nums">
                        {isLabelRow(r) && labelsInRoll ? `${fmtInt(labelsInRoll)} etykiet` : !isLabelRow(r) && ribbonLen ? `rolka ${ribbonLen} m` : ''}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex items-end justify-between gap-3 flex-wrap">
                  <div className="tabular-nums">
                    {loading ? <span className="inline-block h-6 w-24 bg-slate-100 rounded animate-pulse" />
                      : total !== undefined ? <p className="text-xl font-bold text-gray-900 leading-none">{fmt(total)} zł <span className="text-sm font-normal text-gray-500">netto</span></p>
                      : <p className="text-sm text-gray-400">część pozycji na zapytanie</p>}
                    {kitPrints ? <p className="mt-1 text-xs text-gray-500">wystarczy na ok. {fmtInt(kitPrints)} wydruków{ribbonsForRoll ? `, na całą rolkę ${ribbonsForRoll} rolki taśmy` : ''}</p> : null}
                  </div>
                  <div className="flex items-center gap-3">
                    <AskAboutProductButton
                      productName={printerName}
                      productSlug={printerSlug}
                      label="Inne warianty"
                      arrow
                      initialMessage={`Dzień dobry, proszę o propozycję innego kompletu etykieta + taśma do drukarki ${printerName} niż „${kit.title}”. Potrzebuję etykiet o wymiarach ... mm, na ... (papier / folia), w nakładzie ok. ... szt. miesięcznie.`}
                      buttonClassName="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-600 hover:text-primary-700"
                    />
                    <button
                      type="button"
                      onClick={addKit}
                      disabled={!complete || loading}
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                        allInCart ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-500'
                      }`}
                    >
                      {allInCart ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
                      {allInCart ? 'W koszyku' : 'Dodaj komplet'}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
