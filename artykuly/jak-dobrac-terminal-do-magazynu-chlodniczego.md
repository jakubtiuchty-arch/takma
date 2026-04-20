# Jak dobrać terminal przemysłowy do magazynu chłodniczego — 5 kryteriów

**Autor: Jakub Tiuchty, TAKMA**

Magazyny chłodnicze i mroźnie to jedno z najbardziej wymagających środowisk, w jakich pracują mobilne terminale przemysłowe. Temperatura od -20°C do -30°C, duża wilgotność, ciągłe cykle przenoszenia urządzeń między strefami o różnej temperaturze i obsługa operatorów w grubych rękawicach — to warunki, w których standardowy terminal magazynowy przestaje działać w ciągu kilku tygodni. Ekran zamarza lub pokrywa się skroplinami, bateria traci pojemność w ciągu pół zmiany, a skaner odmawia pracy po pierwszym gwałtownym schłodzeniu.

Poniżej pięć kryteriów, które pomagają uniknąć błędu przy doborze urządzenia do chłodni lub mroźni — oparte na wdrożeniach w polskich centrach dystrybucji żywności, sieciach farmaceutycznych i operatorach 3PL obsługujących cold chain.

## 1. Zakres temperatur pracy — a nie tylko przechowywania

Pierwsza pułapka, w którą wpadają kupujący: mylenie **temperatury pracy** (operating temperature) z **temperaturą przechowywania** (storage temperature). Standardowy terminal Zebra, Honeywell czy M3 Mobile ma zakres przechowywania nawet do -40°C, ale zakres pracy to często tylko -10°C. W praktyce oznacza to, że urządzenie *przetrwa* w chłodni, ale *nie będzie tam działać*.

W dokumentacji technicznej należy szukać oznaczeń typu **"Cold Storage", "CS Edition", "Freezer Ready"** lub konkretnego zakresu temperatur pracy:

- **-20°C** — wystarczy dla typowej chłodni świeżych produktów
- **-30°C** — niezbędne dla mroźni głębokich, magazynów lodów i produktów mrożonych klasy A

Przykładowo, terminale dedykowane do cold chain — takie jak **Zebra MC9400 Cold Storage**, **Honeywell CK67 Cold Storage** czy **M3 Mobile UL20** w wersji Cold Storage — oferują pracę ciągłą w -30°C. Wersje standardowe tych samych modeli mają zakres pracy do -10°C lub -20°C i w mroźni szybko się wyłączą z powodu zabezpieczenia termicznego.

**Co sprawdzić przed zakupem:**
- Deklarowana temperatura pracy operacyjnej (nie przechowywania)
- Czy producent potwierdza cykle przenoszenia urządzenia między strefami różnej temperatury (thermal shock cycling)
- Czy wersja Cold Storage jest osobnym SKU (najczęściej tak — nie można "włączyć" trybu chłodni w standardowym terminalu)

## 2. Odporność na kondensację i zaszronienie — kluczowy jest heated window

Drugim, często niedocenianym kryterium jest **kondensacja** powstająca przy przenoszeniu urządzenia z chłodni do strefy ogrzewanej i z powrotem. W ciągu jednej zmiany operator może wykonać kilkadziesiąt takich cykli — a każde z nich osadza warstwę pary wodnej lub szronu na ekranie, oknie skanera i portach komunikacyjnych.

Dobrze zaprojektowany terminal do mroźni musi mieć:

- **Podgrzewane okno skanera** (heated scan window) — element grzewczy topi szron i odparowuje skropliny, dzięki czemu skaner działa od razu, bez 2–3-minutowej "rozgrzewki"
- **Podgrzewany ekran dotykowy** — w urządzeniach klasy Cold Storage takich jak MC9400 CS ekran ma warstwę grzewczą przeciwdziałającą zamgleniu
- **Klasa IP minimum IP65** — zabezpieczenie przed osadzeniem wilgoci w elektronice; IP67 jest standardem w terminalach dedykowanych do chłodni
- **Uszczelnione porty** — gumowe osłony USB-C / złącz ładowania, odporne na wielokrotne cykle zamrażania i rozmrażania

Brak podgrzewania okna skanera jest najczęstszą przyczyną reklamacji terminali używanych w cold chain — urządzenie fizycznie działa, ale operator nie może zeskanować kodu, bo okno skanera jest pokryte szronem.

## 3. Wydajność baterii w niskiej temperaturze

Akumulatory litowo-jonowe tracą od 30 do 50% efektywnej pojemności przy temperaturach poniżej 0°C. W praktyce oznacza to, że terminal z deklarowanym czasem pracy 12 godzin w warunkach pokojowych w chłodni -25°C wytrzyma zaledwie 4–6 godzin — połowę zmiany.

Dobre urządzenie do magazynu chłodniczego powinno oferować:

- **Dedykowaną baterię Cold Storage** — najczęściej o większej pojemności (np. 7000 mAh zamiast standardowych 5000 mAh) i z chemią odporną na niskie temperatury
- **Hot-swap** — możliwość wymiany baterii bez wyłączania urządzenia i bez utraty sesji; kluczowe w chłodni, gdzie restart terminala i ponowne zalogowanie operatora w grubych rękawicach pochłania 2–3 minuty razy 30 razy dziennie
- **Ładowarkę wielostanowiskową z funkcją warm-up** — cykl rozgrzewania baterii przed ładowaniem, zapobiegający uszkodzeniom ogniw ładowanych w temperaturze ujemnej

