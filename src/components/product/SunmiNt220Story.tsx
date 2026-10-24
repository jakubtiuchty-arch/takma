import Image from 'next/image'
import Link from 'next/link'
import shared from './SunmiD3Story.module.css'
import s from './SunmiNt220Story.module.css'

function Photo({ name, alt }: { name: string; alt: string }) {
  return <Image src={'/images/sunmi-nt220/' + name + '.webp'} alt={alt} fill sizes="(max-width: 640px) 100vw, 1200px" quality={95} className={shared.cover} />
}

export default function SunmiNt220Story() {
  return <div className={shared.story + ' ' + s.story}>
    <nav className={shared.nav} aria-label="Poznaj SUNMI NT220"><span>SUNMI <b>NT220</b></span><div><a href="#nt220-print">Druk</a><a href="#nt220-paper">Papier</a><a href="#nt220-connect">Połączenia</a><a href="#warianty">Cena ↗</a></div></nav>
    <section className={s.hero}>
      <div className={s.heroPhoto}><Photo name="p1-bg" alt="SUNMI NT220 w dwóch trybach: z wydrukiem etykiet i paragonu niefiskalnego" /></div>
      <div className={s.heroCopy}><p className={shared.eyebrow}>DRUKARKA ETYKIET I PARAGONÓW 58 mm</p><h2>SUNMI NT220</h2><h3>Etykiety do zamówień.<br />Potwierdzenie dla klienta.</h3><p>Jedna drukarka termiczna do obu zadań.<br />Do kawiarni, sklepu i punktu odbioru zamówień.</p></div>
    </section>
    <div className={shared.facts}>{[['2 tryby','Etykiety i paragony niefiskalne'],['203 dpi','Rozdzielczość druku'],['do 150 mm/s','Prędkość druku'],['510 g','Masa drukarki']].map(([v,l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
    <section id="nt220-print" className={s.print}>
      <div className={shared.head}><p className={shared.eyebrow}>DWA RODZAJE WYDRUKÓW</p><h2>Oznacz zamówienie.<br /><span>Wydrukuj potwierdzenie.</span></h2><p>NT220 drukuje samoprzylepne etykiety oraz paragony niefiskalne. Tryb pracy zmienisz przyciskiem FEED, a treść wydruku przygotujesz w zgodnym programie.</p></div>
      <div className={s.printGrid}>
        <article><div className={s.productPhoto}><Photo name="p6-1-1" alt="SUNMI NT220 drukująca etykiety" /></div><div className={s.cardCopy}><span>ETYKIETY · TSPL</span><h3>Wiadomo, co jest w środku.</h3><p>Oznacz kubek lub opakowanie nazwą produktu, numerem zamówienia i wybranymi dodatkami. Drukarka obsługuje etykiety o szerokości 30–56 mm i długości 30–150 mm.</p></div><div className={s.detailPhoto}><Photo name="p6-1-2" alt="Naklejanie etykiety z zamówieniem na kubek" /></div></article>
        <article><div className={s.productPhoto}><Photo name="p6-2-1" alt="SUNMI NT220 drukująca paragon niefiskalny" /></div><div className={s.cardCopy}><span>PARAGONY NIEFISKALNE · ESC/POS</span><h3>Szczegóły zamówienia na papierze.</h3><p>Drukuj bony, zestawienia zamówień i potwierdzenia sprzedaży na papierze o szerokości 30–58 mm. NT220 jest urządzeniem niefiskalnym.</p></div><div className={s.detailPhoto}><Photo name="p6-2-2" alt="Odbieranie wydruku z SUNMI NT220 przy stanowisku sprzedaży" /></div></article>
      </div>
    </section>
    <section className={s.scene}>
      <div className={shared.head}><p className={shared.eyebrow}>PRZY LADZIE I PRZY WYDAWANIU ZAMÓWIEŃ</p><h2>Mała drukarka.<br /><span>Miejsce na resztę stanowiska.</span></h2><p>Obudowa o wymiarach 148 × 101 × 102 mm mieści się obok terminala POS. Możesz ustawić ją tam, gdzie przygotowujesz napoje, pakujesz zakupy lub wydajesz zamówienia.</p></div>
      <div className={s.scenePhoto}><Photo name="p2-1-3-en" alt="Drukarki SUNMI NT220 na stanowisku przygotowania napojów" /></div>
      <div className={s.scenePhoto}><Photo name="p2-2-3" alt="Kompaktowa drukarka NT220 obok terminala przy ladzie sklepu" /></div>
    </section>
    <section id="nt220-paper" className={s.paper}>
      <div className={shared.head}><p className={shared.eyebrow}>ROLKA O ŚREDNICY DO 80 mm</p><h2>Więcej papieru w środku.<br /><span>Rzadsza wymiana rolki.</span></h2><p>Mimo niewielkiej obudowy NT220 mieści rolkę o średnicy do 80 mm. Prowadnica pozwala dopasować komorę do szerokości materiału.</p></div>
      <div className={s.paperGrid}><div><div className={s.rollPhoto}><Photo name="p3-1" alt="Przekrój SUNMI NT220 z rolką o średnicy 80 mm" /></div><p><strong>Do 80 mm</strong> średnicy rolki</p></div><div><div className={s.rollVideo}><video autoPlay muted loop playsInline preload="auto" poster="/images/sunmi-nt220/p3-2.webp" aria-label="Animacja zmiany szerokości papieru w SUNMI NT220 od 30 do 58 mm"><source src="/images/sunmi-nt220/paper-width.mp4" type="video/mp4" /></video></div><p><strong>30–58 mm</strong> szerokości papieru</p></div></div>
      <p className={s.note}>Czujnik przerwy wykrywa odstępy między etykietami. Drukarka ma też czujnik braku papieru i czujnik temperatury głowicy.</p>
    </section>
    <section className={s.thermal}><div className={shared.head}><p className={shared.eyebrow}>DRUK TERMICZNY BEZPOŚREDNI</p><h2>Bez tuszu.<br /><span>Bez taśmy barwiącej.</span></h2><p>Do druku potrzebujesz papieru lub etykiet termicznych. Rozdzielczość 203 dpi pozwala drukować tekst, kody kreskowe 1D i kody QR.</p></div><div className={s.thermalPhoto}><Photo name="p5-bg" alt="Wydruk z SUNMI NT220 podczas obsługi zamówienia przy ladzie" /></div></section>
    <section id="nt220-connect" className={s.connect}>
      <div className={shared.head}><p className={shared.eyebrow}>USB-C I BLUETOOTH BLE 5.0</p><h2>Połącz z komputerem,<br /><span>tabletem lub telefonem.</span></h2><p>Wybierz przewód USB lub połączenie Bluetooth. Przed zakupem sprawdź, czy Twój program obsługuje NT220 oraz wybrany tryb druku: ESC/POS albo TSPL.</p></div>
      <div className={s.connectPhoto}><Photo name="p7-1" alt="SUNMI NT220 połączona ze stanowiskiem sprzedaży SUNMI" /></div>
      <div className={s.connections}>{[['USB-C','Przesyłanie wydruków i zasilanie przez złącze USB-C.'],['Bluetooth BLE 5.0','Druk bez przewodu do transmisji danych. Drukarka nadal wymaga zasilania.'],['Windows · Android · iOS · Linux','Obsługa zależy od zgodności sterownika lub aplikacji.'],['RJ12','Port 24 V / 1 A do podłączenia zgodnej szuflady kasowej.']].map(([title,text])=><div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      <p className={s.note}>NT220 nie ma Wi-Fi ani Ethernetu.</p>
    </section>
    <section className={s.setup}><div><p className={shared.eyebrow}>PRZYGOTUJ STANOWISKO DO PRACY</p><h2>Co jest w zestawie?<br /><span>Co dobrać osobno?</span></h2><p>W kartonie znajdziesz drukarkę, przewód USB, prowadnicę papieru i skróconą instrukcję.</p></div><div className={s.setupCard}><h3>Zasilanie i materiały</h3><p>NT220 wymaga zasilania 5 V / 2 A przez USB-C. Zasilacz nie jest dołączony do zestawu. Dobierz też papier lub etykiety termiczne do planowanych wydruków.</p><Link href="/produkt/sunmi-c06000022">Zobacz szufladę kasową SUNMI Mini ↗</Link></div></section>
    <section className={shared.final}><p className={shared.eyebrow}>SUNMI NT220 · C04060001</p><h2>Etykiety i potwierdzenia.<br /><span>W jednej drukarce.</span></h2><p>Sprawdź cenę i dostępność lub zapytaj nas o współpracę NT220 z Twoim programem.</p><div><a href="#warianty">Cena i dostępność ↑</a><a href="#video">Zobacz pierwsze uruchomienie ↓</a></div></section>
  </div>
}
