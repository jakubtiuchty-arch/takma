import { allegroFetch } from './client'

/**
 * Allegro Zamówienia — REST /order/checkout-forms.
 * Scope: allegro:api:orders:read / :write (w tokenie).
 */

export interface OrderAddress {
  firstName?: string
  lastName?: string
  companyName?: string
  street?: string
  city?: string
  zipCode?: string
  countryCode?: string
  phoneNumber?: string
}

export interface OrderLineItem {
  id: string
  offer: { id: string; name: string; external?: { id?: string } }
  quantity: number
  price: { amount: string; currency: string }
}

export interface AllegroOrder {
  id: string
  status: string
  fulfillment?: { status?: string; shipmentSummary?: { lineItemsSent?: string } }
  buyer?: { login?: string; firstName?: string; lastName?: string; companyName?: string; email?: string; phoneNumber?: string }
  summary?: { totalToPay?: { amount: string; currency: string } }
  lineItems?: OrderLineItem[]
  delivery?: {
    address?: OrderAddress
    method?: { id?: string; name?: string }
    cost?: { amount: string; currency: string }
    pickupPoint?: { id?: string; name?: string; address?: { street?: string; city?: string; zipCode?: string } }
  }
  payment?: { type?: string; finishedAt?: string; paidAmount?: { amount: string; currency: string } }
  invoice?: { required?: boolean; address?: OrderAddress & { taxId?: string; company?: { name?: string; taxId?: string } } }
  messageToSeller?: string | null
  note?: { text?: string } | null
  updatedAt?: string
}

export async function listOrders(limit = 25, offset = 0): Promise<{ orders: AllegroOrder[]; count: number }> {
  const lim = Math.min(limit, 100)
  const j = await allegroFetch<{ checkoutForms?: AllegroOrder[]; count?: number }>(
    `/order/checkout-forms?limit=${lim}&offset=${offset}&sort=-updatedAt`,
  )
  return { orders: j.checkoutForms || [], count: j.count || 0 }
}

export async function getOrder(id: string): Promise<AllegroOrder> {
  return allegroFetch<AllegroOrder>(`/order/checkout-forms/${id}`)
}

/** Etykiety statusów (PL). */
export const ORDER_STATUS_PL: Record<string, string> = {
  BOUGHT: 'Kupione (oczekuje na opłatę)',
  FILLED_IN: 'Dane uzupełnione',
  READY_FOR_PROCESSING: 'Opłacone — do realizacji',
  CANCELLED: 'Anulowane',
}

/** Mapowanie nazwy przewoźnika (z Furgonetki) na carrierId Allegro. */
export function mapCourierToAllegroCarrier(name: string): { carrierId: string; carrierName?: string } {
  const n = (name || '').toUpperCase()
  if (n.includes('INPOST') || n.includes('PACZKOMAT')) return { carrierId: 'INPOST' }
  if (n.includes('DPD')) return { carrierId: 'DPD' }
  if (n.includes('DHL')) return { carrierId: 'DHL' }
  if (n.includes('GLS')) return { carrierId: 'GLS' }
  if (n.includes('UPS')) return { carrierId: 'UPS' }
  if (n.includes('FEDEX')) return { carrierId: 'FEDEX' }
  if (n.includes('ORLEN')) return { carrierId: 'ORLEN_PACZKA' }
  if (n.includes('POCZTA') || n.includes('POLSKA')) return { carrierId: 'POCZTA_POLSKA' }
  if (n.includes('GEIS')) return { carrierId: 'GEIS' }
  if (n.includes('AMBRO')) return { carrierId: 'AMBRO_EXPRESS' }
  // nieznany → OTHER + nazwa własna
  return { carrierId: 'OTHER', carrierName: name || 'Kurier' }
}

/** Dodaj list przewozowy (tracking) do zamówienia Allegro — kupujący zobaczy nr + status „wysłane". */
export async function addShipment(orderId: string, waybill: string, courierService: string): Promise<void> {
  const { carrierId, carrierName } = mapCourierToAllegroCarrier(courierService)
  const body: Record<string, unknown> = { carrierId, waybill }
  if (carrierName) body.carrierName = carrierName
  await allegroFetch(`/order/checkout-forms/${orderId}/shipments`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export const FULFILLMENT_STATUS_PL: Record<string, string> = {
  NEW: 'Nowe',
  PROCESSING: 'W realizacji',
  READY_FOR_SHIPMENT: 'Gotowe do wysyłki',
  READY_FOR_PICKUP: 'Gotowe do odbioru',
  SENT: 'Wysłane',
  PICKED_UP: 'Odebrane',
  SUSPENDED: 'Wstrzymane',
  RETURNED: 'Zwrócone',
}
