# Zebra TC53e-RFID — weryfikacja 2026-10-18

Dwa PN europejskie: TC530R-0T1E1B1000-EA (6/64 GB) i TC530R-0T1E6B1000-EA (8/128 GB). Jarltech: https://www.jarltech.com/en/zebra-tc53etc58e — SE4720 i bateria 4680 mAh w obu konfiguracjach. Cena i stan z autoryzowanych integracji Ingram, BlueStar, Jarltech; narzut standardowy terminali 10%. Jarltech: 61 szt. pierwszego PN, 0 drugiego; zapowiedziane dostawy nie są stanem fizycznym. Snapshot prywatny w /tmp/takma-rfid-terminals/*-tc53-now.json.

Specyfikacja Zebra: https://www.zebra.com/us/en/products/spec-sheets/mobile-computers/handheld/tc53e-tc53e-rfid-tc58e.html . Karta katalogowa podaje 1,2 m, instrukcja QSG 1,5–2 m. W opisie przyjęto ostrożniejsze nominalne 1,2 m z karty katalogowej, z warunkami zasięgu. Nie obiecano konkretnej wersji Androida ani aktualizacji bez potwierdzenia konfiguracji.

Zgodność akcesoriów sprawdzona po PN w katalogu Zebra, wydanie grudzień 2025, obejmującym TC53e-RFID. Wybrano stacje, baterie, osłonę, uchwyt, ochronę ekranu, pasek, kaburę, rysik i wyposażenie ładowania. Wykluczono baterię wireless BTRY-NGTC5TC7-44MAWC-01 (jawne No dla TC53e-RFID). Uchwyt TRG-NGTC5-ELEC-01 wymaga osłony SG-NGTC5EXO1-01. Stacje zestawowe CRD zawierają PSU/DC, europejski przewód AC oddzielnie. Bez automatycznego podpinania etykiet ani akcesoriów innych rodzin.

Wariant TC530R przeniesiony z karty zwykłej TC53e. Dwa warianty nowej karty różnią się tylko pamięcią RAM/Flash; wyłącznie ta kolumna parametrów jest wyświetlana.

Dokumenty w oryginale na serwerze TAKMA; pochodzenie i SHA256 w document-sources.json. Zdjęcia Zebra z oficjalnej strony produktu; zdjęcie RFD90 z karuzeli polecanych produktów odrzucono.

## Kontrola zdjęć i wyglądu

Zdjęcia przód/tył dopasowane w image_gen bez zmiany konstrukcji urządzenia. Kadr 887 × 1774 px; wysokość widocznego urządzenia: przód 83,0%, tył 81,3%. Wzorce: EM45 RFID 81,6%, zwykły TC53e 87,8%. Porównano standardowe pola galerii oraz kafelki w kategorii. Użyto istniejących komponentów, akcesoria początkowo 4 i rozwijanie 22/zwijanie 4.

### Korekta zdjęcia głównego

Na polecenie użytkownika główny kadr zmieniono na widok na wprost. Źródło Jarltech ZEB_TC53e_TC58e_black_front_shop.png: wybrano lewy model Wi-Fi bez oznaczenia 5G. image_gen wyodrębnił pojedynczy terminal i dopasował białe marginesy. Kadr 887 × 1774 px; obiekt zajmuje 80,5% wysokości i 75,5% szerokości. Wzorzec EM45 RFID: 81,6% i 77,8%; zwykły TC53e: 87,8% i 85,0%. Zdjęcie pod kątem zachowano jako drugie, tył jako trzecie.
