# SATO CL6NX Plus RFID — 2026-10-16

## Zakres i oferty

Użytkownik wyraźnie zatwierdził dodanie mimo zerowych stanów. Nowa karta sato-cl6nx-plus-rfid, wyłącznie dwa europejskie PN z fabrycznym UHF RFID, RTC i przewodem EU. Oba ręczne odrywanie, bez WLAN/gilotyny/odklejaka. Nie jest wycofaną CL6NX bez Plus. Nie ma istniejącej zwykłej CL6NX Plus w katalogu.

| PN | Wersja | Cena sprzedaży netto PLN | PL / EU |
|---|---|---:|---:|
| WWCLPA72ZNAREU | 203 dpi, do 254 mm/s | 21349,11 | 0 / 0 |
| WWCLPB72ZNAREU | 305 dpi, do 203 mm/s | 23304,52 | 0 / 0 |

Ceny i stany z publicznego API TAKMA / integracji dystrybucji odczytane 16.10.2026. Pozycje w BlueStar. Dane aktualizowane istniejącym mechanizmem, także SEO i JSON-LD. Nie wprowadzono stałych cen ani udawanej dostępności. Tabela wariantów: tylko rozdzielczość i prędkość nadruku.

## Akcesoria

| PN | Część | Cena sprzedaży netto PLN | Stan EU |
|---|---|---:|---:|
| R38747500 | Głowica 203 dpi | 2590,63 | 80 |
| R38747600 | Głowica 305 dpi | 3648,00 | 22 |
| R38353500 | Wałek Pure Line | 327,83 | 75 |
| WWCL95100 | Gilotyna | 3497,81 | 0 |

Głowice przypisane do właściwej rozdzielczości. Nie przenoszono głowic ani gilotyny z CL4NX Plus lub CL6-SXR. Przy RFID cięcie między wkładkami, materiał wymaga weryfikacji. Zdjęcie głowicy serii wspólne dla dwóch PN, wskazane w opisie.

## Źródła

- https://shop.bluestoreinc.com/en/cl6nx-plus-rfid-series — dokładne PN i wyposażenie.
- https://shop.bluestoreinc.com/en/cl6nx-plus-series — PN akcesoriów.
- https://www.satoeurope.com/products/rfid-printers.php — aktualna oferta, 167,5 mm, 254/203 mm/s, LCD 3,5 cala.
- https://www.satoamerica.com/support_downloads/printers/industrial/cl6nx-plus/ — bieżąca dokumentacja.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/printers/industrial-printers/cl6nx-plus/product-datasheets/DS_CL6NX_Plus_Rev26A.pdf.coredownload.inline.pdf — karta Rev26A: 50–180 mm z podkładem, rolka 220 mm/gilza76, taśma600 m/59–177 mm, wymiary338×457×321 mm, pamięć.
- https://www.manual.sato-global.com/printer/clnxplus/main/main_GUID-8159E684-8B5F-41F5-9925-964DE635D014.html — diagramy szerokości: Standard152 mm203 dpi/165,3 mm305 dpi, Left-justify167,5 mm obie. Nie pomylono zaokrąglonych168 mm w broszurze USA z dokładnym polem roboczym.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/documentation/parts-lists/current/Service-Parts-List_CL6NX_PLUS_Main-1.pdf.coredownload.inline.pdf — Fig2: R38353500, R38747500, R38747600; wersja2024-01-12.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/documentation/operator-and-technical-manuals/industrial-printers/CL6NX-Plus_RFID_UHF_Inlay_Configration_Guide.pdf.coredownload.inline.pdf — wkładki UHF.
- https://satoprinterstore.com/accessories/cutter-kit-cl6nx-plus-wwcl95100/ — zgodność gilotyny.
- https://satoprinterstore.com/how-to/install-cutter-clnx-plus/ — montaż zestawów osobnych CL4/CL6.
- https://www.satoeurope.com/service-and-support/warranty.php — 1 rok + warunkowy rok regionalny; limity głowicy i wałka.

## Zdjęcia i wygląd

Zdjęcia SATO Printer Store, części wysyłane z magazynu SATO:
- https://cms.satoprinterstore.com/wp-content/uploads/cl6nx-plus-thermal-printer-15-degree-right-1000x1000.jpg
- https://cms.satoprinterstore.com/wp-content/uploads/cl6nx-plus-printhead-front-1000x1000.jpg
- https://cms.satoprinterstore.com/wp-content/uploads/platen-roller-sato-cl6nx-plus-r38353500.jpg
- https://cms.satoprinterstore.com/wp-content/uploads/cutter-kit-sato-cl6nx-plus-wwcl95100.jpg

Imagen użyty tylko do skali i białych marginesów. Oryginalna konstrukcja zachowana. Bez zmian CSS i komponentów. Standardowy wspólny dział Akcesoria, cztery karty w pierwszym rzędzie. Kolejność Zebra pierwsze10 zachowana. Weryfikacja lokalna i publiczna po Git deploy.

## Wyniki kontroli przed publikacją

TypeScript, ESLint, integralność katalogu i diff --check: OK. 31 kart RFID, 53 przemysłowe, 70 TT, 276 akcesoriów. Unikalne ID/slugi, poprawne referencje i pliki. Usunięta PM65 RFID pozostaje nieobecna. Trasa panelu magazynowego zachowana.

Pomiary przy progu RGB210: drukarka88,7% szerokości /80,1% wysokości; wzorce ZT42185,5/72,8 i ZT62089,5/82,2. Pole główne576,5×576,5 px. Głowica64,9/19%, wałek63,2/7,3%, zestaw gilotyny69,3/63,8%. Pola akcesoriów282,25×211,69 px. Długie części zachowują proporcje. Bez zmian układu, przycisków i rozwijania.

W przeglądarce lokalnej z publicznym API potwierdzone ceny obu PN, status Niedostępny i poprawne kolumny. Cztery akcesoria w standardowym wspólnym dziale; 3 dostępne, gilotyna niedostępna z ceną. Wdrożenie wyłącznie commit + push do wskazanej gałęzi; po wdrożeniu kontrola publiczna.
