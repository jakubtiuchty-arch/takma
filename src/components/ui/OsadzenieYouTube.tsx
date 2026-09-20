'use client'

import { useState } from 'react'

/**
 * Film z YouTube podmieniony na miniaturę z przyciskiem — odtwarzacz wchodzi po dotknięciu.
 *
 * Osadzona ramka YouTube ciągnie kilkaset kilobajtów i własne skrypty, zanim ktokolwiek
 * naciśnie play. Na instrukcji z jedenastoma filmami to kilka megabajtów pobranych na darmo,
 * najczęściej na telefonie. Miniatura to jeden obrazek i przycisk.
 */
export default function OsadzenieYouTube({ id, tytul }: { id: string; tytul: string }) {
  const [gra, setGra] = useState(false)

  if (gra) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
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
      className="group relative h-full w-full"
      aria-label={`Odtwórz film: ${tytul}`}
    >
      {/* Miniatura z YouTube — zwykły img, bo to jedno statyczne zdjęcie na kafel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 transition-transform group-hover:scale-105">
        <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
      </span>
    </button>
  )
}
