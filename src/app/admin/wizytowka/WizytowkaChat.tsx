'use client'

import { useEffect, useRef, useState } from 'react'
import { Md } from '@/app/admin/analytics/_markdown'

interface ChatMsg { id: string; role: 'user' | 'assistant'; content: string; createdAt: string }

/** Doradca strategiczny ds. wizytówki Google — dialog z AI (wzorzec jak AnalizaChat). */
export default function WizytowkaChat() {
  const [messages, setMessages] = useState<ChatMsg[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const toBottom = () => requestAnimationFrame(() => { const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight })

  useEffect(() => {
    fetch('/admin/wizytowka/chat', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d.messages)) setMessages(d.messages); setLoaded(true); toBottom() })
      .catch(() => setLoaded(true))
  }, [])

  const send = async () => {
    const text = input.trim()
    if (!text || sending) return
    setSending(true); setError(null)
    setMessages((m) => [...m, { id: `tmp-${Date.now()}`, role: 'user', content: text, createdAt: new Date().toISOString() }])
    setInput(''); toBottom()
    try {
      const res = await fetch('/admin/wizytowka/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) })
      const d = await res.json()
      if (!res.ok) { setError(d.error || `HTTP ${res.status}`); setSending(false); return }
      const hist = await fetch('/admin/wizytowka/chat', { cache: 'no-store' }).then((r) => r.json())
      if (Array.isArray(hist.messages)) setMessages(hist.messages)
      toBottom()
    } catch (e) { setError((e as Error).message) } finally { setSending(false) }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h2 className="text-lg font-semibold text-gray-900">Doradca wizytówki (AI)</h2>
      <p className="text-xs text-gray-400 mt-0.5 mb-3">Zapytaj o strategię profilu, treść posta, jak odpowiedzieć na opinię. AI zna dane Twojej wizytówki i ostatni audyt.</p>

      <div ref={scrollRef} className="max-h-[380px] overflow-y-auto space-y-3 py-2">
        {!loaded ? <p className="text-xs text-gray-400">Ładowanie…</p>
          : messages.length === 0 ? <p className="text-xs text-gray-400">Brak wiadomości. Zadaj pierwsze pytanie poniżej.</p>
          : messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-50 border border-gray-200 text-gray-800'}`}>
                {m.role === 'assistant'
                  ? <div className="[&_*]:!text-gray-800"><Md text={m.content} /></div>
                  : <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>}
              </div>
            </div>
          ))}
        {sending && <div className="flex justify-start"><div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-sm text-gray-400">AI pisze…</div></div>}
      </div>

      {error && <p className="text-xs text-red-500 mb-2">Błąd: {error}</p>}
      <div className="flex items-end gap-2 pt-2 border-t border-gray-100">
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
          placeholder="Napisz… (Enter wysyła, Shift+Enter = nowa linia)" rows={2}
          className="flex-1 resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
        <button onClick={send} disabled={sending || !input.trim()}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-40 hover:bg-blue-700">Wyślij</button>
      </div>
    </div>
  )
}
