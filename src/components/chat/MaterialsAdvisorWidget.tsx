'use client'

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport, type UIMessage } from 'ai'
import { useCartStore } from '@/store/cartStore'
import ChatInput from './ChatInput'

const STORAGE_KEY = 'takma-doradca-messages'
const WELCOME =
  'Cześć! Jestem doradcą materiałów eksploatacyjnych. Pomogę dobrać etykiety i taśmy barwiące do Twojej drukarki i zastosowania.'

function hasText(m: UIMessage): boolean {
  return m.parts.some(p => p.type === 'text' && p.text.length > 0)
}

// Pokazujemy TYLKO finalną odpowiedź — tekst PO ostatnim wywołaniu narzędzia.
// Ukrywa „narrację procesu" tańszych modeli („Sprawdzam…") między krokami.
function getText(m: UIMessage): string {
  const parts = m.parts as Array<{ type: string; text?: string }>
  let lastTool = -1
  parts.forEach((p, i) => { if (p.type.startsWith('tool-')) lastTool = i })
  const after = parts.filter((p, i) => p.type === 'text' && p.text && i > lastTool)
  const chosen = after.length ? after : parts.filter(p => p.type === 'text' && p.text)
  return chosen.map(p => p.text!).join('')
}

// Parsuje inline **pogrubienie** i [linki](/url) — rekurencyjnie, więc obsługuje
// też pogrubiony link **[tekst](/url)** (model często tak formatuje).
function parseInline(text: string, keyBase = ''): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0, m: RegExpExecArray | null, k = 0
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      nodes.push(<strong key={`${keyBase}b${k++}`}>{parseInline(m[1], `${keyBase}b${k}`)}</strong>)
    } else if (m[2] && m[3]) {
      nodes.push(
        <a key={`${keyBase}a${k++}`} href={m[3]} className="text-primary-700 hover:text-primary-900 underline">{m[2]}</a>,
      )
    }
    last = regex.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

// Renderuje wieloliniowy tekst
function renderText(text: string) {
  return text.split('\n').map((line, i) => (
    <p key={i} className={i > 0 ? 'mt-1.5' : ''}>{parseInline(line, `l${i}-`)}</p>
  ))
}

interface CartPayload {
  id: string; name: string; slug: string; image?: string | null
  partNumber: string; priceNetto: number; categoryId: string; quantity: number
}

function CartButton({ item }: { item: CartPayload }) {
  const { addItem, updateQuantity, isInCart, openDrawer } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const inCart = mounted && isInCart(item.id)
  const add = () => {
    addItem({
      id: item.id, name: item.name, slug: item.slug,
      image: item.image ?? undefined, partNumber: item.partNumber,
      priceNetto: item.priceNetto, categoryId: item.categoryId,
    })
    if (item.quantity > 1) updateQuantity(item.id, item.quantity)
    openDrawer()
  }
  return (
    <div className="mt-3">
      <div className="text-[13px] text-gray-500 mb-1.5 pl-1">Propozycja dla Ciebie</div>
      <div className="rounded-2xl bg-white p-3 shadow-[0_2px_12px_rgba(16,58,99,0.08)]">
        <div className="flex items-center gap-3">
          {item.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image} alt="" className="w-16 h-16 rounded-xl object-contain bg-gray-50 flex-shrink-0" />
          )}
          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900 leading-snug">{item.name}</div>
            <div className="text-[15px] font-bold text-primary-600 mt-0.5">
              {item.priceNetto.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
              <span className="text-xs font-normal text-gray-400"> netto{item.quantity > 1 ? ` × ${item.quantity}` : ''}</span>
            </div>
          </div>
        </div>
        <button
          onClick={add}
          className="mt-2.5 w-full inline-flex items-center justify-center gap-1.5 text-sm font-semibold rounded-xl py-2.5 text-white bg-gradient-to-b from-[#33B1EE] to-[#1377DB] hover:brightness-110 transition-all shadow-[0_3px_10px_rgba(19,119,219,0.30)]"
        >
          {inCart ? 'W koszyku ✓' : 'Dodaj do koszyka'}
        </button>
      </div>
    </div>
  )
}

// Wyciąga payloady koszyka z części wiadomości (tool prepareCartItem)
function cartPayloads(m: UIMessage): CartPayload[] {
  const out: CartPayload[] = []
  for (const p of m.parts as Array<{ type: string; output?: { cartItem?: CartPayload } }>) {
    if (p.type === 'tool-prepareCartItem' && p.output?.cartItem) out.push(p.output.cartItem)
  }
  return out
}

