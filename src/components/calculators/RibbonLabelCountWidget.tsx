'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Calculator } from 'lucide-react'
import { labelsPerRoll } from '@/lib/ribbon-math'

interface Props {
  rollLengthM: number
  defaultLabelHeight?: number
}

const PRESETS = [25, 38, 51, 76, 100, 152]

function fmt(n: number) {
  return new Intl.NumberFormat('pl-PL').format(n)
}

export default function RibbonLabelCountWidget({
  rollLengthM,
  defaultLabelHeight = 80,
}: Props) {
  const [h, setH] = useState(defaultLabelHeight)

  const result = useMemo(() => {
    const count = labelsPerRoll(rollLengthM, h)
    return { count }
  }, [rollLengthM, h])

  // GA4 event ribbon_calc_used — debounce 500 ms, tylko przy zmianie wysokości
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current)
    debounce.current = setTimeout(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ribbon_calc_used', {
          label_height: h,
          roll_length: rollLengthM,
          labels_count: result.count,
        })
      }
    }, 500)
    return () => {
      if (debounce.current) clearTimeout(debounce.current)
    }
  }, [h, rollLengthM, result.count])

  return (
    <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Calculator className="w-5 h-5 text-amber-900" />
        <span className="font-medium text-amber-950">Na ile etykiet wystarczy rolka?</span>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <label className="text-sm text-amber-900 min-w-[140px]">Wysokość Twojej etykiety:</label>
        <input
          type="range"
          min={10}
          max={200}
          step={1}
          value={h}
          onChange={(e) => setH(parseInt(e.target.value))}
          className="flex-1"
        />
        <span className="font-medium text-amber-950 min-w-[70px] text-right">{h} mm</span>
      </div>

      <div className="flex gap-1.5 flex-wrap mb-4">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setH(p)}
            className="text-xs px-2.5 py-1 border border-amber-300 rounded-md hover:bg-amber-100 text-amber-900"
          >
            {p} mm
          </button>
        ))}
      </div>

      <div className="p-4 bg-white rounded-lg">
        <div className="text-xs text-gray-500 mb-1">Z tej rolki wydrukujesz</div>
        <div className="text-3xl font-medium text-amber-950 leading-tight">
          {fmt(result.count)}
        </div>
        <div className="text-sm text-gray-600 mt-1">etykiet o wysokości {h} mm</div>
      </div>

      <p className="text-[11px] text-amber-800 mt-3">
        Wyliczenie: 3 mm odstęp między etykietami + 2 m marży na kalibrację. Dokładność ±2%.
      </p>
    </div>
  )
}
