#!/usr/bin/env python3
"""
Applies SEO improvements to 27 Zebra printers in products.ts:
1. seoTitle -> format with price
2. seoDescription -> add industries + keep PN + price
3. FAQ serwis -> add before "alternatywy" FAQ (except ZD621t)
4. TCO paragraph -> add to description before last zebra.com sentence
5. (Downloads already sufficient for ZQ models, add for others if needed)
"""

FILE = '/Users/jakubtiuchty/takma/src/data/products.ts'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

original_len = len(content)
print(f"File loaded: {original_len} chars")

errors = []

def replace_one(old, new, desc=''):
    global content
    count = content.count(old)
    if count == 0:
        errors.append(f"NOT FOUND: {desc or old[:100]}")
        print(f"  ERROR not found: {desc or old[:80]}")
        return False
    if count > 1:
        print(f"  WARNING {count}x occurrences: {desc or old[:80]}")
    content = content.replace(old, new, 1)
    print(f"  OK: {desc}")
    return True

# ============================================================
# FAQ SERWIS templates
# ============================================================
FAQ_SERWIS_DESKTOP = """      {
        question: 'Gdzie serwisować drukarkę Zebra w Polsce?',
        answer: 'Serwis drukarek Zebra w Polsce prowadzi serwis-zebry.pl — autoryzowany partner Zebra. Oferuje naprawę głowic drukujących, wymianę wałków, kalibrację i aktualizację firmware. Czas naprawy standardowej to 3–5 dni roboczych, dostępna jest również naprawa ekspresowa i wysyłkowa w całej Polsce.',
      },
"""

FAQ_SERWIS_INDUSTRIAL = """      {
        question: 'Gdzie serwisować drukarki Zebra przemysłowe w Polsce?',
        answer: 'Serwis przemysłowych drukarek Zebra w Polsce prowadzi serwis-zebry.pl — autoryzowany partner Zebra z doświadczeniem w naprawach serii ZT. Oferuje naprawę głowic, wymianę wałków dociskowych, czyszczenie toru mediów i aktualizację firmware. Dostępna jest naprawa ekspresowa i serwis na miejscu u klienta (on-site) na terenie całej Polski.',
      },
"""

FAQ_SERWIS_MOBILE = """      {
        question: 'Gdzie serwisować mobilne drukarki Zebra w Polsce?',
        answer: 'Serwis mobilnych drukarek Zebra w Polsce prowadzi serwis-zebry.pl — autoryzowany partner Zebra. Oferuje naprawę głowic drukujących, wymianę baterii i modułów komunikacyjnych, kalibrację i aktualizację firmware. Dostępna jest naprawa ekspresowa i serwis wysyłkowy w całej Polsce.',
      },
"""

# ============================================================
# TCO paragraphs
# ============================================================
TCO_DESKTOP = 'Całkowity koszt posiadania (TCO) jest równie ważny jak cena zakupu: uwzględnij koszt ribbonów (modele termotransferowe: ~0,01–0,02 zł/etykietę), materiałów eksploatacyjnych, serwisu i ewentualnej rozbudowy o moduły łączności. Biurkowe drukarki Zebra z architekturą modularną MCS obniżają TCO dzięki możliwości rozbudowy zamiast wymiany całego urządzenia.'

TCO_INDUSTRIAL = 'Całkowity koszt posiadania (TCO) jest kluczowy dla przemysłowych drukarek etykiet: uwzględnij koszt ribbonów (~0,01–0,02 zł/etykietę), głowic drukujących (200–800 zł), wałków i serwisu. Przemysłowe drukarki Zebra serii ZT oferują niższy TCO dzięki wytrzymałej metalowej obudowie, długowiecznym głowicom i modułowej konstrukcji umożliwiającej naprawę zamiast wymiany urządzenia.'

TCO_MOBILE_LABEL = 'Całkowity koszt posiadania (TCO) mobilnych drukarek etykiet obejmuje koszt ribbonów (modele termotransferowe), materiałów eksploatacyjnych, baterii i serwisu. Mobilne drukarki Zebra serii ZQ oferują niższy TCO dzięki trwałej obudowie odpornej na upadki i warunki zewnętrzne — zwłaszcza modele z certyfikatem IP54/IP65.'

