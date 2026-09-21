'use client'

import type { CSSProperties } from 'react'

import OsadzenieFilmu, { type SerwisFilmu } from '@/components/ui/OsadzenieFilmu'

/**
 * Filmy na karcie produktu, budowane pod telefon.
 *
 * Dwie rzeczy, które robią różnicę na komórce:
 * 1. Zamiast ramki YouTube pokazujemy miniaturę z przyciskiem — odtwarzacz wczytuje się
 *    dopiero po dotknięciu. Pięć osadzonych ramek ciągnęło po kilkaset kilobajtów każda,
 *    zanim ktokolwiek nacisnął play.
 * 2. Na wąskim ekranie filmy leżą w przewijanej poziomo karuzeli zamiast jeden pod drugim.
 *    Pięć kart w kolumnie to było półtora tysiąca pikseli przewijania w materiale dodatkowym.
 */

export interface ProductVideo {
  url: string
  title: string
  native?: boolean
  poster?: string
  captions?: string
  /** Proporcje filmu, gdy nie są 16:9 — np. '9/16' albo '4/3'. */
  aspect?: string
}

/** Wysokość pionowego kafla. Rolka w kolumnie szerokiej na 400 px byłaby wysoka na 700 px. */
const WYSOKOSC_PIONOWEGO = 420

function proporcje(aspect?: string): [number, number] {
  const [w, h] = (aspect ?? '16/9').split('/').map(Number)
  return Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0 ? [w, h] : [16, 9]
}

/** Pion poznajemy po proporcjach: licznik mniejszy od mianownika. */
function czyPion(aspect?: string): boolean {
  const [w, h] = proporcje(aspect)
  return w < h
}

/** Szerokość pionowego kafelka wynika ze stałej wysokości i proporcji filmu. */
function szerokoscPionowego(aspect?: string): number {
  const [w, h] = proporcje(aspect)
  return Math.round(WYSOKOSC_PIONOWEGO * (w / h))
}

/** Serwis i identyfikator filmu z adresu. Vimeo rozpoznajemy po domenie, resztę traktujemy jak YouTube. */
function zrodloFilmu(url: string): { serwis: SerwisFilmu; id: string } | undefined {
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d{6,})/)?.[1]
  if (vimeo) return { serwis: 'vimeo', id: vimeo }
  const yt = url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/)?.[1]
  return yt ? { serwis: 'youtube', id: yt } : undefined
}

function Odtwarzacz({ video }: { video: ProductVideo }) {
  const zrodlo = zrodloFilmu(video.url)

  if (video.native) {
    return (
      <video
        src={video.url}
        poster={video.poster}
        className="h-full w-full bg-black object-contain"
        controls
        preload="none"
        playsInline
        title={video.title}
      >
        {video.captions && <track kind="subtitles" src={video.captions} srcLang="pl" label="Polski" default />}
      </video>
    )
  }

  if (!zrodlo) {
    return (
      <iframe
        src={video.url}
        className="h-full w-full"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture"
        title={video.title}
        loading="lazy"
      />
    )
  }

  return <OsadzenieFilmu id={zrodlo.id} serwis={zrodlo.serwis} plakat={video.poster} tytul={video.title} />
}

export default function ProductVideos({ videos, naglowek }: { videos: ProductVideo[]; naglowek?: string }) {
  const wlasne = videos.every((v) => v.native)

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{naglowek ?? 'Filmy: obsługa drukarki'}</h2>
      <p className="mb-4 text-sm text-gray-500">
        {wlasne
          ? `Filmy producenta z polskim lektorem i napisami${videos.length > 2 ? ', w kolejności od rozpakowania do czyszczenia.' : '.'}`
          : `Instruktaże producenta${videos.length > 2 ? ', w kolejności od rozpakowania po konfigurację sterownika.' : '.'}`}
      </p>

      {/* Telefon: karuzela z zatrzymywaniem na kafelku. Od sm kafelki pakują się od lewej.
          Siatka dwukolumnowa dawała każdemu filmowi połowę szerokości, więc wąska rolka
          wisiała pośrodku swojej kolumny, a między nią a sąsiadem robiła się dziura.
          `items-start`, bo kafelki o różnych proporcjach mają różną wysokość. */}
      <div className="-mx-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-start sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
        {videos.map((v) => {
          const pion = czyPion(v.aspect)
          return (
            <figure
              key={v.url}
              /* Szerokość ustawiamy na całym kafelku, nie na samym obrazie, żeby podpis stał pod filmem.
                 Pionowy dostaje szerokość wyliczoną ze stałej wysokości i nie rośnie; poziomy dzieli
                 wiersz z sąsiadem, ale nie przekracza 600 px, żeby przy jednym filmie nie rozlał się
                 na całą szerokość treści. */
              className={
                pion
                  ? 'w-[62vw] shrink-0 snap-start sm:w-[var(--szerokosc-kafla)] sm:shrink-0'
                  : 'w-[82vw] shrink-0 snap-start sm:w-auto sm:max-w-[600px] sm:shrink sm:grow sm:basis-[420px]'
              }
              style={pion ? ({ '--szerokosc-kafla': `${szerokoscPionowego(v.aspect)}px` } as CSSProperties) : undefined}
            >
              {/* Kafel przyjmuje proporcje filmu, więc obraz wypełnia go co do piksela — bez pasów po bokach. */}
              <div className="overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: v.aspect ?? '16/9' }}>
                <Odtwarzacz video={v} />
              </div>
              <figcaption className="mt-2 text-sm text-gray-600">{v.title}</figcaption>
            </figure>
          )
        })}
      </div>

      {videos.length > 2 && (
        <p className="mt-1 text-xs text-gray-400 sm:hidden">Przesuń w bok, żeby zobaczyć pozostałe filmy.</p>
      )}
    </>
  )
}
