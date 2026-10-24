import Image from 'next/image'
import Link from 'next/link'
import shared from './SunmiD3Story.module.css'
import s from './ProgloveMark2Story.module.css'
import { Mark2Ranges } from './ProgloveMark2Media'
import { ProductMotion } from './ProductMotion'

const root = '/images/proglove-mark-2-landing/'
function Photo({ name, alt }: { name: string; alt: string }) {
  return <Image src={root + name + '.webp'} alt={alt} fill sizes="(max-width:640px) 100vw, 1200px" quality={95} />
}

export default function ProgloveMark2Story() {
  return <div className={shared.story + ' ' + s.story}>
    <nav className={shared.nav} aria-label="Poznaj ProGlove MARK 2"><span>ProGlove <b>MARK 2</b></span><div><a href="#mark2-work">Praca</a><a href="#mark2-ranges">Zasięg</a><a href="#mark2-connect">Połączenie</a><a href="#mark2-kit">Dobór zestawu</a></div></nav>
    <section className={s.hero}>
      <div className={s.heroCopy}><p className={shared.eyebrow}>SKANER KODÓW NOSZONY NA DŁONI</p><h2>ProGlove<br /><span>MARK 2</span></h2><h3>Skanuj kody.<br />Miej wolne dłonie.</h3><p>Skaner na grzbiecie dłoni pozwala odczytywać etykiety podczas przenoszenia produktów. Nie musisz za każdym razem odkładać i podnosić skanera ręcznego.</p><a href="#mark2-work">Zobacz, jak pracuje ↓</a></div>
      <div className={s.heroProduct}><span className={s.halo} aria-hidden="true" /><Photo name="hero" alt="Oryginalny pomarańczowy skaner ProGlove MARK 2 Standard Range" /><div className={s.productSize}><strong>40 g</strong><span>50 × 45 × 16 mm</span></div></div>
    </section>
    <div className={shared.facts + ' ' + s.facts}>{[['1D i 2D', 'Kody kreskowe i QR'], ['ok. 12 000', 'Skanów na ładowaniu'], ['IP54', 'Klasa ochrony obudowy'], ['od −20°C', 'Temperatura pracy skanera']].map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
    <section id="mark2-work" className={s.work}>
      <div className={shared.head}><p className={shared.eyebrow}>ODCZYT BEZ ODKŁADANIA SKANERA</p><h2>Sięgnij po produkt.<br /><span>Zeskanuj etykietę.</span></h2><p>MARK 2 mocujesz na opasce albo innym zgodnym mocowaniu ProGlove. Spust masz pod palcem, a dłoń pozostaje gotowa do chwytania.</p></div>
      <div className={s.workPhoto}><Photo name="in-use" alt="MARK 2 na dłoni pracownika podczas skanowania etykiety paczki" /></div>
      <div className={s.workflow}>{[['01', 'Załóż mocowanie.', 'Dobierz prawą lub lewą rękę i rozmiar dopasowany do pracownika.'], ['02', 'Wskaż kod i naciśnij spust.', 'Skaner uruchamiasz przyciskiem w mocowaniu ProGlove.'], ['03', 'Sprawdź potwierdzenie.', 'Światło, dźwięk i wibracja sygnalizują odczyt.']].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className={s.feedback}>
      <div className={s.wearPhoto}><Photo name="wear-3" alt="ProGlove MARK 2 w opasce Hand Strap na grzbiecie dłoni" /></div>
      <div className={s.feedbackCopy}><p className={shared.eyebrow}>POTWIERDZENIE PRZY KAŻDYM ODCZYCIE</p><h2>Zobacz.<br />Usłysz.<br /><span>Poczuj wibrację.</span></h2><p>Sygnały skanera pomagają rozpoznać odczyt bez spoglądania na terminal po każdej etykiecie. Dostępne komunikaty zależą od konfiguracji i integracji.</p><div className={s.feedbackSignals}><span>Światło</span><span>Dźwięk</span><span>Wibracja</span></div></div>
    </section>
    <section id="mark2-ranges" className={s.ranges}>
      <div className={shared.head}><p className={shared.eyebrow}>STANDARD RANGE LUB MID RANGE</p><h2>Dwa warianty.<br /><span>Dobierz odległość odczytu.</span></h2><p>Wybierz skaner do etykiet, z którymi pracujesz. Inne warunki panują przy montażu drobnych części, a inne podczas kompletacji paczek.</p></div>
      <div className={s.variantsPhoto}><Photo name="variants" alt="Dwie oryginalne wersje ProGlove MARK 2: Standard Range i Mid Range" /></div><Mark2Ranges />
    </section>
    <section className={s.durability}>
      <div className={shared.head}><p className={shared.eyebrow}>DO MAGAZYNU I NA PRODUKCJĘ</p><h2>Mały skaner.<br /><span>Obudowa do codziennej pracy.</span></h2><p>MARK 2 pracuje w temperaturze od −20 do +50°C. Obudowa ma klasę IP54 i wytrzymuje wielokrotne upadki z 2 m na beton.</p></div>
      <div className={s.durabilityGrid}><div className={s.wearDetail}><Photo name="wear-4" alt="MARK 2 w opasce na dłoni — niewielki profil skanera" /></div><div className={s.durabilityFacts}>{[['16 mm', 'Grubość obudowy'], ['2 m', 'Wysokość testowanych upadków'], ['2 h', 'Ładowanie w stacji ProGlove'], ['670 mAh', 'Pojemność akumulatora']].map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></div>
      <p className={s.note}>Liczba skanów zależy od ustawień i warunków pracy. Ładowanie odbywa się w temperaturze od +5 do +40°C. Do chłodni dobierz także odpowiednie mocowanie.</p>
    </section>
    <section id="mark2-connect" className={s.connect}>
      <div className={s.connectCopy}><p className={shared.eyebrow}>DANE ZE SKANERA DO TWOJEGO SYSTEMU</p><h2>Połącz skaner.<br /><span>Przesyłaj odczytane kody.</span></h2><p>MARK 2 łączy się przez Bluetooth Low Energy z Androidem lub iOS. W trybie HID przekazuje kody podobnie jak klawiatura. Rozbudowana obsługa wymaga aplikacji INSIGHT Mobile lub SDK.</p><p>Do połączenia z komputerem przez USB dobierz ProGlove Gateway. Bramkę kupujesz osobno.</p><Link href="/produkt/proglove-x001-a007">Zobacz ProGlove Gateway ↗</Link></div><div className={s.connectionMedia}><ProductMotion src={root + 'connect.mp4'} poster={root + 'connect.webp'} label="Parowanie urządzeń ProGlove przez skanowanie kodu" /></div>
    </section>
    <section id="mark2-kit" className={s.kit}>
      <div className={shared.head}><p className={shared.eyebrow}>SKOMPLETUJ STANOWISKO</p><h2>Do pracy potrzebujesz<br /><span>mocowania i ładowarki.</span></h2><p>W zestawie jest skaner. Wybierz jedno mocowanie i jedną stację ładującą. Oba elementy są sprzedawane osobno — dokup tylko to, czego jeszcze nie masz.</p></div>
      <div className={s.kitGrid}><article><span>01 / MOCOWANIE — WYBIERZ JEDNO</span><h3>Na dłoń lub na smycz.</h3><p>Hand Strap to opaska na grzbiet dłoni. Index Trigger ma spust przy palcu. Reel pozwala nosić skaner na zwijanej lince.</p><div><Link href="/produkt/proglove-g011-mix-3">Hand Strap · zestaw 3 szt. ↗</Link><Link href="/produkt/proglove-g006-mr-3">Index Trigger · prawa dłoń, M ↗</Link><Link href="/produkt/proglove-g008-ly-2">Reel ze smyczami · 2 szt. ↗</Link></div><p className={s.kitNote}>Index Trigger pracuje od −5°C. Do niższych temperatur wybierz Hand Strap lub Reel.</p></article><article><span>02 / STACJA ŁADUJĄCA — WYBIERZ JEDNĄ</span><h3>Dwa lub dziesięć stanowisk.</h3><p>Mała stacja ładuje dwa skanery. Do większego zespołu możesz wybrać stację z dziesięcioma gniazdami.</p><div><Link href="/produkt/proglove-c006-eu">Stacja 2-gniazdowa z zasilaczem EU ↗</Link><Link href="/produkt/proglove-c007-int">Stacja 10-gniazdowa z zasilaczem ↗</Link></div></article></div>
    </section>
    <section className={shared.final + ' ' + s.final}><p className={shared.eyebrow}>PROGLOVE MARK 2 W TWOIM PROCESIE</p><h2>Dobierz skaner<br /><span>do rzeczywistych etykiet.</span></h2><p>Podaj rodzaj i wielkość kodów, odległość odczytu oraz używany system. Pomożemy dobrać wersję MARK 2 i potrzebne wyposażenie.</p><div><a href="#warianty">Wersje i ceny ↑</a><a href="#akcesoria">Mocowania i stacje ↓</a></div></section>
  </div>
}