# ============================================================
# ZD421t
# ============================================================
print("\n=== ZD421t ===")
replace_one(
    "seoTitle: 'Zebra ZD421 — drukarka etykiet termotransferowa, następca GK420t',",
    "seoTitle: 'Drukarka etykiet Zebra ZD421t — termotransferowa MCS | od 1 648 zł',",
    "ZD421t seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD421 (ZD4A042) — termotransferowa 4\", następca GK420t. Wi-Fi, Ethernet, MCS, 203/300 dpi. ZD4A042-30EM00EZ od 1 649 zł netto. Porównanie wariantów ZD421t i ZD421d.',",
    "seoDescription: 'Zebra ZD421t — termotransferowa 4\" dla magazynów, logistyki i e-commerce. Wi-Fi, MCS, 203/300 dpi. ZD4A042-30EM00EZ od 1 648 zł netto.',",
    "ZD421t seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],",
    "ZD421t TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD421t?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD421t?',",
    "ZD421t FAQ serwis"
)

# ============================================================
# ZD421d
# ============================================================
print("\n=== ZD421d ===")
replace_one(
    "seoTitle: 'Zebra ZD421d — drukarka termiczna direct thermal, WiFi',",
    "seoTitle: 'Drukarka etykiet Zebra ZD421d — termiczna direct thermal | od 1 472 zł',",
    "ZD421d seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD421d (ZD4A042-D0) — biurkowa termiczna 4\" direct thermal, następca GK420d. E-commerce, Wi-Fi, MCS, 203/300 dpi. ZD4A042-D0EM00EZ od 1 472 zł netto.',",
    "seoDescription: 'Zebra ZD421d — termiczna 4\" DT dla e-commerce, nadawczych i magazynów. Brak ribbona, MCS, Wi-Fi. ZD4A042-D0EM00EZ od 1 472 zł netto.',",
    "ZD421d seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],",
    "ZD421d TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD421d?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD421d?',",
    "ZD421d FAQ serwis"
)

# ============================================================
# ZD621t (already has service FAQ — skip FAQ, but fix seoTitle/desc + TCO)
# ============================================================
print("\n=== ZD621t (skip service FAQ) ===")
replace_one(
    "seoTitle: 'Zebra ZD621 — flagowa drukarka etykiet LCD 4,3 cale',",
    "seoTitle: 'Drukarka etykiet Zebra ZD621t — flagowa LCD 4,3\" RFID | od 2 264 zł',",
    "ZD621t seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD621 (ZD6A042) — najlepsza biurkowa termotransferowa 4\", następca GX420t/GX430t. LCD 4,3\", RFID, 203/300 dpi. ZD6A042-30EF00EZ od 2 264 zł netto. Porównanie ZD621t i ZD621d.',",
    "seoDescription: 'Zebra ZD621t — flagowa biurkowa 4\" TT dla produkcji, pharma i retail. LCD 4,3\", RFID, 203/300 dpi. ZD6A042-30EF00EZ od 2 264 zł netto.',",
    "ZD621t seoDescription"
)
# TCO for ZD621t — unique subcategoryIds combo helps distinguish
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2264",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2264",
    "ZD621t TCO"
)

# ============================================================
# ZD621d
# ============================================================
print("\n=== ZD621d ===")
replace_one(
    "seoTitle: 'Zebra ZD621d — drukarka termiczna premium LCD, 300 dpi',",
    "seoTitle: 'Drukarka etykiet Zebra ZD621d — premium DT LCD linerless | od 1 943 zł',",
    "ZD621d seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD621d (ZD6A042-D0) — premium biurkowa termiczna 4\" direct thermal, następca GX420d. LCD 4,3\", 300 dpi, linerless. ZD6A042-D0EF00EZ od 1 944 zł netto.',",
    "seoDescription: 'Zebra ZD621d — premium DT 4\" dla logistyki i retail. LCD 4,3\", linerless, 300 dpi. ZD6A042-D0EF00EZ od 1 943 zł netto.',",
    "ZD621d seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1943",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1943",
    "ZD621d TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD621d?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD621d?',",
    "ZD621d FAQ serwis"
)

