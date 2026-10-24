'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SunmiT3Story.module.css'

const base = '/images/sunmi-t3-landing/'
const scenes = [
  { title: 'Restauracja', image: 'p3-1-1.jpg', heading: 'Tempo sali. Porządek w zamówieniach.', text: 'Duży ekran daje miejsce na menu, stoliki i listę zamówień. Uruchom zgodny program gastronomiczny i połącz stanowisko z urządzeniami w lokalu.' },
  { title: 'Sklep', image: 'p3-2-1.jpg', heading: 'Obsługa, która nie zabiera uwagi.', text: 'Sprzedaż, stany i program lojalnościowy w jednym stanowisku. Opcjonalny ekran klienta pokazuje pozycje, kwotę lub ofertę ustawioną w aplikacji.' },
  { title: 'Kawiarnia', image: 'p3-3-1.jpg', heading: 'Mniej miejsca na sprzęt. Więcej na kontakt.', text: 'Aluminiowa konstrukcja i ukryte przewody porządkują ladę. Ekran można odchylić, aby dopasować go do sposobu obsługi.' },
]

function Photo({ name, alt, className = '', sizes = '(max-width: 768px) 100vw, 1200px' }: { name: string; alt: string; className?: string; sizes?: string }) {
  return <Image src={base + name} alt={alt} fill sizes={sizes} className={className} />
}

