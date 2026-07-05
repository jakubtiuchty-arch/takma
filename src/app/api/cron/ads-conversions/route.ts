import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { adsConfigured, adsDateTime, uploadClickConversions, type ClickConversion } from '@/lib/googleAds'

/**
 * Konwersje offline z marżą → Google Ads (akcja "Zakup (marża) — offline", secondary).
 * Bierze opłacone zamówienia z gclid (okno 60 dni wstecz od kliknięcia — tu: od paidAt),
 * liczy marżę netto (sprzedaż − koszt zakupu z ingramPriceSnapshot, fallback 80% ceny)
 * i wysyła jako wartość konwersji w PLN. Oznacza adsConvUploadedAt.
 */
export const maxDuration = 60

// koszt sztuki w groszach: snapshot ceny zakupu, fallback = 80% ceny sprzedaży
function itemCost(priceNetto: number, ingramPriceSnapshot: number | null): number {
  return ingramPriceSnapshot ?? Math.round(priceNetto * 0.8)
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!adsConfigured()) {
    return NextResponse.json({ ok: false, error: 'Google Ads nie skonfigurowany' }, { status: 500 })
  }

  const since = new Date(Date.now() - 60 * 24 * 3600 * 1000)
  const orders = await prisma.order.findMany({
    where: {
      gclid: { not: null },
      adsConvUploadedAt: null,
      paidAt: { not: null, gte: since },
      status: { in: ['PAID', 'PROCESSING', 'SHIPPED', 'DELIVERED'] },
    },
    include: { items: true },
    orderBy: { paidAt: 'asc' },
    take: 200,
  })

  if (orders.length === 0) {
    return NextResponse.json({ ok: true, uploaded: 0, message: 'Brak nowych zamówień z gclid' })
  }

  const conversions: ClickConversion[] = orders.map((o) => {
    const marginGrosze = o.items.reduce(
      (sum, it) => sum + (it.totalNetto - itemCost(it.priceNetto, it.ingramPriceSnapshot) * it.quantity),
      0,
    )
    return {
      gclid: o.gclid!,
      conversionDateTime: adsDateTime(o.paidAt!),
      conversionValue: Math.max(0, marginGrosze) / 100, // PLN, nigdy ujemna
      orderId: o.orderNumber ?? o.id,
    }
  })

  const result = await uploadClickConversions(conversions)

  // oznacz tylko te, które przeszły (reszta spróbuje przy następnym uruchomieniu)
  const failed = new Set(result.failedIndices)
  const okIds = orders.filter((_, i) => !failed.has(i)).map((o) => o.id)
  if (okIds.length) {
    await prisma.order.updateMany({ where: { id: { in: okIds } }, data: { adsConvUploadedAt: new Date() } })
  }

  console.log(`[Ads Conversions] wysłano ${result.uploaded}/${orders.length}`, result.errors.length ? result.errors : '')
  return NextResponse.json({
    ok: result.errors.length === 0,
    candidates: orders.length,
    uploaded: result.uploaded,
    marked: okIds.length,
    errors: result.errors.slice(0, 10),
  })
}
