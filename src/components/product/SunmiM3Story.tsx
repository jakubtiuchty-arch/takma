'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import shared from './SunmiD3Story.module.css'
import mobile from './SunmiV3Story.module.css'
import s from './SunmiM3Story.module.css'

const base = '/images/sunmi-m3/'
const scenes = [
  { label: 'Zamówienia', image: 'p3-2.webp', title: 'Zamówienie zapisane podczas rozmowy.', text: 'Wybierz dania, dodaj uwagi do kuchni i dopisz kolejne pozycje bez wracania do stanowiska kasowego. Potrzebujesz zgodnej aplikacji gastronomicznej.' },
  { label: 'Obsługa sali', image: 'p3-1.webp', title: 'Odpowiedzi na pytania gości — pod ręką.', text: 'Sprawdź w aplikacji dostępność dań i szczegóły zamówienia. M3 korzysta z sieci Wi-Fi restauracji, więc informacje możesz odczytać przy stoliku.' },
]
function Photo({ name, alt, contain = false }: { name: string; alt: string; contain?: boolean }) {
  return <Image src={base + name} alt={alt} fill sizes="(max-width: 640px) 100vw, 1200px" className={contain ? mobile.contain : mobile.cover} />
}

export default function SunmiM3Story() {
  const [scene, setScene] = useState(0)
  return <div className={`${shared.story} ${s.story}`}>
    <nav className={shared.nav} aria-label="Poznaj SUNMI M3"><span>SUNMI <b>M3</b></span><div><a href="#m3-orders">Zamówienia</a><a href="#m3-battery">Bateria</a><a href="#m3-protection">Obudowa</a><a href="#warianty">Cena i dostępność ↗</a></div></nav>
    <section className={s.hero}>
      <div className={s.heroPhoto}><Photo name="p1-bg.webp" alt="SUNMI M3 podczas obsługi gościa w restauracji" /></div>
      <div className={s.heroCopy}><p className={shared.eyebrow}>TERMINAL MOBILNY DO GASTRONOMII</p><h2>SUNMI <span>M3</span></h2><h3>Przyjmuj zamówienia<br />przy stoliku.</h3><p>SUNMI M3 to terminal dla kelnerów. Pozwala przyjmować i uzupełniać zamówienia w aplikacji, bez odchodzenia od gości.</p><a href="#m3-orders">Poznaj możliwości ↓</a></div>
      <span className={s.heroNote}>P09070020 · Android 14 · 3 / 32 GB</span>
    </section>
    <div className={shared.facts}>{[['6,75″','Ekran HD+'],['5000 mAh','Wymienna bateria'],['IP65','Klasa szczelności'],['272 g','Masa terminala']].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <section id="m3-orders" className={mobile.scenes}>
      <div className={shared.head}><p className={shared.eyebrow}>OBSŁUGA SALI RESTAURACYJNEJ</p><h2>Mniej chodzenia do kasy.<br /><span>Więcej czasu dla gości.</span></h2><p>Przyjmuj zamówienia tam, gdzie są goście. M3 współpracuje z programem gastronomicznym, którego funkcje i licencję dobierasz do swojego lokalu.</p></div>
      <div className={mobile.sceneTabs} role="tablist" aria-label="Zastosowania SUNMI M3">{scenes.map((item,i)=><button key={item.label} type="button" role="tab" id={`m3-scene-tab-${i}`} aria-controls="m3-scene-panel" aria-selected={scene===i} onClick={()=>setScene(i)} className={scene===i?mobile.selected:''}>{item.label}</button>)}</div>
      <div className={mobile.scenePanel} role="tabpanel" id="m3-scene-panel" aria-labelledby={`m3-scene-tab-${scene}`}><div className={mobile.scenePhoto}><Photo name={scenes[scene].image} alt={`SUNMI M3 — ${scenes[scene].label.toLowerCase()}`} /></div><div className={mobile.sceneCopy}><span>0{scene+1} / 02</span><h3>{scenes[scene].title}</h3><p>{scenes[scene].text}</p></div></div>
    </section>
    <section id="m3-screen" className={s.screen}>
      <div><p className={shared.eyebrow}>EKRAN 6,75″ · OBUDOWA 15 mm</p><h2>Duży ekran.<br /><span>Wygodna obsługa zamówień.</span></h2><p>Przeglądaj menu, wybieraj dania i sprawdzaj szczegóły zamówienia na ekranie IPS 6,75″. Smukła, zaokrąglona obudowa waży 272 g.</p><div className={s.metrics}><div><strong>420 <small>nitów</small></strong><span>Jasność ekranu</span></div><div><strong>720 × 1600</strong><span>Rozdzielczość ekranu w pikselach</span></div></div></div>
      <div className={s.screenPhoto}><Photo name="display-front.webp" alt="SUNMI M3 — widok z przodu z włączonym ekranem 6,75 cala" contain /></div>
    </section>
    <section id="m3-battery" className={s.battery}>
      <div className={shared.head}><p className={shared.eyebrow}>WYMIENNA BATERIA 5000 mAh</p><h2>Wymień baterię.<br /><span>Wróć do obsługi gości.</span></h2><p>Gdy bateria się rozładuje, możesz zastąpić ją naładowaną zamiast czekać przy ładowarce. Zapasową baterię kupujesz osobno. Czas pracy zależy od aplikacji i ustawień terminala.</p></div>
      <div className={s.batteryPhoto}><Photo name="p7-2-bg.webp" alt="Wymienna bateria 5000 mAh w SUNMI M3" contain /></div>
      <div className={s.charging}><div><h3>Cztery terminale. Jedna stacja ładująca.</h3><p>Po zmianie odłóż terminale do wspólnej stacji. Model 4-stanowiskowy ładuje jednocześnie cztery urządzenia M3 lub L3. Stacja jest sprzedawana osobno.</p></div><Link href="/produkt/sunmi-c14004131">Zobacz stację 4-stanowiskową ↗</Link></div>
    </section>
    <section id="m3-protection" className={s.protection}>
      <div className={shared.head}><p className={shared.eyebrow}>OCHRONA PRZED PYŁEM I WODĄ</p><h2>Przygotowany na<br /><span>warunki w gastronomii.</span></h2><p>Mąka na zapleczu i zachlapania przy barze to część pracy w lokalu. M3 ma pyłoszczelną obudowę IP65, szkło Corning Gorilla Glass i wzmocnione narożniki.</p></div>
      <div className={s.protectionPhoto}><Photo name="p8-bg.webp" alt="SUNMI M3 — obudowa IP65 i wzmocnione narożniki" /></div>
      <div className={s.protectionFacts}><div><strong>IP65</strong><span>Pyłoszczelność i ochrona przed strugami wody</span></div><div><strong>1,5 m</strong><span>Wysokość upadku podczas testu na beton</span></div></div>
    </section>
    <section className={shared.system}>
      <div><p className={shared.eyebrow}>ANDROID 14 · SUNMI OS 4.0</p><h2>Twój program gastronomiczny.<br /><span>Na Androidzie 14.</span></h2><p>Korzystaj z aplikacji do zamówień w systemie SUNMI OS 4.0 z usługami Google. M3 ma ośmiordzeniowy procesor do 2,2 GHz i pamięć 3/32 GB. Przed zakupem potwierdź zgodność programu z terminalem.</p></div>
      <div className={shared.systemCards}>{[['8 rdzeni','Procesor do 2,2 GHz'],['3 / 32 GB','RAM i pamięć urządzenia'],['Wi-Fi 5','Sieć 2,4 i 5 GHz'],['Bluetooth 5.2','Łączność ze zgodnymi akcesoriami']].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
    <section className={s.configuration}>
      <div><p className={shared.eyebrow}>WERSJA W OFERCIE · P09070020</p><h2>Połącz M3 z siecią<br /><span>swojej restauracji.</span></h2><p>Wersja P09070020 łączy się przez Wi-Fi 5. Nie ma modemu komórkowego, NFC ani wbudowanej drukarki. Nie obsługuje płatności zbliżeniowych SoftPOS.</p><p>Zamówienia i wydruki obsługuje zgodny program gastronomiczny oraz osobna drukarka w lokalu. Zadbaj o zasięg Wi-Fi w miejscach pracy kelnerów.</p><Link href="/produkt/sunmi-v3#opis">Potrzebujesz terminala z drukarką? Poznaj V3 ↗</Link></div>
      <div className={s.strapPhoto}><Photo name="p6-1.webp" alt="SUNMI M3 z opcjonalnym paskiem na dłoń" /><span>Pasek na dłoń jest akcesorium opcjonalnym.</span></div>
    </section>
    <section className={shared.final}><p className={shared.eyebrow}>SUNMI M3 DLA TWOJEJ RESTAURACJI</p><h2>Wyposaż kelnerów<br /><span>w SUNMI M3.</span></h2><p>Dobierz do terminala stację ładującą, etui lub pasek na dłoń. Jeśli masz już program gastronomiczny, pomożemy sprawdzić wymagania sprzętowe.</p><div><a href="#warianty">Sprawdź cenę i dostępność ↑</a><Link href="/produkt/sunmi-c11000007">Zobacz pasek na dłoń ↗</Link></div></section>
  </div>
}
