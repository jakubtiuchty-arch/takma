# ProGlove LANA — opis wizualny, lokalny podgląd

URL: http://localhost:3115/produkt/proglove-lana#opis

Wzorzec: ProgloveFamilyStory / MAI, istniejące style rodziny ProGlove, ProductMotion i przełącznik ProgloveChoices. Osobny komponent LANA, bo to komputer Android, nie skaner z tej samej rodziny. Górna część handlowa pozostaje standardową kartą produktu.

## Źródła
- https://proglove.com/products/portable-android-computer/lana/
- Karta katalogowa LA-001 i instrukcja, już na produkcji: /datasheets/proglove-lana.pdf i /datasheets/proglove-lana-instrukcja.pdf.
- Aktualne dane i galeria LANA oraz stacji C008-EU z gałęzi produkcyjnej; zsynchronizowane do lokalnego podglądu. Dane te nie są nową zmianą handlową do publikacji.

Strona marketingowa mówi IP65; karta katalogowa LA-001 podaje IP68 — w opisie stosujemy specyfikację LA-001. Ekran 3,54 cala, 960×640, 500 nitów; Android13 GMS; Wi-Fi6; Bluetooth5; 2500mAh; do11h zależnie od pracy; 123g; −20…+50°C; ładowanieUSB-C150min lubstacja180min. Aparat16MP z lampą według aktualnej karty i instrukcji. Skaner, Arm Mount i stacja sprzedawane osobno. Nie obiecujemy automatycznej zgodności z każdym WMS ani dołączonej licencjiERP.

## Oryginalne media
- /wp-content/themes/proglove/videos/lana-section-one-video.mp4 — 10s,1920×1080, lokalna kopia bez dźwięku w interfejsie.
- /wp-content/uploads/2026/01/lana-section-three-image.png — hero, Scan2Pair.
- /wp-content/uploads/2026/01/lana-section-two-bg-image.webp — praca przy paczce.
- /wp-content/uploads/2026/01/lana-section-five-slider-image-{1..4}.png — cztery oryginalne ekrany1920×1080. Odnośniki w HTML producenta do miesiąca04 zwracają404; działające oryginały odnaleziono w miesiącu01.

Zdjęcia przekonwertowano do WebP95 bez generowania urządzeń ani ekranów. Film oryginalnyMP4 i statyczny poster. Kolorystyka i proporcje zgodne z istniejącymi kartamiProGlove.

## Weryfikacja
ESLint, scopedTypeScript, gitdiffcheck; desktop i390px bez poziomego przewijania. Cztery przyciski ekranów zmieniają obraz i tekst, aria-pressed poprawne. FilmreadyState4, bezbłędów, odtwarzanie i pauza działają. ProductMotion zachowuje istniejący mechanizm ograniczenia ruchu i zatrzymywania poza ekranem. Sprawdzono hero, obraz pracy i czytelność ekranów. Wspólny przełącznik dostał opcjonalny imageLabel; domyślny opis MAI pozostał dla dotychczasowych kart.

Publikować później wyłącznie nowy komponent,media,opcjonalnyimageLabel i dopięcie slugaproglove-lana. Nie dodawać wcześniejszej niezwiązanej zmiany usuwającej sekcję etykiet termicznych z src/app/produkt/[slug]/page.tsx.
