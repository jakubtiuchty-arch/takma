'use client'

interface SerpPosition {
  keyword: string
  keywordGroup: string
  takmaPosition: number | null
  competitorPositions: Record<string, number | null>
}

interface SerpTableProps {
  positions: SerpPosition[]
}

const COMPETITORS = ['aspekt.net.pl', 'bcmarket.pl', 'zebrasklep.pl', 'strefadrukarek.pl', 'netselekt.pl']

const GROUP_LABELS: Record<string, string> = {
  brand: 'Brand',
  drukarki: 'Drukarki',
  terminale: 'Terminale',
  skanery: 'Skanery',
  'long-tail': 'Long-tail',
  produkty: 'Produkty',
  mobilne: 'Mobilne',
}

function PositionBadge({ position }: { position: number | null }) {
  if (position === null) {
    return <span className="text-xs text-gray-300">—</span>
  }

  let bgColor: string
  let textColor: string

  if (position <= 3) {
    bgColor = 'bg-green-100'
    textColor = 'text-green-800'
  } else if (position <= 10) {
    bgColor = 'bg-yellow-100'
    textColor = 'text-yellow-800'
  } else if (position <= 30) {
    bgColor = 'bg-gray-100'
    textColor = 'text-gray-600'
  } else {
    bgColor = 'bg-red-100'
    textColor = 'text-red-700'
  }

  return (
    <span className={`inline-flex items-center justify-center min-w-[28px] px-1.5 py-0.5 rounded text-xs font-medium ${bgColor} ${textColor}`}>
      {position}
    </span>
  )
}

export default function SerpTable({ positions }: SerpTableProps) {
  if (positions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Pozycje SERP</h3>
        <p className="text-sm text-gray-500">Brak danych SERP. Dodaj zmienne GOOGLE_CSE_API_KEY i GOOGLE_CSE_ID.</p>
      </div>
    )
  }

  // Group by keywordGroup
  const groups = new Map<string, SerpPosition[]>()
  for (const pos of positions) {
    const group = groups.get(pos.keywordGroup) || []
    group.push(pos)
    groups.set(pos.keywordGroup, group)
  }

  // Stats
  const inTop3 = positions.filter(p => p.takmaPosition !== null && p.takmaPosition <= 3).length
  const inTop10 = positions.filter(p => p.takmaPosition !== null && p.takmaPosition <= 10).length
  const inTop30 = positions.filter(p => p.takmaPosition !== null).length

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900">
          Pozycje SERP <span className="text-gray-400 font-normal">({positions.length} fraz)</span>
        </h3>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Top 3: {inTop3}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            Top 10: {inTop10}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            Top 30: {inTop30}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-medium text-gray-500">Fraza</th>
              <th className="text-center py-2 px-2 font-medium text-blue-600">TAKMA</th>
              {COMPETITORS.map(c => (
                <th key={c} className="text-center py-2 px-2 font-medium text-gray-400" title={c}>
                  {c.split('.')[0]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from(groups.entries()).map(([group, items]) => (
              <>
                <tr key={`group-${group}`}>
                  <td colSpan={COMPETITORS.length + 2} className="pt-3 pb-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {GROUP_LABELS[group] || group}
                    </span>
                  </td>
                </tr>
                {items.map(pos => (
                  <tr key={pos.keyword} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-1.5 pr-4 text-gray-700 truncate max-w-[200px]" title={pos.keyword}>
                      {pos.keyword}
                    </td>
                    <td className="py-1.5 px-2 text-center">
                      <PositionBadge position={pos.takmaPosition} />
                    </td>
                    {COMPETITORS.map(c => (
                      <td key={c} className="py-1.5 px-2 text-center">
                        <PositionBadge position={pos.competitorPositions[c] ?? null} />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4 text-[11px] text-gray-400">
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-green-100" /> 1-3</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-yellow-100" /> 4-10</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-gray-100" /> 11-30</span>
        <span>— = brak w top 30</span>
      </div>
    </div>
  )
}
