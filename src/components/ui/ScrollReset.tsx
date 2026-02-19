'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ScrollReset({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0)
  }, [pathname])

  return (
    <div ref={containerRef} className="flex-1 p-6 overflow-auto">
      {children}
    </div>
  )
}
