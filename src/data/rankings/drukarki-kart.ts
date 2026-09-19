/**
 * Warstwa redakcyjna rankingu drukarek kart (/poradnik/jaka-drukarka-do-kart-plastikowych).
 * Tabela, zdjęcia, nazwy, linki i ceny biorą się z products.ts (kategoria drukarki-kart,
 * bez zestawów). Tu są wyłącznie skróty do tabeli i oceny, których nie da się wyliczyć.
 *
 * Nowa drukarka w kategorii: dopisz wpis poniżej (bez wpisu model widnieje w tabeli
 * z adnotacją „ocena w przygotowaniu”), podbij updatedAt poradnika w guides.ts
 * i zgłoś adres poradnika w Search Console.
 */
export interface CardPrinterVerdict {
  productId: string
  /** skróty do tabeli porównawczej */
  table: { druk: string; predkosc: string; kodowanie: string; lacznosc: string; zabezpieczenia: string }
  bestFor: string
  pros: [string, string]
  cons: [string, string]
  verdict: string
}

export interface CardPrinterUseCase {
  title: string
  productId: string
  reason: string
  alternativeId?: string
  alternativeReason?: string
}

export const cardPrinterVerdicts: CardPrinterVerdict[] = [
  {
    productId: 'magicard-pronto100',
    table: { druk: 'Jednostronny', predkosc: 'do 200 kart/h', kodowanie: 'Brak', lacznosc: 'USB, Ethernet', zabezpieczenia: 'HoloKote, 3 wzory' },
    bestFor: 'Recepcja, mały klub, pierwsze wdrożenie',
    pros: ['Najniższa cena w zestawieniu i obudowa, która mieści się na ladzie recepcji', 'Znak wodny HoloKote bez dodatkowych materiałów'],
    cons: ['Podajnik na 50 kart wymaga częstszego uzupełniania', 'Wyłącznie druk jednostronny'],
    verdict: 'Wystarcza tam, gdzie karty drukuje się pojedynczo lub w krótkich seriach, a rewers pozostaje pusty. Przy dłuższych seriach lepiej sprawdzi się model z podajnikiem na 100 kart.',
  },
  {
    productId: 'zebra-zc100',
    table: { druk: 'Jednostronny', predkosc: 'do 150 kart/h', kodowanie: 'Magnetyczny (opcja)', lacznosc: 'USB; Ethernet (opcja)', zabezpieczenia: 'Uwierzytelnianie hosta, AES' },
    bestFor: 'Identyfikatory pracownicze w małej i średniej firmie',
    pros: ['Cztery konfiguracje: USB, Ethernet, koder magnetyczny albo oba', 'Podajnik na 100 kart i taśmy wspólne z ZC300'],
    cons: ['Wyłącznie druk jednostronny', 'Ethernet jako opcja podnosi cenę'],
    verdict: 'Rozsądny wybór dla firmy, która drukuje identyfikatory z jednej strony i chce zostać przy jednym producencie dla drukarek kart i etykiet. Karty hotelowe z paskiem magnetycznym obsłuży wersja z koderem.',
  },
  {
    productId: 'magicard-300',
    table: { druk: 'Dwustronny', predkosc: 'do 160 kart/h', kodowanie: 'Brak w oferowanej wersji', lacznosc: 'USB, Ethernet', zabezpieczenia: 'HoloKote, 4 wzory i do 4 własnych' },
    bestFor: 'Szkoły i firmy z legitymacjami dwustronnymi',
    pros: ['Druk dwustronny w standardzie', 'Do czterech własnych wzorów znaku wodnego HoloKote'],
    cons: ['Oferowana wersja nie koduje kart', 'Wolniejsza od ZC300 przy druku jednostronnym'],
    verdict: 'Najprostsza droga do legitymacji z danymi po obu stronach. Jeśli karta ma również działać w systemie kontroli dostępu z zapisem w chipie, potrzebny będzie model z koderem.',
  },
  {
    productId: 'zebra-zc300',
    table: { druk: 'Jedno- lub dwustronny', predkosc: 'do 200 kart/h', kodowanie: 'Magnetyczny; MIFARE i stykowy (opcje)', lacznosc: 'USB, Ethernet', zabezpieczenia: 'Uwierzytelnianie hosta, wyświetlacz LCD' },
    bestFor: 'Karty z kodowaniem magnetycznym lub MIFARE',
    pros: ['Wersja jedno- lub dwustronna, Ethernet w standardzie, kolorowy wyświetlacz', 'Kodery magnetyczny, MIFARE i stykowy jako opcje'],
    cons: ['Konfiguracje z koderem zbliżeniowym i Wi-Fi dostępne na zapytanie', 'Taśma YMCKOK do druku dwustronnego jest droższa od YMCKO'],
    verdict: 'Najbardziej uniwersalny model zestawienia: ta sama drukarka obsłuży identyfikator pracowniczy, legitymację i kartę hotelową z paskiem magnetycznym.',
  },
  {
    productId: 'zebra-zc350',
    table: { druk: 'Jedno- lub dwustronny', predkosc: 'do 225 kart/h', kodowanie: 'Magnetyczny; MIFARE, stykowy, UHF (opcje)', lacznosc: 'USB, Ethernet', zabezpieczenia: 'Taśmy specjalne, Kensington, zamek (opcja)' },
    bestFor: 'Identyfikatory zabezpieczone przed podrobieniem',
    pros: ['Taśmy specjalne: perłowa, metaliczna i z podwójną warstwą ochronną', 'Do 225 kart/h, koder UHF i obudowa zamykana na klucz jako opcje'],
    cons: ['Wymaga kolorowych taśm serii 800350, droższych od 800300', 'Najwyższa cena w zestawieniu'],
    verdict: 'Dla instytucji, które muszą utrudnić podrobienie karty albo kodować karty czytane z odległości. Przy zwykłych identyfikatorach różnica w cenie względem ZC300 nie ma uzasadnienia.',
  },
  {
    productId: 'magicard-600-duo',
    table: { druk: 'Dwustronny', predkosc: 'do 190 kart/h', kodowanie: 'Brak w oferowanej wersji', lacznosc: 'USB, Ethernet, Wi-Fi', zabezpieczenia: 'HoloKote, do 10 własnych wzorów' },
    bestFor: 'Druk dwustronny przez Wi-Fi, drobny tekst',
    pros: ['Wi-Fi w standardzie', 'Druk monochromatyczny do 600 × 300 dpi i do dziesięciu własnych wzorów HoloKote'],
    cons: ['Najwyższa cena wśród modeli Magicard', 'Brak kodera w oferowanej wersji'],
    verdict: 'Dla działów, które drukują dwustronnie i chcą ustawić drukarkę tam, gdzie nie ma gniazda sieciowego sieciowego.',
  },
  {
    productId: 'magicard-prima-8',
    table: { druk: 'Retransferowy, jedno- lub dwustronny', predkosc: 'ok. 100 kart/h', kodowanie: 'Stykowy i zbliżeniowy (Prima 815)', lacznosc: 'USB, Ethernet', zabezpieczenia: 'Folia na całej karcie, laminator (opcja)' },
    bestFor: 'Karty z chipem i identyfikatory na lata',
    pros: ['Nadruk do samej krawędzi pod folią, także na kartach z chipem', 'Wersja Prima 815 koduje chip stykowy i zbliżeniowy podczas druku'],
    cons: ['Najwyższa cena w zestawieniu i najwolniejszy druk, około 100 kart/h', 'Sterownik tylko dla Windows'],
    verdict: 'Jedyna drukarka retransferowa w zestawieniu. Ma sens, gdy karty mają wyglądać jak z drukarni i wytrzymać lata w portfelu albo gdy drukuje się na kartach z chipem, na których druk bezpośredni zostawia ślady. Do prostych identyfikatorów to za dużo drukarki.',
  },
]

