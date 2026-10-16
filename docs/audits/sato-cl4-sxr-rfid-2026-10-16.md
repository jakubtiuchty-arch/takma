# SATO CL4-SXR UHF RFID — 16.10.2026

## Zakres
Jedna aktualna rodzina CL4-SXR UHF EU, 18 PN: trzy rozdzielczości (203/305/609 dpi), trzy sposoby odbioru (70 odrywanie, A0 cutter, C0 dispenser), łączność N/W. Prefiks WWCLX + numer 1/2/3 + 70/A0/C0 + ZNAREU/ZWAREU. Wykluczono PN HF i UK. CL6-SXR nie jest częścią tej zmiany.

## Źródła
- https://shop.bluestoreinc.com/en/cl4-sxr-rfid — europejskie PN, opisy konfiguracji, części.
- https://images.bluestarinc-emea.com/pdf/5211-datasheet.pdf — aktualny EMEA datasheet CL4-SXR / CL6-SXR (wrzesień 2026); kopia w public/downloads/sato-cl4-sxr-karta-en.pdf.
- https://www.satoamerica.com/products/printers/industrial/cl4-sxr/specifications/ — dane techniczne.
- https://www.manual.sato-global.com/printer/cl-sxr/en/main/index.html — instrukcja online.
- https://www.satoeurope.com/pl/news/sato-europe-wprowadza-na-rynek-cl4-sxr-i-cl6-sxr-swoje-flagowe-przemys-owe-drukarki-etykiet-nowej-generacji/115 — aktualność modelu; start 29.09.2026, ograniczenia maksymalnej prędkości i uchwytu materiału w Europie.
- https://www.satoeurope.com/service-and-support/warranty.php — gwarancja podstawowa i warunkowy dodatkowy rok, limity głowicy i wałka.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/printers/industrial-printers/cl4-snr/Service%20Parts%20List_CL4-SXR.pdf.coredownload.inline.pdf — katalog części, MAIN ASSY (1), strona 3: głowice R48221101 / R48221201 / R48221401 i globalny wałek R55375100. Kopia public/downloads/sato-cl4-sxr-czesci-en.pdf. Segment cl4-snr w URL jest oryginalnym adresem SATO.

## Oferty
Autoryzowane sprawdzenie BlueStar: wszystkie 18 PN drukarki i cztery części znalezione z ceną. Publiczne API TAKMA przelicza walutę i stosuje istniejące reguły cenowe; nie zapisano cen zakupu ani sekretów w repozytorium. WWCLX170ZNAREU: 2 szt. EU, 15 004,87 PLN netto w chwili kontroli. Pozostałe 17: 0 szt. Wyposażenie RTC jest wspólne, więc nie ma osobnej kolumny. Tabela różnic: rozdzielczość, obsługa etykiet, łączność.

## Zdjęcia
Zdjęcie drukarki: https://www.satoamerica.com/content/dam/sato/sales/content/apac/region-master/products/printers/industrial-printers/cl4-sxr/1220x1220-CL4-SXR1.png?text=1 — widok pod kątem. Imagen/image_gen dopasował skalę i marginesy. Bez dopisywania oznaczeń RFID.
Części: ilustracje poglądowe na podstawie rysunków katalogowych (głowica poz. 6, wałek poz. 5). Opisy i alty oznaczają je jako rysunki, nie fotografie. Odrzucono pierwszy wynik głowicy, który łączył głowicę z wałkiem.
Pole zdjęcia głównego: 576,5 × 576,5 px, identyczne jak ZT411 RFID i ZT610 RFID. Widoczny obiekt (próg RGB <225, alfa >100): CL4 81,1% szer. / 78,5% wys.; ZT411 88,4% / 85,5%; ZT610 83,9% / 85,2%. Porównano także wizualnie w przeglądarce. Akcesoria w jednym standardowym rzędzie czterech kart. Brak zmian CSS lub komponentów.

## Walidacja
TypeScript i ESLint bez błędów. Sprawdzone unikalne ID i slugi, powiązania akcesoriów, istnienie obrazów i liczniki kategorii. Filtr 600 dpi rozszerzony do 600 / 609 dpi. Pierwszych dziesięć pozycji kategorii RFID nadal Zebra. Podgląd z publicznym API cen wyłącznie GET, lokalny backend odłączony od produkcyjnej bazy. Publikacja wyłącznie przez commit i push na gałąź produkcyjną; po wdrożeniu kontrola publicznej karty.
