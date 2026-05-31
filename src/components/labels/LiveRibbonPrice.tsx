'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { Badge } from '@/components/ui'

type Availability = 'available' | 'on-order' | 'unavailable'

interface LiveData {
  price?: number
  availability?: Availability
  loading: boolean
}

const LiveRibbonContext = createContext<LiveData>({ loading: true })

/** Wraper który robi JEDEN fetch /api/stock i udostępnia cenę + dostępność dzieciom.
 *  Fallback: jeśli live API nie zwraca ceny, używamy statycznego `fallbackPrice` z
 *  wariantu (najczęściej `variant.priceFrom`). Bez tego niszowe SKU (krótkie rolki
 *  szerokich taśm, których dystrybutor nie wycenia live) pokazywałyby „Zapytaj o cenę". */
export function LiveRibbonProvider({
  partNumber,
  fallbackPrice,
  children,
}: {
  partNumber: string
  fallbackPrice?: number
  children: ReactNode
}) {
  const [data, setData] = useState<LiveData>({ loading: true })

  useEffect(() => {
    let cancelled = false
    fetch(`/api/stock?pn=${partNumber}`, {
      signal: AbortSignal.timeout(15000),
      cache: 'no-store',
    })
      .then(r => r.ok ? r.json() : null)
      .then(json => {
        if (cancelled || !json?.results?.[0]) {
          if (!cancelled) setData({ loading: false, price: fallbackPrice })
          return
        }
        const r = json.results[0]
        setData({
          loading: false,
          price: r.found && r.price ? r.price : fallbackPrice,
          availability: r.availability as Availability | undefined,
        })
      })
      .catch(() => { if (!cancelled) setData({ loading: false, price: fallbackPrice }) })
    return () => { cancelled = true }
  }, [partNumber, fallbackPrice])

  return <LiveRibbonContext.Provider value={data}>{children}</LiveRibbonContext.Provider>
}

const AVAILABILITY_LABEL: Record<Availability, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  available: { label: 'Dostępny', variant: 'success' },
  'on-order': { label: 'Na zamówienie', variant: 'warning' },
  unavailable: { label: 'Niedostępny', variant: 'danger' },
}

/** Badge dostępności pobierany z live API. */
export function LiveRibbonAvailability() {
  const { loading, availability } = useContext(LiveRibbonContext)
  if (loading) {
    return <span className="inline-block h-6 w-24 bg-slate-100 rounded-full animate-pulse" />
  }
  if (!availability) return null
  const cfg = AVAILABILITY_LABEL[availability]
  return <Badge variant={cfg.variant} size="sm">{cfg.label}</Badge>
}

/** Cena per-szt. z live API + brutto wyliczany lokalnie (× 1.23). */
export default function LiveRibbonPrice() {
  const { loading, price } = useContext(LiveRibbonContext)

  if (loading) {
    return <span className="inline-block h-6 w-24 bg-slate-100 rounded animate-pulse" />
  }

  if (!price) {
    return <span className="text-gray-400 text-sm">Zapytaj o cenę</span>
  }

  return (
    <>
      <span className="text-xl font-bold text-gray-900">
        {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
      </span>
      <span className="text-sm text-gray-500">netto</span>
    </>
  )
}
