'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/ui/Icons'
import s from './BrandBanner.module.css'

export type BannerBrand = 'proglove' | 'sunmi'

const content = {
  proglove: {
    eyebrow: 'SKANERY NOSZONE NA DŁONI',
    lines: ['Skanuj bez', 'odkładania', 'towaru.'],
    description: 'Skaner pozostaje na dłoni, gdy chwytasz i przenosisz produkty. Do magazynu, logistyki i produkcji.',
    href: '/skanery-proglove', cta: 'Poznaj ProGlove',
    chapters: ['Kompletacja', 'Pakowanie', 'Produkcja'],
    label: 'ProGlove — skaner na dłoni podczas pracy z towarem',
  },
  sunmi: {
    eyebrow: 'URZĄDZENIA Z ANDROIDEM DLA BIZNESU',
    lines: ['Przy ladzie.', 'W\u00a0ruchu.', 'W\u00a0kuchni.'],
    description: 'Komputery POS, terminale mobilne, kioski i ekrany kuchenne. Dobierz sprzęt SUNMI do sklepu lub restauracji.',
    href: '/katalog?producent=sunmi', cta: 'Poznaj ofertę SUNMI',
    chapters: ['Komputery POS', 'Terminale mobilne', 'Ekrany KDS'],
    label: 'SUNMI — komputer POS, terminal mobilny i ekran kuchenny w kolejnych ujęciach',
  },
}

export default function BrandBanner({ brand }: { brand: BannerBrand }) {
  const c = content[brand]
  const video = useRef<HTMLVideoElement>(null)
  const manuallyPaused = useRef(false)
  const [loaded, setLoaded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [chapter, setChapter] = useState(0)

  useEffect(() => {
    const el = video.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true)
        if (!reduced.matches && !manuallyPaused.current) el.play().catch(() => {})
      } else el.pause()
    }, { threshold: .2 })
    observer.observe(el)
    const respectMotion = () => { if (reduced.matches) el.pause() }
    reduced.addEventListener('change', respectMotion)
    return () => { observer.disconnect(); reduced.removeEventListener('change', respectMotion); el.pause() }
  }, [loaded, brand])

  function toggle() {
    const el = video.current
    if (!el) return
    setLoaded(true)
    manuallyPaused.current = !el.paused
    if (el.paused) el.play().catch(() => {})
    else el.pause()
  }

  return <div className={`${s.banner} ${s[brand]}`}>
    <div className={s.visual}>
      <video ref={video} src={loaded ? `/video/brands/${brand}-home.mp4` : undefined}
        poster={`/images/home-brands/${brand}-poster.webp`} muted loop playsInline preload="none"
        aria-label={c.label} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onTimeUpdate={() => { if (brand === 'sunmi' && video.current) setChapter(Math.min(2, Math.floor(video.current.currentTime / 4))) }} />
      <div className={s.veil} />
      <span className={s.filmLabel}>{brand === 'proglove' ? 'MARK · MARK DISPLAY · LEO · MAI' : 'POS · TERMINALE MOBILNE · KIOSKI · DRUKARKI · KDS'}</span>
    </div>
    <div className={s.inner}>
      <div className={s.copy}>
        <div className={s.brand}><Image src={`/images/home-brands/${brand}-logo.svg`} alt={brand === 'proglove' ? 'ProGlove' : 'SUNMI'} width={156} height={36} /><span>{c.eyebrow}</span></div>
        <h2>{c.lines.map((line, i) => <span key={line} className={(brand === 'sunmi' ? chapter === i : i === 2) ? s.highlight : ''}>{line}{i < c.lines.length - 1 ? ' ' : ''}</span>)}</h2>
        <p>{c.description}</p>
        <Link className={s.cta} href={c.href}>{c.cta}<ArrowRightIcon size={16} /></Link>
      </div>
    </div>
    <div className={s.bottom}>
      {brand === 'proglove' && <button className={s.pause} type="button" onClick={toggle} aria-label={`${playing ? 'Zatrzymaj' : 'Odtwórz'} animację ${brand === 'proglove' ? 'ProGlove' : 'SUNMI'}`}>{playing ? 'Ⅱ' : '▶'}<span>{playing ? 'Pauza' : 'Odtwórz'}</span></button>}
    </div>
  </div>
}
