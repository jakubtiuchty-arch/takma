'use client'

import { useEffect, useRef, useState } from 'react'
import s from './SunmiNt320Story.module.css'

export function Nt320Animation({ name, poster, label, loop = true }: { name: string; poster: string; label: string; loop?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const [ended, setEnded] = useState(false)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !paused && !ended && !preference.matches) {
        video.src ||= '/images/sunmi-nt320/' + name + '.mp4'
        video.play().catch(() => {})
      } else video.pause()
    }, { threshold: 0.1 })
    observer.observe(video)
    return () => { observer.disconnect(); video.pause() }
  }, [name, paused, ended])
  return <div className={s.motion}><video ref={ref} muted loop={loop} onEnded={() => setEnded(true)} playsInline preload="none" poster={'/images/sunmi-nt320/' + poster + '.webp'} aria-label={label} />{!ended && <button type="button" onClick={() => setPaused(!paused)} aria-label={(paused ? 'Wznów animację: ' : 'Wstrzymaj animację: ') + label}>{paused ? '▶ Odtwórz' : 'Ⅱ Pauza'}</button>}</div>
}

export function Nt320MotionTabs({ id, items }: { id: string; items: { title: string; name: string; poster: string; text: string }[] }) {
  const [selected, setSelected] = useState(0)
  const item = items[selected]
  return <div className={s.motionTabs}>
    <div className={s.tabs} role="group" aria-label={id === 'print' ? 'Rodzaj wydruku' : 'Element personalizacji'}>{items.map((v, i) => <button type="button" key={v.name} aria-pressed={selected === i} aria-controls={id + '-panel'} onClick={() => setSelected(i)}>{v.title}</button>)}</div>
    <div id={id + '-panel'}><Nt320Animation key={item.name} name={item.name} poster={item.poster} label={item.title} /><p className={s.tabText}>{item.text}</p></div>
  </div>
}
