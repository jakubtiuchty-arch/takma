'use client'

interface ScoreCardProps {
  label: string
  score: number
  delta: number
}

export default function ScoreCard({ label, score, delta }: ScoreCardProps) {
  const trendColor = delta > 0 ? 'text-green-600' : delta < 0 ? 'text-red-600' : 'text-gray-400'
  const trendIcon = delta > 0 ? '\u25B2' : delta < 0 ? '\u25BC' : '='
  const trendText = delta !== 0 ? `${delta > 0 ? '+' : ''}${delta}` : '0'

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <div className="flex items-end gap-2 mt-1">
        <span className="text-3xl font-bold text-gray-900">{score}</span>
        <span className={`text-sm font-medium ${trendColor} pb-1`}>
          {trendIcon} {trendText}
        </span>
      </div>
    </div>
  )
}
