import Link from 'next/link'
import { empikListOffers } from '@/lib/empik/client'
import { listEmpikOrders } from '@/lib/empik/orders'
import { listEmpikThreads } from '@/lib/empik/messages'

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

export default async function EmpikDashboardPage() {
  const configured = !!process.env.EMPIK_API_KEY

  let toAccept = 0
  let toShip = 0
  let threads = 0
  let offersTotal = 0
  let offersActive = 0
  let apiError: string | null = null
  if (configured) {
    try {
      const [waiting, shipping, th, offers] = await Promise.all([
        listEmpikOrders({ states: ['WAITING_ACCEPTANCE'], max: 1 }),
        listEmpikOrders({ states: ['SHIPPING'], max: 1 }),
        listEmpikThreads(30),
        empikListOffers(100),
      ])
      toAccept = waiting.total
      toShip = shipping.total
      threads = th.length
      offersTotal = offers.total
      offersActive = offers.offers.filter((o) => o.active).length
    } catch (e) {
      apiError = (e as Error).message
    }
  }

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Empik</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {configured ? (
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Połączono (EmpikPlace / Mirakl) · sklep Takma
              </span>
            ) : (
              <>Brak klucza API (EMPIK_API_KEY)</>
            )}
          </p>
        </div>
        <a
          href="https://marketplace.empik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Panel EmpikPlace →
        </a>
      </div>

      {apiError && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          Błąd API Empik: {apiError}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          href="/admin/empik/zamowienia"
          label="Do akceptacji"
          value={toAccept}
          accent={toAccept > 0 ? 'text-red-600' : 'text-emerald-600'}
          sub="brak akceptacji = auto-anulacja"
        />
        <StatCard href="/admin/empik/zamowienia" label="Do wysyłki" value={toShip} accent="text-blue-600" sub="zaakceptowane, czekają na nadanie" />
        <StatCard href="/admin/empik/wiadomosci" label="Wątki wiadomości" value={threads} accent="text-gray-900" />
        <StatCard
          href="/admin/empik/oferty"
          label="Oferty"
          value={offersTotal}
          accent="text-gray-900"
          sub={`aktywne: ${offersActive}`}
        />
      </div>

      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Szybkie akcje</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ActionCard href="/admin/empik/zamowienia" title="Zamówienia" desc="Akceptacja, dane do wysyłki, numer śledzenia." />
        <ActionCard href="/admin/empik/wiadomosci" title="Wiadomości" desc="Wątki z klientami i Empikiem, odpowiadanie." />
        <ActionCard href="/admin/empik/oferty" title="Oferty" desc="Lista ofert na Empiku + ręczna synchronizacja." />
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
        <p className="font-semibold text-gray-900 mb-1">Jak to działa</p>
        <p>
          Oferty (etykiety + taśmy) synchronizują się cronem 7:15 i 14:15 — ceny ze sklepu ×1,08 ×VAT, stany
          min(stan, 30). Oferta podpina się do karty katalogu Empika po EAN; nowe karty podłączają się same przy
          kolejnym przebiegu. Wielopaki i wykluczenia: <code>src/lib/empik/offers.ts</code>.
        </p>
      </div>
    </div>
  )
}
