import { prisma } from '@/lib/db'
import { fetchPlaceDetails, type GbpProfile } from '@/lib/gbp'

/** Profil z cache (snapshot w DB) lub świeży z Places API, jeśli starszy niż maxAgeMin. */
export async function getCachedProfile(maxAgeMin = 720): Promise<GbpProfile> {
  const latest = await prisma.gbpSnapshot.findFirst({ orderBy: { createdAt: 'desc' } })
  if (latest && Date.now() - latest.createdAt.getTime() < maxAgeMin * 60_000) {
    try { return JSON.parse(latest.data) as GbpProfile } catch { /* refetch */ }
  }
  return refreshProfile()
}

/** Wymusza świeże pobranie i zapis snapshotu. */
export async function refreshProfile(): Promise<GbpProfile> {
  const p = await fetchPlaceDetails()
  await prisma.gbpSnapshot
    .create({ data: { data: JSON.stringify(p), rating: p.rating ?? undefined, reviews: p.reviewCount } })
    .catch(() => {})
  return p
}
