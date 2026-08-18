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

export function selectPurchasePrice(prices: SourcePrices): PriceSelection {
  const entries = (Object.entries(prices) as [PriceSource, number | undefined][])
    .filter((e): e is [PriceSource, number] => e[1] != null && e[1] > 0)

  const rejected: PriceSelection['rejected'] = []
  if (entries.length === 0) return { rejected, ingramSuspect: false }

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
