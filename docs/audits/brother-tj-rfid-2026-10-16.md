# Brother TJ RFID — weryfikacja 16.10.2026

## Produkty i oferty

Osobne karty TJ-4021TNR / TJ-4121TNR. PN europejskie TJ4021TNRZ1 / TJ4121TNRZ1 potwierdzone odczytem Ingram PnA: DITJ4021TNRZ1 / DITJ4121TNRZ1. Oba 0 szt. w momencie kontroli. Publiczne API sklepu: ceny sprzedaży netto 11 043,82 zł / 12 187,90 zł. Kwoty nie są zapisane na stałe w danych produktu. Oferty pobiera istniejąca integracja; brak zapasu nie jest przedstawiany jako dostępność.

W integracji Ingram dodano trasowanie TJ + cyfra oraz części BPAHA/BPAPRL do prefiksu DI. Test `scripts/test-ingram-brother-tj.cjs` kontroluje wysłany XML i odczyt odpowiedzi, zachowując trasowanie Zebra i Honeywell. Test częściowego błędu partii również przechodzi.

## Źródła techniczne

- [Specyfikacja europejska TJ-4021TNR](https://support.brother.com/g/b/spec.aspx?c=eu_ot&lang=en&prod=lptj4021tnreuk)
- [Specyfikacja europejska TJ-4121TNR](https://support.brother.com/g/b/spec.aspx?c=eu_ot&lang=en&prod=lptj4121tnreuk)
- [Instrukcja producenta, rewizja 04](https://download.brother.com/welcome/docp100549/cv_tj-4020tn_eng_ug_04.pdf) — lokalnie `/downloads/brother-tj-rfid-instrukcja-en.pdf`; rozdziały 9–10.
- [Deklaracja zgodności UE](https://download.brother.com/welcome/docp100545/cv_tj4020tn_mlt_doc_06.pdf) — oba TNR; PA-CU-004, PA-LP-005 i PA-WI-002.
- [Oficjalna galeria wersji TNR](https://www.brother.co.jp/product/labelprinter/tj4121tnr/index.aspx).

Uwaga rozbieżność: tabela wsparcia TJ-4121TNR podaje 254 mm/s. Instrukcja serii jednoznacznie przypisuje 177,8 mm/s do TJ-4121TNR (300 dpi); publikujemy tę wartość. Japońska karta TNR potwierdza ok. 177 mm/s. Nie przenosimy regionalnych częstotliwości ani warunków gwarancji z Japonii.

203 dpi: 107 mm, 254 mm/s. 300 dpi: 105,7 mm, 177,8 mm/s. Wspólne: UHF Gen2, EU 866–868 MHz; RFID szerokość 25,4–116 mm; rozstaw 15,875 mm; rolka 203,2 mm; taśma 450 m; obudowa 248 × 443 × 274 mm, 9,9 kg. Wi-Fi opcjonalne.

## Akcesoria i ograniczenia

Jeden standardowy dział Akcesoria, bez własnego komponentu i zmian CSS:
- PAWI002 / PA-WI-002 — opcjonalny Wi-Fi, nowa karta.
- PACU004 / PA-CU-004 — istniejąca obcinarka, wyłącznie zwykłe etykiety.
- PALP005 / PA-LP-005 — istniejący odklejak, wyłącznie zwykłe etykiety.

Instrukcja str. 84, przypis 1: cutter i peeler **niezgodne z etykietami RFID**; przypis 2: montaż przez autoryzowanego sprzedawcę. Wyraźne ograniczenia w opisach obu drukarek, FAQ i kartach akcesoriów. PN akcesoriów potwierdzone w Ingram, ceny i stany podpięte do istniejącego mechanizmu ofert. Bez automatycznego przypisania zwykłych głowic / wałka ani etykiet Zebra: brak jednoznacznego potwierdzenia dla tych TNR.

## Zdjęcia i spójność

Źródło główne: https://www.brother.co.jp/-/media/cojp/product/labelprinter/img/tj4121tnr/main_left.ashx

Zdjęcie przedstawia właściwą przednią osłonę RFID; nie zastępujemy fotografią zwykłej TJ. Zachowany oryginalny kąt i konstrukcja, bez odbicia lustrzanego. Wspólna obudowa obu modeli TNR. Edycja w image_gen wyłącznie skali i białych marginesów. Prompt: zachować dokładną konstrukcję, przyciski, ekran, osłonę RFID i logo; kwadratowe nieprzezroczyste białe tło; produkt ok. 78% szerokości / 73% wysokości; bez zmiany kąta, lustra i dopisywania detali.

Wynik narzędzia: `/Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-1e2f43fc-5dac-4139-a4f5-42ed6d712656.png`.
Asset: `/images/products/brother-tj-rfid-framed.webp` (RGB, jakość 92).

Pomiar udziału produktu w kadrze (różnica względem bieli, próg 35):

| Zdjęcie | Rozmiar | Szerokość produktu | Wysokość produktu |
| --- | --- | --- | --- |
| TJ RFID nowe | 1254 × 1254 | 78,1% | 71,3% |
| ZT231 RFID wzorzec | 1200 × 1200 | 72,7% | 67,9% |
| ZT411 RFID wzorzec | 1200 × 1200 | 87,8% | 84,8% |

W przeglądarce przy domyślnym widoku desktop pole galerii wszystkich trzech kart 576,5 × 576,5 px. Nowy produkt mieści się między dwiema kartami wzorcowymi. Zdjęcia akcesoriów zachowane ze sprawdzonych istniejących zasobów: pola 282,25 × 211,69 px, produkt z białymi marginesami (PAWI002 30,9 × 62,4%, PACU004 52,9 × 46%, PALP005 62,6 × 20,4%). Trzy akcesoria mieszczą się w pierwszym rzędzie standardowej siatki czterokolumnowej.

## Kontrola

Lint zmienionych plików i TypeScript; testy integracji Ingram; unikalność ID i slugów; istnienie zdjęć, referencji oraz zgodność liczników kategorii. Lokalne UI przy wyłączonej bazie i kluczach dostawców, GET stock przez publiczne API sklepu. Nowe modele widoczne razem po filtrach Brother + Przemysłowa + 4 cale. Tabele wariantów nie mają wspólnych powtarzających się parametrów. Porównanie obejmuje tylko rozdzielczość, szerokość i prędkość nadruku.

Publikacja wyłącznie commit i push na `claude/takma-frontend-build-RrM9E`, przez integrację Git.
