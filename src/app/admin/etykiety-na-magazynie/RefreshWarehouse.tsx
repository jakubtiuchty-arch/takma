'use client'
import { useEffect, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export default function RefreshWarehouse() {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') startTransition(() => router.refresh())
    }, 15000)
    return () => window.clearInterval(timer)
  }, [router, startTransition])
  return <button type="button" disabled={pending} onClick={() => startTransition(() => router.refresh())}
    className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-60">
    {pending ? 'Odświeżanie…' : 'Odśwież magazyn'}
  </button>
}
