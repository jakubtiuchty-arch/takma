/**
 * Promocje producenckie z ograniczeniem czasowym.
 *
 * Zebra CEE Voucher Promotion (biuletyn PartnerConnect z 10.08.2026):
 * rabat voucherowy per imienny klient końcowy. Publikujemy WŁASNĄ cenę promocyjną
 * (z buforem marży na wypadek odrzucenia vouchera). Klient zgłasza się formularzem
 * z karty produktu i dostaje mailem imienny kod rabatowy — koszyk bez kodu liczy
 * ceny regularne (patrz src/lib/promo-codes.ts). Baner znika po endDate.
 *
 * Kalkulacja (kurs bezpieczny 4,30; koszt = cena voucherowa od dystrybutora):
 *   DS2208  — koszt ~314 zł → promo 349 zł (marża ~11%), regularnie ~388 zł;
 *   box ceny pokazuje wtedy wariant promocyjny (komplet SGW), nie najtańszy okrojony.
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

/**
 * Ile sztuk obejmuje jeden kod rabatowy.
 *
 * Rabat pochodzi z vouchera Zebry wystawianego imiennie na klienta końcowego.
 * Gdyby voucher nie przeszedł, kupujemy w cenie regularnej — przy ZD230d to
 * 967 zł kosztu wobec 859 zł ceny, czyli 108 zł straty na sztuce. Limit trzyma
 * tę ekspozycję w ryzach; powyżej niego pozycja liczy się po cenie regularnej,
 * a klient dostaje w koszyku informację, żeby napisał po wycenę.
 * Zmiana wartości = jedna liczba tutaj (dotyczy kodów wystawianych od tej chwili).
 */
export const MAX_PROMO_QTY = 3

/**
 * Czy formularz zgłoszenia sam wystawia kod rabatowy i wysyła go klientowi.
 *
 * Wyłączone do czasu sprawdzenia całego obiegu na produkcji — zgłoszenia idą
 * wtedy zwykłą ścieżką (mail „otrzymaliśmy zapytanie"), a kody wystawiamy
 * ręcznie z panelu bazy. Pole kodu w koszyku działa niezależnie od tej flagi.
 */
export const KODY_RABATOWE_AUTO = false

/** Promocja po numerze katalogowym — do weryfikacji kodu rabatowego na serwerze. */
export function promoBySku(sku: string): ProductPromo | null {
  const wpis = Object.values(ZEBRA_CEE_PROMO.bySlug).find(p => p.sku === sku)
  if (!wpis) return null
  const koniec = new Date(`${ZEBRA_CEE_PROMO.endDate}T23:59:59+02:00`)
  return new Date() <= koniec ? wpis : null
}

/** Promocja aktywna dla slugu — null gdy brak / po terminie. */
export function activePromo(productSlug: string): ProductPromo | null {
  const promo = ZEBRA_CEE_PROMO.bySlug[productSlug]
  if (!promo) return null
  const end = new Date(`${ZEBRA_CEE_PROMO.endDate}T23:59:59+02:00`)
  return new Date() <= end ? promo : null
}

/**
 * Zebra ZipShip — rabat na materiały eksploatacyjne (do 3 opakowań etykiet/taśm
 * na drukarkę — nową lub posiadaną, wystarczy nr seryjny). Flyer PartnerConnect
 * 07.2026; rabat partnerski DO 56% od cennika Zebra — POUFNE (PartnerConnect), NIGDY nie publikować na froncie! Publicznie: do −15% od NASZYCH cen (nasza decyzja cenowa, 6.08). Kod dystrybucyjny ZP2607-000-ZEBRASUP lub Demo Voucher Tool; bez RFID i opasek, tylko asortyment magazynowy.
 */
export const ZEBRA_ZIPSHIP = {
  endDate: '2026-12-31', // ostatni dzień promocji (włącznie)
}

export function zipshipActive(): boolean {
  return new Date() <= new Date(`${ZEBRA_ZIPSHIP.endDate}T23:59:59+01:00`)
}

/**
 * Program testów DS3678 z maskowaniem kanałów BLE (Zebra Demo Offer, do 31.12.2026).
 *
 * To NIE jest promocja cenowa i celowo nie podajemy nigdzie procentu rabatu:
 * oferta dystrybutora dotyczy sprzętu demonstracyjnego, a pula to tylko 3 sztuki.
 * Publikowanie ceny promocyjnej zakotwiczyłoby cennik DS3678 w dół i nie dałoby
 * się jej utrzymać przy zamówieniu floty — patrz landing /testy-ds3678.
 *
 * Wyłączenie akcji po skompletowaniu klientów: ustaw `slotsTaken: 3` (albo
 * `active: false`). Znikają wtedy: slajd w hero, baner na kartach DS3678
 * i sam landing (przekierowanie 404 -> kategoria skanerów).
 */
export const DS3678_DEMO = {
  active: true,
  endDate: '2026-12-31',
  slots: 3,
  slotsTaken: 0,
  /** karty produktów, na których pokazujemy baner */
  slugs: [
    'zebra-ds3678-sr',
    'zebra-ds3678-xr',
    'zebra-ds3678-hp',
    'zebra-ds3678-dp',
    'zebra-ds3678-hd',
  ],
}

export function ds3678DemoActive(): boolean {
  if (!DS3678_DEMO.active) return false
  if (DS3678_DEMO.slotsTaken >= DS3678_DEMO.slots) return false
  return new Date() <= new Date(`${DS3678_DEMO.endDate}T23:59:59+01:00`)
}

/** Ile stanowisk testowych zostało — używane w treści („zostały 2 z 3"). */
export function ds3678DemoSlotsLeft(): number {
  return Math.max(0, DS3678_DEMO.slots - DS3678_DEMO.slotsTaken)
}
