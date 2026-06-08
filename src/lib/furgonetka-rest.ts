import type { AllegroOrder } from './allegro/orders'

/**
 * Klient REST API Furgonetki (api.furgonetka.pl) — tworzenie przesyłek + etykiety.
 * OAuth2 client_credentials (Client ID/Secret z aplikacji OAuth Furgonetki).
 *
 * Env:
 *  FURGONETKA_CLIENT_ID, FURGONETKA_CLIENT_SECRET
 *  FURGONETKA_SENDER_NAME, _COMPANY, _STREET, _POSTCODE, _CITY, _PHONE, _EMAIL
 */

const API = 'https://api.furgonetka.pl'
const ACCEPT = 'application/vnd.furgonetka.v1+json'

export interface FurgAddress {
  name: string
  company?: string
  street: string
  postcode: string
  city: string
  country_code: string
  email: string
  phone: string
  point?: string
}

export interface FurgParcel {
  width: number
  height: number
  depth: number
  weight: number
  value?: number
  description?: string
}

let cached: { token: string; exp: number } | null = null

export function furgonetkaConfigured(): boolean {
  return !!process.env.FURGONETKA_CLIENT_ID && !!process.env.FURGONETKA_CLIENT_SECRET
}

async function getToken(): Promise<string> {
  if (cached && cached.exp > Date.now() + 30_000) return cached.token
  const id = process.env.FURGONETKA_CLIENT_ID || ''
  const secret = process.env.FURGONETKA_CLIENT_SECRET || ''
  if (!id || !secret) throw new Error('Brak FURGONETKA_CLIENT_ID / SECRET w env.')
  const username = process.env.FURGONETKA_USERNAME || ''
  const password = process.env.FURGONETKA_PASSWORD || ''
  const basic = Buffer.from(`${id}:${secret}`).toString('base64')

  // Operacje na koncie (tworzenie przesyłek) wymagają kontekstu użytkownika →
  // grant_type=password (login+hasło konta Furgonetka). client_credentials daje
  // token aplikacji bez dostępu do /account/* (401 user authentication).
  const body =
    username && password
      ? new URLSearchParams({ grant_type: 'password', scope: 'api', username, password })
      : new URLSearchParams({ grant_type: 'client_credentials', scope: 'api' })

  const res = await fetch(`${API}/oauth/token`, {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const txt = await res.text()
  if (!res.ok) throw new Error(`Furgonetka OAuth ${res.status}: ${txt.slice(0, 200)}`)
  const j = JSON.parse(txt)
  cached = { token: j.access_token, exp: Date.now() + (j.expires_in || 3600) * 1000 }
  return cached.token
}

async function furgFetch<T = unknown>(path: string, init: RequestInit = {}): Promise<T> {
  const token = await getToken()
  const headers = new Headers(init.headers)
  headers.set('Authorization', `Bearer ${token}`)
  headers.set('Accept', ACCEPT)
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  const res = await fetch(`${API}${path}`, { ...init, headers })
  const txt = await res.text()
  const data = txt ? JSON.parse(txt) : null
  if (!res.ok) {
    const msg = data?.errors?.[0]?.message || data?.message || res.statusText
    throw new Error(`Furgonetka ${res.status} ${path}: ${msg}`)
  }
  return data as T
}

export function senderAddress(): FurgAddress {
  return {
    name: process.env.FURGONETKA_SENDER_NAME || 'TAKMA',
    company: process.env.FURGONETKA_SENDER_COMPANY || 'TAKMA',
    street: process.env.FURGONETKA_SENDER_STREET || '',
    postcode: process.env.FURGONETKA_SENDER_POSTCODE || '',
    city: process.env.FURGONETKA_SENDER_CITY || '',
    country_code: 'PL',
    email: process.env.FURGONETKA_SENDER_EMAIL || 'takma@takma.com.pl',
    phone: process.env.FURGONETKA_SENDER_PHONE || '',
  }
}

export function receiverAddress(o: AllegroOrder): FurgAddress {
  const a = o.delivery?.address
  return {
    name: [a?.firstName, a?.lastName].filter(Boolean).join(' ') || o.buyer?.login || 'Klient',
    company: a?.companyName || '',
    street: a?.street || '',
    postcode: a?.zipCode || '',
    city: a?.city || '',
    country_code: a?.countryCode || 'PL',
    email: o.buyer?.email || '',
    phone: a?.phoneNumber || o.buyer?.phoneNumber || '',
    point: o.delivery?.pickupPoint?.id || undefined,
  }
}

export function buildParcels(o: AllegroOrder): FurgParcel[] {
  const count = (o.lineItems || []).reduce((s, li) => s + (li.quantity || 1), 0) || 1
  return [
    {
      width: 20,
      height: 15,
      depth: 10,
      weight: Math.max(0.5, count * 0.3),
      value: Number(o.summary?.totalToPay?.amount || 0),
      description: 'Materiały eksploatacyjne',
    },
  ]
}

/** Mapuje metodę dostawy Allegro → słowo-klucz przewoźnika do dopasowania usługi. */
export function carrierKeyword(methodName?: string): string {
  const n = (methodName || '').toLowerCase()
  if (n.includes('paczkomat') || n.includes('inpost')) return 'inpost'
  if (n.includes('dpd')) return 'dpd'
  if (n.includes('dhl')) return 'dhl'
  if (n.includes('gls')) return 'gls'
  if (n.includes('ups')) return 'ups'
  if (n.includes('fedex')) return 'fedex'
  if (n.includes('orlen') || n.includes('żabka') || n.includes('zabka')) return 'orlen'
  if (n.includes('poczt')) return 'poczta'
  return ''
}

export interface FurgService {
  id: number
  service: string // slug: dpd, inpost, dhl, gls, ups, orlen, poczta, fedex…
  name: string
}

/** Lista usług kurierskich skonfigurowanych na koncie (z id). */
export async function getServices(): Promise<FurgService[]> {
  const j = await furgFetch<{ services?: FurgService[] }>(`/account/services`)
  return j.services || []
}

/** Wybiera service_id pasujący do nazwy przewoźnika (po slug). */
export function pickService(carrierName: string | undefined, services: FurgService[]): number | null {
  const kw = carrierKeyword(carrierName)
  if (kw) {
    const match = services.find((s) => (s.service || '').toLowerCase().startsWith(kw))
    if (match) return match.id
  }
  return services[0]?.id ?? null
}

/** Parsuje adres-tekst sklepu (np. „Morska 15e, 76-270 Przewłoka") → ulica/kod/miasto. */
export function parseAddress(text?: string): { street: string; postcode: string; city: string } {
  const t = (text || '').replace(/\n/g, ', ').replace(/\s+/g, ' ').trim()
  const pc = t.match(/(\d{2}-\d{3})/)
  if (!pc) return { street: t, postcode: '', city: '' }
  const postcode = pc[1]
  const before = t.slice(0, pc.index).replace(/[,\s]+$/, '').trim()
  const after = t.slice((pc.index || 0) + postcode.length).replace(/^[,\s]+/, '').trim()
  return { street: before, postcode, city: after }
}

/** Tworzy przesyłkę → zwraca id paczki + numer listu (jeśli zwrócony). */
export async function createPackage(
  reference: string,
  serviceId: number,
  receiver: FurgAddress,
  parcels: FurgParcel[],
): Promise<{ id: string; tracking?: string }> {
  const body = {
    sender: senderAddress(),
    pickup: senderAddress(),
    receiver,
    service_id: serviceId,
    parcels,
    type: 'package',
    user_reference_number: reference,
  }
  const j = await furgFetch<{ id?: string; package_id?: string; tracking_number?: string }>(`/packages`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return { id: String(j.id || j.package_id || ''), tracking: j.tracking_number }
}

/** Pobiera numer listu przewozowego przesyłki (z detali paczki). */
export async function getPackageTracking(packageId: string): Promise<string> {
  try {
    const j = await furgFetch<{ tracking_number?: string; parcels?: Array<{ tracking_number?: string }> }>(
      `/packages/${packageId}`,
    )
    return j.tracking_number || j.parcels?.[0]?.tracking_number || ''
  } catch {
    return ''
  }
}

export interface FurgPackageSummary {
  id: string
  ref: string | null // user_reference_number = nasz orderId
  tracking: string | null
  state: string
  stateDescription: string
  receiverName: string | null
  receiverPostcode: string | null
  datetimeAdd: string | null
  cancelAvailable: boolean
  editUrl: string | null
}

interface FurgListItem {
  package_id: string | number
  user_reference_number?: string | number | null
  datetime_add?: string | null
  cancel_available?: boolean
  edit_url?: string | null
  state?: string
  receiver?: { name?: string; postcode?: string }
  parcels?: Array<{ package_no?: string | null; tracking_number?: string | null; state?: string; state_description?: string }>
}

/** Lista paczek z konta (paginacja). Do wykrywania duplikatów. */
export async function listAllPackages(maxPages = 10): Promise<FurgPackageSummary[]> {
  const out: FurgPackageSummary[] = []
  for (let page = 1; page <= maxPages; page++) {
    const j = await furgFetch<{ packages?: FurgListItem[]; data?: FurgListItem[] }>(`/packages?page=${page}&limit=100`)
    const arr = j.packages || j.data || []
    for (const p of arr) {
      const pcl = p.parcels?.[0] || {}
      out.push({
        id: String(p.package_id),
        ref: p.user_reference_number != null ? String(p.user_reference_number) : null,
        tracking: pcl.package_no || pcl.tracking_number || null,
        state: pcl.state || p.state || 'unknown',
        stateDescription: pcl.state_description || '',
        receiverName: p.receiver?.name || null,
        receiverPostcode: p.receiver?.postcode || null,
        datetimeAdd: p.datetime_add || null,
        cancelAvailable: !!p.cancel_available,
        editUrl: p.edit_url || null,
      })
    }
    if (arr.length < 100) break
  }
  return out
}

/** Anuluj paczkę (gdy cancel_available). Best-effort. */
export async function cancelPackage(packageId: string): Promise<void> {
  await furgFetch(`/packages/${packageId}/cancel`, { method: 'POST', body: '{}' })
}

export interface FurgPackageStatus {
  state: string
  description: string
  station: string | null
  datetimeStatus: string | null
  trackingUrl: string | null
  trackingNumber: string | null
}

/** Bieżący status przesyłki z detali paczki (Furgonetka nie ma historii zdarzeń). */
export async function getPackageStatus(packageId: string): Promise<FurgPackageStatus | null> {
  try {
    const j = await furgFetch<{
      state?: string
      tracking_number?: string
      parcels?: Array<{
        state?: string
        state_description?: string
        station?: string | null
        datetime_status?: string | null
        tracking_url?: string | null
        package_no?: string | null
      }>
    }>(`/packages/${packageId}`)
    const p = j.parcels?.[0] || {}
    return {
      state: p.state || j.state || 'unknown',
      description: p.state_description || '',
      station: p.station || null,
      datetimeStatus: p.datetime_status || null,
      trackingUrl: p.tracking_url || null,
      trackingNumber: p.package_no || j.tracking_number || null,
    }
  } catch {
    return null
  }
}

/** Pobiera etykietę PDF (base64). */
export async function getLabel(packageId: string): Promise<string> {
  const token = await getToken()
  const res = await fetch(`${API}/packages/${packageId}/label`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/pdf, ' + ACCEPT },
  })
  if (!res.ok) throw new Error(`Furgonetka label ${res.status}`)
  const ct = res.headers.get('content-type') || ''
  if (ct.includes('application/json')) {
    const j = await res.json()
    // dokumenty bywają zwracane jako base64 w polu file/content
    return j.file || j.content || j.label || ''
  }
  const buf = Buffer.from(await res.arrayBuffer())
  return buf.toString('base64')
}

/**
 * Etykieta z ponawianiem — Furgonetka generuje PDF asynchronicznie, więc tuż po
 * utworzeniu paczki `getLabel` często zwraca 400 (jeszcze nie gotowe). Zwraca
 * base64 albo null (po wyczerpaniu prób), bez rzucania — przesyłka i tak istnieje.
 */
export async function getLabelRetry(packageId: string, attempts = 5, delayMs = 2000): Promise<string | null> {
  for (let i = 0; i < attempts; i++) {
    try {
      const b64 = await getLabel(packageId)
      if (b64) return b64
    } catch {
      /* etykieta jeszcze się generuje — ponawiamy */
    }
    if (i < attempts - 1) await new Promise((r) => setTimeout(r, delayMs))
  }
  return null
}
