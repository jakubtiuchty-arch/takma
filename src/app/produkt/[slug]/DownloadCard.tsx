import { DownloadIcon } from '@/components/ui/Icons'
import type { Product } from '@/data/products'

type Download = NonNullable<Product['downloads']>[number]

const TYPE_LABEL: Record<Download['type'], string> = {
  pdf: 'PDF',
  datasheet: 'Karta katalogowa',
  manual: 'Instrukcja',
  software: 'Oprogramowanie',
  driver: 'Sterownik',
}

/** Kafelek pliku w sekcji „Pliki do pobrania” / „Sterowniki” na karcie produktu. */
export default function DownloadCard({ download }: { download: Download }) {
  const isExternal = download.url.startsWith('http')
  const isSerwisZebry = download.url.includes('serwis-zebry.pl')
  const externalRel = isSerwisZebry ? 'noopener' : 'noopener nofollow'
  return (
    <a
      href={download.url}
      {...(isExternal ? { target: '_blank', rel: externalRel } : {})}
      className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
        <DownloadIcon size={24} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 truncate" title={download.name}>{download.name}</p>
        <p className="text-sm text-gray-500">
          {TYPE_LABEL[download.type] ?? download.type} • {download.size}
        </p>
      </div>
    </a>
  )
}
