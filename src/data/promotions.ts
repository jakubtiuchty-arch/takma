import { ZEBRA_CEE_PROMO, ZEBRA_ZIPSHIP } from './promos'

/**
 * Treści promocji dla stron /promocje (hub) i /promocje/[slug] (landingi pod Ads).
 * Jedno źródło prawdy: dodanie nowej promocji = jeden wpis w PROMOTIONS.
 * Ceny produktowe biorą się z promos.ts (tam też sterowanie banerami na kartach),
 * żeby nie dublować kwot w dwóch miejscach.
 *
 * endDate: null = program stały (bez daty zakończenia).
 * Wygasłe promocje NIE znikają — podstrona zostaje z komunikatem „oferta zakończona"
 * (zachowana historia URL-a i pozycje w Google), hub ich już nie pokazuje.
 */

export interface PromotionCard {
  title: string
  body: string
}

export interface PromotionProduct {
  slug: string
  name: string
  pct: number
  /** wycinanka urządzenia (przezroczyste tło) wystająca poza obrys kafla */
  image?: string
  /** nagłówek grupy — modele jednego rodzaju trzymamy w osobnym rzędzie */
  group?: string
}

/**
 * Kolorystyka producenta na hubie i landingu.
 * `base` — tło badge'y i przycisku CTA, `on` — kolor tekstu na tym tle,
 * `light` — wariant czytelny na ciemnym tle (hover linków, poświata, ceny).
 */
export interface PromotionAccent {
  base: string
  on: string
  light: string
}

/** Zebra — firmowa limonka. */
export const ACCENT_ZEBRA: PromotionAccent = { base: '#A8F000', on: '#0a0a0a', light: '#A8F000' }
/** TSC — niebieski z logo (#1351A2); jaśniejszy wariant do tekstu na czerni. */
export const ACCENT_TSC: PromotionAccent = { base: '#1351A2', on: '#ffffff', light: '#5BA0E8' }

export interface Promotion {
  slug: string
  brandId: string
  /** kolorystyka producenta (domyślnie Zebra) */
  accent: PromotionAccent
  /** H1 na podstronie */
  title: string
  /** nagłówek kafla na hubie */
  hubTitle: string
  seoTitle: string
  seoDescription: string
  /** lead pod H1 */
  lead: string
  /** 1-2 zdania na kaflu huba */
  hubExcerpt: string
  /** ostatni dzień promocji (YYYY-MM-DD) lub null dla programu stałego */
  endDate: string | null
  /** etykieta w rogu kafla huba, np. „−44%" albo „program stały" */
  badge: string
  /** subtelna grafika tła kafla na hubie (ciemny packshot, wtapiany maską) */
  cardImage?: string
  products?: PromotionProduct[]
  cards?: PromotionCard[]
  stepsHeading?: string
  steps?: string[]
  cta: {
    label: string
    /** treść startowa formularza zapytania */
    initialMessage: string
    productName: string
    productSlug: string
    note?: string
  }
  /** dodatkowe linki pod treścią */
  links?: { title: string; href: string }[]
}

