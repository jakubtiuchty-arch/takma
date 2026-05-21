'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { HelpCircleIcon } from './Icons'

interface Props {
  text: string
  /** Rozmiar ikony (px). Default: 14 */
  size?: number
  /** ARIA label dla buttona. Default: "Pokaż wyjaśnienie" */
  ariaLabel?: string
  /** Dodatkowe klasy dla buttona (np. zmiana koloru) */
  className?: string
}

/**
 * Ikona ? z tooltipem fixed-position.
 * Działa wewnątrz overflow-hidden kontenerów — chmurka renderuje się na window.body przez position:fixed.
 * Auto-close na scroll/resize.
 */
export default function InfoTooltip({
  text,
  size = 14,
  ariaLabel = 'Pokaż wyjaśnienie',
  className,
}: Props) {
  const [show, setShow] = useState(false)
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const updateCoords = useCallback(() => {
    if (!btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    setCoords({
      top: r.top - 8,
      left: Math.min(Math.max(r.left + r.width / 2, 140), window.innerWidth - 140),
    })
  }, [])

  useEffect(() => {
    if (!show) return
    const close = () => setShow(false)
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', close)
    return () => {
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', close)
    }
  }, [show])

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label={ariaLabel}
        onMouseEnter={() => { updateCoords(); setShow(true) }}
        onMouseLeave={() => setShow(false)}
        onFocus={() => { updateCoords(); setShow(true) }}
        onBlur={() => setShow(false)}
        onClick={e => { e.stopPropagation(); e.preventDefault() }}
        className={
          className ??
          'inline-flex items-center justify-center text-gray-400 hover:text-gray-700 focus:text-gray-700 focus:outline-none rounded-full transition-colors'
        }
      >
        <HelpCircleIcon size={size} />
      </button>
      {show && coords && (
        <span
          role="tooltip"
          style={{
            position: 'fixed',
            top: coords.top,
            left: coords.left,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
          }}
          className="w-56 max-w-[calc(100vw-1rem)] p-2.5 rounded-md bg-gray-900 text-white text-xs font-normal leading-snug shadow-lg pointer-events-none normal-case tracking-normal"
        >
          {text}
          <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900" />
        </span>
      )}
    </>
  )
}
