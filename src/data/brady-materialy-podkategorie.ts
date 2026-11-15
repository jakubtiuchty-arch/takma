import type { Product, Subcategory } from './products'
import { BRADY_OZNACZNIKI_KABLI_IDS, BRADY_ETYKIETY_LAB_IDS } from './brady-m21-kasety'
import { BRADY_M45_KABLE_IDS, BRADY_M45_LAB_IDS } from './brady-m45-kasety'
import { BRADY_M6_KABLE_IDS, BRADY_M6_LAB_IDS, BRADY_M6_TASMY_IDS } from './brady-m6-grupy'
import { BRADY_B30_TASMY_IDS } from './brady-b30-grupy'
import { BRADY_B33_PRZEWODY_IDS, BRADY_B33_LAB_IDS, BRADY_B33_ELEKTRONIKA_IDS } from './brady-b33-grupy'
import { BRADY_THT_PRZEWODY_IDS, BRADY_THT_LAB_IDS, BRADY_THT_ELEKTRONIKA_IDS, BRADY_THT_RFID_IDS, BRADY_THT_TASMY_IDS } from './brady-tht-grupy'
import { BRADY_J7300_LAB_IDS, BRADY_J7300_TUSZE_IDS } from './brady-j7300-grupy'
import { BRADY_J4000_LAB_IDS, BRADY_J4000_TUSZE_IDS } from './brady-j4000-grupy'
import { BRADY_A55_TASMY_IDS } from './brady-a5500'
import { BRADY_A62_TASMY_IDS } from './brady-a6200'

// Podkategorie materiałów Brady w /materialy-eksploatacyjne (15.11.2026, decyzja Kuby: podział według rodzaju
// materiału + filtr „Do drukarki”). Karty materiałów Brady mają w plikach puste `subcategoryIds`; przydział
// liczy funkcja `podkategorieMaterialuBrady` z grup sekcji kart drukarek, a products.ts dopisuje go do kart
// i do `productIds` podkategorii (synchronizacja w obie strony).

const suma = (...zbiory: Set<string>[]) => new Set(zbiory.flatMap((z) => Array.from(z)))

const RFID = suma(BRADY_THT_RFID_IDS)
const TASMY = suma(BRADY_M6_TASMY_IDS, BRADY_B30_TASMY_IDS, BRADY_THT_TASMY_IDS, BRADY_A55_TASMY_IDS, BRADY_A62_TASMY_IDS)
const TUSZE = suma(BRADY_J7300_TUSZE_IDS, BRADY_J4000_TUSZE_IDS)
const KABLE = suma(BRADY_OZNACZNIKI_KABLI_IDS, BRADY_M45_KABLE_IDS, BRADY_M6_KABLE_IDS, BRADY_B33_PRZEWODY_IDS, BRADY_THT_PRZEWODY_IDS)
const LAB = suma(BRADY_ETYKIETY_LAB_IDS, BRADY_M45_LAB_IDS, BRADY_M6_LAB_IDS, BRADY_B33_LAB_IDS, BRADY_THT_LAB_IDS, BRADY_J7300_LAB_IDS, BRADY_J4000_LAB_IDS)
const ELEKTRONIKA = suma(BRADY_B33_ELEKTRONIKA_IDS, BRADY_THT_ELEKTRONIKA_IDS)

export const PODKATEGORIA_ETYKIETY_BRADY = 'etykiety-brady'

