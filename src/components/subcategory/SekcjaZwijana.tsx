'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRightIcon } from '@/components/ui/Icons'

/**
 * Długi blok treści przycięty na telefonie do części ekranu, z przyciskiem „Rozwiń".
 *
 * Opisy kategorii mają po kilka tysięcy znaków. Na monitorze to cztery akapity, na
 * telefonie trzy ekrany przewijania między siatką produktów a pytaniami i odpowiedziami.
 * Treść zostaje w HTML-u (przycinamy ją CSS-em), więc wyszukiwarka widzi ją tak samo
 * jak wcześniej. Od md nie ma ani przycięcia, ani przycisku.
 *
 * Krótsza treść niż limit zostaje bez przycisku — sprawdzamy to po wyrenderowaniu,
 * bo ta sama sekcja w innej kategorii może mieć dwa zdania albo dwadzieścia.
 */
export default function SekcjaZwijana({
  children,
  etykieta = 'Rozwiń',
  tlo = 'from-white',
  wysokosc = 'max-h-80',
}: {
  children: React.ReactNode
  etykieta?: string
  /** Wysokość przyciętego bloku — tyle treści widać przed dotknięciem „Rozwiń". */
  wysokosc?: string
  /** Klasa początku gradientu — musi odpowiadać tłu sekcji, inaczej zanik widać jako plamę. */
  tlo?: string
}) {
  const [otwarte, setOtwarte] = useState(false)
  const [przyciete, setPrzyciete] = useState(true)
  const blok = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = blok.current
    if (!el) return
    const sprawdz = () => {
      if (otwarte) return
      setPrzyciete(el.scrollHeight - el.clientHeight > 8)
    }
    sprawdz()
    window.addEventListener('resize', sprawdz)
    return () => window.removeEventListener('resize', sprawdz)
  }, [otwarte])

  return (
    <div>
      {/* Przycięcie zostaje na miejscu także wtedy, gdy treść jest krótsza niż limit —
          inaczej po zmianie szerokości okna nie da się już zmierzyć, czy się mieści. */}
      <div
        ref={blok}
        className={
          otwarte ? '' : `relative overflow-hidden md:max-h-none md:overflow-visible ${wysokosc}`
        }
      >
        {children}
        {!otwarte && przyciete && (
          <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent md:hidden ${tlo}`} />
        )}
      </div>
      {przyciete && (
        <button
          type="button"
          onClick={() => setOtwarte((v) => !v)}
          aria-expanded={otwarte}
          className="mt-2 flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-gray-200 text-sm font-medium text-primary-600 md:hidden"
        >
          {otwarte ? 'Zwiń' : etykieta}
          <ChevronRightIcon
            size={16}
            className={`transition-transform ${otwarte ? '-rotate-90' : 'rotate-90'}`}
          />
        </button>
      )}
    </div>
  )
}
