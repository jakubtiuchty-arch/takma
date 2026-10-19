# Zebra RFD40 — wdrożenie 2026-10-19

Trzy europejskie PN: RFD4030-G00B700-E8, RFD4031-G00B700-E8, RFD4031-G10B700-E8. Oferty potwierdzone w BlueStar i Jarltech. Brak ofert głównych PN w Ingram. Koszt i fizyczne stany w distribution-check.json; przychodzących dostaw nie liczymy do dostępnych sztuk.

Źródła parametrów: oficjalne karty katalogowe Standard oraz Premium/Premium Plus, instrukcja RFD4031 i katalog akcesoriów 2026 (lokalne pliki i źródła w document-sources.json). Tylko Premium Plus ma SE4100. Standard nie ma Bluetooth ani Wi-Fi. Wi-Fi Premium służy do zarządzania. Nie podajemy konkretnego zasięgu, ponieważ dokumenty Standard i Premium podają różne wartości nominalne; wynik zależy od warunków.

Adaptery eConnex dobierane do dokładnego modelu i tylnego złącza 8-pin. Adapter TC53/58 wymaga osobnej osłony Exoskeleton. Nie rozszerzamy zgodności na TC53e-RFID. Adaptery Bluetooth nie są oferowane przy Standard. Nie dodajemy adaptera EC50/55 bez oferty w dystrybucji. Akcesoria z zerowym stanem mają cenę i stan live, bez deklaracji dostępności.

Bateria BTRY-RFD49-70MA1-01 oraz istniejące zasilacze i przewody są współdzielone przez istniejące karty, bez duplikowania PN. Pierwszy rząd 4 akcesoriów; pozostałe przez standardowe rozwijanie. Jeden PN na model z pustymi atrybutami wariantu; porównanie modeli pokazuje wyłącznie Bluetooth, Wi-Fi i skaner.

Kategoria /uchwyty-rfid znajduje się w menu Terminale. /terminale-rfid zachowuje sześć samodzielnych terminali. Nowa kategoria korzysta ze standardowego szablonu, filtrów, stylu linków i aktualnych cen API. Pojedynczy PN ma schema Product, kategorię Uchwyty RFID i ofertę live.

## Korekta zdjęć i audyt treści — 2026-10-19

Poprzednie wpisy w product-image-frames zmieniały nowe akcesoria na kwadratowe pola, podczas gdy współdzielona bateria zachowywała pole 4:3. To powiększało produkty i rozsuwało tytuły. Usunięto te wpisy dla akcesoriów RFD40. Zachowano standardowe pola 4:3 i ograniczono widoczny obiekt do 66% ich wysokości, tylko w sekcjach akcesoriów uchwytów RFID. WS501-R zachowuje dotychczasową wartość domyślną 82%.

Pierwszy rząd ma teraz widoczne produkty 142–143 px przy polu 286×214 px. Porównano z TC53e-RFID i MC3330xR; pomiary i zrzuty w kontroli roboczej. Sprawdzono również proporcje pól po rozwinięciu wszystkich 14/16 akcesoriów, zwijanie i widok mobilny.

W opisach było osiem identycznych długich bloków między każdą parą kart. Przepisano opisy osobno dla Standard, Premium i Premium Plus. Pozostał jeden wspólny blok: wymagana lista zasilacza i przewodów. Wszystkie zdania opisowe mieszczą się w celu 25 słów po pominięciu składni Markdown. Metaopisy mają 141–143 znaki i są różne. Zachowano potwierdzone parametry, ograniczenia modeli, oryginalne PN oraz zawartość zestawów.
