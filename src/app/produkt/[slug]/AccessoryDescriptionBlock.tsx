import Image from 'next/image'
import Link from 'next/link'
import LinkedText from '@/components/ui/LinkedText'
import RequiredAccessoryList from './RequiredAccessoryList'
import { getAccessoryDescriptionBlock } from './accessory-description'

export default function AccessoryDescriptionBlock({ text, blockId, excludedIds = [] }: { text: string; blockId: string; excludedIds?: string[] }) {
  const { prose, accessories, devices } = getAccessoryDescriptionBlock(text)
  const additionalAccessories = accessories.filter(item => !excludedIds.includes(item.id))
  const lines = prose.trim().split('\n')
  const bulletList = prose && lines.every(line => /^\s*- /.test(line))

  return (
    <div className="mb-5">
      {prose && (bulletList ? (
        <ul className="list-disc pl-5 space-y-3 mb-4 text-gray-700 marker:text-gray-400">
          {lines.map((line, i) => <li key={i}><LinkedText text={line.replace(/^\s*-\s*/, '')} /></li>)}
        </ul>
      ) : <p className="text-gray-700 mb-4"><LinkedText text={prose} /></p>)}
      {additionalAccessories.length > 0 && (
        <div className="not-prose overflow-hidden rounded-xl border border-gray-200 bg-white">
          <RequiredAccessoryList items={additionalAccessories} idPrefix={blockId} />
        </div>
      )}
      {devices.length > 0 && (
        <ul className="not-prose m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
          {devices.map(device => (
            <li key={device.id}>
              <Link href={`/produkt/${device.slug}`} className="flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-primary-400">
                {device.images[0] && <Image src={device.images[0]} alt="" width={56} height={56} sizes="56px" className="h-14 w-14 shrink-0 object-contain" />}
                <span className="min-w-0 flex-1 text-sm font-semibold text-gray-900">{device.name}</span>
                <span className="shrink-0 text-sm font-semibold text-primary-600">Zobacz →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
