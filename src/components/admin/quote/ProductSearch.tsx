'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { products, type Product, type ProductVariant } from '@/data/products'
import { useQuoteStore } from '@/store/quoteStore'

/** Do porównań PN-ów: same znaki alfanumeryczne, małe litery („BTRY-MC3X-70MA-01" → „btrymc3x70ma01"). */
const normalizePn = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

/**
 * Numery katalogowe produktu. Urządzenia trzymają je w wariantach, ale akcesoria
 * wariantów nie mają — ich PN siedzi w specyfikacji jako „Part Number". Bez tego
 * drugiego źródła baterie, ładowarki czy kable były w ogóle nie do wyszukania.
 */
export function productPartNumbers(p: Product): string[] {
  const fromVariants = (p.variants ?? []).map((v) => v.partNumber)
  if (fromVariants.length > 0) return fromVariants

  const spec = p.specifications?.find((s) => /^(part number|numer katalogowy|pn)$/i.test(s.name))
  if (!spec) return []
  return spec.value.split(/[\/,;]/).map((x) => x.trim()).filter(Boolean)
}

function buildIndex() {
  return products.map((p) => {
    const partNumbers = productPartNumbers(p)
    const searchText = [
      p.name,
      p.slug.replace(/-/g, ' '),
      p.shortDescription,
      p.id,
      ...partNumbers,
    ]
      .join(' ')
      .toLowerCase()
    return {
      product: p,
      searchText,
      /** znormalizowane PN-y produktu (bez myślników) — do trafień „dokładnie ten PN" */
      normalizedPns: partNumbers.map(normalizePn),
    }
  })
}

