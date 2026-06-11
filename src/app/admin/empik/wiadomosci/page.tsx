import Link from 'next/link'
import { listEmpikThreads, getEmpikThread } from '@/lib/empik/messages'

export const dynamic = 'force-dynamic'

function fmt(d?: string): string {
  if (!d) return '—'
  try {
    return new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return d
  }
}

export default async function EmpikWiadomosciPage({
  searchParams,
}: {
  searchParams: Promise<{ thread?: string; err?: string }>
}) {
  const sp = await searchParams

  // Widok wątku
  if (sp.thread) {
    const { messages } = await getEmpikThread(sp.thread)
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Wątek</h1>
          <Link href="/admin/empik/wiadomosci" className="text-sm text-blue-600 hover:underline">
            ← Wiadomości
          </Link>
        </div>

        {sp.err && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            Błąd: {decodeURIComponent(sp.err)}
          </div>
        )}

        <div className="space-y-3 mb-4">
          {messages.length === 0 && <p className="text-sm text-gray-500">Brak wiadomości w wątku.</p>}
          {messages.map((m, i) => {
            const from = m.from?.organization_details?.display_name || m.from?.display_name || m.from?.type || '—'
            const mine = m.from?.type === 'SHOP'
            return (
              <div
                key={m.id || i}
                className={`rounded-xl border p-4 ${mine ? 'border-blue-200 bg-blue-50 ml-8' : 'border-gray-200 bg-white mr-8'}`}
              >
                <div className="flex justify-between gap-2 text-xs text-gray-500 mb-1">
                  <span className="font-medium">{from}</span>
                  <span>{fmt(m.date_created)}</span>
                </div>
                <p className="text-sm text-gray-800 whitespace-pre-wrap">{m.body || ''}</p>
              </div>
            )
          })}
        </div>

        <form action="/admin/empik/wiadomosci/reply" method="post" className="rounded-xl border border-gray-200 bg-white p-4">
          <input type="hidden" name="threadId" value={sp.thread} />
          <textarea
            name="text"
            rows={4}
            required
            placeholder="Treść odpowiedzi…"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Wyślij odpowiedź
          </button>
        </form>
      </div>
    )
  }

  // Lista wątków
  const threads = await listEmpikThreads(50)

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Wiadomości</h1>
        <Link href="/admin/empik" className="text-sm text-blue-600 hover:underline">
          ← Empik
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">Wątki z klientami i operatorem Empik (Mirakl Inbox).</p>

      {threads.length === 0 ? (
        <p className="text-sm text-gray-500">Brak wątków.</p>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 font-medium">Temat</th>
                <th className="px-4 py-2 font-medium">Uczestnicy</th>
                <th className="px-4 py-2 font-medium">Aktualizacja</th>
              </tr>
            </thead>
            <tbody>
              {threads.map((t) => (
                <tr key={t.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-800">
                    <Link href={`/admin/empik/wiadomosci?thread=${encodeURIComponent(t.id)}`} className="block hover:text-blue-600">
                      {t.topic?.value || '(bez tematu)'}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    {(t.current_participants || []).map((p) => p.display_name || p.type).join(', ') || '—'}
                  </td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">{fmt(t.date_updated || t.date_created)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
