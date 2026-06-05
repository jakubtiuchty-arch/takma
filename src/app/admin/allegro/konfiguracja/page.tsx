import { getConnection, allegroConfigured, ALLEGRO_ENV } from '@/lib/allegro/auth'

export const dynamic = 'force-dynamic'

function fmt(d: Date): string {
  return d.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default async function AllegroKonfiguracjaPage({
  searchParams,
}: {
  searchParams: Promise<{ connected?: string; error?: string }>
}) {
  const sp = await searchParams
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Allegro — konfiguracja</h1>
      <p className="text-sm text-gray-500 mb-6">Połączenie z REST API Allegro (środowisko: {ALLEGRO_ENV}).</p>

      {sp.connected && (
        <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Połączono z Allegro.
        </div>
      )}
      {sp.error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Błąd połączenia: {decodeURIComponent(sp.error)}
        </div>
      )}

      {!configured ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          Brak konfiguracji — uzupełnij <code>ALLEGRO_CLIENT_ID</code> i <code>ALLEGRO_CLIENT_SECRET</code> w env.
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${conn?.connected ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                <span className="font-semibold text-gray-900">
                  {conn?.connected ? 'Połączono' : 'Niepołączono'}
                </span>
              </div>
              {conn?.connected && (
                <div className="mt-1 text-sm text-gray-500">
                  {conn.allegroLogin && <>Konto: <span className="font-medium text-gray-700">{conn.allegroLogin}</span> · </>}
                  Token ważny do {conn.expiresAt ? fmt(conn.expiresAt) : '—'}
                </div>
              )}
            </div>
            <a
              href="/admin/allegro/auth/initiate"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#ff5a00] hover:bg-[#e65100] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              {conn?.connected ? 'Połącz ponownie' : 'Połącz z Allegro'}
            </a>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-gray-400">
        Po kliknięciu „Połącz” zalogujesz się na Allegro i zaakceptujesz dostęp aplikacji. Token zapisujemy w bazie i odświeżamy automatycznie.
      </p>
    </div>
  )
}