export default function SunmiT3Story({ max }: { max: boolean }) {
  const [scene, setScene] = useState(0)
  const [printView, setPrintView] = useState(0)
  const name = max ? 'T3 PRO MAX' : 'T3 PRO'
  const printFrames = ['print_0.jpg', 'print_40.jpg', 'print_67.jpg']
  return (
    <div className={styles.story}>
      <nav className={styles.nav} aria-label="Poznaj komputer SUNMI">
        <span>SUNMI <strong>{name}</strong></span>
        <div><a href="#t3-design">Design</a><a href="#t3-power">Wydajność</a><a href="#t3-display">Ekran</a>{max && <a href="#t3-print">Drukarka</a>}<a href="#warianty" className={styles.navCta}>Wybierz wersję ↗</a></div>
      </nav>

      <section className={`${styles.hero} ${max ? styles.heroMax : ''}`}>
        <Photo name={max ? 'print_0.jpg' : 'p5-1.jpg'} alt={`SUNMI ${name} z ekranem 15,6 cala${max ? ' i drukarką w podstawie' : ' i aluminiową podstawą'}`} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>NOWY WYMIAR STANOWISKA POS</p>
          <h2>SUNMI<br /><span>{name}</span></h2>
          <p className={styles.heroLine}>{max ? 'Więcej możliwości.\nDruk w tej samej bryle.' : 'Moc, którą widać.\nDesign, który robi miejsce.'}</p>
          <p className={styles.heroSmall}>{max ? 'Komputer POS z Androidem i drukarką Seiko 80 mm. Jedno stanowisko do obsługi sprzedaży i wydruków niefiskalnych.' : 'Komputer POS z Androidem, ekranem bez ramki i obudową ze stopu aluminium. Do sklepu, restauracji i kawiarni.'}</p>
          <a href="#t3-scenes" className={styles.textLink}>Poznaj możliwości <span>↓</span></a>
        </div>
        <span className={styles.heroNote}>Na zdjęciu konfiguracja rodziny T3 PRO.</span>
      </section>

      <div className={styles.facts}>
        {[['15,6″', 'Ekran Full HD'], ['6 / 128 GB', 'RAM i pamięć'], ['2,7 GHz', 'Procesor 8-rdzeniowy'], [max ? '80 mm' : 'Wi-Fi 6E', max ? 'Drukarka Seiko' : 'Łączność bezprzewodowa']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>

      <section id="t3-scenes" className={styles.scenes}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>TWOJE MIEJSCE. TWÓJ SPOSÓB PRACY.</p><h2>Technologia w tle.<br /><span>Twoja obsługa na pierwszym planie.</span></h2></div>
        <div className={styles.sceneTabs} role="tablist" aria-label="Zastosowania SUNMI">{scenes.map((item, i) => <button key={item.title} role="tab" id={`t3-scene-tab-${i}`} aria-selected={scene === i} aria-controls="t3-scene-panel" onClick={() => setScene(i)} className={scene === i ? styles.selected : ''}>{item.title}</button>)}</div>
        <div className={styles.scenePanel} id="t3-scene-panel" role="tabpanel" aria-labelledby={`t3-scene-tab-${scene}`}>
          <div className={styles.scenePhoto}><Photo name={scenes[scene].image} alt={`SUNMI T3 PRO — ${scenes[scene].title.toLowerCase()}`} /></div>
          <div className={styles.sceneCopy}><span className={styles.sceneNumber}>0{scene + 1} / 03</span><h3>{scenes[scene].heading}</h3><p>{scenes[scene].text}</p><span className={styles.smallNote}>Aplikacja sprzedażowa i licencja są dobierane osobno.</span></div>
        </div>
      </section>

      <section id="t3-power" className={styles.power}>
        <Photo name="f4-1.jpg" alt="Procesor Qualcomm w konstrukcji SUNMI T3 PRO" />
        <div className={styles.powerCopy}><p className={styles.eyebrow}>WYDAJNOŚĆ DO CODZIENNEGO RUCHU</p><h2>Gotowy na<br /><span>godziny szczytu.</span></h2><p>Osiem rdzeni Qualcomm Kryo 670 i 6 GB RAM do pracy z aplikacją sprzedażową, katalogiem produktów i obsługą zamówień.</p></div>
        <div className={styles.powerStats}><div><strong>8<span> rdzeni</span></strong><p>Qualcomm Kryo 670</p></div><div><strong>6<span> nm</span></strong><p>Proces technologiczny</p></div><div><strong>128<span> GB</span></strong><p>Pamięć na aplikacje i dane</p></div></div>
      </section>

      <section id="t3-design" className={styles.design}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>KONSTRUKCJA, KTÓRA PORZĄDKUJE LADĘ</p><h2>Lekka forma.<br /><span>Solidne aluminium.</span></h2><p>Smukły ekran i stabilna podstawa tworzą jedną bryłę. Przewody prowadzone wewnątrz konstrukcji zostawiają więcej porządku na stanowisku.</p></div>
        <div className={styles.designPhoto}><Photo name="p5-2.jpg" alt="Tylna część SUNMI T3 PRO i prowadzenie przewodów w podstawie" /></div>
        <div className={styles.designCaption}><span>01 — Ukryte prowadzenie przewodów</span><span>02 — Obudowa ze stopu aluminium</span><span>03 — Smukły ekran bez ramki</span></div>
      </section>

      <section id="t3-display" className={styles.display}>
        <div className={styles.displayIntro}><p className={styles.eyebrow}>WIĘCEJ PRZESTRZENI NA SPRZEDAŻ</p><h2>Dotyk.<br />Obraz.<br /><span>Pełna kontrola.</span></h2><p>Ekran 15,6″ o rozdzielczości 1920 × 1080 px i jasności 400 nitów. Powłoka ogranicza ślady palców, a odchylanie o 125° ułatwia ustawienie obrazu.</p><div className={styles.displayNumbers}><strong>400<span> nitów</span></strong><strong>125<span>° odchylenia</span></strong></div></div>
        <div className={styles.displayImage}><Photo name="p5-1.jpg" alt="Dotykowy ekran SUNMI T3 PRO bez ramki" /></div>
        <div className={styles.touchCard}><div className={styles.touchPhoto}><Photo name="p6-1.jpg" alt="Czytnik linii papilarnych na krawędzi ekranu SUNMI" /></div><div><p className={styles.eyebrow}>SZYBKI DOSTĘP</p><h3>Twój odcisk.<br />Twój dostęp.</h3><p>Czytnik linii papilarnych w przycisku zasilania ułatwia logowanie użytkownika. Obsługa zależy od konfiguracji systemu i aplikacji.</p></div></div>
        <div className={styles.nfcCard}><div className={styles.nfcPhoto}><Photo name="p6-3-2.jpg" alt="Karta NFC przykładana do ekranu SUNMI T3 PRO" /></div><div><p className={styles.eyebrow}>NFC W EKRANIE</p><h3>Przyłóż kartę.<br />Kontynuuj obsługę.</h3><p>Odczyt zgodnych kart NFC bezpośrednio przy ekranie. Płatności SoftPOS wymagają obsługiwanej aplikacji i operatora płatności.</p></div></div>
      </section>

      <section className={styles.customer}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>DWIE STRONY TEJ SAMEJ OBSŁUGI</p><h2>Ty obsługujesz.<br /><span>Klient widzi więcej.</span></h2><p>Dodaj ekran klienta 10,1″ lub 15,6″. Pokaż koszyk, kwotę do zapłaty lub ofertę przygotowaną w programie sprzedaży.</p></div>
        <div className={styles.customerPhoto}><Photo name="p6-4-1.jpg" alt="Odłączany ekran klienta SUNMI ustawiony obok komputera POS" /></div>
        <div className={styles.customerBottom}><div><strong>1,5 m</strong><span>Przedłużacz do osobnego ustawienia ekranu klienta.</span></div><div className={styles.customerLinks}><Link href="/produkt/sunmi-c02020003">Ekran klienta 10,1″ ↗</Link><Link href="/produkt/sunmi-c02020004">Ekran klienta 15,6″ ↗</Link><p>Ekran klienta i wyposażenie do jego ustawienia kupujesz osobno.</p></div></div>
      </section>

      {max ? <section id="t3-print" className={styles.print}>
        <div className={styles.printCopy}><p className={styles.eyebrow}>PRO MAX. TAKŻE W DRUKU.</p><h2>Przyjmij zamówienie.<br /><span>Wydrukuj od razu.</span></h2><p>Drukarka termiczna Seiko jest wbudowana w podstawę. Papier 80 mm, prędkość do 250 mm/s i automatyczna gilotyna — bez osobnej drukarki na ladzie.</p><div className={styles.printSpecs}><div><strong>80<span> mm</span></strong><small>Szerokość papieru</small></div><div><strong>250<span> mm/s</span></strong><small>Maksymalna prędkość</small></div></div><div className={styles.printTabs} aria-label="Widok modułu drukarki">{['Gotowy do druku', 'Otwarta obudowa', 'Budowa modułowa'].map((label, i) => <button key={label} aria-pressed={i === printView} className={i === printView ? styles.selected : ''} onClick={() => setPrintView(i)}>{label}</button>)}</div><p className={styles.smallNote}>Wydruki są niefiskalne. Urządzenie nie zastępuje kasy ani drukarki fiskalnej.</p></div>
        <div className={styles.printPhoto}><Photo name={printFrames[printView]} alt={`Drukarka Seiko w SUNMI T3 PRO MAX — ${['wydruk', 'otwarty moduł', 'budowa modułowa'][printView]}`} /></div>
      </section> : <section className={styles.proChoice}><div><p className={styles.eyebrow}>SWOBODA KONFIGURACJI</p><h2>Stanowisko po Twojemu.</h2><p>T3 PRO nie ma wbudowanej drukarki. Dobierz osobną drukarkę POS do wymagań programu i miejsca na ladzie.</p><Link href="/drukarki-pos" className={styles.textLink}>Dobierz drukarkę POS ↗</Link></div><div><p className={styles.eyebrow}>WOLISZ DRUK W PODSTAWIE?</p><h3>Poznaj T3 PRO MAX.</h3><p>Ta sama rodzina. Wbudowana drukarka Seiko 80 mm.</p><Link href="/produkt/sunmi-t3-pro-max#opis" className={styles.textLink}>Zobacz wersję PRO MAX ↗</Link></div></section>}

      <section className={styles.connect}>
        <p className={styles.eyebrow}>POŁĄCZ WSZYSTKO, CZEGO POTRZEBUJESZ</p><h2>Jedno stanowisko.<br /><span>Twój cały ekosystem.</span></h2>
        <div className={styles.connectGrid}>{[['Wi-Fi 6E', 'Łączność w pasmach 2,4, 5 i 6 GHz.'], ['LAN 1 Gb/s', 'Stałe połączenie z siecią lokalną.'], ['Bluetooth 5.2', 'Bezprzewodowe połączenie z kompatybilnymi urządzeniami.'], ['USB i szuflada', 'Porty do skanera, urządzeń peryferyjnych i szuflady kasowej.']].map(([label, text], i) => <div key={label}><span>0{i + 1}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className={styles.final}><p className={styles.eyebrow}>GOTOWY NA TWOJE STANOWISKO</p><h2>Wybierz swoją wersję<br /><span>SUNMI {name}.</span></h2><p>Android 13 / SUNMI OS. Wariant bez usług Google lub z GMS EDLA. Wybierz PN zgodny z wymaganiami aplikacji.</p><div><a href="#warianty" className={styles.primary}>Przejdź do konfiguracji ↑</a><a href="tel:+48607819688" className={styles.secondary}>Porozmawiajmy o wdrożeniu ↗</a></div></section>
    </div>
  )
}
