'use client'

import { Button } from '@/components/ui'
import { DownloadIcon } from '@/components/ui/Icons'
import { Product } from '@/data/products'
import { trackFileDownload } from '@/lib/ga-events'

/**
 * Przycisk „Pobierz” dla bezpłatnego oprogramowania — zamiast koszyka.
 * Link prowadzi przez /pobierz/[slug] (adres na naszej domenie, przekierowanie do pliku w Vercel Blob),
 * a kliknięcie zgłasza zdarzenie file_download do GA4.
 */
export default function DownloadButton({ product }: { product: Product }) {
  const d = product.download
  if (!d) return null
  return (
    <div>
      <a
        href={`/pobierz/${product.slug}`}
        onClick={() => trackFileDownload({ fileName: d.fileName, productName: product.name, version: d.version })}
        className="block"
      >
        <Button variant="primary" size="lg" fullWidth leftIcon={<DownloadIcon size={20} />}>
          Pobierz bezpłatnie
        </Button>
      </a>
    </div>
  )
}
