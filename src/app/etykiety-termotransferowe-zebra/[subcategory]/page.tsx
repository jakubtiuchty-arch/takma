import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getSubcategoryBySlug } from '@/data/products'
import {
  getTransferLabelSeriesBySubcategory,
  type TransferLabelSeries,
  type TransferLabelSubcategory,
} from '@/data/transfer-label-series'
import { ChevronRightIcon, CheckIcon, ArrowRightIcon, ShieldCheckIcon } from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import CommonDefinitionsSchema from '@/components/schemas/CommonDefinitions'

const siteUrl = 'https://www.takma.com.pl'

const SUBCATEGORIES: TransferLabelSubcategory[] = ['papierowe', 'foliowe', 'specjalne']

interface SubConfig {
  label: string
  h1: string
  intro: string
  accent: string
  /** slug subcategory w products.ts (dla seoTitle/Description) */
  productSlug: string
}

// ── FAQ per podkategoria — pełne, merytoryczne odpowiedzi do AEO/GEO
//    (Google AI Overviews, ChatGPT, Perplexity skanują FAQPage jako konkretne odpowiedzi).
const FAQ_BY_SUB: Record<TransferLabelSubcategory, { q: string; a: string }[]> = {
  papierowe: [
    {
      q: 'Kiedy wybrać etykietę papierową termotransferową zamiast foliowej?',
      a: 'Papier wybierz, gdy etykieta nie musi przetrwać lat ani warunków agresywnych: wysyłka kurierska, magazyn, opakowania zbiorcze, picking, etykiety produktowe krótko- i średnioterminowe. Papier jest 3–5× tańszy od folii. Folię (poliester, polipropylen) wybierz dopiero, gdy oznaczenie ma wytrzymać lata, kontakt z chemikaliami, wodę, ścieranie lub UV.',
    },
    {
      q: 'Jaką taśmę barwiącą dobrać do papieru termotransferowego?',
      a: 'Do papieru używaj taśmy wosk-żywica (wax-resin) — np. Zebra 3200 lub 2300. Czysty wosk (Zebra 2100) wystarcza dla podstawowych zastosowań magazynowych, ale wax-resin daje ostrzejszy nadruk i lepszą odporność na ścieranie. Taśma żywiczna (resin) jest do folii — na papierze to nadmiar i marnowanie pieniędzy.',
    },
    {
      q: 'Czym Z-Perform 1000T różni się od Z-Select 2000T?',
      a: 'Z-Perform 1000T to papier niepowlekany — ekonomiczny, do wysyłki i magazynu, najpopularniejszy w polskim B2B. Z-Select 2000T ma powłokę top-coat (gładsza powierzchnia), która daje ostrzejszy nadruk drobnych kodów 2D i większą odporność na wilgoć. Z-Select wybierz do farmacji, healthcare, drobnych kodów DataMatrix; Z-Perform do codziennej logistyki.',
    },
    {
      q: 'Czy papierowe etykiety termotransferowe mają atest żywnościowy?',
      a: 'Tak — Z-Perform 1000T i Z-Select 2000T spełniają BfR XXI (Niemcy), EC 1935/2004 i EU 10/2011. Klej jest BPA-free i bez lateksu. Można je stosować na opakowania zbiorcze w przemyśle spożywczym (kontakt pośredni). Wyjątek: Z-Essentials 500T (budżetowa) nie ma atestu — to materiał do prostych zastosowań magazynowych.',
    },
    {
      q: 'Co to jest klej zdejmowalny (removable) i kiedy go wybrać?',
      a: 'Klej zdejmowalny (Z-Perform 1000T Removable) pozwala odlepić etykietę bez śladów i resztek. Wybierz go do etykiet tymczasowych: promocji cenowych w retailu, ekspozytorów, etykiet QC, sprzętu wynajmowanego. Uwaga: to nie jest klej wielokrotnego użytku — po odklejeniu siła przyczepności spada. Do plombowania wybierz etykiety zabezpieczające (8000T Void).',
    },
    {
      q: 'Czy papierowa etykieta TT nadaje się do chłodni lub mrożonek?',
      a: 'Zwykła Z-Perform 1000T aplikuje się powyżej 0°C — w chłodni standardowy klej nie chwyta. Do aplikacji na zmrożone opakowania wybierz 8000T All-Temp (sekcja specjalne): klej all-temperature chwyta już od -10°C, praca do -40°C. To papier — tańszy od folii kriogenicznej, w sam raz do typowego mrożenia żywności i logistyki chłodniczej.',
    },
    {
      q: 'Czym jest powłoka top-coat i czy warto za nią dopłacać?',
      a: 'Top-coat to przezroczysta powłoka na wierzchu papieru, która tworzy ultra-gładką powierzchnię. Korzyści: ostrzejszy nadruk drobnych kodów 2D (DataMatrix, QR), lepsza odporność na wilgoć i otarcia, mniejsze zużycie głowicy. Warto dopłacić tam, gdzie krytyczna jest skanowalność (farmacja, healthcare) lub etykieta jest narażona na wilgoć. Do typowej wysyłki niepowlekany Z-Perform wystarcza.',
    },
    {
      q: 'Jak długo trzyma nadruk termotransferowy na papierze?',
      a: 'Z taśmą wosk-żywica i papierem powlekanym (Z-Select 2000T) — kilka lat indoor bez utraty czytelności. Z czystym woskiem na niepowlekanym papierze (Z-Perform 1000T) — typowo 1–2 lata. To znacząca przewaga vs etykiety termiczne DT (12–24 mies.), które blakną z czasem. Do nadruków na lata na produkcie końcowym wybierz folię (Z-Ultimate 3000T).',
    },
    {
      q: 'Do jakich drukarek Zebra pasują papierowe etykiety TT?',
      a: 'Wszystkie drukarki Zebra z funkcją thermal transfer (TT) — czyli takie z literką "t" w nazwie modelu: biurkowe ZD230t/ZD411t/ZD421t/ZD621t, mid-range ZD611t/ZT231, przemysłowe ZT411/ZT421/ZT510/ZT610/ZT620. Drukarki DT (tylko termiczne) — z literką "d" — nie obsługują taśmy i nie wydrukują etykiet TT.',
    },
    {
      q: 'Czy oferujecie próbki przed zakupem?',
      a: 'Tak — udostępniamy rolki próbne każdej serii papierowej dla potwierdzenia kompatybilności z Twoją drukarką i powierzchnią docelową. Pomagamy też dobrać taśmę pod konkretny model drukarki. Próbki są darmowe dla klientów rozważających większe zamówienie — skontaktuj się przez formularz lub telefonicznie.',
    },
    {
      q: 'Czy mogę używać etykiet TT papierowych w drukarce tylko-DT?',
      a: 'Nie. Drukarki DT (z literką „d" w nazwie modelu, np. ZD230d, ZD421d) nie mają mechanizmu prowadzenia taśmy barwiącej i fizycznie nie zadrukują etykiet termotransferowych. Etykiety TT wymagają drukarki TT (z „t") lub kombinowanej DT/TT. W odwrotną stronę: drukarka TT może drukować również etykiety DT (bez taśmy), ale niepotrzebnie zużywa mechanizm taśmowy.',
    },
    {
      q: 'Jaka jest minimalna ilość zamówienia (MOQ) etykiet papierowych?',
      a: 'Minimum to jedna rolka — to standard Zebry dla wszystkich mediów. Liczba etykiet na rolce zależy od rozmiaru: dla 102×152 mm ok. 475 sztuk, dla 32×25 mm nawet 5180. Pełna specyfikacja Qty/Box dla każdego wariantu jest u producenta — dla większych zamówień (10+ rolek) podajemy dokładne ceny po wycenie indywidualnej.',
    },
    {
      q: 'Dlaczego ten sam rozmiar ma różne ceny w różnych seriach?',
      a: 'Cena zależy od materiału (papier niepowlekany vs powlekany top-coat), kleju (zwykły akrylowy vs all-temperature), atestów (z atestem żywnościowym vs bez) i liczby etykiet na rolce. Z-Perform 1000T 102×152 mm jest tańszy niż Z-Select 2000T w tym samym rozmiarze właśnie z powodu braku powłoki. Wybór zależy od wymagań aplikacji.',
    },
    {
      q: 'Jak długo można przechowywać etykiety przed użyciem?',
      a: 'Zebra zaleca 12 miesięcy od daty produkcji w temperaturze 20–25°C przy wilgotności względnej 40–50% (ciemny, suchy magazyn). Po tym okresie klej traci początkową przyczepność, a papier może chłonąć wilgoć i powodować problemy z prowadzeniem w drukarce. Rotacja FIFO (first in, first out) w magazynie to standard branżowy.',
    },
    {
      q: 'Czy potrzebuję drukarki z dispenserem (odklejakiem)?',
      a: 'Dispenser (odklejak) automatycznie odkleja etykietę od podkładu po wydruku — przyspiesza ręczne aplikowanie w punktach pakowania. Opłaca się przy 500+ etykietach dziennie ręcznie naklejanych. Do typowej wysyłki, gdzie etykiety idą na rolce do skanera lub aplikatora, dispenser jest zbędny. Sprawdź czy Twoja drukarka ma opcję dispenser-kit.',
    },
    {
      q: 'Jak długo trwa dostawa etykiet papierowych?',
      a: 'Standardowe rozmiary Z-Perform 1000T i Z-Select 2000T mamy zwykle dostępne od ręki lub w 1–3 dni roboczych z polskiego magazynu dystrybutora. Mniej popularne rozmiary lub Z-Perform 1000T Removable — 5–10 dni roboczych (sprowadzane z EU). Dla pilnych zamówień skontaktuj się — sprawdzimy szybką dostępność.',
    },
    {
      q: 'Czy macie konkretny rozmiar, którego nie widzę w katalogu?',
      a: 'Z-Perform 1000T ma 458 wariantów rozmiarowych — wszystkie są w tabeli na stronie serii. Jeśli potrzebujesz nietypowego rozmiaru spoza katalogu Zebry, możemy wykonać cięcie pod zamówienie z podstawowej rolki (powyżej 10 rolek). Skontaktuj się — podamy wycenę i czas realizacji.',
    },
  ],
  foliowe: [
    {
      q: 'Czym różni się poliester (PET), polipropylen (PP) i polietylen (PE)?',
      a: 'Poliester (Z-Ultimate 3000T) — najwyższa odporność chemiczna, mechaniczna i wieloletnia trwałość; do elektroniki, motoryzacji, oznaczeń UL. Polipropylen (PolyPro 3000T/4000T) — wodoodporny, sztywny, najtańsza folia; do retailu i przemysłu. Polietylen (PolyE 3100T) — elastyczny, dopasowuje się do zakrzywionych i ściskanych powierzchni; do butelek, tub, kosmetyków.',
    },
    {
      q: 'Dlaczego folia wymaga taśmy żywicznej (resin)?',
      a: 'Etykieta foliowa jest gładka i nieporowata — taśma wosk lub wosk-żywica nie zwiąże się z nią chemicznie i nadruk dałby się zetrzeć palcem. Tylko taśma żywiczna (resin, np. Zebra 5095) topi się i tworzy trwałe wiązanie z PET/PP/PE/poliolefiną, dając nadruk odporny na rozpuszczalniki, tarcie i temperatury do +180°C. Użycie taśmy woskowej na etykiecie foliowej to najczęstszy błąd w druku TT.',
    },
    {
      q: 'Co oznacza certyfikat UL na etykiecie?',
      a: 'UL (Underwriters Laboratories) recognized component to amerykański certyfikat materiałów spełniających wymagania bezpieczeństwa. Wymagany w oznaczeniach przemysłowych regulowanych: tabliczki znamionowe maszyn, etykiety bezpieczeństwa, oznaczenia komponentów elektronicznych w urządzeniach certyfikowanych UL. Z portfolio TT certyfikat UL posiada Z-Ultimate 3000T White.',
    },
    {
      q: 'Która folia jest najtańsza, a która najbardziej odporna?',
      a: 'Najtańsza folia: PolyPro 3000T Gloss (od ok. 374 zł netto) — wystarcza do większości wodoodpornych zastosowań przemysłowych i retailowych. Najbardziej odporna: Z-Ultimate 3000T White — premium poliester, certyfikat UL, trwałość do 5 lat, odporność na rozpuszczalniki, oleje, smary. Wybór zależy od wymagań aplikacji i budżetu.',
    },
    {
      q: 'Kiedy wybrać przezroczystą folię PolyPro Clear?',
      a: 'Przezroczysty polipropylen daje efekt „no label look" — etykieta niemal znika na opakowaniu, widać produkt pod nią, a nadruk wygląda jakby był wprost na opakowaniu. Typowe zastosowania: kosmetyki premium (butelki szklane), napoje i spożywka premium, opakowania z widoczną zawartością. Uwaga: kontrast kodu kreskowego jest niższy niż na białym tle — przetestuj skanowalność.',
    },
    {
      q: 'Czym jest matowa folia PolyPro 4000T Matte i kiedy jej użyć?',
      a: 'Matowa folia eliminuje refleksy światła, które zakłócają odczyt kodów przez kamery przemysłowe (machine vision). To materiał do zautomatyzowanych linii produkcyjnych, sortowni i systemów kontroli optycznej, gdzie etykiety są odczytywane maszynowo. Do odczytu przez człowieka wystarcza Gloss — Matte jest droższy i specjalistyczny.',
    },
    {
      q: 'Czy etykiety foliowe nadają się do kontaktu z żywnością?',
      a: 'Tak — PolyPro 3000T (Gloss i Clear) i PolyE 3100T posiadają atesty EC 1935/2004 i FDA do kontaktu z żywnością. Idealnie nadają się na opakowania mytych produktów spożywczych (chłodnie, mleczarstwo). Z-Ultimate 3000T (poliester) nie ma standardowego atestu — to materiał przemysłowy. Do żywności mokrej lub tłustej zawsze sprawdź konkretną certyfikację serii.',
    },
    {
      q: 'Czy etykiety foliowe są recyklowalne?',
      a: 'PolyE 3100T (polietylen) jest w pełni recyklowalny w strumieniu PE — szczególnie zalecany dla marek dbających o ekologię opakowań. PolyO 3100T (poliolefina) to ekologiczna alternatywa dla PVC: bez chloru, bez plastyfikatorów, BPA-free, latex-free. Pozostałe folie (poliester, polipropylen) są recyklowalne technicznie, ale w wyspecjalizowanych strumieniach.',
    },
    {
      q: 'Jak długo wytrzymuje etykieta foliowa z nadrukiem resin?',
      a: 'Z-Ultimate 3000T White: do 5 lat indoor bez utraty czytelności. PolyPro/PolyE/PolyO: kilka lat, zależnie od warunków. Nadruk resin jest odporny na rozpuszczalniki, oleje, smary, tarcie i wysokie temperatury (do +180°C). Folie wybierane są właśnie dla wieloletniej trwałości — papier (Z-Perform/Z-Select) wytrzymuje krócej i jest tańszy.',
    },
    {
      q: 'Do jakich drukarek pasują etykiety foliowe?',
      a: 'Drukarki Zebra z funkcją thermal transfer i obsługą taśmy resin: biurkowe ZD421t/ZD621t, mid-range ZD611t/ZT231, przemysłowe ZT411/ZT421/ZT510/ZT610/ZT620. Druk na etykietach foliowych wymaga wyższej temperatury głowicy i często precyzyjnej kalibracji — w drukarkach przemysłowych jest to standard, w biurkowych warto przetestować z konkretną serią.',
    },
    {
      q: 'Dlaczego nadruk na mojej etykiecie foliowej ściera się palcem? (typowy problem)',
      a: 'To najczęstszy błąd: użyto taśmy woskowej (Zebra 2300/2100) lub wosk-żywicznej (3200) zamiast żywicznej (resin Zebra 5095). Wosk nie wiąże się chemicznie z PET/PP/PE — nadruk leży tylko na powierzchni i ściera się pod palcem. Sprawdź taśmę w drukarce: do etykiet foliowych ZAWSZE resin. To naprawia 95% przypadków „nadruk się ściera".',
    },
    {
      q: 'Co oznacza skrót „BOPP" przy polipropylenie?',
      a: 'BOPP to Biaxially-Oriented Polypropylene — polipropylen rozciągnięty dwukierunkowo (wzdłuż i w poprzek). Proces nadaje folii wyższą wytrzymałość mechaniczną, sztywność, odporność na rozdarcie i lepszą przezroczystość. Wszystkie etykiety polipropylenowe Zebra (PolyPro 3000T/4000T) używają BOPP. To standard branżowy dla folii etykietowych.',
    },
    {
      q: 'Dlaczego folia kosztuje 3–5× więcej niż papier?',
      a: 'Cena odzwierciedla: koszt produkcji syntetyku (poliester, polipropylen, polietylen) vs taniego papieru; trwałość wieloletnia vs roczna; odporność chemiczną i mechaniczną; certyfikat UL (Z-Ultimate). Dla oznaczeń trwałych na produktach końcowych folia opłaca się — etykieta papierowa rok później jest nieczytelna i wymaga wymiany. Total cost of ownership jest niższy.',
    },
    {
      q: 'Czy macie folie w innych kolorach niż biały?',
      a: 'W standardowym katalogu Zebry: biały (PolyPro 3000T Gloss, PolyPro 4000T Matte, Z-Ultimate 3000T White), przezroczysty (PolyPro 3000T Clear) i srebrny metaliczny (Z-Ultimate 3000T Silver). Inne kolory (czerwony, żółty, niebieski) dostępne pod zamówienie z większej partii — kontakt indywidualny dla wyceny.',
    },
    {
      q: 'Czy mogę drukować kolorowy nadruk na etykietach foliowych TT?',
      a: 'Standardowe taśmy resin Zebra dają nadruk czarny — to standard kodów kreskowych i tekstu. Kolorowe taśmy (czerwone, niebieskie, srebrne) istnieją u producentów taśm jak Armor czy Sony, ale są wyspecjalizowane. Do pełnokolorowych etykiet stosuje się drukarki kolorowe inkjet/laser, nie TT. Dla logo kolorowego stosuje się pre-printed folię + druk TT zmiennych danych.',
    },
    {
      q: 'Jakie są typowe rozmiary rolek foliowych (długość, średnica)?',
      a: 'Standardowe rolki Zebra foliowe: dla drukarek biurkowych — gilza 25 mm, średnica zewnętrzna do 127 mm. Dla drukarek przemysłowych — gilza 76 mm, średnica zewnętrzna do 203 mm. Liczba etykiet na rolce: dla 102×152 mm na Z-Ultimate ok. 950 sztuk, dla 51×25 mm nawet 4000+. Sprawdź specyfikację Twojej drukarki przed zamówieniem.',
    },
    {
      q: 'Czy folie nadają się do cięcia plotterem?',
      a: 'Tak — wszystkie folie BOPP, PET i PE Zebra dają się ciąć plotterem bez problemu. Etykiety mogą być przycięte do nietypowych kształtów (owalne, okrągłe, z wycięciami). Dla małych nakładów wykonujemy cięcie na zamówienie; dla seryjnych produkcji warto rozważyć dedykowane rolki z fabrycznym sztancowaniem (kiss-cut) — niższy koszt jednostkowy.',
    },
    {
      q: 'Co oznacza certyfikat BS5609 i kiedy go potrzebujesz?',
      a: 'BS5609 to brytyjska norma testująca odporność etykiety na 90-dniowe zanurzenie w słonej wodzie morskiej. Wymagana przez kod IMDG dla transportu chemikaliów niebezpiecznych drogą morską (beczki, IBC, kontenery). Z portfolio Zebry tylko PolyO 3100T (poliolefina) posiada certyfikat BS5609 sekcja 2 i 3 — przeznaczona dla branży chemicznej, naftowej, spedycji morskiej i etykiet GHS dla substancji niebezpiecznych.',
    },
    {
      q: 'Czy folia outdoor wytrzyma rok deszczu i słońca?',
      a: 'Z-Ultimate 3000T White (poliester) z taśmą resin 5095 — tak, ponad rok na zewnątrz bez utraty czytelności. PolyPro 3000T (Gloss i Clear) — krótkoterminowo (3-12 miesięcy) dzięki klejowi z odpornością UV. Z-Perform/Z-Select (papier) — nie nadają się outdoor, blakną w kilka tygodni. Do trwałych oznaczeń outdoor (tabliczki maszyn, oznaczenia gazowe, urządzenia ogrodowe) wybieraj zawsze Z-Ultimate.',
    },
    {
      q: 'Jaką grubość folii wybrać dla aplikatora automatycznego?',
      a: 'Dla aplikatorów automatycznych (Label-Aire, Bizerba, Avery Dennison) kluczowa jest sztywność folii. Najlepsze: PolyPro 4000T Matte (208 μm — najgrubsza folia w portfolio, najlepsza sztywność), PolyPro 3000T Gloss/Clear (130 μm) i Z-Ultimate 3000T (128 μm — sztywny PET). Elastyczna PolyE 3100T (155 μm) nadaje się tylko do aplikatorów wspierających elastyczne media. Przed inwestycją w aplikator zawsze przetestuj próbkę z konkretnym mechanizmem.',
    },
    {
      q: 'Czy mogę nakleić folię TT na bardzo zimną powierzchnię (chłodnia, mroźnia)?',
      a: 'Standardowe folie (PolyPro 3000T, PolyE 3100T, Z-Ultimate 3000T) wymagają minimalnej temperatury aplikacji 5°C. Do aplikacji w chłodni od 0°C lub na produkty z hali produkcyjnej do schłodzenia wybierz PolyPro 4000T Matte (min. -10°C). Do głębokiego mrożenia (-40°C i niżej) wybierz PolyPro 4000T Matte lub serię specjalną 8000T All-Temp (papier z klejem all-temperature). Naklejenie na zbyt zimną powierzchnię = klej nie chwyci, etykieta odpadnie.',
    },
    {
      q: 'Co to jest „dwell time" i dlaczego ma znaczenie dla kleju?',
      a: 'Dwell time (czas związania kleju) to okres po naklejeniu etykiety, w którym klej osiąga pełną siłę przyczepności — typowo 24-72 godziny w temperaturze pokojowej. Etykieta naklejona i zaraz wystawiona na ekstremalne warunki (mrożenie, chemikalia, woda) odpadnie. Procedura prawidłowej aplikacji: naklejenie w temperaturze pokojowej → dwell time 24h → dopiero wtedy przeniesienie do warunków docelowych. To krytyczne dla etykiet kriogenicznych, chemicznych i medycznych.',
    },
    {
      q: 'Jaki kontrast kodu kreskowego jest wymagany na etykiecie foliowej (ANSI grade)?',
      a: 'ANSI/ISO 15416 definiuje 5 stopni kontrastu kodu (A=4.0, B=3.0, C=2.0, D=1.0, F=poniżej). Dla skanerów przemysłowych minimum to grade C, ale rekomendacja branżowa to grade B+. Na białej etykiecie foliowej (PolyPro Gloss, Z-Ultimate White) z taśmą resin osiągasz grade A bez problemu. Na przezroczystej etykiecie foliowej (PolyPro Clear) kontrast zależy od podłoża — przetestuj skanowanie z docelową powierzchnią. Etykieta srebrna (Z-Ultimate Silver) wymaga laminowania kodu dla grade B.',
    },
    {
      q: 'Czy mogę preprintować folię u producenta i dodrukować zmienne dane TT?',
      a: 'Tak — to standard branżowy dla etykiet z kolorowym logo + zmiennymi danymi (kod, data, partia). Producenci jak HERMA, Schreiner czy lokalni dostawcy preprintują rolki etykiet foliowych Zebra ofsetowo lub fleksograficznie (kolorowe logo, fixed text), a Ty dodrukowujesz zmienne pola TT w swojej drukarce Zebra. Etykieta musi być specyfikacji kompatybilnej z TT (np. PolyPro 3000T Gloss). Zamówienie minimalne preprintów: typowo 5000-10 000 sztuk.',
    },
    {
      q: 'Etykiety foliowe TT vs naklejki cyfrowe (laser/inkjet) — kiedy co wybrać?',
      a: 'Etykiety foliowe TT (termotransfer): trwałość 5+ lat, odporność chemiczna, atesty UL/FDA/BfR, idealne dla zmiennych danych w średnich i dużych wolumenach (1000+ sztuk dziennie). Naklejki cyfrowe (laser, inkjet, pigment): pełen kolor, fotografie, małe nakłady (<1000 sztuk), prototypy. Etykiety foliowe TT wygrywają dla przemysłu, magazynu, medycyny, motoryzacji; naklejki cyfrowe dla marketingu, kreatywnych projektów i krótkich kampanii.',
    },
    {
      q: 'Jak rozpoznać starą folię, której nie warto już używać?',
      a: 'Objawy zestarzałej folii (powyżej 12 miesięcy magazynowania lub nieprawidłowo przechowywanej): klej żółknie po odklejeniu z podkładu, etykieta nie chwyta przy aplikacji lub odkleja się po kilku godzinach, lico zmatowiało lub wykazuje ślady absorpcji wilgoci. Sprawdź datę produkcji (kod na rolce). Zebra gwarantuje 12 miesięcy przy 20-25°C i RH 40-50%. Starą folię można jeszcze próbować na testy wewnętrzne, ale nie do końcowych aplikacji.',
    },
  ],
  specjalne: [
    {
      q: 'Czym różni się 8100T Cryocool od 8000T All-Temp?',
      a: 'Cryocool (folia poliestrowa) wytrzymuje ciekły azot (-196°C) i wielokrotne cykle mróz-rozmróz — to materiał dla biobanków, laboratoriów biotech i banków próbek. All-Temp (papier) jest tańszy i działa do -40°C — wystarcza do typowych chłodni, mrożonek i logistyki chłodniczej. Wybór zależy od skrajności temperatury i typu próbki/produktu.',
    },
    {
      q: 'Czy etykieta Cryocool naprawdę wytrzyma ciekły azot (-196°C)?',
      a: 'Tak — 8100T Cryocool jest specjalnie zaprojektowany do krioprzechowywania w ciekłym azocie i autoklawie (+120°C). Warunek krytyczny: prawidłowa aplikacja na suchą fiolkę w temperaturze pokojowej PRZED zamrożeniem, z czasem na związanie kleju (dwell time). Naklejanie na już zamrożoną powierzchnię daje słabsze trzymanie. Druk tylko taśmą resin (Zebra 5095).',
    },
    {
      q: 'Co to jest standard ISBT 128 i kiedy go potrzebujesz?',
      a: 'ISBT 128 to międzynarodowy standard identyfikacji produktów krwiopochodnych (krew, tkanki, komórki). Zapewnia jednoznaczne, bezpieczne kodowanie krytyczne dla transfuzji — niezgodność etykiety to ryzyko dla pacjenta. Etykieta 8000T Blood Bag Deep Freeze wspiera ten standard i jest dedykowana workom z krwią w głębokim mrożeniu (bank krwi, stacje krwiodawstwa).',
    },
    {
      q: 'Jak działa efekt VOID na etykiecie zabezpieczającej?',
      a: 'Etykieta 8000T Void Matte ma warstwową konstrukcję: przy próbie odklejenia warstwa wierzchnia rozdziela się i na powierzchni (lub na samej etykiecie) ujawnia się trwały, nieusuwalny napis „VOID". Tego efektu nie da się cofnąć — raz naruszona plomba na zawsze pokazuje dowód ingerencji. Stosowane do pieczęci gwarancyjnych, plomb dokumentów, kontroli dostępu.',
    },
    {
      q: 'Czym etykieta destruktywna (Z-Destruct PE) różni się od VOID?',
      a: 'Etykieta VOID zostaje w jednym kawałku po odklejeniu, tylko ujawnia napis — daje dowód ingerencji. Etykieta destruktywna (8100T Z-Destruct PE) fizycznie rozpada się na drobne, kruche kawałki przy próbie zdjęcia. Fragmentów nie da się zebrać ani ponownie nakleić — najwyższy poziom zabezpieczenia. Stosowana w plombach urzędowych, sprzęcie wojskowym, służbach specjalnych, lotnictwie.',
    },
    {
      q: 'Czy te etykiety specjalne wymagają specjalnej drukarki?',
      a: 'Nie — drukują się w standardowych drukarkach Zebra z funkcją thermal transfer (ZT411, ZT421, ZD421t, ZD621t itp.) z taśmą żywiczną (resin) Zebra 5095. Krytyczna jest taśma: tylko resin daje trwały nadruk odporny na warunki kriogeniczne i agresywne. Druk z taśmą woskową na materiałach specjalnych zniszczy próbkę przy pierwszym kontakcie z rozpuszczalnikiem/zimnem.',
    },
    {
      q: 'Dlaczego etykiety specjalne są tak drogie?',
      a: 'To materiały niszowe, produkowane w bardzo małych wolumenach do konkretnych zastosowań (biobanki, transfuzjologia, służby, plomby urzędowe). 8100T Z-Destruct PE kosztuje ok. 7000 zł netto za rolkę, Cryocool ok. 900 zł. Cena odzwierciedla specjalizację materiału i niski wolumen produkcji Zebry. Klienci kupują te produkty pojedynczo do krytycznych zastosowań, gdzie błąd identyfikacji ma poważne konsekwencje.',
    },
    {
      q: 'Czy konkurencja ma w ofercie te etykiety specjalne?',
      a: 'Większość polskich dystrybutorów ma w ofercie tylko Z-Perform i Z-Ultimate (bestsellery). Etykiety kriogeniczne, blood bag, destruktywne i VOID to nisze, których konkurencja zwykle nie utrzymuje na magazynie z powodu niskiej rotacji. W TAKMA mamy dostęp do wszystkich serii Zebra — sprowadzamy na zamówienie z autoryzowanego kanału. Dobieramy też taśmę pod konkretne zastosowanie.',
    },
    {
      q: 'Czy mogę zamówić mniejszą ilość niż 1 rolkę?',
      a: 'Minimalna jednostka sprzedaży to jedna rolka — to standard Zebry dla wszystkich mediów termotransferowych. Dla niszowych zastosowań (np. pojedyncze projekty laboratoryjne) udostępniamy darmowe próbki do oceny kompatybilności. Skontaktuj się — pomożemy dobrać konkretny rozmiar i taśmę dla Twojej drukarki i aplikacji.',
    },
    {
      q: 'Jakie branże najczęściej kupują etykiety specjalne?',
      a: 'Cryocool i Blood Bag — biobanki, laboratoria biotechnologiczne, banki krwi, szpitalne zakłady krwiodawstwa, badania kliniczne. All-Temp — łańcuch chłodniczy spożywczy, logistyka mrożona. VOID — sprzęt elektroniczny (pieczęci gwarancyjne), dokumenty wewnętrzne, kontrola dostępu. Z-Destruct PE — policja, służby specjalne, wojsko, lotnictwo, plomby urzędowe.',
    },
    {
      q: 'Jak prawidłowo nakleić etykietę kriogeniczną Cryocool (procedura)?',
      a: 'Krok po kroku: 1) Powierzchnia (fiolka, probówka) musi być sucha, czysta, odtłuszczona izopropanolem, w temperaturze pokojowej. 2) Aplikuj etykietę z lekkim dociskiem przez 3–5 sekund. 3) Pozostaw 24 godziny dwell time (czas na związanie kleju) w temperaturze pokojowej. 4) Dopiero potem przenieś do mrożenia. Nieprawidłowa aplikacja (na zmrożoną fiolkę, brak dwell time) skutkuje odpadaniem etykiety w azocie.',
    },
    {
      q: 'Czy oferujecie wsparcie w walidacji ISO/GMP/HACCP?',
      a: 'Tak — dla klientów farmaceutycznych, biotechnologicznych i medycznych dostarczamy karty charakterystyki materiału (TDS), certyfikaty zgodności (CoC) oraz dokumentację potwierdzającą atest. Pomagamy w przygotowaniu protokołu walidacji aplikacji etykiety (IQ/OQ/PQ) dla systemów GMP/GLP. Skontaktuj się z działem technicznym TAKMA — dobierzemy dokumentację pod Twoją procedurę.',
    },
    {
      q: 'Czy etykieta destruktywna (Z-Destruct PE) może być przeniesiona na inny obiekt?',
      a: 'Nie — to jest jej cel. Materiał polietylenowy jest kruchy i przy próbie odklejenia rozpada się na drobne, ostre fragmenty, których fizycznie nie da się zebrać w spójną etykietę. Klej zostaje na powierzchni docelowej i na fragmentach. To uniemożliwia recykling plomby lub jej przeniesienie — kluczowe w plombach urzędowych, sprzęcie wojskowym i służbach specjalnych, gdzie naruszenie musi być nieusuwalne.',
    },
    {
      q: 'Dlaczego warto kupować oryginalne etykiety Zebra zamiast tańszych zamienników?',
      a: 'Tańsze zamienniki nie spełniają specyfikacji termicznej głowicy Zebra — mogą zostawiać osady, niszczyć głowicę (koszt wymiany 1000–3000 zł), dawać nadruk niskiej jakości i nie mają atestów żywnościowych/medycznych. Oryginalne media Zebry są testowane wspólnie z drukarkami i taśmami — gwarantowana kompatybilność, atesty, gwarancja na drukarkę. Oszczędność 10–20% na tańszych etykietach kończy się kosztowną wymianą głowicy.',
    },
    {
      q: 'Jak długo trwa dostawa etykiet specjalnych?',
      a: 'Cryocool, All-Temp i Blood Bag — zwykle 7–14 dni roboczych (sprowadzane z magazynu EU Zebry). VOID Matte i Z-Destruct PE — 10–21 dni (produkcja pod zamówienie ze względu na niski wolumen). Dla pilnych zamówień medycznych skontaktuj się — w nagłych przypadkach możliwa szybka dostawa z magazynu dystrybutora. Zalecamy zamówienie z wyprzedzeniem dla projektów kontynuowanych.',
    },
    {
      q: 'Czy etykiety specjalne mają certyfikaty CE / FDA / inne?',
      a: 'Cryocool i Blood Bag mają dokumentację potwierdzającą zgodność z normami biologicznymi i kriogenicznymi (dostępna w TDS). Blood Bag wspiera ISBT 128 — międzynarodowy standard kodowania produktów krwiopochodnych. VOID i Z-Destruct mają specyfikacje techniczne wytrzymałości fizycznej. Dla zastosowań certyfikowanych (CE, MDR, FDA 21 CFR Part 11) skontaktuj się — dostarczamy dokumentację walidacyjną.',
    },
    {
      q: 'Czy mogę przetestować etykiety specjalne przed pełnym zakupem?',
      a: 'Tak — dla zastosowań krytycznych (biobanki, banki krwi, służby) udostępniamy próbne rolki lub fragmenty etykiet do testów kompatybilności z drukarką, taśmą i procedurą aplikacji. To krytyczne dla Cryocool — przetestuj cykl zamrażania/rozmrażania z Twoimi konkretnymi fiolkami i procedurą laboratoryjną przed inwestycją w większą partię.',
    },
  ],
}

