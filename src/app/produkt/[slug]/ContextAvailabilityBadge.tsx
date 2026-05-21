'use client'

import { Badge } from '@/components/ui'
import { useSmartPrice } from './SmartPriceContext'

const config = {
  available: { label: 'Dostępny', variant: 'success' as const },
  'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
  unavailable: { label: 'Niedostępny', variant: 'danger' as const },
}

export default function ContextAvailabilityBadge({
  staticAvailability,
}: {
  staticAvailability: 'available' | 'on-order' | 'unavailable'
}) {
  const { stockData, loading, displayedPn, partNumbers } = useSmartPrice()

  // Podczas ładowania — pokaż statyczną dostępność
  if (loading) {
    return <Badge variant={config[staticAvailability].variant}>{config[staticAvailability].label}</Badge>
  }

  let liveAvailability: 'available' | 'on-order' | 'unavailable' = staticAvailability

  // ── PRIORYTET: status WYBRANEGO wariantu (displayedPn z URL ?pn= lub auto)
  // Synchronizujemy badge ze stock-info pod cenę — żeby nie było "Dostępny" + "Chwilowo niedostępny".
  if (displayedPn) {
    const stock = stockData.get(displayedPn)
    if (stock?.found) {
      if (stock.totalStock > 0) liveAvailability = 'available'
      else if (stock.inDelivery > 0) liveAvailability = 'on-order'
      else liveAvailability = 'unavailable'
    }
    // Jeśli API nie zna PNu → zostań przy staticAvailability
  } else if (partNumbers.length > 0) {
    // Brak displayedPn — fallback do logiki "any variant available"
    let anyFound = false
    for (const pn of partNumbers) {
      const stock = stockData.get(pn)
      if (stock?.found) {
        anyFound = true
        if (stock.totalStock > 0) { liveAvailability = 'available'; break }
      }
    }
    if (anyFound && liveAvailability !== 'available') {
      const anyInDelivery = partNumbers.some(pn => {
        const stock = stockData.get(pn)
        return stock?.found && stock.inDelivery > 0
      })
      liveAvailability = anyInDelivery ? 'on-order' : 'unavailable'
    }
  }

  const c = config[liveAvailability]
  return <Badge variant={c.variant}>{c.label}</Badge>
}