# ============================================================
# ZD411d
# ============================================================
print("\n=== ZD411d ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZD411d — kompaktowa 2\" healthcare',",
    "seoTitle: 'Drukarka etykiet Zebra ZD411d — kompaktowa 2\" healthcare | od 1 237 zł',",
    "ZD411d seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD411d (ZD4A022) — kompaktowa drukarka termiczna 2\", apteka, laboratorium, healthcare. ZD411d Zebra: 203/300 dpi, Wi-Fi 6. ZD4A022-D0EM00EZ od 1 238 zł netto.',",
    "seoDescription: 'Zebra ZD411d — kompaktowa DT 2\" dla aptek, laboratoriów i healthcare. Wi-Fi 6, 203/300 dpi. ZD4A022-D0EM00EZ od 1 237 zł netto.',",
    "ZD411d seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1237",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1237",
    "ZD411d TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD411d?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD411d?',",
    "ZD411d FAQ serwis"
)

# ============================================================
# ZD411t
# ============================================================
print("\n=== ZD411t ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZD411t — termotransferowa 2\" 300 dpi',",
    "seoTitle: 'Drukarka etykiet Zebra ZD411t — termotransferowa 2\" lab | od 1 686 zł',",
    "ZD411t seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD411t (ZD4A022-T0) — termotransferowa 2\", laboratorium, biżuteria. ZD411t Zebra: 203/300 dpi, MCS, Wi-Fi 6. ZD4A022-T0EM00EZ od 1 686 zł netto.',",
    "seoDescription: 'Zebra ZD411t — TT 2\" dla laboratoriów, biżuterii i pharma. MCS, Wi-Fi 6, 203/300 dpi. ZD4A022-T0EM00EZ od 1 686 zł netto.',",
    "ZD411t seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1686",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1686",
    "ZD411t TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD411t?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD411t?',",
    "ZD411t FAQ serwis"
)

# ============================================================
# ZD220d
# ============================================================
print("\n=== ZD220d ===")
replace_one(
    "seoTitle: 'Zebra ZD220d — najtańsza drukarka termiczna USB od 650 zł',",
    "seoTitle: 'Zebra ZD220d — najtańsza drukarka termiczna USB | od 649 zł',",
    "ZD220d seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD220d (ZD22042) — najtańsza drukarka etykiet termiczna 4\" direct thermal, tania drukarka kodów kreskowych USB. 203 dpi. ZD22042-D0EG00EZ od 650 zł netto.',",
    "seoDescription: 'Zebra ZD220d — najtańsza DT 4\" USB dla e-commerce, kurierów i małych firm. 203 dpi, plug&play. ZD22042-D0EG00EZ od 649 zł netto.',",
    "ZD220d seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 649",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 649",
    "ZD220d TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD220d?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD220d?',",
    "ZD220d FAQ serwis"
)

# ============================================================
# ZD230d
# ============================================================
print("\n=== ZD230d ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZD230d — do paczek i kurierów',",
    "seoTitle: 'Drukarka etykiet Zebra ZD230d — do paczek i kurierów | od 1 087 zł',",
    "ZD230d seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD230d (ZD23042) — drukarka etykiet kurierskich, do allegro, InPost, DPD, DHL. ZD230d Zebra: Ethernet, 152 mm/s. ZD23042-D0EG00EZ od 1 087 zł netto.',",
    "seoDescription: 'Zebra ZD230d — DT 4\" do etykiet kurierskich InPost, DPD, DHL i Allegro. Ethernet, 152 mm/s. ZD23042-D0EG00EZ od 1 087 zł netto.',",
    "ZD230d seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1087",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1087",
    "ZD230d TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD230d?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD230d?',",
    "ZD230d FAQ serwis"
)

# ============================================================
# ZD220t
# ============================================================
print("\n=== ZD220t ===")
replace_one(
    "seoTitle: 'Zebra ZD220 — najtańsza drukarka etykiet od 639 zł',",
    "seoTitle: 'Zebra ZD220t — najtańsza drukarka termotransferowa USB | od 639 zł',",
    "ZD220t seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD220 (ZD22042-T0) — najtańsza drukarka etykiet termotransferowa 4\" USB. 203 dpi, ribbon 74 m. ZD22042-T0EG00EZ od 639 zł netto. Porównanie ZD220t i ZD220d.',",
    "seoDescription: 'Zebra ZD220t — najtańsza TT 4\" USB dla biur, produkcji i retail. 203 dpi, ribbon 74 m. ZD22042-T0EG00EZ od 639 zł netto.',",
    "ZD220t seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 639",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 639",
    "ZD220t TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD220t?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD220t?',",
    "ZD220t FAQ serwis"
)

