# TSC TH240R / TH340R — 16.10.2026

## Europejskie konfiguracje

Dwie osobne karty TH240R203dpi i TH340R300dpi. Po dwaPN EU: TH240R-A001-0002/0102 i TH340R-A001-0002/0102. 0002:USB,USBHost,RS232,Ethernet;0102:dodatkowoWi-Fi802.11a/b/g/n/ac+Bluetooth. Obie wersje ręczne odrywanie,LCD3,5dotyk,zasilacz/przewódEU/USB. CzteryPN znalezione z cenami w APIBlueStar iJarltech, wszystkie stany0.

Publiczne ceny netto: TH240R0002:4138,88;0102:4706,52;TH340R0002:4630,15;0102:5200,33. Brak statycznych cen/stanów w danych, rejestracja LIVE_OFFER_SLUGS i istniejącychSSR/JSON-LD. TabelaPN tylkoŁączność, wspólneparametryniepowielane. Porównanie modeli tylko różnice:203/300dpi,108/105,7mm,203/152mm/s.

Źródła:
- https://shop.bluestoreinc.com/en/tsc-th240-rfid — dokładnePN0002 EU/EMEA zLCD, akcesoria iPN głowic.
- https://www.jarltech.com/en/tsc-thdh240 — dokładne0002/0102 oraz wyposażenieLCD3,5touch;36mies.gwarancji.
- https://emea.tscprinters.com/en/products/th-series-4-inch-performance-desktop-printers — rodzinaTH, standardowy korpusLCD,opcje.
- https://images.bluestarinc-emea.com/pdf/5032-datasheet.pdf — producentTH/DH,23.10.2025,12stron. Gwarancja3lata,głowica12mies/25km,wałek12mies/50km. Zapisano prawdziwyPDF.
- https://fs.tscprinters.com/es/dl/3/8368 — instrukcja producenta10.03.2026,108stron;RFIDminimum15,9mm,antenainternal,wybraneon-metaldo1,35mmtylkotear,THRCwyłączone. PokazanePN toR,bezRC i bezodklejaka/obcinaka. USB/USBHost/RS232/Ethernet,taśma300m1cal lub110m0,5cala,40–110mm;materiał15–120mm,rolka127mm,gilza25,4–38,1mm. Zapisano prawdziwyPDF.

Oficjalna nowa galeriaUSRFID zmaja2026 pokazuje także panelLEDbezLCD. Nie wykorzystano jej jako zdjęciaLCDwariantówEU. DystrybutorzywskazująLCD3,5touchdla konkretnychPN, więc użyto odpowiedniej fotografii tej obudowy zgaleriiEMEA. Nie podmienianoRFID na zwykłyPN. Nie przypisano etykietZebra bez testów. HF/NFC odrębnekonfiguracje, brak w tychPN.

## Akcesoria

Każda drukarka: wspólneWi-FiSP-TH240-0041(EU),BluetoothSP-TH240-0044 i uchwytzewnętrznyOP-COM-0002(gilza3cale) plus właściwa głowica:PH-TH240-0001dla203dpi lubPH-TH240-0002dla300dpi. Pięć unikalnych nowychkart, cztery na każdejdrukarce,wspólnydział standardowej siatki. Brak potrzebyrozwijania przy4szt. ModułyBluetooth iWi-FizBT sąalternatywami; wariant0102niepotrzebujemodułów.

PNz kataloguRFIDBlueStar, zgodnośćserii z instrukcjiTSC. Przed zakupemgłowicy numer modelu/SN, różne rozdzielczości niezamienne. Zdjęcie300dpi jestpoglądowe,wprostwopisieialcie. Nie przypisano automatycznie obcinaka/odklejaka; zależą od konkretnegoRFID/materiału. BP4000pominięto (różnice regionalne i brak potrzeby dublowania dodatkowychzestawów).

