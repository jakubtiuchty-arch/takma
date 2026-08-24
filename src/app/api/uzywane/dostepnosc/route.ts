import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

/**
 * GET /api/uzywane/dostepnosc?slugi=a,b
 *
 * Sprawdzenie przed wysłaniem zamówienia, czy egzemplarze wciąż są wolne.
 * Serwer i tak weryfikuje je przy zapisie (lib/used-devices.ts), ale tam
 * jedyną reakcją jest wyjątek — a klient ma zobaczyć zrozumiały komunikat,
 * zanim wpisze dane do faktury.
 */
export async function GET(request: NextRequest) {
  const slugi = (request.nextUrl.searchParams.get('slugi') || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
  if (slugi.length === 0) return NextResponse.json({ niedostepne: [] })

  const sztuki = await prisma.usedDevice.findMany({
    where: { slug: { in: slugi } },
    select: { slug: true, name: true, status: true },
  })
  const bySlug = new Map(sztuki.map(s => [s.slug, s]))

  const niedostepne = slugi
    .map(slug => {
      const s = bySlug.get(slug)
      if (!s) return { slug, name: 'Egzemplarz z koszyka' }
      return s.status === 'AVAILABLE' ? null : { slug, name: s.name }
    })
    .filter((x): x is { slug: string; name: string } => !!x)

  return NextResponse.json({ niedostepne })
}
