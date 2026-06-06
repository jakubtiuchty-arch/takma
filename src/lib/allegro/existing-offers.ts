import { allegroFetch } from './client'
import { prisma } from '@/lib/db'
import { ALLEGRO_ENV } from './auth'

export interface ExistingOffer {
  id: string
  name: string
  status: string
  price?: string
  stock?: number
}

interface AllegroOfferListItem {
  id: string
  name?: string
  publication?: { status?: string }
  sellingMode?: { price?: { amount?: string } }
  stock?: { available?: number }
}

/** Czy nazwa to materiał (taśma/etykieta), a NIE sprzęt (drukarka, plan, akumulator…). */
function isMaterialName(name: string): boolean {
  if (!/etykiet|taśm|tasm|ribbon/i.test(name)) return false
  if (/drukark|plan serwis|akumulator|bater|etui|uchwyt|stacja|kabel|zasilacz|czytnik|skaner|terminal/i.test(name))
    return false
  return true
}

/**
 * Stare oferty materiałów na koncie — czyli oferty taśm/etykiet, które NIE
 * pochodzą z naszej integracji (brak ich allegroId w AllegroOffer). To kandydaci
 * do wygaszenia przy zastępowaniu nowymi, szczegółowymi ofertami.
 */
export async function listOldMaterialOffers(): Promise<ExistingOffer[]> {
  const all: AllegroOfferListItem[] = []
  let offset = 0
  // limit pętli na wszelki wypadek
  for (let guard = 0; guard < 50; guard++) {
    const j = await allegroFetch<{ offers?: AllegroOfferListItem[] }>(`/sale/offers?limit=100&offset=${offset}`)
    const batch = j.offers || []
    all.push(...batch)
    if (batch.length < 100) break
    offset += 100
  }

  const ours = await prisma.allegroOffer.findMany({
    where: { environment: ALLEGRO_ENV, allegroId: { not: null } },
    select: { allegroId: true },
  })
  const ourIds = new Set(ours.map((o) => o.allegroId))

  return all
    .filter((o) => o.name && isMaterialName(o.name) && !ourIds.has(o.id))
    .map((o) => ({
      id: o.id,
      name: o.name || '',
      status: o.publication?.status || '',
      price: o.sellingMode?.price?.amount,
      stock: o.stock?.available,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'pl'))
}

/** Zakończ ofertę (publication ENDED). */
export async function endOffer(offerId: string): Promise<void> {
  await allegroFetch(`/sale/product-offers/${offerId}`, {
    method: 'PATCH',
    body: JSON.stringify({ publication: { status: 'ENDED' } }),
  })
}