APIJarltech: głowice203/300dpi5/15szt.,Wi-Fi9,Bluetooth2,uchwyt47. Cenypubliczne584,97/1141,13/628,20/365,97/62,54netto. PoczątkowoWi-Fi iuchwyt miały statuson-order zeźródłaBlueStar. Wykryto brak livefallbackJarltech dlaon-order przy braku cacheJarltech. Poprawka rozszerza istniejącywarunek unavailable na wszystkiePNbezaktualnegodostępnegozapasu (takżeon-order), zachowując limit3PN,timeout10s i dotychczasowemarże. Test scripts/test-stock-on-order-jarltech.cjs najpierw odtworzyłbłąd, potemprzeszedł: zapasJarltech9mawygrywaćze statusemdostawy, cenaidostawazachowane;zero/błądAPIpozostawiaon-order;zapasdostępny iaktualnycacheJarltechbeznowychzapytań. Żadnegobezpośredniegozapisu doblokalnejprodukcyjnejbazy; APIprzezpublicznyGET.

## Zdjęcia

GłówneźródłoLCD:
https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/product_slider/public/2024-06/th240t_l_500x500pxi-1.jpg?itok=Va5_41ZQ
Oryginał500kwadrat,produkt92,4×94% — zaduży. Imagen/image_gen tylko skala/marginesy; zachować ten sam korpus,LCD,3przyciski,zatrzask,logo,kąt;beznowychznakówRFID. WynikRGBWebP1254kwadratquality92,bbox72,9×73,4%. WzorceZD621R86,8×80,1% iBrotherTD4650TNWBR86,5×74,2%. Polagaleriiwszystkich3576,5×576,5px, sprawdzonewizualnie. BezCSS/zmianukładu.

ModułyoryginalneTSC:
- bluetooth: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/2023-10/4-inch-bt_500x500pxi1.jpg
- wifi: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/2023-10/4-inch-wf-combo_500x500pxi1.jpg
Głowica203dpi: https://www.kns.ru/linkpics/tsc-ph-th240-0001_kod_1110527.jpg z kartyPH-TH240-0001.
Głowica300dpi: https://www.performances-diffusion.fr/8397-large_default/PH-TH240-0002-tete-tsc-th340T-th340-300-dpi.jpg — zdjęciepoglądowe,widocznenaźródle,oznaczenieprzeniesionedoopisuialtu.
Uchwyt: https://www.barcodefactory.com/images/product/large/op-com-0002.png z karty dokładnegoPN.

Wszystkieoryginałyobejrzaneprzededycją. Image_genzachowaćkonstrukcję/kąt/elementy,wyśrodkowaćnabiałymkwadraciezmarginesami;cele szerokościwifi/BT55%,head60%;holder55%wysokości,mainmax75%wysokości. Head300 usuniętooddzielnepolelogotypuipodpisu, zachowanofotografowanymoduł. Wyniki:bboxwifi68,7×65,6%,BT63,5×61,6%,head20377,2×27,8%,head30089,4×52%,holder65,3×59,5%;polaakcesoriów282,25×211,69px. Wizualniezgodneze standardowymiakcesoriami.

Wygenerowanepliki:
- main: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-6403b855-e5c9-4f63-90e5-db3e5b62ee54.png
- wifi: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-82c93af5-a8e0-4f18-a406-d7edcfc66ac6.png
- bluetooth: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-8581cfee-d4b3-4434-9ee4-6b5a2c5f2928.png
- head203: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-f0f13e28-4706-4fd2-a2eb-b799cfe47cb1.png
- head300: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-1ecf5eed-86fa-4e95-bcd1-832b69c7d859.png
- holder: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-be93c1a5-45fe-4215-bbdb-4e3b5c77d198.png

## Kontrole

Lint iTypeScript przeszły. IntegralnośćID/slugów,relacji,plików,liczników:RFID24,biurkowe30,TT63,akcesoria251. Widok390pxscroll375bezprzepełnienia. Czteryakcesoriawjednymrzędzie, tabelaPNpo rozwinięciuniedostępnych pokazujeobiełącznościipoprawneceny. Zebrypozostająpierwsze10wRFID. Zachowanopanelmagazynowy. Publikacjawyłączniecommit/pushnaclaude/takma-frontend-build-RrM9EiGitVercel.
