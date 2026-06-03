'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui'
import { useCartStore } from '@/store/cartStore'
import { PlusIcon, CheckIcon } from '@/components/ui/Icons'

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

/** Hook dostępu do live ceny/dostępności (cena do koszyka). */
export function useLiveRibbon() {
  return useContext(LiveRibbonContext)
}

// Taśma → forma żeńska; każdy stan poza „dostępna" jako „Niedostępna".
const AVAILABILITY_LABEL: Record<Availability, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  available: { label: 'Dostępna', variant: 'success' },
  'on-order': { label: 'Niedostępna', variant: 'danger' },
  unavailable: { label: 'Niedostępna', variant: 'danger' },
}

/** Akcje karty taśmy — „Koszyk" (live cena z kontekstu) + „Więcej". */
export function LiveRibbonCartActions({
  id, name, slug, image, partNumber, categoryId, href,
}: {
  id: string
  name: string
  slug: string
  image?: string
  partNumber: string
  categoryId: string
  href: string
}) {
  const { price, loading } = useContext(LiveRibbonContext)
  const { addItem, isInCart, openDrawer } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const inCart = mounted ? isInCart(id) : false

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!price) return
    addItem({ id, name, slug, image, partNumber, priceNetto: price, categoryId })
    openDrawer()
  }

  const moreBtn = (
    <Link
      href={href}
      className="flex items-center justify-center text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 whitespace-nowrap transition-colors"
    >
      Więcej
    </Link>
  )

  return (
    <div className="flex gap-2">
      {!loading && price ? (
        <button
          onClick={handleAdd}
          className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold rounded-lg px-3 py-3 transition-all active:scale-[0.98] text-gray-900 bg-[#A8F000] hover:bg-[#94d600]"
        >
          {inCart ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
          {inCart ? 'W koszyku' : 'Koszyk'}
        </button>
      ) : (
        <Link
          href={href}
          className="flex-1 inline-flex items-center justify-center text-sm font-semibold rounded-lg px-3 py-3 text-gray-900 bg-[#A8F000] hover:bg-[#94d600] transition-colors"
        >
          Zobacz więcej
        </Link>
      )}
      {moreBtn}
    </div>
  )
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
