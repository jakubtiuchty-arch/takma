'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ScoreCard from './ScoreCard'
import AlertsList from './AlertsList'

interface LatestReport {
  id: string
  generatedAt: string
  periodStart: string
  periodEnd: string
  scoreOverall: number
  scoreSeo: number
  scoreAeo: number
  scoreGeo: number
  scoreDelta: number
  alertsCount: number
  status: string
}

interface MetricsEntry {
  date: string
  totalClicks: number | null
  totalImpressions: number | null
  avgCtr: number | null
  avgPosition: number | null
  totalSessions: number | null
  totalConversions: number | null
}

interface Alert {
  id: string
  severity: 'CRITICAL' | 'WARNING' | 'INFO'
  category: string
  title: string
  description: string | null
  action: string | null
  createdAt: string
}

interface DashboardProps {
  latestReport: LatestReport | null
  recentMetrics: MetricsEntry[]
  unreadAlerts: Alert[]
}

export default function Dashboard({ latestReport, recentMetrics, unreadAlerts }: DashboardProps) {
  const router = useRouter()
  const [running, setRunning] = useState(false)
  const [runResult, setRunResult] = useState<string | null>(null)

  async function handleRunPipeline() {
    setRunning(true)
    setRunResult(null)

    try {
      const res = await fetch('/api/admin/seo-agent/run', { method: 'POST' })
      const data = await res.json()

      if (res.ok) {
        setRunResult(`Raport ${data.reportId} utworzony w ${data.duration}ms`)
        router.refresh()
      } else {
        setRunResult(`Błąd: ${data.error || 'Unknown error'}`)
      }
    } catch (err) {
      setRunResult(`Błąd połączenia: ${err}`)
    } finally {
      setRunning(false)
    }
  }

  const lastRunDate = latestReport
    ? new Date(latestReport.generatedAt).toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : null

  return (
    <main className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">SEO Agent</h1>
          {lastRunDate && (
            <p className="text-sm text-gray-500 mt-0.5">
              Ostatni raport: {lastRunDate}
            </p>
          )}
        </div>
        <button
          onClick={handleRunPipeline}
          disabled={running}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {running ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Zbieranie danych...
            </span>
          ) : (
            'Uruchom ręcznie'
          )}
        </button>
      </div>

      {/* Run result message */}
      {runResult && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${
          runResult.startsWith('Błąd') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
        }`}>
          {runResult}
        </div>
      )}

      {/* No reports yet */}
      {!latestReport && !running && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Brak raportów</h2>
          <p className="text-sm text-gray-500 mb-4">
            Uruchom pipeline ręcznie lub poczekaj na automatyczny cron (Pon + Czw, 6:00 UTC).
          </p>
          <p className="text-xs text-gray-400">
            Upewnij się, że zmienne środowiskowe GOOGLE_SERVICE_ACCOUNT_JSON i GA4_PROPERTY_ID są ustawione.
          </p>
        </div>
      )}

      {/* Score cards */}
      {latestReport && (
        <>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <ScoreCard label="Score" score={latestReport.scoreOverall} delta={latestReport.scoreDelta} />
            <ScoreCard label="SEO" score={latestReport.scoreSeo} delta={0} />
            <ScoreCard label="AEO" score={latestReport.scoreAeo} delta={0} />
            <ScoreCard label="GEO" score={latestReport.scoreGeo} delta={0} />
          </div>

          {/* Alerts */}
          <div className="mb-6">
            <AlertsList alerts={unreadAlerts} />
          </div>

          {/* Metrics trend (basic table for Phase 1) */}
          {recentMetrics.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Historia metryk <span className="text-gray-400 font-normal">({recentMetrics.length} raportów)</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2 pr-4 font-medium text-gray-500">Data</th>
                      <th className="text-right py-2 px-4 font-medium text-gray-500">Kliknięcia</th>
                      <th className="text-right py-2 px-4 font-medium text-gray-500">Wyświetlenia</th>
                      <th className="text-right py-2 px-4 font-medium text-gray-500">CTR</th>
                      <th className="text-right py-2 px-4 font-medium text-gray-500">Śr. pozycja</th>
                      <th className="text-right py-2 px-4 font-medium text-gray-500">Sesje</th>
                      <th className="text-right py-2 pl-4 font-medium text-gray-500">Konwersje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMetrics.map((m, i) => (
                      <tr key={i} className="border-b border-gray-50">
                        <td className="py-2 pr-4 text-gray-700">
                          {new Date(m.date).toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit' })}
                        </td>
                        <td className="py-2 px-4 text-right text-gray-700">{m.totalClicks ?? '—'}</td>
                        <td className="py-2 px-4 text-right text-gray-700">{m.totalImpressions ?? '—'}</td>
                        <td className="py-2 px-4 text-right text-gray-700">
                          {m.avgCtr != null ? `${(m.avgCtr * 100).toFixed(1)}%` : '—'}
                        </td>
                        <td className="py-2 px-4 text-right text-gray-700">
                          {m.avgPosition != null ? m.avgPosition.toFixed(1) : '—'}
                        </td>
                        <td className="py-2 px-4 text-right text-gray-700">{m.totalSessions ?? '—'}</td>
                        <td className="py-2 pl-4 text-right text-gray-700">{m.totalConversions ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  )
}
