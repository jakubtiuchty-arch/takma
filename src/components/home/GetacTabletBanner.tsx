'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { useEffect, useRef, useState } from 'react'
import s from './GetacTabletBanner.module.css'

export default function GetacTabletBanner() {
  const video = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = video.current
    if (!el) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    const sync = () => {
      if (visible && !media.matches) {
        setLoaded(true)
        el.play().catch(() => {})
      } else el.pause()
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync() }, { threshold: .15 })
    observer.observe(el)
    media.addEventListener('change', sync)
    document.addEventListener('visibilitychange', sync)
    return () => { observer.disconnect(); media.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); el.pause() }
  }, [loaded])

  return <div className={s.banner}>
    <div className={s.scene}>
      <video ref={video} src={loaded ? '/video/brands/getac-home.mp4' : undefined} poster="/images/getac-home/video-poster.webp" muted loop playsInline preload="none" aria-label="Tablety Getac F120 i UX10 podczas pracy w terenie i zakładzie" />
    </div>
    <div className={s.inner}><div className={s.copy}>
      <Image className={s.logo} src="/images/getac-home/getac-logo.svg" alt="Getac" width={136} height={42} />
      <p className={s.eyebrow}>TABLETY PRZEMYSŁOWE · WINDOWS I ANDROID</p>
      <h2>Pracuj w terenie. <span>Wybierz Getac.</span></h2>
      <p className={s.description}>Tablety do inspekcji, serwisu i pracy w pojazdach. Dobierz system, ekran i wyposażenie do swoich zadań.</p>
      <Link className={s.cta} href="/tablety-getac">Poznaj tablety Getac<ArrowRightIcon size={16} /></Link>
    </div></div>

  </div>
}
