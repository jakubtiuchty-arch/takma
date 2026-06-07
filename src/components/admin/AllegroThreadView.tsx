import { getThreadMessages, setThreadRead } from '@/lib/allegro/messaging'
import AllegroReplyForm from './AllegroReplyForm'
import AllegroScrollToBottom from './AllegroScrollToBottom'

const ENT: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…',
  oacute: 'ó', Oacute: 'Ó', aogon: 'ą', Aogon: 'Ą', eogon: 'ę', Eogon: 'Ę', cacute: 'ć', Cacute: 'Ć',
  lstrok: 'ł', Lstrok: 'Ł', nacute: 'ń', Nacute: 'Ń', sacute: 'ś', Sacute: 'Ś', zacute: 'ź', Zacute: 'Ź',
  zdot: 'ż', Zdot: 'Ż', aacute: 'á', eacute: 'é',
}

function decodeEntities(s?: string): string {
  if (!s) return ''
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, n) => ENT[n] ?? m)
}

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

interface Props {
  threadId: string
  /** Wysokość obszaru wiadomości (np. 'max-h-[55vh]' lub 'max-h-80'). */
  maxH?: string
  /** Oznaczyć wątek jako przeczytany przy wyświetleniu. Domyślnie true. */
  markRead?: boolean
}

/** Widok rozmowy z klientem: dymki (najnowsze na dole) + pole odpowiedzi. */
export default async function AllegroThreadView({ threadId, maxH = 'max-h-[55vh]', markRead = true }: Props) {
  const messages = await getThreadMessages(threadId)
  if (markRead) await setThreadRead(threadId, true)

  return (
    <>
      <div className={`px-1 py-1 space-y-3 overflow-y-auto ${maxH}`}>
        {[...messages].reverse().map((m) => {
          const mine = !m.author?.isInterlocutor
          return (
            <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  mine ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                <div className={`flex items-center justify-between gap-3 mb-1 text-[11px] ${mine ? 'text-blue-100' : 'text-gray-400'}`}>
                  <span className="font-semibold">{mine ? 'Ty (TAKMA)' : clientLabel(m.author?.login)}</span>
                  <span>{fmt(m.createdAt)}</span>
                </div>
                {m.subject && <div className={`text-[11px] mb-1 ${mine ? 'text-blue-100' : 'text-gray-500'}`}>{decodeEntities(m.subject)}</div>}
                <div className="whitespace-pre-wrap">{decodeEntities(m.text)}</div>
                {m.attachments && m.attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {m.attachments.map((a, i) =>
                      a.url ? (
                        <a key={i} href={a.url} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] ${mine ? 'bg-blue-500' : 'bg-white border border-gray-200'}`}>
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
        <AllegroScrollToBottom dep={threadId} />
      </div>
      <AllegroReplyForm threadId={threadId} />
    </>
  )
}
