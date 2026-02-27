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
  'drukarki-biurkowe': 'Drukarki biurkowe',
  'drukarki-przemyslowe': 'Drukarki przemysłowe',
  'drukarki-mobilne': 'Drukarki mobilne',
  skanery: 'Skanery',
  terminale: 'Terminale',
  produkty: 'Produkty (model)',
  generyczne: 'Generyczne',
  'long-tail': 'Long-tail',
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

function sortByTakmaPosition(a: SerpPosition, b: SerpPosition): number {
  if (a.takmaPosition === null && b.takmaPosition === null) return 0
  if (a.takmaPosition === null) return 1
  if (b.takmaPosition === null) return -1
  return a.takmaPosition - b.takmaPosition
}

export default function SerpTable({ positions }: SerpTableProps) {
  if (positions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
        </svg>
        <h3 className="text-sm font-semibold text-gray-900 mb-1">Brak danych SERP</h3>
        <p className="text-sm text-gray-500">Dodaj zmienną SERPER_API_KEY i uruchom pipeline.</p>
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

  // Sort each group by TAKMA position (best first, null last)
  Array.from(groups.keys()).forEach(key => {
    const items = groups.get(key)!
    groups.set(key, items.sort(sortByTakmaPosition))
  })

  // Stats
  const inTop3 = positions.filter(p => p.takmaPosition !== null && p.takmaPosition <= 3).length
  const inTop10 = positions.filter(p => p.takmaPosition !== null && p.takmaPosition <= 10).length
  const inTop30 = positions.filter(p => p.takmaPosition !== null && p.takmaPosition <= 30).length

  return (
    <div className="space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-green-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-700 font-medium">Top 3</span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-800 mt-1">{inTop3}</p>
          <p className="text-xs text-green-600 mt-0.5">z {positions.length} fraz</p>
        </div>
        <div className="bg-white rounded-lg border border-yellow-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-yellow-700 font-medium">Top 10</span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-yellow-800 mt-1">{inTop10}</p>
          <p className="text-xs text-yellow-600 mt-0.5">z {positions.length} fraz</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 font-medium">Top 30</span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
          </div>
          <p className="text-3xl font-bold text-gray-700 mt-1">{inTop30}</p>
          <p className="text-xs text-gray-500 mt-0.5">z {positions.length} fraz</p>
        </div>
      </div>

      {/* Group cards */}
      {Array.from(groups.entries()).map(([group, items]) => (
        <div key={group} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700">
              {GROUP_LABELS[group] || group}
              <span className="ml-2 text-gray-400 font-normal">({items.length})</span>
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col style={{ width: '35%' }} />
                <col style={{ width: `${65 / (COMPETITORS.length + 1)}%` }} />
                {COMPETITORS.map(c => (
                  <col key={c} style={{ width: `${65 / (COMPETITORS.length + 1)}%` }} />
                ))}
              </colgroup>
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 pl-4 pr-3 font-medium text-gray-500">Fraza</th>
                  <th className="text-center py-2 px-2 font-medium text-blue-600 bg-blue-50/50">TAKMA</th>
                  {COMPETITORS.map(c => (
                    <th key={c} className="text-center py-2 px-2 font-medium text-gray-400" title={c}>
                      {c.split('.')[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map(pos => (
                  <tr key={pos.keyword} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="py-1.5 pl-4 pr-3 text-gray-700 truncate" title={pos.keyword}>
                      {pos.keyword}
                    </td>
                    <td className="py-1.5 px-2 text-center bg-blue-50/50">
                      <PositionBadge position={pos.takmaPosition} />
                    </td>
                    {COMPETITORS.map(c => (
                      <td key={c} className="py-1.5 px-2 text-center">
                        <PositionBadge position={pos.competitorPositions[c] ?? null} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="flex items-center gap-4 text-[11px] text-gray-400 px-1">
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-green-100" /> 1-3</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-yellow-100" /> 4-10</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-gray-100" /> 11-30</span>
        <span>— = brak w top 30</span>
      </div>
    </div>
  )
}
