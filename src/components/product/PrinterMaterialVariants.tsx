'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products, variantSizeSlug, type Product, type ProductVariant } from '@/data/products'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import { useCartStore } from '@/store/cartStore'
import { Badge } from '@/components/ui'
import { ArrowRightIcon, PlusIcon, CheckIcon } from '@/components/ui/Icons'
import type { StockInfo } from '@/lib/ingram'

/**
 * Konkretne WARIANTY materiałów (etykiety TT papierowe/foliowe, taśmy) dobrane do
 * drukarki — z rozmiarem, live ceną/dostępnością i dodaniem do koszyka. Filtr szerokości
 * głowicy. Odpowiednik PrinterCompatibleLabels, ale dla podanych serii (nie hardkod DT).
 */

function cleanTitle(name: string): string {
  return name
    .replace(/^Etykiety\s+\w+\s+Zebra\s+/i, '')
    .replace(/^Taśma\s+termotransferowa\s+Zebra\s+/i, '')
    .replace(/^Etykiety\s+Zebra\s+/i, '')
    .replace(/^Zebra\s+/i, '')
}

/** Szerokość wariantu w mm: etykieta z 'Rozmiar', taśma z 'Szerokość'. */
function widthMm(v: ProductVariant): number | null {
  const r = v.attributes['Rozmiar']
  if (r) { const m = r.match(/(\d+(?:[.,]\d+)?)\s*[×xX]/); if (m) return parseFloat(m[1].replace(',', '.')) }
  const s = v.attributes['Szerokość']
  if (s) { const m = s.match(/(\d+(?:[.,]\d+)?)/); if (m) return parseFloat(m[1].replace(',', '.')) }
  return null
}

interface Pick { product: Product; variant: ProductVariant; title: string }

const AVAIL = {
  available: { label: 'Dostępny', variant: 'success' as const },
  'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
  unavailable: { label: 'Niedostępny', variant: 'danger' as const },
}