// ── Sekcja edukacyjna dla /foliowe — 4 materiały foliowe w pigułce
//    Renderowana zaraz po hero. Pomaga użytkownikowi szybko wybrać typ folii
//    przed zejściem do kart serii. AI engines indeksują to jako zwięzłe
//    zestawienie kategorii i często cytują w odpowiedziach.
const FOLIOWE_MATERIALS_QUICK: {
  name: string
  short: string
  grubosc: string
  zakresTemp: string
  trwalosc: string
  bestFor: string
  cenaRel: string
  bestSeries: { slug: string; title: string }[]
  highlight: string
}[] = [
  {
    name: 'Poliester (PET) — Z-Ultimate',
    short: 'Premium folia o najwyższej odporności chemicznej i mechanicznej. Certyfikat UL Recognized Component.',
    grubosc: '128 μm',
    zakresTemp: '-40°C do +150°C',
    trwalosc: '5 lat indoor / 1+ rok outdoor',
    bestFor: 'Tabliczki znamionowe, motoryzacja, elektronika, oznaczenia UL, asset tagging',
    cenaRel: 'Premium (≈4× papier)',
    bestSeries: [
      { slug: 'z-ultimate-3000t-white', title: 'Z-Ultimate 3000T White' },
      { slug: 'z-ultimate-3000t-silver', title: 'Z-Ultimate 3000T Silver' },
    ],
    highlight: 'Jedyna folia z UL w portfolio Zebry',
  },
  {
    name: 'Polipropylen (BOPP) — PolyPro',
    short: 'Standardowa folia foliowa: wodoodporna, sztywna, atest BfR XIV dla suchych, wilgotnych ORAZ tłustych produktów.',
    grubosc: '130-208 μm',
    zakresTemp: '-54°C do +120°C (4000T) / -20°C do +80°C (3000T)',
    trwalosc: '1-2 lata indoor (krótkoterminowo outdoor)',
    bestFor: 'Przemysł, retail, beczki chemiczne, palety, opakowania spożywcze, etykiety półkowe',
    cenaRel: 'Średnia (≈3× papier)',
    bestSeries: [
      { slug: 'polypro-3000t-gloss', title: 'PolyPro 3000T Gloss (biały)' },
      { slug: 'polypro-3000t-clear', title: 'PolyPro 3000T Clear (przezroczysty)' },
      { slug: 'polypro-4000t-matte', title: 'PolyPro 4000T Matte (machine vision)' },
    ],
    highlight: 'Najlepszy stosunek ceny do trwałości',
  },
  {
    name: 'Polietylen (PE) — PolyE',
    short: 'Elastyczna folia, dostosowuje się do zakrzywionych i ściskanych powierzchni. Recyklowalna z opakowaniami PE.',
    grubosc: '155 μm',
    zakresTemp: '-20°C do +80°C',
    trwalosc: '1-2 lata indoor',
    bestFor: 'Butelki HDPE ściśliwe, tuby, kosmetyki, opakowania elastyczne, chemia gospodarcza',
    cenaRel: 'Średnia',
    bestSeries: [
      { slug: 'polye-3100t-gloss', title: 'PolyE 3100T Gloss' },
    ],
    highlight: 'BfR XIV RF≥3 — najszerszy atest spożywczy w foliach',
  },
  {
    name: 'Poliolefina — PolyO',
    short: 'Ekologiczny zamiennik PVC: bez chloru, BPA-free, recyklowalna. Jedyna folia z certyfikatem BS5609 (transport morski).',
    grubosc: '105 μm',
    zakresTemp: '-20°C do +80°C',
    trwalosc: '1-2 lata indoor / outdoor zgodny z BS5609',
    bestFor: 'Chemikalia (IBC, beczki), transport morski IMDG, etykiety GHS, branża naftowa',
    cenaRel: 'Średnia-premium',
    bestSeries: [
      { slug: 'polyo-3100t', title: 'PolyO 3100T' },
    ],
    highlight: 'Certyfikat BS5609 — IMDG/GHS dla niebezpiecznych',
  },
]

