import Link from 'next/link'
import clsx from 'clsx'

interface ComparisonModel {
  name: string
  slug?: string
  highlight?: boolean
  specs: Record<string, string>
}

interface ComparisonTableProps {
  title: string
  models: ComparisonModel[]
}

export default function ComparisonTable({ title, models }: ComparisonTableProps) {
  const specKeys = Object.keys(models[0].specs)

  return (
    <section id="porownanie">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {models.map(m => m.name).join(' vs ')}
      </p>

      {/* Desktop table */}
      <div className="hidden md:block bg-gray-50 rounded-xl overflow-hidden">
        <table className="w-full">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="border-b border-gray-200">
              <th scope="col" className="px-5 py-4 text-left text-sm font-medium text-gray-500 w-1/4">Parametr</th>
              {models.map((m) => (
                <th
                  key={m.name}
                  scope="col"
                  className={clsx(
                    'px-5 py-4 text-center text-sm font-bold',
                    m.highlight ? 'bg-primary-50 text-primary-700' : 'text-gray-900'
                  )}
                >
                  {m.slug ? (
                    <Link href={`/produkt/${m.slug}`} className="hover:underline">
                      {m.name}
                    </Link>
                  ) : m.name}
                  {m.highlight && (
                    <span className="block text-xs font-medium text-primary-500 mt-0.5">Ten produkt</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {specKeys.map((key, i) => (
              <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <th scope="row" className="px-5 py-3 text-sm font-medium text-gray-500 text-left">{key}</th>
                {models.map((m) => (
                  <td
                    key={m.name}
                    className={clsx(
                      'px-5 py-3 text-sm text-center',
                      m.highlight ? 'bg-primary-50/50 font-medium text-gray-900' : 'text-gray-700'
                    )}
                  >
                    {m.specs[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {models.map((m) => (
          <div
            key={m.name}
            className={clsx(
              'rounded-xl p-3 sm:p-4 border',
              m.highlight ? 'border-primary-300 bg-primary-50/30' : 'border-gray-200 bg-white'
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900">
                {m.slug ? (
                  <Link href={`/produkt/${m.slug}`} className="hover:text-primary-600">
                    {m.name}
                  </Link>
                ) : m.name}
              </h3>
              {m.highlight && (
                <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-0.5 rounded-full">
                  Ten produkt
                </span>
              )}
            </div>
            <dl className="space-y-2">
              {specKeys.map((key) => (
                <div key={key} className="flex justify-between gap-3 text-sm">
                  <dt className="text-gray-500 shrink-0 max-w-[45%]">{key}</dt>
                  <dd className="font-medium text-gray-900 text-right min-w-0 break-words">{m.specs[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  )
}
