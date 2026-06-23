import { NextRequest, NextResponse } from 'next/server'
import { getManualBySlug, getDocBySlug } from '@/data/manuals'

export const runtime = 'nodejs'

/**
 * Serwuje dokument PDF INLINE pod ładnym URL-em:
 *   /instrukcje/[slug]/[doc]  → np. /instrukcje/honeywell-ct70/szybki-start
 * Klient klika kartę i od razu otwiera mu się PDF (jak na serwis-zebry),
 * bez strony pośredniej. URL pozostaje czytelny (proxy, nie redirect).
 *
 * Uwaga: 'instrukcja-po-polsku' obsługuje osobna statyczna strona (page.tsx),
 * która ma pierwszeństwo przed tym dynamicznym segmentem.
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string; doc: string }> }) {
  const { slug, doc } = await params
  const manual = getManualBySlug(slug)
  if (!manual) return NextResponse.json({ error: 'Nie znaleziono' }, { status: 404 })

  const document = getDocBySlug(manual, doc)
  if (!document) return NextResponse.json({ error: 'Dokument nie znaleziony' }, { status: 404 })

  const fileRes = await fetch(`${req.nextUrl.origin}${document.file}`)
  if (!fileRes.ok) return NextResponse.json({ error: 'Plik niedostępny' }, { status: 404 })

  const buffer = await fileRes.arrayBuffer()
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="takma-${manual.slug}-${doc}.pdf"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
