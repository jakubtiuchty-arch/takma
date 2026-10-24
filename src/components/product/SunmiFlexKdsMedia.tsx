'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import s from './SunmiFlexKdsStory.module.css'

const root = '/images/sunmi-flex-3-kds/'
const sizes = [
  { title: '15,6″', photo: 'p2-1-1', pn: 'P11050019', heading: 'Gdy przy stanowisku jest mało miejsca.', text: 'Kompaktowy ekran do przygotowywania lub pakowania zamówień. Ma wbudowane PoE i uchwyt VESA w zestawie.', brightness: '250 nitów', cpu: '6 rdzeni', weight: '2,0 kg' },
  { title: '18,5″', photo: 'p2-2-1', pn: 'P11050016', heading: 'Do pracy przy stanowisku kucharza.', text: 'Ekran IPS o jasności 400 nitów. Do montażu możesz dobrać przegubowe ramię VESA, a do zasilania przez sieć — moduł PoE.', brightness: '400 nitów', cpu: '8 rdzeni', weight: '2,7 kg' },
  { title: '22″', photo: 'p2-3-1', pn: 'P11050010', heading: 'Większy ekran do przeglądania zamówień.', text: 'Największy ekran w serii KDS, o rzeczywistej przekątnej 21,5″. Matryca IPS ma jasność 400 nitów. PoE wymaga dodatkowego modułu.', brightness: '400 nitów', cpu: '8 rdzeni', weight: '3,3 kg' },
]
export function FlexKdsSizes() {
  const [index, setIndex] = useState(1)
  const item = sizes[index]
  return <div className={s.sizeSelector}><div className={s.tabs} role="group" aria-label="Przekątna ekranu">{sizes.map((v,i)=><button key={v.pn} aria-pressed={index===i} aria-controls="kds-size-panel" onClick={()=>setIndex(i)} type="button">{v.title}</button>)}</div><div id="kds-size-panel"><div className={s.sizePhoto}><Image src={root+item.photo+'.webp'} alt={'FLEX 3 KDS '+item.title+' na stanowisku w kuchni'} fill sizes="100vw" quality={95} /></div><div className={s.sizeCopy}><div><span>{item.pn}</span><h3>{item.heading}</h3><p>{item.text}</p></div><div className={s.sizeFacts}>{[[item.brightness,'Jasność ekranu'],[item.cpu,'Procesor Qualcomm'],[item.weight,'Masa']].map(([v,l])=><div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></div></div><p className={s.note}>Wszystkie wersje: rozdzielczość 1920 × 1080 px, pamięć 4/64 GB i ochrona IP55. Akcesoria opcjonalne kupujesz osobno.</p></div>
}

export function FlexKdsFilm({ name, label }: { name: 'tvc' | 'p5-1'; label: string }) {
  const [full, setFull] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(()=>{
    const video=ref.current
    if (!video) return
    if (full) { video.play().catch(()=>{}); return }
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting&&!motion.matches) video.play().catch(()=>{})
      else video.pause()
    },{threshold:0.15})
    observer.observe(video)
    return ()=>{observer.disconnect();video.pause()}
  },[full])
  return <div className={s.film}><video key={String(full)} ref={ref} controls={full} muted={!full} loop={!full} playsInline preload="none" poster={root+name+'-poster.webp'} aria-label={label} src={root+name+(full?'-en.mp4':'-poster.mp4')} />{!full&&<button type="button" onClick={()=>setFull(true)} aria-label={'Obejrzyj film: '+label}><span>▶</span> Obejrzyj film</button>}</div>
}
