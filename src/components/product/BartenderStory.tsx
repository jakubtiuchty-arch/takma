import Image from 'next/image'
import Link from 'next/link'
import shared from './SunmiD3Story.module.css'
import s from './BartenderStory.module.css'
import { ProductMotion } from './ProductMotion'
import { BartenderScreens } from './BartenderScreens'
import { bartenderStories, type BartenderEdition } from './BartenderStoryContent'

const root = '/images/bartender-landing/'
export default function BartenderStory({ edition }: { edition: BartenderEdition }) {
  const c = bartenderStories[edition]
  const id = `bt-${edition}`
  const isCloud = edition === 'cloud'
  return <div className={`${shared.story} ${s.story}`}>
    <nav className={shared.nav} aria-label={`Poznaj BarTender ${c.name}`}><span>BarTender <b>{c.name}</b></span><div><a href={`#${id}-work`}>Możliwości</a><a href={`#${id}-screens`}>Zobacz program</a><a href={`#${id}-process`}>Sposób pracy</a><a href={`#${id}-license`}>Licencja</a></div></nav>
    <section className={s.hero}>
      <div className={s.heroCopy}><p className={shared.eyebrow}>{c.eyebrow}</p><h2>BarTender<br /><span>{c.name}</span></h2><h3>{c.line}</h3><p>{c.intro}</p><a href={`#${id}-work`}>Poznaj możliwości <span aria-hidden="true">↓</span></a></div>
      <div className={s.heroMedia}><Image src={`/images/products/bartender-${edition}-box.png`} alt={`BarTender ${c.name} — wizualizacja licencji oprogramowania`} fill sizes="(max-width: 640px) 90vw, 550px" quality={90} /><span>Licencja elektroniczna · kod e-mailem</span></div>
    </section>
    <div className={`${shared.facts} ${s.facts}`}>{c.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <section id={`${id}-work`} className={s.capabilities}>
      <div className={s.split}><div className={s.sectionCopy}><p className={shared.eyebrow}>{isCloud ? 'ETYKIETY DOSTĘPNE DLA ZESPOŁU' : 'PROJEKT, DANE I DRUK'}</p><h2>{c.heading}</h2><p>{c.text}</p></div><div className={s.motion}><ProductMotion src={`${root}${c.motion}.mp4`} poster={`${root}${c.motion}-poster.jpg`} label={`BarTender ${c.name} — ${c.motion === 'design' ? 'projektowanie etykiet' : c.motion === 'manage' ? 'zarządzanie dokumentami' : 'przebieg druku etykiet'}`} /></div></div>
      <div className={s.features}>{c.features.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section id={`${id}-screens`} className={s.screens}><div className={shared.head}><p className={shared.eyebrow}>ZOBACZ, JAK PRACUJESZ</p><h2>{isCloud ? 'Projektuj etykiety.\nSprawdzaj wydruki.' : 'Zobacz narzędzia\ndo codziennej pracy.'}</h2></div><BartenderScreens screens={c.screens} id={id} /></section>
    <section id={`${id}-process`} className={s.process}><div className={shared.head}><p className={shared.eyebrow}>TRZY ETAPY PRACY</p><h2>{edition === 'enterprise' ? 'Przygotuj. Zatwierdź.\nUdostępnij.' : edition === 'automation' ? 'Połącz dane.\nUruchom druk.' : 'Przygotuj dane.\nWydrukuj etykietę.'}</h2></div><div className={s.steps}>{c.steps.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    {edition !== 'enterprise' && <section className={s.print}><div className={s.motion}><ProductMotion src={`${root}${c.motion === 'print' ? 'design' : 'print'}.mp4`} poster={`${root}${c.motion === 'print' ? 'design' : 'print'}-poster.jpg`} label={`BarTender ${c.name} — ${c.motion === 'print' ? 'projekt etykiety z kodem kreskowym' : 'etykiety w procesie pakowania i druku'}`} /></div><div className={s.sectionCopy}><p className={shared.eyebrow}>DOPASUJ ETYKIETĘ DO ZADANIA</p><h2>{'Kod, tekst i grafika.\nW jednym projekcie.'}</h2><p>Oznacz produkty, opakowania i lokalizacje. Dobierz wymiary dokumentu, materiał oraz ustawienia docelowej drukarki.</p>{edition !== 'starter' && <p className={s.small}>Do kodowania RFID potrzebujesz zgodnej drukarki i znacznika.</p>}</div></section>}
    <section id={`${id}-license`} className={s.license}><div className={s.sectionCopy}><p className={shared.eyebrow}>DOBIERZ ZAKRES LICENCJI</p><h2>{c.license}</h2><p>{c.licenseText}</p><a href="#warianty">Dobierz licencję <span aria-hidden="true">↑</span></a></div><div className={s.licenseCards}><article><span>01 / PRZED ZAKUPEM</span><h3>{isCloud ? 'Wybierz plan do sposobu pracy.' : 'Sprawdź, czego potrzebuje Twój zespół.'}</h3><p>{c.limitation}</p></article><article><span>02 / PO ZAKUPIE</span><h3>Licencję otrzymasz e-mailem.</h3><p>{isCloud ? 'Skonfiguruj konto firmy, dostęp użytkowników i połączenie z drukarkami. Dostępne funkcje wynikają z wybranego planu.' : 'Kod Redemption Code wymienisz w portalu klienta BarTender na klucz aktywacyjny. Pobierz instalator i aktywuj program.'}</p></article></div></section>
    <section className={s.editions}><div className={shared.head}><p className={shared.eyebrow}>INNE POTRZEBY? PORÓWNAJ EDYCJE.</p><h2>{'Dobierz BarTender\ndo swojego procesu.'}</h2></div><div>{(Object.entries(bartenderStories) as [BartenderEdition, typeof c][]).filter(([key]) => key !== edition).map(([key, item]) => <Link key={key} href={`/produkt/bartender-${key}`}><span>BarTender</span><strong>{item.name}</strong><p>{key === 'starter' ? 'Prosty druk z jednego komputera.' : key === 'professional' ? 'Dane zmienne, formularze i RFID.' : key === 'automation' ? 'Integracje i automatyczny druk.' : key === 'enterprise' ? 'Wersje, zatwierdzanie i audyt.' : 'Projektowanie i druk w przeglądarce.'}</p><span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className={`${shared.final} ${s.final}`}><p className={shared.eyebrow}>WDROŻENIE BARTENDER</p><h2>{'Opowiedz nam,\nskąd pobierasz dane do etykiet.'}</h2><p>Napisz, na jakich drukarkach pracujesz i czy korzystasz z Excela, bazy danych, ERP lub WMS. Dobierzemy edycję do Twoich zadań.</p><div><a href="#warianty">{edition === 'enterprise' ? 'Zapytaj o wariant ↑' : 'Warianty i ceny ↑'}</a><Link href="/kontakt">Porozmawiaj o wdrożeniu ↗</Link></div></section>
  </div>
}
