import { empikFetch } from '@/lib/empik/client'

/**
 * Zamówienia EmpikPlace (Mirakl OR11/OR21/OR23/OR24).
 *
 * Cykl: WAITING_ACCEPTANCE → (akceptacja OR21) → SHIPPING → (tracking OR23 +
 * ship OR24) → SHIPPED → RECEIVED/CLOSED. Brak akceptacji w terminie = auto-anulacja,
 * dlatego przegląd /admin/empik liczy zamówienia czekające na akceptację.
 */

export interface EmpikOrderLine {
  order_line_id: string
  order_line_state: string
  offer_sku: string
  product_title: string
  quantity: number
  price: number
  total_price: number
}

export interface EmpikOrder {
  order_id: string
  commercial_id: string
  created_date: string
  last_updated_date?: string
  order_state: string
  currency_iso_code?: string
  total_price: number
  shipping_price?: number
  shipping_type_label?: string
  shipping_tracking?: string
  shipping_carrier_code?: string
  customer?: {
    firstname?: string
    lastname?: string
    shipping_address?: {
      firstname?: string
      lastname?: string
      company?: string
      street_1?: string
      street_2?: string
      zip_code?: string
      city?: string
      country?: string
      phone?: string
    }
  }
  customer_notification_email?: string
  order_lines: EmpikOrderLine[]
}

export const ORDER_STATE_PL: Record<string, string> = {
  STAGING: 'weryfikacja',
  WAITING_ACCEPTANCE: 'czeka na akceptację',
  WAITING_DEBIT: 'czeka na płatność',
  WAITING_DEBIT_PAYMENT: 'czeka na płatność',
  SHIPPING: 'do wysyłki',
  SHIPPED: 'wysłane',
  TO_COLLECT: 'do odbioru',
  RECEIVED: 'odebrane',
  CLOSED: 'zakończone',
  REFUSED: 'odrzucone',
  CANCELED: 'anulowane',
}

export async function listEmpikOrders(opts?: {
  states?: string[]
  max?: number
}): Promise<{ orders: EmpikOrder[]; total: number }> {
  const params = new URLSearchParams({ max: String(opts?.max ?? 50), sort: 'dateCreated', order: 'desc' })
  if (opts?.states?.length) params.set('order_state_codes', opts.states.join(','))
  const d = await empikFetch<{ orders: EmpikOrder[]; total_count: number }>(`/orders?${params}`)
  return { orders: d.orders || [], total: d.total_count ?? 0 }
}

export async function getEmpikOrder(orderId: string): Promise<EmpikOrder | null> {
  const d = await empikFetch<{ orders: EmpikOrder[] }>(`/orders?order_ids=${encodeURIComponent(orderId)}`)
  return d.orders?.[0] ?? null
}

/** Wywołanie bez treści odpowiedzi (Mirakl zwraca 204). */
async function empikSend(path: string, method: string, body?: unknown): Promise<void> {
  const key = process.env.EMPIK_API_KEY
  if (!key) throw new Error('Brak EMPIK_API_KEY w env')
  const res = await fetch(`https://marketplace.empik.com/api${path}`, {
    method,
    headers: { Authorization: key, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(`Empik API ${res.status} ${path}: ${t.slice(0, 300)}`)
  }
}

/** OR21 — akceptacja wszystkich linii zamówienia. */
export async function acceptEmpikOrder(order: EmpikOrder): Promise<void> {
  await empikSend(`/orders/${encodeURIComponent(order.order_id)}/accept`, 'PUT', {
    order_lines: order.order_lines.map((l) => ({ id: l.order_line_id, accepted: true })),
  })
}

/** OR23 + OR24 — numer śledzenia i oznaczenie jako wysłane. */
export async function shipEmpikOrder(orderId: string, carrierName: string, trackingNumber: string): Promise<void> {
  await empikSend(`/orders/${encodeURIComponent(orderId)}/tracking`, 'PUT', {
    carrier_name: carrierName,
    tracking_number: trackingNumber,
  })
  await empikSend(`/orders/${encodeURIComponent(orderId)}/ship`, 'PUT')
}
