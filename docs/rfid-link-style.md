# Wygląd linków w treściach RFID

Stan: 2026-10-19.

- Kategorie: `/drukarki-rfid`, `/etykiety-rfid-zebra`, `/terminale-rfid`.
- Karty: 61 produktów należących do tych kategorii oraz 207 powiązanych akcesoriów, wyznaczanych z katalogu przy budowaniu strony. Nowe produkty z tych kategorii i ich powiązania otrzymują regułę automatycznie.
- Linki w opisach, FAQ, tabelach i innych tekstach: niebieski `#2563eb`, grubość 600, bez podkreślenia; najechanie zmienia kolor na `#1e40af`.
- Adresy, etykiety, parametry, zgodność oraz zawartość opisów pozostają bez zmian. Listy odnośników w opisach RFID są tekstowe, bez automatycznej zamiany na kafelki.
- Reguła jest ograniczona klasą `rfid-text-links` i znacznikiem `data-text-link` albo obszarem `.prose`. Nie obejmuje nawigacji, przycisków, siatek ofert ani zdjęć. Pozostałe kategorie i produkty zachowują wcześniejszy styl.

Kontrola: trzy kategorie, siedem reprezentatywnych kart z wszystkich trzech rodzin i dwóch producentów drukarek, dwie karty akcesoriów oraz dwie strony kontrolne spoza RFID. Zmierzono kolor, grubość i brak podkreślenia. Sprawdzono telefon 390 px bez przepełnienia, brak linkowych kafelków w opisach oraz zachowanie zewnętrznych adresów i ich atrybutów bezpieczeństwa. TypeScript bez błędów; lint wyłącznie z istniejącym ostrzeżeniem `img` w karcie produktu.
