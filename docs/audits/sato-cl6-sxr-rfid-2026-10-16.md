# SATO CL6-SXR RFID — 16.10.2026

## Zakres i źródła
Jedna karta CL6-SXR z 14 europejskimi konfiguracjami UHF; UK wykluczone. PN z poniższego katalogu, bez tworzenia nieistniejących kombinacji (E0 tylko przewodowe).
- https://shop.bluestoreinc.com/en/cl6-sxr-rfid — PN, wyposażenie i akcesoria.
- https://images.bluestarinc-emea.com/pdf/5211-datasheet.pdf — EMEA wrzesień 2026, wspólny datasheet CL4/CL6. Wykorzystano istniejący plik /downloads/sato-cl4-sxr-karta-en.pdf.
- https://www.satoamerica.com/products/printers/industrial/cl6-sxr/ — aktualny model, zdjęcie.
- https://www.satoamerica.com/products/printers/industrial/cl6-sxr/specifications/ — specyfikacja.
- https://www.manual.sato-global.com/printer/cl-sxr/en/main/06appdix_productspec.html — szerokość do 167,5 mm przy Head Base Position: Left-justify. EMEA podaje standardowo 152 mm (203 dpi) i 165,3 mm (305 dpi); wyjaśnione w treści i FAQ. Prędkość obu wersji do 355,6 mm/s, nie 18 ips z CL4.
- https://www.satoamerica.com/support_downloads/printers/industrial/cl6-sxr/ — sterowniki, instrukcje, części.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/printers/industrial-printers/cl6-sxr/Service%20Parts%20List_CL6-SXR.pdf.coredownload.inline.pdf — katalog części, wersja r04-05-12-25SP, 23 strony. MAIN ASSY-1: R49015101 203 dpi, R49015201 305 dpi, R55373100 global Normal, nie Pureline Japan. CUTTER KIT str.19. Kopia /downloads/sato-cl6-sxr-czesci-en.pdf.
- https://www.satoeurope.com/service-and-support/warranty.php — podstawowy rok i warunkowy dodatkowy rok; limity głowicy i wałka.

## Konfiguracje
203 dpi: WWCLXA70ZNAREU, WWCLXA70ZWAREU, WWCLXAA0ZNAREU, WWCLXAA0ZWAREU, WWCLXAC0ZNAREU, WWCLXAC0ZWAREU, WWCLXAE0ZNAREU.
305 dpi: WWCLXB70ZNAREU, WWCLXB70ZWAREU, WWCLXBA0ZNAREU, WWCLXBA0ZWAREU, WWCLXBC0ZNAREU, WWCLXBC0ZWAREU, WWCLXBE0ZNAREU.
70 odrywanie, A0 obcinak, C0 odklejak + nawijak podkładu, E0 prosty odklejak. N przewodowe, W Wi-Fi/BT. RTC wspólne, nie ma kolumny. Tabela tylko rozdzielczość, odbiór i łączność.

## Ceny i stany
Autoryzowany BlueStar: 14 PN + 4 publikowane akcesoria znalezione z ceną. Publiczne API TAKMA found 18/18. Stan wszystkich zero PL/EU w chwili sprawdzenia. Cena sprzedaży bazowego WWCLXA70ZNAREU 21 349,11 PLN netto. Ceny pobierane na żywo, brak utrwalonych cen zakupu lub sekretów. Opisy dystrybucji potwierdzają zestaw obcinaka WWCLXD100; warianty A0 mają go fabrycznie.

## Wygląd
Bez zmian komponentów i CSS. Cztery akcesoria w jednym standardowym rzędzie. Zdjęcie główne z SATO (dynamic media link z oficjalnej galerii): https://www.satoamerica.com/adobe/dynamicmedia/deliver/dm-aid--df24e556-ab83-4c26-accd-479446dccc74/1220x1220-cl6-sxr.png?preferwebp=true&quality=85 . Imagen/image_gen dopasował białe marginesy. Wersję z czarnym tłem w podglądzie odrzucono. Końcowy obiekt 74,8% szerokości / 64,4% wysokości obrazu. Porównanie: ZT421 RFID 86,5% / 73,8%, ZT620 RFID 90,0% / 82,6% (próg RGB<225). We wszystkich trzech kartach pole 576,5 × 576,5 px. CL6 zachowuje większy biały margines i nie dominuje w kategorii. Rysunki części na podstawie katalogu, oznaczone jako poglądowe w opisach i altach. Końcowe obiekty: głowica 67,1% ×39%, wałek 63,8% ×21,4%, obcinak 63,5% ×44,7%.

## Kontrola
TypeScript, ESLint, unikalność ID i slugów, pliki, relacje i liczniki kategorii: PASS. Osobne porównanie 14 PN z katalogiem, rozdzielczości i WLAN: PASS. Zebra nadal pierwszych 10 pozycji. Filtr sześciocalowy obejmuje 152/165,3/167,5 mm. Lokalny podgląd z odłączoną bazą produkcyjną i publicznym API cen tylko GET. Wdrożenie wyłącznie z Gita, po commit i push na claude/takma-frontend-build-RrM9E. Po wdrożeniu kontrola publicznych adresów i zrzut ekranu.
