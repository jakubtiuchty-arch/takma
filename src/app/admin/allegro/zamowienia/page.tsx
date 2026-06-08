import Link from 'next/link'
import { prisma } from '@/lib/db'
import { allegroConfigured, getConnection } from '@/lib/allegro/auth'
import { listOrders, getOrder, ORDER_STATUS_PL, FULFILLMENT_STATUS_PL, type AllegroOrder } from '@/lib/allegro/orders'
import { findThreadByBuyerId } from '@/lib/allegro/messaging'
import AllegroGenerateLabelButton from '@/components/admin/AllegroGenerateLabelButton'
import ShipmentTimeline from '@/components/admin/ShipmentTimeline'
import AllegroThreadView from '@/components/admin/AllegroThreadView'
import AllegroFulfillCheckbox from '@/components/admin/AllegroFulfillCheckbox'
import AllegroManualTrackingForm from '@/components/admin/AllegroManualTrackingForm'

export const dynamic = 'force-dynamic'

function fmt(d?: string): string {
  if (!d) return '—'
  try {
    return new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return d
  }
}

function money(m?: { amount: string; currency: string }): string {
  if (!m) return '—'
  return `${Number(m.amount).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} ${m.currency}`
}

function buyerName(o: AllegroOrder): string {
  const b = o.buyer
  if (!b) return 'Klient'
  return b.companyName || [b.firstName, b.lastName].filter(Boolean).join(' ') || b.login || 'Klient'
}

function StatusBadge({ status }: { status?: string }) {
  const label = (status && ORDER_STATUS_PL[status]) || status || '—'
  const color =
    status === 'READY_FOR_PROCESSING'
      ? 'bg-emerald-100 text-emerald-700'
      : status === 'CANCELLED'
        ? 'bg-red-100 text-red-700'
        : 'bg-amber-100 text-amber-700'
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>{label}</span>
}

function FulfillmentBadge({ status }: { status?: string }) {
  const label = (status && FULFILLMENT_STATUS_PL[status]) || status || '—'
  const color = status === 'SENT' || status === 'PICKED_UP' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>{label}</span>
}

