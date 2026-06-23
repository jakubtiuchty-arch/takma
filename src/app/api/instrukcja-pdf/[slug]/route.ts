import { NextRequest, NextResponse } from 'next/server'
import { createElement } from 'react'
import { Font, renderToBuffer } from '@react-pdf/renderer'
import { getManualBySlug } from '@/data/manuals'
import { ManualPdfDoc } from '@/app/instrukcje/_pdf/ManualPdf'

export const runtime = 'nodejs'

// Rejestracja czcionki z polskimi znakami (DejaVu Sans) — serwowana z public/.
// Robione raz per origin (stałe per deployment).
const registered = new Set<string>()
function ensureFont(origin: string) {
  if (registered.has(origin)) return
  Font.register({
    family: 'DejaVu',
    fonts: [
      { src: `${origin}/fonts/DejaVuSans.ttf` },
      { src: `${origin}/fonts/DejaVuSans-Bold.ttf`, fontWeight: 'bold' },
    ],
  })
  // Bez dzielenia wyrazów (żadnych „obsłu-gi")
  Font.registerHyphenationCallback((word) => [word])
  registered.add(origin)
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const manual = getManualBySlug(slug)
  if (!manual || !manual.polishManual) {
    return NextResponse.json({ error: 'Instrukcja nie znaleziona' }, { status: 404 })
  }

  ensureFont(req.nextUrl.origin)

  const logoSrc = `${req.nextUrl.origin}/images/takma_logo.png`
  const element = createElement(ManualPdfDoc, { manual, logoSrc }) as Parameters<typeof renderToBuffer>[0]
  const buffer = await renderToBuffer(element)

  return new NextResponse(buffer as unknown as BodyInit, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="takma-${manual.slug}-skrocona-instrukcja.pdf"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
