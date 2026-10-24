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
      <div className={s.heroCopy}><p className={shared.eyebrow}>DRUKARKA ETYKIET I PARAGONÓW 58 mm</p><h2>SUNMI NT220</h2><h3>Drukuj etykiety<br />i potwierdzenia zamówień.</h3><p>Kompaktowa drukarka termiczna do sklepu i kawiarni.<br />Do oznaczania opakowań i druku paragonów niefiskalnych.</p></div>
    </section>
    <div className={shared.facts}>{[['2 tryby','Etykiety i paragony niefiskalne'],['203 dpi','Rozdzielczość druku'],['do 150 mm/s','Prędkość druku'],['510 g','Masa drukarki']].map(([v,l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
    <section id="nt220-print" className={s.print}>
      <div className={shared.head}><p className={shared.eyebrow}>DWA RODZAJE WYDRUKÓW</p><h2>Etykiety na opakowania.<br /><span>Potwierdzenia dla klientów.</span></h2><p>Wydrukuj etykietę na kubek lub opakowanie, a także potwierdzenie zamówienia dla klienta. Treść przygotujesz w programie obsługującym NT220. Tryb druku zmienisz przyciskiem FEED.</p></div>
      <div className={s.printGrid}>
        <article><div className={s.productPhoto}><video autoPlay muted loop playsInline preload="auto" poster="/images/sunmi-nt220/p6-1-1.webp" aria-label="Animacja drukowania etykiety przez SUNMI NT220"><source src="/images/sunmi-nt220/label-print.mp4" type="video/mp4" /></video></div><div className={s.cardCopy}><span>ETYKIETY · TSPL</span><h3>Oznacz kubki i opakowania.</h3><p>Na etykiecie umieść nazwę produktu, numer zamówienia lub wybrane dodatki. Naklej ją na kubek albo opakowanie na wynos. NT220 drukuje etykiety o szerokości 30–56 mm i długości 30–150 mm.</p></div><div className={s.detailPhoto}><Photo name="p6-1-2" alt="Naklejanie etykiety z zamówieniem na kubek" /></div></article>
        <article><div className={s.productPhoto}><video autoPlay muted loop playsInline preload="auto" poster="/images/sunmi-nt220/p6-2-1.webp" aria-label="Animacja drukowania paragonu niefiskalnego przez SUNMI NT220"><source src="/images/sunmi-nt220/receipt-print.mp4" type="video/mp4" /></video></div><div className={s.cardCopy}><span>PARAGONY NIEFISKALNE · ESC/POS</span><h3>Wydrukuj zamówienie lub rachunek.</h3><p>Drukuj listy zamówionych produktów, bony i potwierdzenia sprzedaży na papierze o szerokości 30–58 mm. NT220 nie wystawia paragonów fiskalnych — do tego potrzebujesz kasy lub drukarki fiskalnej.</p></div><div className={s.detailPhoto}><Photo name="p6-2-2" alt="Odbieranie wydruku z SUNMI NT220 przy stanowisku sprzedaży" /></div></article>
      </div>
    </section>
    <section className={s.scene}>
      <div className={shared.head}><p className={shared.eyebrow}>PRZY LADZIE I PRZY WYDAWANIU ZAMÓWIEŃ</p><h2>Zajmuje niewiele miejsca<br /><span>na ladzie.</span></h2><p>NT220 ma wymiary 148 × 101 × 102 mm. Ustaw ją obok komputera kasowego albo przy miejscu pakowania zakupów. Wydruki będziesz mieć pod ręką podczas obsługi klienta.</p></div>
      <div className={s.scenePhoto}><Photo name="p2-1-3-en" alt="Drukarki SUNMI NT220 na stanowisku przygotowania napojów" /></div>
      <div className={s.scenePhoto}><Photo name="p2-2-3" alt="Kompaktowa drukarka NT220 obok terminala przy ladzie sklepu" /></div>
    </section>
    <section id="nt220-paper" className={s.paper}>
      <div className={shared.head}><p className={shared.eyebrow}>ROLKA O ŚREDNICY DO 80 mm</p><h2>Większa rolka papieru.<br /><span>Mniej przerw na wymianę.</span></h2><p>W drukarce zmieścisz rolkę o średnicy do 80 mm. Szerokość papieru może wynosić od 30 do 58 mm. Dołączona prowadnica utrzymuje węższą rolkę we właściwym położeniu.</p></div>
      <div className={s.paperGrid}><div><div className={s.rollPhoto}><Photo name="p3-1" alt="Przekrój SUNMI NT220 z rolką o średnicy 80 mm" /></div><p><strong>Do 80 mm</strong> średnicy rolki</p></div><div><div className={s.rollVideo}><video autoPlay muted loop playsInline preload="auto" poster="/images/sunmi-nt220/p3-2.webp" aria-label="Animacja zmiany szerokości papieru w SUNMI NT220 od 30 do 58 mm"><source src="/images/sunmi-nt220/paper-width.mp4" type="video/mp4" /></video></div><p><strong>30–58 mm</strong> szerokości papieru</p></div></div>
      <p className={s.note}>Czujnik wykrywa odstępy między etykietami, aby druk zaczynał się we właściwym miejscu. Pozostałe czujniki kontrolują brak papieru i temperaturę głowicy.</p>
    </section>
    <section className={s.thermal}><div className={shared.head}><p className={shared.eyebrow}>DRUK NA PAPIERZE TERMICZNYM</p><h2>Nie wymieniasz tuszu<br /><span>ani tonera.</span></h2><p>NT220 drukuje przez podgrzewanie papieru termicznego. Nie potrzebuje tuszu, tonera ani taśmy barwiącej. Drukuje tekst, kody kreskowe 1D i kody QR w rozdzielczości 203 dpi.</p></div><div className={s.thermalPhoto}><Photo name="p5-bg" alt="Wydruk z SUNMI NT220 podczas obsługi zamówienia przy ladzie" /></div></section>
    <section id="nt220-connect" className={s.connect}>
      <div className={shared.head}><p className={shared.eyebrow}>USB-C I BLUETOOTH BLE 5.0</p><h2>Drukuj z komputera,<br /><span>tabletu lub telefonu.</span></h2><p>Podłącz drukarkę przewodem USB lub przez Bluetooth. Twój program musi obsługiwać NT220 oraz polecenia ESC/POS do paragonów niefiskalnych lub TSPL do etykiet.</p></div>
      <div className={s.connectPhoto}><Photo name="p7-1" alt="SUNMI NT220 połączona ze stanowiskiem sprzedaży SUNMI" /></div>
      <div className={s.connections}>{[['USB-C','Złącze do połączenia przewodowego i zasilania drukarki.'],['Bluetooth BLE 5.0','Wysyłaj wydruki bezprzewodowo. Drukarka musi być podłączona do zasilania.'],['Windows · Android · iOS · Linux','Drukowanie wymaga sterownika lub aplikacji obsługującej NT220.'],['RJ12','Podłącz zgodną szufladę kasową do portu RJ12 (24 V / 1 A).']].map(([title,text])=><div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      <p className={s.note}>NT220 nie ma Wi-Fi ani Ethernetu.</p>
    </section>
    <section className={s.setup}><div><p className={shared.eyebrow}>PRZYGOTUJ STANOWISKO DO PRACY</p><h2>Co otrzymujesz w zestawie?<br /><span>Co dokupić?</span></h2><p>W kartonie znajdziesz drukarkę, przewód USB, prowadnicę papieru i skróconą instrukcję.</p></div><div className={s.setupCard}><h3>Zasilacz i papier</h3><p>Do pracy potrzebujesz zasilacza 5 V / 2 A podłączanego przez USB-C. Nie ma go w zestawie. Osobno dobierz papier termiczny do paragonów lub etykiety termiczne.</p><Link href="/produkt/sunmi-c06000022">Zobacz szufladę kasową SUNMI Mini ↗</Link></div></section>
    <section className={shared.final}><p className={shared.eyebrow}>SUNMI NT220 · C04060001</p><h2>Potrzebujesz drukarki<br /><span>do swojego punktu sprzedaży?</span></h2><p>Sprawdź cenę i dostępność NT220. Jeśli nie wiesz, czy będzie działać z Twoim programem, skontaktuj się z nami.</p><div><a href="#warianty">Cena i dostępność ↑</a><a href="#video">Zobacz pierwsze uruchomienie ↓</a></div></section>
  </div>
}
