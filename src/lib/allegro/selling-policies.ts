/**
 * Polityki sprzedaży podpinane do ofert (żeby szkic był gotowy do aktywacji).
 *
 * ID polityk są specyficzne dla konta i środowiska, więc trzymamy je w env
 * (NIE hardkodujemy — inaczej sandbox lokalnie próbowałby użyć prod-owych ID).
 * Na produkcji (Vercel) ustaw:
 *   ALLEGRO_SHIPPING_RATE_ID     — cennik dostaw (np. „Wysyłka")
 *   ALLEGRO_RETURN_POLICY_ID     — warunki zwrotów (np. „Zwrot allegro")
 *   ALLEGRO_IMPLIED_WARRANTY_ID  — rękojmia/warunki reklamacji
 *
 * Potwierdzone na żywym szkicu prod: podpięcie tych trzech czyści błędy
 * walidacji „No shipping rates" i „Offer Terms (returns and complaints)".
 * Zostają wtedy tylko EAN (zwolnienie z GTIN) oraz GPSR (dane producenta +
 * bezpieczeństwo) — te ustawia się po stronie Allegro.
 */

const SHIPPING_RATE_ID = process.env.ALLEGRO_SHIPPING_RATE_ID || ''
const RETURN_POLICY_ID = process.env.ALLEGRO_RETURN_POLICY_ID || ''
const IMPLIED_WARRANTY_ID = process.env.ALLEGRO_IMPLIED_WARRANTY_ID || ''
const WARRANTY_ID = process.env.ALLEGRO_WARRANTY_ID || ''

export interface OfferServices {
  delivery?: { shippingRates: { id: string } }
  afterSalesServices?: {
    returnPolicy?: { id: string }
    impliedWarranty?: { id: string }
    warranty?: { id: string }
  }
}

/** Złóż sekcje dostawy + posprzedażowe z ustawionych env (pomija nieustawione). */
export function offerServices(): OfferServices {
  const s: OfferServices = {}
  if (SHIPPING_RATE_ID) s.delivery = { shippingRates: { id: SHIPPING_RATE_ID } }
  const after: NonNullable<OfferServices['afterSalesServices']> = {}
  if (RETURN_POLICY_ID) after.returnPolicy = { id: RETURN_POLICY_ID }
  if (IMPLIED_WARRANTY_ID) after.impliedWarranty = { id: IMPLIED_WARRANTY_ID }
  if (WARRANTY_ID) after.warranty = { id: WARRANTY_ID }
  if (Object.keys(after).length) s.afterSalesServices = after
  return s
}
