'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import shared from './SunmiD3Story.module.css'
import mobile from './SunmiV3Story.module.css'
import s from './SunmiM3Story.module.css'

const base = '/images/sunmi-m3/'
const scenes = [
  { label: 'Zamówienia', image: 'p3-2.webp', title: 'Zapisuj zamówienia przy stoliku.', text: 'Wybierz dania, dopisz uwagi i uzupełnij zamówienie podczas rozmowy z gościem. Obsługa tych funkcji zależy od aplikacji gastronomicznej.' },
  { label: 'Obsługa sali', image: 'p3-1.webp', title: 'Sprawdzaj informacje bez odchodzenia od gościa.', text: 'Otwórz kartę dań lub sprawdź dostępność pozycji w programie. Terminal łączy się z siecią lokalu przez Wi-Fi.' },
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
      <div className={s.heroCopy}><p className={shared.eyebrow}>TERMINAL MOBILNY DO GASTRONOMII</p><h2>SUNMI <span>M3</span></h2><h3>Przyjmuj zamówienia.<br />Zostań przy gościach.</h3><p>Terminal z ekranem 6,75″ do obsługi sali restauracyjnej. Zapisuj zamówienia w aplikacji i korzystaj z sieci Wi-Fi lokalu.</p><a href="#m3-orders">Poznaj możliwości ↓</a></div>
      <span className={s.heroNote}>P09070020 · Android 14 · 3 / 32 GB</span>
    </section>
    <div className={shared.facts}>{[['6,75″','Ekran HD+'],['5000 mAh','Wymienna bateria'],['IP65','Klasa szczelności'],['272 g','Masa terminala']].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <section id="m3-orders" className={mobile.scenes}>
      <div className={shared.head}><p className={shared.eyebrow}>OD WYBORU DAŃ DO ZAPISANIA ZAMÓWIENIA</p><h2>Obsługuj gości<br /><span>przy ich stoliku.</span></h2><p>Program gastronomiczny i jego licencję dobierasz osobno. M3 nie ma wbudowanej drukarki — wydruki obsługuje osobna drukarka współpracująca z programem.</p></div>
      <div className={mobile.sceneTabs} role="tablist" aria-label="Zastosowania SUNMI M3">{scenes.map((item,i)=><button key={item.label} type="button" role="tab" id={`m3-scene-tab-${i}`} aria-controls="m3-scene-panel" aria-selected={scene===i} onClick={()=>setScene(i)} className={scene===i?mobile.selected:''}>{item.label}</button>)}</div>
      <div className={mobile.scenePanel} role="tabpanel" id="m3-scene-panel" aria-labelledby={`m3-scene-tab-${scene}`}><div className={mobile.scenePhoto}><Photo name={scenes[scene].image} alt={`SUNMI M3 — ${scenes[scene].label.toLowerCase()}`} /></div><div className={mobile.sceneCopy}><span>0{scene+1} / 02</span><h3>{scenes[scene].title}</h3><p>{scenes[scene].text}</p></div></div>
    </section>
    <section className={s.screen}>
      <div><p className={shared.eyebrow}>EKRAN I KSZTAŁT OBUDOWY</p><h2>Menu i zamówienia<br /><span>na ekranie 6,75″.</span></h2><p>Ekran IPS ma rozdzielczość 720 × 1600 px i jasność 420 nitów. Zaokrąglona obudowa ma grubość 15 mm.</p><div className={s.metrics}><div><strong>420 <small>nitów</small></strong><span>Jasność ekranu</span></div><div><strong>15 <small>mm</small></strong><span>Grubość obudowy</span></div></div></div>
      <div className={s.screenPhoto}><Photo name="p4-40.webp" alt="SUNMI M3 — ekran i profil zaokrąglonej obudowy" contain /></div>
    </section>
    <section id="m3-battery" className={s.battery}>
      <div className={shared.head}><p className={shared.eyebrow}>WYMIENNA BATERIA 5000 mAh</p><h2>Naładuj terminal.<br /><span>Przygotuj go do kolejnej zmiany.</span></h2><p>Baterię można wyjąć i zastąpić naładowaną. Czas pracy zależy od aplikacji, jasności ekranu i sposobu użytkowania.</p></div>
      <div className={s.batteryPhoto}><Photo name="p7-2-bg.webp" alt="Wymienna bateria 5000 mAh w SUNMI M3" contain /></div>
      <div className={s.charging}><div><h3>Jedno miejsce do ładowania całego zespołu.</h3><p>Opcjonalna stacja ładuje cztery terminale M3 lub L3 jednocześnie. Stację i dodatkowe baterie kupujesz osobno.</p></div><Link href="/produkt/sunmi-c14004131">Zobacz stację 4-stanowiskową ↗</Link></div>
    </section>
    <section id="m3-protection" className={s.protection}>
      <div className={shared.head}><p className={shared.eyebrow}>OBUDOWA DO PRACY W LOKALU</p><h2>Pył, zachlapania<br /><span>i codzienny ruch.</span></h2><p>Obudowa ma klasę IP65. Ekran chroni szkło Corning Gorilla Glass, a narożniki są wzmocnione.</p></div>
      <div className={s.protectionPhoto}><Photo name="p8-bg.webp" alt="SUNMI M3 — obudowa IP65 i wzmocnione narożniki" /></div>
      <div className={s.protectionFacts}><div><strong>IP65</strong><span>Pyłoszczelność i ochrona przed strugami wody</span></div><div><strong>1,5 m</strong><span>Wysokość upadku podczas testu na beton</span></div></div>
    </section>
    <section className={shared.system}>
      <div><p className={shared.eyebrow}>ANDROID 14 · SUNMI OS 4.0</p><h2>Uruchom aplikacje<br /><span>do obsługi restauracji.</span></h2><p>Ośmiordzeniowy procesor pracuje z częstotliwością do 2,2 GHz. Oferowana wersja ma 3 GB RAM, 32 GB pamięci i usługi Google GMS EDLA.</p></div>
      <div className={shared.systemCards}>{[['8 rdzeni','Procesor do 2,2 GHz'],['3 / 32 GB','RAM i pamięć urządzenia'],['Wi-Fi 5','Sieć 2,4 i 5 GHz'],['Bluetooth 5.2','Łączność ze zgodnymi akcesoriami']].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
    <section className={s.configuration}>
      <div><p className={shared.eyebrow}>WERSJA W OFERCIE · P09070020</p><h2>Wi-Fi do pracy<br /><span>w sieci lokalu.</span></h2><p>Ta konfiguracja nie ma NFC ani modemu komórkowego. Nie służy do przyjmowania płatności zbliżeniowych SoftPOS.</p><p>Przed zakupem sprawdź wymagania programu, zasięg Wi-Fi i zgodność z drukarką używaną w restauracji.</p><Link href="/produkt/sunmi-v3#opis">Potrzebujesz terminala z drukarką? Poznaj V3 ↗</Link></div>
      <div className={s.strapPhoto}><Photo name="p6-1.webp" alt="SUNMI M3 z opcjonalnym paskiem na dłoń" /><span>Pasek na dłoń jest akcesorium opcjonalnym.</span></div>
    </section>
    <section className={shared.final}><p className={shared.eyebrow}>SUNMI M3 DLA TWOJEJ RESTAURACJI</p><h2>Dobierz terminal<br /><span>do sposobu obsługi sali.</span></h2><p>Pomożemy sprawdzić wymagania aplikacji oraz dobrać stację ładującą, etui i pasek na dłoń.</p><div><a href="#warianty">Sprawdź cenę i dostępność ↑</a><Link href="/produkt/sunmi-c11000007">Zobacz pasek na dłoń ↗</Link></div></section>
  </div>
}
