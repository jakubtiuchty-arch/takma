/**
 * Zgłaszanie wyjątków z przeglądarki do /api/log/client-error (tylko logi Vercel).
 * Cel: poznać wyjątek, który w rendererze Google zamienia kartę na ekran błędu.
 * Bez danych osobowych: sama ścieżka (bez query), nazwa i treść błędu, skrócony stos, UA.
 */

const ADRES = '/api/log/client-error'
// Jedna strona z pętlą błędów nie może zalać logów.
const LIMIT_NA_STRONE = 5

let wyslane = 0
const zgloszone = new Set<string>()

function numerWdrozenia(): string | null {
  const src = document.querySelector('script[src*="dpl="]')?.getAttribute('src')
  if (!src) return null
  try { return new URL(src, location.href).searchParams.get('dpl') } catch { return null }
}

function wyslij(body: string) {
  const beacon = () => { try { navigator.sendBeacon?.(ADRES, body) } catch { /* brak beacona */ } }
  try {
    fetch(ADRES, { method: 'POST', keepalive: true, headers: { 'content-type': 'application/json' }, body }).catch(beacon)
  } catch {
    beacon()
  }
}

export function zglosBladKlienta(err: unknown, zrodlo: string) {
  if (typeof window === 'undefined') return
  try {
    const e = err instanceof Error ? err : null
    const name = e?.name || 'Error'
    const message = String(e ? e.message : err ?? '').slice(0, 300)
    const klucz = `${zrodlo}|${name}|${message}`
    if (zgloszone.has(klucz) || wyslane >= LIMIT_NA_STRONE) return
    zgloszone.add(klucz)
    wyslane++
    wyslij(JSON.stringify({
      url: location.pathname,
      name,
      message,
      stack: (e?.stack || '').slice(0, 800),
      zrodlo,
      ua: navigator.userAgent,
      dpl: numerWdrozenia(),
      ts: Date.now(),
    }))
  } catch { /* zgłoszenie nie może samo wywołać błędu */ }
}

/**
 * Globalne nasłuchiwanie: wyjątki spoza Reacta, odrzucone obietnice
 * i nieudane pobranie skryptu lub arkusza z /_next/. Zwraca funkcję sprzątającą.
 */
export function nasluchujBledowKlienta(): () => void {
  const onError = (ev: Event) => {
    if (ev instanceof ErrorEvent) {
      // „Script error.” bez obiektu błędu = skrypt z innej domeny (GA, Clarity). Nic nie wnosi.
      if (!ev.error && (!ev.message || ev.message === 'Script error.')) return
      zglosBladKlienta(ev.error ?? new Error(ev.message), 'window-error')
      return
    }
    const el = ev.target
    const src = el instanceof HTMLScriptElement ? el.src : el instanceof HTMLLinkElement ? el.href : ''
    if (!src.includes('/_next/')) return
    const blad = new Error(`Nie wczytano zasobu ${src.replace(location.origin, '')}`)
    blad.name = 'ResourceLoadError'
    zglosBladKlienta(blad, 'resource')
  }
  const onRejection = (ev: PromiseRejectionEvent) => zglosBladKlienta(ev.reason, 'unhandledrejection')
  // Faza przechwytywania: błąd ładowania <script> nie wypływa do window.
  window.addEventListener('error', onError, true)
  window.addEventListener('unhandledrejection', onRejection)
  return () => {
    window.removeEventListener('error', onError, true)
    window.removeEventListener('unhandledrejection', onRejection)
  }
}
