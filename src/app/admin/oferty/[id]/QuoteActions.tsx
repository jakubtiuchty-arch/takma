'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { updateQuoteStatus, sendQuoteEmail, duplicateQuote, deleteQuote } from '@/actions/admin-quotes'
import { QuoteStatus } from '@/generated/prisma/client'

interface QuoteActionsProps {
  quoteId: string
  quoteNumber: string
  status: QuoteStatus
  hasEmail: boolean
}

export default function QuoteActions({ quoteId, quoteNumber, status, hasEmail }: QuoteActionsProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleSendEmail = () => {
    if (!hasEmail) {
      setMessage('Brak adresu email klienta')
      return
    }
    startTransition(async () => {
      const result = await sendQuoteEmail(quoteId)
      setMessage(result.success ? 'Oferta wysłana emailem' : `Błąd: ${result.error}`)
      setTimeout(() => setMessage(''), 3000)
    })
  }

  const handleStatusChange = (newStatus: QuoteStatus) => {
    startTransition(async () => {
      await updateQuoteStatus(quoteId, newStatus)
      setMessage('Status zaktualizowany')
      setTimeout(() => setMessage(''), 2000)
    })
  }

  const handleDuplicate = () => {
    startTransition(async () => {
      await duplicateQuote(quoteId)
    })
  }

  const handleDownloadPdf = () => {
    window.open(`/api/admin/quote-pdf?id=${quoteId}`, '_blank')
  }

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteQuote(quoteId)
      if (result.success) {
        router.push('/admin/oferty')
      } else {
        setMessage(`Błąd: ${result.error}`)
        setConfirmDelete(false)
      }
    })
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Akcje</h2>
      <div className="space-y-2">
        {(status === 'DRAFT' || status === 'SENT' || status === 'EXPIRED' || status === 'REJECTED') && (
          <Link
            href={`/admin/oferty/${quoteId}/edytuj`}
            className="w-full px-4 py-2.5 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            Edytuj ofertę
          </Link>
        )}

        <button
          onClick={handleDownloadPdf}
          disabled={isPending}
          className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Pobierz PDF
        </button>

        {hasEmail && status !== 'SENT' && status !== 'ACCEPTED' && (
          <button
            onClick={handleSendEmail}
            disabled={isPending}
            className="w-full px-4 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Wyślij emailem
          </button>
        )}

        <button
          onClick={handleDuplicate}
          disabled={isPending}
          className="w-full px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 disabled:opacity-50"
        >
          Duplikuj ofertę
        </button>

        {/* Status controls */}
        <div className="pt-3 border-t border-gray-200 space-y-2">
          <p className="text-xs font-medium text-gray-500 uppercase">Zmień status</p>
          {status === 'REQUESTED' && (
            <a
              href={`/admin/oferty/nowa?fromRfq=${quoteId}`}
              className="w-full px-3 py-1.5 text-sm text-cyan-700 bg-cyan-50 rounded-lg hover:bg-cyan-100 flex items-center justify-center gap-1.5 font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
              </svg>
              Wyceniaj zapytanie
            </a>
          )}
          {(status === 'DRAFT' || status === 'REQUESTED') && (
            <button onClick={() => handleStatusChange('SENT')} disabled={isPending} className="w-full px-3 py-1.5 text-sm text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 disabled:opacity-50">
              Oznacz jako wysłaną
            </button>
          )}
          {(status === 'DRAFT' || status === 'SENT') && (
            <button onClick={() => handleStatusChange('ACCEPTED')} disabled={isPending} className="w-full px-3 py-1.5 text-sm text-green-700 bg-green-50 rounded-lg hover:bg-green-100 disabled:opacity-50">
              Zaakceptowana
            </button>
          )}
          {status !== 'REJECTED' && status !== 'EXPIRED' && (
            <button onClick={() => handleStatusChange('REJECTED')} disabled={isPending} className="w-full px-3 py-1.5 text-sm text-red-700 bg-red-50 rounded-lg hover:bg-red-100 disabled:opacity-50">
              Odrzucona
            </button>
          )}
          {status !== 'EXPIRED' && status !== 'REJECTED' && (
            <button onClick={() => handleStatusChange('EXPIRED')} disabled={isPending} className="w-full px-3 py-1.5 text-sm text-yellow-700 bg-yellow-50 rounded-lg hover:bg-yellow-100 disabled:opacity-50">
              Wygasła
            </button>
          )}
        </div>

        {/* Kasowanie — dwustopniowe, bo nie ma cofnięcia */}
        <div className="pt-3 border-t border-gray-200">
          {confirmDelete ? (
            <div className="space-y-2">
              <p className="text-xs text-gray-600">
                Skasować ofertę <strong>{quoteNumber}</strong> razem z pozycjami? Link
                „zamów z oferty&rdquo; z wysłanego maila przestanie działać.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleDelete}
                  disabled={isPending}
                  className="flex-1 px-3 py-1.5 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 font-medium"
                >
                  {isPending ? 'Kasuję…' : 'Tak, skasuj'}
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  disabled={isPending}
                  className="flex-1 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                >
                  Anuluj
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              disabled={isPending}
              className="w-full px-3 py-1.5 text-sm text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50"
            >
              Skasuj ofertę
            </button>
          )}
        </div>
      </div>

      {message && (
        <p className="mt-3 text-xs text-center text-gray-600">{message}</p>
      )}
    </div>
  )
}
