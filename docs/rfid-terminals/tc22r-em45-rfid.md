# Terminale RFID — TC22R i EM45 RFID

Weryfikacja: 18.10.2026. Nowa podkategoria `/terminale-rfid` należy do terminali mobilnych. Zachowano istniejące szablony kategorii, produktu, tabeli wariantów i listy akcesoriów.

## Konfiguracje

- TC22R: TC2205-0G1250SS-E8, 865–868 MHz, 6/64 GB, SE4710, bateria 7000 mAh.
- EM45 RFID: EM45B2-3T106B0-EA, europejskie UHF 865–868 MHz, 8/128 GB, 5G; odczyt kodów aparatem.
- Jeden potwierdzony europejski wariant na kartę. Wspólne parametry w specyfikacji. Tabela zachowuje PN, aktualną cenę, stan i akcję zakupu.
- Ceny i stany: istniejące integracje Ingram / BlueStar / Jarltech. Narzut terminali pozostaje 10%; API, karta i koszyk korzystają z istniejącego przepływu. Zakupowe dane uwierzytelniające i surowe odpowiedzi nie są zapisane w repozytorium.

## Zgodność akcesoriów

TC22R: BTRY-RFD49-70MA1-01, CRD-TC2R-BS1CG-01, CRD-TC2R-BS4CG-01, CRD-TC2R-SE4ET-01, CRDCUP-TC2R1U-01, CRDCUP-TC2R2E-01, SG-TC2R-SCRNPT1-01. Stacja pojedyncza wymaga CBL-TC5X-USBC2A-01 i PWR-WUA5V12W0EU. Stacje czterostanowiskowe wymagają PWR-BGA12V108W0WW, CBL-DC-381A1-01 i przewodu sieciowego EU. Wkładki to części do stacji, nie samodzielne ładowarki. Wspólne zdjęcia rodziny stacji i wkładek oznaczono w opisie.

EM45 RFID: SG-EM45EXO1-01, SG-EM45-SCRNPT1-1, CRD-EM4X-1SNWS-01, PWR-WUA5V45W1EU, HDST-USBC-PTT1-01 oraz istniejący zgodny przewód CBL-EC5X-USBC3A-01. Starszy PN CBL-EM45-USBC3A-01 występuje w przewodniku, ale nie uzyskano potwierdzonej oferty; nie utworzono nowej karty tego PN.

Nie skopiowano baterii, osłon ani stacji zwykłego TC22. Na zwykłym EM45 usunięto sugestię, że UHF jest opcją wyposażenia sprzedawanego EM45B1; pozostawiono krótkie rozróżnienie i link do osobnego EM45 RFID.

## Źródła

- [TC22R — specyfikacja producenta](https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/TC22R_EN.pdf)
- [TC22R — instrukcja Zebra](https://docs.zebra.com/us/en/mobile-computers/handheld/tc2-series/tc22r-qsg.html)
- [TC22R — katalog akcesoriów Zebra](https://www.zpsstore.com/content/product_downloads/zebra/Zebra%20TC22R%20Integrated%20Handheld%20RFID%20Reader%20Accessory%20Guide.pdf)
- [EM45 RFID — specyfikacja Zebra](https://www.zebra.com/us/en/products/spec-sheets/mobile-computers/handheld/em45-rfid.html)
- [EM45 RFID — katalog akcesoriów Zebra](https://www.jarltech.com/sites/default/files/documents/product/accessory_guide/en/em45-rfid-guide-accessory-en-us.pdf)
- Dystrybucja: dokładne PN z kart Jarltech TC22R i EM45 RFID, ceny i dostępność przez uwierzytelnione API TAKMA.

## Zdjęcia i kontrola

Oryginalne fotografie urządzeń: Jarltech / Zebra. Zdjęcia akcesoriów TC22R: karta dystrybutora i oryginalne ilustracje katalogu Zebra. Imagen dopasował białe tło i marginesy. Fotografie rodziny stacji i wkładek nie przedstawiają różnic w niewidocznych portach.

Dwie karty wzorcowe: TC22 i EM45. Pole głównego zdjęcia na komputerze: 584 × 584 px w tym samym widoku przeglądarki. Udział produktu w wysokości kadru (próg różnicy od bieli 30/255): TC22 90,2%; EM45 84,8%; TC22R po dopasowaniu 88,1%; EM45 RFID 86,1%. Zachowano wspólny układ i komponent galerii. Akcesoria: cztery pierwsze produkty, reszta przez „Pokaż pozostałe” / „Zwiń”.

Kontrola lokalna: obie karty i API pokazały zgodne PN, cenę i stan; koszyk EM45 RFID zachował PN i cenę z karty. Kategoria pobrała bieżące ceny obu modeli. Filtr 5G ograniczył wynik do EM45 RFID. TypeScript oraz kontrola ESLint zmienionych plików; istniejący test cen terminali obejmuje również rozpoznanie TC22R i EM45 RFID.
