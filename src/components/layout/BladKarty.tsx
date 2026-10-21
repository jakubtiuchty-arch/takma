'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import KomunikatBleduStrony from '@/components/layout/KomunikatBleduStrony'
import { zglosBladKlienta } from '@/lib/client-error-report'
import { czyChunkLoadError, snapshotTresci } from '@/lib/snapshot-strony'

// Ścieżki, dla których była już ponowna próba renderu po ChunkLoadError.
const ponowione = new Set<string>()

/**
 * Wspólny widok error.tsx kart produktów, serii etykiet i taśm.
 * Granica segmentu zostawia root layout: <head> z tytułem i canonical, Navbar i Footer.
 * W miejscu strony pokazuje komunikat i treść z HTML serwera.
 */
export default function BladKarty({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const sciezka = usePathname() ?? ''
  const [tresc] = useState(() => snapshotTresci(sciezka))

  useEffect(() => {
    zglosBladKlienta(error, 'error-boundary')
    if (czyChunkLoadError(error) && !ponowione.has(sciezka)) {
      ponowione.add(sciezka)
      reset()
    }
  }, [error, reset, sciezka])

  return (
    <>
      <KomunikatBleduStrony />
      {tresc && <div dangerouslySetInnerHTML={{ __html: tresc }} />}
    </>
  )
}
