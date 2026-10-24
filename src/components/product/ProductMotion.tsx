'use client'

import { useEffect, useRef, useState } from 'react'
import s from './ProductMotion.module.css'

type MotionProps = { src: string; poster?: string; label: string; loop?: boolean; className?: string }

export function ProductMotion({ src, poster, label, loop = true, className = '' }: MotionProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const manuallyPaused = useRef(false)
  const [loaded, setLoaded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true)
        if (!motion.matches && !manuallyPaused.current && !video.ended) video.play().catch(() => {})
      } else video.pause()
    }, { threshold: 0.15 })
    observer.observe(video)
    return () => { observer.disconnect(); video.pause() }
  }, [src, loaded])

  function toggle() {
    const video = ref.current
    if (!video) return
    setLoaded(true)
    if (video.paused) {
      manuallyPaused.current = false
      if (video.ended) video.currentTime = 0
      setEnded(false)
      video.play().catch(() => {})
    } else { manuallyPaused.current = true; video.pause() }
  }

  return <div className={`${s.motion} ${className}`}>
    <video ref={ref} src={loaded ? src : undefined} poster={poster} muted loop={loop} playsInline preload="none" aria-label={label} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => { setEnded(true); setPlaying(false) }} />
    <button type="button" onClick={toggle} aria-label={`${playing ? 'Zatrzymaj' : ended ? 'Powtórz' : 'Odtwórz'}: ${label}`}>{playing ? 'Ⅱ Pauza' : ended ? '↻ Powtórz' : '▶ Odtwórz'}</button>
  </div>
}

export function ProductFilm({ src, preview, poster, label, className = '' }: { src: string; preview: string; poster: string; label: string; className?: string }) {
  const [open, setOpen] = useState(false)
  return <div className={`${s.film} ${className}`}>
    {open ? <video src={src} poster={poster} controls autoPlay playsInline preload="metadata" aria-label={label} /> : <><ProductMotion src={preview} poster={poster} label={`Zapowiedź: ${label}`} /><button className={s.open} type="button" onClick={() => setOpen(true)}>▶ Obejrzyj film: {label}</button></>}
  </div>
}