// ── Sekcja edukacyjna dla /specjalne — 5 serii niszowych w pigułce.
//    Każda z osobnym mechanizmem działania (kriogenika, ISO 3826-1, mroźnie,
//    tamper-evident VOID, destruktywna) — dlatego pokazujemy pełną listę.
const SPECJALNE_MATERIALS_QUICK: {
  name: string
  short: string
  grubosc: string
  zakresTemp: string
  trwalosc: string
  bestFor: string
  cenaRel: string
  bestSeries: { slug: string; title: string }[]
  highlight: string
}[] = [
  {
    name: '8100T Cryocool — kriogeniczna PET',
    short: 'Satynowy biały poliester (PET) z trwałym akrylowym klejem do ciekłego azotu (-196°C), suchego lodu i sterylizacji gamma. Trzyma na małych fiolkach 7-15 mm.',
    grubosc: '142 μm',
    zakresTemp: '-196°C do +100°C',
    trwalosc: '1+ rok indoor / do 6 mies. outdoor',
    bestFor: 'Biobanki, fiolki laboratoryjne, badania kliniczne, IVF, komórki macierzyste',
    cenaRel: 'Specjalistyczna',
    bestSeries: [
      { slug: '8100t-cryocool', title: '8100T Cryocool' },
    ],
    highlight: 'Odporność na promieniowanie gamma — unikat w portfolio',
  },
  {
    name: '8000T Blood Bag Deep Freeze — PE medyczna',
    short: 'Polietylen matowy biały z atestami ISO 3826-1 (brak migracji kleju do krwi) i ISO 10993-5 (brak genotoksyczności). Dedykowana wyłącznie do worków z krwią.',
    grubosc: '184 μm',
    zakresTemp: '-50°C do +80°C',
    trwalosc: '1+ rok indoor',
    bestFor: 'Banki krwi, stacje krwiodawstwa, transfuzjologia, oznaczenia FFP/KKCz/KKP',
    cenaRel: 'Specjalistyczna (medyczna)',
    bestSeries: [
      { slug: '8000t-blood-bag-deep-freeze', title: '8000T Blood Bag Deep Freeze' },
    ],
    highlight: 'Atesty ISO 3826-1 + ISO 10993-5 — bezpośredni kontakt z workami z krwią',
  },
  {
    name: '8000T All-Temp — papier do mroźni',
    short: 'Ultra-gładki biały papier z klejem all-temperature. Aplikacja od -29°C (na zmrożone opakowania), praca w najszerszym zakresie -54°C do +93°C wśród papierów.',
    grubosc: '156 μm',
    zakresTemp: '-54°C do +93°C',
    trwalosc: '1+ rok indoor',
    bestFor: 'Chłodnie, mroźnie głębokie, Work-in-Progress, logistyka mrożona, kartony i palety',
    cenaRel: 'Średnia specjalistyczna',
    bestSeries: [
      { slug: '8000t-all-temp', title: '8000T All-Temp' },
    ],
    highlight: 'Aplikacja od -29°C — naklejanie na zmrożone opakowania',
  },
  {
    name: '8000T Void Matte — zabezpieczająca z UL',
    short: 'Matowy srebrny poliester (PET) z metalizowanym klejem zostawiającym napis „VOID" przy próbie zdjęcia. Certyfikat UL Recognized z taśmami 3400 i 5095.',
    grubosc: '168 μm',
    zakresTemp: '-40°C do +150°C (VOID do +40°C)',
    trwalosc: '1+ rok indoor / do 1 roku outdoor',
    bestFor: 'Plomby gwarancyjne, tabliczki znamionowe, oznakowanie środków trwałych, elektronika UL',
    cenaRel: 'Specjalistyczna (UL)',
    bestSeries: [
      { slug: '8000t-void-matte', title: '8000T Void Matte' },
    ],
    highlight: 'Jedyna w portfolio z UL Recognized + funkcją VOID',
  },
  {
    name: '8100T Z-Destruct PE — destruktywna PE',
    short: 'Matowy biały polietylen z gumowym klejem (rubber). Folia fizycznie rozpada się na drobne kawałki przy próbie zdjęcia — najwyższy poziom zabezpieczenia.',
    grubosc: '133 μm',
    zakresTemp: '-40°C do +80°C',
    trwalosc: '1+ rok indoor / do 1 roku outdoor',
    bestFor: 'Plomby urzędowe, sprzęt wojskowy, elektronika premium, służby mundurowe, lotnictwo',
    cenaRel: 'Najwyższa (niche)',
    bestSeries: [
      { slug: '8100t-z-destruct-pe', title: '8100T Z-Destruct PE' },
    ],
    highlight: 'Najwyższy poziom zabezpieczenia — etykieta przestaje istnieć po próbie zdjęcia',
  },
]

