import Link from 'next/link'
import { allegroConfigured, getConnection } from '@/lib/allegro/auth'
import { listThreads, getThreadMessages, setThreadRead } from '@/lib/allegro/messaging'
import AllegroReplyForm from '@/components/admin/AllegroReplyForm'
import AllegroMarkUnreadButton from '@/components/admin/AllegroMarkUnreadButton'

export const dynamic = 'force-dynamic'

function fmt(d: string): string {
  try {
    return new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
  } catch {
    return d
  }
}

function clientLabel(login?: string): string {
  if (!login) return 'Klient'
  return login.startsWith('Client:') ? `Klient #${login.slice(7)}` : login
}

function Avatar({ url, label, size = 40 }: { url?: string; label: string; size?: number }) {
  const initials = label.replace(/[^A-Za-z0-9#]/g, '').slice(-2).toUpperCase() || 'KL'
  if (url) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt={label} width={size} height={size} className="rounded-full object-cover flex-shrink-0" style={{ width: size, height: size }} />
  }
  return (
    <div
      className="rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  )
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
  const unread = threads.filter((t) => !t.read).length

  const activeId = sp.thread || threads[0]?.id
  const activeThread = threads.find((t) => t.id === activeId)
  let messages: Awaited<ReturnType<typeof getThreadMessages>> = []
  if (conn?.connected && activeId) {
    messages = await getThreadMessages(activeId)
    await setThreadRead(activeId, true)
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">Wiadomości</h1>
          {unread > 0 && (
            <span className="inline-flex items-center justify-center min-w-6 h-6 px-2 rounded-full bg-blue-600 text-white text-xs font-bold">
              {unread} nowe
            </span>
          )}
        </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 items-start">
          {/* Lista wątków */}
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
            {threads.map((t) => {
              const isActive = t.id === activeId
              return (
                <Link
                  key={t.id}
                  href={`/admin/allegro/wiadomosci?thread=${t.id}`}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                    isActive ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <Avatar url={t.interlocutor?.avatarUrl} label={clientLabel(t.interlocutor?.login)} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-sm truncate ${t.read ? 'text-gray-700' : 'font-bold text-gray-900'}`}>
                        {clientLabel(t.interlocutor?.login)}
                      </span>
                      <span className="text-[11px] text-gray-400 flex-shrink-0">{fmt(t.lastMessageDateTime)}</span>
                    </div>
                    <div className="mt-0.5">
                      {t.read ? (
                        <span className="text-[11px] text-gray-400">Przeczytana</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Nieprzeczytana
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Wątek */}
          <div className="rounded-2xl border border-gray-200 bg-white flex flex-col min-h-[60vh]">
            {!activeThread || messages.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-sm text-gray-400">
                Wybierz wątek z listy.
              </div>
            ) : (
              <>
                {/* Nagłówek wątku */}
                <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Avatar url={activeThread.interlocutor?.avatarUrl} label={clientLabel(activeThread.interlocutor?.login)} size={36} />
                    <span className="font-semibold text-gray-900">{clientLabel(activeThread.interlocutor?.login)}</span>
                  </div>
                  <AllegroMarkUnreadButton threadId={activeThread.id} />
                </div>

                {/* Wiadomości */}
                <div className="flex-1 px-5 py-4 space-y-3 overflow-y-auto max-h-[55vh]">
                  {messages.map((m) => {
                    const mine = !m.author?.isInterlocutor
                    return (
                      <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm ${
                            mine ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                          }`}
                        >
                          <div className={`flex items-center justify-between gap-3 mb-1 text-[11px] ${mine ? 'text-blue-100' : 'text-gray-400'}`}>
                            <span className="font-semibold">{mine ? 'Ty (TAKMA)' : clientLabel(m.author?.login)}</span>
                            <span>{fmt(m.createdAt)}</span>
                          </div>
                          {m.subject && <div className={`text-[11px] mb-1 ${mine ? 'text-blue-100' : 'text-gray-500'}`}>{m.subject}</div>}
                          <div className="whitespace-pre-wrap">{m.text}</div>
                          {m.attachments && m.attachments.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {m.attachments.map((a, i) =>
                                a.url ? (
                                  <a
                                    key={i}
                                    href={a.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] ${mine ? 'bg-blue-500' : 'bg-white border border-gray-200'}`}
                                  >
                                    📎 {a.fileName || 'załącznik'}
                                  </a>
                                ) : (
                                  <span key={i} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] ${mine ? 'bg-blue-500' : 'bg-white border border-gray-200'}`}>
                                    📎 {a.fileName || 'załącznik'}
                                  </span>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Odpowiedź */}
                <div className="px-5 pb-4">
                  <AllegroReplyForm threadId={activeThread.id} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