# ============================================================
# ZD230t
# ============================================================
print("\n=== ZD230t ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZD230t — termotransferowa Ethernet',",
    "seoTitle: 'Drukarka etykiet Zebra ZD230t — termotransferowa Ethernet | od 1 135 zł',",
    "ZD230t seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD230t (ZD23042) — drukarka termotransferowa biurkowa sieciowa 4\", Ethernet. ZD230t Zebra: 203 dpi, ribbon 300 m. ZD23042-30EG00EZ od 1 135 zł netto.',",
    "seoDescription: 'Zebra ZD230t — TT 4\" Ethernet dla biur, magazynów i produkcji. 203 dpi, ribbon 300 m. ZD23042-30EG00EZ od 1 135 zł netto.',",
    "ZD230t seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1135",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1135",
    "ZD230t TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD230t?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD230t?',",
    "ZD230t FAQ serwis"
)

# ============================================================
# ZD510-HC
# ============================================================
print("\n=== ZD510-HC ===")
replace_one(
    "seoTitle: 'Drukarka opasek Zebra ZD510-HC — szpitalna 300 dpi',",
    "seoTitle: 'Drukarka opasek Zebra ZD510-HC — szpitalna HIPAA 300 dpi | od 2 674 zł',",
    "ZD510-HC seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZD510-HC (ZD51013) — drukarka opasek szpitalnych i identyfikacyjnych, drukarka opaski pacjenta. ZD510-HC Zebra: Z-Band, 300 dpi. ZD51013-D0EE00FZ od 2 674 zł netto.',",
    "seoDescription: 'Zebra ZD510-HC — drukarka opasek pacjenta dla szpitali i klinik. Z-Band, HIPAA, IEC 60601-1, 300 dpi. ZD51013-D0EE00FZ od 2 674 zł netto.',",
    "ZD510-HC seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-opasek',",
    TCO_DESKTOP + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-opasek',",
    "ZD510-HC TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZD510-HC?',",
    FAQ_SERWIS_DESKTOP + "      {\n        question: 'Jakie są alternatywy dla Zebra ZD510-HC?',",
    "ZD510-HC FAQ serwis"
)

# ============================================================
# ZT231
# ============================================================
print("\n=== ZT231 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT231 — półprzemysłowa RFID LCD',",
    "seoTitle: 'Drukarka etykiet Zebra ZT231 — półprzemysłowa RFID LCD | od 2 551 zł',",
    "ZT231 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT231 (ZT23142) — półprzemysłowa drukarka etykiet do logistyki, RFID, LCD dotykowy 4,3\". ZT231 Zebra: 304 mm/s. ZT23142-D0E000FZ od 2 551 zł netto.',",
    "seoDescription: 'Zebra ZT231 — półprzemysłowa 4\" RFID dla logistyki, magazynów i dystrybucji. LCD 4,3\", 304 mm/s. ZT23142-D0E000FZ od 2 551 zł netto.',",
    "ZT231 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2551",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2551",
    "ZT231 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT231?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT231?',",
    "ZT231 FAQ serwis"
)

# ============================================================
# ZT111
# ============================================================
print("\n=== ZT111 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT111 — najtańsza przemysłowa 4\"',",
    "seoTitle: 'Drukarka etykiet Zebra ZT111 — najtańsza przemysłowa 4\" | od 2 081 zł',",
    "ZT111 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT111 (ZT11142) — najtańsza drukarka przemysłowa do małego magazynu, 203/300 dpi. ZT111 Zebra: metalowa, 254 mm/s. ZT11142-D0E000FZ od 2 081 zł netto.',",
    "seoDescription: 'Zebra ZT111 — najtańsza przemysłowa 4\" dla małych magazynów i produkcji. Metalowa, 203/300 dpi, 254 mm/s. ZT11142-D0E000FZ od 2 081 zł netto.',",
    "ZT111 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2081",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2081",
    "ZT111 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT111?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT111?',",
    "ZT111 FAQ serwis"
)

