import type { Product } from './products'
import { wspolneJ4000 } from './brady-j4000-wspolne'

// Kaseta z tuszem J40-CMY (z wbudowaną głowicą) i nasadki J40-CAP do drukarki BradyJet J4000. 14.11.2026.

export const bradyJ40Cmy: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-cmy',
  slug: 'brady-j40-cmy',
  name: 'Kaseta z tuszem Brady J40-CMY do drukarki BradyJet J4000',
  seoTitle: 'Brady J40-CMY — kaseta z tuszem do drukarki Brady J4000',
  seoDescription: 'Kaseta z tuszem Brady J40-CMY do kolorowej drukarki etykiet BradyJet J4000: 48 ml tuszu CMY, wbudowana głowica drukująca, czerń z CMY. Nr art. 152714.',
  shortDescription: 'Brady J40-CMY — trójkolorowa kaseta z tuszem i wbudowaną głowicą do kolorowej drukarki etykiet Brady J4000. Jedna kaseta daje wszystkie kolory nadruku, także czerń.',
  description: 'Brady J40-CMY to jedyna kaseta z tuszem, której używa drukarka BradyJet J4000. Mieści 48 ml tuszu w trzech kolorach: cyjanie, magencie i żółtym. Czerń drukarka uzyskuje z połączenia tych kolorów, więc osobna czarna kaseta nie jest potrzebna.\n\nGłowica drukująca jest częścią kasety. Wymiana kasety daje zatem także nową głowicę. Przed włożeniem do drukarki zdejmuje się taśmę zabezpieczającą dysze. Gdy w kasecie zostaje 5% tuszu, zapala się kontrolka niskiego poziomu atramentu. Poziom tuszu i szacunkowy koszt etykiety pokazuje program Brady PrintHub.\n\nFabrycznie zamknięta kaseta nadaje się do użycia przez 12 miesięcy. Otwarta kaseta w drukarce nadaje się do druku przez 3 miesiące, a poza drukarką, w nasadce J40-CAP, przez miesiąc. Kasety przechowuje się w temperaturze poniżej 27 °C. Smart Cell na kasecie informuje drukarkę o jej typie.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/bradyjet-j4000-full-colour-ink-cartridge-pid-j40-cmy',
  images: ['/images/products/brady/j40-cmy.png', '/images/products/brady/j40-cmy-glowica.png'],
  imageDescriptions: [
    'Kaseta z tuszem Brady J40-CMY z kolorową etykietą na górze',
    'Spód kasety Brady J40-CMY z dyszami i stykami wbudowanej głowicy drukującej',
  ],
  specifications: [
    { name: 'Part Number', value: 'J40-CMY' },
    { name: 'Numer artykułu Brady', value: '152714' },
    { name: 'Typ', value: 'Kaseta z tuszem do druku atramentowego z wbudowaną głowicą drukującą' },
    { name: 'Kolory', value: 'cyjan, magenta, żółty; czerń z połączenia kolorów' },
    { name: 'Pojemność', value: '48 ml' },
    { name: 'Wymiary kasety', value: '35,56 × 71,12 × 50,8 mm' },
    { name: 'Przydatność', value: 'zamknięta: 1 rok; otwarta w drukarce: 3 miesiące; otwarta w nasadce J40-CAP: 1 miesiąc' },
    { name: 'Temperatura pracy', value: 'od 5 do 35 °C' },
    { name: 'Temperatura przechowywania', value: 'poniżej 27 °C' },
    { name: 'Rozpoznawanie kasety', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J4000' },
  ],
  faq: [
    { question: 'Czy Brady J4000 ma osobną kasetę z czarnym tuszem?', answer: 'Nie. [Brady J4000](/produkt/brady-j4000) drukuje z jednej kasety J40-CMY, a czerń tworzy z połączenia cyjanu, magenty i żółtego. W kasecie jest też głowica drukująca.' },
    { question: 'Jak długo można używać otwartej kasety J40-CMY?', answer: 'Do 3 miesięcy w drukarce. Wyjętą kasetę przechowuje się w nasadce J40-CAP i zużywa w ciągu miesiąca. Zamknięta kaseta zachowuje przydatność przez rok.' },
  ],
  applications: ['Wymiana tuszu w drukarce Brady J4000', 'Zapas kaset do druku kolorowych etykiet'],
}

export const bradyJ40Cap: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-cap',
  slug: 'brady-j40-cap',
  name: 'Nasadki do przechowywania kaset z tuszem Brady J40-CAP do drukarki J4000 (2 szt.)',
  seoTitle: 'Brady J40-CAP — nasadki na kasety z tuszem do Brady J4000',
  seoDescription: 'Nasadki Brady J40-CAP do przechowywania otwartych kaset z tuszem J40-CMY poza drukarką BradyJet J4000. Chronią dysze przed wyschnięciem. 2 szt. Nr art. 152713.',
  shortDescription: 'Brady J40-CAP — dwie białe nasadki do przechowywania kaset z tuszem J40-CMY poza drukarką Brady J4000. Zakryte dysze nie wysychają.',
  description: 'Brady J40-CAP to opakowanie dwóch białych nasadek do kaset z tuszem J40-CMY. Nasadka zakrywa dysze kasety wyjętej z drukarki BradyJet J4000, dzięki czemu tusz w głowicy nie wysycha. Każda nasadka ma czarny pałąk.\n\nKaseta wyjęta z drukarki bez nasadki może zaschnąć już po 30 minutach. W nasadce otwarta kaseta zachowuje przydatność przez miesiąc. Nasadka ma wymiary 31,75 × 25,4 × 44,45 mm.\n\nDwie nasadki są w zestawie z drukarką J4000. Ta karta dotyczy nasadek zapasowych.',
  sameAs: 'https://www.brady.eu/label-printers/j4000-ink-cartridge-storage-caps-pid-j40-cap',
  images: ['/images/products/brady/j40-cap.png'],
  imageDescriptions: ['Dwie białe nasadki Brady J40-CAP z czarnymi pałąkami do przechowywania kaset z tuszem'],
  specifications: [
    { name: 'Part Number', value: 'J40-CAP' },
    { name: 'Numer artykułu Brady', value: '152713' },
    { name: 'Typ', value: 'Nasadki do przechowywania kaset z tuszem' },
    { name: 'Liczba sztuk w opakowaniu', value: '2' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary', value: '31,75 × 25,4 × 44,45 mm' },
    { name: 'Zgodne kasety', value: 'J40-CMY' },
    { name: 'Zgodne drukarki', value: 'J4000' },
  ],
  faq: [
    { question: 'Po co nasadka J40-CAP do kasety z tuszem?', answer: 'Zakrywa dysze kasety wyjętej z drukarki, więc tusz w głowicy nie wysycha. Bez nasadki dysze mogą zaschnąć po 30 minutach. Dwie nasadki są w zestawie z [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Przechowywanie otwartej kasety J40-CMY', 'Ochrona dysz przed wyschnięciem'],
}

export const bradyJ4000TuszeKarty: Product[] = [bradyJ40Cmy, bradyJ40Cap]
