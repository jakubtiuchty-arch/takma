# Honeywell PM65 RFID — 16.10.2026

## Zakres

Osobna karta `/produkt/honeywell-pm65-rfid`. Wspólne komponenty kart produktów, bez zmian CSS. Opis zwykłej PM65 skupiony na nadruku, z krótką informacją o rozbudowie i linkiem do fabrycznej wersji RFID. Kategoria RFID: 29 modeli, pierwsze 10 nadal Zebra. Kategorie przemysłowe: 51, termotransferowe: 68.

## Źródła

- Honeywell, konfigurator PM45 / PM45C / PM65, strona 50: https://www.bluestarinc.com/hubfs/PDFs/BlueStar/Honeywell/PM65-Configuration-Guide-compressed.pdf?hsLang=en-us . Fabryczny PN **PM65A1000EU30202**: 203 dpi, Full Touch, Ethernet, UHF EU/ROW, nawijak + LTS, stały uchwyt, RTC, TT, przewód EU. Tylko ten PN potwierdzony i dodany. Nie generowano wariantów 300 dpi przez zmianę cyfr.
- Aktualna strona rodziny i gwarancja: https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/pm65-industrial-printer . Rok gwarancji fabrycznej. Wi-Fi i Bluetooth jako rozbudowa, nie wyposażenie pokazanego PN.
- Karta PM45/PM65 Rev E 08/26: https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/es-mx/public/products/printers/industrial/pm65/documents/sps-ppr-pm45-pm65-series-printer-datasheet-en.pdf . W sklepie `/downloads/honeywell-pm45-pm65-karta-en.pdf`. Szerokość nadruku 167,4 mm; 203 dpi do 300 mm/s, 300 dpi do 250 mm/s (drugiej nie oferujemy na tej karcie). Materiał ok. 51–178 mm, rolka 213 mm, gilza 38–76 mm, minimalna długość RFID 25,4 mm. Taśma 50,8–172,7 mm, 450 m, gilza 25,4 mm. Ethernet 10/100 Mb/s. RAM 256 MB, flash 512 MB, 350 × 484 × 292 mm, 13,7 kg.
- Katalog akcesoriów: https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/printers/industrial/pm65/documents/sps-ppr-pm45-pm65-industrial-printers-accessories-guide-en.pdf . W sklepie `/downloads/honeywell-pm45-pm65-akcesoria-en.pdf`. Głowica PM65-TPH-203, wałek PM65-PR, Wi-Fi ROW PM65-WL-ROW (802.11ax + BT 5.2), odklejak PM65-LD (wymaga nawijaka), składany rdzeń PM65-CC (nawijanie bez gilzy / odbiór taśmy). Rdzeń to część zamienna, nie adapter rolki wejściowej. Poprawiono jego poprzedni opis. Nie dodawano głowicy 300 dpi jako zamiennika 203 dpi ani ponownie nawijaka czy modułu RFID.

## Oferty dystrybucji

Odczyt API TAKMA `/api/stock?pn=...` oraz niezależny odczyt BlueStar, Jarltech, Ingram dla fabrycznego PN.

| PN | Oferta w podłączonym API | Cena sprzedaży netto PLN w czasie kontroli | Stan PL / EU |
| --- | --- | ---: | --- |
| PM65A1000EU30202 | Nie zwrócono ceny | Cena na zapytanie | brak potwierdzonego stanu |
| PM65-TPH-203 | Tak | 2004,78 | 0 / 0 |
| PM65-PR | Tak | 343,67 | 0 / 0 |
| PM65-WL-ROW | Tak | 1409,84 | 0 / 0 |
| PM65-LD | Tak | 716,00 | 0 / 0 |
| PM65-CC | Nie zwrócono ceny | Cena na zapytanie | brak potwierdzonego stanu |

Wszystkie sześć kart dodano do LIVE_OFFER_SLUGS: cena i stan po PN trafiają do renderowania, metadanych i danych strukturalnych tą samą istniejącą ścieżką. Nie wpisywano ceny drukarki z innej konfiguracji, ceny zakupu ani fikcyjnego stanu. Brak oferty nie dowodzi wycofania modelu. Cena i stan zmieniają się w czasie.

## Kontrola wyglądu i działania przed publikacją

- Pola zdjęć PM65, ZT421 RFID i ZT620 RFID: **576,5 × 576,5 px**, `object-fit: contain`.
- Pomiar widocznego produktu po złożeniu kanału alfa na białym tle; próg RGB <210: PM65 **87,4% szer. / 60,1% wys.**, ZT421 **85,5% / 72,8%**, ZT620 **89,5% / 82,2%**. PM65 ma niższą, szerszą konstrukcję; nie jest powiększona względem dwóch wzorców. Zachowano istniejące zdjęcie PM65_1.png i jego białe marginesy, bez generowania konstrukcji drukarki.
- Obrazy akcesoriów: pole **282,25 × 211,69 px**, źródła 800 × 800. Udział produktu szer./wys.: głowica 65,1/48,5%, wałek 62,7/24,0%, Wi-Fi 63,0/37,4%, odklejak 57,1/40,2%, rdzeń 60,1/31,6%. Obrazy mają białe marginesy i standardową skalę.
- Jeden dział Akcesoria. Przed rozwinięciem 4 produkty, po „Pokaż pozostałe (1)” 5, po „Zwiń” znowu 4. Sprawdzone w przeglądarce.
- Jeden potwierdzony PN: brak kolumn stałych parametrów w tabeli wariantów. Parametry wspólne w specyfikacji i opisie.
- Kontrola TypeScript i ESLint bez błędów. Sprawdzone unikalne ID/slugi, odnośniki do akcesoriów, lokalne obrazy i pliki, zgodność liczników kategorii, kolejność Zebra.

## Publikacja

Wyłącznie commit i push na `claude/takma-frontend-build-RrM9E`, następnie automatyczne wdrożenie Vercel z Gita. Wynik kontroli produkcji zapisany w wiadomości końcowej i zrzucie ekranu.