// ── Sekcje deep-guide poniżej tabeli porównawczej (TCO, atesty, błędy).
//    Każda renderowana jako semantyczny H2/H3 — sygnał dla AI engines, że to
//    treść artykułowa, nie tylko listing produktów (TechArticle schema).
type GuideSection = {
  heading: string
  content: string
  table?: { headers: string[]; rows: string[][] }
}

const FOLIOWE_DEEP_GUIDE: GuideSection[] = [
  {
    heading: 'Etykieta foliowa czy papierowa? Analiza całkowitego kosztu posiadania (TCO)',
    content:
      'Etykieta foliowa kosztuje 3-5× więcej niż papierowa — ale dla oznaczeń trwałych na produktach końcowych **folia opłaca się** w perspektywie 3-letniej. Przykład: etykieta papierowa Z-Perform 1000T na tabliczce maszyny przemysłowej staje się nieczytelna po roku (blakną, ścieranie, oleje), wymaga wymiany. Etykieta foliowa Z-Ultimate 3000T White wytrzymuje 5+ lat indoor bez utraty czytelności. **Całkowity koszt posiadania (TCO)** etykiety foliowej dla trwałych aplikacji jest niższy: jedna naklejka + jedno naklejenie vs 5 naklejek + 5 cykli wymiany przez 5 lat.',
    table: {
      headers: ['Aspekt', 'Etykieta papierowa (Z-Select)', 'Etykieta foliowa (Z-Ultimate)'],
      rows: [
        ['Cena za rolkę 102×152 mm', '~80 zł', '~290 zł'],
        ['Trwałość czytelnego nadruku', '1-2 lata indoor', '5+ lat indoor'],
        ['Liczba wymian w 5 lat', '3-5×', '0×'],
        ['Koszt wymian (robocizna)', 'wysoki', 'zerowy'],
        ['Wymagana taśma', 'wosk-żywica (~200 zł)', 'żywiczna (~360 zł)'],
        ['TCO 5-letni dla 1000 etykiet', '~700 zł + 5h robocizny', '~650 zł + 1h robocizny'],
        ['Atesty (UL/FDA)', '—', 'tak (Z-Ultimate UL)'],
      ],
    },
  },
  {
    heading: 'Atesty i certyfikaty etykiet foliowych Zebra',
    content:
      'Folie termotransferowe Zebra posiadają **8 głównych certyfikatów**, każdy oznaczający spełnienie konkretnej normy regulacyjnej. Wybór folii bez właściwego atestu może wyłączyć Twój produkt z możliwości sprzedaży na danym rynku (np. brak FDA = brak sprzedaży w USA dla produktów spożywczych). Zawsze sprawdź wymagania regulacyjne docelowego rynku przed wyborem folii.',
    table: {
      headers: ['Certyfikat', 'Co oznacza', 'Kto wymaga', 'Etykieta foliowa z certyfikatem'],
      rows: [
        ['UL Recognized Component', 'Bezpieczeństwo komponentów elektrycznych (USA)', 'Producenci sprzętu certyfikowanego UL', 'Z-Ultimate 3000T White'],
        ['FDA 175.105 (USA)', 'Kontakt z suchymi produktami spożywczymi lub przez barierę', 'Branża spożywcza w USA', 'PolyPro 3000T, PolyE 3100T, PolyO 3100T'],
        ['EC 1935/2004 (UE)', 'Ramowe rozporządzenie materiałów do kontaktu z żywnością', 'Wszyscy producenci spożywczy w UE', 'Wszystkie folie z atestem spożywczym'],
        ['EU 10/2011', 'Tworzywa sztuczne w kontakcie z żywnością', 'Producenci opakowań plastikowych UE', 'PolyPro, PolyE, PolyO'],
        ['BfR XIV (RF≥2)', 'Suche, wilgotne ORAZ tłuste produkty (Niemcy)', 'Branża spożywcza, kosmetyczna', 'PolyPro 3000T Gloss/Clear, PolyO 3100T'],
        ['BfR XIV (RF≥3)', 'Najszerszy zakres — wszystkie produkty łącznie z tłustymi', 'Producenci żywności tłustej, oleje, masła', 'PolyE 3100T Gloss'],
        ['BS5609', 'Odporność na 90-dniowe zanurzenie w wodzie morskiej (IMDG)', 'Transport chemikaliów drogą morską, GHS', 'PolyO 3100T'],
        ['BPA-free, latex-free', 'Bez bisfenolu A i lateksu (alergeny)', 'Healthcare, kosmetyki, żywność dziecięca', 'Wszystkie folie spożywcze Zebra'],
      ],
    },
  },
  {
    heading: '5 najczęstszych błędów przy doborze etykiety termotransferowej foliowej',
    content:
      'Z naszego doświadczenia (8+ lat doradztwa technicznego) **80% problemów** z etykietami foliowymi wynika z 5 typowych błędów na etapie doboru materiału lub taśmy. Każdy z nich kosztuje firmę realne pieniądze: zmarnowane rolki, wymiana etykiet, zniszczona głowica drukarki, opóźnienia produkcyjne. Sprawdź swoją aplikację:',
    table: {
      headers: ['Błąd', 'Skutek', 'Jak naprawić'],
      rows: [
        ['Użycie taśmy woskowej (2300, 2100) na etykiecie foliowej', 'Nadruk ściera się palcem, etykieta nieczytelna', 'Zmień na taśmę żywiczną (Zebra 4800 lub 5095)'],
        ['Sztywna folia (PolyPro) na elastycznym opakowaniu (butelka HDPE)', 'Etykieta odchodzi, marszczy się, traci kontakt', 'Wybierz elastyczny PolyE 3100T Gloss'],
        ['Brak atestu spożywczego na opakowaniu z żywnością tłustą', 'Wycofanie produktu z rynku, kara regulacyjna', 'PolyE 3100T (RF≥3) lub PolyPro 3000T (RF≥2)'],
        ['Aplikacja folii poniżej minimalnej temperatury (np. 0°C dla PolyE)', 'Klej nie chwyta, etykieta odpada w godzinach', 'Sprawdź min. temp. aplikacji (5°C dla większości) lub wybierz PolyPro 4000T (-10°C)'],
        ['Brak certyfikatu UL na tabliczce maszyny w produkcie UL-certyfikowanym', 'Utrata certyfikacji urządzenia, brak sprzedaży na rynkach UL', 'Tylko Z-Ultimate 3000T White ma UL Recognized'],
      ],
    },
  },
]

