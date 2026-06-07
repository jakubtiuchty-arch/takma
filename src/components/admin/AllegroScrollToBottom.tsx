'use client'

import { useEffect, useRef } from 'react'

/** Przewija kontener wiadomości na dół (najnowsze) po załadowaniu wątku. */
export default function AllegroScrollToBottom({ dep }: { dep: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'end' })
  }, [dep])
  return <div ref={ref} />
}
