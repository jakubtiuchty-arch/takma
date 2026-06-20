'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export interface Task { id: string; title: string; detail: string; proposal?: string | null; where?: string | null; priority: string; category: string; done: boolean }
export interface Review { author: string; rating: number; text: string; relativeTime: string }

const PRIO: Record<string, { label: string; cls: string }> = {
  high: { label: 'wysoki', cls: 'bg-red-50 text-red-700' },
  med: { label: 'średni', cls: 'bg-amber-50 text-amber-700' },
  low: { label: 'niski', cls: 'bg-gray-100 text-gray-600' },
}

export function AuditButton({ hasAudit }: { hasAudit: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const run = async () => {
    setLoading(true); setErr(null)
    try {
      const res = await fetch('/admin/wizytowka/audit', { method: 'POST' })
      const d = await res.json()
      if (!res.ok) setErr(d.error || `HTTP ${res.status}`)
      else router.refresh()
    } catch (e) { setErr((e as Error).message) } finally { setLoading(false) }
  }
  return (
    <div className="flex items-center gap-3">
      <button onClick={run} disabled={loading}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-50 hover:bg-blue-700">
        {loading ? 'Analizuję…' : hasAudit ? 'Odśwież audyt i zadania' : 'Uruchom audyt AI'}
      </button>
      {err && <span className="text-xs text-red-500">{err}</span>}
    </div>
  )
}

export function Tasks({ initial }: { initial: Task[] }) {
  const [tasks, setTasks] = useState(initial)
  const toggle = async (t: Task) => {
    setTasks((p) => p.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))
    await fetch('/admin/wizytowka/task', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'toggle', id: t.id, done: !t.done }) }).catch(() => {})
  }
  if (tasks.length === 0) return <p className="text-sm text-gray-400">Brak zadań — uruchom audyt AI.</p>
  return <ul className="space-y-2">{tasks.map((t) => <TaskItem key={t.id} t={t} onToggle={() => toggle(t)} />)}</ul>
}

function TaskItem({ t, onToggle }: { t: Task; onToggle: () => void }) {
  const p = PRIO[t.priority] || PRIO.med
  const [copied, setCopied] = useState(false)
  const copy = () => { if (t.proposal) { navigator.clipboard?.writeText(t.proposal); setCopied(true); setTimeout(() => setCopied(false), 1500) } }
  return (
    <li className="flex items-start gap-3 rounded-lg border border-gray-200 p-3">
      <input type="checkbox" checked={t.done} onChange={onToggle} className="mt-1 h-4 w-4 accent-blue-600 cursor-pointer" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm font-medium ${t.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>{t.title}</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${p.cls}`}>{p.label}</span>
          <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">{t.category}</span>
        </div>
        <p className={`text-xs mt-0.5 ${t.done ? 'text-gray-300' : 'text-gray-500'}`}>{t.detail}</p>
        {t.proposal && (
          <div className="mt-2 rounded-lg bg-gray-50 border border-gray-200 p-2.5">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[11px] font-medium text-gray-500">
                Gotowe do wklejenia{t.where ? ` · ${t.where}` : ''}
              </span>
              <button onClick={copy} className="text-[11px] text-blue-600 hover:underline shrink-0">{copied ? 'skopiowano ✓' : 'kopiuj'}</button>
            </div>
            <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{t.proposal}</p>
          </div>
        )}
      </div>
    </li>
  )
}

export function Reviews({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return <p className="text-sm text-gray-400">Brak opinii w danych API (lub wizytówka nieskonfigurowana).</p>
  return (
    <div className="space-y-3">
      {reviews.map((r, i) => <ReviewCard key={i} r={r} />)}
    </div>
  )
}

function ReviewCard({ r }: { r: Review }) {
  const [draft, setDraft] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const gen = async () => {
    setLoading(true)
    try {
      const res = await fetch('/admin/wizytowka/reply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ author: r.author, rating: r.rating, text: r.text }) })
      const d = await res.json(); setDraft(d.reply || d.error || 'Błąd')
    } catch (e) { setDraft((e as Error).message) } finally { setLoading(false) }
  }
  const copy = () => { if (draft) { navigator.clipboard?.writeText(draft); setCopied(true); setTimeout(() => setCopied(false), 1500) } }
  return (
    <div className="rounded-lg border border-gray-200 p-3">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-amber-500">{'★'.repeat(r.rating)}{'☆'.repeat(Math.max(0, 5 - r.rating))}</span>
        <span className="font-medium text-gray-800">{r.author}</span>
        <span className="text-xs text-gray-400">{r.relativeTime}</span>
      </div>
      {r.text && <p className="text-sm text-gray-600 mt-1">{r.text}</p>}
      <div className="mt-2 flex items-center gap-3">
        <button onClick={gen} disabled={loading} className="text-xs font-medium text-blue-600 hover:underline disabled:opacity-50">
          {loading ? 'Generuję…' : draft ? 'Generuj ponownie' : 'Zaproponuj odpowiedź AI'}
        </button>
        {draft && <button onClick={copy} className="text-xs text-gray-500 hover:text-gray-800">{copied ? 'skopiowano ✓' : 'kopiuj'}</button>}
      </div>
      {draft && <p className="text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg p-2.5 mt-2 whitespace-pre-wrap">{draft}</p>}
    </div>
  )
}
