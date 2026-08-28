/**
 * IndexNow — zgłaszanie zmian do Bing (i Yandex, Seznam, Naver).
 *
 * Bing odpowiada u nas za ~15% ruchu organicznego, a bez IndexNow indeksuje
 * zmiany własnym tempem, czyli w tygodniach. Protokół działa odwrotnie niż
 * mapa strony: to my mówimy wyszukiwarce „ten adres się zmienił", a ona
 * przychodzi po treść w ciągu minut. Google nie obsługuje IndexNow i tam nadal
 * liczy się sitemap plus wewnętrzne linkowanie.
 *
 * Klucz nie jest tajny — leży w public/<klucz>.txt i to właśnie ten plik jest
 * dowodem, że adres należy do nas. Zmiana klucza wymaga podmiany obu miejsc.
 */

export const INDEXNOW_KEY = '7acc440b56295636d96c9aa05d4d3d6e'

const HOST = 'www.takma.com.pl'
const ENDPOINT = 'https://api.indexnow.org/indexnow'

/** IndexNow przyjmuje maksymalnie 10 000 adresów w jednym zgłoszeniu. */
const LIMIT = 10_000

export interface WynikIndexNow {
  ok: boolean
  zgloszono: number
  status?: number
  blad?: string
}

/**
 * Zgłasza adresy do IndexNow. Ścieżki („/uzywane/tc57") zamieniamy na pełne
 * adresy; obce domeny odrzucamy, bo IndexNow przyjmuje wyłącznie adresy z
 * hosta, do którego pasuje klucz.
 */
export async function zglosDoIndexNow(adresy: string[]): Promise<WynikIndexNow> {
  const urlList = Array.from(
    new Set(
      adresy
        .map((a) => (a.startsWith('http') ? a : `https://${HOST}${a.startsWith('/') ? a : `/${a}`}`))
        .filter((a) => a.startsWith(`https://${HOST}/`) || a === `https://${HOST}`),
    ),
  ).slice(0, LIMIT)

  if (urlList.length === 0) return { ok: true, zgloszono: 0 }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
      signal: AbortSignal.timeout(15_000),
    })

    // 200 = przyjęte, 202 = przyjęte do weryfikacji klucza. Reszta to problem.
    if (res.status !== 200 && res.status !== 202) {
      const tresc = await res.text().catch(() => '')
      console.error(`[IndexNow] HTTP ${res.status}: ${tresc.slice(0, 200)}`)
      return { ok: false, zgloszono: 0, status: res.status, blad: tresc.slice(0, 200) }
    }

    console.log(`[IndexNow] zgłoszono ${urlList.length} adresów (HTTP ${res.status})`)
    return { ok: true, zgloszono: urlList.length, status: res.status }
  } catch (e) {
    console.error('[IndexNow] błąd wysyłki:', (e as Error).message)
    return { ok: false, zgloszono: 0, blad: (e as Error).message }
  }
}

/**
 * Zgłoszenie „w tle" — do wołania z akcji panelu, gdzie nie chcemy, żeby
 * odpowiedź czekała na wyszukiwarkę ani żeby jej błąd wywrócił zapis.
 */
export function zglosWTle(adresy: string[]): void {
  void zglosDoIndexNow(adresy).catch(() => {})
}
