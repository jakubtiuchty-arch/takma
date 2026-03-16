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
