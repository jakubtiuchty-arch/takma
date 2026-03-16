'use client'

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react'
import { useChat } from '@ai-sdk/react'
import type { UIMessage } from 'ai'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

const STORAGE_KEY = 'takma-chat-messages'
const WELCOME_MESSAGE = 'Witaj! Jestem asystentem TAKMA. Pomagam dobrać drukarki etykiet, terminale mobilne i skanery kodów. Jak mogę Ci pomóc?'

// Extract text from UIMessage parts for persistence check
function hasText(msg: UIMessage): boolean {
  return msg.parts.some(p => p.type === 'text' && p.text.length > 0)
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load persisted messages from localStorage
  const getInitialMessages = useCallback((): UIMessage[] => {
    if (typeof window === 'undefined') return []
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) return parsed
      }
    } catch {
      // ignore parse errors
    }
    return []
  }, [])

  const { messages, sendMessage, status, setMessages } = useChat({
    messages: getInitialMessages(),
    onError: (err) => {
      console.error('Chat error:', err)
    },
  })

  const isLoading = status === 'submitted' || status === 'streaming'

  // Persist messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        const toStore = messages
          .filter(m => (m.role === 'user' || m.role === 'assistant') && hasText(m))
          .slice(-30)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
      } catch {
        // localStorage full — ignore
      }
    }
  }, [messages])

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, status])

  // Mark new message indicator
  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const last = messages[messages.length - 1]
      if (last.role === 'assistant') setHasNewMessage(true)
    }
  }, [messages, isOpen])

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      return () => window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (!isOpen) setHasNewMessage(false)
  }

  const handleClearChat = () => {
    setMessages([])
    localStorage.removeItem(STORAGE_KEY)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return
    setInput('')
    sendMessage({ text })
  }

  // Filter to only show messages with text content
  const visibleMessages = messages.filter(
    m => (m.role === 'user' || m.role === 'assistant') && hasText(m)
  )

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden sm:bottom-20 sm:right-4 max-[480px]:!w-full max-[480px]:!max-w-full max-[480px]:!h-full max-[480px]:!max-h-full max-[480px]:!bottom-0 max-[480px]:!right-0 max-[480px]:!rounded-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm">Asystent TAKMA</div>
                <div className="text-[11px] text-blue-100">Doradztwo produktowe 24/7</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={handleClearChat}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  title="Wyczysc czat"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                title="Zamknij"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            {/* Welcome message */}
            {visibleMessages.length === 0 && !isLoading && (
              <div className="flex justify-start mb-3">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 text-gray-900 px-4 py-2.5 text-sm leading-relaxed">
                  {WELCOME_MESSAGE}
                </div>
              </div>
            )}

            {visibleMessages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {/* Streaming/loading indicator */}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Human fallback */}
          <div className="px-3 pb-1">
            <a
              href="/kontakt"
              className="block text-center text-xs text-gray-500 hover:text-blue-600 transition-colors py-1"
            >
              Wolisz porozmawiać z człowiekiem? Napisz do nas
            </a>
          </div>

          {/* Input */}
          <ChatInput
            input={input}
            disabled={isLoading}
            onInputChange={setInput}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label={isOpen ? 'Zamknij czat' : 'Otwórz czat'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {hasNewMessage && (
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
            )}
          </>
        )}
      </button>
    </>
  )
}
