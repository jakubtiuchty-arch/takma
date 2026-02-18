import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'Brak pliku' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    // Dynamic import to avoid issues with pdf-parse in edge runtime
    const pdfParseModule = await import('pdf-parse')
    const pdfParse = (pdfParseModule as unknown as { default: (buf: Buffer) => Promise<{ text: string }> }).default || pdfParseModule
    const data = await (pdfParse as (buf: Buffer) => Promise<{ text: string }>)(buffer)
    const text = data.text

    // Parse the PDF text to find product lines
    const items = parsePriceList(text)

    return NextResponse.json({ items, rawTextLength: text.length })
  } catch (error) {
    console.error('[PDF Parse Error]', error)
    return NextResponse.json(
      { error: 'Błąd podczas parsowania pliku PDF' },
      { status: 500 }
    )
  }
}

interface ParsedItem {
  name: string
  partNumber?: string
  price?: number
  quantity: number
}

function parsePriceList(text: string): ParsedItem[] {
  const items: ParsedItem[] = []
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)

  // Pattern for part numbers: alphanumeric with dashes (e.g., ZD4A042-30EM00EZ)
  const pnRegex = /\b([A-Z0-9][A-Z0-9-]{4,}[A-Z0-9])\b/
  // Pattern for prices: Polish format (1 234,56 or 1234.56)
  const priceRegex = /(\d[\d\s]*[.,]\d{2})\s*(?:zł|PLN|netto)?/

  for (const line of lines) {
    // Skip header-like lines
    if (line.length < 10) continue
    if (/^(lp|nr|pozycja|nazwa|cena|ilość|suma|razem|netto|brutto|vat)/i.test(line)) continue

    const pnMatch = line.match(pnRegex)
    const priceMatch = line.match(priceRegex)

    // Need at least a PN or a price to consider it a product line
    if (!pnMatch && !priceMatch) continue

    const partNumber = pnMatch?.[1]
    const priceStr = priceMatch?.[1]?.replace(/\s/g, '').replace(',', '.')
    const price = priceStr ? parseFloat(priceStr) : undefined

    // Skip unreasonable prices
    if (price !== undefined && (price < 1 || price > 500000)) continue

    // Try to extract name: everything before the PN, or the whole line minus price
    let name = line
    if (partNumber) {
      const pnIndex = line.indexOf(partNumber)
      name = line.substring(0, pnIndex).trim() || line.substring(pnIndex + partNumber.length).trim()
    }
    // Clean up name
    name = name
      .replace(priceRegex, '')
      .replace(/^\d+[.)]\s*/, '') // remove leading number (Lp.)
      .replace(/\s{2,}/g, ' ')
      .trim()

    if (name.length < 3 && !partNumber) continue

    // Try to find quantity
    const qtyMatch = line.match(/\b(\d+)\s*(?:szt|pcs|x)\b/i)
    const quantity = qtyMatch ? parseInt(qtyMatch[1]) : 1

    items.push({
      name: name || partNumber || 'Nieznany produkt',
      partNumber,
      price,
      quantity,
    })
  }

  return items
}
