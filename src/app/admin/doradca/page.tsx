import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

function fmt(d: Date): string {
  return d.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default async function DoradcaLogsPage() {
  const logs = await prisma.doradcaLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 600,
  })

  // Grupowanie po sesji ORAZ po przerwie w czasie. Identyfikator rozmowy wygasa
  // dziś po 4 godzinach bezczynności, ale starsze wpisy pochodzą z czasów, gdy żył
  // bezterminowo — bez tego cięcia kilkanaście rozmów z dwóch miesięcy pokazywało
  // się jako jedna pozycja.
  const PRZERWA_MS = 4 * 60 * 60 * 1000
  const bySession = new Map<string, typeof logs>()
  const rosnaco = [...logs].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
  const ostatniaWSesji = new Map<string, { klucz: string; czas: number }>()
  for (const l of rosnaco) {
    const poprzednia = ostatniaWSesji.get(l.sessionId)
    const nowaRozmowa = !poprzednia || l.createdAt.getTime() - poprzednia.czas > PRZERWA_MS
    const klucz = nowaRozmowa
      ? `${l.sessionId}#${l.createdAt.toISOString()}`
      : poprzednia!.klucz
    ostatniaWSesji.set(l.sessionId, { klucz, czas: l.createdAt.getTime() })
    const arr = bySession.get(klucz) ?? []
    arr.push(l)
    bySession.set(klucz, arr)
  }
  const sessions = Array.from(bySession.entries())
    .map(([sessionId, rows]) => ({
      sessionId,
      rows: [...rows].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()),
      last: rows[rows.length - 1].createdAt,
      ip: rows.find(r => r.ip)?.ip ?? null,
    }))
    .sort((a, b) => b.last.getTime() - a.last.getTime())

  const totalQuestions = logs.filter(l => l.role === 'user').length

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Doradca — logi rozmów</h1>
      <p className="text-sm text-gray-500 mb-6">
        {sessions.length} rozmów · {totalQuestions} pytań klientów · ostatnie {logs.length} wiadomości
      </p>

      {sessions.length === 0 && (
        <div className="text-gray-500 bg-white border border-gray-200 rounded-xl p-8 text-center">
          Brak rozmów. Logi pojawią się, gdy klienci zaczną korzystać z Doradcy materiałów.
        </div>
      )}

      <div className="space-y-5">
        {sessions.map(({ sessionId, rows, last, ip }) => (
          <div key={sessionId} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-gray-100 text-xs text-gray-500">
              <span>{fmt(last)} · {rows.length} wiadomości</span>
              <span className="font-mono">{ip ?? sessionId.slice(0, 16)}</span>
            </div>
            <div className="p-4 space-y-2.5">
              {rows.map((r) => (
                <div key={r.id} className={`flex ${r.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                      r.role === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    {r.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
