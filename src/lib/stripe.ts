import Stripe from 'stripe'

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-01-28.clover',
    typescript: true,
  })
}

export const stripe = process.env.STRIPE_SECRET_KEY
  ? getStripe()
  : (undefined as unknown as Stripe)

// Convert PLN price to grosze (Stripe requires smallest currency unit)
export function toStripeAmount(pricePLN: number): number {
  return Math.round(pricePLN * 100)
}

// Convert grosze back to PLN for display
export function fromStripeAmount(amountGrosze: number): number {
  return amountGrosze / 100
}
