'use client'

import { useEffect, useState } from 'react'

/** Zielona kropka + liczba odwiedzających (ostatnia ~godzina), odświeżane co 60 s. */
export default function LiveBadge({ siteId, initial }: { siteId: string; initial: number }) {
  const [count, setCount] = useState(initial)

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const res = await fetch('/admin/strony/live')
        if (!res.ok) return
        const data = (await res.json()) as Record<string, number>
        if (alive && typeof data[siteId] === 'number' && data[siteId] >= 0) setCount(data[siteId])
      } catch {
        /* następny tick */
      }
    }
    const timer = setInterval(load, 60000)
    return () => { alive = false; clearInterval(timer) }
  }, [siteId])

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-medium text-emerald-700">
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 ${count > 0 ? 'animate-ping opacity-75' : 'opacity-0'}`} />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {count} na żywo
    </span>
  )
}
