'use client'
import { useEffect, useRef, useState } from 'react'
import s from './SunmiFlexStory.module.css'
const root='/images/sunmi-flex-3/'
export function FlexVideo({name,poster,once=false}:{name:string;poster?:string;once?:boolean}) {
 const ref=useRef<HTMLVideoElement>(null)
 const [playing,setPlaying]=useState(false)
 useEffect(()=>{const v=ref.current;if(!v)return;const motion=window.matchMedia('(prefers-reduced-motion: reduce)');const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!motion.matches&&!v.ended)v.play().catch(()=>{});else v.pause()},{threshold:.2});observer.observe(v);return()=>{observer.disconnect();v.pause()}},[name])
 return <div className={s.video}><video key={name} ref={ref} src={root+name+'.mp4'} poster={root+(poster||name)+'.webp'} muted playsInline loop={!once} preload="metadata" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)} aria-label="Prezentacja SUNMI FLEX 3"/><button type="button" onClick={()=>{const v=ref.current;if(!v)return;if(v.paused){if(v.ended)v.currentTime=0;v.play().catch(()=>{})}else v.pause()}}>{playing?'Ⅱ Pauza':'▶ Odtwórz'}</button></div>
}
const uses=[
 ['Sklep','p10-1-1','Zakupy bez czekania przy kasie.','Klient skanuje produkty i sprawdza koszyk na ekranie. Do takiego stanowiska dobierz stojak ze skanerem i drukarką oraz zgodny program sprzedaży.'],
 ['Stanowisko kasowe','p10-2-1-n','Więcej miejsca na obsługę klienta.','FLEX 3 może służyć jako ekran dotykowy do programu kasowego. Dobierz stojak i urządzenia potrzebne przy Twojej kasie.'],
 ['Restauracja','p10-3-1','Klient wybiera dania na ekranie.','Menu ze zdjęciami pomaga przeglądać ofertę i wybierać dodatki. Program kiosku przekazuje zamówienie do systemu sprzedaży po odpowiedniej integracji.'],
 ['Produkcja','p10-4-1','Instrukcje przy stanowisku pracy.','Wyświetlaj instrukcje i wprowadzaj dane do aplikacji zakładowej. Mocowanie VESA pozwala dobrać uchwyt do miejsca montażu.'],
]
export function FlexUses(){const [index,setIndex]=useState(0);const item=uses[index];return <><div className={s.tabs} role="group" aria-label="Zastosowanie FLEX 3">{uses.map((v,i)=><button type="button" key={v[0]} aria-pressed={i===index} onClick={()=>setIndex(i)}>{v[0]}</button>)}</div><FlexVideo key={item[1]} name={item[1]}/><div className={s.caption}><h3>{item[2]}</h3><p>{item[3]}</p></div></>}
const sizes=[['15,6″','P11050020','4 / 64 GB','250 nitów','Wi-Fi 5 · Bluetooth 5.0','6 rdzeni, do 2,4 GHz'],['18,5″','P11050012','6 / 128 GB','400 nitów','Wi-Fi 6E · Bluetooth 5.2','8 rdzeni, do 2,7 GHz'],['22″','P11050001','6 / 128 GB','400 nitów','Wi-Fi 6E · Bluetooth 5.2','8 rdzeni, do 2,7 GHz'],['27″','P11050006','6 / 128 GB','400 nitów','Wi-Fi 6E · Bluetooth 5.2','8 rdzeni, do 2,7 GHz']]
export function FlexSizes(){const[index,setIndex]=useState(2);const item=sizes[index];return <><div className={s.tabs} role="group" aria-label="Rozmiar FLEX 3">{sizes.map((v,i)=><button key={v[0]} type="button" aria-pressed={index===i} onClick={()=>setIndex(i)}>{v[0]}</button>)}</div><div className={s.specs}><div><span>WERSJA {item[1]}</span><h3>FLEX 3 {item[0]}</h3><p>{index===0?'Kompaktowa wersja do stanowisk, na których liczy się miejsce. Zasilacz i uchwyt VESA są w zestawie.':'Większa powierzchnia na menu, koszyk i instrukcje. Ekran IPS oraz czytnik linii papilarnych w przycisku zasilania.'}{index===2?' Rzeczywista przekątna ekranu wynosi 21,5″.':''}</p></div><dl>{[['RAM / pamięć',item[2]],['Jasność',item[3]],['Łączność',item[4]],['Qualcomm',item[5]]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></>}
export function FlexFilm(){const [open,setOpen]=useState(false);return <div className={s.film}>{open?<video src={root+'tvc-en.mp4'} controls autoPlay playsInline aria-label="Film producenta SUNMI FLEX 3"/>:<><FlexVideo name="tvc-poster"/><button className={s.fullFilm} type="button" onClick={()=>setOpen(true)}>▶ Obejrzyj pełny film</button></>}</div>}