# ============================================================
# ZT411
# ============================================================
print("\n=== ZT411 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT411 — następca ZT410, RFID 600 dpi',",
    "seoTitle: 'Drukarka etykiet Zebra ZT411 — przemysłowa RFID 600 dpi | od 5 131 zł',",
    "ZT411 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT411 (ZT41142) — drukarka przemysłowa, następca ZT410. ZT411 Zebra: RFID UHF, 600 dpi, linerless, 356 mm/s. ZT41142-T0E0000Z od 5 132 zł netto.',",
    "seoDescription: 'Zebra ZT411 — przemysłowa 4\" RFID UHF dla produkcji, logistyki i pharma. 600 dpi, linerless. ZT41142-T0E0000Z od 5 131 zł netto.',",
    "ZT411 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 5131",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 5131",
    "ZT411 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT411?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT411?',",
    "ZT411 FAQ serwis"
)

# ============================================================
# ZT421
# ============================================================
print("\n=== ZT421 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT421 — przemysłowa 6\" RFID',",
    "seoTitle: 'Drukarka etykiet Zebra ZT421 — przemysłowa 6\" RFID | od 9 416 zł',",
    "ZT421 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT421 (ZT42162) — drukarka etykiet 6 cali do dużych etykiet i etykiet paletowych, RFID UHF. ZT421 Zebra: 168 mm, GS1. ZT42162-T0E0000Z od 9 416 zł netto.',",
    "seoDescription: 'Zebra ZT421 — przemysłowa 6\" RFID UHF do etykiet paletowych i logistyki GS1. 168 mm, ZT42162-T0E0000Z od 9 416 zł netto.',",
    "ZT421 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 9416",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 9416",
    "ZT421 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT421?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT421?',",
    "ZT421 FAQ serwis"
)

# ============================================================
# ZT510
# ============================================================
print("\n=== ZT510 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT510 — przemysłowa 24/7 produkcja',",
    "seoTitle: 'Drukarka etykiet Zebra ZT510 — przemysłowa 24/7 produkcja | od 8 489 zł',",
    "ZT510 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT510 (ZT51042) — drukarka etykiet 24/7 do produkcji ciągłej, następca 105SLPlus. ZT510 Zebra: 305 mm/s, metalowa, NFC. ZT51042-T0E0000Z od 8 490 zł netto.',",
    "seoDescription: 'Zebra ZT510 — przemysłowa 4\" 24/7 dla produkcji i logistyki. Metalowa, NFC, 305 mm/s. ZT51042-T0E0000Z od 8 489 zł netto.',",
    "ZT510 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 8489",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 8489",
    "ZT510 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT510?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT510?',",
    "ZT510 FAQ serwis"
)

# ============================================================
# ZT610
# ============================================================
print("\n=== ZT610 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT610 — heavy-duty 4\" RFID 600 dpi',",
    "seoTitle: 'Drukarka etykiet Zebra ZT610 — heavy-duty 4\" RFID 600 dpi | od 10 431 zł',",
    "ZT610 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT610 (ZT61042) — najlepsza drukarka przemysłowa heavy-duty 4\", RFID do fabryki. ZT610 Zebra: 600 dpi, 356 mm/s, LCD 4,3\". ZT61042-T0E0100Z od 10 432 zł netto.',",
    "seoDescription: 'Zebra ZT610 — heavy-duty 4\" RFID UHF dla fabryk i przemysłu. 600 dpi, 356 mm/s, LCD 4,3\". ZT61042-T0E0100Z od 10 431 zł netto.',",
    "ZT610 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 10431",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 10431",
    "ZT610 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT610?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT610?',",
    "ZT610 FAQ serwis"
)

# ============================================================
# ZT620
# ============================================================
print("\n=== ZT620 ===")
replace_one(
    "seoTitle: 'Drukarka etykiet Zebra ZT620 — heavy-duty 6\" przemysłowa',",
    "seoTitle: 'Drukarka etykiet Zebra ZT620 — heavy-duty 6\" RFID | od 12 416 zł',",
    "ZT620 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZT620 (ZT62062) — heavy-duty drukarka przemysłowa szerokoformatowa 6\", etykiety paletowe, RFID. ZT620 Zebra: 305 mm/s, LCD 4,3\". ZT62062-T0E0100Z od 12 417 zł netto.',",
    "seoDescription: 'Zebra ZT620 — heavy-duty 6\" RFID do etykiet paletowych i przemysłu. 305 mm/s, LCD 4,3\". ZT62062-T0E0100Z od 12 416 zł netto.',",
    "ZT620 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 12416",
    TCO_INDUSTRIAL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 12416",
    "ZT620 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZT620?',",
    FAQ_SERWIS_INDUSTRIAL + "      {\n        question: 'Jakie są alternatywy dla Zebra ZT620?',",
    "ZT620 FAQ serwis"
)