export default function MaterialsAdvisorWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasNew, setHasNew] = useState(false)
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  const getInitial = useCallback((): UIMessage[] => {
    if (typeof window === 'undefined') return []
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s) { const p = JSON.parse(s); if (Array.isArray(p) && p.length) return p }
    } catch { /* ignore */ }
    return []
  }, [])

  // Stabilny identyfikator rozmowy (do grupowania logów w /admin).
  const sessionId = useRef<string>('')
  if (!sessionId.current && typeof window !== 'undefined') {
    try {
      let id = localStorage.getItem('takma-doradca-session')
      if (!id) {
        id = (window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`)
        localStorage.setItem('takma-doradca-session', id)
      }
      sessionId.current = id
    } catch { sessionId.current = `${Date.now()}` }
  }

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/doradca', body: { sessionId: sessionId.current } }),
    messages: getInitial(),
    onError: (e) => console.error('Doradca error:', e),
  })

  const isLoading = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)))
      } catch { /* full — ignore */ }
    }
  }, [messages])

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, status])

  useEffect(() => {
    if (!isOpen && messages.length > 0 && messages[messages.length - 1].role === 'assistant') setHasNew(true)
  }, [messages, isOpen])

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    if (isOpen) { window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc) }
  }, [isOpen])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return
    setInput('')
    sendMessage({ text })
  }

  const visible = messages.filter(m => (m.role === 'user' || m.role === 'assistant') && (hasText(m) || cartPayloads(m).length > 0))

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[390px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-7rem)] bg-[#F2F7FB] rounded-3xl shadow-[0_24px_60px_rgba(16,58,99,0.25)] flex flex-col overflow-hidden max-[480px]:!w-full max-[480px]:!max-w-full max-[480px]:!h-full max-[480px]:!max-h-full max-[480px]:!bottom-0 max-[480px]:!right-0 max-[480px]:!rounded-none">
          {/* Header — projekt Higgsfield #1 (2026-06-12): jasnoniebieski gradient, duży biały avatar */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-b from-[#33B1EE] to-[#1377DB] text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/takma-glob.png" alt="" className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold text-[15px] leading-tight">Doradca materiałów</div>
                <div className="text-xs text-white/85 mt-0.5">Etykiety i taśmy</div>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              {messages.length > 0 && (
                <button onClick={() => { setMessages([]); localStorage.removeItem(STORAGE_KEY) }} className="p-2 hover:bg-white/20 rounded-lg transition-colors" title="Wyczyść rozmowę">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /></svg>
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors" title="Zwiń">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5">
            {visible.length === 0 && !isLoading && (
              <>
                <div className="text-center text-[11px] text-gray-400 mb-1">
                  {new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="flex justify-start mb-3">
                  <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white text-gray-900 px-4 py-3 text-sm leading-relaxed shadow-[0_2px_10px_rgba(16,58,99,0.07)]">{WELCOME}</div>
                </div>
                {/* Chipy szybkiego startu — białe pigułki z ikonami (projekt #1) */}
                <div className="flex flex-col items-start gap-2 pl-0.5">
                  {[
                    {
                      q: 'Dobierz taśmę do mojej drukarki',
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>
                      ),
                    },
                    {
                      q: 'Szukam etykiet kurierskich',
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h8M8 17h5" /></svg>
                      ),
                    },
                    {
                      q: 'Jaka etykieta do mrożonek?',
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><circle cx="12" cy="17" r="0.5" fill="currentColor" /></svg>
                      ),
                    },
                  ].map(({ q, icon }) => (
                    <button
                      key={q}
                      onClick={() => sendMessage({ text: q })}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary-600 shadow-[0_2px_10px_rgba(16,58,99,0.10)] hover:shadow-[0_4px_14px_rgba(16,58,99,0.16)] hover:-translate-y-px transition-all"
                    >
                      <span className="text-primary-500">{icon}</span>
                      {q}
                    </button>
                  ))}
                </div>
              </>
            )}

            {visible.map(m => {
              const text = getText(m)
              const carts = cartPayloads(m)
              return (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] ${carts.length ? 'w-full' : ''}`}>
                    {text && (
                      <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user' ? 'bg-gradient-to-b from-[#33B1EE] to-[#1377DB] text-white rounded-br-md shadow-[0_3px_10px_rgba(19,119,219,0.25)]' : 'bg-white text-gray-900 rounded-bl-md shadow-[0_2px_10px_rgba(16,58,99,0.07)]'}`}>
                        {renderText(text)}
                      </div>
                    )}
                    {carts.map((c, i) => <CartButton key={i} item={c} />)}
                  </div>
                </div>
              )
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white shadow-[0_2px_10px_rgba(16,58,99,0.07)] px-4 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="px-3 pb-1">
            <a href="/kontakt" className="block text-center text-xs text-gray-500 hover:text-primary-700 transition-colors py-1">Wolisz porozmawiać z człowiekiem? Napisz do nas</a>
          </div>

          <ChatInput pill input={input} disabled={isLoading} onInputChange={setInput} onSubmit={submit} />
        </div>
      )}

      <button onClick={() => { setIsOpen(!isOpen); if (!isOpen) setHasNew(false) }} className="fixed bottom-4 right-4 z-50 w-16 h-16 rounded-full bg-gradient-to-b from-[#33B1EE] to-[#1377DB] text-white shadow-[0_8px_24px_rgba(19,119,219,0.45)] hover:shadow-[0_10px_30px_rgba(19,119,219,0.55)] hover:scale-105 transition-all flex items-center justify-center" aria-label={isOpen ? 'Zamknij doradcę' : 'Otwórz doradcę materiałów'}>
        {isOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
        ) : (
          <>
            {/* Dymek z trzema kropkami (projekt #1) */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 3C7 3 3 6.6 3 11c0 2.2 1 4.2 2.7 5.6-.1 1-.5 2.2-1.4 3.2-.2.2 0 .6.3.6 1.8-.1 3.3-.8 4.3-1.5.9.3 2 .5 3.1.5 5 0 9-3.6 9-8.4S17 3 12 3z" />
              <circle cx="8.5" cy="11" r="1.15" fill="#1377DB" />
              <circle cx="12" cy="11" r="1.15" fill="#1377DB" />
              <circle cx="15.5" cy="11" r="1.15" fill="#1377DB" />
            </svg>
            {hasNew && <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />}
          </>
        )}
      </button>
    </>
  )
}
