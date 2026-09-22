import type { Prisma } from '@/generated/prisma/client'
import { prisma } from '@/lib/db'
import { adsConfigured, adsQuery } from '@/lib/googleAds'

/**
 * Dzienny obraz Google Ads: ile poszło, co z tego wyszło i ile z tego widać
 * w bazie sklepu. Jedno źródło dla panelu `/admin/analytics/ads` i dla
 * wieczornego maila, żeby obie powierzchnie nie liczyły tego samego inaczej.
 *
 * Dwie rzeczy, o które łatwo się potknąć przy Ads:
 *  1. Konto pracuje w strefie Europe/Warsaw, a serwer w UTC. Wszystkie daty
 *     bierzemy więc z `Intl` w strefie konta, nie z `toISOString()`.
 *  2. Konwersje domykają się z opóźnieniem. Dzisiejsze i wczorajsze liczby
 *     są niepełne z definicji, dlatego wnioski wyciągamy z okna 7 dni
 *     zakończonego wczoraj, a dzień bieżący pokazujemy wyłącznie jako koszt.
 */

/** Data w strefie konta Ads (Europe/Warsaw), `offset` dni wstecz. */
export function dataKonta(offset = 0): string {
  const d = new Date(Date.now() - offset * 86_400_000)
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw' }).format(d)
}