/** Podkategorie materiału Brady: rodzic „Etykiety Brady” i jedna podkategoria podrzędna albo osobna grupa (RFID, taśmy, tusze). */
export function podkategorieMaterialuBrady(p: Pick<Product, 'id' | 'name' | 'manufacturerId' | 'categoryId'>): string[] {
  if (p.manufacturerId !== 'brady' || p.categoryId !== 'materialy-eksploatacyjne') return []
  const nazwa = p.name.toLowerCase()
  if (RFID.has(p.id) || /rfid/.test(nazwa)) return ['etykiety-rfid-brady']
  if (TASMY.has(p.id) || /taśm[ay]? barwiąc|taśmy barwiące/.test(nazwa)) return ['tasmy-barwiace-brady']
  if (TUSZE.has(p.id) || /tusz|rolka wyrównująca|nasadk/.test(nazwa)) return ['tusze-brady']
  // Podkategoria podrzędna pierwsza: karta produktu bierze pierwszą podkategorię do okruszków i podpisu pod H1
  // („Oznaczniki kabli Brady”, nie ogólne „Etykiety Brady”) — tak samo jak akcesoria do terminali.
  const etykiety = (pod: string) => [pod, PODKATEGORIA_ETYKIETY_BRADY]
  if (/koszul|termokurcz/.test(nazwa)) return etykiety('koszulki-termokurczliwe-brady')
  if (KABLE.has(p.id) || /^brady-(a55|a62|ba62|wrap)-/.test(p.id) || /listew|listwy zaciskow/.test(nazwa)) return etykiety('oznaczniki-kabli-brady')
  if (LAB.has(p.id)) return etykiety('etykiety-laboratoryjne-brady')
  if (ELEKTRONIKA.has(p.id) || /płytk|\besd\b|antystatycz/.test(nazwa)) return etykiety('etykiety-na-plytki-drukowane-brady')
  return etykiety('etykiety-przemyslowe-brady')
}

const podkategoria = (s: Omit<Subcategory, 'parentCategoryId' | 'icon' | 'productIds' | 'productCount'> & { icon?: string }): Subcategory => ({
  parentCategoryId: 'materialy-eksploatacyjne',
  icon: 'tag',
  productIds: [],
  productCount: 0,
  ...s,
})

