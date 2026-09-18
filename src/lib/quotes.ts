import { prisma } from './db'

export async function generateQuoteNumber(): Promise<string> {
  const year = new Date().getFullYear()
  const lastQuote = await prisma.quote.findFirst({
    where: { quoteNumber: { startsWith: `OFR-${year}-` } },
    orderBy: { createdAt: 'desc' },
  })

  let seq = 1
  if (lastQuote) {
    const lastSeq = parseInt(lastQuote.quoteNumber.split('-')[2], 10)
    seq = lastSeq + 1
  }

  return `OFR-${year}-${String(seq).padStart(6, '0')}`
}

export { STAWKI_VAT, VAT_DOMYSLNY, stawkaVat } from './quotes-stawki'

export function calculateQuoteTotals(
  items: { priceNetto: number; quantity: number }[],
  vatRate: number = 23
) {
  const subtotalNetto = items.reduce((sum, item) => sum + item.priceNetto * item.quantity, 0)
  const vatAmount = Math.round((subtotalNetto * vatRate) / 100)
  const totalBrutto = subtotalNetto + vatAmount

  return { subtotalNetto, vatAmount, totalBrutto }
}