function Card({ pick, kind, stockInfo, stockLoading }: {
  pick: Pick; kind: 'label' | 'ribbon'; stockInfo?: StockInfo; stockLoading: boolean
}) {
  const { product, variant, title } = pick
  const { addItem, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const size = variant.attributes['Rozmiar'] ?? variant.name ?? ''
  const img = product.images[0]
  const hasImg = !!img && !img.includes('placeholder')
  const liveSignal = !!stockInfo && (stockInfo.found || stockInfo.totalStock > 0)
  const avail = liveSignal ? stockInfo!.availability : variant.availability
  const price = liveSignal && stockInfo!.price ? stockInfo!.price : variant.priceFrom
  const cfg = AVAIL[avail]
  const href = `/produkt/${product.slug}/${variantSizeSlug(variant)}/${variant.partNumber}`
  const fullName = `Zebra ${title} ${size}`.trim()
  const cartId = `${product.slug}__${variant.partNumber}`
  const inCart = mounted ? isInCart(cartId) : false

  const add = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    addItem({ id: cartId, name: fullName, slug: product.slug, image: img, partNumber: variant.partNumber, priceNetto: price, categoryId: 'materialy-eksploatacyjne' })
  }

  return (
    <article className="card group overflow-hidden flex flex-col h-full">
      <Link href={href} className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
        {hasImg ? <Image src={img} alt={fullName} fill className="object-contain p-3" sizes="200px" />
          : <div className="text-slate-300 text-xs">brak zdjęcia</div>}
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">ZEBRA</div>
        <Link href={href} className="font-semibold text-sm text-gray-900 leading-snug mb-1 hover:text-primary-700">
          {title} {size}
        </Link>
        <div className="mb-2"><Badge variant={cfg.variant} size="sm">{cfg.label}</Badge></div>
        <div className="mt-auto">
          {price ? (
            <div className="text-base font-bold text-gray-900 mb-2">
              {price.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
              <span className="text-xs font-normal text-gray-500"> netto/{kind === 'ribbon' ? 'rolka' : 'rolka'}</span>
            </div>
          ) : <div className="text-sm text-gray-400 mb-2">{stockLoading ? '…' : 'Zapytaj o cenę'}</div>}
          <div className="flex gap-1.5">
            {price ? (
              <button onClick={add} className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-semibold rounded-lg px-2 py-2 text-gray-900 bg-[#A8F000] hover:bg-[#94d600] transition-colors">
                {inCart ? <CheckIcon size={14} /> : <PlusIcon size={14} />}{inCart ? 'W koszyku' : 'Koszyk'}
              </button>
            ) : (
              <Link href={href} className="flex-1 inline-flex items-center justify-center text-xs font-semibold rounded-lg px-2 py-2 text-gray-900 bg-[#A8F000] hover:bg-[#94d600]">Zobacz</Link>
            )}
            <Link href={href} className="inline-flex items-center justify-center text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2">Więcej</Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PrinterMaterialVariants({
  id, title, productIds, kind, printWidthMm, requiredCore, perSeries = 3, maxTotal = 8,
}: {
  id: string
  title: string
  productIds: string[]
  kind: 'label' | 'ribbon'
  printWidthMm?: number
  /** Wymagany rdzeń taśmy dla danej drukarki ('12' biurkowa / '25' przemysłowa).
   *  Filtruje rekomendowane taśmy — np. rolka 12 mm nie wejdzie na wieszaki przemysłówki. */
  requiredCore?: string
  perSeries?: number
  maxTotal?: number
}) {
  // Z każdej serii bierzemy kilka wariantów mieszczących się w szerokości głowicy,
  // od najszerszego (najbardziej uniwersalny dla danej drukarki).
  // Taśma jest zwykle nieco szersza niż głowica (104 mm głowica → ~110 mm taśma),
  // więc dla taśm dajemy większą tolerancję niż dla etykiet.
  const tol = kind === 'ribbon' ? 12 : 2
  // Budujemy listy per-seria, a potem przeplatamy je round-robin (najpierw po 1 z każdej serii,
  // potem po 2…) — żeby rekomendacje pokazywały różnorodność klas (np. wosk / wosk-żywica / żywica),
  // a nie były zdominowane przez jedną serię.
  const groups: Pick[][] = []
  for (const pid of productIds) {
    const product = products.find(p => p.id === pid)
    if (!product?.variants) continue
    const t = cleanTitle(product.name)
    const fitting = product.variants
      .map(v => ({ v, w: widthMm(v) }))
      .filter(x => x.w != null && (!printWidthMm || x.w <= printWidthMm + tol))
      // Rdzeń: dla taśm rolka musi pasować do wieszaków drukarki (12 mm biurkowa / 25 mm przemysłowa).
      .filter(x => kind !== 'ribbon' || !requiredCore || String(x.v.attributes?.['Rdzeń'] ?? '').startsWith(requiredCore))
      .sort((a, b) => (b.w! - a.w!))
      .slice(0, Math.max(perSeries, 8)) // głębsza pula — po stanie pokażemy tylko dostępne
      .map(x => ({ product, variant: x.v, title: t }))
    if (fitting.length) groups.push(fitting)
  }
  // Przeplatanie round-robin: kolumna 0 = po jednym wariancie z każdej serii, potem kolumna 1, itd.
  const picks: Pick[] = []
  const maxLen = groups.reduce((m, g) => Math.max(m, g.length), 0)
  for (let i = 0; i < maxLen; i++) {
    for (const g of groups) if (g[i]) picks.push(g[i])
  }
  // Pula kandydatów większa niż wyświetlamy — po sprawdzeniu stanu pokazujemy tylko dostępne.
  const candidates = picks.slice(0, 24)
  const partNumbers = candidates.map(p => p.variant.partNumber)
  const { stockData, loading } = useStockData(partNumbers)

  if (candidates.length === 0) return null

  // Pokazujemy WYŁĄCZNIE dostępne (stan PL lub EU). Podczas ładowania — pierwsze maxTotal.
  const isAvailable = (pn: string) => {
    const s = stockData.get(pn)
    return !!s && (s.found || s.totalStock > 0) && s.availability === 'available'
  }
  const shown = loading
    ? candidates.slice(0, maxTotal)
    : candidates.filter(p => isAvailable(p.variant.partNumber)).slice(0, maxTotal)

  if (!loading && shown.length === 0) return null

  return (
    <section id={id} className="scroll-mt-20 lg:scroll-mt-44">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shown.map(pick => (
          <Card key={`${pick.product.slug}-${pick.variant.partNumber}`} pick={pick} kind={kind}
            stockInfo={stockData.get(pick.variant.partNumber)} stockLoading={loading} />
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-gray-100 text-center">
        <Link href={`/produkt/${productIds[0]}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800">
          Zobacz wszystkie rozmiary <ArrowRightIcon size={14} />
        </Link>
      </div>
    </section>
  )
}