const SPECJALNE_DEEP_GUIDE: GuideSection[] = [
  {
    heading: 'Łańcuch chłodniczy — który materiał do jakiej temperatury?',
    content:
      'Trzy serie specjalne pokrywają różne zakresy temperatur — od chłodni spożywczych po ciekły azot w biobankach. Wybór zależy od **najniższej temperatury, jaką etykieta musi wytrzymać po naklejeniu** oraz od **typu podłoża** (papier kartonowy vs polimerowy worek z krwią vs szklana fiolka). Nie wybieraj materiału droższego niż wymaga aplikacja — różnica kosztów między All-Temp a Cryocool to około 3× za rolkę.',
    table: {
      headers: ['Seria', 'Zakres pracy', 'Min. aplikacja', 'Podłoże', 'Typowe zastosowanie'],
      rows: [
        ['8000T All-Temp (papier)', '-54°C do +93°C', '-29°C', 'Kartony, palety, opakowania zbiorcze', 'Mroźnie spożywcze i farmaceutyczne, Work-in-Progress'],
        ['8000T Blood Bag (PE)', '-50°C do +80°C', '-20°C', 'Worki polimerowe na krew', 'Banki krwi, stacje krwiodawstwa, FFP/KKCz/KKP'],
        ['8100T Cryocool (PET)', '-196°C do +100°C', '+4°C', 'Fiolki szklane/polipropylenowe 7-15 mm', 'Biobanki, ciekły azot, sterylizacja gamma'],
      ],
    },
  },
  {
    heading: 'Hierarchia zabezpieczeń: VOID vs destruktywna',
    content:
      'Dwie serie specjalne oferują **fundamentalnie różne mechanizmy zabezpieczające przed nieautoryzowanym zdjęciem**. Wybór zależy od tego, czy potrzebny jest **widoczny dowód próby naruszenia** (wystarczy napis VOID, etykieta zostaje w jednym kawałku) czy **fizyczna nieusuwalność etykiety w jednym kawałku** (etykieta przestaje istnieć). 8000T Void Matte dodatkowo posiada **certyfikat UL Recognized** — wymagany dla tabliczek znamionowych na sprzęcie elektronicznym sprzedawanym w USA i Kanadzie.',
    table: {
      headers: ['Cecha', '8000T Void Matte', '8100T Z-Destruct PE'],
      rows: [
        ['Mechanizm', 'Metalizowany klej zostawia napis „VOID" na powierzchni', 'Folia fizycznie rozpada się na drobne kawałki'],
        ['Materiał lica', 'Matowy srebrny poliester (PET) 60 μm', 'Matowy biały polietylen (PE) 50 μm'],
        ['Klej', 'Permanentny metalizowany akrylowy', 'Permanentny gumowy (rubber)'],
        ['Łączna grubość', '168 μm', '133 μm'],
        ['Zakres pracy', '-40°C do +150°C (VOID do +40°C)', '-40°C do +80°C'],
        ['Certyfikat UL Recognized', 'TAK — z taśmami 3400 i 5095', 'NIE'],
        ['Trwałość outdoor', 'Do 1 roku', 'Do 1 roku'],
        ['Poziom zabezpieczenia', 'Średni — widoczny dowód naruszenia', 'Najwyższy — fizyczna nieusuwalność'],
        ['Typowe zastosowanie', 'Tabliczki znamionowe UL, plomby gwarancyjne sprzętu', 'Plomby urzędowe, sprzęt wojskowy, elektronika premium'],
      ],
    },
  },
  {
    heading: 'Atesty medyczne i certyfikaty regulacyjne — co dla kogo?',
    content:
      'Etykiety specjalne to materiały regulowane: każdy posiada specyficzne atesty, które kwalifikują go do konkretnych zastosowań branżowych. Wybór materiału bez właściwego atestu może oznaczać **wykluczenie z możliwości sprzedaży na danym rynku** (np. brak UL = brak sprzedaży sprzętu elektronicznego w USA) lub **niezgodność z procedurami medycznymi** (brak ISO 3826-1 = niedopuszczalność do oznaczeń worków z krwią). Sprawdź wymagania regulacyjne przed wyborem.',
    table: {
      headers: ['Atest', 'Co oznacza', 'Seria z atestem'],
      rows: [
        ['UL Recognized Component', 'Bezpieczeństwo elementów elektronicznych (USA/Kanada) — etykieta wytrzyma tak długo jak produkt', '8000T Void Matte (z taśmami 3400 i 5095)'],
        ['ISO 3826-1', 'Brak migracji kleju do krwi przez worek polimerowy', '8000T Blood Bag Deep Freeze'],
        ['ISO 10993-5', 'Brak istotnej genotoksyczności (cytotoksyczność wyrobów medycznych)', '8000T Blood Bag Deep Freeze'],
        ['Odporność na promieniowanie gamma', 'Sterylizacja gamma bez utraty czytelności i przyczepności', '8100T Cryocool'],
        ['BfR Recommendation XXI', 'Kontakt pośredni z żywnością (Niemcy)', '8000T Blood Bag Deep Freeze'],
        ['Praca w ciekłym azocie (-196°C)', 'Kriogeniczne przechowywanie próbek — biobanki, IVF', '8100T Cryocool'],
        ['BPA-free, latex-free', 'Bez bisfenolu A i lateksu — bezpieczne dla pacjentów', 'Wszystkie 5 serii specjalnych'],
      ],
    },
  },
  {
    heading: '5 typowych błędów przy doborze etykiet specjalnych',
    content:
      'Z naszego doświadczenia (8+ lat doradztwa technicznego) etykiety specjalne to obszar najczęstszych pomyłek przy doborze — wynikają z ich niszowości i mylonych mechanizmów. Każdy błąd kosztuje firmę realne pieniądze: zniszczone próbki w biobankach, wycofane partie produktów, zawiedzione plomby gwarancyjne. Sprawdź, czy unikasz tych pułapek:',
    table: {
      headers: ['Błąd', 'Skutek', 'Jak naprawić'],
      rows: [
        ['Użycie 8000T All-Temp do ciekłego azotu (-196°C)', 'Etykieta odpada w pierwszym cyklu mróz-rozmróz', 'Wybierz 8100T Cryocool (PET kriogeniczny do -196°C)'],
        ['Użycie 8100T Cryocool na workach z krwią', 'Klej akrylowy nie jest atestowany ISO 3826-1 — ryzyko medyczne', 'Wybierz 8000T Blood Bag Deep Freeze (atesty medyczne)'],
        ['Aplikacja 8000T Void Matte powyżej +40°C', 'Funkcja VOID nie zadziała — brak dowodu próby naruszenia', 'Sprawdź temperaturę powierzchni; do wyższych temp. wybierz inne rozwiązania'],
        ['Drukowanie Z-Destruct PE w drukarce biurkowej', 'Materiał ma rdzeń 76 mm — biurkowa fizycznie nie pomieści rolki', 'Użyj drukarki mid-range (ZD611t) lub przemysłowej (ZT411/ZT421)'],
        ['Aplikacja Z-Destruct PE na PE/PP/teflon bez faceslits', 'Etykieta odchodzi w całości zamiast się rozpaść — brak destruktywności', 'Zaznacz przy zamówieniu faceslits (fabryczne nacięcia w licu)'],
      ],
    },
  },
]

