import type { AllegroOrder } from './allegro/orders'

/**
 * Integracja „własna" Furgonetki: Furgonetka pobiera nasze zamówienia (GET /orders)
 * i odsyła numer listu (/orders/{id}/tracking_number). Autoryzacja tokenem.
 */

const TOKEN = process.env.FURGONETKA_TOKEN || ''

/** Weryfikacja tokenu Furgonetki — akceptujemy nagłówki i parametr (różne warianty). */
export function verifyFurgonetkaToken(request: Request): boolean {
  if (!TOKEN) return false
  const url = new URL(request.url)
  const candidates = [
    request.headers.get('x-auth-token'),
    request.headers.get('x-token'),
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, ''),
    url.searchParams.get('token'),
  ].filter(Boolean) as string[]
  return candidates.some((t) => t === TOKEN)
}

// Domyślne parametry paczki (Allegro nie podaje wagi/wymiarów towaru) — handlowiec
// koryguje w panelu Furgonetki, jeśli trzeba.
const DEFAULT_ITEM_WEIGHT = 0.3 // kg
const DEFAULT_DIMS = { width: 20, height: 15, depth: 5 } // cm

function iso(d?: string): string {
  if (!d) return ''
  try {
    return new Date(d).toISOString().slice(0, 19)
  } catch {
    return ''
  }
}

function serviceKeyword(methodName?: string): string {
  const n = (methodName || '').toLowerCase()
  if (n.includes('paczkomat') || n.includes('inpost')) return 'inpost'
  if (n.includes('dpd')) return 'dpd'
  if (n.includes('dhl')) return 'dhl'
  if (n.includes('gls')) return 'gls'
  if (n.includes('poczt')) return 'poczta'
  if (n.includes('orlen') || n.includes('paczka')) return 'orlen'
  if (n.includes('kurier')) return 'kurier'
  return ''
}

/** Mapuje zamówienie Allegro na obiekt zamówienia w formacie Furgonetki. */
export function mapOrderToFurgonetka(o: AllegroOrder): Record<string, unknown> {
  const a = o.delivery?.address
  const total = Number(o.summary?.totalToPay?.amount || 0)
  const products = (o.lineItems || []).map((li) => ({
    sourceProductId: li.id,
    name: li.offer?.name || '',
    priceGross: Number(li.price?.amount || 0),
    quantity: li.quantity || 1,
    weight: DEFAULT_ITEM_WEIGHT,
    width: DEFAULT_DIMS.width,
    height: DEFAULT_DIMS.height,
    depth: DEFAULT_DIMS.depth,
    sku: li.offer?.external?.id || '',
    unit: 'szt.',
  }))
  const totalWeight = Math.max(
    0.5,
    products.reduce((s, p) => s + p.weight * p.quantity, 0),
  )

  const isCod = (o.payment?.type || '').toUpperCase().includes('CASH_ON_DELIVERY')

  const order: Record<string, unknown> = {
    sourceOrderId: o.id,
    sourceClientId: Number(o.buyer?.login?.replace(/\D/g, '') || 0) || 0,
    datetimeOrder: iso(o.payment?.finishedAt || o.updatedAt),
    sourceDatetimeChange: iso(o.updatedAt),
    service: serviceKeyword(o.delivery?.method?.name),
    serviceDescription: o.delivery?.method?.name || '',
    status: 'paid',
    totalPrice: total,
    shippingCost: Number(o.delivery?.cost?.amount || 0),
    shippingTaxRate: 23,
    totalPaid: total,
    codAmount: isCod ? total : 0,
    totalWeight,
    point: o.delivery?.pickupPoint?.id || '',
    comment: o.messageToSeller || '',
    shippingAddress: {
      company: a?.companyName || '',
      name: a?.firstName || '',
      surname: a?.lastName || '',
      street: a?.street || '',
      city: a?.city || '',
      postcode: a?.zipCode || '',
      countryCode: a?.countryCode || 'PL',
      phone: a?.phoneNumber || o.buyer?.phoneNumber || '',
      email: o.buyer?.email || '',
    },
    products,
    paymentDatetime: iso(o.payment?.finishedAt),
  }

  // Faktura — gdy wymagana
  if (o.invoice?.required) {
    const inv = o.invoice.address
    order.invoiceAddress = {
      company: inv?.company?.name || inv?.companyName || a?.companyName || '',
      name: inv?.firstName || a?.firstName || '',
      surname: inv?.lastName || a?.lastName || '',
      street: inv?.street || a?.street || '',
      city: inv?.city || a?.city || '',
      postcode: inv?.zipCode || a?.zipCode || '',
      countryCode: inv?.countryCode || a?.countryCode || 'PL',
      email: o.buyer?.email || '',
      nip: inv?.company?.taxId || inv?.taxId || '',
    }
  }

  return order
}
