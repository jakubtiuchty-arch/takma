# Brady RT710 — przygotowanie karty, 18.10.2026

## Źródła

- [Produkt i PN producenta](https://automation.honeywell.com/us/en/products/productivity-solutions/mobile-computers/tablets/rt710-rugged-tablet).
- [Karta katalogowa Brady, Rev A 08/26](https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/mobile-computers/tablets/rt10/documents/brady-ips-rt710-datasheet-ltr1.pdf).
- [Instrukcja uruchomienia](https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/mobile-computers/tablets/rt10/documents/brady-ips-rt710-a-en-6qs.pdf): L0 nie ma WWAN; warunki hot-swap, bateria zależna od konfiguracji.
- [Baterie, PN i pojemności znamionowe](https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/mobile-computers/tablets/rt10/documents/brady-ips-rt710-bat-ml-in.pdf).
- [Modele akcesoriów, dokument regulacyjny](https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/mobile-computers/tablets/rt10/documents/brady-ips-rt710-ac-ml-rs.pdf).
- [Katalog BlueStar: konfiguracje i zależności akcesoriów](https://shop.bluestoreinc.com/en/rt710-rugged-tablet).
- [Jarltech](https://www.jarltech.com/en/brady-rt710): porównanie PN i cen; nieprzeniesione błędy techniczne opisane poniżej.

Ceny i stany sprawdzono przez istniejące integracje Ingram, BlueStar i Jarltech. Cztery PN producenta i 15 akcesoriów są w BlueStar. Ingram nie znalazł tych PN. Stany bieżące: zero; część pozycji ma dostawy oczekiwane. Nie traktujemy oczekiwanych dostaw jako dostępności od ręki. Standardowy przelicznik ceny 1,10 i kurs EUR NBP; ceny oraz stany dalej obsługuje istniejące API. Bez nowych sekretów i nowych endpointów.

## Rozbieżności i zakres

Opis Jarltech przypisuje L0 modem 5G oraz 256 GB. Producent i katalog BlueStar potwierdzają brak WWAN i 8/128 GB dla 50C0104G, 57CS104G i 58CS104G; 88CS104G ma 16/256 GB. Wersja 50C0104G nie zawiera baterii ani skanera. Wersje 57CS i 58CS/88CS mają standardową baterię. Użyto danych producenta.

Nie dodano konfiguracji chłodniczej 50C01C4G wyłącznie na podstawie opisu dystrybutora ani nie przypisano −30°C standardowym PN. Nie dodano wstępnie zapowiedzianego RT710-CONV-CABLE. Nie przypisano RFID UHF oferowanym PN; NFC nie jest tym samym co UHF. Nie dodano starszych baterii/stacji RT10 jako bezpośrednio zgodnych. Adapter RT710-3PN-PWRCVRT opisuje konkretną konwersję przyłącza.

RT710-VD-TH1 i RT710-VD-VS1 wymagają osobnej klawiatury. Montaż i zasilanie pojazdu trzeba dobrać do instalacji. RT710-MNT-VS jest wyłącznie do montażu stacjonarnego. RT710-CD/DD mają zasilacz, ale wymagają osobnego przewodu sieciowego. Brak niezweryfikowanych PN przewodów. Zapis pojemności typowej i znamionowej baterii wynika z różnych dokumentów producenta, nie z sumowania pojemności.

Dla akcesoriów bez opublikowanej fotografii użyto standardowego pustego stanu komponentu, bez zdjęć starszych, niezgodnych urządzeń i bez fikcyjnych renderów.

## Fotografie

1. Front: https://www.jarltech.com/sites/default/files/images/product/main/BDY_RT710_front_shop.png
2. Przód i tył: https://honeywell.scene7.com/is/image/Honeywell65/brady-ips-rt710-image-2-1
3. Opcjonalny zestaw pojazdowy: https://honeywell.scene7.com/is/image/Honeywell65/brady-ips-rt710-image

Warianty nazw image-3 do image-8 zwracają identyczny plik co image (potwierdzono SHA256), więc nie dublujemy miniatur. Imagen dostosował wyłącznie skalę i białe marginesy do 3:2. Konstrukcja i istniejące oznaczenia Honeywell zachowane. WebP jakości 92.

### Porównanie skali głównego zdjęcia

Próg różnicy od bieli 30/255. EDA10A: 1200 × 800, ramka produktu 79% × 78%. Zebra ET40: 1200 × 800, 89,1% × 76,8%. RT710: 1536 × 1024, 82,4% × 80,8%. Bez zmian CSS i układu kart. Kontrola w przeglądarce obejmuje pole zdjęcia, odstępy, galerię, tabelę różnic oraz standardowe rozwijanie akcesoriów.

Opis produktu, FAQ i metadane są napisane od nowa według polskiej adaptacji standardu języka TAKMA. Źródła i rozbieżności pozostają w tej dokumentacji roboczej.

## Uzupełnienie: producent i fotografie akcesoriów

Brady ma teraz własną stronę `/brady`, stronę tabletów `/tablety-brady`, link w menu tabletów i stopce, logo na kartach oraz wpis w mapie strony. Strony korzystają z tych samych komponentów BrandPillarPage i BrandCategoryPage co pozostałe marki. Bez nowego układu. Logo: [Brady Corporation, kopia wektorowa z odnośnikiem do oficjalnego źródła](https://commons.wikimedia.org/wiki/File:Brady_Corporation_logo.svg), plik `https://upload.wikimedia.org/wikipedia/commons/3/35/Brady_Corporation_logo.svg`.

Dodano dwie potwierdzone fotografie:

- MBL-HDST-USBC: https://www.midwestbarcodingsolutions.com/mbl-hdst-usbc/ — zdjęcie https://cdn11.bigcommerce.com/s-tjvqt45f8d/images/stencil/500x659/products/153935/460577/mbl-hdst-usbc__95473.1761678299.jpg?c=1 . Potwierdzenie wyglądu i PN także w [katalogu CT32 producenta](https://www.bluestarinc.com/hubfs/CT32%20Accessory%20Guide.pdf?hsLang=en-us).
- 340-053-003-DB9P: https://www.atlasrfidstore.com/honeywell-rugged-keyboard-for-honeywell-vehicle-docks/ — zdjęcie https://cdn11.bigcommerce.com/s-ka7ofex/images/stencil/1280w/products/5468/22648/Honeywell_Rugged_Keyboard_For_Honeywell_Vehicle_Docks__52113.1745249016.png?c=2 . Potwierdzenie PN także w [katalogu Thor producenta](https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/mobile-computers/vehicle-mount-computers/common/documents/sps-ppr-thor-vm-series-accessories-guide-en.pdf).

Próba dopasowania marginesów przez Imagen zmieniała oznaczenia klawiszy, więc wynik odrzucono. Zachowano fotografie źródłowe bez zmian konstrukcji i kompozycji; zapis WebP jakości 95. Skalę ustawia istniejący mechanizm product-image-frames, używany już przez inne akcesoria. Pola zdjęć i komponenty pozostają standardowe. Porównano fotografie ze zdjęciami RT10-PWR i RT10-HS-1; kontrola objęła także faktyczną wielkość części w polu oraz rozwijanie 4 → 15 → 4 akcesoriów.

### Pozostałe fotografie — nierozwiązane

Dla 13 pozostałych PN nie znaleziono potwierdzonych osobnych fotografii części. Nie oznacza to, że producent nie ma ich w niepublicznym pakiecie materiałów. Publiczny katalog Jarltech nie wystawia osobnych fotografii. BlueStar SKU info wymaga osobnego zalogowania do portalu; nie obchodzono tej blokady. Odrzucono obrazy:

- Etiden RT710-DD / RT710-BTEC-001: pole zdjęcia zawiera `brady-logo_3.jpg`, a nie część.
- Antegis RT710-VD-KB4: `BDY_RT710_front_shop.png` — sam tablet zamiast klawiatury.
- Aspekt RT710-VD-VS1 i RT710-3PN-PWRCVRT: cały tablet ze stacją i klawiaturą, nie sam sprzedawany element.
- Webmaxx RT710-VD-VS1: ogólny kolaż baterii, skanera, zasilacza i akcesoriów innych urządzeń.
- 1st-task RT710-BTEC-001: `no-picture.jpg`.
- Barcodefactory 340-053-003-DB9P: ogólny obraz `generic-honeywell-parts-and-accessories.png`; użyto zamiast niego zweryfikowanej fotografii Atlas.
- POSGuys RT710-BTEC-001, RT710-SP-1, RT710-VD-KB4, RT710-3PN-PWRCVRT: „Image Unavailable”.

Brakujące PN: RT710-BTSC-001, RT710-BTEC-001, RT710-CD, RT710-DD, RT710-VD-TH1, RT710-VD-VS1, RT710-VD-KB1, RT710-VD-KB2, RT710-VD-KB4, RT710-SP-1, RT710-MNT-VS, USBC-2-HDMI, RT710-3PN-PWRCVRT. Bez wymyślania konstrukcji, zdjęć starszego RT10 ani podstawiania grafiki marki za zdjęcie akcesorium.

## Lokalne dokumenty do pobrania — 18.10.2026

Trzy pliki PDF pobrane 18.10.2026 z adresów producenta wymienionych powyżej są teraz zapisane w repozytorium bez zmian treści:

- Karta katalogowa, Rev A 08/26: `/datasheets/brady-rt710-en.pdf`.
- Instrukcja uruchomienia: `/instrukcje/brady-rt710-qs-en.pdf`.
- Informacje o bateriach, Rev A: `/instrukcje/brady-rt710-baterie-en-de.pdf`.

Sprawdzono nagłówek `%PDF-`, odczyt metadanych i struktury przez pdfinfo. Karta RT710 używa lokalnych adresów. Źródła producenta pozostają wyłącznie w dokumentacji roboczej.
