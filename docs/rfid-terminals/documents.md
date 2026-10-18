# Dokumenty TC22R i EM45 RFID na serwerze TAKMA

Aktualizacja 18.10.2026. Sześć oryginalnych PDF-ów zapisano bez zmiany treści w repozytorium. Adresy źródłowe, liczba stron, wielkość, SHA-256 i data pobrania są w [document-sources.json](document-sources.json).

Każdy model ma lokalną kartę katalogową, instrukcję uruchomienia i katalog akcesoriów. Instrukcje dostępne wcześniej przez strony docs.zebra.com zastąpiono oryginalnymi PDF-ami wskazanymi na tych stronach. Nie zapisano strony HTML pod rozszerzeniem PDF.

Sprawdzono nagłówek `%PDF-`, strukturę i dodatnią liczbę stron przez pdfinfo, nazwę modelu i język tekstu. Odrzucono plik dystrybutora `em45_rfid_en.pdf`, ponieważ pomimo nazwy EN zawierał niemiecki tekst. Zastosowano angielską kartę `em45-rfid-spec-sheet-en-us.pdf` (Zebra, 4 strony). Instrukcje: TC22R MN-005319-01EN Rev. A, 24 strony; EM45 RFID MN-005049-01EN Rev. A, 12 stron. Katalogi: TC22R 10 stron, November 2025; EM45 RFID 12 stron, Revised Nov 2024.

Wspólny katalog TC22R podmieniono także w ośmiu istniejących odnośnikach (terminal i jego akcesoria). Nie zmieniano specyfikacji, PN, cen, zgodności, zdjęć ani układu kart. Na kartach widoczna jest rzeczywista wielkość plików. Po publikacji wymagane potwierdzenie kodu 200, typu `application/pdf` i identyczności pliku z kopią w repozytorium.