export const cardPrinterUseCases: CardPrinterUseCase[] = [
  { title: 'Małe biuro, recepcja albo klub: kilkadziesiąt kart miesięcznie', productId: 'magicard-pronto100', reason: 'najniższa cena, mały rozmiar i znak wodny HoloKote w standardzie', alternativeId: 'zebra-zc100', alternativeReason: 'gdy potrzebny jest podajnik na 100 kart lub koder magnetyczny' },
  { title: 'Szkoła: legitymacje z danymi po obu stronach', productId: 'magicard-300', reason: 'druk dwustronny w standardzie i własny wzór znaku wodnego', alternativeId: 'zebra-zc300', alternativeReason: 'w wersji ZC32, gdy legitymacja ma być także kodowana' },
  { title: 'Karty hotelowe i przepustki z paskiem magnetycznym lub chipem MIFARE', productId: 'zebra-zc300', reason: 'kodery magnetyczny, MIFARE i stykowy w jednej platformie' },
  { title: 'Identyfikatory trudne do podrobienia', productId: 'zebra-zc350', reason: 'taśmy specjalne z panelem perłowym, metalicznym lub podwójną warstwą ochronną', alternativeId: 'magicard-600-duo', alternativeReason: 'gdy wystarczy własny wzór znaku wodnego HoloKote' },
  { title: 'Drukarka w sieci Wi-Fi, bez kabla sieciowego', productId: 'magicard-600-duo', reason: 'jedyny model zestawienia z Wi-Fi w standardzie' },
  { title: 'Największe serie i tempo pracy', productId: 'zebra-zc350', reason: 'do 225 kart na godzinę w kolorze i kosz odrzutów w wersji dwustronnej' },
  { title: 'Karty z chipem i identyfikatory, które mają wytrzymać lata', productId: 'magicard-prima-8', reason: 'druk retransferowy do krawędzi pod folią, także na kartach stykowych i zbliżeniowych; koder w wersji Prima 815', alternativeId: 'zebra-zc350', alternativeReason: 'gdy wystarczy druk bezpośredni z taśmą specjalną i koderem' },
]
