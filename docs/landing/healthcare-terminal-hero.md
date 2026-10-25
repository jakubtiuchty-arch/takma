# Hero kategorii: terminale dla służby zdrowia

Status: przygotowane lokalnie, bez publikacji.

Hasło: Dane pod ręką. Przy pacjencie.
Opis: Skanuj opaski pacjentów, odczytuj kody leków i korzystaj z dokumentacji w systemie placówki. Dobierz terminal z obudową przygotowaną do dezynfekcji.
CTA: Zobacz terminale → #produkty.

Grafika: public/images/healthcare-terminals/hero.jpg, 2172 × 724, ok. 203 KB. Wbudowane image_gen, kompozycja ze zdjęć Zebra HC55, Honeywell CT37 HC i Datalogic Memor 12 HC. Brak danych pacjentów i treści medycznej na ekranach. Zachowano ciemny ekran Honeywella i fabryczne ekrany pozostałych urządzeń. PNG źródłowy: exec-d4e09f8c-6f7f-419f-8ec4-64b4df3ce1b5.png.

Prompt: ultra-wide panoramic 3:1 ecommerce category hero; preserve exact device shapes, housing, camera positions, branding and screens from three reference images; arrange upright devices on a clean hospital workstation ledge in the rightmost 40 percent, all visible; soft defocused clinical room and blue scrubs silhouette behind; no patient faces or identifiable information; leftmost 55 percent quiet dark navy #071321 negative space; realistic soft light; no extra text, symbols or sci-fi effects.

Implementacja: komponent serwerowy HealthcareTerminalHero, CSS Module. W SubcategoryPage aktywny tylko dla slug terminale-dla-sluzby-zdrowia. Zachowano pełny opis kategorii nad filtrami i siatką. Brak nowych zależności i skryptów animacji. Mobilnie tekst nad obrazem, bez zasłaniania urządzeń. H1 obejmuje nazwę kategorii i hasło; CTA prowadzi do kotwicy listy.

Kontrola: desktop 1265 × 720, mobile 390 × 844. Brak poziomego przewijania (scrollWidth 390). CTA ustawia #produkty. Kontrast tekstu i kompletność trzech urządzeń sprawdzone wizualnie. ESLint nowych komponentów i SubcategoryPage bez uwag.

Podgląd: /podglad/hero-terminale-hc. W podglądzie trzy terminale przykładowe; właściwa kategoria zachowuje pełny katalog, filtry, opisy i bieżące dane magazynowe.

## Wariant użycia przy pacjencie

Na prośbę użytkownika zmieniono domyślny hero na scenę pracy: personel medyczny odczytuje kod z opaski pacjenta, trzymając Zebra HC55 górną krawędzią skanera w kierunku opaski. Ciemna przestrzeń po lewej zachowuje czytelność tekstu. Widoczne są tylko dłonie i fragmenty sylwetek, bez twarzy lub danych pacjenta.

Wbudowane image_gen, odniesienie do oryginalnego HC55. Prompt: panoramic 3:1 photorealistic hospital work scene, nurse in blue scrubs holds exact white/blue Zebra HC55 to read barcode wristband, top-edge scanner aimed at wristband at plausible distance, front stock screen naturally turned toward caregiver, original device shape, no laser rays, no patient names or faces, dark navy left 55 percent for text. Pierwszy wariant poprawiono, aby górna krawędź urządzenia była skierowana ku kodowi. Plik źródłowy wyniku exec-4e52fa30-dab0-4c44-9470-5a38435d5a27.png, JPEG hero-work.jpg 2172 × 724 px. Poprzedni wariant trzech terminali pozostawiono jako hero.jpg.

## Nagłówek kategorii

Po doprecyzowaniu użytkownika wariant roboczy dopasowano do hero kategorii: H1 „Terminale dla służby zdrowia”, krótki opis, bez CTA, wysokość desktop około 340–380 px. Umiejscowienie w SubcategoryPage wyłącznie nad listą i filtrami kategorii terminale-dla-sluzby-zdrowia. Brak zmian w stronie głównej.
