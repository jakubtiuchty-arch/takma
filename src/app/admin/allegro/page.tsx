import Link from 'next/link'
import { getConnection, allegroConfigured, ALLEGRO_ENV } from '@/lib/allegro/auth'
import { listThreads } from '@/lib/allegro/messaging'
import { listOrders } from '@/lib/allegro/orders'
import { getBulkProgress } from '@/lib/allegro/bulk'

export const dynamic = 'force-dynamic'

function StatCard({
  href,
  label,
  value,
  sub,
  accent,
}: {
  href: string
  label: string
  value: number | string
  sub?: string
  accent: string
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-sm transition-all"
    >
      <div className="text-sm text-gray-500">{label}</div>
      <div className={`mt-1 text-3xl font-bold ${accent}`}>{value}</div>
      {sub && <div className="mt-1 text-xs text-gray-400">{sub}</div>}
    </Link>
  )
}

function ActionCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all"
    >
      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</div>
      <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
    </Link>
  )
}

export default async function AllegroDashboardPage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null

  let unread = 0
  let newOrders = 0
  let progress = { total: 0, published: 0, errors: 0, remaining: 0 }
  if (conn?.connected) {
    try {
      unread = (await listThreads(20)).filter((t) => !t.read).length
    } catch {}
    try {
      newOrders = (await listOrders(25)).orders.filter((o) => o.fulfillment?.status === 'NEW').length
    } catch {}
    try {
      progress = await getBulkProgress()
    } catch {}
  }
  const pct = progress.total ? Math.round((progress.published / progress.total) * 100) : 0

  return (
    <div className="max-w-5xl">
      {/* Nagłówek */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Allegro</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {conn?.connected ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Połączono{conn.allegroLogin ? ` jako ${conn.allegroLogin}` : ''}
                </span>{' '}
                · środowisko {ALLEGRO_ENV}
              </>
            ) : (
              <>Niepołączono · środowisko {ALLEGRO_ENV}</>
            )}
          </p>
        </div>
        <Link
          href="/admin/allegro/konfiguracja"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Konfiguracja →
        </Link>
      </div>

      {!conn?.connected && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak połączenia z Allegro.{' '}
          <Link href="/admin/allegro/konfiguracja" className="font-semibold underline">
            Połącz konto
          </Link>
          , aby zobaczyć dane.
        </div>
      )}

      {/* KPI */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard href="/admin/allegro/zamowienia" label="Zamówienia do realizacji" value={newOrders} accent="text-emerald-600" sub="status: nowe" />
        <StatCard href="/admin/allegro/wiadomosci" label="Nieprzeczytane wiadomości" value={unread} accent="text-blue-600" />
        <StatCard href="/admin/allegro/oferty" label="Oferty na żywo" value={progress.published} accent="text-gray-900" sub={`${pct}% asortymentu na stanie`} />
        <StatCard href="/admin/allegro/hurtowe" label="Do wystawienia (na stanie)" value={progress.remaining} accent="text-gray-900" sub={progress.errors ? `błędy: ${progress.errors}` : 'na stanie u dystrybutora'} />
      </div>

      {/* Szybkie akcje */}
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Szybkie akcje</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ActionCard href="/admin/allegro/zamowienia" title="Zamówienia" desc="Podgląd, dane do wysyłki, generowanie listu, czat z klientem." />
        <ActionCard href="/admin/allegro/wiadomosci" title="Wiadomości" desc="Czytaj i odpowiadaj klientom (z załącznikami)." />
        <ActionCard href="/admin/allegro/hurtowe" title="Wystaw hurtowo" desc="Masowe wystawianie taśm i etykiet (na stanie)." />
        <ActionCard href="/admin/allegro/oferty" title="Oferty — taśmy" desc="Taśmy termotransferowe TT." />
        <ActionCard href="/admin/allegro/etykiety" title="Oferty — etykiety" desc="Etykiety termiczne i TT." />
        <ActionCard href="/admin/allegro/stare-oferty" title="Stare oferty" desc="Wygaś dawne, generyczne oferty materiałów." />
      </div>
    </div>
  )
}