const CONFIG: Record<TransferLabelSubcategory, SubConfig> = {
  papierowe: {
    label: 'Papierowe',
    h1: 'Etykiety termotransferowe papierowe Zebra',
    intro:
      'Papierowe etykiety do druku termotransferowego — najpopularniejszy i najbardziej ekonomiczny materiał TT. Wymagają taśmy wosk lub wosk-żywica. Do magazynu, wysyłki, opakowań i healthcare.',
    accent: '#2563EB',
    productSlug: 'etykiety-termotransferowe-papierowe',
  },
  foliowe: {
    label: 'Foliowe',
    h1: 'Etykiety termotransferowe foliowe Zebra',
    intro:
      'Trwałe foliowe etykiety syntetyczne — poliester (PET), polipropylen (BOPP), polietylen (PE) i poliolefina. Odporne na wodę, chemikalia, ścieranie i UV. Druk taśmą żywiczną (resin). Do produktów końcowych, przemysłu i elektroniki.',
    accent: '#059669',
    productSlug: 'etykiety-termotransferowe-foliowe',
  },
  specjalne: {
    label: 'Specjalne',
    h1: 'Etykiety termotransferowe specjalne — krio, plomby, worki z krwią',
    intro:
      'Niszowe etykiety do zastosowań, w których zwykła folia nie wystarcza: kriogeniczne (-196°C), do worków z krwią (ISBT 128), zabezpieczające VOID i plomby destruktywne. Wysoka intencja zakupowa, niska konkurencja.',
    accent: '#D97706',
    productSlug: 'etykiety-termotransferowe-specjalne',
  },
}

