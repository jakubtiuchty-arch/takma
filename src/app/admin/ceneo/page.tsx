import { prisma } from '@/lib/db'
import ValidateButton from './ValidateButton'

export const dynamic = 'force-dynamic'

const FEEDS = [
  { key: 'ceneo', label: 'Ceneo', url: '/api/ceneo-feed' },
  { key: 'merchant', label: 'Google Merchant', url: '/api/merchant-feed' },
] as const

function parseList(json: string | null): string[] {
  if (!json) return []
  try {
    const v = JSON.parse(json)
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

export default async function CeneoAdminPage() {
  const runsByFeed = await Promise.all(
    FEEDS.map(async (f) => {
      const runs = await prisma.feedValidationRun.findMany({
        where: { feed: f.key },
        orderBy: { startedAt: 'desc' },
        take: 8,
      })
      return { feed: f, latest: runs[0] ?? null, history: runs }
    }),
  )

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Feedy porównywarek</h1>
        <ValidateButton />
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Walidacja feedów Ceneo i Google Merchant — liczba ofert, EAN, ceny, spadki. Cron sprawdza codziennie i
        wysyła alert mailowy przy błędach.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {runsByFeed.map(({ feed, latest, history }) => {
          const errors = parseList(latest?.errors ?? null)
          const warnings = parseList(latest?.warnings ?? null)
          const ok = latest?.ok ?? false
          return (
            <div key={feed.key} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900">{feed.label}</h2>
                {latest ? (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      ok ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {ok ? 'OK' : 'BŁĄD'}
                  </span>
                ) : (
                  <span className="rounded-full px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-500">
                    brak walidacji
                  </span>
                )}
              </div>

              {latest ? (
                <>
                  <div className="grid grid-cols-2 gap-y-1.5 text-sm mb-3">
                    <span className="text-gray-500">Ofert</span>
                    <span className="text-right font-semibold tabular-nums">
                      {latest.totalOffers}
                      {latest.prevTotal != null && (
                        <span className="text-gray-400 font-normal"> (było {latest.prevTotal})</span>
                      )}
                    </span>
                    <span className="text-gray-500">Z EAN</span>
                    <span className="text-right tabular-nums">{latest.withEan}</span>
                    <span className="text-gray-500">Cena min/max</span>
                    <span className="text-right tabular-nums">
                      {latest.minPrice ?? '–'} / {latest.maxPrice ?? '–'} zł
                    </span>
                    <span className="text-gray-500">Ostatnia walidacja</span>
                    <span className="text-right text-gray-600">
                      {latest.startedAt.toLocaleString('pl-PL')}
                    </span>
                  </div>

                  {errors.length > 0 && (
                    <ul className="mb-2 space-y-1 text-sm text-red-700">
                      {errors.map((e, i) => (
                        <li key={i}>• {e}</li>
                      ))}
                    </ul>
                  )}
                  {warnings.length > 0 && (
                    <ul className="mb-2 space-y-1 text-sm text-amber-700">
                      {warnings.map((w, i) => (
                        <li key={i}>• {w}</li>
                      ))}
                    </ul>
                  )}

                  {history.length > 1 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-400 mb-1.5">Historia</div>
                      <div className="flex flex-wrap gap-1.5">
                        {history.map((h) => (
                          <span
                            key={h.id}
                            title={`${h.startedAt.toLocaleString('pl-PL')} — ${h.totalOffers} ofert`}
                            className={`h-5 w-5 rounded text-[10px] flex items-center justify-center ${
                              h.ok ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {h.ok ? '✓' : '✕'}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-500">Brak danych — kliknij „Waliduj teraz".</p>
              )}

              <div className="mt-4 pt-3 border-t border-gray-100">
                <a
                  href={feed.url}
                  target="_blank"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Otwórz feed XML →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
