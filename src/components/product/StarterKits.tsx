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
 * Komplet na pierwszy wydruk (audyt ZD421t, ZD-10): dwie sprawdzone pary etykieta + taśma
 * z konkretnymi PN-ami, cenami live z magazynu i jednym przyciskiem do koszyka.
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
    <section id="komplet" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Komplet na pierwszy wydruk</h2>
      <p className="text-gray-600 mb-6">
        Drukarka {printerName} jest sprzedawana bez materiałów. Dwa zestawy etykieta + taśma dobrane do niej rozmiarem, gilzą i długością rolki.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {resolved.map(kit => {
          const prices = kit.rows.map(r => livePrice(r.variant.partNumber))
          const complete = prices.every(p => p !== undefined)
          const total = complete ? prices.reduce((a, p) => a + (p ?? 0), 0) : undefined
          const allInCart = mounted && kit.rows.every(r => isInCart(cartId(r)))
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
            <article key={kit.title} className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col">
              {kit.image && (
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image src={kit.image} alt={kit.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-900">{kit.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{kit.description}</p>
              {kit.facts && kit.facts.length > 0 && (
                <ul className="mt-3 mb-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
                  {kit.facts.map(f => (
                    <li key={f} className="inline-flex items-center gap-1.5"><CheckIcon size={14} className="text-green-600" />{f}</li>
                  ))}
                </ul>
              )}
              <ul className="divide-y divide-slate-100 border-y border-slate-100">
                {kit.rows.map((r, i) => {
                  const size = r.variant.attributes['Rozmiar'] ?? r.variant.name ?? ''
                  const href = `/produkt/${r.product.slug}/${variantSizeSlug(r.variant)}/${r.variant.partNumber}`
                  const img = r.product.images[0]
                  return (
                    <li key={r.variant.partNumber} className="flex items-center gap-3 py-3">
                      <div className="relative h-12 w-12 shrink-0 bg-white">
                        {img && !img.includes('placeholder') && <Image src={img} alt="" fill className="object-contain" sizes="48px" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link href={href} className="text-sm font-semibold text-gray-900 hover:text-primary-700 leading-snug block">
                          {r.product.name.replace(/^(Etykiety termotransferowe|Taśma termotransferowa) Zebra /, '')} {size}
                        </Link>
                        <p className="text-xs font-mono text-gray-500 whitespace-nowrap">PN {r.variant.partNumber}</p>
                      </div>
                      <div className="text-right text-sm tabular-nums whitespace-nowrap shrink-0">
                        {loading ? <span className="inline-block h-4 w-16 bg-slate-100 rounded animate-pulse" />
                          : prices[i] !== undefined ? <><strong className="text-gray-900">{fmt(prices[i]!)} zł</strong> <span className="text-gray-500">netto</span></>
                          : <span className="text-gray-400">na zapytanie</span>}
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
                <p className="text-sm text-gray-600">
                  Razem{' '}
                  {loading ? <span className="inline-block h-4 w-20 bg-slate-100 rounded animate-pulse align-middle" />
                    : total !== undefined ? <strong className="text-gray-900 text-base tabular-nums">{fmt(total)} zł netto</strong>
                    : <span className="text-gray-400">część pozycji na zapytanie</span>}
                </p>
                <button
                  type="button"
                  onClick={addKit}
                  disabled={!complete || loading}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    allInCart ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-500'
                  }`}
                >
                  {allInCart ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
                  {allInCart ? 'Komplet w koszyku' : 'Dodaj komplet do koszyka'}
                </button>
              </div>
              {/* Inny rozmiar, materiał albo nakład: zapytanie z gotową treścią, doradca odpisuje z propozycją */}
              <div className="mt-3">
                <AskAboutProductButton
                  productName={printerName}
                  productSlug={printerSlug}
                  label="Zaproponuj inne warianty"
                  initialMessage={`Dzień dobry, proszę o propozycję innego kompletu etykieta + taśma do drukarki ${printerName} niż „${kit.title}”. Potrzebuję etykiet o wymiarach ... mm, na ... (papier / folia), w nakładzie ok. ... szt. miesięcznie.`}
                  buttonClassName="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-slate-400 transition-colors"
                />
              </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