interface PageProps {
  params: Promise<{ subcategory: string }>
}

function isValidSub(s: string): s is TransferLabelSubcategory {
  return (SUBCATEGORIES as string[]).includes(s)
}

export async function generateStaticParams() {
  return SUBCATEGORIES.map(subcategory => ({ subcategory }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subcategory } = await params
  if (!isValidSub(subcategory)) return { title: 'Nie znaleziono kategorii' }
  const sub = getSubcategoryBySlug(CONFIG[subcategory].productSlug)
  const url = `${siteUrl}/etykiety-termotransferowe-zebra/${subcategory}`
  return {
    title: sub?.seoTitle ?? CONFIG[subcategory].h1,
    description: sub?.seoDescription ?? CONFIG[subcategory].intro,
    openGraph: {
      title: sub?.seoTitle ?? CONFIG[subcategory].h1,
      description: sub?.seoDescription ?? CONFIG[subcategory].intro,
      url,
    },
    alternates: { canonical: url },
  }
}

function materialLabel(m: TransferLabelSeries['material']): string {
  const map: Record<string, string> = {
    'papier-niepowlekany': 'Papier niepowlekany',
    'papier-powlekany': 'Papier powlekany',
    'papier-semi-glossy': 'Papier semi-glossy',
    'poliester-bialy': 'Poliester biały (PET)',
    'poliester-srebrny': 'Poliester srebrny',
    'poliester-kriogeniczny': 'Poliester kriogeniczny',
    'polietylen': 'Polietylen (PE)',
    'polipropylen-bialy': 'Polipropylen biały',
    'polipropylen-przezroczysty': 'Polipropylen przezroczysty',
    'polipropylen-matowy': 'Polipropylen matowy',
    'poliolefina': 'Poliolefina',
    'folia-blood-bag': 'Folia (worki z krwią)',
    'folia-void': 'Folia VOID',
    'folia-destruktywna': 'Folia destruktywna',
  }
  return map[m] ?? m
}

export default async function TransferSubcategoryPage({ params }: PageProps) {
  const { subcategory } = await params
  if (!isValidSub(subcategory)) notFound()

  const cfg = CONFIG[subcategory]
  const series = getTransferLabelSeriesBySubcategory(subcategory)
  const url = `${siteUrl}/etykiety-termotransferowe-zebra/${subcategory}`

  const bestsellers = series.filter(s => s.positioning === 'bestseller')
  const rest = series.filter(s => s.positioning !== 'bestseller')

  const faq = FAQ_BY_SUB[subcategory]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: cfg.h1,
    description: cfg.intro,
    url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: series.length,
      itemListElement: series.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/etykiety-termotransferowe-zebra/${subcategory}/serie/${s.slug}`,
        name: s.title,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
      { '@type': 'ListItem', position: 3, name: 'Etykiety termotransferowe', item: `${siteUrl}/etykiety-termotransferowe-zebra` },
      { '@type': 'ListItem', position: 4, name: cfg.label, item: url },
    ],
  }

  // TechArticle schema dla /foliowe i /specjalne — sygnał dla AI engines
  // (Google AI Overviews, Perplexity, ChatGPT), że strona zawiera autorytatywną
  // treść techniczną, nie tylko listing produktów. Zwiększa szanse cytowania.
  const techArticleSchema =
    subcategory === 'foliowe'
      ? {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Etykiety termotransferowe foliowe Zebra — przewodnik wyboru materiału',
          description: 'Kompletny przewodnik po foliowych etykietach termotransferowych Zebra: 4 typy folii (poliester, polipropylen, polietylen, poliolefina), atesty (UL, FDA, BfR XIV, BS5609), analiza TCO i typowe błędy doboru.',
          url,
          inLanguage: 'pl-PL',
          proficiencyLevel: 'Expert',
          about: [
            { '@type': 'Thing', name: 'Etykiety termotransferowe' },
            { '@type': 'Thing', name: 'Folia poliestrowa PET' },
            { '@type': 'Thing', name: 'Polipropylen BOPP' },
            { '@type': 'Thing', name: 'Polietylen PE' },
            { '@type': 'Thing', name: 'Poliolefina' },
            { '@type': 'Thing', name: 'UL Recognized Component' },
            { '@type': 'Thing', name: 'BfR XIV' },
            { '@type': 'Thing', name: 'BS5609' },
            { '@type': 'Thing', name: 'FDA 175.105' },
          ],
          publisher: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
          audience: {
            '@type': 'BusinessAudience',
            audienceType: 'Specjaliści ds. zakupów technicznych, inżynierowie produkcji, kierownicy magazynów, dział regulacyjny',
          },
          datePublished: '2026-05-29',
          dateModified: '2026-05-31',
        }
      : subcategory === 'specjalne'
      ? {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Etykiety termotransferowe specjalne Zebra — przewodnik po 5 seriach niszowych',
          description: 'Kompletny przewodnik po specjalnych etykietach termotransferowych Zebra: kriogeniczne 8100T Cryocool (-196°C), worki z krwią 8000T Blood Bag (ISO 3826-1), papier do mroźni 8000T All-Temp, zabezpieczające 8000T Void Matte (UL) i destruktywne 8100T Z-Destruct PE.',
          url,
          inLanguage: 'pl-PL',
          proficiencyLevel: 'Expert',
          about: [
            { '@type': 'Thing', name: 'Etykiety kriogeniczne' },
            { '@type': 'Thing', name: 'Ciekły azot' },
            { '@type': 'Thing', name: 'Biobanki' },
            { '@type': 'Thing', name: 'Etykiety na worki z krwią' },
            { '@type': 'Thing', name: 'ISO 3826-1' },
            { '@type': 'Thing', name: 'ISO 10993-5' },
            { '@type': 'Thing', name: 'Etykiety zabezpieczające VOID' },
            { '@type': 'Thing', name: 'Etykiety destruktywne' },
            { '@type': 'Thing', name: 'UL Recognized Component' },
            { '@type': 'Thing', name: 'Sterylizacja gamma' },
            { '@type': 'Thing', name: 'Mroźnie głębokie' },
          ],
          publisher: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
          audience: {
            '@type': 'BusinessAudience',
            audienceType: 'Banki krwi, biobanki, laboratoria medyczne, służby mundurowe, dział bezpieczeństwa, producenci sprzętu UL-certyfikowanego',
          },
          datePublished: '2026-05-29',
          dateModified: '2026-05-31',
        }
      : subcategory === 'papierowe'
      ? {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Etykiety termotransferowe papierowe Zebra — przewodnik wyboru (Z-Perform, Z-Select)',
          description: 'Przewodnik po papierowych etykietach termotransferowych Zebra: papier powlekany i niepowlekany, dobór taśmy woskowej i woskowo-żywiczej, analiza TCO oraz typowe błędy w magazynie i wysyłce.',
          url,
          inLanguage: 'pl-PL',
          proficiencyLevel: 'Expert',
          about: [
            { '@type': 'Thing', name: 'Etykiety termotransferowe papierowe' },
            { '@type': 'Thing', name: 'Papier powlekany' },
            { '@type': 'Thing', name: 'Papier niepowlekany' },
            { '@type': 'Thing', name: 'Taśma woskowa' },
            { '@type': 'Thing', name: 'Taśma woskowo-żywiczna' },
            { '@type': 'Thing', name: 'Etykiety magazynowe' },
            { '@type': 'Thing', name: 'Etykiety wysyłkowe' },
          ],
          publisher: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
          audience: {
            '@type': 'BusinessAudience',
            audienceType: 'Kierownicy magazynów, działy logistyki i wysyłki, specjaliści ds. zakupów',
          },
          datePublished: '2026-05-29',
          dateModified: '2026-05-31',
        }
      : null

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {techArticleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      )}
      <CommonDefinitionsSchema />

      {/* HERO */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Tło abstrakcyjne — kolorowe światła neonowe tylko po prawej stronie hero */}
        <div className="absolute right-0 top-0 bottom-0 w-3/5 lg:w-1/2 pointer-events-none">
          <Image
            src="/images/hero-etykiety-termotransfer.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 60vw, 50vw"
            className="object-cover object-right opacity-50"
            aria-hidden="true"
          />
        </div>
        {/* Dark gradient od lewej — zapewnia kontrast tekstu i wycisza obraz */}
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950 via-slate-950 to-slate-950/40"
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at 80% 20%, ${cfg.accent}, transparent 60%), radial-gradient(circle at 15% 85%, ${cfg.accent}40, transparent 50%)` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-300 mb-6 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white whitespace-nowrap">Strona główna</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/materialy-eksploatacyjne" className="hover:text-white whitespace-nowrap">Materiały eksploatacyjne</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/etykiety-termotransferowe-zebra" className="hover:text-white whitespace-nowrap">Etykiety termotransferowe</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <span className="text-white font-medium whitespace-nowrap">{cfg.label}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">{cfg.h1}</h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mb-6">{cfg.intro}</p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> {series.length} {series.length < 5 ? 'serie' : 'serii'}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> Oryginalne media Zebra
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> Doradztwo techniczne i próbki
            </span>
          </div>
        </div>
      </section>

      {/* SERIE — kafelki najpierw pod hero, opis pod kafelkami */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {bestsellers.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Najczęściej wybierane</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestsellers.map(s => <SeriesCard key={s.slug} series={s} subcategory={subcategory} large />)}
            </div>
          </div>
        )}

        <div>
          {bestsellers.length > 0 && (
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              {subcategory === 'specjalne' ? 'Zastosowania niszowe' : 'Pozostałe serie'}
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map(s => <SeriesCard key={s.slug} series={s} subcategory={subcategory} />)}
          </div>
        </div>
      </section>

      {/* 4 TYPY ETYKIET FOLIOWYCH W PIGUŁCE — tylko dla /foliowe.
          Renderowane pod kafelkami serii (opis pod listingiem). */}
      {subcategory === 'foliowe' && (
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                4 typy etykiet termotransferowych foliowych — który materiał wybrać?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Portfolio etykiet termotransferowych foliowych Zebry obejmuje cztery rodziny materiałów syntetycznych.
                Każdy z nich rozwiązuje inny typ problemu: poliester walczy o trwałość, polipropylen o uniwersalność,
                polietylen o elastyczność, poliolefina o ekologię i transport chemikaliów. Wybierz materiał według
                aplikacji, potem konkretną serię.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FOLIOWE_MATERIALS_QUICK.map(m => (
                <article key={m.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{m.name}</h3>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 whitespace-nowrap shrink-0">
                      {m.cenaRel.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{m.short}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Grubość</span>
                      <span className="text-gray-900 font-medium">{m.grubosc}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Zakres temp.</span>
                      <span className="text-gray-900 font-medium">{m.zakresTemp}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Trwałość</span>
                      <span className="text-gray-900 font-medium">{m.trwalosc}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Cena vs papier</span>
                      <span className="text-gray-900 font-medium">{m.cenaRel}</span>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-1">Najlepsze do</span>
                    <p className="text-xs text-gray-700 leading-relaxed">{m.bestFor}</p>
                  </div>
                  <div className="mb-3">
                    <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-2">Serie</span>
                    <div className="flex flex-wrap gap-1.5">
                      {m.bestSeries.map(s => (
                        <Link
                          key={s.slug}
                          href={`/etykiety-termotransferowe-zebra/foliowe/serie/${s.slug}`}
                          className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                        >
                          {s.title} <ArrowRightIcon size={11} className="ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-emerald-700 font-medium leading-snug">
                    <CheckIcon size={12} className="inline mr-1" />{m.highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5 SERII SPECJALNYCH W PIGUŁCE — tylko dla /specjalne.
          Pełna lista (każda seria ma jeden mechanizm: kriogenika / krew /
          mróz / VOID / destrukcja). Renderowana pod kafelkami serii. */}
      {subcategory === 'specjalne' && (
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                5 serii etykiet specjalnych Zebra — który materiał wybrać?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Portfolio etykiet specjalnych Zebry obejmuje pięć niszowych serii — każda rozwiązuje inny krytyczny
                problem. Trzy z nich (Cryocool, Blood Bag, All-Temp) pokrywają różne zakresy niskich temperatur w
                łańcuchu chłodniczym; dwie (Void Matte, Z-Destruct PE) różnymi mechanizmami zabezpieczają przed
                nieautoryzowanym zdjęciem etykiety. Wybierz mechanizm, potem konkretną serię.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SPECJALNE_MATERIALS_QUICK.map(m => (
                <article key={m.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{m.name}</h3>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-amber-50 text-amber-700 whitespace-nowrap shrink-0">
                      {m.cenaRel.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{m.short}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Grubość</span>
                      <span className="text-gray-900 font-medium">{m.grubosc}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Zakres temp.</span>
                      <span className="text-gray-900 font-medium">{m.zakresTemp}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Trwałość</span>
                      <span className="text-gray-900 font-medium">{m.trwalosc}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Klasa cenowa</span>
                      <span className="text-gray-900 font-medium">{m.cenaRel}</span>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-1">Najlepsze do</span>
                    <p className="text-xs text-gray-700 leading-relaxed">{m.bestFor}</p>
                  </div>
                  <div className="mb-3">
                    <span className="block text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-2">Seria</span>
                    <div className="flex flex-wrap gap-1.5">
                      {m.bestSeries.map(s => (
                        <Link
                          key={s.slug}
                          href={`/etykiety-termotransferowe-zebra/specjalne/serie/${s.slug}`}
                          className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                        >
                          {s.title} <ArrowRightIcon size={11} className="ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 font-medium leading-snug">
                    <CheckIcon size={12} className="inline mr-1" />{m.highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TABELA PORÓWNAWCZA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Porównanie serii — {cfg.label.toLowerCase()}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Seria</th>
                <th className="text-left p-3 font-semibold text-gray-900">Materiał</th>
                <th className="text-left p-3 font-semibold text-gray-900">Taśma</th>
                <th className="text-left p-3 font-semibold text-gray-900">Atest żywn.</th>
                <th className="text-left p-3 font-semibold text-gray-900">Od (zł)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {series.map(s => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="p-3 font-medium">
                    <Link href={`/etykiety-termotransferowe-zebra/${subcategory}/serie/${s.slug}`} className="text-primary-600 hover:underline">
                      {s.title}
                    </Link>
                  </td>
                  <td className="p-3 text-gray-600">{materialLabel(s.material)}</td>
                  <td className="p-3 text-gray-600">{s.recommendedRibbons.resin ? 'Resin' : 'Wosk/wosk-żywica'}</td>
                  <td className="p-3 text-gray-600">{s.foodSafe ? 'Tak' : '—'}</td>
                  <td className="p-3 font-medium text-gray-900">{s.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DEEP-GUIDE — tylko dla /foliowe. Każda karta = własny H2 (autonomiczna
          sekcja informacyjna). Bez wrappera „przed zakupem" — duplikował temat. */}
      {subcategory === 'foliowe' && (
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="space-y-10">
              {FOLIOWE_DEEP_GUIDE.map((sec, idx) => (
                <article key={idx} className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">{sec.heading}</h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    <LinkedText text={sec.content} />
                  </p>
                  {sec.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                            {sec.table.headers.map((h, i) => (
                              <th key={i} className="text-left p-3 font-semibold text-gray-900">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {sec.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              {row.map((cell, j) => (
                                <td key={j} className={`p-3 ${j === 0 ? 'font-medium text-gray-900' : 'text-gray-700'}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DEEP-GUIDE dla /specjalne — łańcuch chłodniczy, hierarchia zabezpieczeń,
          atesty medyczne i typowe błędy. Każda karta = własny H2. */}
      {subcategory === 'specjalne' && (
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="space-y-10">
              {SPECJALNE_DEEP_GUIDE.map((sec, idx) => (
                <article key={idx} className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">{sec.heading}</h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    <LinkedText text={sec.content} />
                  </p>
                  {sec.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                            {sec.table.headers.map((h, i) => (
                              <th key={i} className="text-left p-3 font-semibold text-gray-900">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {sec.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              {row.map((cell, j) => (
                                <td key={j} className={`p-3 ${j === 0 ? 'font-medium text-gray-900' : 'text-gray-700'}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ — 10+ pytań specyficznych dla podkategorii (AEO/GEO: LLM-y skanują FAQPage) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Najczęściej zadawane pytania — etykiety {cfg.label.toLowerCase()} Zebra
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Konkretne odpowiedzi na pytania, które klienci najczęściej zadają o etykiety {cfg.label.toLowerCase()}. Jeśli czegoś brakuje, napisz lub zadzwoń — doradzimy.
        </p>
        <div className="space-y-3">
          {faq.map((f, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-semibold text-gray-900 flex-1">{f.q}</span>
                <ChevronRightIcon
                  size={20}
                  className="text-slate-400 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform"
                />
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed"><LinkedText text={f.a} /></p>
            </details>
          ))}
        </div>
      </section>

    </main>
  )
}

function SeriesCard({
  series: s,
  subcategory,
  large = false,
}: {
  series: TransferLabelSeries
  subcategory: TransferLabelSubcategory
  large?: boolean
}) {
  return (
    <Link
      href={`/etykiety-termotransferowe-zebra/${subcategory}/serie/${s.slug}`}
      className={`group relative overflow-hidden bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-lg transition-all flex flex-col ${large ? 'p-7' : 'p-5'}`}
    >
      {/* Hero image (jeśli seria go ma) — jako tło z white overlay zapewniającym
          czytelność tekstu. Skala lekka na hover.
          Tryb `cardImageFull`: obraz wypełnia całą kartę bez nakładki, tekstów ani
          gradientu — używane dla obrazów które mają już wpisany kompletny opis. */}
      {s.heroImage && (
        <>
          <Image
            src={s.heroImage}
            alt={s.cardImageFull ? `${s.title} — etykieta termotransferowa Zebra` : ''}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`absolute inset-0 object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out ${s.cardImageFull ? '' : 'opacity-90'}`}
            style={{ objectPosition: s.heroImagePosition ?? 'center 20%' }}
            aria-hidden={s.cardImageFull ? undefined : 'true'}
          />
          {/* Biały gradient — tylko gdy obraz pełni rolę tła pod tekstem */}
          {!s.cardImageFull && (
            <span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/85 to-white/40"
            />
          )}
        </>
      )}
      {!s.heroImage && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse 65% 35% at bottom right, ${s.accent}28 0%, ${s.accent}0d 40%, transparent 80%)` }}
        />
      )}
      {/* Tryb cardImageFull — tylko strzałka w prawym górnym rogu (badge/tytuł/tagline na obrazie) */}
      {s.cardImageFull ? (
        <div className="relative z-10 flex justify-end h-full min-h-[140px]">
          <ArrowRightIcon size={large ? 18 : 16} className="text-slate-600 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
        </div>
      ) : (
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {large ? 'Bestseller' : s.positioning.replace('niche-', '').replace('zabezpieczenia', 'zabezpieczające').replace('krio', 'kriogeniczne')}
          </span>
          <ArrowRightIcon size={large ? 18 : 16} className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
        </div>
        <h3 className={`font-bold text-gray-900 leading-tight mb-2 ${large ? 'text-2xl' : 'text-lg'}`}>{s.title}</h3>
        <p className={`text-gray-700 leading-snug flex-1 ${large ? 'text-base' : 'text-sm'}`}>{s.tagline}</p>
      </div>
      )}
    </Link>
  )
}
