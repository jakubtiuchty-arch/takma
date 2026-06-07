'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroReplyForm({ threadId }: { threadId: string }) {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function addFiles(list: FileList | null) {
    if (!list) return
    setFiles((prev) => [...prev, ...Array.from(list)])
    if (fileRef.current) fileRef.current.value = ''
  }

  function removeFile(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i))
  }

  async function send() {
    if (!text.trim() && files.length === 0) return
    setLoading(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.set('threadId', threadId)
      fd.set('text', text)
      files.forEach((f) => fd.append('files', f))
      const res = await fetch('/admin/allegro/wiadomosci/reply', { method: 'POST', body: fd })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) setError(data?.error || `Błąd ${res.status}`)
      else {
        setText('')
        setFiles([])
        router.refresh()
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-t border-gray-200 pt-3 mt-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Napisz odpowiedź…"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {files.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {files.map((f, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
              📎 {f.name}
              <button onClick={() => removeFile(i)} className="text-gray-400 hover:text-red-600" title="Usuń">
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}

      <div className="flex items-center justify-between mt-2">
        <label className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
          </svg>
          Dodaj załącznik
          <input ref={fileRef} type="file" multiple onChange={(e) => addFiles(e.target.files)} className="hidden" />
        </label>
        <button
          onClick={send}
          disabled={loading || (!text.trim() && files.length === 0)}
          className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {loading ? 'Wysyłam…' : 'Wyślij'}
        </button>
      </div>
    </div>
  )
}
