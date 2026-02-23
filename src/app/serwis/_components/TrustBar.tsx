const stats = [
  { value: '25+', label: 'lat na rynku AutoID', accent: true },
  { value: '48h', label: 'czas diagnostyki', accent: false },
  { value: '0 zł', label: 'diagnostyka przy naprawie', accent: false },
  { value: '3–6 mies.', label: 'gwarancja na naprawę', accent: false },
  { value: 'Cała Polska', label: 'obsługa kurierska', accent: false },
]

export function TrustBar() {
  return (
    <section className="bg-gray-900 border-t border-white/10" aria-label="Kluczowe fakty o serwisie TAKMA">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5 text-center sm:text-left">
              <span className={`text-lg sm:text-xl font-bold ${stat.accent ? 'text-lime-400' : 'text-white'}`}>
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
