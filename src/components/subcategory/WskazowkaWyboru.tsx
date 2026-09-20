import type { DecisionGuide } from '@/data/subcategory-content'

/**
 * „Co wybrać" — dwie kolumny sytuacji i zestawienie kosztu materiałów.
 *
 * Klient przychodzi po kolorową drukarkę, a wychodzi z termotransferową, więc ta sekcja
 * ma dać mu liczby, nie zachętę. Układ jest krótki celowo: dwie listy po pięć punktów
 * i dwa rachunki obok siebie czyta się szybciej niż akapit z tymi samymi danymi.
 */
export default function WskazowkaWyboru({ guide }: { guide: DecisionGuide }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold text-gray-900">{guide.heading}</h2>
      <p className="mb-5 leading-relaxed text-gray-600 sm:text-justify">{guide.intro}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {guide.columns.map((kolumna) => (
          <div key={kolumna.title} className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-3 font-semibold text-gray-900">{kolumna.title}</h3>
            <ul className="space-y-2">
              {kolumna.items.map((punkt) => (
                <li key={punkt} className="flex gap-2.5 text-sm leading-relaxed text-gray-600">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  <span>{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mb-3 mt-8 font-semibold text-gray-900">{guide.costs.heading}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {guide.costs.variants.map((wariant) => (
          <div key={wariant.label} className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm font-medium text-gray-900">{wariant.label}</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-gray-900">{wariant.total}</p>
            <dl className="mt-3 divide-y divide-gray-100 border-t border-gray-100 text-sm">
              {wariant.items.map((pozycja) => (
                <div key={pozycja.name} className="flex gap-3 py-2">
                  <dt className="flex-1 text-gray-600">{pozycja.name}</dt>
                  <dd className="shrink-0 tabular-nums text-gray-900">{pozycja.value}</dd>
                </div>
              ))}
            </dl>
            {wariant.totalNote && <p className="mt-2 text-xs leading-relaxed text-gray-500">{wariant.totalNote}</p>}
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-500">{guide.costs.note}</p>
      <p className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5 leading-relaxed text-gray-700">
        {guide.verdict}
      </p>
    </section>
  )
}
