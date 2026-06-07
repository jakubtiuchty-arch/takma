import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { listOrders, type AllegroOrder } from '@/lib/allegro/orders'
import { sendEmail } from '@/lib/email'

export const runtime = 'nodejs'
export const maxDuration = 120
export const dynamic = 'force-dynamic'

const NOTIFY_EMAIL = process.env.ALLEGRO_NOTIFY_EMAIL || 'handlowy@takma.com.pl'
const RECENT_HOURS = 48

function buyerName(o: AllegroOrder): string {
  const b = o.buyer
  if (!b) return 'Klient'
  return b.companyName || [b.firstName, b.lastName].filter(Boolean).join(' ') || b.login || 'Klient'
}

function money(m?: { amount: string; currency: string }): string {
  return m ? `${Number(m.amount).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} ${m.currency}` : '—'
}

/**
 * Powiadomienie handlowca o nowym, opłaconym zamówieniu Allegro.
 * Włączane env ALLEGRO_ORDER_NOTIFY=true. Co 15 min.
 */
export async function GET() {
  if (process.env.ALLEGRO_ORDER_NOTIFY !== 'true') {
    return NextResponse.json({ ok: true, disabled: true })
  }

  let orders: AllegroOrder[]
  try {
    orders = (await listOrders(25)).orders
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 200 })
  }

  const cutoff = Date.now() - RECENT_HOURS * 3600 * 1000
  const candidates = orders.filter((o) => {
    const ts = new Date(o.updatedAt || '').getTime()
    return o.status === 'READY_FOR_PROCESSING' && Number.isFinite(ts) && ts >= cutoff
  })

  const already = await prisma.allegroOrderNotified.findMany({
    where: { orderId: { in: candidates.map((o) => o.id) } },
    select: { orderId: true },
  })
  const handled = new Set(already.map((a) => a.orderId))

  let notified = 0
  for (const o of candidates) {
    if (handled.has(o.id)) continue
    try {
      const itemsHtml = (o.lineItems || [])
        .map((li) => `<li>${(li.offer?.name || '').replace(/</g, '&lt;')} — ${li.quantity} szt.</li>`)
        .join('')
      const addr = o.delivery?.address
      const addrHtml = addr
        ? `${[addr.firstName, addr.lastName].filter(Boolean).join(' ')}${addr.companyName ? `, ${addr.companyName}` : ''}, ${addr.street}, ${addr.zipCode} ${addr.city}`
        : '—'
      const panelUrl = 'https://takma.com.pl/admin/allegro/zamowienia?order=' + o.id
      const r = await sendEmail({
        to: NOTIFY_EMAIL,
        subject: `NOWE ZAMÓWIENIE NA ALLEGRO — ${buyerName(o)} (${money(o.summary?.totalToPay)})`,
        replyTo: 'takma@takma.com.pl',
        html: `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#1f2937">
            <h2 style="margin:0 0 8px">Nowe zamówienie na Allegro</h2>
            <p style="margin:0 0 4px"><strong>Kupujący:</strong> ${buyerName(o)}</p>
            <p style="margin:0 0 4px"><strong>Kwota:</strong> ${money(o.summary?.totalToPay)}</p>
            <p style="margin:0 0 4px"><strong>Dostawa:</strong> ${o.delivery?.method?.name || '—'}</p>
            <p style="margin:0 0 8px"><strong>Adres:</strong> ${addrHtml.replace(/</g, '&lt;')}</p>
            <p style="margin:0 0 4px"><strong>Pozycje:</strong></p>
            <ul style="margin:0 0 16px;padding-left:18px">${itemsHtml}</ul>
            <p><a href="${panelUrl}" style="display:inline-block;background:#059669;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600">Otwórz zamówienie</a></p>
          </div>`,
      })
      if (r.success) {
        await prisma.allegroOrderNotified.create({ data: { orderId: o.id } })
        notified++
      }
    } catch (e) {
      console.error(`[Allegro Orders] ${o.id}:`, (e as Error).message)
    }
  }

  return NextResponse.json({ ok: true, checked: candidates.length, notified })
}
