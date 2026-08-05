/**
 * Promocje producenckie z ograniczeniem czasowym.
 *
 * Zebra CEE Voucher Promotion (biuletyn PartnerConnect z 10.08.2026):
 * rabat voucherowy per imienny klient końcowy. Publikujemy WŁASNĄ cenę promocyjną
 * (z buforem marży na wypadek odrzucenia vouchera), realizacja przez formularz
 * zapytania — nie przez koszyk (koszyk liczy ceny regularne). Baner znika po endDate.
 *
 * Kalkulacja (kurs bezpieczny 4,30; koszt = cena voucherowa od dystrybutora):
 *   DS2208  — koszt ~314 zł → promo 349 zł (marża ~11%), regularnie ~388 zł
 *   DS4608  — koszt ~475 zł → promo 549 zł (marża ~15%), regularnie ~972 zł
 *   ZD230t  — koszt ~744 zł → promo 879 zł (marża ~18%), regularnie ~1069 zł
 *   ZD230d  — koszt ~730 zł → promo 859 zł (marża ~18%), regularnie ~1087 zł
 */
export interface ProductPromo {
  sku: string
  promoNetto: number // nasza cena promocyjna netto (zł)
  regularNetto: number // cena regularna netto do przekreślenia (zł)
}

export const ZEBRA_CEE_PROMO = {
  endDate: '2026-10-04', // ostatni dzień promocji (włącznie)
  bySlug: {
    'zebra-ds2208': { sku: 'DS2208-SR7U2100SGW', promoNetto: 349, regularNetto: 388 },
    'zebra-ds4608': { sku: 'DS4608-SR7U2100SGW', promoNetto: 549, regularNetto: 972 },
    'zebra-zd230d': { sku: 'ZD23042-D0EC00EZ', promoNetto: 859, regularNetto: 1087 },
    'zebra-zd230t': { sku: 'ZD23042-30EC00EZ', promoNetto: 879, regularNetto: 1069 },
  } as Record<string, ProductPromo>,
}

/** Promocja aktywna dla slugu — null gdy brak / po terminie. */
export function activePromo(productSlug: string): ProductPromo | null {
  const promo = ZEBRA_CEE_PROMO.bySlug[productSlug]
  if (!promo) return null
  const end = new Date(`${ZEBRA_CEE_PROMO.endDate}T23:59:59+02:00`)
  return new Date() <= end ? promo : null
}
