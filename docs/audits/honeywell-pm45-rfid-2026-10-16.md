# Honeywell PM45 RFID — 16.10.2026

## Źródła i zakres
Jedna nowa karta RFID, bez dodawania PM65. Dwa europejskie PN fabryczne, bez budowania oferty z drukarki bazowej plus luźnego modułu:
- PM45A1000EU30200 — 203 dpi, Ethernet, UHF EU, RTC, Rewinder + LTS, fixed hanger, full touch, bez przewodu zasilającego.
- PM45A1200EU30300 — 300 dpi, Ethernet, WLAN ROW + BT, UHF EU, RTC, Rewinder + LTS, fixed hanger, full touch, bez przewodu.

https://shop.bluestoreinc.com/en/pm45-direct-thermal-thermal-transfer-printer potwierdza oba PN w europejskiej dystrybucji. Autoryzowana oferta API BlueStar: oba found i cena; stany zero.

https://www.bluestarinc.com/hubfs/PDFs/BlueStar/Honeywell/PM65-Configuration-Guide-compressed.pdf?hsLang=en-us — przewodnik producenta. Str.17 konfiguracja PM45A1000EU30200. Str.3 szerokości 108 / 105,7 mm, RFID min.25 mm. Nie dodano niepotwierdzonych PN z innych regionów.

https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm45-industrial-printer — aktualny model, parametry, instrukcje i sterowniki.

https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/es-mx/public/products/printers/industrial/pm65/documents/sps-ppr-pm45-pm65-series-printer-datasheet-en.pdf — aktualny datasheet EN. Ethernet 10/100 Mb/s (w starej karcie był Gigabit), szerokości, rolki, ribbon, pamięć. Masa w nowszym i starszym dokumencie jest różna, więc w nowej karcie jej nie zadeklarowano. Kopia /downloads/honeywell-pm45-pm65-karta-en.pdf.

https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/printers/industrial/pm65/documents/sps-ppr-pm45-pm65-industrial-printers-accessories-guide-en.pdf — oryginalny katalog części; kopia /downloads/honeywell-pm45-pm65-akcesoria-en.pdf. Potwierdzone: głowice 50180236-001 i 50180237-001, wałek 50180235-001, ROW Wi-Fi/BT 50174832-001, adapter 203-972-001. Przewód EU 1-974027-025 wymagany osobno, wyraźnie opisany. Moduł RFID EU 50180233-001 jest już w fabrycznych konfiguracjach i nie jest akcesorium do ponownego zakupu.

https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/pm45-industrial-printer — 1 rok gwarancji fabrycznej. Nie utożsamiono płatnych umów serwisowych z gwarancją standardową.

## Ceny i akcesoria
Publiczne API w chwili kontroli: PM45A1000EU30200 10 219,45 PLN netto / 0 szt., PM45A1200EU30300 16 695,04 PLN netto / 0 szt. Głowice i wałek z ofertami i dodatnimi stanami EU; adapter z ofertą i stanem zero. 50174832-001 bez bieżącej oferty dystrybucji — brak wymyślonej ceny. Przewód EU również bez oferty, wskazany jako wymagany w opisie, nie jako dołączony. Użyto istniejących kart akcesoriów; bez duplikowania. Wszystkie pięć slugów dopisano do LIVE_OFFER_SLUGS. Nie zapisano cen zakupu ani sekretów.

## Treść i wygląd
Zwykła PM45: opis skupiony na nadruku, krótka wzmianka o rozbudowie i link do osobnej karty RFID. Skorygowano Ethernet w specyfikacji. Nowa karta ma SEO, FAQ, dwa pliki PDF i odrębny zakres konfiguracji. W tabeli tylko zmienne: rozdzielczość i łączność. RTC, ekran, nawijak i RFID EU wspólne w specyfikacji.
Użyto istniejącej galerii PM45_1/2/3 bez zmiany konstrukcji i bez dopisywania znaczków RFID. Zweryfikowano obrazy i alty. Zdjęcie główne: pole 576,5×576,5 px, obiekt 88,2% szer. /62,1% wys. Porównanie pól i obiektów z ZT411 RFID: 576,5×576,5, 88,4%/85,5%; ZT610 RFID: 576,5×576,5, 83,9%/85,2%. Inna wysokość wynika z szerszej sylwetki PM45. Obiekt nie jest powiększony ponad standard, brak potrzeby generowania zdjęć. Akcesoria zachowują istniejące obrazy i standardowe pole 282,25×211,69. Cztery początkowo, piąty przez „Pokaż pozostałe (1)”, „Zwiń” działa; kontrola w przeglądarce. Bez zmian CSS/komponentów.

## Walidacja i publikacja
TypeScript, ESLint, relacje, obrazy, unikalne ID/slugi i liczniki: PASS. Zebra nadal pierwsze 10 pozycji kategorii. Dodany filtr Honeywell. Lokalne testy z odłączoną bazą produkcyjną, proxy cen tylko GET. Commit/push na claude/takma-frontend-build-RrM9E; produkcja wyłącznie z Gita. Kontrola publicznych adresów i zrzut ekranu po wdrożeniu.
