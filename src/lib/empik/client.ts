/**
 * Klient API EmpikPlace (platforma Mirakl, seller API).
 *
 * Autoryzacja: statyczny klucz API z panelu sprzedawcy (Ustawienia osobiste →
 * Klucz API) w nagłówku `Authorization`. Brak OAuth — prościej niż Allegro.
 *
 * Env: EMPIK_API_KEY
 */

const EMPIK_API_BASE = 'https://marketplace.empik.com/api'

function apiKey(): string {
  const key = process.env.EMPIK_API_KEY
  if (!key) throw new Error('Brak EMPIK_API_KEY w env')
  return key
}

export async function empikFetch<T = unknown>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${EMPIK_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: apiKey(),
      Accept: 'application/json',
      ...(init?.headers || {}),
    },
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Empik API ${res.status} ${path}: ${body.slice(0, 500)}`)
  }
  return res.json() as Promise<T>
}

export interface EmpikProduct {
  product_id: string // EAN
  product_id_type: string
  product_sku: string
  product_title: string
  category_code: string
  category_label: string
}

/**
 * P31 — które EAN-y mają już kartę produktu w katalogu Empika.
 * Oferta podpina się do karty po EAN; bez karty import oferty kończy się błędem,
 * więc wysyłamy tylko dopasowane. Batch po 50 (limit długości URL).
 */
export async function empikProductsByEans(eans: string[]): Promise<Map<string, EmpikProduct>> {
  const found = new Map<string, EmpikProduct>()
  for (let i = 0; i < eans.length; i += 50) {
    const refs = eans
      .slice(i, i + 50)
      .map((e) => `EAN|${e}`)
      .join(',')
    const data = await empikFetch<{ products: EmpikProduct[] }>(
      `/products?product_references=${encodeURIComponent(refs)}`
    )
    for (const p of data.products || []) found.set(p.product_id, p)
  }
  return found
}

/** OF01 — import pliku CSV ofert (create/update po SKU w trybie NORMAL). */
export async function empikImportOffersCsv(csv: string): Promise<{ import_id: number }> {
  const form = new FormData()
  // BOM, żeby polskie znaki na pewno przeszły jako UTF-8
  form.append('file', new Blob(['﻿' + csv], { type: 'text/csv' }), 'offers.csv')
  form.append('import_mode', 'NORMAL')
  return empikFetch<{ import_id: number }>('/offers/imports', { method: 'POST', body: form })
}

export interface EmpikImportInfo {
  import_id: number
  status: string // WAITING, RUNNING, COMPLETE, FAILED
  lines_in_error: number
  lines_in_success: number
  lines_read: number
  has_error_report: boolean
  date_created: string
}

/** OF02 — status importu ofert. */
export async function empikOfferImportInfo(importId: number): Promise<EmpikImportInfo> {
  return empikFetch<EmpikImportInfo>(`/offers/imports/${importId}`)
}

export interface EmpikOffer {
  offer_id: number
  shop_sku: string
  product_title?: string
  product_references?: Array<{ reference: string; reference_type: string }>
  price: number
  quantity: number
  active: boolean
  state_code?: string
}

/** OF21 — lista naszych ofert. */
export async function empikListOffers(max = 100, offset = 0): Promise<{ offers: EmpikOffer[]; total: number }> {
  const d = await empikFetch<{ offers: EmpikOffer[]; total_count: number }>(`/offers?max=${max}&offset=${offset}`)
  return { offers: d.offers || [], total: d.total_count ?? 0 }
}

/** OF03 — raport błędów importu (CSV jako tekst). */
export async function empikOfferImportErrorReport(importId: number): Promise<string> {
  const res = await fetch(`${EMPIK_API_BASE}/offers/imports/${importId}/error_report`, {
    headers: { Authorization: apiKey() },
  })
  if (!res.ok) throw new Error(`Empik error_report ${res.status}`)
  return res.text()
}
