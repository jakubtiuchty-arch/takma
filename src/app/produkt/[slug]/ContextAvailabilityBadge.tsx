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
  const { stockData, loading, partNumbers } = useSmartPrice()

  // Podczas ładowania — pokaż statyczną dostępność
  if (loading) {
    return <Badge variant={config[staticAvailability].variant}>{config[staticAvailability].label}</Badge>
  }

  // Sprawdź live dane — czy JAKIKOLWIEK wariant jest dostępny
  let liveAvailability: 'available' | 'on-order' | 'unavailable' = staticAvailability
  let anyFound = false

  for (const pn of partNumbers) {
    const stock = stockData.get(pn)
    if (stock?.found) {
      anyFound = true
      if (stock.totalStock > 0) {
        liveAvailability = 'available'
        break
      }
    }
  }

  // Jeśli API znalazło PNy ale żaden nie ma stocku → niedostępny
  if (anyFound && liveAvailability !== 'available') {
    // Sprawdź czy coś jest w dostawie
    const anyInDelivery = partNumbers.some(pn => {
      const stock = stockData.get(pn)
      return stock?.found && stock.inDelivery > 0
    })
    liveAvailability = anyInDelivery ? 'on-order' : 'unavailable'
  }

  // Jeśli API nie znalazło żadnego PNu → fallback na statyczną
  // (nie pokazuj "niedostępny" gdy API po prostu nie zna PNu)

  const c = config[liveAvailability]
  return <Badge variant={c.variant}>{c.label}</Badge>
}