export const bradyPodkategorieMaterialow: Subcategory[] = [
  podkategoria({
    id: PODKATEGORIA_ETYKIETY_BRADY,
    slug: 'etykiety-brady',
    name: 'Etykiety Brady',
    description: 'Etykiety, oznaczniki kabli, koszulki termokurczliwe i taśmy ciągłe Brady: kasety i rolki do drukarek przenośnych, stacjonarnych i przemysłowych',
    seoTitle: 'Etykiety Brady do drukarek — oznaczniki, koszulki, taśmy',
    seoDescription: 'Etykiety Brady do drukarek etykiet: oznaczniki przewodów, koszulki termokurczliwe, etykiety laboratoryjne, znamionowe i na płytki PCB. Dobór według drukarki.',
    longDescription: 'Etykiety Brady to materiały do drukarek etykiet Brady: kasety do drukarek przenośnych, rolki do drukarek przemysłowych i taśmy ciągłe do drukarek znaków. Każdy materiał ma oznaczenie B-, które określa folię, klej i odporność, np. na chemikalia, temperaturę albo warunki zewnętrzne. Etykiety oznaczają kable, rozdzielnice, urządzenia, próbki laboratoryjne i płytki drukowane. Rodzaj kasety lub rolki zależy od drukarki, dlatego filtr „Do drukarki” zawęża listę do jednej serii. Drukarki są w kategorii [drukarki do oznaczania kabli](/drukarki-do-oznaczania-kabli).',
  }),
  podkategoria({
    id: 'oznaczniki-kabli-brady',
    slug: 'oznaczniki-kabli-brady',
    name: 'Oznaczniki przewodów i kabli Brady',
    parentSubcategoryId: PODKATEGORIA_ETYKIETY_BRADY,
    description: 'Owijki samolaminujące, flagi, zawieszki i etykiety na listwy zaciskowe Brady do oznaczania przewodów i kabli',
    seoTitle: 'Oznaczniki przewodów i kabli Brady do drukarek',
    seoDescription: 'Oznaczniki przewodów i kabli Brady do druku: owijki samolaminujące, flagi, zawieszki i etykiety na listwy zaciskowe. Dobór według średnicy przewodu.',
    longDescription: 'Oznaczniki kabli to etykiety, które nakłada się na przewód, aby opisać obwód, połączenie albo numer kabla. Owijka samolaminująca ma białe pole nadruku i przezroczysty ogon, który po owinięciu zakrywa napis. Flaga odstaje od przewodu i mieści dłuższy opis lub kod kreskowy. Etykiety na listwy zaciskowe opisują zaciski w rozdzielnicach. Rozmiar oznacznika dobiera się do średnicy przewodu. Koszulki nasuwane na przewód są w kategorii [koszulki termokurczliwe Brady](/koszulki-termokurczliwe-brady).',
  }),
  podkategoria({
    id: 'koszulki-termokurczliwe-brady',
    slug: 'koszulki-termokurczliwe-brady',
    name: 'Koszulki termokurczliwe Brady',
    parentSubcategoryId: PODKATEGORIA_ETYKIETY_BRADY,
    description: 'Koszulki termokurczliwe Brady PermaSleeve z nadrukiem do oznaczania przewodów: standardowe, bezhalogenowe i wysokotemperaturowe',
    seoTitle: 'Koszulki termokurczliwe do drukarki Brady PermaSleeve',
    seoDescription: 'Koszulki termokurczliwe do drukarki Brady PermaSleeve: standardowe, bezhalogenowe LSZH i wysokotemperaturowe, w kasetach i na rolkach, do opisu przewodów.',
    longDescription: 'Koszulka termokurczliwa to rurka z nadrukiem, którą nasuwa się na przewód przed montażem końcówki. Po podgrzaniu kurczy się i obejmuje izolację, więc oznaczenie nie zsuwa się przy przeciąganiu przewodu. Koszulki Brady PermaSleeve występują w wersjach standardowych, bezhalogenowych, które przy pożarze wydzielają mało dymu, oraz wysokotemperaturowych. Średnicę koszulki dobiera się do przekroju przewodu, a do obkurczania służy opalarka. Oznaczniki nakładane bez obkurczania są w kategorii [oznaczniki kabli Brady](/oznaczniki-kabli-brady).',
  }),
  podkategoria({
    id: 'etykiety-laboratoryjne-brady',
    slug: 'etykiety-laboratoryjne-brady',
    name: 'Etykiety laboratoryjne Brady',
    parentSubcategoryId: PODKATEGORIA_ETYKIETY_BRADY,
    description: 'Etykiety Brady na probówki, fiolki, szkiełka i pojemniki: odporne na zamrażanie, ciekły azot, autoklaw i rozpuszczalniki',
    seoTitle: 'Etykiety laboratoryjne Brady — probówki, fiolki, szkiełka',
    seoDescription: 'Etykiety laboratoryjne Brady na probówki, fiolki, szkiełka i pojemniki do drukarek etykiet: odporne na ciekły azot, zamrażarki, autoklaw i rozpuszczalniki.',
    longDescription: 'Etykiety laboratoryjne opisują próbki, odczynniki i sprzęt w laboratoriach badawczych, szpitalnych i przemysłowych. Etykieta musi zostać na pojemniku w zamrażarce, w ciekłym azocie albo w autoklawie, a nadruk musi pozostać czytelny dla skanera. Na probówki i fiolki są małe formaty oraz owijki, które zakrywają nadruk przezroczystą warstwą. Na szkiełka mikroskopowe przeznaczono materiały odporne na ksylen i inne rozpuszczalniki. Zakres odporności zależy od materiału B- podanego na karcie produktu.',
  }),
  podkategoria({
    id: 'etykiety-na-plytki-drukowane-brady',
    slug: 'etykiety-na-plytki-drukowane-brady',
    name: 'Etykiety na płytki drukowane Brady',
    parentSubcategoryId: PODKATEGORIA_ETYKIETY_BRADY,
    description: 'Etykiety Brady z poliimidu i poliestru do znakowania płytek drukowanych i elektroniki, także antystatyczne (ESD)',
    seoTitle: 'Etykiety na płytki PCB Brady — poliimid i ESD',
    seoDescription: 'Etykiety Brady na płytki drukowane i elektronikę: poliimid odporny na lutowanie i mycie płytek, wersje antystatyczne ESD, małe formaty na kody Data Matrix.',
    longDescription: 'Etykiety na płytki drukowane oznaczają płytki, podzespoły i obudowy w produkcji elektroniki. Poliimid wytrzymuje temperaturę lutowania i mycie płytek, a nadruk zostaje czytelny po całym procesie. Wersje antystatyczne (ESD) ograniczają ładunki elektrostatyczne przy wrażliwych podzespołach. Małe formaty mieszczą kody Data Matrix i numery seryjne do śledzenia produkcji. Materiał dobiera się do temperatury procesu i do środków myjących.',
  }),
  podkategoria({
    id: 'etykiety-przemyslowe-brady',
    slug: 'etykiety-przemyslowe-brady',
    name: 'Etykiety znamionowe i przemysłowe Brady',
    parentSubcategoryId: PODKATEGORIA_ETYKIETY_BRADY,
    description: 'Etykiety znamionowe, plomby, taśmy ciągłe, zawieszki, znaki bezpieczeństwa i etykiety do drukarek kolorowych Brady',
    seoTitle: 'Etykiety znamionowe i przemysłowe Brady do drukarek',
    seoDescription: 'Etykiety znamionowe i przemysłowe Brady do druku: metalizowane zamienniki tabliczek, plomby VOID, taśmy ciągłe, zawieszki, znaki i etykiety GHS.',
    longDescription: 'Etykiety przemysłowe Brady oznaczają maszyny, urządzenia, regały, rury i stanowiska pracy. Etykiety znamionowe z poliestru metalizowanego zastępują grawerowane tabliczki, plomby z wzorem VOID pokazują próbę zdjęcia, a taśmy ciągłe pozwalają drukować znaki dowolnej długości. W tej grupie są też zawieszki, etykiety GHS na pojemniki z chemikaliami, taśmy odblaskowe i świecące w ciemności oraz etykiety do kolorowych drukarek atramentowych. Materiał B- określa odporność na chemikalia, temperaturę, UV i ścieranie.',
  }),
  podkategoria({
    id: 'etykiety-rfid-brady',
    slug: 'etykiety-rfid-brady',
    name: 'Etykiety RFID Brady',
    description: 'Etykiety UHF RFID Brady do druku i kodowania: ewidencja zasobów, laboratorium, metal, flagi kablowe i wykrywanie wilgoci',
    seoTitle: 'Etykiety RFID UHF Brady do druku i kodowania',
    seoDescription: 'Etykiety UHF RFID Brady na rolkach do druku i kodowania: do ewidencji zasobów, na metal, laboratoryjne, flagi kablowe RFID i etykiety wykrywające wilgoć.',
    longDescription: 'Etykieta RFID łączy nadruk termotransferowy z chipem i anteną, które czytnik odczytuje radiowo, bez widoczności kodu. Etykiety UHF Brady pracują w paśmie 860–960 MHz, a drukarka z koderem RFID zapisuje chip w tym samym cyklu co nadruk. Antena musi pasować do podłoża: zwykłe etykiety działają na tworzywach i kartonie, a na metal przeznaczono osobne etykiety on-metal. Wadliwe znaczniki są oznaczone na rolce. Etykiety RFID do drukarek innych producentów są w kategorii [etykiety RFID Zebra](/etykiety-rfid-zebra).',
  }),
  podkategoria({
    id: 'tasmy-barwiace-brady',
    slug: 'tasmy-barwiace-brady',
    name: 'Taśmy barwiące Brady',
    description: 'Taśmy termotransferowe Brady w kasetach i na rolkach do drukarek przenośnych, stacjonarnych, przemysłowych i aplikatorów',
    seoTitle: 'Taśmy barwiące Brady do drukarek — kasety i rolki',
    seoDescription: 'Taśmy barwiące Brady do druku termotransferowego: kasety i75, M61 i B30, rolki na gilzie 25 mm i taśmy do aplikatorów, woskowo-żywiczne i żywiczne, w kolorach.',
    longDescription: 'Taśma barwiąca przenosi farbę na etykietę w druku termotransferowym, więc od niej zależy odporność nadruku. Taśmy woskowo-żywiczne nadają się do papieru i matowych folii, a żywiczne do poliestru, poliimidu i etykiet narażonych na chemikalia albo wysoką temperaturę. Brady dostarcza taśmy w kasetach, które zakłada się bez przewlekania, oraz na rolkach z gilzą do drukarek przemysłowych. Szerokość taśmy dobiera się do szerokości etykiety, a serię do materiału B- podanego na karcie etykiety. Taśmy do drukarek Zebra zawiera kategoria [taśmy termotransferowe](/tasmy-termotransferowe), a taśmy SATO — [taśmy termotransferowe SATO](/tasmy-termotransferowe-sato).',
  }),
  podkategoria({
    id: 'tusze-brady',
    slug: 'tusze-brady',
    name: 'Tusze do drukarek Brady',
    description: 'Kasety z tuszem i materiały eksploatacyjne do kolorowych drukarek atramentowych BradyJet',
    seoTitle: 'Tusze do drukarek Brady BradyJet — kasety CMY i K',
    seoDescription: 'Kasety z tuszem do kolorowych drukarek etykiet BradyJet: tusze kolorowe CMY i czarny z wbudowaną głowicą, rolka wyrównująca i nasadki do przechowywania kaset.',
    longDescription: 'Kolorowe drukarki atramentowe Brady drukują etykiety tuszem z kaset, w których jest też głowica drukująca. Wymiana kasety odnawia więc również głowicę, a drukarka nie używa taśmy barwiącej. Kasety z tuszem kolorowym CMY i czarnym K dobiera się do modelu drukarki. W tej grupie są też rolka wyrównująca i nasadki, które zabezpieczają wyjętą kasetę w czasie przechowywania. Etykiety do tych drukarek są w kategorii [etykiety znamionowe i przemysłowe Brady](/etykiety-przemyslowe-brady).',
  }),
]

