/**
 * Treść strony z serwera dla widoków błędu (app/global-error.tsx, error.tsx kart).
 * Widok błędu czyta DOM w swoim pierwszym renderze. React jeszcze go wtedy nie podmienił,
 * więc HTML z serwera (tytuł, canonical, treść, JSON-LD) jest na miejscu. Dzięki temu
 * Google indeksuje kartę z jej treścią, a nie ogólny ekran „Application error”.
 */

const norm = (p: string) => { try { return decodeURI(p) } catch { return p } }

// Ścieżka dokumentu z serwera. Moduł importuje LayoutShell, więc wartość powstaje przy starcie aplikacji.
const sciezkaStartowa = typeof window === 'undefined' ? null : norm(window.location.pathname)
let bylaNawigacja = false

/** LayoutShell zgłasza każdą ścieżkę. Po nawigacji w przeglądarce DOM nie pochodzi już z serwera. */
export function oznaczSciezke(sciezka: string) {
  if (sciezkaStartowa !== null && norm(sciezka) !== sciezkaStartowa) bylaNawigacja = true
}

// Przy nawigacji w przeglądarce DOM w chwili błędu pokazuje jeszcze poprzednią stronę.
// Jej treść pod nowym adresem byłaby myląca, więc snapshot bierzemy tylko z pierwszego wejścia.
function domZSerwera(sciezka: string) {
  return typeof document !== 'undefined' && !bylaNawigacja && norm(sciezka) === sciezkaStartowa
}

// Treść #main-content, o ile nie zawiera już widoku błędu (wtedy nie pochodzi z serwera).
function trescGlowna(): string | null {
  const main = document.getElementById('main-content')
  if (!main || main.querySelector('[data-blad-strony]')) return null
  return main.innerHTML
}

export type SnapshotStrony = {
  tytul: string
  canonical: string | null
  opis: string | null
  tresc: string | null
  ld: string[]
  klasaHtml: string
  klasaBody: string
}

export function snapshotStrony(): SnapshotStrony {
  if (typeof document === 'undefined') {
    return { tytul: 'TAKMA', canonical: null, opis: null, tresc: null, ld: [], klasaHtml: '', klasaBody: '' }
  }
  const klasaHtml = document.documentElement.className
  const klasaBody = document.body?.className ?? ''
  const wlasnyAdres = location.origin + location.pathname
  if (!domZSerwera(location.pathname)) {
    return { tytul: 'TAKMA', canonical: wlasnyAdres, opis: null, tresc: null, ld: [], klasaHtml, klasaBody }
  }
  const main = document.getElementById('main-content')
  return {
    tytul: document.title || 'TAKMA',
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? wlasnyAdres,
    opis: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null,
    tresc: trescGlowna(),
    // JSON-LD z <main> jest już w `tresc`. Globalne JSON-LD z <head> (Organization, WebSite) React zostawia sam.
    ld: Array.from(document.querySelectorAll('body script[type="application/ld+json"]'))
      .filter(s => !main?.contains(s))
      .map(s => s.textContent || ''),
    klasaHtml,
    klasaBody,
  }
}

const tresci = new Map<string, string | null>()

/**
 * Treść #main-content dla error.tsx segmentu. Pamięć na ścieżkę, bo po reset()
 * i ponownym błędzie DOM zawiera już widok błędu, a nie HTML z serwera.
 */
export function snapshotTresci(sciezka: string): string | null {
  if (typeof document === 'undefined') return null
  if (tresci.has(sciezka)) return tresci.get(sciezka) ?? null
  const html = domZSerwera(sciezka) ? trescGlowna() : null
  tresci.set(sciezka, html)
  return html
}

export function czyChunkLoadError(error: { name?: string; message?: string } | null | undefined) {
  return error?.name === 'ChunkLoadError' || /Loading (CSS )?chunk/i.test(error?.message ?? '')
}
