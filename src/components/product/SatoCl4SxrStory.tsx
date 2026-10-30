import Image from 'next/image'
import Link from 'next/link'
import s from './SatoCl4SxrStory.module.css'
const root = '/images/sato-cl4-sxr/'
function Photo({ name, alt, className = '' }: { name: string; alt: string; className?: string }) {
  return <div className={`${s.photo} ${className}`}><Image src={root + name + '.webp'} alt={alt} fill sizes="(max-width: 640px) 92vw, 600px" quality={95} /></div>
}
export default function SatoCl4SxrStory() {
  return <div className={`${s.story} ${s.cl4Typography}`}>
    <nav className={s.nav} aria-label="Poznaj SATO CL4-SXR"><strong>SATO <span>CL4-SXR</span></strong><div><a href="#sxr-speed">Wydajność</a><a href="#sxr-design">Konstrukcja</a><a href="#sxr-display">Obsługa</a><a href="#sxr-care">Konserwacja</a></div></nav>
    <section className={s.hero}>
      <div className={s.heroCopy}><p className={s.eyebrow}>DRUK PRZEMYSŁOWY NOWEJ GENERACJI</p><h2>Etykiety 104 mm<br/>do 457 mm/s.</h2><p className={s.model}>CL4-SXR</p><p>Precyzyjne etykiety. Szybka realizacja zleceń.<br/>Kontrola procesu na każdym stanowisku.</p><a href="#sxr-speed" className={s.arrow}>Więcej o drukarce <span>↓</span></a></div>
      <div className={s.heroProduct}><Image src="/images/products/sato-cl4-sxr.webp" alt="SATO CL4-SXR — przemysłowa drukarka etykiet" fill sizes="(max-width:640px) 90vw, 650px" quality={95}/></div>
      <div className={s.heroFooter}><span>104 mm szerokości nadruku</span><span>203 · 305 · 609 dpi</span><span>SATO AEP · SOS</span></div>
    </section>
    <section id="sxr-speed" className={s.speed}>
      <div className={s.title}><p className={s.eyebrow}>WYSOKA PRĘDKOŚĆ I PRECYZJA</p><h2>Druk do 457,2 mm/s.<br/><span>Dokładność do ±0,3 mm.</span></h2></div>
      <div className={s.speedPanel}><Photo name="printing" alt="CL4-SXR podczas szybkiego drukowania etykiet"/><div className={s.speedCopy}><span className={s.overline}>DO</span><strong>18<span>cali/s</span></strong><p className={s.blue}>457,2 mm/s przy 203 dpi</p><p>Mechanizm drukujący zaprojektowany do wysokonakładowego etykietowania produktów, opakowań i przesyłek.</p><small>Prędkość zależy od rozdzielczości, materiału i ustawień druku.</small></div></div>
      <div className={s.precision}><div><strong>±0,3<span> mm</span></strong><h3>Tryb wysokiej precyzji i czujnik GAP2.</h3></div><div><p>Tryb wysokiej precyzji i dodatkowy czujnik GAP2 pomagają utrzymać położenie nadruku. To ma znaczenie przy małych etykietach i powtarzalnych oznaczeniach.</p><small>Dokładność uzyskana w testach producenta na wybranych materiałach. Rzeczywisty wynik zależy od etykiet i warunków pracy.</small></div></div>
    </section>
    <section id="sxr-design" className={s.design}>
      <div className={s.title}><p className={s.eyebrow}>PROJEKTOWANIE I REALIZACJA</p><h2>Aluminiowa konstrukcja<br/><span>i dostępny tor materiału.</span></h2><p>Okno boczne jest o 17% większe.<br/>Niebieskie elementy wskazują miejsca obsługi.</p></div>
      <div className={s.machinePair}><Photo name="closed" alt="SATO CL4-SXR — zamknięta obudowa z oknem kontroli rolki"/><Photo name="open" alt="Otwarta CL4-SXR — dostęp do głowicy, taśmy i prowadnic"/></div>
      <div className={s.details}>{[
        ['01','Rolka widoczna z boku','Większe okno ułatwia sprawdzenie, ile materiału zostało w drukarce.'],
        ['02','Materiał prowadzony stabilnie','Mechanizm tłumienia naprężenia ogranicza cofanie etykiety i pomaga zachować pozycję nadruku.'],
        ['03','Prowadnice pozostają na miejscu','Blokada prowadnic ogranicza przesuwanie materiału podczas drukowania.'],
        ['04','Obsługa bez szukania','Elementy dostępne dla operatora mają wspólny niebieski kolor.']
      ].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </section>
    <section id="sxr-display" className={s.display}>
      <div className={s.displayPhoto}><Photo name="display" alt="Kolorowy panel dotykowy SATO CL4-SXR"/><span>4,3″<small>kolorowy ekran dotykowy</small></span></div>
      <div className={s.displayCopy}><p className={s.eyebrow}>INTERFEJS UŻYTKOWNIKA</p><h2>Ekran dotykowy 4,3 cala<br/>z podglądem etykiety.</h2><div className={s.displayFeatures}><article><h3>Dotyk także w rękawicach.</h3><p>Rezystancyjny panel pozwala obsługiwać drukarkę bez zdejmowania rękawic roboczych.</p></article><article><h3>Podgląd przed drukiem.</h3><p>Ekran pokazuje układ etykiety przed drukiem. Błąd w treści widać przed zużyciem materiału.</p></article><article><h3>Układ ekranu dla stanowiska.</h3><p>Skróty, widżety i komunikaty można dopasować do zadań na stanowisku.</p></article><article><h3>Wskazówki na miejscu.</h3><p>Instrukcje ekranowe i wbudowany głośnik pomagają przejść przez obsługę oraz usuwanie błędów.</p></article></div></div>
    </section>
    <section id="sxr-care" className={s.care}>
      <div className={s.title}><p className={s.eyebrow}>OD PROFILAKTYKI DO PROGNOZOWANIA</p><h2>Konserwacja planowana<br/><span>na podstawie danych z drukarki.</span></h2><p>SATO Online Services analizuje dane operacyjne i wspiera przewidywanie zużycia głowicy. Operator otrzymuje informacje potrzebne do zaplanowania obsługi.</p></div>
      <div className={s.careGrid}><article><span className={s.serviceBadge}>SOS</span><h3>Stan urządzeń w jednym miejscu.</h3><p>Zdalny monitoring pomaga wykrywać oznaki zużycia i reagować na problemy. Dostęp do usług wymaga konfiguracji oraz połączenia z siecią.</p><small>Funkcje predykcyjne nie gwarantują wykrycia wszystkich usterek ani uniknięcia każdego przestoju.</small></article><article><span className={s.serviceBadge}>AEP</span><h3>Aplikacja bezpośrednio na drukarce.</h3><p>SATO AEP pozwala drukować bez stałego połączenia z komputerem. Proces może korzystać ze skanera i innych urządzeń peryferyjnych.</p><small>Aplikację i integrację przygotowuje się do konkretnego zadania. SATO App Storage wspiera zarządzanie aplikacjami we flocie.</small></article></div>
      <div className={s.maintenance}><Photo name="open" alt="Dostęp do elementów eksploatacyjnych CL4-SXR"/><div><p className={s.eyebrow}>PROSTA OBSŁUGA SERWISOWA</p><h3>Głowica i wałek.<br/>Dostęp bez zbędnych narzędzi.</h3><p>Szeroko otwierana pokrywa ułatwia wymianę materiałów oraz części eksploatacyjnych. Zdalny pulpit pozwala sprawdzić ustawienia bez podchodzenia do drukarki.</p></div></div>
    </section>
    <section className={s.eco}><div><p className={s.eyebrow}>MNIEJ STRAT MATERIAŁU</p><h2>Druk od pierwszej<br/>etykiety na rolce.</h2><p>Czujnik wykrywa krawędź pierwszej etykiety po założeniu rolki. Drukarka może przywrócić jej położenie i ograniczyć zużycie pustych etykiet.</p><small>Działanie funkcji zależy od materiału i warunków użytkowania.</small><div className={s.ecoFact}><strong>≈34%</strong><span>elementów z tworzywa sztucznego<br/>pochodzi z recyklingu</span></div></div></section>
    <section className={s.final}><p className={s.eyebrow}>DOBÓR KONFIGURACJI</p><h2>Konfiguracja<br/>pod materiał i proces.</h2><p>Rozdzielczość dobiera się do wielkości kodów i tekstu na etykiecie. Obcinak, odklejak i moduły RFID są wyposażeniem dodatkowym.</p><div><a href="#warianty">Warianty i ceny ↑</a><a href="#akcesoria">Akcesoria ↓</a><Link href="/datasheets/sato-cl-sxr-brochure-pl.pdf" target="_blank">Broszura SATO (PL) ↗</Link></div></section>
  </div>
}