/**
 * Kafelki nad siatką /etykiety-brady (układ jak „Drukarki do etykiet według zastosowania” na /drukarki-etykiet).
 * Filtr „Rodzaj” działa w przeglądarce i nie jest linkiem, więc bez kafelków strona nie linkowała w HTML
 * do żadnej ze swoich podkategorii.
 */
export const KAFLE_ETYKIET_BRADY = {
  heading: 'Etykiety Brady według zastosowania',
  lead: 'Materiały podzielono według tego, co się oznacza. W każdej grupie filtr „Do drukarki” pokazuje materiały do wybranej serii drukarek.',
  items: [
    { href: '/oznaczniki-kabli-brady', title: 'Oznaczniki przewodów i kabli', text: 'Owijki, flagi i zawieszki na przewody oraz opisy listew zaciskowych.' },
    { href: '/koszulki-termokurczliwe-brady', title: 'Koszulki termokurczliwe', text: 'Rurki PermaSleeve z nadrukiem, obkurczane na przewodzie.' },
    { href: '/etykiety-laboratoryjne-brady', title: 'Etykiety laboratoryjne', text: 'Probówki, fiolki i szkiełka w zamrażarce, ciekłym azocie i rozpuszczalnikach.' },
    { href: '/etykiety-na-plytki-drukowane-brady', title: 'Etykiety na płytki drukowane', text: 'Poliimid odporny na lutowanie oraz materiały antystatyczne ESD.' },
    { href: '/etykiety-przemyslowe-brady', title: 'Etykiety znamionowe i przemysłowe', text: 'Tabliczki znamionowe, plomby, taśmy ciągłe, zawieszki i znaki.' },
  ],
}

export const BRADY_PODKATEGORIE_MATERIALOW_IDS = new Set(bradyPodkategorieMaterialow.map((s) => s.id))
