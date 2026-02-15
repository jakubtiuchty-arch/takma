'use client'

import { useState } from 'react'
import { ChevronRightIcon } from '@/components/ui/Icons'

interface Spec {
  name: string
  value: string
}

const VISIBLE_ROWS = 6

export default function SpecsAccordion({ specs, productName }: { specs: Spec[]; productName?: string }) {
  const [expanded, setExpanded] = useState(false)

  const needsAccordion = specs.length > VISIBLE_ROWS
  const visibleSpecs = needsAccordion && !expanded ? specs.slice(0, VISIBLE_ROWS) : specs

  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden">
      <table className="w-full">
        <caption className="sr-only">Specyfikacja techniczna{productName ? ` ${productName}` : ''}</caption>
        <tbody className="divide-y divide-gray-200">
          {visibleSpecs.map((spec, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <th scope="row" className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-500 w-1/3 text-left font-medium">
                {spec.name}
              </th>
              <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-900">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {needsAccordion && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-gray-100 transition-colors border-t border-gray-200"
        >
          {expanded ? 'Zwiń specyfikację' : `Pokaż wszystkie (${specs.length})`}
          <ChevronRightIcon
            size={16}
            className={`transition-transform ${expanded ? '-rotate-90' : 'rotate-90'}`}
          />
        </button>
      )}
    </div>
  )
}