Zebra MC9400 i Honeywell CK67 w wersjach Cold Storage obsługują hot-swap baterii bez wyłączania systemu. M3 UL20 w wersji Cold Storage ma dedykowaną baterię 7000 mAh, ale hot-swap wymaga przejścia w tryb standby — różnica, która przy 30 wymianach na zmianę przekłada się realnie na 30 minut utraconego czasu operatora.

## 4. Ergonomia pracy w rękawicach — klawiatura fizyczna vs. ekran dotykowy

W chłodni operator pracuje w termorękawicach o grubości 3–5 mm, często dwuwarstwowych. Obsługa pełnoekranowego terminala dotykowego typu "smartphone" w takich warunkach jest praktycznie niemożliwa — pojemnościowy ekran nie rejestruje dotyku przez rękawicę, a wpisanie kodu SKU zajmuje kilkanaście sekund zamiast jednej.

Dla cold chain dwa rozwiązania sprawdzają się najlepiej:

**Terminal z klawiaturą fizyczną i uchwytem pistoletowym** (np. Zebra MC9400, Honeywell CK67):
- Klawiatura numeryczna lub alfanumeryczna obsługiwana w rękawicach
- Spust skanera w uchwycie pistoletowym — zero kontaktu z ekranem
- Waga 700–900 g (wyważona z uchwytem)

**Terminal klasy PDA z "glove mode" na ekranie** (np. M3 UL20):
- Zwiększona czułość ekranu pojemnościowego, kalibrowana pod grube rękawice
- Wbudowany skaner 2D z dedykowaną fizyczną klawiszą spustu
- Lżejsza konstrukcja (~520 g), łatwiejsza do noszenia przez całą zmianę

Wybór między tymi dwiema klasami zależy od intensywności skanowania — przy ciągłym skanowaniu (>2000 skanów na zmianę) lepiej sprawdza się klasyczny terminal pistoletowy; przy pracy mieszanej (skanowanie + wprowadzanie danych) — terminal PDA z glove mode.

## 5. Wytrzymałość mechaniczna w niskich temperaturach

Ostatnie kryterium dotyczy odporności mechanicznej — ale **testowanej w temperaturze pracy**, nie w pokoju. Wielu producentów deklaruje drop spec 1,8 m na beton zgodny z MIL-STD-810H, ale testy wykonywane są w +25°C. Tworzywa sztuczne i uszczelki stają się kruche w -30°C, co radykalnie obniża faktyczną odporność urządzenia.

Przy doborze do mroźni warto szukać:

- **Drop spec testowany w temperaturze pracy** — np. "1,8 m na beton przy -30°C" (nie tylko w temperaturze pokojowej)
- **Tumble test** — 2000 upadków z 1 m, symulujący normalne zużycie (standard MIL-STD-810H w pełnej procedurze)
- **Materiały obudowy** — kompozyty wzmacniane włóknem szklanym, polimery o niskiej kruchości termicznej
- **Ekran z Gorilla Glass 5 lub wyższym** — standardowe szkło łatwo pęka przy uderzeniu w niskiej temperaturze

Terminale dedykowane do cold storage, jak wymienione wyżej Zebra MC9400 CS, Honeywell CK67 CS i M3 UL20 CS, deklarują drop spec w temperaturze pracy — to istotna różnica względem wersji standardowych, które mają testy wykonywane wyłącznie w warunkach laboratoryjnych.

## Podsumowanie — checklist doboru

Przed zakupem terminala do chłodni lub mroźni warto przejść przez następujący checklist:

1. **Zakres temperatur pracy** — zgodny z faktyczną temperaturą magazynu (pamiętaj: pracy, nie przechowywania)
2. **Heated scan window + IP65/IP67** — absolutnie niezbędne w mroźni; brak tych cech = nieustanne reklamacje
3. **Dedykowana bateria Cold Storage + hot-swap** — bez tego terminal wytrzyma pół zmiany
4. **Obsługa w rękawicach** — fizyczna klawiatura dla intensywnego skanowania, glove mode dla pracy mieszanej
5. **Drop spec testowany w temperaturze pracy** — nie tylko w warunkach laboratoryjnych

Błąd w jednym z tych pięciu punktów przekłada się bezpośrednio na koszt operacyjny — od obniżonej wydajności operatorów, przez skrócony czas pracy na baterii, aż po wysoką awaryjność i częste reklamacje sprzętu. Różnica cenowa między wersją standardową a Cold Storage tego samego modelu wynosi zazwyczaj 15–25%, ale zwraca się w ciągu kilku miesięcy eksploatacji.

W polskich wdrożeniach cold chain sprawdzają się obecnie trzy główne klasy urządzeń: klasyczne terminale pistoletowe z klawiaturą fizyczną (Zebra MC9400 Cold Storage, Honeywell CK67 Cold Storage) oraz kompaktowe PDA z glove mode (M3 Mobile UL20 Cold Storage). Dobór konkretnego modelu zależy od profilu operatora, intensywności skanowania i integracji z systemem WMS — ale w każdym z tych przypadków wersja Cold Storage jest jedynym wyborem, który gwarantuje stabilną pracę w temperaturach ujemnych.

---

**O autorze:**

**Jakub Tiuchty** — specjalista ds. wdrożeń systemów Auto-ID w firmie [TAKMA](https://takma.com.pl), polskim dostawcy rozwiązań dla logistyki, magazynowania i retail. Autor wdrożeń terminali mobilnych i skanerów w sieciach dystrybucji spożywczej, farmaceutycznej i 3PL. Więcej o terminalach do chłodni i mroźni: [takma.com.pl](https://takma.com.pl).
