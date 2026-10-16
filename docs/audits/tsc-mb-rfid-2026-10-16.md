# TSC MB241TR / MB341TR — audyt 16.10.2026

## Zakres

Użytkownik zmienił wybór z wycofanych T4204/T4304 na aktualne MB241TR/MB341TR. Nie dodajemy kart T4000. Oficjalny [wykaz wycofanych modeli](https://emea.tscprinters.com/en/discontinued-products) podaje koniec sprzedaży T4000 30.06.2026, wsparcie do 30.06.2030, następcę MB241 Series. Ten sam wykaz wycofuje T800/T800R; nie rekomendować ich jako nowej linii.

## PN i integracja

- MB241TR-A001-0202: EU/EMEA, 203 dpi, 3,5 cala, UHF RFID + ręczne odrywanie.
- MB341TR-A001-0202: EU/EMEA, 300 dpi, ten sam standard wyposażenia.
- Wi-Fi Ready oznacza przygotowanie do modułu, nie fabryczny Wi-Fi.

Oba numery potwierdzone przez odczyt BlueStar CustomerItemPrice i Jarltech lookup po PN producenta. Oba zwracają cenę i 0 szt. Stan w momencie kontroli publicznego API sklepu: MB241TR 6090,32 zł netto, MB341TR 6597,21 zł netto. Kwoty nie są zapisane w kodzie. Podpięcie do istniejącego LIVE_OFFER_SLUGS zapewnia te same oferty w SSR, JSON-LD i kliencie. Nie zmieniano mechanizmu marż, walut ani integracji dostawców.

Konfiguracje i akcesoria potwierdza [katalog BlueStar](https://shop.bluestoreinc.com/en/tsc-mb241t-rfid). To źródło dystrybucyjne zawiera jednoznaczne opisy EU (EMEA), USB/RS232/Ethernet/USB Host/RTC, UHF RFID+TEAR oraz głowice i WF-COM-2002.

## Źródła producenta

- [Seria MB241 i FAQ](https://emea.tscprinters.com/en/products/mb-series-4-inch-performance-industrial-printers)
- [Karta katalogowa](https://images.bluestarinc-emea.com/pdf/4951-datasheet.pdf), kopia `/downloads/tsc-mb241-karta-produktu-en.pdf`.
- [Instrukcja rewizja D](https://fs.tscprinters.com/system/files/31-1680005-00_mb241_user-manual_en_d.pdf), kopia `/downloads/tsc-mb241-instrukcja-en.pdf`.

203 dpi: 304,8 mm/s i 107 mm. 300 dpi: 228,6 mm/s i 105,7 mm. RFID Gen2 v2 / ISO 18000-63, minimalny pitch15,9 mm. Rolka203,2 mm, taśma450m. FAQ zastrzega grubość1,65mm dla RFID tear-off, nie dla wszystkich konfiguracji. Gwarancja2lata, głowica12m lub25km, wałek12m lub50km, pierwszy z limitów.

Przy tej weryfikacji poprawiono istniejącą MB341T: błędne305mm/s i107mm zastąpione228,6mm/s i105,7mm, wraz z bezpośrednimi fałszywymi porównaniami. Zwykłe karty MB241T/MB341T zachowują układ i otrzymują linki do osobnych RFID.

## Akcesoria

Wspólny standardowy dział Akcesoria, 2 pozycje na każdej karcie:
- WF-COM-2002 — Wi-Fi/Bluetooth do obu PN, istniejąca karta rozszerzona o zgodność RFID.
- PH-MB240-0001 — 203dpi, istniejąca karta dla MB241TR.
- PH-MB240-0002 — 300dpi, nowa karta dla MB341TR; nie przypisana do203dpi.

API potwierdza ceny i zapas wszystkich trzech pozycji. Zdjęcia i referencje istnieją. Nie podpinano zwykłego CUT-MB240-0001/odklejaka/nawijaka bez potwierdzenia dla RFID. RFID-MB241-0001/0002 to alternatywne zestawy rozbudowy, nie obowiązkowe dodatki do urządzenia już z RFID. Etykiety Zebra nie zostały przypisane bez potwierdzenia wkładek.

## Zdjęcia

Źródła:
- Właściwa fotografia RFID z katalogu BlueStar: https://images.bluestarinc-emea.com/images/thumbs/0015317_tsc-mb241t-rfid_280.jpeg
- Oficjalna obudowa bazowa do szczegółów: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/product_slider/public/2024-06/mb241t-4_500x500pxi3.jpg?itok=TLNmLvYe
- Oficjalna osłona RFID: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2025-05/mb241rfid_tear_module1.jpg?itok=Ka4LUS-j
- Zdjęcie głowicy300dpi na stronie dokładnego PN: https://cdn.zwei.gmbh/files/bauer-pk.net/media/61/52/5d/1773049553/PH-MB240-0002.jpg?ts=1773049553 ; karta https://bauer-pk.net/en/tsc-ersatzteil-druckkopf-12-punkte-mm-300-dpi/ph-mb240-0002 . Sprzedawca oznacza zdjęcie jako poglądowe.

image_gen: odtworzyć czysty kadr fotografii RFID, zachować żebrowaną osłonę anteny z pierwszego i trzeciego odniesienia; drugie odniesienie wyłącznie jako szczegóły obudowy. Bez zmiany kąta, lustra, konstrukcji i dodatkowych obiektów; kwadratowe nieprzezroczyste białe tło; cel77% szerokości i73% wysokości. Oryginały obejrzane przed edycją, wynik porównany z konfiguracją RFID. Wynik narzędzia `/Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-abf07dd9-d294-42a7-bc34-f5e9b2da52a7.png`. Asset `tsc-mb-rfid-framed.webp`, RGB1254×1254, WebP92.

Pomiary udziału produktu (próg różnicy od bieli35):

| Asset | Szerokość | Wysokość |
| --- | --- | --- |
| TSC RFID | 82,8% | 80,6% |
| ZT231 RFID wzorzec | 72,7% | 67,9% |
| ZT411 RFID wzorzec | 87,8% | 84,8% |
| PH-MB240-0002 | 65,0% | 37,2% |
| PH-MB240-0001 | 59,6% | 43,4% |
| WF-COM-2002 | 36,0% | 58,8% |

Galeria desktop576,5×576,5px na nowej karcie i obu wzorcach. Akcesoria282,25×211,69px; bez zmian komponentów/CSS. Dwuelementowy pierwszy rząd w standardowej siatce czterokolumnowej. Skala produktu mieści się między dwoma wzorcami.

## Kontrola przed publikacją

Lint zmienionych plików, TypeScript, unikalność slug/ID, istnienie lokalnych plików i odnośników produktów. Liczniki: RFID16, przemysłowe42, TT56, akcesoria234. Oba PN mają pusty zestaw dodatkowych kolumn wariantu; porównanie zawiera tylko różne dpi/szerokość/prędkość. Filtr TSC pokazuje2nowe karty. Mobile390px: brak poziomego przepełnienia. Lokalne UI korzystało z wyłączonej bazy i kluczy dostawców, stock przez GET publicznego API.

Publikacja wyłącznie commit/push `claude/takma-frontend-build-RrM9E` i integracja Git Vercel.
