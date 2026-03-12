'use client'

import { useEffect, useState, useMemo } from 'react'
import { Badge } from '@/components/ui'
import type { StockInfo as StockInfoType } from '@/lib/ingram'

// ============================================
// GLOBAL STOCK CACHE
// Wspólne źródło cen dla WSZYSTKICH komponentów (VariantsTable, SearchBar, ServicePlansBox).
// Gwarantuje że ten sam PN = ta sama cena na całej stronie.
// ============================================

const globalStockCache = new Map<string, StockInfoType>()

// ============================================
// CLIENT-SIDE REQUEST BATCHER
// Zbiera wszystkie PNy ze strony (ProductCard, VariantsTable, LiveBadge, StockInfo)
// i wysyła je w JEDNYM requescie do API zamiast 15+ osobnych.
// ============================================

type BatchResolve = (results: Map<string, StockInfoType>) => void

let batchPNs = new Set<string>()
let batchCallbacks: Array<{ pns: string[]; resolve: BatchResolve }> = []
let batchTimer: ReturnType<typeof setTimeout> | null = null

const BATCH_DELAY = 80 // ms — czekaj na zebranie PNów ze wszystkich komponentów

const CHUNK_SIZE = 50 // API limit: max 50 PNów na request

async function executeBatch() {
  const allPNs = Array.from(batchPNs)
  const callbacks = [...batchCallbacks]
  batchPNs = new Set()
  batchCallbacks = []
  batchTimer = null

  if (allPNs.length === 0) return

  try {
    // Podziel na chunki po 50 (limit API)
    const chunks: string[][] = []
    for (let i = 0; i < allPNs.length; i += CHUNK_SIZE) {
      chunks.push(allPNs.slice(i, i + CHUNK_SIZE))
    }

    const responses = await Promise.all(
      chunks.map(async (chunk) => {
        const res = await fetch(`/api/stock?pn=${chunk.join(',')}`)
        if (!res.ok) throw new Error('Fetch failed')
        return res.json()
      })
    )

    const fullMap = new Map<string, StockInfoType>()
    for (const data of responses) {
      for (const item of data.results) {
        fullMap.set(item.partNumber, item)
      }
    }

    // Merge do globalnego cache — SearchBar i VariantsTable zawsze widzą tę samą cenę
    fullMap.forEach((item, pn) => {
      globalStockCache.set(pn, item)
    })

    for (const { pns, resolve } of callbacks) {
      const filtered = new Map<string, StockInfoType>()
      for (const pn of pns) {
        const item = globalStockCache.get(pn)
        if (item) filtered.set(pn, item)
      }
      resolve(filtered)
    }
  } catch {
    for (const { resolve } of callbacks) {
      resolve(new Map())
    }
  }
}

function fetchStockBatched(partNumbers: string[]): Promise<Map<string, StockInfoType>> {
  return new Promise((resolve) => {
    for (const pn of partNumbers) batchPNs.add(pn)
    batchCallbacks.push({ pns: partNumbers, resolve })
    if (!batchTimer) {
      batchTimer = setTimeout(executeBatch, BATCH_DELAY)
    }
  })
}

// ============================================
// HOOK: useStockData
// ============================================

/**
 * Hook do pobierania danych magazynowych w innych komponentach (np. VariantsTable, ProductCard).
 * Sprawdza globalny cache PRZED wysłaniem requesta — eliminuje rozbieżność cen
 * między SearchBar a VariantsTable (oba czytają z tego samego źródła).
 */