# ============================================================
# ZQ511
# ============================================================
print("\n=== ZQ511 ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ511 — wzmocniona 3\" MIL-STD',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ511 — wzmocniona 3\" MIL-STD | od 2 287 zł',",
    "ZQ511 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ511 (ZQ51-BUE) — wzmocniona mobilna drukarka etykiet 3\" MIL-STD-810G, na wózek widłowy, IP54. ZQ511 Zebra: -20°C. ZQ51-BUE001E-00 od 2 288 zł netto.',",
    "seoDescription: 'Zebra ZQ511 — mobilna 3\" MIL-STD dla kurierów, magazynów i serwisu. IP54, -20°C, BT+Wi-Fi. ZQ51-BUE001E-00 od 2 287 zł netto.',",
    "ZQ511 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2287",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2287",
    "ZQ511 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ511?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ511?',",
    "ZQ511 FAQ serwis"
)

# ============================================================
# ZQ521
# ============================================================
print("\n=== ZQ521 ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ521 — 4\" etykiety 100×150 mm',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ521 — 4\" etykiety 100×150 mm | od 2 979 zł',",
    "ZQ521 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ521 (ZQ52-BUE) — mobilna drukarka etykiet 4\" do etykiet 100×150 mm, MIL-STD-810G, IP54. ZQ521 Zebra: Wi-Fi+BT, -20°C. ZQ52-BUE001E-00 od 2 979 zł netto.',",
    "seoDescription: 'Zebra ZQ521 — mobilna 4\" do etykiet 100×150 mm dla kurierów i logistyki. IP54, -20°C. ZQ52-BUE001E-00 od 2 979 zł netto.',",
    "ZQ521 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2979",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 2979",
    "ZQ521 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ521?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ521?',",
    "ZQ521 FAQ serwis"
)

# ============================================================
# ZQ610 Plus
# ============================================================
print("\n=== ZQ610 Plus ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ610 Plus — premium 2\" Wi-Fi 6',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ610 Plus — premium 2\" Wi-Fi 6 | od 3 256 zł',",
    "ZQ610 Plus seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ610 Plus (ZQ61-AUF) — mobilna drukarka etykiet Wi-Fi 6 premium 2\" (48 mm), BT 5.3, LCD, IP54. ZQ610 Plus Zebra: -20°C. ZQ61-AUFAE14-00 od 3 256 zł netto.',",
    "seoDescription: 'Zebra ZQ610 Plus — mobilna 2\" Wi-Fi 6 dla retail, HoReCa i serwisu. BT 5.3, LCD, IP54. ZQ61-AUFAE14-00 od 3 256 zł netto.',",
    "ZQ610 Plus seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 3256",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 3256",
    "ZQ610 Plus TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ610 Plus?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ610 Plus?',",
    "ZQ610 Plus FAQ serwis"
)

# ============================================================
# ZQ620 Plus
# ============================================================
print("\n=== ZQ620 Plus ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ620 Plus — 3\" linerless WiFi 6',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ620 Plus — 3\" linerless Wi-Fi 6 | od 3 621 zł',",
    "ZQ620 Plus seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ620 Plus (ZQ62-AUF) — mobilna drukarka etykiet 3\" linerless WiFi 6, BT 5.3, LCD, IP54. ZQ620 Plus Zebra: druk bez podkładu. ZQ62-AUFAE14-00 od 3 622 zł netto.',",
    "seoDescription: 'Zebra ZQ620 Plus — mobilna 3\" linerless Wi-Fi 6 dla logistyki i kurierów. BT 5.3, LCD, IP54. ZQ62-AUFAE14-00 od 3 621 zł netto.',",
    "ZQ620 Plus seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 3621",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 3621",
    "ZQ620 Plus TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ620 Plus?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ620 Plus?',",
    "ZQ620 Plus FAQ serwis"
)

