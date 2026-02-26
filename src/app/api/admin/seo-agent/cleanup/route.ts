/**
 * POST /api/admin/seo-agent/cleanup
 * Oznacz stare alerty z URL-ami WooCommerce jako przeczytane
 * Auth: CRON_SECRET query param
 */

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

const LEGACY_PATTERNS = ['/product/', '/shop/', '?p=', '/wp-content/', '/wp-json/', '/koszyk/', '/moje-konto/']

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Pobierz wszystkie nieprzeczytane alerty
  const unreadAlerts = await prisma.seoAlert.findMany({
    where: { isRead: false },
    select: { id: true, title: true },
  })

  // Filtruj alerty ze starymi URL-ami
  const legacyAlertIds = unreadAlerts
    .filter(a => LEGACY_PATTERNS.some(p => a.title.includes(p)))
    .map(a => a.id)

  if (legacyAlertIds.length === 0) {
    return NextResponse.json({ message: 'Brak starych alertów do wyczyszczenia', cleaned: 0 })
  }

  // Oznacz jako przeczytane
  await prisma.seoAlert.updateMany({
    where: { id: { in: legacyAlertIds } },
    data: { isRead: true },
  })

  return NextResponse.json({
    message: `Wyczyszczono ${legacyAlertIds.length} starych alertów`,
    cleaned: legacyAlertIds.length,
  })
}
