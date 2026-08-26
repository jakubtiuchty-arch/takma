import type { PunktDnia } from './dane'

/**
 * Wykres słupkowy obrotu z 30 dni — czysty SVG, bez biblioteki.
 *
 * Wytyczne do pulpitów mówią jasno: trend czyta się z wykresu, nie z tabeli
 * liczb. Słupki (a nie linia) dlatego, że dni bez zamówień mają realne zero i
 * przerwa w słupkach niesie informację, której linia by nie pokazała.
 */
export default function WykresObrotu({ dni }: { dni: PunktDnia[] }) {
  const maks = Math.max(...dni.map((d) => d.obrot), 1)
  const suma = dni.reduce((s, d) => s + d.obrot, 0)
  const srednia = suma / (dni.length || 1)

  const W = 720
  const H = 150
  const szerokoscSlupka = W / dni.length
  const ySredniej = H - (srednia / maks) * H

  const zl = (n: number) => n.toLocaleString('pl-PL', { maximumFractionDigits: 0 })

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h2 className="font-semibold text-gray-900">Obrót dzień po dniu</h2>
          <p className="text-sm text-gray-500">ostatnie 30 dni · średnia {zl(srednia)} zł</p>
        </div>
        <p className="text-sm text-gray-500 tabular-nums">
          razem <span className="font-semibold text-gray-900">{zl(suma)} zł</span>
        </p>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[150px]" preserveAspectRatio="none" role="img"
        aria-label={`Obrót dzienny z ostatnich 30 dni, średnia ${zl(srednia)} zł`}>
        {/* linia średniej — punkt odniesienia, bez niego słupki są tylko ozdobą */}
        <line x1="0" y1={ySredniej} x2={W} y2={ySredniej} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        {dni.map((d, i) => {
          const wysokosc = d.obrot > 0 ? Math.max((d.obrot / maks) * H, 2) : 0
          const ostatni = i === dni.length - 1
          return (
            <rect
              key={d.data}
              x={i * szerokoscSlupka + szerokoscSlupka * 0.15}
              y={H - wysokosc}
              width={szerokoscSlupka * 0.7}
              height={wysokosc}
              rx="2"
              fill={ostatni ? '#2563eb' : d.obrot >= srednia ? '#93c5fd' : '#dbeafe'}
            >
              <title>{`${d.etykieta}: ${zl(d.obrot)} zł, ${d.zamowien} zam.`}</title>
            </rect>
          )
        })}
      </svg>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>{dni[0]?.etykieta}</span>
        <span>{dni[Math.floor(dni.length / 2)]?.etykieta}</span>
        <span>dziś</span>
      </div>
    </div>
  )
}
