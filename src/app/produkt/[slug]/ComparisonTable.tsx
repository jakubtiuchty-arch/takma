import Link from 'next/link'
import clsx from 'clsx'
import InfoTooltip from '@/components/ui/InfoTooltip'

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

/** Łopatologiczne wyjaśnienia parametrów porównawczych. Dodawane jako tooltip obok labela. */
const SPEC_TOOLTIPS: Record<string, string> = {
  'Powłoka top-coat':
    'Cienka warstwa ochronna na wierzchu papieru. Z nią: ostrzejszy nadruk kodów kreskowych, dłuższe życie głowicy drukarki, lepsza odporność na zarysowanie i wilgoć. Bez niej: taniej, ale mniej trwałe.',
  'Atest żywnościowy':
    'Czy klej i papier są dopuszczone do bezpośredniego kontaktu z żywnością. Atesty: BfR XIV (Niemcy), FDA 175.105 (USA), ISEGA, EC 1935/2004. Wymagane w piekarniach, masarniach, gastronomii.',
  'Bez podkładu (linerless)':
    'Etykieta nawinięta sama na siebie, bez papierowego podkładu (lineru). Korzyść: do 2× więcej etykiet na rolce, zero odpadu. Wymóg: drukarka z linerless platen rollerem (np. ZD611 Linerless).',
  'Wodoodporność':
    'Czy etykieta wytrzymuje kontakt z wodą i wilgocią. "Tak (pełna)" = polipropylen syntetyczny (np. PolyPro 4000D). "Częściowa" = papier powlekany — krótki kontakt, nie zanurzenie. "Nie" = papier niepowlekany — rozmięknie.',
  'Trwałość nadruku indoor':
    'Jak długo nadruk pozostaje czytelny w warunkach wewnętrznych (bez UV, do +80 °C). Po tym czasie nadruk blaknie. Outdoor i bezpośrednie słońce skracają lifespan przez UV.',
  'Klej':
    'Permanentny — etykieta trzyma się mocno na stałe. Zdejmowalny (removable) — można odkleić bez śladu (do ekspozycji, etykiet tymczasowych). Brak (tag) — pasek bez kleju do mechanicznego przyczepiania.',
  'Materiał':
    'Z czego zrobiona jest sama etykieta. Papier powlekany = lepszy nadruk, droższy. Papier niepowlekany = taniej, do prostych etykiet. Polipropylen = wodoodporny syntetyk. Specjalny = niszowe (np. skrzydełka jubilerskie).',
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
                <th scope="row" className="px-5 py-3 text-sm font-medium text-gray-500 text-left">
                  <span className="inline-flex items-center gap-1.5">
                    {key}
                    {SPEC_TOOLTIPS[key] && (
                      <InfoTooltip
                        size={13}
                        text={SPEC_TOOLTIPS[key]}
                        ariaLabel={`Wyjaśnienie: ${key}`}
                      />
                    )}
                  </span>
                </th>
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
                  <dt className="text-gray-500 shrink-0 max-w-[45%] inline-flex items-center gap-1.5">
                    {key}
                    {SPEC_TOOLTIPS[key] && (
                      <InfoTooltip
                        size={12}
                        text={SPEC_TOOLTIPS[key]}
                        ariaLabel={`Wyjaśnienie: ${key}`}
                      />
                    )}
                  </dt>
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
