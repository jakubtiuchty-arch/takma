/**
 * Buduje link do śledzenia przesyłki na stronie przewoźnika — dla numerów
 * wpisanych ręcznie (dropship), które nie są paczkami Furgonetki (brak timeline).
 * Przewoźnik wykrywany z nazwy metody dostawy lub z formatu numeru.
 */
export function carrierTrackingUrl(
  carrier: string | null | undefined,
  trackingNumber: string | null | undefined,
): { url: string; carrier: string } | null {
  if (!trackingNumber) return null
  const num = trackingNumber.trim()
  const n = encodeURIComponent(num)
  const c = (carrier || '').toLowerCase()

  if (/dpd/.test(c) || /U$/.test(num)) return { url: `https://tracktrace.dpd.com.pl/parcelDetails?typ=1&p1=${n}`, carrier: 'DPD' }
  if (/ups/.test(c) || /^1Z/i.test(num)) return { url: `https://www.ups.com/track?loc=pl_PL&tracknum=${n}`, carrier: 'UPS' }
  if (/inpost|paczkomat/.test(c)) return { url: `https://inpost.pl/sledzenie-przesylek?number=${n}`, carrier: 'InPost' }
  if (/gls/.test(c)) return { url: `https://gls-group.eu/PL/pl/sledzenie-paczek?match=${n}`, carrier: 'GLS' }
  if (/dhl/.test(c)) return { url: `https://www.dhl.com/pl-pl/home/tracking/tracking-parcel.html?submit=1&tracking-id=${n}`, carrier: 'DHL' }
  if (/poczta/.test(c)) return { url: `https://emonitoring.poczta-polska.pl/?numer=${n}`, carrier: 'Poczta Polska' }
  if (/fedex/.test(c)) return { url: `https://www.fedex.com/fedextrack/?trknbr=${n}`, carrier: 'FedEx' }
  if (/orlen/.test(c)) return { url: `https://nadaj.orlenpaczka.pl/parcel-details/${n}`, carrier: 'Orlen Paczka' }

  // Fallback — śledzenie zbiorcze Furgonetki (zadziała dla większości numerów PL).
  return { url: `https://furgonetka.pl/zlokalizuj/?n=${n}`, carrier: carrier || 'przewoźnik' }
}
