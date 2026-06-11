import Link from 'next/link'
import { listEmpikOrders, getEmpikOrder, ORDER_STATE_PL, type EmpikOrder } from '@/lib/empik/orders'

export const dynamic = 'force-dynamic'

function fmt(d?: string): string {
  if (!d) return '—'
  try {
    return new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return d
  }
}

function money(n?: number, cur = 'PLN'): string {
  if (n === undefined || n === null) return '—'
  return `${n.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} ${cur}`
}

function customerName(o: EmpikOrder): string {
  const c = o.customer
  if (!c) return 'Klient'
  return [c.firstname, c.lastname].filter(Boolean).join(' ') || 'Klient'
}

function StateBadge({ state }: { state?: string }) {
  const label = (state && ORDER_STATE_PL[state]) || state || '—'
  const color =
    state === 'WAITING_ACCEPTANCE'
      ? 'bg-red-100 text-red-700'
      : state === 'SHIPPING'
        ? 'bg-blue-100 text-blue-700'
        : state === 'SHIPPED' || state === 'RECEIVED' || state === 'CLOSED'
          ? 'bg-emerald-100 text-emerald-700'
          : state === 'CANCELED' || state === 'REFUSED'
            ? 'bg-gray-200 text-gray-600'
            : 'bg-amber-100 text-amber-700'
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>{label}</span>
}

export default async function EmpikZamowieniaPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; err?: string }>
}) {
  const sp = await searchParams

  // Widok szczegółów
  if (sp.order) {
    const o = await getEmpikOrder(sp.order)
    if (!o) {
      return (
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Zamówienie</h1>
          <p className="text-sm text-gray-500">Nie znaleziono zamówienia {sp.order}.</p>
        </div>
      )
    }
    const addr = o.customer?.shipping_address
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Zamówienie {o.commercial_id || o.order_id}</h1>
          <Link href="/admin/empik/zamowienia" className="text-sm text-blue-600 hover:underline">
            ← Lista zamówień
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <StateBadge state={o.order_state} />
          <span className="text-sm text-gray-400">{fmt(o.created_date)}</span>
        </div>

        {sp.err && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            Błąd: {decodeURIComponent(sp.err)}
          </div>
        )}

        {o.order_state === 'WAITING_ACCEPTANCE' && (
          <form action="/admin/empik/zamowienia/accept" method="post" className="mb-4">
            <input type="hidden" name="orderId" value={o.order_id} />
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Akceptuj zamówienie
            </button>
          </form>
        )}

        {o.order_state === 'SHIPPING' && (
          <form action="/admin/empik/zamowienia/tracking" method="post" className="mb-4 rounded-xl border border-gray-200 bg-white p-4">
            <input type="hidden" name="orderId" value={o.order_id} />
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">Nadanie przesyłki</h2>
            <div className="flex flex-wrap gap-2">
              <input
                name="carrier"
                placeholder="Przewoźnik (np. DPD, InPost)"
                required
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />
              <input
                name="tracking"
                placeholder="Numer śledzenia"
                required
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm flex-1 min-w-48"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Zapisz i oznacz jako wysłane
              </button>
            </div>
          </form>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">Kupujący</h2>
            <p className="text-sm text-gray-700">{customerName(o)}</p>
            {o.customer_notification_email && <p className="text-sm text-gray-500 break-all">{o.customer_notification_email}</p>}
            {addr?.phone && <p className="text-sm text-gray-500">tel. {addr.phone}</p>}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">Dostawa</h2>
            <p className="text-sm text-gray-700">{o.shipping_type_label || '—'}</p>
            {addr && (
              <p className="text-sm text-gray-500 mt-1">
                {[addr.firstname, addr.lastname].filter(Boolean).join(' ')}
                {addr.company ? `, ${addr.company}` : ''}
                <br />
                {[addr.street_1, addr.street_2].filter(Boolean).join(', ')}, {addr.zip_code} {addr.city}
              </p>
            )}
            {o.shipping_tracking && <p className="text-xs text-gray-500 mt-1">Tracking: {o.shipping_tracking}</p>}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white mt-4 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 font-medium">Produkt</th>
                <th className="px-4 py-2 font-medium">SKU</th>
                <th className="px-4 py-2 font-medium">Ilość</th>
                <th className="px-4 py-2 font-medium text-right">Wartość</th>
              </tr>
            </thead>
            <tbody>
              {o.order_lines.map((li) => (
                <tr key={li.order_line_id} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-2 text-gray-800">{li.product_title}</td>
                  <td className="px-4 py-2 text-gray-500">{li.offer_sku}</td>
                  <td className="px-4 py-2 text-gray-700">{li.quantity}</td>
                  <td className="px-4 py-2 text-right text-gray-900">{money(li.total_price, o.currency_iso_code)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100 bg-gray-50">
            <span className="text-sm text-gray-500">
              {o.shipping_price ? `Dostawa: ${money(o.shipping_price, o.currency_iso_code)}` : ''}
            </span>
            <span className="font-bold text-gray-900">Razem: {money(o.total_price, o.currency_iso_code)}</span>
          </div>
        </div>
      </div>
    )
  }

  // Lista
  const { orders, total } = await listEmpikOrders({ max: 50 })

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Zamówienia</h1>
        <Link href="/admin/empik" className="text-sm text-blue-600 hover:underline">
          ← Empik
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Łącznie zamówień: {total}. Pokazano {orders.length} ostatnich.
      </p>

      {orders.length === 0 ? (
        <p className="text-sm text-gray-500">Brak zamówień.</p>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 font-medium">Data</th>
                <th className="px-4 py-2 font-medium">Nr</th>
                <th className="px-4 py-2 font-medium">Kupujący</th>
                <th className="px-4 py-2 font-medium">Pozycje</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium text-right">Kwota</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.order_id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">
                    <Link href={`/admin/empik/zamowienia?order=${encodeURIComponent(o.order_id)}`} className="block">
                      {fmt(o.created_date)}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-500">{o.commercial_id || o.order_id}</td>
                  <td className="px-4 py-2 text-gray-800">
                    <Link
                      href={`/admin/empik/zamowienia?order=${encodeURIComponent(o.order_id)}`}
                      className="block hover:text-blue-600"
                    >
                      {customerName(o)}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-600">{o.order_lines?.length || 0}</td>
                  <td className="px-4 py-2">
                    <StateBadge state={o.order_state} />
                  </td>
                  <td className="px-4 py-2 text-right font-medium text-gray-900">{money(o.total_price, o.currency_iso_code)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
