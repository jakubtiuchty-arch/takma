import Link from 'next/link'
import Image from 'next/image'
import type { AccessoryNavigation as Navigation } from '@/lib/accessory-navigation'
import { getRequiredAccessoryConditionText } from '@/lib/required-accessory-copy'

export default function AccessoryNavigation({ navigation, accessoryName }: { navigation?: Navigation; accessoryName: string }) {
  if (!navigation || (!navigation.models.length && !navigation.configurations.length)) return null
  const title = /^Zasilacz\b/i.test(accessoryName) ? 'Ten zasilacz jest potrzebny do:' : /^Przewód\b/i.test(accessoryName) ? 'Ten przewód jest potrzebny do:' : 'To akcesorium jest potrzebne do:'
  return (
    <section id="dobor-zestawu" aria-labelledby="dobor-zestawu-heading" className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
      <h2 id="dobor-zestawu-heading" className="text-xl font-bold text-gray-900">
        {navigation.configurations.length ? title : 'Zobacz akcesoria do swojego urządzenia'}
      </h2>
      {navigation.configurations.length > 0 && (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {navigation.configurations.map(product => (
            <li key={product.id}>
              <Link href={`/produkt/${product.slug}`} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600">
                {product.image && <Image src={product.image} alt="" width={96} height={96} sizes="96px" className="mb-3 h-24 w-24 self-center object-contain" />}
                <span className="text-sm font-semibold leading-5 text-gray-900">{product.name}</span>
                {product.partNumber && <span className="mt-1 text-xs text-gray-500">PN: {product.partNumber}</span>}
                {product.condition && <span className="mt-2 text-sm leading-5 text-gray-700">{getRequiredAccessoryConditionText(product.condition)}</span>}
                <span aria-hidden="true" className="mt-auto pt-3 text-sm font-semibold text-primary-600">Zobacz produkt →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {navigation.models.length > 0 && (
        <div className={navigation.configurations.length ? 'mt-5 border-t border-gray-200 pt-4' : 'mt-2'}>
          {navigation.configurations.length > 0 && <h3 className="text-sm font-semibold text-gray-900">Zobacz wszystkie akcesoria do urządzenia</h3>}
          <p className="mt-1 text-sm text-gray-600">Wybierz model, aby zobaczyć jego akcesoria.</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {navigation.models.map(model => (
              <li key={model.id}>
                <Link href={`/produkt/${model.slug}#akcesoria`} className="inline-flex rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-primary-700 hover:border-primary-400 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600">{model.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