/** Godzina w strefie konta — mail musi powiedzieć, na kiedy są dane. */
export function godzinaKonta(): string {
  return new Intl.DateTimeFormat('pl-PL', { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit' }).format(new Date())
}

export interface DzienAds {
  data: string
  koszt: number
  klikniecia: number
  odslony: number
  konwersje: number
  wartosc: number
}

export interface KampaniaAds {
  id: string
  nazwa: string
  status: string
  kanal: string
  budzetDzienny: number
  koszt: number
  kosztPoprzednio: number
  klikniecia: number
  konwersje: number
  konwersjePoprzednio: number
  wartosc: number
  /** Udział wyświetleń utracony przez zbyt niski budżet (0..1). */
  utraconeBudzet?: number
  /**
   * Zmiana kwoty budżetu w oknie 7 dni: kwota sprzed pierwszej zmiany, obecna
   * i ile dni okna przypadło jeszcze na starą kwotę. Dzień zmiany liczy się
   * do starych, bo zmiana zrobiona wieczorem prawie go nie dotyka.
   */
  zmianaBudzetu?: { data: string; z: number; na: number; dniStarych: number }
}

export interface AkcjaKonwersji {
  nazwa: string
  konwersje: number
  wartosc: number
}

export interface WynikSklepu {
  zamowienia: number
  przychodNetto: number
  marzaNetto: number
  leady: number
  /** Wszystkie opłacone zamówienia w oknie, także bez gclid — miara pokrycia atrybucji. */
  zamowieniaOgolem: number
}

export interface PodsumowanieAds {
  /** Data, której dotyczy podsumowanie (dzień bieżący w strefie konta). */
  dzien: string
  dzis: DzienAds
  wczoraj: DzienAds
  /** Ten sam dzień tygodnia co wczoraj, tydzień wcześniej. */
  wczorajTydzienTemu: DzienAds
  okno7: DzienAds
  poprzednie7: DzienAds
  /** 30 dni do dzisiaj włącznie — do wykresu. */
  dni: DzienAds[]
  kampanie: KampaniaAds[]
  akcje: AkcjaKonwersji[]
  frazyBezKonwersji: { fraza: string; kampania: string; koszt: number; klikniecia: number }[]
  sklep7: WynikSklepu
  sklep30: WynikSklepu
  /** Suma budżetów dziennych kampanii aktywnych. */
  budzetDzienny: number
  uwagi: string[]
}

const mikro = (v?: string | number) => (v ? Number(v) / 1_000_000 : 0)
const lb = (v?: string | number) => (v ? Number(v) : 0)

function pustyDzien(data: string): DzienAds {
  return { data, koszt: 0, klikniecia: 0, odslony: 0, konwersje: 0, wartosc: 0 }
}

function suma(dni: DzienAds[], etykieta: string): DzienAds {
  return dni.reduce(
    (a, d) => ({
      data: etykieta,
      koszt: a.koszt + d.koszt,
      klikniecia: a.klikniecia + d.klikniecia,
      odslony: a.odslony + d.odslony,
      konwersje: a.konwersje + d.konwersje,
      wartosc: a.wartosc + d.wartosc,
    }),
    pustyDzien(etykieta),
  )
}

/** Koszt zakupu sztuki w groszach — ta sama reguła co przy wysyłce konwersji offline. */
function kosztSztuki(priceNetto: number, ingramPriceSnapshot: number | null): number {
  return ingramPriceSnapshot ?? Math.round(priceNetto * 0.8)
}

/** Zamówienia i leady przypisane do Ads (po gclid) w zadanym oknie dni. */
async function wynikSklepu(odDni: number): Promise<WynikSklepu> {
  const od = new Date(Date.now() - odDni * 86_400_000)
  const oplacone: Prisma.OrderWhereInput = {
    paidAt: { not: null, gte: od },
    status: { in: ['PAID', 'PROCESSING', 'SHIPPED', 'DELIVERED'] },
  }
  const [zamowienia, leady, ogolem] = await Promise.all([
    prisma.order.findMany({ where: { ...oplacone, gclid: { not: null } }, include: { items: true } }),
    prisma.lead.count({ where: { gclid: { not: null }, createdAt: { gte: od } } }),
    prisma.order.count({ where: oplacone }),
  ])

  let przychod = 0
  let marza = 0
  for (const o of zamowienia) {
    for (const it of o.items) {
      przychod += it.totalNetto
      marza += it.totalNetto - kosztSztuki(it.priceNetto, it.ingramPriceSnapshot) * it.quantity
    }
  }
  return {
    zamowienia: zamowienia.length,
    przychodNetto: przychod / 100,
    marzaNetto: marza / 100,
    leady,
    zamowieniaOgolem: ogolem,
  }
}

/** Reguły alertowe. Pusta lista = dzień bez zastrzeżeń. */
function zbudujUwagi(p: Omit<PodsumowanieAds, 'uwagi'>): string[] {
  const u: string[] = []
  const zl = (v: number) => `${v.toFixed(2).replace('.', ',')} zł`
  const l1 = (v: number) => v.toFixed(1).replace('.', ',')

  // 1. Dzień bieżący wyraźnie drożej niż zwykle — łapiemy jeszcze zanim się skończy.
  const sredniaDzienna = p.okno7.koszt / 7
  if (sredniaDzienna > 20 && p.dzis.koszt > 1.6 * sredniaDzienna) {
    u.push(
      `Dziś wydane ${zl(p.dzis.koszt)} przy średniej dziennej ${zl(sredniaDzienna)} z ostatnich 7 dni. Sprawdź, czy któraś kampania nie złapała drogiego ruchu.`,
    )
  }

  // Zmiana budżetu w oknie zmienia wymowę reguł 2 i 3: liczby z 7 dni opisują
  // wtedy w części starą kwotę. Bez tego dopisku reguła 3 zestawiała odsetek
  // zmierzony przy starym budżecie z nowym i podpowiadała zmianę, która już zaszła.
  const poZmianie = (k: KampaniaAds) => {
    const zb = k.zmianaBudzetu
    if (!zb) return ''
    return ` Budżet zmieniono ${zb.data.slice(8, 10)}.${zb.data.slice(5, 7)} z ${zl(zb.z)} na ${zl(zb.na)}/dzień; ${zb.dniStarych} z 7 dni okna to jeszcze stara kwota.`
  }

  // 2. Kampanie palące budżet bez efektu. Próg 150 zł, żeby nie alarmować o szumie.
  for (const k of p.kampanie) {
    if (k.koszt > 150 && k.konwersje === 0) {
      u.push(`Kampania „${k.nazwa}” wydała ${zl(k.koszt)} w 7 dni przy zerze konwersji.${poZmianie(k)}`)
    }
  }

  // 3. Kampanie, którym brakuje budżetu — tu dokładanie pieniędzy ma sens.
  for (const k of p.kampanie) {
    if ((k.utraconeBudzet ?? 0) > 0.15 && k.konwersje > 0) {
      const proc = `${(k.utraconeBudzet! * 100).toFixed(0)} %`
      u.push(
        k.zmianaBudzetu
          ? `Kampania „${k.nazwa}” straciła ${proc} wyświetleń przez budżet i ma ${l1(k.konwersje)} konwersji.${poZmianie(k)}`
          : `Kampania „${k.nazwa}” traci ${proc} wyświetleń przez budżet (${zl(k.budzetDzienny)}/dzień) i ma ${l1(k.konwersje)} konwersji. Budżet ją ogranicza.`,
      )
    }
  }

  // 4. Koszt rośnie, a konwersje nie nadążają.
  if (p.poprzednie7.koszt > 100 && p.okno7.koszt > p.poprzednie7.koszt * 1.3 && p.okno7.konwersje <= p.poprzednie7.konwersje) {
    u.push(
      `Koszt tygodnia wzrósł z ${zl(p.poprzednie7.koszt)} do ${zl(p.okno7.koszt)}, a konwersje stoją (${l1(p.poprzednie7.konwersje)} → ${l1(p.okno7.konwersje)}).`,
    )
  }

  // 5. Frazy bez konwersji zjadające realne pieniądze.
  const marnotrawstwo = p.frazyBezKonwersji.reduce((a, f) => a + f.koszt, 0)
  if (p.okno7.koszt > 0 && marnotrawstwo > 0.25 * p.okno7.koszt && marnotrawstwo > 100) {
    u.push(
      `${zl(marnotrawstwo)} z ${zl(p.okno7.koszt)} poszło na hasła bez ani jednej konwersji (${p.frazyBezKonwersji.length} haseł). Kandydaci do wykluczeń.`,
    )
  }

  // 6. Rozjazd między konwersjami raportowanymi przez Ads a bazą sklepu.
  //    Ads liczy też kliki w telefon i mail, więc pewna nadwyżka jest normalna —
  //    alarmujemy dopiero przy zerze realnych zamówień i leadów przy dużym koszcie.
  if (p.okno7.koszt > 500 && p.sklep7.zamowienia === 0 && p.sklep7.leady === 0) {
    u.push(
      `W 7 dni wydane ${zl(p.okno7.koszt)}, a w bazie ani jednego zamówienia i ani jednego leada z gclid. Sprawdź, czy tracker zapisuje gclid.`,
    )
  }

  return u
}

export async function podsumowanieAds(): Promise<PodsumowanieAds> {
  if (!adsConfigured()) throw new Error('Google Ads nie jest skonfigurowany')

  const dzis = dataKonta(0)
  const od30 = dataKonta(29)
  const okno7Od = dataKonta(7)
  const okno7Do = dataKonta(1)
  const poprz7Od = dataKonta(14)
  const poprz7Do = dataKonta(8)

  const [wierszeDni, kampanieTeraz, kampaniePrzed, wierszeAkcji, wierszeFraz, wierszeZmian, sklep7, sklep30] = await Promise.all([
    adsQuery(`
      SELECT segments.date, metrics.cost_micros, metrics.clicks, metrics.impressions,
             metrics.conversions, metrics.conversions_value
      FROM customer
      WHERE segments.date BETWEEN '${od30}' AND '${dzis}'
      ORDER BY segments.date`),
    adsQuery(`
      SELECT campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type,
             campaign_budget.amount_micros, campaign_budget.resource_name,
             metrics.cost_micros, metrics.clicks, metrics.conversions, metrics.conversions_value,
             metrics.search_budget_lost_impression_share
      FROM campaign
      WHERE segments.date BETWEEN '${okno7Od}' AND '${okno7Do}' AND campaign.status IN ('ENABLED','PAUSED')
      ORDER BY metrics.cost_micros DESC`),
    adsQuery(`
      SELECT campaign.id, metrics.cost_micros, metrics.conversions
      FROM campaign
      WHERE segments.date BETWEEN '${poprz7Od}' AND '${poprz7Do}' AND campaign.status IN ('ENABLED','PAUSED')`),
    // all_conversions, a nie conversions — inaczej akcje pomocnicze (te spoza
    // kolumny „Konwersje”) zniknęłyby z rozbicia, choć wciąż się zliczają.
    adsQuery(`
      SELECT segments.conversion_action_name, metrics.all_conversions, metrics.all_conversions_value
      FROM customer
      WHERE segments.date BETWEEN '${okno7Od}' AND '${okno7Do}'`),
    adsQuery(`
      SELECT search_term_view.search_term, campaign.name,
             metrics.cost_micros, metrics.clicks, metrics.conversions
      FROM search_term_view
      WHERE segments.date BETWEEN '${okno7Od}' AND '${okno7Do}'
      ORDER BY metrics.cost_micros DESC
      LIMIT 200`),
    // Zmiany kwot budżetów od początku okna 7 dni. change_event wymaga LIMIT,
    // sięga najwyżej 30 dni wstecz, a daty podaje w strefie konta. Górna
    // granica z godziną, bo sama data oznacza północ i ucina dzień bieżący.
    // To dodatek do reguł, więc błąd tego zapytania nie może zatrzymać maila.
    adsQuery(`
      SELECT change_event.change_date_time, change_event.change_resource_name,
             change_event.old_resource, change_event.new_resource
      FROM change_event
      WHERE change_event.change_date_time >= '${okno7Od}'
        AND change_event.change_date_time <= '${dzis} 23:59:59'
        AND change_event.change_resource_type = 'CAMPAIGN_BUDGET'
      ORDER BY change_event.change_date_time
      LIMIT 500`).catch((e) => {
      console.error('[Ads] historia zmian budżetów niedostępna:', e instanceof Error ? e.message.slice(0, 200) : e)
      return []
    }),
    wynikSklepu(7),
    wynikSklepu(30),
  ])

  // --- dni ---------------------------------------------------------------
  const wgDaty = new Map<string, DzienAds>()
  for (const r of wierszeDni) {
    const d = r.segments?.date
    if (!d) continue
    const cur = wgDaty.get(d) || pustyDzien(d)
    cur.koszt += mikro(r.metrics?.costMicros)
    cur.klikniecia += lb(r.metrics?.clicks)
    cur.odslony += lb(r.metrics?.impressions)
    cur.konwersje += lb(r.metrics?.conversions)
    cur.wartosc += lb(r.metrics?.conversionsValue)
    wgDaty.set(d, cur)
  }
  // Dni bez wydatku nie wracają z API — dopełniamy zerami, żeby wykres nie kłamał.
  const dni: DzienAds[] = []
  for (let i = 29; i >= 0; i--) {
    const d = dataKonta(i)
    dni.push(wgDaty.get(d) || pustyDzien(d))
  }

  const wOknie = (od: string, doo: string) => dni.filter((d) => d.data >= od && d.data <= doo)

  // --- zmiany budżetów ---------------------------------------------------
  // Zdarzenia idą rosnąco po czasie: „z” zostaje z pierwszej zmiany w oknie,
  // „na” i data z ostatniej. Zmiana innego pola budżetu (np. nazwy) nie niesie
  // kwoty i jest pomijana.
  const zmianyBudzetow = new Map<string, { data: string; z: number; na: number }>()
  for (const r of wierszeZmian) {
    const e = r.changeEvent
    const stara = e?.oldResource?.campaignBudget?.amountMicros
    const nowa = e?.newResource?.campaignBudget?.amountMicros
    if (!e?.changeResourceName || !e.changeDateTime || !stara || !nowa) continue
    const wczesniej = zmianyBudzetow.get(e.changeResourceName)
    zmianyBudzetow.set(e.changeResourceName, {
      data: e.changeDateTime.slice(0, 10),
      z: wczesniej ? wczesniej.z : mikro(stara),
      na: mikro(nowa),
    })
  }
  const dniOkna7 = wOknie(okno7Od, okno7Do)
  const zmianaBudzetu = (zasob?: string): KampaniaAds['zmianaBudzetu'] => {
    const zm = zasob ? zmianyBudzetow.get(zasob) : undefined
    // Podwyżka i powrót do tej samej kwoty w jednym oknie to brak zmiany.
    if (!zm || zm.z === zm.na) return undefined
    return { ...zm, dniStarych: dniOkna7.filter((d) => d.data <= zm.data).length }
  }

  // --- kampanie ----------------------------------------------------------
  const przedWgId = new Map<string, { koszt: number; konwersje: number }>()
  for (const r of kampaniePrzed) {
    const id = r.campaign?.id || ''
    const cur = przedWgId.get(id) || { koszt: 0, konwersje: 0 }
    cur.koszt += mikro(r.metrics?.costMicros)
    cur.konwersje += lb(r.metrics?.conversions)
    przedWgId.set(id, cur)
  }

  const kampanie: KampaniaAds[] = kampanieTeraz.map((r) => {
    const id = r.campaign?.id || ''
    const przed = przedWgId.get(id)
    return {
      id,
      nazwa: r.campaign?.name || '(bez nazwy)',
      status: r.campaign?.status || '',
      kanal: r.campaign?.advertisingChannelType || '',
      budzetDzienny: mikro(r.campaignBudget?.amountMicros),
      koszt: mikro(r.metrics?.costMicros),
      kosztPoprzednio: przed?.koszt ?? 0,
      klikniecia: lb(r.metrics?.clicks),
      konwersje: lb(r.metrics?.conversions),
      konwersjePoprzednio: przed?.konwersje ?? 0,
      wartosc: lb(r.metrics?.conversionsValue),
      utraconeBudzet: r.metrics?.searchBudgetLostImpressionShare as number | undefined,
      zmianaBudzetu: zmianaBudzetu(r.campaignBudget?.resourceName),
    }
  })

  // --- akcje konwersji ---------------------------------------------------
  const wgAkcji = new Map<string, AkcjaKonwersji>()
  for (const r of wierszeAkcji) {
    const nazwa = r.segments?.conversionActionName
    if (!nazwa) continue
    const cur = wgAkcji.get(nazwa) || { nazwa, konwersje: 0, wartosc: 0 }
    cur.konwersje += lb(r.metrics?.allConversions)
    cur.wartosc += lb(r.metrics?.allConversionsValue)
    wgAkcji.set(nazwa, cur)
  }
  const akcje = Array.from(wgAkcji.values()).sort((a, b) => b.konwersje - a.konwersje)

  const frazyBezKonwersji = wierszeFraz
    .filter((r) => lb(r.metrics?.conversions) === 0 && mikro(r.metrics?.costMicros) > 0)
    .slice(0, 20)
    .map((r) => ({
      fraza: r.searchTermView?.searchTerm || '',
      kampania: r.campaign?.name || '',
      koszt: mikro(r.metrics?.costMicros),
      klikniecia: lb(r.metrics?.clicks),
    }))

  const bez = {
    dzien: dzis,
    dzis: wgDaty.get(dzis) || pustyDzien(dzis),
    wczoraj: wgDaty.get(dataKonta(1)) || pustyDzien(dataKonta(1)),
    wczorajTydzienTemu: wgDaty.get(dataKonta(8)) || pustyDzien(dataKonta(8)),
    okno7: suma(wOknie(okno7Od, okno7Do), `${okno7Od}…${okno7Do}`),
    poprzednie7: suma(wOknie(poprz7Od, poprz7Do), `${poprz7Od}…${poprz7Do}`),
    dni,
    kampanie,
    akcje,
    frazyBezKonwersji,
    sklep7,
    sklep30,
    budzetDzienny: kampanie.filter((k) => k.status === 'ENABLED').reduce((a, k) => a + k.budzetDzienny, 0),
  }

  return { ...bez, uwagi: zbudujUwagi(bez) }
}
