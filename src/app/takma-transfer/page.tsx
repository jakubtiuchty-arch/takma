'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'

const BUCKET = 'takma-transfer'
const MAX_BYTES = 40 * 1024 * 1024
const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SB_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

interface FileRow { path: string; size: number; createdAt: string | null; mime: string | null }

function humanSize(b: number): string {
  if (b >= 1024 * 1024) return `${(b / 1024 / 1024).toFixed(1)} MB`
  if (b >= 1024) return `${(b / 1024).toFixed(0)} KB`
  return `${b} B`
}
function displayName(path: string): string {
  const i = path.indexOf('__')
  return i >= 0 ? path.slice(i + 2) : path
}
function fmtDate(d: string | null): string {
  if (!d) return ''
  try { return new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) } catch { return '' }
}

export default function TakmaTransferPage() {
  const [files, setFiles] = useState<FileRow[]>([])
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<{ name: string } | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const configured = !!SB_URL && !!SB_ANON

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/takma-transfer', { cache: 'no-store' })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Błąd ładowania.')
      setFiles(j.files || [])
      setError(null)
    } catch (e) { setError((e as Error).message) } finally { setLoading(false) }
  }, [])

  useEffect(() => { load() }, [load])

  const upload = async (file: File) => {
    setError(null)
    if (file.size > MAX_BYTES) { setError(`„${file.name}" ma ${humanSize(file.size)} — limit to 40 MB.`); return }
    setProgress({ name: file.name })
    try {
      const signRes = await fetch('/api/takma-transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sign-upload', name: file.name, size: file.size }),
      })
      const sign = await signRes.json()
      if (!signRes.ok) throw new Error(sign.error || 'Nie udało się podpisać uploadu.')
      const sb = createClient(SB_URL, SB_ANON)
      const { error: upErr } = await sb.storage.from(BUCKET).uploadToSignedUrl(sign.path, sign.token, file)
      if (upErr) throw upErr
      await load()
    } catch (e) { setError((e as Error).message) } finally { setProgress(null) }
  }

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files
    if (!list) return
    Array.from(list).forEach(upload)
    e.target.value = ''
  }
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    Array.from(e.dataTransfer.files).forEach(upload)
  }

  const download = async (path: string) => {
    setBusy(path)
    try {
      const res = await fetch('/api/takma-transfer', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sign-download', path }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Błąd pobierania.')
      window.location.href = j.url
    } catch (e) { setError((e as Error).message) } finally { setBusy(null) }
  }

  const remove = async (path: string) => {
    if (!confirm(`Usunąć „${displayName(path)}"?`)) return
    setBusy(path)
    try {
      const res = await fetch('/api/takma-transfer', {
        method: 'DELETE', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
      })
      if (!res.ok) { const j = await res.json(); throw new Error(j.error || 'Błąd usuwania.') }
      await load()
    } catch (e) { setError((e as Error).message) } finally { setBusy(null) }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">TAKMA Transfer</h1>
        <p className="text-sm text-gray-500 mb-6">Wymiana plików z zespołem. Maksymalnie 40 MB na plik.</p>

        {!configured && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Transfer nieskonfigurowany — brak <code>NEXT_PUBLIC_SUPABASE_URL</code> / <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> w env.
          </div>
        )}

        {/* Upload */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-white hover:border-blue-400 hover:bg-blue-50/40 transition-colors p-8 text-center"
        >
          <input ref={inputRef} type="file" multiple className="hidden" onChange={onPick} />
          <svg className="w-10 h-10 mx-auto text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 7.5 7.5 12M12 7.5v9" />
          </svg>
          <div className="text-sm font-medium text-gray-700">Przeciągnij pliki tutaj lub kliknij, aby wybrać</div>
          <div className="text-xs text-gray-400 mt-1">max 40 MB / plik</div>
        </div>

        {progress && (
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-700">
            <span className="inline-block w-3 h-3 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
            Wysyłanie „{progress.name}"…
          </div>
        )}
        {error && <div className="mt-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2">{error}</div>}

        {/* Lista */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-700">Pliki ({files.length})</h2>
            <button onClick={load} className="text-xs text-gray-500 hover:text-gray-800">Odśwież</button>
          </div>

          {loading ? (
            <div className="text-sm text-gray-400 py-8 text-center">Ładowanie…</div>
          ) : files.length === 0 ? (
            <div className="text-sm text-gray-400 py-8 text-center bg-white border border-gray-200 rounded-xl">Brak plików.</div>
          ) : (
            <ul className="space-y-2">
              {files.map((f) => (
                <li key={f.path} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">{displayName(f.path)}</div>
                    <div className="text-xs text-gray-400">{humanSize(f.size)} · {fmtDate(f.createdAt)}</div>
                  </div>
                  <button
                    onClick={() => download(f.path)}
                    disabled={busy === f.path}
                    className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg px-3 py-1.5"
                  >
                    Pobierz
                  </button>
                  <button
                    onClick={() => remove(f.path)}
                    disabled={busy === f.path}
                    className="text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50 rounded-lg px-2.5 py-1.5"
                  >
                    Usuń
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}
