/**
 * SERP Collector — Serper.dev API
 * Faza 2: Śledzi pozycje TAKMA i konkurentów dla fraz produktowych i generycznych
 * API: https://google.serper.dev/search
 * Free tier: 2500 queries/miesiąc → ~75 fraz × 8 runs/msc = ~600/msc
 * Env var: SERPER_API_KEY
 */

import type { SerpKeywordResult, SerpData } from '../types'

const SERPER_API = 'https://google.serper.dev/search'

// Konkurenci do śledzenia
const COMPETITORS = [
  'aspekt.net.pl',
  'bcmarket.pl',
  'zebrasklep.pl',
  'strefadrukarek.pl',
  'netselekt.pl',
]

// Śledzone frazy z grupami
// Budget: Serper free tier = 2500 queries/msc → ~312 fraz × 8 runs = 2496
// Każdy produkt: 3-6 wariantów frazy (model, skaner/drukarka + marka, czytnik + marka, cena)
const TRACKED_KEYWORDS: { keyword: string; group: string }[] = [
  // =====================================================
  // BRAND (4)
  // =====================================================
  { keyword: 'takma drukarki', group: 'brand' },
  { keyword: 'takma terminale', group: 'brand' },
  { keyword: 'takma skanery', group: 'brand' },
  { keyword: 'takma.com.pl', group: 'brand' },

  // =====================================================
  // DRUKARKI BIURKOWE (33)
  // 11 modeli × 3 warianty: "drukarka etykiet zebra X", "zebra X", "zebra X cena"
  // =====================================================
  { keyword: 'drukarka etykiet zebra zd220t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd220t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd220t cena', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd220d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd220d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd220d cena', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd230t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd230t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd230d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd230d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd411t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd411t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd411d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd411d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd421t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd421t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd421t cena', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd421d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd421d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd421d cena', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd621t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd621t', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd621t cena', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd621d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd621d', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd621d cena', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd510', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd510', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd220', group: 'drukarki-biurkowe' },
  { keyword: 'zebra zd220', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka kodów kreskowych zebra', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet biurkowa', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet biurkowa zebra', group: 'drukarki-biurkowe' },

  // =====================================================
  // DRUKARKI PRZEMYSŁOWE (24)
  // 7 modeli × 3 warianty + 3 generyczne
  // =====================================================
  { keyword: 'drukarka etykiet zebra zt111', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt111', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt111 cena', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt231', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt231', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt231 cena', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt411', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt411', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt411 cena', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt421', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt421', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt421 cena', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt510', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt510', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt610', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt610', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt610 cena', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt620', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt620', group: 'drukarki-przemyslowe' },
  { keyword: 'zebra zt620 cena', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet przemysłowa zebra', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka przemysłowa zebra', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarki etykiet przemysłowe', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet do magazynu', group: 'drukarki-przemyslowe' },

  // =====================================================
  // DRUKARKI MOBILNE (30)
  // 9 modeli × 3 warianty + 3 generyczne
  // =====================================================
  { keyword: 'drukarka mobilna zebra zq210', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq210', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq220', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq220 plus', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq220 plus cena', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq310', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq310 plus', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq320', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq320 plus', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq511', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq511', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq511 cena', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq521', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq521', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq521 cena', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq610', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq610 plus', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq610 plus cena', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq620', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq620 plus', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq620 plus cena', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq630', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq630 plus', group: 'drukarki-mobilne' },
  { keyword: 'zebra zq630 plus cena', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna etykiet', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra', group: 'drukarki-mobilne' },
  { keyword: 'drukarka przenośna etykiet', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna paragonów', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna bluetooth', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna do kuriera', group: 'drukarki-mobilne' },

  // =====================================================
  // SKANERY ZEBRA PRZEWODOWE (60)
  // Każdy model: "skaner zebra X", "czytnik kodów kreskowych zebra X", "zebra X", "zebra X cena"
  // =====================================================
  // DS2208
  { keyword: 'skaner zebra ds2208', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds2208', group: 'skanery' },
  { keyword: 'zebra ds2208', group: 'skanery' },
  { keyword: 'zebra ds2208 cena', group: 'skanery' },
  // DS4608
  { keyword: 'skaner zebra ds4608', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds4608', group: 'skanery' },
  { keyword: 'zebra ds4608', group: 'skanery' },
  { keyword: 'zebra ds4608 cena', group: 'skanery' },
  // DS8208
  { keyword: 'skaner zebra ds8208', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds8208', group: 'skanery' },
  { keyword: 'zebra ds8208', group: 'skanery' },
  { keyword: 'zebra ds8208 cena', group: 'skanery' },
  // DS8288
  { keyword: 'skaner zebra ds8288', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds8288', group: 'skanery' },
  { keyword: 'zebra ds8288', group: 'skanery' },
  { keyword: 'zebra ds8288 cena', group: 'skanery' },
  { keyword: 'skaner kodów kreskowych ds8288', group: 'skanery' },
  // DS8178
  { keyword: 'skaner zebra ds8178', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds8178', group: 'skanery' },
  { keyword: 'zebra ds8178', group: 'skanery' },
  { keyword: 'zebra ds8178 cena', group: 'skanery' },
  // DS9908
  { keyword: 'skaner zebra ds9908', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds9908', group: 'skanery' },
  { keyword: 'zebra ds9908', group: 'skanery' },
  // DS9308
  { keyword: 'skaner zebra ds9308', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds9308', group: 'skanery' },
  { keyword: 'zebra ds9308', group: 'skanery' },
  // DS2278
  { keyword: 'skaner zebra ds2278', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds2278', group: 'skanery' },
  { keyword: 'zebra ds2278', group: 'skanery' },
  // LI2208
  { keyword: 'skaner zebra li2208', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra li2208', group: 'skanery' },
  { keyword: 'zebra li2208', group: 'skanery' },
  { keyword: 'zebra li2208 cena', group: 'skanery' },
  // DS3608 (4 warianty: XR, SR, HD, HP)
  { keyword: 'skaner zebra ds3608', group: 'skanery' },
  { keyword: 'zebra ds3608', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds3608', group: 'skanery' },
  { keyword: 'zebra ds3608 cena', group: 'skanery' },
  // LI3608 (SR, ER)
  { keyword: 'skaner zebra li3608', group: 'skanery' },
  { keyword: 'zebra li3608', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra li3608', group: 'skanery' },
  { keyword: 'zebra li3608 cena', group: 'skanery' },
  // DS3678 (SR, XR, HD, HP)
  { keyword: 'skaner zebra ds3678', group: 'skanery' },
  { keyword: 'zebra ds3678', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds3678', group: 'skanery' },
  { keyword: 'zebra ds3678 cena', group: 'skanery' },
  { keyword: 'skaner bezprzewodowy zebra ds3678', group: 'skanery' },
  // DS4678
  { keyword: 'skaner zebra ds4678', group: 'skanery' },
  { keyword: 'zebra ds4678', group: 'skanery' },
  { keyword: 'czytnik kodów kreskowych zebra ds4678', group: 'skanery' },
  { keyword: 'zebra ds4678 dpe', group: 'skanery' },

  // =====================================================
  // SKANERY NEWLAND (18)
  // =====================================================
  // HR23 Dorada
  { keyword: 'newland hr23 dorada', group: 'skanery-newland' },
  { keyword: 'skaner newland hr23', group: 'skanery-newland' },
  { keyword: 'czytnik kodów kreskowych newland hr23', group: 'skanery-newland' },
  { keyword: 'newland hr23 cena', group: 'skanery-newland' },
  { keyword: 'skaner kodów kreskowych newland', group: 'skanery-newland' },
  // HR33 Marlin
  { keyword: 'newland hr33 marlin', group: 'skanery-newland' },
  { keyword: 'skaner newland hr33', group: 'skanery-newland' },
  { keyword: 'czytnik kodów kreskowych newland hr33', group: 'skanery-newland' },
  { keyword: 'newland hr33 cena', group: 'skanery-newland' },
  { keyword: 'newland hr33 marlin corded', group: 'skanery-newland' },
  // HR11 Aringa
  { keyword: 'newland hr11 aringa', group: 'skanery-newland' },
  { keyword: 'skaner newland hr11', group: 'skanery-newland' },
  { keyword: 'czytnik kodów kreskowych newland hr11', group: 'skanery-newland' },
  { keyword: 'newland hr11 cena', group: 'skanery-newland' },
  { keyword: 'czytnik kodów 1d newland', group: 'skanery-newland' },
  // HR15 Wahoo
  { keyword: 'newland hr15 wahoo', group: 'skanery-newland' },
  { keyword: 'skaner newland hr15', group: 'skanery-newland' },
  { keyword: 'czytnik kodów kreskowych newland hr15', group: 'skanery-newland' },
  { keyword: 'newland hr15 cena', group: 'skanery-newland' },
  { keyword: 'newland hr1550', group: 'skanery-newland' },
  { keyword: 'czytnik kodów 1d pdf417', group: 'skanery-newland' },
  // NVH300 Angler DP (DPM)
  { keyword: 'newland nvh300', group: 'skanery-newland' },
  { keyword: 'skaner dpm newland nvh300', group: 'skanery-newland' },
  { keyword: 'czytnik dpm newland', group: 'skanery-newland' },
  { keyword: 'newland nvh300 cena', group: 'skanery-newland' },
  { keyword: 'skaner dpm', group: 'skanery-newland' },
  { keyword: 'czytnik kodów dpm przemysłowy', group: 'skanery-newland' },
  { keyword: 'skaner kodów na metalu', group: 'skanery-newland' },
  { keyword: 'tani skaner dpm', group: 'skanery-newland' },
  // HR23 Dorada Bluetooth
  { keyword: 'newland hr23 bluetooth', group: 'skanery-newland' },
  { keyword: 'skaner bezprzewodowy newland hr23', group: 'skanery-newland' },
  { keyword: 'czytnik kodów kreskowych bezprzewodowy newland', group: 'skanery-newland' },
  { keyword: 'newland hr23 bluetooth cena', group: 'skanery-newland' },
  { keyword: 'skaner bezprzewodowy bluetooth 2d', group: 'skanery-newland' },
  // HR33 Marlin Bluetooth
  { keyword: 'newland hr33 bluetooth', group: 'skanery-newland' },
  { keyword: 'skaner bezprzewodowy newland hr33', group: 'skanery-newland' },
  { keyword: 'newland hr33 marlin bluetooth', group: 'skanery-newland' },
  { keyword: 'newland hr33 bluetooth cena', group: 'skanery-newland' },
  { keyword: 'skaner bezprzewodowy megapikselowy bluetooth', group: 'skanery-newland' },
  // Generyczne Newland skanery
  { keyword: 'skaner newland', group: 'skanery-newland' },
  { keyword: 'czytnik kodów kreskowych newland', group: 'skanery-newland' },
  { keyword: 'newland skaner cena', group: 'skanery-newland' },

  // =====================================================
  // TERMINALE ZEBRA (42)
  // 14 modeli × 3 warianty
  // =====================================================
  { keyword: 'terminal mobilny zebra tc22', group: 'terminale' },
  { keyword: 'zebra tc22', group: 'terminale' },
  { keyword: 'zebra tc22 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc27', group: 'terminale' },
  { keyword: 'zebra tc27', group: 'terminale' },
  { keyword: 'zebra tc27 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc53', group: 'terminale' },
  { keyword: 'zebra tc53', group: 'terminale' },
  { keyword: 'zebra tc53 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc53e', group: 'terminale' },
  { keyword: 'zebra tc53e', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc58', group: 'terminale' },
  { keyword: 'zebra tc58', group: 'terminale' },
  { keyword: 'zebra tc58 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc58e', group: 'terminale' },
  { keyword: 'zebra tc58e', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc501', group: 'terminale' },
  { keyword: 'zebra tc501', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc701', group: 'terminale' },
  { keyword: 'zebra tc701', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc73', group: 'terminale' },
  { keyword: 'zebra tc73', group: 'terminale' },
  { keyword: 'zebra tc73 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc78', group: 'terminale' },
  { keyword: 'zebra tc78', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc2200', group: 'terminale' },
  { keyword: 'zebra mc2200', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc2700', group: 'terminale' },
  { keyword: 'zebra mc2700', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc3300x', group: 'terminale' },
  { keyword: 'zebra mc3300x', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc3400', group: 'terminale' },
  { keyword: 'zebra mc3400', group: 'terminale' },
  { keyword: 'zebra mc3400 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc3450', group: 'terminale' },
  { keyword: 'zebra mc3450', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc9400', group: 'terminale' },
  { keyword: 'zebra mc9400', group: 'terminale' },
  { keyword: 'zebra mc9400 cena', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc9450', group: 'terminale' },
  { keyword: 'zebra mc9450', group: 'terminale' },
  { keyword: 'terminal mobilny zebra em45', group: 'terminale' },

  // =====================================================
  // TERMINALE NEWLAND (15)
  // =====================================================
  { keyword: 'newland n7 cachalot pro ii', group: 'terminale-newland' },
  { keyword: 'terminal newland n7', group: 'terminale-newland' },
  { keyword: 'newland n7', group: 'terminale-newland' },
  { keyword: 'newland n7 cachalot', group: 'terminale-newland' },
  { keyword: 'newland n7 cena', group: 'terminale-newland' },
  { keyword: 'newland mt93 megattera', group: 'terminale-newland' },
  { keyword: 'terminal newland mt93', group: 'terminale-newland' },
  { keyword: 'newland mt93', group: 'terminale-newland' },
  { keyword: 'newland mt93 cena', group: 'terminale-newland' },
  { keyword: 'newland mt95 kambur pro ii', group: 'terminale-newland' },
  { keyword: 'terminal newland mt95', group: 'terminale-newland' },
  { keyword: 'newland mt95', group: 'terminale-newland' },
  { keyword: 'newland mt95 cena', group: 'terminale-newland' },
  { keyword: 'terminal mobilny newland', group: 'terminale-newland' },
  { keyword: 'newland terminal cena', group: 'terminale-newland' },

  // =====================================================
  // TERMINALE DATALOGIC (12)
  // =====================================================
  { keyword: 'terminal datalogic memor', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor 11', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor 12', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor 17', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor 30', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor 35', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor k', group: 'terminale-datalogic' },
  { keyword: 'datalogic skorpio x5', group: 'terminale-datalogic' },
  { keyword: 'terminal mobilny datalogic', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor cena', group: 'terminale-datalogic' },
  { keyword: 'datalogic skorpio x5 cena', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor k cena', group: 'terminale-datalogic' },

  // =====================================================
  // DRUKARKI KART (9)
  // =====================================================
  { keyword: 'drukarka kart zebra zc100', group: 'drukarki-kart' },
  { keyword: 'zebra zc100', group: 'drukarki-kart' },
  { keyword: 'zebra zc100 cena', group: 'drukarki-kart' },
  { keyword: 'drukarka kart zebra zc300', group: 'drukarki-kart' },
  { keyword: 'zebra zc300', group: 'drukarki-kart' },
  { keyword: 'zebra zc300 cena', group: 'drukarki-kart' },
  { keyword: 'drukarka kart zebra zc350', group: 'drukarki-kart' },
  { keyword: 'zebra zc350', group: 'drukarki-kart' },
  { keyword: 'drukarka kart plastikowych', group: 'drukarki-kart' },

  // =====================================================
  // TABLETY (15)
  // =====================================================
  { keyword: 'tablet zebra et40', group: 'tablety' },
  { keyword: 'zebra et40', group: 'tablety' },
  { keyword: 'tablet zebra et45', group: 'tablety' },
  { keyword: 'zebra et45', group: 'tablety' },
  { keyword: 'tablet zebra et60', group: 'tablety' },
  { keyword: 'zebra et60', group: 'tablety' },
  { keyword: 'tablet zebra et65', group: 'tablety' },
  { keyword: 'zebra et65', group: 'tablety' },
  { keyword: 'tablet zebra et401', group: 'tablety' },
  { keyword: 'zebra et401', group: 'tablety' },
  { keyword: 'tablet zebra et80', group: 'tablety' },
  { keyword: 'zebra et80', group: 'tablety' },
  { keyword: 'tablet przemysłowy zebra', group: 'tablety' },
  { keyword: 'tablet przemysłowy', group: 'tablety' },
  { keyword: 'tablet rugged android', group: 'tablety' },

  // =====================================================
  // GENERYCZNE (15)
  // =====================================================
  { keyword: 'drukarka etykiet', group: 'generyczne' },
  { keyword: 'drukarka etykiet cena', group: 'generyczne' },
  { keyword: 'drukarka kodów kreskowych', group: 'generyczne' },
  { keyword: 'drukarka etykiet zebra', group: 'generyczne' },
  { keyword: 'drukarka etykiet zebra cena', group: 'generyczne' },
  { keyword: 'skanery kodów kreskowych', group: 'generyczne' },
  { keyword: 'skaner kodów kreskowych', group: 'generyczne' },
  { keyword: 'czytnik kodów kreskowych', group: 'generyczne' },
  { keyword: 'skaner kodów kreskowych cena', group: 'generyczne' },
  { keyword: 'czytnik kodów kreskowych cena', group: 'generyczne' },
  { keyword: 'terminal mobilny', group: 'generyczne' },
  { keyword: 'terminal mobilny cena', group: 'generyczne' },
  { keyword: 'kolektor danych', group: 'generyczne' },
  { keyword: 'drukarka mobilna etykiet cena', group: 'generyczne' },
  { keyword: 'drukarka kart plastikowych cena', group: 'generyczne' },

  // =====================================================
  // LONG-TAIL / PORADNIKI (15)
  // =====================================================
  { keyword: 'drukarka termiczna vs termotransferowa', group: 'long-tail' },
  { keyword: 'jak wybrać drukarkę etykiet', group: 'long-tail' },
  { keyword: 'drukarka etykiet do apteki', group: 'long-tail' },
  { keyword: 'jak wybrać terminal mobilny', group: 'long-tail' },
  { keyword: 'terminal mobilny do magazynu', group: 'long-tail' },
  { keyword: 'skaner kodów kreskowych do magazynu', group: 'long-tail' },
  { keyword: 'skaner kodów kreskowych bezprzewodowy', group: 'long-tail' },
  { keyword: 'czytnik kodów kreskowych do apteki', group: 'long-tail' },
  { keyword: 'czytnik kodów kreskowych usb', group: 'long-tail' },
  { keyword: 'newland vs zebra terminal', group: 'long-tail' },
  { keyword: 'newland vs zebra skaner', group: 'long-tail' },
  { keyword: 'top terminale mobilne 2026', group: 'long-tail' },
  { keyword: 'najlepszy skaner kodów kreskowych', group: 'long-tail' },
  { keyword: 'najlepsza drukarka etykiet', group: 'long-tail' },
  { keyword: 'drukarka etykiet ranking 2026', group: 'long-tail' },
]

// ---------------------------------------------------------------------------
// Serper.dev API — 1 call = top 30 organicznych wyników
// ---------------------------------------------------------------------------

interface SerperOrganicResult {
  title: string
  link: string
  snippet: string
  position: number
}

interface SerperResponse {
  organic?: SerperOrganicResult[]
  knowledgeGraph?: {
    title?: string
    type?: string
  }
}

async function querySerper(
  apiKey: string,
  query: string,
): Promise<SerperOrganicResult[]> {
  const response = await fetch(SERPER_API, {
    method: 'POST',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: query,
      gl: 'pl',
      hl: 'pl',
      num: 30,
    }),
  })

  if (!response.ok) {
    if (response.status === 429) {
      console.warn(`[SERP] Rate limit for "${query}"`)
      return []
    }
    const text = await response.text()
    throw new Error(`Serper API ${response.status}: ${text}`)
  }

  const data: SerperResponse = await response.json()
  return data.organic || []
}

// ---------------------------------------------------------------------------
// Znalezienie pozycji domeny w wynikach
// ---------------------------------------------------------------------------

function findPosition(results: SerperOrganicResult[], domain: string): number | null {
  for (const result of results) {
    try {
      const url = new URL(result.link)
      if (url.hostname === domain || url.hostname === `www.${domain}` || url.hostname.endsWith(`.${domain}`)) {
        return result.position
      }
    } catch {
      // invalid URL, skip
    }
  }
  return null
}

// ---------------------------------------------------------------------------
// Collect SERP positions for all keywords
// ---------------------------------------------------------------------------

export async function collectSERP(): Promise<SerpData> {
  const apiKey = process.env.SERPER_API_KEY

  if (!apiKey) {
    throw new Error('Brak SERPER_API_KEY')
  }

  console.log(`[SERP] Start — ${TRACKED_KEYWORDS.length} fraz (Serper.dev)`)

  const results: SerpKeywordResult[] = []

  for (const { keyword, group } of TRACKED_KEYWORDS) {
    try {
      const organic = await querySerper(apiKey, keyword)

      // Pozycja TAKMA
      const takmaPosition = findPosition(organic, 'takma.com.pl')

      // Pozycje konkurentów
      const competitorPositions: Record<string, number | null> = {}
      for (const competitor of COMPETITORS) {
        competitorPositions[competitor] = findPosition(organic, competitor)
      }

      // Rich snippet: sprawdź czy w top 10 jest TAKMA
      const hasRichSnippet = takmaPosition !== null && takmaPosition <= 10

      results.push({
        keyword,
        keywordGroup: group,
        takmaPosition,
        competitorPositions,
        hasRichSnippet,
      })

      console.log(`[SERP] "${keyword}" → TAKMA: ${takmaPosition ?? 'brak w top 30'}`)
    } catch (err) {
      console.error(`[SERP] Błąd dla "${keyword}":`, err)
      results.push({
        keyword,
        keywordGroup: group,
        takmaPosition: null,
        competitorPositions: Object.fromEntries(COMPETITORS.map(c => [c, null])),
        hasRichSnippet: false,
      })
    }

    // Throttle: 100ms między zapytaniami
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log(`[SERP] Zebrano ${results.length} fraz, TAKMA w top 30: ${results.filter(r => r.takmaPosition !== null).length}`)

  return {
    results,
    collectedAt: new Date().toISOString(),
  }
}
