# Honeywell PX45 RFID — 16.10.2026

## Zakres

Nowa karta honeywell-px45-rfid obejmuje dwa zatwierdzone warianty europejskie. Użytkownik zaakceptował dodanie mimo zerowych stanów. Aktualna rodzina producenta; bez ponownego dodawania usuniętej PM65 RFID.

| PN | Konfiguracja | Cena sprzedaży netto PLN | PL / EU |
|---|---|---:|---:|
| PX45A00EU0000200 | 203 dpi, UHF EU, Ethernet | 16193,44 | 0 / 0 |
| PX45A02EU0000300 | 300 dpi, UHF EU, Ethernet, Wi-Fi ROW | 18572,80 | 0 / 0 |

Oba z RTC, LCD2,36 cala/klawiaturą, obrotowym uchwytem, przewodami EU+US. Bez fabrycznej gilotyny i nawijaka. Tabela wyłącznie rozdzielczość i Wi-Fi. Wewnętrzny nawijak/LTS opcją fabryczną. Bez dodawania RFID modułu, już zawartego w obu PN. Fabryczne Wi-Fi drugiego PN potwierdza BlueStar. Do pierwszego PN można dobrać ROW50147002-002, montowany przez autoryzowanego technika.

## Akcesoria i oferty

| PN | Część | Cena netto PLN | Stan EU |
|---|---|---:|---:|
| 1-040082-900 | Głowica203 dpi | 1322,19 | 101 |
| 1-040083-900 | Głowica300 dpi | 1392,12 | 586 |
| 1-040230-93 | Wałek | 235,91 | 139 |
| 1-041574-900 | Gilotyna | 5188,76 | 0 |
| 50147002-002 | Wi-Fi ROW | 2168,52 | 30 |

Ceny i stany przez istniejące publiczne API TAKMA, odczyt16.10.2026. Cztery nowe części i jedna współdzielona karta Wi-Fi (honeywell-px65-wifi-row); brak duplikatu PN. Nazwę i zgodność Wi-Fi rozszerzono o PX45. Drugi PN ma fabryczne Wi-Fi i nie wymaga ponownego zakupu zestawu. Części serwisowe dobiera się do rozdzielczości i numeru seryjnego. Gilotyna tnie między wkładkami RFID.

## Źródła techniczne

- https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/px45-industrial-printer — aktualna rodzina, funkcje, gwarancja1 rok.
- https://shop.bluestoreinc.com/en/px45-series-industrial-printer — dokładne PN, konfiguracja EU/WLAN ROW.
- https://www.bluestarinc.com/hubfs/sps-ppr-PX45_PX65%20Configuration%20Guide%20GLOBAL.pdf?hsLang=en-us — konfigurator producenta, PX45 RFID203dpi s.8, mapaPN s.16, akcesoria s.33–38. Lokalny plik /downloads/honeywell-px45-px65-konfiguracje-en.pdf.
- /downloads/sps-ppr-px45-px65-series-printers-datasheet-en.pdf — producent RevD12/25; PX45 110mm TT/112mm DT, 300mm/s203/300dpi, materiał25,4–120mm, rolka213mm, gilza38–76mm, pamięć256MB/512MB.
- https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/printers/common/documents/sps-ppr-px45-65-acc-en-ug.pdf — akcesoria i montaż; lokalny plik /downloads/honeywell-px45-px65-akcesoria-en.pdf.

Nie kopiowano parametrów PX65: PX45 ma inną szerokość i prędkość oraz inne głowice, wałek i gilotynę. Nie podano liczbyMbps dla Ethernet ze względu na niespójność dokumentów (konfigurator1000, broszura100); sam Ethernet potwierdzony. Nie przypisywano wariantu406dpi do ofertyRFID. Opis zwykłej PX45 skupiono na nadruku; krótka informacja o rozbudowie i link do RFID. Poprawiono błędne alty i odnośniki plików.

## Zdjęcia i wygląd

Główne zdjęcie bazuje na istniejącym PX45_2.png; nowy plik honeywell-px45-rfid-final.webp. Imagen wyłącznie do skali/białych marginesów. Konstrukcja i proporcje urządzenia zachowane. Pozostałe oryginalne zdjęcia PX45_1.png i PX45_3.png mają skorygowane alty.

Zdjęcia dokładnych części: https://www.ers-online.co.uk/PX45/accessories
- /files/products/images/15455_1-040082-900.jpg oraz15456_1-040083-900.jpg — wspólne zdjęcie serii głowicy, opisane poglądowo.
- /files/products/images/18385_1-040230-93.jpg
- /files/products/images/18446_1-041574-900.jpg

Imagen do skali i białych marginesów, bez zmian komponentów/CSS. Jeden dział Akcesoria, początkowo4, potem Pokaż pozostałe(1)/Zwiń.

Pomiary RGB210: PX45 główny67,9% szerokości/39,1% wysokości; wzorce CL4NX74,5/68,3%, CL6NX69,7/64,9%. Naturalnie niższa obudowa PX45 zachowuje proporcje. Głowica71,5/45,4%, wałek68,9/17,8%, gilotyna64,8/44,4%. Referencje głowic PM65:65,1/48,5%, PX65:66,1/41%.

## Kontrole

TypeScript, ESLint, integralność katalogu: unikalneID/slugi, poprawnePN, różnicowe kolumny, pliki i referencje. RFID32, przemysłowe54, TT71, akcesoria280. PM65 RFID pozostaje nieobecna. Trasa magazynowa zachowana. Filtr4cale rozszerzony do104–112mm, aby uwzględniał PX45. Zebra pierwsze10 bez zmian.

Publikacja wyłącznie commit + push do claude/takma-frontend-build-RrM9E i automatyczne wdrożenie zGita. Po wdrożeniu kontrola publicznych stron, cen i zrzut.
