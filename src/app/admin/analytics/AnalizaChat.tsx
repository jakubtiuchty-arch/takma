'use client'

import { useEffect, useRef, useState } from 'react'
import { Md } from './_markdown'

interface ChatMsg { id: string; role: 'user' | 'assistant'; content: string; pinned: boolean; createdAt: string }

/**
 * Dialog właściciela z AI o analizie ruchu. Właściciel dopisuje kontekst
 * biznesowy (np. „spadek bo inwentaryzacja"), AI go przyjmuje, a cała rozmowa
 * trafia do codziennej analizy — dzięki temu AI nie alarmuje o wyjaśnionych
 * anomaliach. „📌" przypina wiadomość jako trwały kontekst.
 */
export default function AnalizaChat() {
  const [messages, setMessages] = useState<ChatMsg[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      const el = scrollRef.current
      if (el) el.scrollTop = el.scrollHeight
    })
  }

  useEffect(() => {
    fetch('/admin/analytics/chat', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d.messages)) setMessages(d.messages); setLoaded(true); scrollToBottom() })
      .catch(() => setLoaded(true))
  }, [])

  const send = async () => {
    const text = input.trim()
    if (!text || sending) return
    setSending(true)
    setError(null)
    const optimistic: ChatMsg = { id: `tmp-${Date.now()}`, role: 'user', content: text, pinned: false, createdAt: new Date().toISOString() }
    setMessages((m) => [...m, optimistic])
    setInput('')
    scrollToBottom()
    try {
      const res = await fetch('/admin/analytics/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      const d = await res.json()
      if (!res.ok) { setError(d.error || `HTTP ${res.status}`); setSending(false); return }
      // odśwież z serwera (zamienia optymistyczny wpis na realny + dodaje odpowiedź)
      const hist = await fetch('/admin/analytics/chat', { cache: 'no-store' }).then((r) => r.json())
      if (Array.isArray(hist.messages)) setMessages(hist.messages)
      scrollToBottom()
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSending(false)
    }
  }

  const togglePin = async (msg: ChatMsg) => {
    setMessages((m) => m.map((x) => (x.id === msg.id ? { ...x, pinned: !x.pinned } : x)))
    await fetch('/admin/analytics/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'pin', id: msg.id, pinned: !msg.pinned }),
    }).catch(() => {})
  }

  const remove = async (msg: ChatMsg) => {
    setMessages((m) => m.filter((x) => x.id !== msg.id))
    await fetch('/admin/analytics/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', id: msg.id }),
    }).catch(() => {})
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
      <div className="mb-1">
        <h2 className="text-lg font-semibold text-gray-900">Rozmowa z AI o analizie</h2>
        <p className="text-xs text-gray-400 mt-0.5">
          {'Dopisz kontekst, którego nie ma w GA4 (np. „spadek przychodu bo inwentaryzacja”, „duże zamówienie poszło przez Allegro”). Rozmowa trafia do codziennej analizy — AI nie będzie alarmował o wyjaśnionych anomaliach. „📌” = trwały kontekst.'}
        </p>
      </div>

      <div ref={scrollRef} className="max-h-[420px] overflow-y-auto space-y-3 py-3">
        {!loaded ? (
          <p className="text-xs text-gray-400">Ładowanie rozmowy…</p>
        ) : messages.length === 0 ? (
          <p className="text-xs text-gray-400">Brak wiadomości. Napisz pierwszy kontekst dla AI poniżej.</p>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`group relative max-w-[85%] rounded-2xl px-4 py-2.5 ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-50 border border-gray-200 text-gray-800'}`}>
                {m.role === 'assistant' ? (
                  <div className="[&_*]:!text-gray-800"><Md text={m.content} /></div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>
                )}
                {m.role === 'user' && !m.id.startsWith('tmp-') && (
                  <div className="absolute -bottom-5 right-0 hidden group-hover:flex items-center gap-2 text-[11px]">
                    <button onClick={() => togglePin(m)} className={`${m.pinned ? 'text-amber-600 font-medium' : 'text-gray-400 hover:text-gray-600'}`} title="Przypnij jako trwały kontekst">
                      {m.pinned ? '📌 przypięte' : '📌 przypnij'}
                    </button>
                    <button onClick={() => remove(m)} className="text-gray-400 hover:text-red-500" title="Usuń">usuń</button>
                  </div>
                )}
                {m.role === 'user' && m.pinned && (
                  <span className="absolute -top-2 -left-2 text-xs" title="Trwały kontekst">📌</span>
                )}
              </div>
            </div>
          ))
        )}
        {sending && (
          <div className="flex justify-start">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-sm text-gray-400">AI pisze…</div>
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500 mb-2">Błąd: {error}</p>}

      <div className="flex items-end gap-2 pt-2 border-t border-gray-100">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
          placeholder="Napisz do AI… (Enter wysyła, Shift+Enter = nowa linia)"
          rows={2}
          className="flex-1 resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <button
          onClick={send}
          disabled={sending || !input.trim()}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-40 hover:bg-blue-700 whitespace-nowrap"
        >
          Wyślij
        </button>
      </div>
    </div>
  )
}
