# Skala zdjęcia głowicy P1123335-156

Użytkownik wymaga pomiarów i spójności realnej wielkości produktów, także gdy pola zdjęć są identyczne.

## Pomiar przed poprawką

Na stronie ZT231 RFID w widoku komputerowym oba kafelki głowic mają szerokość 286 px. Pole obrazu: 286 × 214,5 px, padding 12 px, object-fit contain. Komponenty i geometria kart są wspólne.

| Zdjęcie | Plik | Obwiednia produktu w pliku | Produkt w polu zdjęcia (około) |
| --- | --- | --- | --- |
| Głowica RFID 203 dpi, przed | 400 × 394 px | 395 × 393 px | 191 × 190 px |
| Głowica RFID 300 dpi | 640 × 640 px | 544 × 212 px | 162 × 63 px |
| Głowica 300 dpi zwykłej ZT231 | 800 × 800 px | 682 × 265 px | 162 × 63 px |

Pomiar granic przy progu bieli RGB 235. Różna orientacja głowic wpływa na obwiednię: porównujemy też przekątną obwiedni jako pomocniczą miarę wielkości. Przed poprawką ok. 269 px wobec 174 px na obu referencjach.

## Poprawka

Narzędzie: wbudowane `image_gen` (edytowanie wskazane przez użytkownika jako Imagen). Oryginał pozostaje zachowany. Nowy plik: `/images/products/P1123335-156-framed.png`.

Wynik: kwadrat 1254 × 1254 px, obwiednia produktu (241, 218, 1004, 1010), udział około 61% szerokości i 63% wysokości. Przy tym samym polu na stronie daje około 116 × 120 px, przekątna około 167 px wobec 174 px dla referencji. Bez zmiany rozmiaru pola i komponentów.

Prompt:

> Edit target: the supplied genuine manufacturer photograph of Zebra printhead P1123335-156. This is ONLY a product-photo framing correction for an e-commerce card. Keep the exact same printhead, original diagonal orientation, black housing, green strip, silver tabs, lighting and details unchanged. Do not redesign, rotate, retouch or invent the object. Place the existing photographed object in the CENTER of a pure white square canvas with generous equal white margins. The complete object should occupy approximately 60 percent of the canvas height and 60 percent of its width, instead of touching the edges as it does in the original. Preserve the entire product without any cropping. No text, no logos added, no border, no other objects. Output a clean square product photograph with a pure white background. The sole intended change is smaller object scale and more surrounding white space.

Zasadę pomiaru i kontroli dopisano do AGENTS.md. W głównym katalogu roboczym zachowano istniejące zmiany instrukcji.

Kontrola podglądu `takma-fvn38gxqg-kubas-projects-c93bb872.vercel.app`: obie karty mają nadal pole 286 × 214,5 px i padding 12 px. Nowy obraz jest wczytany, produkty porównano obok siebie w drugim rzędzie akcesoriów. Budowanie zakończone powodzeniem.