export function useStockData(partNumbers: string[]) {
  const [stockData, setStockData] = useState<Map<string, StockInfoType>>(() => {
    // Inicjalizuj z globalnego cache (np. SearchBar dostaje dane z VariantsTable bez nowego requesta)
    const cached = new Map<string, StockInfoType>()
    for (const pn of partNumbers) {
      const item = globalStockCache.get(pn)
      if (item) cached.set(pn, item)
    }
    return cached
  })
  const [loading, setLoading] = useState(() => {
    if (partNumbers.length === 0) return false
    return !partNumbers.every(pn => globalStockCache.has(pn))
  })

  const key = partNumbers.join(',')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stablePartNumbers = useMemo(() => partNumbers, [key])

  useEffect(() => {
    if (stablePartNumbers.length === 0) {
      setLoading(false)
      return
    }

    // Sprawdź które PNy nie są jeszcze w cache
    const uncached = stablePartNumbers.filter(pn => !globalStockCache.has(pn))

    if (uncached.length === 0) {
      // Wszystko w cache — użyj cached danych (zero requestów!)
      const cached = new Map<string, StockInfoType>()
      for (const pn of stablePartNumbers) {
        const item = globalStockCache.get(pn)
        if (item) cached.set(pn, item)
      }
      setStockData(cached)
      setLoading(false)
      return
    }

    setLoading(true)
    fetchStockBatched(uncached).then(() => {
      // Po fetchu — buduj wynik z globalnego cache (zawiera i stare i nowe dane)
      const result = new Map<string, StockInfoType>()
      for (const pn of stablePartNumbers) {
        const item = globalStockCache.get(pn)
        if (item) result.set(pn, item)
      }
      setStockData(result)
    }).finally(() => setLoading(false))
  }, [stablePartNumbers])

  return { stockData, loading }
}

// ============================================
// KOMPONENTY
// ============================================

interface StockInfoProps {
  partNumbers: string[]
}

export default function StockInfo({ partNumbers }: StockInfoProps) {
  const { stockData, loading } = useStockData(partNumbers)

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-400 animate-pulse">
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        Sprawdzanie stanów magazynowych...
      </div>
    )
  }

  if (stockData.size === 0) {
    return null
  }

  const firstWithStock = partNumbers
    .map(pn => stockData.get(pn))
    .find(s => s?.found)

  if (!firstWithStock) return null

  return (
    <div className="mt-3 space-y-1.5">
      {firstWithStock.stockPL > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-gray-600">
            Magazyn PL: <strong className="text-gray-900">{firstWithStock.stockPL} szt.</strong>
            <span className="text-gray-400 ml-1">— wysyłka 24h</span>
          </span>
        </div>
      )}
      {firstWithStock.stockDE > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="text-gray-600">
            Magazyn EU: <strong className="text-gray-900">{firstWithStock.stockDE} szt.</strong>
            <span className="text-gray-400 ml-1">— wysyłka 2-3 dni</span>
          </span>
        </div>
      )}
      {firstWithStock.stockPL === 0 && firstWithStock.stockDE === 0 && firstWithStock.inDelivery > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-gray-600">
            W drodze: <strong className="text-gray-900">{firstWithStock.inDelivery} szt.</strong>
          </span>
        </div>
      )}
      {firstWithStock.stockPL === 0 && firstWithStock.stockDE === 0 && firstWithStock.inDelivery === 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-red-400 rounded-full" />
          <span className="text-gray-500">Chwilowo niedostępny</span>
        </div>
      )}
    </div>
  )
}

/**
 * Badge dostępności aktualizowany na żywo z Ingram API.
 */
export function LiveAvailabilityBadge({
  staticAvailability,
  partNumbers,
}: {
  staticAvailability: 'available' | 'on-order' | 'unavailable'
  partNumbers: string[]
}) {
  const { stockData, loading } = useStockData(partNumbers)

  const config = {
    available: { label: 'Dostępny', variant: 'success' as const },
    'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
    unavailable: { label: 'Niedostępny', variant: 'danger' as const },
  }

  if (loading || partNumbers.length === 0 || stockData.size === 0) {
    return <Badge variant={config[staticAvailability].variant}>{config[staticAvailability].label}</Badge>
  }

  const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)
  if (!anyFound) {
    return <Badge variant={config[staticAvailability].variant}>{config[staticAvailability].label}</Badge>
  }

  let hasStock = false
  for (const pn of partNumbers) {
    const stock = stockData.get(pn)
    if (stock?.found && stock.totalStock > 0) {
      hasStock = true
      break
    }
  }

  const live = hasStock ? 'available' : 'unavailable'
  return <Badge variant={config[live].variant}>{config[live].label}</Badge>
}
