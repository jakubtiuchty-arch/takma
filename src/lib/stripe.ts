import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2026-01-28.clover',
  typescript: true,
})

// Convert PLN price to grosze (Stripe requires smallest currency unit)
export function toStripeAmount(pricePLN: number): number {
  return Math.round(pricePLN * 100)
}

// Convert grosze back to PLN for display
export function fromStripeAmount(amountGrosze: number): number {
  return amountGrosze / 100
}
