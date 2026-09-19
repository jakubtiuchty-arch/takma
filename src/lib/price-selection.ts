/**
 * Wybór ceny zakupu spośród dystrybutorów — z bezpiecznikiem działającym W OBIE STRONY.
 *
 * Historia: pierwotny bezpiecznik zakładał, że Ingram ma zawsze poprawną cenę
 * „za sztukę", i odrzucał źródła poniżej połowy jego ceny (to chroni przed błędem
 * dzielenia pakietowego, przez który taśmy szły poniżej kosztu — fix 7efd8bb).
 * Założenie okazało się jednostronne: gdy to Ingram poda cenę śmieciową, reguła
 * wyrzuca poprawne, tańsze źródło i zostaje absurd. Przykład z 18.08.2026:
 * tablet ET401EA-3V101F2P-A6 miał u Ingrama 164 922,59 zł, a w Jarltechu
 * 547,22 EUR — sklep pokazywał 181 414,85 zł, przy bliźniaczych wariantach po ~3 000 zł.
 *
 * Reguła: jeżeli Ingram jest ODSTAJĄCY w górę względem innego dystrybutora
 * (≥ OUTLIER_FACTOR×), to błąd jest po stronie Ingrama — wypada z zestawienia.
 * W pozostałych przypadkach obowiązuje dotychczasowa podłoga (połowa ceny Ingrama).
 */

export type PriceSource = 'ingram' | 'bluestar' | 'jarltech'

export interface SourcePrices {
  /** wszystkie w PLN, już po przeliczeniu waluty i korekcie pakietowej */
  ingram?: number
  bluestar?: number
  jarltech?: number
}

export interface PriceSelection {
  /** najniższa wiarygodna cena zakupu w PLN */
  best?: number
  source?: PriceSource
  /** źródła pominięte wraz z powodem — do logów i alertów */
  rejected: { source: PriceSource; price: number; reason: string }[]
  /** true, gdy cena Ingrama została uznana za błędną */
  ingramSuspect: boolean
}

/** Ile razy Ingram musi przebić inne źródło, żeby uznać go za błąd, a nie za rynek.
 *  Realne różnice między dystrybutorami mieszczą się w kilkudziesięciu procentach. */
const OUTLIER_FACTOR = 3

/**
 * BlueStar `unitPrice` bywa ceną PAKIETU (etykiety Zebra: karton 4 rolki, PN 3011713),
 * ale bywa też ceną ZA SZTUKĘ, a `multipleQty` jest wtedy tylko wielokrotnością
 * zamówienia (nośniki Epson ColorWorks: 7,35 EUR/rolkę, multipleQty 18 → po podzieleniu
 * 1,78 zł za rolkę wartą 32 zł; 19.09.2026). Gdy mamy cenę za sztukę z innego źródła
 * (Jarltech liczy zawsze per sztuka, Ingram też), bierzemy tę interpretację, która leży
 * bliżej niej. Bez odniesienia zostaje dotychczasowe dzielenie.
 */
export function resolveBlueStarUnitPrice(
  rawPLN: number,
  multipleQty: number | undefined,
  referencePLN?: number,
  fallbackDivisor = 1,
): { price: number; divided: boolean } {
  const divisor = multipleQty && multipleQty > 1 ? multipleQty : fallbackDivisor
  const divided = Math.round((rawPLN / divisor) * 100) / 100
  const raw = Math.round(rawPLN * 100) / 100
  if (divisor === 1 || !referencePLN || referencePLN <= 0) return { price: divided, divided: divisor !== 1 }
  const dist = (x: number) => Math.abs(Math.log(x / referencePLN))
  return dist(raw) < dist(divided) ? { price: raw, divided: false } : { price: divided, divided: true }
}

/** Ile razy źródła muszą się rozjechać, żeby rozstrzygać ceną katalogową zamiast brać minimum. */
const DISAGREEMENT_FACTOR = 3

export function selectPurchasePrice(prices: SourcePrices, catalogAnchorPLN?: number): PriceSelection {
  const entries = (Object.entries(prices) as [PriceSource, number | undefined][])
    .filter((e): e is [PriceSource, number] => e[1] != null && e[1] > 0)

  const rejected: PriceSelection['rejected'] = []
  if (entries.length === 0) return { rejected, ingramSuspect: false }

  // 0) Źródła rozjechane ≥ 3× i znana cena katalogowa → wygrywa źródło najbliższe
  //    katalogowi (w skali logarytmicznej). Minimum w takiej sytuacji to prawie zawsze
  //    błąd jednostki (pakiet vs sztuka, per 1000, zła waluta), nie okazja.
  if (entries.length >= 2 && catalogAnchorPLN && catalogAnchorPLN > 0) {
    const values = entries.map(([, v]) => v)
    const spread = Math.max(...values) / Math.min(...values)
    if (spread >= DISAGREEMENT_FACTOR) {
      const dist = (x: number) => Math.abs(Math.log(x / catalogAnchorPLN))
      const [source, best] = entries.reduce((a, b) => (dist(b[1]) < dist(a[1]) ? b : a))
      for (const [src, price] of entries) {
        if (src !== source) rejected.push({
          source: src,
          price,
          reason: `źródła rozjechane ${spread.toFixed(1)}×; wybrano ${source} (${best.toFixed(2)} zł) jako najbliższe cenie katalogowej ${catalogAnchorPLN.toFixed(2)} zł`,
        })
      }
      return { best, source, rejected, ingramSuspect: source !== 'ingram' && !!prices.ingram }
    }
  }

  const ingram = prices.ingram && prices.ingram > 0 ? prices.ingram : undefined
  const others = entries.filter(([src]) => src !== 'ingram')

  // 1) Ingram odstający w górę → to on jest błędem
  if (ingram && others.length > 0) {
    const cheapestOther = Math.min(...others.map(([, p]) => p))
    if (ingram / cheapestOther >= OUTLIER_FACTOR) {
      rejected.push({
        source: 'ingram',
        price: ingram,
        reason: `cena ${ingram.toFixed(2)} zł jest ${(ingram / cheapestOther).toFixed(1)}× wyższa od najtańszego dystrybutora (${cheapestOther.toFixed(2)} zł) — traktowana jako błędna`,
      })
      const [source, best] = others.reduce((a, b) => (b[1] < a[1] ? b : a))
      return { best, source, rejected, ingramSuspect: true }
    }
  }

  // 2) Dotychczasowa podłoga: odrzuć źródła rażąco poniżej Ingrama (błąd pakietowy)
  const floor = ingram ? ingram * 0.5 : 0
  const kept = entries.filter(([src, p]) => {
    if (floor > 0 && p < floor && src !== 'ingram') {
      rejected.push({
        source: src,
        price: p,
        reason: `cena ${p.toFixed(2)} zł poniżej połowy ceny Ingrama (${ingram!.toFixed(2)} zł) — prawdopodobny błąd dzielenia pakietowego`,
      })
      return false
    }
    return true
  })

  const pool = kept.length > 0 ? kept : entries
  const [source, best] = pool.reduce((a, b) => (b[1] < a[1] ? b : a))
  return { best, source, rejected, ingramSuspect: false }
}
