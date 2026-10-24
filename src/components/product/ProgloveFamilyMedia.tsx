'use client'
import Image from 'next/image'
import { useState } from 'react'
import type { ProgloveChoice } from './ProgloveFamilyContent'
import s from './ProgloveFamilyStory.module.css'

export function ProgloveChoices({items,root,id}:{items:ProgloveChoice[];root:string;id:string}) {
 const [index,setIndex]=useState(0)
 const item=items[index]
 return <div className={s.choice}>
  <div className={s.tabs} role="group" aria-label="Wybierz prezentowaną funkcję lub wersję">{items.map((v,i)=><button type="button" key={v.title} aria-pressed={i===index} aria-controls={id+'-panel'} onClick={()=>setIndex(i)}>{v.title}</button>)}</div>
  <div id={id+'-panel'} className={s.choicePanel}>
   <div className={s.choiceCopy}>{item.pn&&<span className={s.pn}>{item.pn}</span>}<h3>{item.heading}</h3><p>{item.text}</p><p className={s.note}>{item.detail}</p></div>
   {item.image?<div className={s.choicePhoto}><Image src={root+item.image+'.webp'} alt={item.heading+' — oryginalny ekran ProGlove MAI'} fill sizes="(max-width:640px) 100vw, 600px" quality={95}/></div>:<div className={s.choiceValue}><strong>{item.value}</strong><span>{item.title}</span></div>}
  </div>
 </div>
}
