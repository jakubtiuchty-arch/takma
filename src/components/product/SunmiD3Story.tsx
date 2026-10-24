'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './SunmiD3Story.module.css'

const asset = (file: string) => '/images/sunmi-d3-landing/' + file
const product = (pro: boolean, n = 1) => `/images/products/${pro ? 'P01270001' : 'P01300033'}${n > 1 ? '-' + n : ''}.png`
function Photo({ src, alt, contain = false }: { src: string; alt: string; contain?: boolean }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 1200px" className={contain ? s.contain : s.cover} />
}

export default function SunmiD3Story({ pro }: { pro: boolean }) {
  const [scene, setScene] = useState(0)
  const [angle, setAngle] = useState(0)
  const name = pro ? 'D3 PRO' : 'D3'
  const scenes = [
    { title: 'Restauracja', image: 'p3-1-1.jpg', heading: 'Obsługa zamówień w restauracji', text: 'Na ekranie 15,6″ wyświetlisz menu, plan stolików i zamówienia. Potrzebujesz programu gastronomicznego, który obsługuje te funkcje.' },
    { title: 'Sklep', image: 'p3-2-1.jpg', heading: 'Stanowisko do sprzedaży w sklepie', text: 'Połącz komputer ze skanerem i szufladą kasową. Na ekranie klienta możesz wyświetlać listę zakupów i kwotę do zapłaty, jeśli program sprzedażowy obsługuje tę funkcję.' },
    { title: 'Butik', image: 'p3-3-2.jpg', heading: 'Uporządkowana lada w butiku', text: 'Przewody schowane w podstawie i dwa ekrany na jednym stanowisku pomagają uporządkować ladę.' },
  ]
  const facts = [['15,6″', 'Dotykowy ekran Full HD'], [pro ? '4 / 64 GB' : '3 / 32 GB', 'RAM i pamięć'], [pro ? '6 rdzeni' : '8 rdzeni', pro ? 'Qualcomm do 2,4 GHz' : 'Do 2,2 GHz'], [pro ? 'Aluminium' : '10,1″ + NFC', pro ? 'Obudowa komputera' : 'Ekran klienta w zestawie']]
  return <div className={s.story}>
    <nav className={s.nav} aria-label={`Poznaj SUNMI ${name}`}><span>SUNMI <b>{name}</b></span><div><a href="#d3-display">Ekrany</a><a href="#d3-design">Konstrukcja</a><a href="#d3-system">System</a><a href={pro ? '#warianty' : '#main-content'}>Wybierz {name} ↗</a></div></nav>
    <section className={s.hero}>
      <div className={s.heroCopy}><p className={s.eyebrow}>KOMPUTER POS DO SKLEPU I RESTAURACJI</p><h2>SUNMI<br /><span>{name}</span></h2><h3>{pro ? 'Komputer do obsługi sprzedaży\nw aluminiowej obudowie.' : 'Ekran dla sprzedawcy\ni dla klienta.'}</h3><p>{pro ? 'Komputer POS z ekranem Full HD i aluminiową obudową. Ekran klienta dodasz wtedy, gdy go potrzebujesz.' : 'Komputer POS z ekranem 15,6″ i dotykowym ekranem klienta 10,1″ z NFC w zestawie.'}</p><a href="#d3-display">Poznaj możliwości <span>↓</span></a></div>
      <div className={s.heroImage}><Photo src={product(pro)} alt={`SUNMI ${name}${pro ? '' : ' z ekranem klienta 10,1 cala'}`} contain /></div><span className={s.modelLabel}>{pro ? 'D3 PRO / F3510' : 'D3 / F153B'}</span>
    </section>
    <div className={s.facts}>{facts.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <section id="d3-display" className={s.display}>
      <div className={s.head}><p className={s.eyebrow}>DOTYKOWY EKRAN 15,6″</p><h2>Obsługuj sprzedaż<br /><span>na ekranie Full HD.</span></h2><p>Na ekranie 15,6″ Full HD wyświetlisz katalog produktów, zamówienia i podsumowanie zakupów. Program przystosowany do obsługi dotykowej nie wymaga myszy.</p></div>
      <div className={`${s.wide} ${pro ? s.lightImage : ''}`}><Photo src={pro ? product(true,2) : asset('p2-2.jpg')} alt={`Przedni ekran SUNMI ${name}`} contain={pro} /></div>
      <div className={s.displayFacts}><div><strong>1920 × 1080</strong><span>Rozdzielczość ekranu głównego</span></div><div><strong>{pro ? '10 punktów' : 'IPS'}</strong><span>{pro ? 'Obsługa dotyku' : 'Technologia wyświetlacza'}</span></div><div><strong>15,6″</strong><span>Przekątna ekranu</span></div></div>
    </section>
    <section className={s.customer}>
      <div className={s.customerCopy}><p className={s.eyebrow}>{pro ? 'ROZBUDUJ STANOWISKO' : 'EKRAN KLIENTA W ZESTAWIE'}</p><h2>Pokaż klientowi<br /><span>podsumowanie zakupów.</span></h2><p>{pro ? 'Dodaj ekran klienta SUNMI 10,1″ C02020005. Zamontuj go na ramieniu podstawy i połącz przez USB.' : 'Dotykowy ekran klienta 10,1″ HD jest częścią zestawu P01300033. Ma czytnik NFC i dwa porty micro USB 2.0.'}</p><p>Zależnie od programu ekran może pokazywać listę zakupów, kwotę do zapłaty lub ofertę sklepu.</p><div className={s.badge}>{pro ? 'Opcja · kupujesz osobno' : 'W zestawie · 10,1″ HD + NFC'}</div>{pro && <Link href="/produkt/sunmi-c02020005">Zobacz ekran klienta ↗</Link>}</div>
      <div className={s.customerImage}><Photo src={product(pro,pro ? 7 : 5)} alt={`Ekran klienta SUNMI ${name}${pro ? ' — wyposażenie opcjonalne' : ' — w zestawie'}`} contain /></div>
      <p className={s.note}>NFC znajduje się w ekranie klienta. Płatności SoftPOS wymagają zgodnej aplikacji i operatora płatności.</p>
    </section>
    <section id="d3-design" className={s.design}><div className={s.head}><p className={s.eyebrow}>PRZEMYŚLANA KONSTRUKCJA</p><h2>Przewody ukryte<br /><span>wewnątrz podstawy.</span></h2><p>{pro ? 'Aluminiowa obudowa, cienka ramka i proste ramię podstawy. Przewody biegną wewnątrz konstrukcji.' : 'Obudowa ma metaliczną fakturę. Przewody są prowadzone wewnątrz podstawy, co pomaga utrzymać porządek na ladzie.'}</p></div>
      <div className={`${s.angleImage} ${pro ? s.lightImage : ''}`}><Photo src={pro ? product(true,[3,4,6][angle]) : asset(['p11-1.jpg','p11-2.jpg','p9-bg.jpg'][angle])} alt={`SUNMI ${name} — ${['widok z boku','widok z tyłu','detale konstrukcji'][angle]}`} contain={pro} /></div>
      <div className={s.tabs} role="group" aria-label="Widok konstrukcji">{['Profil','Tył obudowy','Bryła'].map((label,i)=><button key={label} aria-pressed={angle===i} onClick={()=>setAngle(i)} className={angle===i?s.selected:''}>{label}</button>)}</div>
    </section>
    <section id="d3-system" className={s.system}><div><p className={s.eyebrow}>SYSTEM I PAMIĘĆ</p><h2>SUNMI OS 4.0<br /><span>do aplikacji firmowych.</span></h2><p>{pro ? 'Android 13 i procesor Qualcomm z sześcioma rdzeniami do 2,4 GHz. Pamięć 4/64 GB do aplikacji sprzedażowej i danych.' : 'Android 14 i osiem rdzeni do 2,2 GHz. Pamięć 3/32 GB i układ AI 6 TOPS dla zgodnych aplikacji.'}</p><p>Dobierz program sprzedaży do swojej branży. Aplikację i licencję kupujesz osobno.</p></div><div className={s.systemCards}><div><strong>{pro ? 'Android 13' : 'Android 14'}</strong><span>{pro ? 'Wersja bez usług Google lub z GMS EDLA' : 'Usługi Google GMS EDLA'}</span></div><div><strong>do 1 TB</strong><span>Rozszerzenie pamięci kartą microSD</span></div><div><strong>SUNMI DMP</strong><span>Zdalne wdrażanie i zarządzanie urządzeniami</span></div>{pro && <div><strong>Odcisk palca</strong><span>Czytnik w przycisku zasilania tylko w wersji GMS P01270002.</span></div>}</div></section>
    {!pro && <section className={s.scenes}><div className={s.head}><p className={s.eyebrow}>ZASTOSOWANIA SUNMI D3</p><h2>Do gastronomii<br /><span>i handlu detalicznego.</span></h2></div><div className={s.tabs} role="tablist" aria-label="Zastosowania D3">{scenes.map((item,i)=><button key={item.title} role="tab" aria-selected={scene===i} aria-controls="d3-scene-panel" id={`d3-tab-${i}`} onClick={()=>setScene(i)} className={scene===i?s.selected:''}>{item.title}</button>)}</div><div className={s.scenePanel} role="tabpanel" id="d3-scene-panel" aria-labelledby={`d3-tab-${scene}`}><div className={s.sceneImage}><Photo src={asset(scenes[scene].image)} alt={`SUNMI D3 w pracy — ${scenes[scene].title}`} /></div><div><span>0{scene+1} / 03</span><h3>{scenes[scene].heading}</h3><p>{scenes[scene].text}</p></div></div></section>}
    <section className={s.connect}><p className={s.eyebrow}>SIEĆ I URZĄDZENIA DODATKOWE</p><h2>Podłącz urządzenia do obsługi sprzedaży.</h2><div className={s.connectGrid}>{[[pro?'Wi-Fi 5':'Wi-Fi 6','Bezprzewodowe połączenie z siecią.'],['LAN 1 Gb/s','Stałe połączenie przewodowe.'],[pro?'Bluetooth 5.0':'Bluetooth 5.4','Łączność ze zgodnymi urządzeniami.'],['USB · RJ12 · RJ11','Podłącz skaner, szufladę i urządzenia szeregowe.']].map(([title,text],i)=><div key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div><div className={s.printNote}><div><h3>Drukarka dopasowana do stanowiska.</h3><p>{name} nie ma drukarki ani modułu fiskalnego. Do bonów i potwierdzeń dobierz osobną drukarkę POS.</p></div><Link href="/drukarki-pos">Dobierz drukarkę ↗</Link></div></section>
    <section className={s.final}><p className={s.eyebrow}>WYBIERZ KOMPUTER DO SWOJEJ FIRMY</p><h2>SUNMI {name}.<br /><span>{pro ? 'Dobierz wersję i ekran klienta.' : 'Dwa ekrany w zestawie.'}</span></h2><p>{pro ? 'Wybierz wersję bez usług Google lub z GMS EDLA i czytnikiem linii papilarnych. Ekran klienta kupujesz osobno.' : 'Wersja P01300033 z ekranem głównym 15,6″ i ekranem klienta 10,1″ z NFC. Android 14 i GMS EDLA.'}</p><div><a href={pro?'#warianty':'#main-content'}>{pro?'Wybierz wersję ↑':'Przejdź do produktu ↑'}</a><Link href={pro?'/produkt/sunmi-d3#opis':'/produkt/sunmi-d3-pro#opis'}>Zobacz także {pro?'D3':'D3 PRO'} ↗</Link></div></section>
  </div>
}
