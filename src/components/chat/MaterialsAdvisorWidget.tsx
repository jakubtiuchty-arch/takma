'use client'

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport, type UIMessage } from 'ai'
import { useCartStore } from '@/store/cartStore'
import ChatInput from './ChatInput'

const STORAGE_KEY = 'takma-doradca-messages'
const WELCOME =
  'Cześć! Jestem Doradcą materiałów TAKMA. Pomogę dobrać etykiety i taśmy barwiące do Twojej drukarki i zastosowania. Napisz, co drukujesz i na czym.'
const STARTERS = [
  'Etykieta do mrożonek w chłodni',
  'Taśma do folii PP',
  'Etykieta do kontaktu z żywnością',
  'Najtańsza etykieta wysyłkowa',
]

function hasText(m: UIMessage): boolean {
  return m.parts.some(p => p.type === 'text' && p.text.length > 0)
}

function getText(m: UIMessage): string {
  return m.parts.filter((p): p is { type: 'text'; text: string } => p.type === 'text').map(p => p.text).join('')
}

// Renderuje tekst z **pogrubieniem** i [linkami](/url)
function renderText(text: string) {
  return text.split('\n').map((line, i) => {
    const nodes: React.ReactNode[] = []
    const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
    let last = 0, m: RegExpExecArray | null, k = 0
    while ((m = regex.exec(line)) !== null) {
      if (m.index > last) nodes.push(line.slice(last, m.index))
      if (m[1]) nodes.push(<strong key={k++}>{m[1]}</strong>)
      else if (m[2] && m[3]) nodes.push(
        <a key={k++} href={m[3]} className="text-emerald-700 hover:text-emerald-900 underline">{m[2]}</a>,
      )
      last = regex.lastIndex
    }
    if (last < line.length) nodes.push(line.slice(last))
    return <p key={i} className={i > 0 ? 'mt-1.5' : ''}>{nodes}</p>
  })
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
    <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3">
      <div className="text-sm font-medium text-gray-900 leading-snug">{item.name}</div>
      <div className="text-xs text-gray-500 mb-2">
        {item.priceNetto.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł netto
        {item.quantity > 1 ? ` × ${item.quantity}` : ''}
      </div>
      <button
        onClick={add}
        className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-semibold rounded-lg py-2.5 text-gray-900 bg-[#A8F000] hover:bg-[#94d600] transition-colors"
      >
        {inCart ? 'W koszyku' : 'Dodaj do koszyka'}
      </button>
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

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/doradca' }),
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

  const ask = (text: string) => { if (!isLoading) sendMessage({ text }) }

  const visible = messages.filter(m => (m.role === 'user' || m.role === 'assistant') && (hasText(m) || cartPayloads(m).length > 0))

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-[480px]:!w-full max-[480px]:!max-w-full max-[480px]:!h-full max-[480px]:!max-h-full max-[480px]:!bottom-0 max-[480px]:!right-0 max-[480px]:!rounded-none">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-sm">Doradca materiałów</div>
                <div className="text-[11px] text-emerald-100">Etykiety i taśmy — dobór 24/7</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button onClick={() => { setMessages([]); localStorage.removeItem(STORAGE_KEY) }} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Wyczyść">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /></svg>
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Zamknij">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
            {visible.length === 0 && !isLoading && (
              <>
                <div className="flex justify-start mb-2">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 text-gray-900 px-4 py-2.5 text-sm leading-relaxed">{WELCOME}</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {STARTERS.map(s => (
                    <button key={s} onClick={() => ask(s)} className="text-xs px-2.5 py-1.5 rounded-full border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors">{s}</button>
                  ))}
                </div>
              </>
            )}

            {visible.map(m => {
              const text = getText(m)
              const carts = cartPayloads(m)
              return (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-emerald-600 text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'}`}>
                    {text && <div>{renderText(text)}</div>}
                    {carts.map((c, i) => <CartButton key={i} item={c} />)}
                  </div>
                </div>
              )
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="px-3 pb-1">
            <a href="/kontakt" className="block text-center text-xs text-gray-500 hover:text-emerald-700 transition-colors py-1">Wolisz porozmawiać z człowiekiem? Napisz do nas</a>
          </div>

          <ChatInput input={input} disabled={isLoading} onInputChange={setInput} onSubmit={submit} />
        </div>
      )}

      <button onClick={() => { setIsOpen(!isOpen); if (!isOpen) setHasNew(false) }} className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all flex items-center justify-center" aria-label={isOpen ? 'Zamknij doradcę' : 'Otwórz doradcę materiałów'}>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            {hasNew && <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />}
          </>
        )}
      </button>
    </>
  )
}
