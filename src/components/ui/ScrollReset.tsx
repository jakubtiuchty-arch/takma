'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useCallback } from 'react'

export default function ScrollReset({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const prevPathname = useRef(pathname)

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo(0, 0)
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  useEffect(() => {
    // Always scroll on mount
    scrollToTop()
  }, [scrollToTop])

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      // Use rAF to ensure DOM has updated
      requestAnimationFrame(() => {
        scrollToTop()
      })
    }
  }, [pathname, scrollToTop])

  return (
    <div ref={containerRef} className="flex-1 p-4 sm:p-6 overflow-auto">
      {children}
    </div>
  )
}
