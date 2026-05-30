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
  treatUnknownAsUnavailable = false,
}: {
  staticAvailability: 'available' | 'on-order' | 'unavailable'
  /** Gdy true — API `found:false` (brak danych z dystrybutora) → "Niedostępny" zamiast
   *  fallback do `staticAvailability`. Włącz dla materiałów eksploatacyjnych (taśmy/etykiety)
   *  gdzie brak u dystrybutorów = realna niedostępność. Dla urządzeń sprzedawanych
   *  na zamówienie nie używać. */
  treatUnknownAsUnavailable?: boolean
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
    } else if (treatUnknownAsUnavailable) {
      // Materiały eksploatacyjne: brak danych z dystrybutora = niedostępne (nie "na zamówienie")
      liveAvailability = 'unavailable'
    }
    // Inaczej (urządzenia) — zostań przy staticAvailability
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
    } else if (!anyFound && treatUnknownAsUnavailable) {
      // Żaden wariant nie znaleziony u dystrybutorów → niedostępny (materiały eksploatacyjne).
      liveAvailability = 'unavailable'
    }
  }

  const c = config[liveAvailability]
  return <Badge variant={c.variant}>{c.label}</Badge>
}
