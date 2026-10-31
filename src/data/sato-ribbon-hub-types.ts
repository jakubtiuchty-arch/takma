/**
 * Typy treści huba /tasmy-termotransferowe-sato. Treść leży w `sato-ribbon-hub.ts`,
 * render w `src/app/tasmy-termotransferowe-sato/page.tsx`.
 */

/** Komórki mogą mieć markdown-linki [tekst](/url) — render przez LinkedText. */
export interface SatoRibbonHubTable {
  caption?: string
  header: string[]
  rows: string[][]
}

export interface SatoRibbonHubBlock {
  /** H2 */
  heading: string
  /** Akapity rozdzielone \n\n, listy liniami '- ', **pogrubienie**, linki [x](/y) — render jak sekcje serii. */
  content?: string
  /** Tabela pod treścią bloku. 'drukarki' renderuje się z `sato-ribbon-printers.ts`. */
  table?: 'porownanie' | 'serie' | 'drukarki' | 'dobor'
}

export interface SatoRibbonHub {
  seoTitle: string
  seoDescription: string
  h1: string
  /** Może mieć **pogrubienia**. */
  heroIntro: string
  /** 3 odznaki w hero. */
  badges: string[]
  /** Akapit pod H2 „Wybierz serię taśmy”. */
  modelsIntro: string
  /** Grupy kafelków; wartości = slugi serii. */
  sections: { label: string; flagship: string; rest: string[] }[]
  guide: SatoRibbonHubBlock[]
  tables: { porownanie: SatoRibbonHubTable; serie: SatoRibbonHubTable; dobor: SatoRibbonHubTable }
  howTo: { name: string; description: string; steps: { name: string; text: string }[] }
  faq: { question: string; answer: string }[]
  datePublished: string
  dateModified: string
}
