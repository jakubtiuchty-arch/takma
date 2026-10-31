import Image from 'next/image'
import Link from 'next/link'
import s from './SatoCl4SxrStory.module.css'
import hero from './SatoCl6SxrHero.module.css'

export default function SatoCl6SxrStory() {
  return <div className={`${s.story} ${hero.story}`}>
    <nav className={s.nav} aria-label="Poznaj SATO CL6-SXR"><strong>SATO <span>CL6-SXR</span></strong><div><a href="#cl6-width">Szerokie etykiety</a><a href="#cl6-display">Obsługa</a><a href="#cl6-care">Integracja</a></div></nav>
    <section className={`${s.hero} ${hero.hero}`}>
      <div className={s.heroCopy}><p className={s.eyebrow}>DRUK PRZEMYSŁOWY W SZERSZYM FORMACIE</p><h2>Nadruk do 167,5 mm<br/>na kartonach i paletach.</h2><p className={s.model}>CL6-SXR</p><p>Etykiety na kartony, palety i duże opakowania.<br/>Szeroki nadruk. Czytelne dane logistyczne.</p><a href="#cl6-width" className={s.arrow}>Więcej o drukarce <span>↓</span></a></div>

      <div className={s.heroFooter}><span>Do 167,5 mm w trybie rozszerzonym</span><span>203 · 305 dpi</span><span>SATO AEP · SOS</span></div>
    </section>
    <section id="cl6-width" className={s.speed}>
      <div className={s.title}><p className={s.eyebrow}>KARTONY · PALETY · PRODUKCJA</p><h2>Szeroki nadruk.<br/><span>Do 355,6 mm/s.</span></h2><p>Kody, dane produktu i oznaczenia logistyczne mieszczą się na jednej etykiecie. CL6-SXR obsługuje materiał o szerokości 47–177 mm bez podkładu.</p></div>
      <div className={s.speedPanel}><div className={s.photo}><Image src="/images/products/sato-cl6-sxr-rfid-final.webp" alt="CL6-SXR z szeroką etykietą — widok mechanizmu drukującego" fill sizes="(max-width:640px) 90vw, 600px" quality={95}/></div><div className={s.speedCopy}><span className={s.overline}>DO</span><strong>14<span>cali/s</span></strong><p className={s.blue}>355,6 mm/s przy 203 i 305 dpi</p><p>Taśma barwiąca do 600 m i rolka etykiet do 220 mm pozwalają drukować długie serie bez częstego uzupełniania materiałów.</p><small>Prędkość zależy od materiału, danych i ustawień druku.</small></div></div>
      <div className={s.details}>{[
        ['01', '152 mm', 'Standardowa szerokość nadruku przy 203 dpi.'],
        ['02', '165,3 mm', 'Standardowa szerokość nadruku przy 305 dpi.'],
        ['03', '167,5 mm', 'Maksymalna szerokość w trybie rozszerzonym przy obu rozdzielczościach.'],
        ['04', '600 m taśmy', 'Mniej przerw na wymianę materiałów podczas drukowania długich serii.'],
      ].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
      <div className={s.precision}><div><strong>±0,3<span> mm</span></strong><h3>Tryb wysokiej precyzji.</h3></div><div><p>Tryb wysokiej precyzji wspiera powtarzalne pozycjonowanie tekstów, kodów i grafiki. Prowadnice oraz czujniki pomagają utrzymać materiał we właściwym położeniu.</p><small>Dokładność podana przez producenta dotyczy określonych materiałów i warunków pracy. Rzeczywisty wynik wymaga sprawdzenia dla używanej etykiety.</small></div></div>
    </section>
    <section id="cl6-display" className={s.display}>
      <div className={s.displayPhoto}><div className={s.photo}><Image src="/images/sato-cl4-sxr/display.webp" alt="Wspólny dla serii CL-SXR kolorowy panel dotykowy 4,3 cala" fill sizes="(max-width:640px) 90vw, 600px" quality={95}/></div><span>4,3″<small>kolorowy ekran dotykowy</small></span></div>
      <div className={s.displayCopy}><p className={s.eyebrow}>KONTROLA NA STANOWISKU</p><h2>Ekran dotykowy 4,3 cala<br/>z podglądem etykiety.</h2><div className={s.displayFeatures}><article><h3>Podgląd przed wydrukiem.</h3><p>Ekran pokazuje układ etykiety przed drukiem. Błąd w treści widać przed rozpoczęciem serii.</p></article><article><h3>Obsługa w rękawicach.</h3><p>Rezystancyjny ekran dotykowy reaguje także podczas pracy w rękawicach roboczych.</p></article><article><h3>Własny układ skrótów.</h3><p>Ekran można dopasować do czynności operatora. Instrukcje ekranowe i głośnik pomagają w obsłudze.</p></article></div></div>
    </section>
    <section id="cl6-care" className={s.care}>
      <div className={s.title}><p className={s.eyebrow}>OD STANOWISKA DO CAŁEJ FLOTY</p><h2>Łączność i emulacje<br/><span>języków drukarek.</span></h2><p>USB, Gigabit Ethernet, RS-232C i port EXT pozwalają połączyć CL6-SXR z urządzeniami stanowiska. Emulacja SZPL pozwala drukować etykiety przygotowane w języku ZPL.</p></div>
      <div className={s.careGrid}><article><span className={s.serviceBadge}>AEP</span><h3>Druk bez stałego połączenia z PC.</h3><p>Aplikacja SATO AEP działa bezpośrednio na drukarce. Może korzystać z danych wprowadzanych przez skaner i inne urządzenia peryferyjne.</p><small>Aplikacja i integracja wymagają przygotowania do konkretnego procesu.</small></article><article><span className={s.serviceBadge}>SOS</span><h3>Konserwacja planowana z SOS.</h3><p>SATO Online Services wspiera zdalny monitoring i analizę danych operacyjnych. Informacje o zużyciu pomagają zaplanować konserwację.</p><small>Usługa wymaga konfiguracji i połączenia z siecią. Funkcje predykcyjne nie gwarantują wykrycia każdej usterki.</small></article></div>
      <div className={s.title}><h3>Wyposażenie dodatkowe.</h3><p>Opcjonalny obcinak, odklejak i moduł UHF RFID dobiera się do materiału oraz sposobu pracy. Łączność Wi-Fi i Bluetooth wymaga odpowiedniego wyposażenia.</p></div>
    </section>
    <section className={s.eco}><div><p className={s.eyebrow}>MNIEJ STRAT PRZY ZMIANIE ROLKI</p><h2>Druk od pierwszej<br/>etykiety na rolce.</h2><p>Czujnik wykrywa pierwszą etykietę po założeniu materiału. Drukarka może przywrócić jej położenie i ograniczyć liczbę pustych etykiet.</p><small>Działanie zależy od materiału i ustawień.</small><div className={s.ecoFact}><strong>≈34%</strong><span>elementów z tworzywa sztucznego<br/>pochodzi z recyklingu</span></div></div></section>
    <section className={s.final}><p className={s.eyebrow}>DOBÓR KONFIGURACJI</p><h2>Konfiguracja<br/>pod materiał i proces.</h2><p>Rozdzielczość dobiera się do wielkości kodów i tekstu na etykiecie. Materiał, taśmę i sposób odbioru etykiet dobiera się do stanowiska.</p><div><a href="#warianty">Warianty i ceny ↑</a><a href="#akcesoria">Akcesoria ↓</a><Link href="/datasheets/sato-cl-sxr-brochure-pl.pdf" target="_blank">Broszura SATO (PL) ↗</Link></div></section>
  </div>
}
