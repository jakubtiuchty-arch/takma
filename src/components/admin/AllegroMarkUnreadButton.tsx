'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroMarkUnreadButton({ threadId }: { threadId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function markUnread() {
    setLoading(true)
    try {
      await fetch('/admin/allegro/wiadomosci/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ threadId, read: false }),
      })
      router.push('/admin/allegro/wiadomosci')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={markUnread}
      disabled={loading}
      className="text-xs text-gray-500 hover:text-blue-600 disabled:opacity-40 whitespace-nowrap"
    >
      {loading ? '…' : 'Oznacz jako nieprzeczytaną'}
    </button>
  )
}