export const PROMOTIONS: Promotion[] = [
  {
    slug: 'zebra-skanery-i-drukarki',
    brandId: 'zebra',
    accent: ACCENT_ZEBRA,
    title: 'Skanery i drukarki Zebra w cenach promocyjnych — rabat do 44%',
    hubTitle: 'Skanery i drukarki z rabatem do 44%',
    seoTitle: 'Promocja Zebra — skanery i drukarki z rabatem do 44%',
    seoDescription:
      'Promocyjne ceny skanerów Zebra DS4608 i DS2208 oraz drukarek etykiet ZD230d i ZD230t. Oferta dla firm obowiązuje do 4 października. TAKMA — autoryzowany partner Zebra.',
    lead:
      'Obniżyliśmy ceny czterech modeli Zebry: skanerów kodów kreskowych DS4608 i DS2208 oraz drukarek etykiet ZD230d i ZD230t. Zamówienie składasz przez formularz na karcie wybranego produktu, a cenę i termin dostawy potwierdzamy w ciągu jednego dnia roboczego.',
    hubExcerpt:
      'Cztery modele Zebry w obniżonych cenach: dwa skanery kodów kreskowych i dwie drukarki etykiet.',
    endDate: ZEBRA_CEE_PROMO.endDate,
    badge: 'do −44%',
    cardImage: '/images/promo-card-urzadzenia.webp',
    products: [
      { slug: 'zebra-ds4608', name: 'Skaner Zebra DS4608', pct: 44, image: '/images/promocje/zebra-ds4608.png', group: 'Skanery' },
      { slug: 'zebra-zd230d', name: 'Drukarka Zebra ZD230d', pct: 21, image: '/images/promocje/zebra-zd230d.png', group: 'Drukarki etykiet' },
      { slug: 'zebra-zd230t', name: 'Drukarka Zebra ZD230t', pct: 18, image: '/images/promocje/zebra-zd230t.png', group: 'Drukarki etykiet' },
      { slug: 'zebra-ds2208', name: 'Skaner Zebra DS2208', pct: 10, image: '/images/promocje/zebra-ds2208.png', group: 'Skanery' },
    ],
    cards: [
      {
        title: 'Dla kogo',
        body: 'Z promocji korzystają firmy kupujące sprzęt na fakturę — zarówno przy wyposażaniu pojedynczego stanowiska, jak i całego magazynu. Liczba urządzeń objętych promocją jest ograniczona.',
      },
      {
        title: 'Co dostajesz',
        body: 'Otrzymujesz fabrycznie nowe urządzenia z oficjalnej dystrybucji, objęte pełną gwarancją producenta. Pomagamy też w konfiguracji i uruchomieniu sprzętu.',
      },
      {
        title: 'Jak zamówić',
        body: 'Na karcie wybranego produktu kliknij przycisk zamówienia w cenie promocyjnej i podaj liczbę sztuk. Odpowiadamy w ciągu jednego dnia roboczego.',
      },
    ],
    cta: {
      label: 'Zapytaj o promocję',
      productName: 'promocja na skanery i drukarki Zebra',
      productSlug: 'promocja-zebra-urzadzenia',
      initialMessage:
        'Dzień dobry, proszę o ofertę na urządzenia Zebra w cenach promocyjnych. Interesujące mnie modele i liczba sztuk: ',
      note: 'Odpowiadamy w ciągu jednego dnia roboczego.',
    },
    links: [
      { title: 'Skanery kodów kreskowych', href: '/skanery-kodow-kreskowych' },
      { title: 'Drukarki etykiet Zebra', href: '/drukarki-etykiet-zebra' },
    ],
  },
  {
    slug: 'zebra-materialy-eksploatacyjne',
    brandId: 'zebra',
    accent: ACCENT_ZEBRA,
    title: 'Rabat na etykiety i taśmy — do 3 kartonów na każdą drukarkę Zebra',
    hubTitle: 'Etykiety i taśmy z rabatem do 15%',
    seoTitle: 'Promocja na etykiety i taśmy Zebra — rabat do 3 kartonów',
    seoDescription:
      'Do każdej drukarki Zebra kupisz do 3 kartonów oryginalnych etykiet lub taśm z rabatem sięgającym 15%. Wystarczy numer seryjny drukarki. Oferta obowiązuje do 31 grudnia.',
    lead:
      'Do każdej drukarki Zebra — zarówno nowej, jak i pracującej w firmie od lat — możesz kupić do 3 kartonów oryginalnych etykiet lub taśm z rabatem sięgającym 15% naszej ceny. Wystarczy numer seryjny urządzenia.',
    hubExcerpt:
      'Do każdej drukarki Zebra w firmie przysługuje rabat na maksymalnie 3 kartony oryginalnych materiałów.',
    endDate: ZEBRA_ZIPSHIP.endDate,
    badge: 'do −15%',
    cardImage: '/images/promo-card-materialy.webp',
    cards: [
      {
        title: 'Jak liczą się limity',
        body: 'Limit wynosi 3 kartony na jedną drukarkę, ale nie ma dolnej granicy — możesz kupić jeden karton, dwa albo trzy. Jeśli w firmie pracuje pięć drukarek Zebra, promocja obejmie łącznie nawet 15 kartonów.',
      },
      {
        title: 'Bonus dla termotransferu',
        body: 'Jeśli zamawiasz etykiety termotransferowe, do tego samego zamówienia dokupisz w promocji dodatkowo maksymalnie 3 kartony taśm barwiących. Na jedną drukarkę termotransferową daje to nawet 6 kartonów w obniżonej cenie.',
      },
      {
        title: 'Co obejmuje',
        body: 'Promocją objęte są wybrane etykiety i taśmy z magazynowego asortymentu Zebry, między innymi serie Z-Perform, Z-Select i Z-Ultimate oraz taśmy woskowe i żywiczne. To, czy dany materiał się kwalifikuje, potwierdzamy w wycenie.',
      },
    ],
    stepsHeading: 'Jak skorzystać — 3 kroki',
    steps: [
      'Odczytaj numer seryjny drukarki. Znajdziesz go na naklejce znamionowej urządzenia albo na wydruku konfiguracyjnym.',
      'Wyślij zapytanie — na karcie dowolnej etykiety lub taśmy kliknij przycisk „Odbierz rabat”, a następnie podaj numer seryjny i interesujące Cię materiały.',
      'Odbierz wycenę, którą odsyłamy w ciągu jednego dnia roboczego. Po jej akceptacji realizujemy zamówienie tak jak każde inne.',
    ],
    cta: {
      label: 'Odbierz rabat',
      productName: 'promocja na materiały eksploatacyjne Zebra',
      productSlug: 'promocja-materialy',
      initialMessage:
        'Dzień dobry, chcę skorzystać z promocji Zebra na materiały eksploatacyjne. Numer seryjny mojej drukarki: ',
      note: 'Wycenę odsyłamy w ciągu jednego dnia roboczego.',
    },
    links: [
      { title: 'Etykiety termiczne Zebra', href: '/etykiety-termiczne-zebra' },
      { title: 'Etykiety termotransferowe Zebra', href: '/etykiety-termotransferowe-zebra' },
      { title: 'Taśmy termotransferowe Zebra', href: '/tasmy-termotransferowe' },
    ],
  },
  {
    slug: 'zebra-glowice-bez-kosztow',
    brandId: 'zebra',
    accent: ACCENT_ZEBRA,
    title: 'Bezpłatne wymiany głowic drukujących — program Zebry dla stałych klientów',
    hubTitle: 'Bezpłatne wymiany głowic',
    seoTitle: 'Bezpłatne wymiany głowic w drukarkach Zebra — program producenta',
    seoDescription:
      'Firmy drukujące na oryginalnych materiałach Zebry otrzymują bezpłatne głowice zamienne. Drukarki nie trzeba nigdzie odsyłać, a nową głowicę wysyłamy zwykle w ciągu pięciu dni roboczych.',
    lead:
      'Głowica drukująca zużywa się i jest najdroższym elementem eksploatacyjnym drukarki: w naszym sklepie kosztuje od około 500 zł w modelach biurkowych do blisko 7 000 zł w przemysłowych, a przeciętna wymiana to wydatek rzędu 2 300 zł. W programie producenta ten koszt pokrywa Zebra — pod warunkiem, że drukujesz na jej oryginalnych materiałach.',
    hubExcerpt:
      'Zebra pokrywa koszt głowic zamiennych firmom, które kupują jej oryginalne etykiety i taśmy. Drukarki nie trzeba odsyłać do serwisu.',
    endDate: '2026-12-31',
    badge: 'program producenta',
    cardImage: '/images/promo-card-glowice.webp',
    cards: [
      {
        title: 'Na czym polega',
        body: 'Zgłaszamy firmę do programu, podając modele drukarek oraz przewidywane roczne zużycie materiałów. Na tej podstawie Zebra przyznaje pulę głowic na 12 miesięcy. Gdy głowica się zużyje, otrzymujesz nową bezpłatnie — aż do wyczerpania przyznanej puli.',
      },
      {
        title: 'Warunek',
        body: 'Firma deklaruje dwie rzeczy: że drukuje wyłącznie na oryginalnych materiałach Zebry kupowanych u nas oraz że zużyte głowice trafiają do utylizacji. Na tym opiera się cały program: certyfikowane etykiety i taśmy są dobrane do głowic Zebry i zużywają je znacznie wolniej niż tańsze zamienniki.',
      },
      {
        title: 'Dla kogo',
        body: 'Program jest przeznaczony dla firm o regularnym, większym zużyciu etykiet i taśm — zakłada minimalny poziom rocznych zakupów materiałów, w przybliżeniu równowartość 5 000 EUR w cenach katalogowych Zebry. Kwalifikację sprawdzamy przed zgłoszeniem, a producent może później poprosić o potwierdzenie, że zadeklarowany poziom zakupów rzeczywiście został osiągnięty.',
      },
    ],
    stepsHeading: 'Jak to działa w praktyce',
    steps: [
      'Kontaktujesz się z nami, a my ustalamy model i numer seryjny każdej drukarki, używane etykiety i taśmy oraz szacunkowe zużycie materiałów w skali roku.',
      'Rejestrujemy firmę w programie u producenta. Zebra odpowiada zwykle w ciągu trzech dni roboczych i określa pulę głowic na najbliższe 12 miesięcy.',
      'Kupujesz etykiety i taśmy tak jak dotąd, u nas. Gdy głowica się zużyje, zgłaszasz to nam, a nową wysyłamy zwykle w ciągu pięciu dni roboczych.',
      'Drukarki nie trzeba nigdzie odsyłać. Głowicę wymienia się na miejscu, a jeśli wolisz, zrobi to nasz serwis.',
    ],
    cta: {
      label: 'Sprawdź kwalifikację',
      productName: 'program bezpłatnych wymian głowic Zebra',
      productSlug: 'program-glowice',
      initialMessage:
        'Dzień dobry, chcę sprawdzić, czy moja firma kwalifikuje się do programu bezpłatnych wymian głowic Zebra.\nModele i numery seryjne drukarek: \nSzacunkowe roczne zużycie etykiet i taśm: ',
      note: 'Zgłoszenie nie jest zobowiązaniem — najpierw sprawdzamy, czy program się opłaca.',
    },
    links: [
      { title: 'Głowice do drukarek Zebra', href: 'https://www.serwis-zebry.pl/sklep' },
      { title: 'Serwis drukarek Zebra', href: '/serwis' },
    ],
  },
  {
    slug: 'tsc-wymiana-drukarki',
    brandId: 'tsc',
    accent: ACCENT_TSC,
    title: 'Oddaj starą drukarkę etykiet i odbierz rabat na nową TSC',
    hubTitle: 'Rabat za oddanie starej drukarki',
    seoTitle: 'Promocja TSC Trade-Up — rabat za oddanie starej drukarki etykiet',
    seoDescription:
      'Kupując przemysłową drukarkę etykiet TSC, oddajesz starą drukarkę dowolnej marki i odbierasz rabat od producenta. Oferta dla firm obowiązuje do 31 grudnia 2026.',
    lead:
      'Kupujesz nową przemysłową drukarkę etykiet TSC, a starą — również innego producenta — oddajesz w rozliczeniu i odbierasz za nią zwrot części kwoty od TSC. Wysokość zwrotu zależy od modelu, który wybierzesz, więc podajemy ją w wycenie.',
    hubExcerpt:
      'Wymień wysłużoną drukarkę etykiet na nową TSC. Oddana drukarka może być dowolnej marki — liczy się to, żeby się uruchamiała.',
    endDate: '2026-12-31',
    badge: 'wymiana za dopłatą',
    cardImage: '/images/promo-card-tsc-wymiana.webp',
    cards: [
      {
        title: 'Co możesz oddać',
        body: 'Dowolną drukarkę etykiet — TSC, Printronix albo konkurencji. Musi należeć do tej samej klasy co kupowana, uruchamiać się i mieć zamontowaną głowicę drukującą. Jej wiek i stan zużycia nie mają znaczenia.',
      },
      {
        title: 'Co kupujesz',
        body: 'Fabrycznie nową drukarkę przemysłową TSC z serii MH, MX, T6000 lub T8000, w wersji 4-, 6- lub 8-calowej. Urządzenia powystawowe, demonstracyjne i odnawiane nie biorą udziału w promocji.',
      },
      {
        title: 'Ile sztuk',
        body: 'Jedna firma może wymienić maksymalnie pięć drukarek każdego modelu. Wysokość zwrotu zależy od tego, ile urządzeń kupujesz i ile oddajesz — obie liczby muszą się zgadzać.',
      },
    ],
    stepsHeading: 'Jak to działa',
    steps: [
      'Piszesz do nas, jaką drukarkę masz dziś i do czego jej używasz. Dobieramy model TSC z tej samej klasy i podajemy cenę wraz z wysokością zwrotu.',
      'Zamawiasz nową drukarkę. Zwrot dotyczy wyłącznie urządzeń fabrycznie nowych kupionych u autoryzowanego partnera, czyli u nas.',
      'Składasz wniosek u producenta w ciągu 90 dni od daty faktury, załączając fakturę oraz zdjęcie tabliczki znamionowej oddawanej drukarki. Pomagamy wypełnić zgłoszenie.',
      'TSC weryfikuje wniosek i wypłaca zwrot. Promocja nie łączy się z innymi rabatami producenta ani z cenami projektowymi.',
    ],
    cta: {
      label: 'Wyceń wymianę',
      productName: 'promocja TSC — wymiana starej drukarki etykiet',
      productSlug: 'promocja-tsc-wymiana',
      initialMessage:
        'Dzień dobry, chcę wymienić starą drukarkę etykiet na nową TSC.\nObecna drukarka (marka i model): \nSzerokość druku i przewidywany wolumen: ',
      note: 'Wycenę z wysokością zwrotu odsyłamy w ciągu jednego dnia roboczego.',
    },
    links: [
      { title: 'Drukarki etykiet TSC', href: '/drukarki-etykiet-tsc' },
      { title: 'Przemysłowe drukarki etykiet', href: '/przemyslowe-drukarki-etykiet' },
    ],
  },
]

