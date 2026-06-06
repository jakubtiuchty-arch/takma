import Link from 'next/link'
import { allegroConfigured, getConnection } from '@/lib/allegro/auth'
import { listThreads, getThreadMessages, markThreadRead } from '@/lib/allegro/messaging'
import AllegroReplyForm from '@/components/admin/AllegroReplyForm'

export const dynamic = 'force-dynamic'

function fmt(d: string): string {
  try {
    return new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
  } catch {
    return d
  }
}

function clientLabel(login: string): string {
  return login?.startsWith('Client:') ? `Klient #${login.slice(7)}` : login
}

export default async function AllegroWiadomosciPage({
  searchParams,
}: {
  searchParams: Promise<{ thread?: string }>
}) {
  const sp = await searchParams
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null
  const threads = conn?.connected ? await listThreads(20) : []

  const activeId = sp.thread || threads[0]?.id
  let messages: Awaited<ReturnType<typeof getThreadMessages>> = []
  if (conn?.connected && activeId) {
    messages = await getThreadMessages(activeId)
    await markThreadRead(activeId)
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Allegro — wiadomości</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">
          ← Allegro
        </Link>
      </div>

      {!conn?.connected ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak połączenia z Allegro.{' '}
          <Link href="/admin/allegro/konfiguracja" className="font-semibold underline">
            Połącz konto
          </Link>
          .
        </div>
      ) : threads.length === 0 ? (
        <p className="text-sm text-gray-500">Brak wiadomości.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
          {/* Lista wątków */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden h-fit">
            {threads.map((t) => (
              <Link
                key={t.id}
                href={`/admin/allegro/wiadomosci?thread=${t.id}`}
                className={`block px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 ${
                  t.id === activeId ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm ${t.read ? 'text-gray-700' : 'font-bold text-gray-900'}`}>
                    {clientLabel(t.interlocutor?.login)}
                  </span>
                  {!t.read && <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{fmt(t.lastMessageDateTime)}</div>
              </Link>
            ))}
          </div>

          {/* Wątek */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            {messages.length === 0 ? (
              <p className="text-sm text-gray-500">Wybierz wątek z listy.</p>
            ) : (
              <>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        m.author?.isInterlocutor ? 'bg-gray-100' : 'bg-blue-50 ml-8'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-700">
                          {m.author?.isInterlocutor ? clientLabel(m.author.login) : 'Ty (TAKMA)'}
                        </span>
                        <span className="text-[11px] text-gray-400">{fmt(m.createdAt)}</span>
                      </div>
                      {m.subject && <div className="text-[11px] text-gray-500 mb-1">{m.subject}</div>}
                      <div className="whitespace-pre-wrap text-gray-800">{m.text}</div>
                    </div>
                  ))}
                </div>
                {activeId && <AllegroReplyForm threadId={activeId} />}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
