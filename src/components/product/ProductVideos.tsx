'use client'

import OsadzenieYouTube from '@/components/ui/OsadzenieYouTube'

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
}

/** Identyfikator filmu z adresu YouTube (embed, watch albo youtu.be). */
function idYouTube(url: string): string | undefined {
  return url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/)?.[1]
}

function Odtwarzacz({ video }: { video: ProductVideo }) {
  const id = idYouTube(video.url)

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

  if (!id) {
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

  return <OsadzenieYouTube id={id} tytul={video.title} />
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

      {/* Telefon: karuzela z zatrzymywaniem na kafelku. Od sm zwykła siatka. */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
        {videos.map((v) => (
          <figure key={v.url} className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink">
            <div className="aspect-video overflow-hidden rounded-xl bg-gray-100">
              <Odtwarzacz video={v} />
            </div>
            <figcaption className="mt-2 text-sm text-gray-600">{v.title}</figcaption>
          </figure>
        ))}
      </div>

      {videos.length > 2 && (
        <p className="mt-1 text-xs text-gray-400 sm:hidden">Przesuń w bok, żeby zobaczyć pozostałe filmy.</p>
      )}
    </>
  )
}
