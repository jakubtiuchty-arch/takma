# Rozdzielenie opisów ZT411 i ZT411 RFID

Zmiana z 15.10.2026 na polecenie użytkownika: zwykła ZT411 opisuje druk etykiet, a kodowanie RFID ma osobną kartę.

- Opis, krótki opis i metadane ZT411 skupiają się na druku etykiet, rozdzielczości i obsłudze materiału.
- Informacja o rozbudowie RFID to krótki akapit z linkiem /produkt/zebra-zt411-rfid. FAQ odróżnia pokazane warianty od fabrycznej wersji RFID.
- Usunięto zastosowanie sugerujące kodowanie RFID w standardowym wariancie. W specyfikacji i porównaniu doprecyzowano opcjonalną rozbudowę.
- Zachowano zdjęcia, ich kolejność, 16 PN, listy materiałów i akcesoriów, liczbę pytań FAQ, sekcje oraz komponenty karty.

Kontrola danych porównała zdjęcia, warianty, listy powiązań i parametry główne z produkcyjnym commitem 6a898ef8bb4f758012769fd734625ad8204c0426. TypeScript przeszedł bez błędów.

## Zachowanie nowszych zmian sklepu

W czasie rozpoczęcia pracy produkcja korzystała z wdrożenia Git dpl_4Hc39ThGzGDhrxuu6VSMFmJ5KvHL, które przywróciło przekierowanie ZT411 RFID do ZT411 i nie zawierało wcześniejszych kart RFID. Zmianę przygotowano w nowej kopii opartej dokładnie na tym commicie. Odtworzono wcześniej zatwierdzone karty RFID, ich akcesoria i zdjęcia oraz kategorię. Zachowano nowe zmiany cen terminali, Newland i obsługi koncesji. W konflikcie product-stock zachowano obie listy ofert live.

Nie zmieniano ustawień cen ani stanów dystrybucji. Informacje techniczne dla zmienianych akapitów: specyfikacja ZT411 i instrukcja producenta, już zweryfikowane podczas dodawania wersji RFID:
https://www.zebra.com/content/dam/zebra_dam/en/tech-specs/zt411-tech-specs-en-us.pdf