/** Trafienie wyszukiwarki: albo konkretny wariant (gdy wpisano PN), albo cały produkt. */
interface SearchHit {
  product: Product
  variant?: ProductVariant
  /** PN akcesorium ze specyfikacji — produkt nie ma wariantu, ale ma numer */
  accessoryPn?: string
}

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchHit[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)
  const addItem = useQuoteStore((s) => s.addItem)
  const inputRef = useRef<HTMLInputElement>(null)

  const index = useMemo(() => buildIndex(), [])

  const search = useCallback(
    (q: string) => {
      if (q.length < 2) {
        setResults([])
        return
      }
      const tokens = q.toLowerCase().split(/\s+/).filter(Boolean)
      const normalizedQuery = normalizePn(q)
      const found: SearchHit[] = []

      // 1. Trafienie w numer katalogowy — pokazujemy DOKŁADNIE ten wariant, a nie
      //    całą listę PN-ów urządzenia. Przy terminalach wariantów bywa kilkanaście.
      if (normalizedQuery.length >= 4) {
        for (const entry of index) {
          if (found.length >= 20) break
          const hitPns = entry.normalizedPns
            .map((pn, i) => ({ pn, i }))
            .filter(({ pn }) => pn.includes(normalizedQuery))
          if (hitPns.length === 0) continue

          const variants = entry.product.variants ?? []
          for (const { i } of hitPns) {
            if (found.length >= 20) break
            found.push(
              variants[i]
                ? { product: entry.product, variant: variants[i] }
                : { product: entry.product, accessoryPn: productPartNumbers(entry.product)[i] },
            )
          }
        }
      }

      // 2. Zwykłe szukanie po nazwie/opisie — tylko dla produktów, których nie
      //    złapaliśmy już po PN-ie.
      const alreadyFound = new Set(found.map((h) => h.product.id))
      for (const entry of index) {
        if (found.length >= 20) break
        if (alreadyFound.has(entry.product.id)) continue
        if (tokens.every((t) => entry.searchText.includes(t))) {
          found.push({ product: entry.product })
        }
      }

      setResults(found)
    },
    [index]
  )

  useEffect(() => {
    const timer = setTimeout(() => search(query), 150)
    return () => clearTimeout(timer)
  }, [query, search])

  const addFromCatalog = async (product: Product, variant?: { partNumber: string; name: string; priceFrom?: number }) => {
    const staticPrice = variant?.priceFrom
      ? Math.round(variant.priceFrom * 100)
      : product.priceFrom
      ? Math.round(product.priceFrom * 100)
      : 0

    // Cena bazowa musi być tą, którą klient widzi dziś w sklepie — to ona trafia do
    // maila jako przekreślona. `priceFrom` z katalogu bywa nieaktualny (karta liczy
    // cenę na żywo), więc pytamy o żywą i zostawiamy statyczną tylko jako zapas.
    // Dla akcesoriów PN bierzemy ze specyfikacji — one nie mają wariantów.
    const pn = variant?.partNumber || productPartNumbers(product)[0]
    let catalogPrice = staticPrice
    // Cena zakupu (u dystrybutora) — potrzebna, żeby przy udzielaniu rabatu
    // widzieć podłogę i nie zejść poniżej kosztu. To ta sama liczba, z której
    // sklep liczy cenę sprzedaży, więc nie wymaga osobnego zapytania.
    let purchasePrice: number | undefined
    if (pn) {
      try {
        const res = await fetch(`/api/stock?pn=${encodeURIComponent(pn)}`)
        const data = await res.json()
        const live = data?.results?.[0]
        if (live?.found && live?.price > 0) catalogPrice = Math.round(live.price * 100)
        if (live?.ingramPrice > 0) purchasePrice = Math.round(live.ingramPrice * 100)
      } catch {
        // brak odpowiedzi API — zostaje cena statyczna
      }
    }

    addItem({
      source: 'catalog',
      productId: product.id,
      productName: variant ? `${product.name} — ${variant.name}` : product.name,
      partNumber: pn,
      description: product.shortDescription,
      quantity: 1,
      catalogPrice,
      purchasePrice,
      priceNetto: catalogPrice, // 0% rabatu na start
      discountPercent: 0,
    })

    setQuery('')
    setResults([])
    setExpanded(null)
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Dodaj z katalogu
      </h3>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Szukaj produktu, modelu, PN..."
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-2"
      />

      {results.length > 0 && (
        <div className="border border-gray-200 rounded-lg max-h-80 overflow-y-auto bg-white">
          {results.map((hit) => {
            const { product, variant, accessoryPn } = hit
            const pn = variant?.partNumber ?? accessoryPn
            const price = variant?.priceFrom ?? product.priceFrom
            const canExpand = !variant && !accessoryPn && (product.variants?.length ?? 0) > 1

            return (
            <div key={pn ?? product.id} className="border-b border-gray-100 last:border-0">
              <button
                type="button"
                onClick={() => {
                  if (canExpand) {
                    setExpanded(expanded === product.id ? null : product.id)
                  } else {
                    addFromCatalog(product, variant ?? product.variants?.[0])
                  }
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 text-sm"
              >
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {product.name}
                    {variant?.name && <span className="text-gray-500"> — {variant.name}</span>}
                  </div>
                  {pn ? (
                    <div className="font-mono text-xs text-gray-500 truncate">{pn}</div>
                  ) : (
                    <div className="text-xs text-gray-500 truncate">{product.shortDescription}</div>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  {price && (
                    <span className="text-sm font-medium tabular-nums">
                      {price.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </span>
                  )}
                  {canExpand && (
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${expanded === product.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </div>
              </button>

              {expanded === product.id && product.variants && (
                <div className="bg-gray-50 px-3 pb-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.partNumber}
                      type="button"
                      onClick={() => addFromCatalog(product, v)}
                      className="w-full flex items-center justify-between px-2 py-1.5 text-left hover:bg-white rounded text-xs"
                    >
                      <div className="min-w-0">
                        <span className="font-mono text-gray-600">{v.partNumber}</span>
                        <span className="text-gray-400 ml-2">{v.name}</span>
                      </div>
                      {v.priceFrom && (
                        <span className="font-medium tabular-nums ml-2">
                          {v.priceFrom.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
