'use client'

import { useState } from 'react'
import s from './ProgloveMark2Story.module.css'

const ranges = [
  { title: 'Standard Range', pn: 'M004-EU', heading: 'Gdy kod jest blisko dłoni.', text: 'Do montażu, kontroli jakości i pracy przy stanowisku. Celownik LED pomaga skierować skaner na właściwą etykietę.', range: '4–58 cm', example: 'Przykład: kod UPC-A', extra: 'Kod Code 39 o module 20 mil: około 4–92 cm.' },
  { title: 'Mid Range', pn: 'M003-EU', heading: 'Gdy etykieta jest dalej.', text: 'Do kompletacji i zadań logistycznych. Węższe pole widzenia i celownik laserowy ułatwiają wskazanie kodu.', range: '6–97 cm', example: 'Przykład: kod UPC-A', extra: 'Kod Code 39 o module 20 mil: około 5–137 cm.' },
]
export function Mark2Ranges() {
  const [index, setIndex] = useState(0)
  const item = ranges[index]
  return <div className={s.rangeControl}>
    <div className={s.tabs} role="group" aria-label="Wersja skanera MARK 2">{ranges.map((v, i) => <button key={v.pn} type="button" aria-pressed={index === i} aria-controls="mark2-range-panel" onClick={() => setIndex(i)}>{v.title}</button>)}</div>
    <div id="mark2-range-panel" className={s.rangePanel}>
      <div><span className={s.pn}>{item.pn}</span><h3>{item.heading}</h3><p>{item.text}</p></div>
      <div className={s.rangeValue}><strong>{item.range}</strong><span>{item.example}</span><p>{item.extra}</p></div>
    </div>
    <p className={s.note}>Zasięg zależy od rodzaju, wielkości i jakości kodu oraz warunków odczytu. Podane odległości dotyczą konkretnych etykiet testowych.</p>
  </div>
}
