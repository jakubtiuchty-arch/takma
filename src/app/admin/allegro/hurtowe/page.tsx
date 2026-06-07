import Link from 'next/link'
import { allegroConfigured, getConnection } from '@/lib/allegro/auth'
import { getBulkProgress } from '@/lib/allegro/bulk'
import { ALLEGRO_AUTO_PUBLISH } from '@/lib/allegro/gpsr'
import AllegroBulkRunButton from '@/components/admin/AllegroBulkRunButton'
import AllegroRefreshDescButton from '@/components/admin/AllegroRefreshDescButton'

export const dynamic = 'force-dynamic'

export default async function AllegroHurtowePage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null
  const progress = conn?.connected ? await getBulkProgress() : null
  const bulkOn = process.env.ALLEGRO_BULK_PUBLISH === 'true'
  const pct = progress && progress.total ? Math.round((progress.published / progress.total) * 100) : 0

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Hurtowe wystawianie</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">
          ← Allegro
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Wystawia wszystkie taśmy i etykiety z GTIN ({ALLEGRO_AUTO_PUBLISH ? 'od razu na żywo' : 'jako szkice'}).
        Cron robi to wsadowo co 5 min, gdy <code>ALLEGRO_BULK_PUBLISH=true</code>.
      </p>

      {!conn?.connected ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak połączenia z Allegro.{' '}
          <Link href="/admin/allegro/konfiguracja" className="font-semibold underline">
            Połącz konto
          </Link>
          .
        </div>
      ) : (
        <>
          <div className="rounded-xl border border-gray-200 bg-white p-5 mb-4">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray-600">
                Wystawione: <strong className="text-gray-900">{progress?.published ?? 0}</strong> / {progress?.total ?? 0}
              </span>
              <span className="text-gray-500">{pct}%</span>
            </div>
            <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <span className="rounded-lg border border-gray-200 px-3 py-1.5">Zostało: <strong>{progress?.remaining ?? 0}</strong></span>
              {(progress?.errors ?? 0) > 0 && (
                <span className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-red-700">Błędy: {progress?.errors}</span>
              )}
              <span className={`rounded-lg border px-3 py-1.5 ${bulkOn ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500'}`}>
                Cron: {bulkOn ? 'WŁĄCZONY' : 'wyłączony'}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <AllegroBulkRunButton />
            <AllegroRefreshDescButton />
          </div>

          <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500">
            Automat: ustaw <code>ALLEGRO_BULK_PUBLISH=true</code> w env → cron co 5 min dokłada paczki, aż wystawi
            wszystko (potem idle). Możesz też klikać „Wystaw kolejną paczkę” ręcznie. Po skończeniu warto
            wyłączyć flagę. Błędy (np. brak żywej ceny, dublowanie z katalogiem) są pomijane i nie blokują reszty.
          </div>
        </>
      )}
    </div>
  )
}
