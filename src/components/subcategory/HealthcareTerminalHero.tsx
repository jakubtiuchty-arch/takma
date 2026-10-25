import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import s from './HealthcareTerminalHero.module.css'

export default function HealthcareTerminalHero() {
  return <section className={s.hero} aria-labelledby="healthcare-terminal-heading">
    <div className={s.visual}>
      <Image src="/images/healthcare-terminals/hero-work.jpg" fill priority sizes="100vw"
        alt="Personel medyczny odczytuje terminalem Zebra HC55 kod z opaski na nadgarstku pacjenta" />
    </div>
    <div className={`container-main ${s.inner}`}>
      <nav className={s.breadcrumbs} aria-label="Ścieżka nawigacji">
        <Link href="/">Strona główna</Link><ChevronRightIcon size={12}/>
        <Link href="/terminale-mobilne">Terminale mobilne</Link>
      </nav>
      <div className={s.copy}>
        <h1 id="healthcare-terminal-heading" className={s.title}>Terminale dla<br className={s.desktopBreak}/> służby zdrowia</h1>
        <p>Skanuj opaski pacjentów i&nbsp;kody leków. Korzystaj z&nbsp;dokumentacji w&nbsp;systemie placówki — na terminalu z&nbsp;obudową przygotowaną do dezynfekcji.</p>
      </div>
    </div>
  </section>
}