# ============================================================
# ZQ630 Plus
# ============================================================
print("\n=== ZQ630 Plus ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ630 Plus — 4\" WiFi 6 magazyn',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ630 Plus — 4\" Wi-Fi 6 magazyn | od 4 257 zł',",
    "ZQ630 Plus seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ630 Plus (ZQ63-AUF) — mobilna drukarka etykiet 4\" WiFi 6 do magazynu, 100×150 mm, linerless, IP54. ZQ630 Plus Zebra: 6800 mAh. ZQ63-AUFAE14-00 od 4 257 zł netto.',",
    "seoDescription: 'Zebra ZQ630 Plus — mobilna 4\" Wi-Fi 6 do magazynów i logistyki. 100×150 mm, linerless, 6800 mAh. ZQ63-AUFAE14-00 od 4 257 zł netto.',",
    "ZQ630 Plus seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 4257",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 4257",
    "ZQ630 Plus TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ630 Plus?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ630 Plus?',",
    "ZQ630 Plus FAQ serwis"
)

# ============================================================
# ZQ310 Plus
# ============================================================
print("\n=== ZQ310 Plus ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ310 Plus — kompaktowa 2\" USB-C',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ310 Plus — kompaktowa 2\" USB-C | od 1 496 zł',",
    "ZQ310 Plus seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ310 Plus (ZQ31-A0E) — kompaktowa mobilna drukarka etykiet 2\" USB-C, 370 g, BT 5.0, IP54. ZQ310 Plus Zebra: ZPL. ZQ31-A0E04TE-00 od 1 496 zł netto.',",
    "seoDescription: 'Zebra ZQ310 Plus — kompaktowa mobilna 2\" dla retail i gastronomii. USB-C, BT 5.0, IP54, 370 g. ZQ31-A0E04TE-00 od 1 496 zł netto.',",
    "ZQ310 Plus seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1496",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1496",
    "ZQ310 Plus TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ310 Plus?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ310 Plus?',",
    "ZQ310 Plus FAQ serwis"
)

# ============================================================
# ZQ320 Plus
# ============================================================
print("\n=== ZQ320 Plus ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ320 Plus — 3\" outdoor USB-C',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ320 Plus — 3\" outdoor USB-C | od 1 712 zł',",
    "ZQ320 Plus seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ320 Plus (ZQ32-A0E) — mobilna drukarka etykiet 3\" outdoor, Wi-Fi, BT, USB-C, IP54, 430 g. ZQ320 Plus Zebra: paragon i etykieta. ZQ32-A0E04TE-00 od 1 713 zł netto.',",
    "seoDescription: 'Zebra ZQ320 Plus — mobilna 3\" outdoor Wi-Fi dla kurierów i gastronomii. USB-C, BT, IP54, 430 g. ZQ32-A0E04TE-00 od 1 712 zł netto.',",
    "ZQ320 Plus seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1712",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 1712",
    "ZQ320 Plus TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ320 Plus?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ320 Plus?',",
    "ZQ320 Plus FAQ serwis"
)

# ============================================================
# ZQ220 Plus
# ============================================================
print("\n=== ZQ220 Plus ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ220 Plus — budżetowa 3\" kurier',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ220 Plus — budżetowa 3\" kurier | od 576 zł',",
    "ZQ220 Plus seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ220 Plus (ZQ22-B16) — budżetowa mobilna drukarka etykiet do kuriera, 3\" (72 mm), IP54, BT 5.0, NFC, OLED. ZQ22-B16B1KE-00 od 576 zł netto.',",
    "seoDescription: 'Zebra ZQ220 Plus — najtańsza mobilna 3\" BT dla kurierów i małych firm. IP54, NFC, OLED. ZQ22-B16B1KE-00 od 576 zł netto.',",
    "ZQ220 Plus seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 576",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 576",
    "ZQ220 Plus TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ220 Plus?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ220 Plus?',",
    "ZQ220 Plus FAQ serwis"
)

