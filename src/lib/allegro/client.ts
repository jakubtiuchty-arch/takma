import { getValidAccessToken } from './auth'

const API_BASE = process.env.ALLEGRO_API_BASE || 'https://api.allegro.pl.allegrosandbox.pl'
const ALLEGRO_ACCEPT = 'application/vnd.allegro.public.v1+json'

export class AllegroNotConnectedError extends Error {
  constructor() {
    super('Brak połączenia z Allegro — kliknij „Połącz z Allegro" w konfiguracji.')
    this.name = 'AllegroNotConnectedError'
  }
}

/**
 * Wywołanie REST API Allegro z ważnym access tokenem (auto-refresh w getValidAccessToken).
 * Rzuca AllegroNotConnectedError, gdy brak połączenia.
 */
export async function allegroFetch<T = unknown>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const token = await getValidAccessToken()
  if (!token) throw new AllegroNotConnectedError()

  const headers = new Headers(init.headers)
  headers.set('Authorization', `Bearer ${token}`)
  headers.set('Accept', ALLEGRO_ACCEPT)
  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', ALLEGRO_ACCEPT)
  }

  const res = await fetch(`${API_BASE}${path}`, { ...init, headers })
  const text = await res.text()
  const data = text ? JSON.parse(text) : null
  if (!res.ok) {
    const msg = data?.errors?.[0]?.message || data?.message || res.statusText
    throw new Error(`Allegro API ${res.status} ${path}: ${msg}`)
  }
  return data as T
}
