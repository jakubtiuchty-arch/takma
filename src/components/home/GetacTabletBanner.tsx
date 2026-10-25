'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { useEffect, useRef, useState } from 'react'
import s from './GetacTabletBanner.module.css'

export default function GetacTabletBanner() {
  const root = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = new IntersectionObserver(([entry]) => { setVisible(entry.isIntersecting); setReduced(media.matches) }, { threshold: .15 })
    const change = () => setReduced(media.matches)
    media.addEventListener('change', change)
    observer.observe(el)
    return () => { observer.disconnect(); media.removeEventListener('change', change) }
  }, [])

  const stopped = paused || reduced || !visible
  return <div ref={root} className={s.banner} data-paused={stopped}>
    <div className={s.scene}>
      <div className={s.atmosphere} aria-hidden="true" />
      <div className={s.product}><Image src="/images/getac-home/f120-endurance.webp" alt="Oryginalny Getac F120 w dynamicznym ujęciu z pyłem i odłamkami skały" fill sizes="(max-width:767px) 100vw, 900px" quality={95} /></div>
      <div className={s.dust} aria-hidden="true" />
      <div className={s.light} aria-hidden="true" />
      <div className={s.model}><span>NA ZDJĘCIU: GETAC F120</span><p><b>IP66</b><i />Ekran <b>1200 nitów</b></p></div>
    </div>
    <div className={s.inner}><div className={s.copy}>
      <Image className={s.logo} src="/images/getac-home/getac-logo.svg" alt="Getac" width={136} height={42} />
      <p className={s.eyebrow}>TABLETY PRZEMYSŁOWE · WINDOWS I ANDROID</p>
      <h2>Pracuj<br/>w terenie.<br/><span>Wybierz Getac.</span></h2>
      <p className={s.description}>Tablety do inspekcji, serwisu i pracy w pojazdach. Dobierz system, ekran i wyposażenie do swoich zadań.</p>
      <Link className={s.cta} href="/tablety-getac">Poznaj tablety Getac<ArrowRightIcon size={16} /></Link>
    </div></div>
    <div className={s.bottom}><div><span>Serwis terenowy</span><span>Przemysł</span><span>Logistyka</span></div><button type="button" onClick={() => setPaused(v => !v)} disabled={reduced} aria-label={reduced ? 'Animacja Getac wyłączona zgodnie z ustawieniami ograniczenia ruchu' : `${stopped ? 'Odtwórz' : 'Zatrzymaj'} animację Getac`}>{stopped ? '▶' : 'Ⅱ'}<span>{reduced ? 'Ruch wyłączony' : stopped ? 'Odtwórz' : 'Pauza'}</span></button></div>
  </div>
}