/** Czy promocja jest aktywna (program stały = zawsze). */
export function isPromotionActive(p: Promotion): boolean {
  if (!p.endDate) return true
  return new Date() <= new Date(`${p.endDate}T23:59:59+01:00`)
}

export function getPromotion(slug: string): Promotion | undefined {
  return PROMOTIONS.find((p) => p.slug === slug)
}

/** Aktywne promocje pogrupowane po producencie — kolejność marek jak w PROMOTIONS. */
export function activePromotionsByBrand(): { brandId: string; items: Promotion[] }[] {
  const groups: { brandId: string; items: Promotion[] }[] = []
  for (const p of PROMOTIONS.filter(isPromotionActive)) {
    const g = groups.find((x) => x.brandId === p.brandId)
    if (g) g.items.push(p)
    else groups.push({ brandId: p.brandId, items: [p] })
  }
  return groups
}

/** Etykieta terminu: „do 4 października" / „oferta stała". */
export function deadlineLabel(p: Promotion): string {
  if (!p.endDate) return 'oferta stała'
  const d = new Date(`${p.endDate}T12:00:00`)
  return `do ${d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })}`
}

/** Ile dni zostało (null dla programu stałego). */
export function daysLeft(p: Promotion): number | null {
  if (!p.endDate) return null
  const end = new Date(`${p.endDate}T23:59:59+01:00`)
  return Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86_400_000))
}

/**
 * Modele promocji rozbite na grupy (skanery osobno, drukarki osobno).
 * Kolejność grup wynika z kolejności produktów, więc steruje się nią w PROMOTIONS.
 * Produkty bez `group` trafiają do jednej grupy bez nagłówka.
 */
export function promotionProductGroups(
  promo: Promotion,
): { label: string | null; items: PromotionProduct[] }[] {
  const groups: { label: string | null; items: PromotionProduct[] }[] = []
  for (const product of promo.products ?? []) {
    const label = product.group ?? null
    const existing = groups.find((g) => g.label === label)
    if (existing) existing.items.push(product)
    else groups.push({ label, items: [product] })
  }
  return groups
}
