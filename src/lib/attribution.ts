/**
 * Odczyt atrybucji marketingowej z ciasteczek (ustawianych przez AttributionTracker).
 * Używane przy zapisie leadów (formularze) i zamówień.
 */
import { cookies } from 'next/headers'

export interface Attribution {
  gclid: string | null
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
  landingPage: string | null
  gclidAt: Date | null
  journey: string | null // JSON array stron
}

export async function readAttribution(): Promise<Attribution> {
  const empty: Attribution = { gclid: null, utmSource: null, utmMedium: null, utmCampaign: null, landingPage: null, gclidAt: null, journey: null }
  try {
    const store = await cookies()
    const attrRaw = store.get('takma_attr')?.value
    const journeyRaw = store.get('takma_journey')?.value

    let attr: Partial<Attribution> & { ts?: number } = {}
    if (attrRaw) {
      try { attr = JSON.parse(attrRaw) } catch { /* uszkodzone — pomiń */ }
    }
    let journey: string | null = null
    if (journeyRaw) {
      try {
        const arr = JSON.parse(journeyRaw)
        if (Array.isArray(arr) && arr.length) journey = JSON.stringify(arr.slice(-15))
      } catch { /* pomiń */ }
    }
    return {
      gclid: attr.gclid ?? null,
      utmSource: attr.utmSource ?? null,
      utmMedium: attr.utmMedium ?? null,
      utmCampaign: attr.utmCampaign ?? null,
      landingPage: attr.landingPage ?? null,
      gclidAt: attr.ts ? new Date(attr.ts) : null,
      journey,
    }
  } catch {
    return empty
  }
}
