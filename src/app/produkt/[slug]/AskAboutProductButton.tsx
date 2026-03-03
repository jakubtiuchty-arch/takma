'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { MailIcon, CloseIcon, CheckIcon } from '@/components/ui/Icons'
import Turnstile from '@/components/Turnstile'

interface AskAboutProductButtonProps {
  productName: string
  productSlug: string
  compact?: boolean
}

function InquiryModal({
  productName,
  productSlug,
  onClose,
}: {
  productName: string
  productSlug: string
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState(
    `Dzień dobry, proszę o informacje na temat ${productName}.`
  )
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [loadedAt] = useState(() => Date.now())
  const [turnstileToken, setTurnstileToken] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  // Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message || !consent) return

    setStatus('sending')
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, productName, productSlug, _ts: loadedAt, _hp: '', turnstileToken }),
      })
      if (res.ok) {
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-in-up"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Zapytaj o produkt</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {status === 'done' ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckIcon size={28} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zapytanie wysłane</h3>
            <p className="text-sm text-gray-500 mb-6">
              Odpowiemy najszybciej jak to możliwe — zwykle w ciągu 1 godziny roboczej.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Zamknij
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <p className="text-sm text-gray-500 -mt-1">
              Wypełnij formularz, a nasz doradca skontaktuje się z Tobą.
            </p>

            {/* Imię */}
            <div>
              <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Imię <span className="text-red-500">*</span>
              </label>
              <input
                ref={nameRef}
                id="inquiry-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jan Kowalski"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-primary-500 focus:ring-primary-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jan@firma.pl"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-primary-500 focus:ring-primary-500/20"
              />
            </div>

            {/* Telefon */}
            <div>
              <label htmlFor="inquiry-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                Telefon <span className="text-gray-400 font-normal">(opcjonalnie)</span>
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+48 123 456 789"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-primary-500 focus:ring-primary-500/20"
              />
            </div>

            {/* Wiadomość */}
            <div>
              <label htmlFor="inquiry-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Wiadomość <span className="text-red-500">*</span>
              </label>
              <textarea
                id="inquiry-message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-primary-500 focus:ring-primary-500/20 resize-y min-h-[80px]"
              />
            </div>

            {/* Zgoda RODO */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="peer h-5 w-5 rounded border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 checked:bg-primary-600 checked:border-primary-600 hover:border-gray-400"
                />
                <svg
                  className="absolute h-3 w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="2 6 5 9 10 3" />
                </svg>
              </div>
              <span className="text-xs text-gray-500 select-none leading-relaxed">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania
                zgodnie z{' '}
                <a href="/polityka-prywatnosci" target="_blank" className="text-primary-600 underline hover:text-primary-700">
                  Polityką Prywatności
                </a>.
              </span>
            </label>

            {status === 'error' && (
              <p className="text-sm text-red-600">Wystąpił błąd. Spróbuj ponownie lub napisz na takma@takma.com.pl.</p>
            )}

            <Turnstile onVerify={setTurnstileToken} />

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending' || !consent || !turnstileToken}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.98]"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Wysyłanie...
                </>
              ) : (
                <>
                  <MailIcon size={18} />
                  Wyślij zapytanie
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  )
}

export default function AskAboutProductButton({
  productName,
  productSlug,
  compact = false,
}: AskAboutProductButtonProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClose = useCallback(() => setOpen(false), [])

  if (compact) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
        >
          <MailIcon size={18} />
          <span className="hidden xs:inline">Zapytaj</span>
        </button>
        {mounted && open && (
          <InquiryModal
            productName={productName}
            productSlug={productSlug}
            onClose={handleClose}
          />
        )}
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <MailIcon size={20} />
        Zapytaj o produkt
      </button>
      {mounted && open && (
        <InquiryModal
          productName={productName}
          productSlug={productSlug}
          onClose={handleClose}
        />
      )}
    </>
  )
}
