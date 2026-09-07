import { NextResponse } from 'next/server'
import { getProductBySlug } from '@/data/products'

/**
 * /pobierz/[slug] — stały adres pobierania na naszej domenie dla bezpłatnego oprogramowania.
 * Przekierowuje do pliku w Vercel Blob (adres pliku może się zmieniać przy nowej wersji,
 * a link na kartach, w reklamach i w mailach zostaje ten sam).
 */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product?.download) {
    return NextResponse.json({ error: 'Brak pliku do pobrania' }, { status: 404 })
  }
  return NextResponse.redirect(product.download.url, {
    status: 302,
    headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  })
}