export default async function AllegroZamowieniaPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>
}) {
  const sp = await searchParams
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null

  if (!conn?.connected) {
    return (
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Zamówienia</h1>
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak połączenia z Allegro.{' '}
          <Link href="/admin/allegro/konfiguracja" className="font-semibold underline">
            Połącz konto
          </Link>
          .
        </div>
      </div>
    )
  }

  // Widok szczegółów
  if (sp.order) {
    const o = await getOrder(sp.order)
    const addr = o.delivery?.address
    const tracked = await prisma.allegroOrderNotified
      .findUnique({ where: { orderId: sp.order }, select: { trackingNumber: true, shipmentId: true } })
      .catch(() => null)
    const thread = await findThreadByBuyerId(o.buyer?.id).catch(() => null)
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Zamówienie</h1>
          <Link href="/admin/allegro/zamowienia" className="text-sm text-blue-600 hover:underline">
            ← Lista zamówień
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <StatusBadge status={o.status} />
          <FulfillmentBadge status={o.fulfillment?.status} />
          <span className="text-sm text-gray-400">{fmt(o.updatedAt)}</span>
        </div>

        <div className="mb-4 space-y-3">
          <AllegroGenerateLabelButton orderId={o.id} existingTracking={tracked?.trackingNumber} carrier={o.delivery?.method?.name} isFurgonetka={!!tracked?.shipmentId} />
          <ShipmentTimeline orderRef={o.id} />
          <AllegroManualTrackingForm orderId={o.id} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">Kupujący</h2>
            <p className="text-sm text-gray-700">{buyerName(o)}</p>
            {o.buyer?.email && <p className="text-sm text-gray-500">{o.buyer.email}</p>}
            {o.buyer?.phoneNumber && <p className="text-sm text-gray-500">tel. {o.buyer.phoneNumber}</p>}
            {o.invoice?.required && <p className="text-xs text-blue-600 mt-1">Wymagana faktura</p>}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">Dostawa</h2>
            <p className="text-sm text-gray-700">{o.delivery?.method?.name || '—'}</p>
            {addr && (
              <p className="text-sm text-gray-500 mt-1">
                {[addr.firstName, addr.lastName].filter(Boolean).join(' ')}
                {addr.companyName ? `, ${addr.companyName}` : ''}
                <br />
                {addr.street}, {addr.zipCode} {addr.city}
              </p>
            )}
            {o.delivery?.pickupPoint && (
              <p className="text-sm text-gray-500 mt-1">
                Punkt: {o.delivery.pickupPoint.name} — {o.delivery.pickupPoint.address?.city}
              </p>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white mt-4 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 font-medium">Produkt</th>
                <th className="px-4 py-2 font-medium">Ilość</th>
                <th className="px-4 py-2 font-medium text-right">Cena</th>
              </tr>
            </thead>
            <tbody>
              {(o.lineItems || []).map((li) => (
                <tr key={li.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-2 text-gray-800">
                    {li.offer?.name}
                    {li.offer?.external?.id && <span className="block text-xs text-gray-400">sygn. {li.offer.external.id}</span>}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{li.quantity}</td>
                  <td className="px-4 py-2 text-right text-gray-900">{money(li.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100 bg-gray-50">
            <span className="text-sm text-gray-500">{o.delivery?.cost ? `Dostawa: ${money(o.delivery.cost)}` : ''}</span>
            <span className="font-bold text-gray-900">Razem: {money(o.summary?.totalToPay)}</span>
          </div>
        </div>

        {o.messageToSeller && (
          <div className="rounded-xl border border-gray-200 bg-white p-4 mt-4">
            <h2 className="font-semibold text-gray-900 mb-1 text-sm">Wiadomość od kupującego (do zamówienia)</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{o.messageToSeller}</p>
          </div>
        )}

        <div className="rounded-xl border border-gray-200 bg-white p-4 mt-4">
          <h2 className="font-semibold text-gray-900 mb-3 text-sm">Wiadomości z klientem (Allegro)</h2>
          {thread ? (
            <AllegroThreadView threadId={thread.id} maxH="max-h-96" />
          ) : (
            <p className="text-sm text-gray-500">Brak wątku wiadomości z tym kupującym na Allegro.</p>
          )}
        </div>
      </div>
    )
  }

  // Lista
  const { orders, count } = await listOrders(25)
  const fulfilledRows = await prisma.allegroOrderNotified
    .findMany({ where: { orderId: { in: orders.map((o) => o.id) } }, select: { orderId: true, fulfilled: true } })
    .catch(() => [])
  const fulfilledMap = new Map(fulfilledRows.map((r) => [r.orderId, r.fulfilled]))

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Zamówienia</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">
          ← Allegro
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">Łącznie zamówień: {count}. Pokazano {orders.length} ostatnich.</p>

      {orders.length === 0 ? (
        <p className="text-sm text-gray-500">Brak zamówień.</p>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 font-medium">Data</th>
                <th className="px-4 py-2 font-medium">Kupujący</th>
                <th className="px-4 py-2 font-medium">Pozycje</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Realizacja</th>
                <th className="px-4 py-2 font-medium">Zrealizowano</th>
                <th className="px-4 py-2 font-medium text-right">Kwota</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">
                    <Link href={`/admin/allegro/zamowienia?order=${o.id}`} className="block">
                      {fmt(o.updatedAt)}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    <Link href={`/admin/allegro/zamowienia?order=${o.id}`} className="block hover:text-blue-600">
                      {buyerName(o)}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-600">{o.lineItems?.length || 0}</td>
                  <td className="px-4 py-2"><StatusBadge status={o.status} /></td>
                  <td className="px-4 py-2"><FulfillmentBadge status={o.fulfillment?.status} /></td>
                  <td className="px-4 py-2">
                    <AllegroFulfillCheckbox orderId={o.id} initial={fulfilledMap.get(o.id) ?? false} />
                  </td>
                  <td className="px-4 py-2 text-right font-medium text-gray-900">{money(o.summary?.totalToPay)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
