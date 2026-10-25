'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { BartenderScreen } from './BartenderStoryContent'
import s from './BartenderStory.module.css'

export function BartenderScreens({ screens, id, root = '/images/bartender-landing/', sizes = '(max-width: 640px) 95vw, 650px' }: { screens: BartenderScreen[]; id: string; root?: string; sizes?: string }) {
  const [selected, setSelected] = useState(0)
  const screen = screens[selected]
  return <div className={s.screenBrowser}>
    {screens.length > 1 && <div className={s.tabs} aria-label="Wybierz widok programu">{screens.map((item, i) => <button key={item.title} type="button" aria-pressed={i === selected} aria-controls={`${id}-screen-panel`} onClick={() => setSelected(i)}>{item.title}</button>)}</div>}
    <div className={s.screenPanel} id={`${id}-screen-panel`}><div className={s.screenImage}><Image key={screen.image} src={`${root}${screen.image}`} alt={screen.alt} fill sizes={sizes} quality={95} /></div><div className={s.screenCopy}><span>{screen.title}</span><h3>{screen.heading}</h3><p>{screen.text}</p></div></div>
  </div>
}