# ============================================================
# ZQ210
# ============================================================
print("\n=== ZQ210 ===")
replace_one(
    "seoTitle: 'Mobilna drukarka Zebra ZQ210 — najlżejsza 2\" 265 g',",
    "seoTitle: 'Mobilna drukarka Zebra ZQ210 — najlżejsza 2\" 265 g | od 999 zł',",
    "ZQ210 seoTitle"
)
replace_one(
    "seoDescription: 'Zebra ZQ210 (ZQ21-A0E) — najlżejsza mobilna drukarka etykiet i paragonów 2\" (48 mm), tylko 265 g. ZQ210 Zebra: BT 4.1, NFC, OLED, IP43. ZQ21-A0E01KE-00 od 999 zł netto.',",
    "seoDescription: 'Zebra ZQ210 — najlżejsza mobilna 2\" dla HoReCa i retail. BT 4.1, NFC, OLED, IP43, 265 g. ZQ21-A0E01KE-00 od 999 zł netto.',",
    "ZQ210 seoDescription"
)
replace_one(
    "Specyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 999",
    TCO_MOBILE_LABEL + "\n\nSpecyfikacja zgodna z oficjalną kartą katalogową Zebra (źródło: zebra.com, luty 2026).`,\n    categoryId: 'drukarki-etykiet',\n    subcategoryIds: ['mobilne-drukarki-etykiet'],\n    manufacturerId: 'zebra',\n    priceFrom: 999",
    "ZQ210 TCO"
)
replace_one(
    "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ210?',",
    FAQ_SERWIS_MOBILE + "      {\n        question: 'Jakie są alternatywy dla Zebra ZQ210?',",
    "ZQ210 FAQ serwis"
)

# ============================================================
# WRITE FILE
# ============================================================
print(f"\n=== Writing file ===")
print(f"Original size: {original_len} chars")
print(f"New size:      {len(content)} chars")
print(f"Delta:         +{len(content) - original_len} chars")

if errors:
    print(f"\nWARNING: {len(errors)} replacements failed:")
    for e in errors:
        print(f"  - {e}")
    print("File NOT written to avoid corruption!")
else:
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    print("File written successfully!")

# ============================================================
# VERIFY
# ============================================================
print("\n=== Verification ===")
checks = [
    ("ZD421t seoTitle price", "od 1 648 zł"),
    ("ZD421d seoTitle price", "od 1 472 zł"),
    ("ZD621t seoTitle price", "od 2 264 zł"),
    ("ZD621d seoTitle price", "od 1 943 zł"),
    ("ZD411d seoTitle price", "od 1 237 zł"),
    ("ZD411t seoTitle price", "od 1 686 zł"),
    ("ZD220d seoTitle price", "od 649 zł"),
    ("ZD230d seoTitle price", "od 1 087 zł"),
    ("ZD220t seoTitle price", "od 639 zł"),
    ("ZD230t seoTitle price", "od 1 135 zł"),
    ("ZD510-HC seoTitle price", "od 2 674 zł"),
    ("ZT231 seoTitle price", "od 2 551 zł"),
    ("ZT111 seoTitle price", "od 2 081 zł"),
    ("ZT411 seoTitle price", "od 5 131 zł"),
    ("ZT421 seoTitle price", "od 9 416 zł"),
    ("ZT510 seoTitle price", "od 8 489 zł"),
    ("ZT610 seoTitle price", "od 10 431 zł"),
    ("ZT620 seoTitle price", "od 12 416 zł"),
    ("ZQ511 seoTitle price", "od 2 287 zł"),
    ("ZQ521 seoTitle price", "od 2 979 zł"),
    ("ZQ610 Plus seoTitle price", "od 3 256 zł"),
    ("ZQ620 Plus seoTitle price", "od 3 621 zł"),
    ("ZQ630 Plus seoTitle price", "od 4 257 zł"),
    ("ZQ310 Plus seoTitle price", "od 1 496 zł"),
    ("ZQ320 Plus seoTitle price", "od 1 712 zł"),
    ("ZQ220 Plus seoTitle price", "od 576 zł"),
    ("ZQ210 seoTitle price", "od 999 zł"),
    ("TCO desktop phrase", "Całkowity koszt posiadania (TCO) jest równie ważny"),
    ("TCO industrial phrase", "Całkowity koszt posiadania (TCO) jest kluczowy dla przemysłowych"),
    ("TCO mobile phrase", "Całkowity koszt posiadania (TCO) mobilnych drukarek etykiet"),
    ("FAQ serwis desktop phrase", "Gdzie serwisować drukarkę Zebra w Polsce?"),
    ("FAQ serwis industrial phrase", "Gdzie serwisować drukarki Zebra przemysłowe w Polsce?"),
    ("FAQ serwis mobile phrase", "Gdzie serwisować mobilne drukarki Zebra w Polsce?"),
]

all_ok = True
for name, phrase in checks:
    found = phrase in content
    if not found:
        all_ok = False
    print(f"  {'OK' if found else 'FAIL'}: {name}")

print(f"\nResult: {'ALL PASSED' if all_ok else 'SOME FAILED'}")
