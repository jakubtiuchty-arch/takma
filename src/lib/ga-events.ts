/**
 * GA4 e-commerce event tracking helpers.
 * All events follow Google Analytics 4 recommended event schema.
 * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events
 */

declare global {
  interface Window {
    // eslint-disable-next-line no-unused-vars
    gtag?: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

// ── Item helpers ──────────────────────────────────────────────

export interface GA4Item {
  item_id: string
  item_name: string
  item_category?: string
  item_variant?: string
  price?: number
  quantity?: number
}

// ── E-commerce events ─────────────────────────────────────────

/** Fired on product page load */
export function trackViewItem(item: GA4Item) {
  gtag('event', 'view_item', {
    currency: 'PLN',
    value: item.price ?? 0,
    items: [item],
  })
}

/** Fired when user adds product to cart */
export function trackAddToCart(item: GA4Item) {
  gtag('event', 'add_to_cart', {
    currency: 'PLN',
    value: (item.price ?? 0) * (item.quantity ?? 1),
    items: [item],
  })
}

/** Fired when user removes product from cart */
export function trackRemoveFromCart(item: GA4Item) {
  gtag('event', 'remove_from_cart', {
    currency: 'PLN',
    value: (item.price ?? 0) * (item.quantity ?? 1),
    items: [item],
  })
}

/** Fired when cart drawer opens */
export function trackViewCart(items: GA4Item[], value: number) {
  gtag('event', 'view_cart', {
    currency: 'PLN',
    value,
    items,
  })
}

/** Fired on checkout page load */
export function trackBeginCheckout(items: GA4Item[], value: number) {
  gtag('event', 'begin_checkout', {
    currency: 'PLN',
    value,
    items,
  })
}

/** Fired when payment method is selected */
export function trackAddPaymentInfo(items: GA4Item[], value: number, paymentType: string) {
  gtag('event', 'add_payment_info', {
    currency: 'PLN',
    value,
    payment_type: paymentType,
    items,
  })
}

/** Fired after successful order */
export function trackPurchase(
  transactionId: string,
  items: GA4Item[],
  value: number,
  shipping: number
) {
  gtag('event', 'purchase', {
    transaction_id: transactionId,
    currency: 'PLN',
    value,
    shipping,
    tax: value * 0.23,
    items,
  })
}

// ── Lead / form events ────────────────────────────────────────

/** Contact form, product inquiry, service request */
export function trackGenerateLead(source: string, value?: number) {
  gtag('event', 'generate_lead', {
    currency: 'PLN',
    value: value ?? 0,
    lead_source: source,
  })
}

// ── Search ────────────────────────────────────────────────────

export function trackSearch(searchTerm: string, resultsCount?: number) {
  gtag('event', 'search', {
    search_term: searchTerm,
    results_count: resultsCount,
  })
}

// ── Auth events ───────────────────────────────────────────────

export function trackLogin(method: string) {
  gtag('event', 'login', { method })
}

export function trackSignUp(method: string) {
  gtag('event', 'sign_up', { method })
}

// ── Notify (stock alert signup) ───────────────────────────────

export function trackNotifyMe(productName: string) {
  gtag('event', 'notify_me', {
    item_name: productName,
  })
}

// ── Phone / Email / Form tracking ─────────────────────────────

/** Phone link click (klik_tel) */
export function trackPhoneClick(phoneNumber: string, location?: string) {
  gtag('event', 'klik_tel', {
    phone_number: phoneNumber,
    location: location ?? 'unknown',
  })
}

/** Email link click (klik_mail) */
export function trackEmailClick(emailAddress: string, location?: string) {
  gtag('event', 'klik_mail', {
    email_address: emailAddress,
    location: location ?? 'unknown',
  })
}

/** Form submission success. Emituje DWA zdarzenia:
 *
 *  - `form_submit` — standardowy event GA4. Paruje się z auto-`form_start`
 *    (Enhanced Measurement). Naprawia raport "74 form_start / 0 form_submit":
 *    formularze są AJAX-owe (preventDefault + fetch), więc GA nie wykrywał
 *    wysyłki automatycznie. W GA4 NIE oznaczaj go jako konwersji — służy tylko
 *    do raportu interakcji z formularzami.
 *
 *  - `wyslanie_formularza` — KANONICZNA konwersja formularza (już skonfigurowana
 *    w GA4 jako kluczowe zdarzenie i czytana przez panel /admin/analytics,
 *    LEAD_EVENTS w src/lib/ga.ts). Wcześniej padała tylko na /kontakt — teraz,
 *    przez wywołanie trackFormSubmit we wszystkich formularzach, liczy KAŻDY
 *    lead formularzowy.
 *
 *  UWAGA: nie licz jednocześnie `wyslanie_formularza` i `generate_lead` jako
 *  leadów (podwojenie) — `generate_lead` usunięty z LEAD_EVENTS. */
export function trackFormSubmit(formName: string, formLocation?: string) {
  gtag('event', 'form_submit', {
    form_name: formName,
    form_destination: formLocation ?? 'unknown',
  })
  gtag('event', 'wyslanie_formularza', {
    form_name: formName,
    form_location: formLocation ?? 'unknown',
  })
}

// ── Doradca materiałów ────────────────────────────────────────
// Cztery punkty lejka: ilu widzi bąbel, ilu otwiera, ilu pisze pierwsze
// pytanie i ilu dodaje z rozmowy do koszyka. Bez tego nie da się odróżnić
// „nikt nie klika" od „klikają, ale rozmowa nie pomaga".

/** Bąbel doradcy pojawił się na stronie (raz na wyświetlenie strony). */
export function trackAdvisorShown(pagePath: string) {
  gtag('event', 'doradca_widoczny', { page_path: pagePath })
}

/** Klient rozwinął okno doradcy. */
export function trackAdvisorOpened(pagePath: string, hadHistory: boolean) {
  gtag('event', 'doradca_otwarty', { page_path: pagePath, wznowiona_rozmowa: hadHistory })
}

/** Pierwsze pytanie w rozmowie — moment realnego zaangażowania. */
export function trackAdvisorFirstMessage(pagePath: string) {
  gtag('event', 'doradca_pierwsze_pytanie', { page_path: pagePath })
}

/** Kolejne pytania — pokazują, czy rozmowa się toczy, czy urywa po jednym. */
export function trackAdvisorMessage(pagePath: string, numerWiadomosci: number) {
  gtag('event', 'doradca_pytanie', { page_path: pagePath, numer_wiadomosci: numerWiadomosci })
}

/** Doradca zaproponował produkt i klient dodał go do koszyka. */
export function trackAdvisorAddToCart(productName: string, partNumber?: string) {
  gtag('event', 'doradca_dodanie_do_koszyka', { item_name: productName, part_number: partNumber ?? '' })
}
