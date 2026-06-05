import { allegroFetch } from './client'

/** Bazowy URL publiczny strony — źródło obrazów dla Allegro (musi być dostępny z sieci). */
export const SITE_BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.takma.com.pl'

/** Złóż absolutny URL obrazu z lokalnej ścieżki /images/... */
export function absoluteImageUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_BASE}${path.startsWith('/') ? '' : '/'}${path}`
}

interface AllegroImageResponse {
  location: string
}

/**
 * Wgraj obraz do Allegro przez URL (Allegro pobiera i hostuje u siebie).
 * Zwraca URL obrazu po stronie Allegro — używany w product.images.
 * Cache w pamięci procesu: ten sam URL nie jest wgrywany dwa razy w jednym runie.
 */
const cache = new Map<string, string>()

export async function uploadImageByUrl(imageUrl: string): Promise<string> {
  const abs = absoluteImageUrl(imageUrl)
  const cached = cache.get(abs)
  if (cached) return cached
  const res = await allegroFetch<AllegroImageResponse>('/sale/images', {
    method: 'POST',
    body: JSON.stringify({ url: abs }),
  })
  cache.set(abs, res.location)
  return res.location
}
