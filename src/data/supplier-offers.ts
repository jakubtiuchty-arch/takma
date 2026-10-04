/** Terminy ofert dostawców. Ceny sprzedaży pobiera istniejący mechanizm /api/stock. */
export const supplierOffers = {
  'newland-mt95-kambur-pro-iii': {
    partNumber: 'NLS-MT9557-W5',
    supplier: 'Jarltech',
    supplierId: 'newmt9557',
    startsAt: '2026-10-04T00:00:00+02:00',
    endsAt: '2027-03-31T23:59:59.999+02:00',
    limitedQuantity: true,
    checkedAt: '2026-10-04',
  },
} as const

export function activeSupplierOffer(slug: string, now = Date.now()) {
  const offer = supplierOffers[slug as keyof typeof supplierOffers]
  if (!offer || now < Date.parse(offer.startsAt) || now > Date.parse(offer.endsAt)) return null
  return offer
}
