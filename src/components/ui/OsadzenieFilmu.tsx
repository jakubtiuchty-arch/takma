'use client'

import { useState } from 'react'

/**
 * Film podmieniony na miniaturę z przyciskiem — odtwarzacz wchodzi po dotknięciu.
 *
 * Osadzona ramka odtwarzacza ciągnie kilkaset kilobajtów i własne skrypty, zanim ktokolwiek
 * naciśnie play. Na instrukcji z jedenastoma filmami to kilka megabajtów pobranych na darmo,
 * najczęściej na telefonie. Miniatura to jeden obrazek i przycisk.
 *
 * YouTube ma miniaturę pod stałym adresem, więc wystarczy identyfikator. Vimeo takiego adresu
 * nie ma — trzeba podać `plakat`, a my trzymamy go u siebie w `public/`, żeby karta nie zależała
 * od cudzego CDN-u i od tego, czy adres miniatury kiedyś się nie zmieni.
 */
export type SerwisFilmu = 'youtube' | 'vimeo'

const OSADZENIE: Record<SerwisFilmu, (id: string) => string> = {
  youtube: (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
  vimeo: (id) => `https://player.vimeo.com/video/${id}?autoplay=1`,
}

export default function OsadzenieFilmu({
  id,
  tytul,
  serwis = 'youtube',
  plakat,
}: {
  id: string
  tytul: string
  serwis?: SerwisFilmu
  plakat?: string
}) {
  const [gra, setGra] = useState(false)
  const miniatura = plakat ?? (serwis === 'youtube' ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined)

  if (gra) {
    return (
      <iframe
        src={OSADZENIE[serwis](id)}
        title={tytul}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setGra(true)}
      className="group relative h-full w-full bg-black"
      aria-label={`Odtwórz film: ${tytul}`}
    >
      {/* Miniatura: jedno statyczne zdjęcie na kafel, więc zwykły img */}
      {miniatura && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={miniatura}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      )}
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 transition-transform group-hover:scale-105">
        <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
      </span>
    </button>
  )
}
