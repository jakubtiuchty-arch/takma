/**
 * Wspólny DefinedTermSet (schema.org) dla stron taśm i etykiet termotransferowych.
 *
 * Definicje pojęć technicznych powtarzających się w obu kategoriach (typy taśm,
 * materiały folii, atesty, parametry druku). Sygnał dla AI engines (Google AI
 * Overviews, Perplexity, ChatGPT), które definicje cytować jako autorytatywne.
 *
 * Użycie: <CommonDefinitionsSchema /> w dowolnym page.tsx (renderuje <script ld+json>).
 */

const siteUrl = 'https://www.takma.com.pl'

interface DefinedTerm {
  name: string
  alternateName?: string
  description: string
}

export const COMMON_DEFINED_TERMS: DefinedTerm[] = [
  {
    name: 'taśma woskowa',
    alternateName: 'wax',
    description:
      'Taśma termotransferowa z powłoką barwiącą na bazie wosku. Najtańsza i najszybsza w druku, przeznaczona do etykiet papierowych (powlekanych i niepowlekanych). Nadruk o standardowej odporności na tarcie — do magazynu, wysyłek i sprzedaży detalicznej.',
  },
  {
    name: 'taśma woskowo-żywiczna',
    alternateName: 'wax-resin',
    description:
      'Taśma termotransferowa z mieszanką wosku i żywicy. Kompromis między ceną a odpornością — lepsza odporność na ścieranie, wilgoć i ciepło niż taśma woskowa, drukuje na papierze premium oraz wybranych foliach (polipropylen).',
  },
  {
    name: 'taśma żywiczna',
    alternateName: 'resin',
    description:
      'Taśma termotransferowa z powłoką barwiącą na bazie czystej żywicy. Najwyższa odporność nadruku na chemikalia, rozpuszczalniki, UV i wysoką temperaturę. Wymagana do folii syntetycznych (poliester PET) i zastosowań ekstremalnych.',
  },
  {
    name: 'BOPP',
    alternateName: 'polipropylen dwuosiowo orientowany',
    description:
      'Biaxially-Oriented Polypropylene — folia polipropylenowa stosowana na etykiety syntetyczne odporne na wilgoć i rozdarcia. Drukuje się na niej taśmą woskowo-żywiczną lub żywiczną.',
  },
  {
    name: 'PET',
    alternateName: 'politereftalan etylenu (poliester)',
    description:
      'Poliester — folia o najwyższej odporności na temperaturę, chemikalia i rozciąganie, stosowana na etykiety przemysłowe i tabliczki znamionowe. Wymaga taśmy żywicznej (wosk nie zwiąże się z poliestrem).',
  },
  {
    name: 'PE',
    alternateName: 'polietylen',
    description:
      'Polietylen — elastyczna folia syntetyczna stosowana na etykiety odporne na wilgoć i odkształcenia. Drukuje się na niej taśmą woskowo-żywiczną (Zebra 3400) lub żywiczną.',
  },
  {
    name: 'poliolefina',
    description:
      'Folia syntetyczna łącząca cechy polipropylenu i polietylenu — elastyczna, odporna na wilgoć i rozdarcia, stosowana na etykiety dopasowujące się do nierównych powierzchni.',
  },
  {
    name: 'UL Recognized Component',
    alternateName: 'UL/cUL',
    description:
      'Uznanie Underwriters Laboratories dla materiału etykietowego stosowanego do oznaczeń sprzętu elektrycznego i elektronicznego. Gwarantuje czytelność nadruku przez cały okres życia produktu w określonych warunkach.',
  },
  {
    name: 'BfR XIV',
    description:
      'Niemiecka rekomendacja Bundesinstitut für Risikobewertung dla materiałów mających pośredni kontakt z żywnością. Dotyczy etykiet stosowanych w przemyśle spożywczym i gastronomii.',
  },
  {
    name: 'BS5609',
    description:
      'Brytyjska norma dla etykiet odpornych na działanie wody morskiej, wymagana w oznakowaniu chemikaliów transportowanych drogą morską (GHS/CLP). Etykieta z nadrukiem musi przetrwać 3-miesięczne zanurzenie.',
  },
  {
    name: 'dwell time',
    alternateName: 'czas styku',
    description:
      'Czas kontaktu rozgrzanej głowicy drukującej z taśmą barwiącą. Taśmy żywiczne wymagają dłuższego dwell time (niższej prędkości druku, do 254 mm/s) niż woskowe, by żywica prawidłowo związała się z podłożem.',
  },
  {
    name: 'nawój zewnętrzny',
    alternateName: 'Out-Side Coated, OS',
    description:
      'Sposób nawinięcia taśmy, w którym warstwa barwiąca znajduje się na zewnętrznej stronie rolki. Standard producenta Zebra — wszystkie drukarki Zebra obsługują go bez konfiguracji.',
  },
]

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${siteUrl}/#slownik-termotransfer`,
  name: 'Słownik pojęć druku termotransferowego',
  description:
    'Definicje pojęć technicznych z zakresu taśm i etykiet termotransferowych Zebra: typy taśm, materiały folii, atesty i parametry druku.',
  inLanguage: 'pl-PL',
  hasDefinedTerm: COMMON_DEFINED_TERMS.map(t => ({
    '@type': 'DefinedTerm',
    name: t.name,
    ...(t.alternateName ? { alternateName: t.alternateName } : {}),
    description: t.description,
    inDefinedTermSet: `${siteUrl}/#slownik-termotransfer`,
  })),
}

/** Renderuje DefinedTermSet jako JSON-LD. Wstaw raz na stronie. */
export default function CommonDefinitionsSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
    />
  )
}
