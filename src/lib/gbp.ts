/**
 * Klient wizytówki Google (Google Business Profile) dla panelu /admin/wizytowka.
 *
 * FAZA 1 — Places API (New): publiczne dane wizytówki (ocena, opinie, godziny,
 *   kategorie, zdjęcia, telefon). Wymaga tylko klucza GOOGLE_PLACES_API_KEY + GBP_PLACE_ID.
 * FAZA 2 — Business Profile API (bramkowane, OAuth): zapis (odpowiedzi/posty),
 *   prywatne statystyki (telefony/trasy), ochrona. Patrz businessApiConfigured().
 */

export interface GbpReview {
  author: string
  rating: number
  text: string
  relativeTime: string
  publishTime: string
}

export interface GbpProfile {
  name: string
  rating: number | null
  reviewCount: number
  primaryType: string | null
  types: string[]
  phone: string | null
  website: string | null
  address: string | null
  mapsUri: string | null
  businessStatus: string | null
  summary: string | null // editorialSummary
  photoCount: number
  openNow: boolean | null
  hours: string[] // weekday descriptions
  reviews: GbpReview[]
  fetchedAt: string
}

/** FAZA 1 skonfigurowana? (Places API + Place ID) */
export function gbpConfigured(): boolean {
  return Boolean(process.env.GOOGLE_PLACES_API_KEY && process.env.GBP_PLACE_ID)
}

/** FAZA 2 skonfigurowana? (Business Profile API przez OAuth) */
export function businessApiConfigured(): boolean {
  return Boolean(
    process.env.GBP_OAUTH_CLIENT_ID &&
    process.env.GBP_OAUTH_CLIENT_SECRET &&
    process.env.GBP_OAUTH_REFRESH_TOKEN &&
    process.env.GBP_LOCATION_ID
  )
}

const FIELDS = [
  'id', 'displayName', 'rating', 'userRatingCount', 'primaryTypeDisplayName', 'types',
  'nationalPhoneNumber', 'internationalPhoneNumber', 'websiteUri', 'formattedAddress',
  'googleMapsUri', 'businessStatus', 'editorialSummary', 'photos',
  'currentOpeningHours', 'regularOpeningHours', 'reviews',
].join(',')

type PlaceJson = {
  displayName?: { text?: string }
  rating?: number
  userRatingCount?: number
  primaryTypeDisplayName?: { text?: string }
  types?: string[]
  nationalPhoneNumber?: string
  internationalPhoneNumber?: string
  websiteUri?: string
  formattedAddress?: string
  googleMapsUri?: string
  businessStatus?: string
  editorialSummary?: { text?: string }
  photos?: unknown[]
  currentOpeningHours?: { openNow?: boolean; weekdayDescriptions?: string[] }
  regularOpeningHours?: { weekdayDescriptions?: string[] }
  reviews?: Array<{
    rating?: number
    text?: { text?: string }
    originalText?: { text?: string }
    authorAttribution?: { displayName?: string }
    relativePublishTimeDescription?: string
    publishTime?: string
  }>
}

/** Pobiera publiczne dane wizytówki z Places API (New). Rzuca przy błędzie konfiguracji/HTTP. */
export async function fetchPlaceDetails(): Promise<GbpProfile> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GBP_PLACE_ID
  if (!key || !placeId) throw new Error('Brak GOOGLE_PLACES_API_KEY lub GBP_PLACE_ID')

  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pl`, {
    headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': FIELDS },
    cache: 'no-store',
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Places API ${res.status}: ${body.slice(0, 300)}`)
  }
  const p = (await res.json()) as PlaceJson

  return {
    name: p.displayName?.text || 'Wizytówka',
    rating: p.rating ?? null,
    reviewCount: p.userRatingCount ?? 0,
    primaryType: p.primaryTypeDisplayName?.text || null,
    types: p.types || [],
    phone: p.nationalPhoneNumber || p.internationalPhoneNumber || null,
    website: p.websiteUri || null,
    address: p.formattedAddress || null,
    mapsUri: p.googleMapsUri || null,
    businessStatus: p.businessStatus || null,
    summary: p.editorialSummary?.text || null,
    photoCount: Array.isArray(p.photos) ? p.photos.length : 0,
    openNow: p.currentOpeningHours?.openNow ?? null,
    hours: p.currentOpeningHours?.weekdayDescriptions || p.regularOpeningHours?.weekdayDescriptions || [],
    reviews: (p.reviews || []).map((r) => ({
      author: r.authorAttribution?.displayName || 'Anonim',
      rating: r.rating ?? 0,
      text: r.text?.text || r.originalText?.text || '',
      relativeTime: r.relativePublishTimeDescription || '',
      publishTime: r.publishTime || '',
    })),
    fetchedAt: new Date().toISOString(),
  }
}

/** Zwięzły opis profilu do promptów AI (audyt/zadania/czat). */
export function profileForPrompt(p: GbpProfile): string {
  return [
    `Nazwa: ${p.name}`,
    `Status: ${p.businessStatus || 'brak'} | Ocena: ${p.rating ?? 'brak'} (${p.reviewCount} opinii)`,
    `Kategoria główna: ${p.primaryType || 'brak'} | Typy: ${p.types.join(', ') || 'brak'}`,
    `Telefon: ${p.phone || 'BRAK'} | WWW: ${p.website || 'BRAK'} | Adres: ${p.address || 'brak'}`,
    `Opis (editorial): ${p.summary || 'BRAK'}`,
    `Zdjęcia (widoczne w API): ${p.photoCount}`,
    `Godziny: ${p.hours.join(' | ') || 'BRAK'}`,
    `Najnowsze opinie (max 5 z Places API):`,
    ...p.reviews.map((r) => `  - [${r.rating}★ ${r.relativeTime}] ${r.author}: ${r.text.slice(0, 240)}`),
    `WAŻNE: Places API NIE zwraca odpowiedzi właściciela na opinie — NIE wnioskuj, że firma nie odpowiedziała. Informacja o odpowiedziach będzie dostępna dopiero w Fazie 2 (Business Profile API).`,
  ].join('\n')
}
