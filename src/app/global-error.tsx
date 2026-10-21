'use client'

import { useEffect, useState } from 'react'
import KomunikatBleduStrony from '@/components/layout/KomunikatBleduStrony'
import { zglosBladKlienta } from '@/lib/client-error-report'
import { czyChunkLoadError, snapshotStrony } from '@/lib/snapshot-strony'

/**
 * Zastępuje domyślny ekran Next „Application error…”. Tamten nie ma tytułu ani canonical
 * i jest identyczny na tysiącach stron, więc Google łączył nasze karty z obcymi domenami.
 * Ten widok odtwarza tytuł, canonical, opis, treść i JSON-LD z HTML serwera.
 * Bez noindex: Google usunąłby wtedy kartę z indeksu.
 */
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  const [snap] = useState(snapshotStrony)

  useEffect(() => {
    zglosBladKlienta(error, 'global-error')
    const bot = /bot|crawl|spider|Google-InspectionTool|Chrome-Lighthouse/i.test(navigator.userAgent)
    // Nieudane doładowanie pliku JS: jedno przeładowanie na sesję, tylko dla ludzi (boty bez pętli).
    if (czyChunkLoadError(error) && !bot) {
      try {
        if (!sessionStorage.getItem('takma-gerr')) {
          sessionStorage.setItem('takma-gerr', '1')
          window.location.reload()
        }
      } catch { /* brak dostępu do sessionStorage */ }
    }
  }, [error])

  return (
    <html lang="pl" className={snap.klasaHtml || undefined}>
      <head>
        <title>{snap.tytul}</title>
        {snap.canonical && <link rel="canonical" href={snap.canonical} />}
        {snap.opis && <meta name="description" content={snap.opis} />}
      </head>
      <body className={snap.klasaBody || undefined}>
        <KomunikatBleduStrony />
        {snap.tresc ? (
          <main id="main-content" className="flex-1" dangerouslySetInnerHTML={{ __html: snap.tresc }} />
        ) : (
          <main id="main-content" className="flex-1">
            <div className="container-main py-8">
              <h1 className="text-2xl font-bold text-gray-900">{snap.tytul}</h1>
            </div>
          </main>
        )}
        {snap.ld.map((json, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
        ))}
      </body>
    </html>
  )
}
