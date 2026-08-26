import { prisma } from '@/lib/db'
import { OrderStatus } from '@/generated/prisma/client'

/**
 * Dane pulpitu.
 *
 * Przychód liczymy wyłącznie z zamówień opłaconych lub w realizacji — pro forma
 * czekająca na przelew i porzucona płatność online to jeszcze nie są pieniądze.
 * Dzięki temu kwota na pulpicie zgadza się z tym, co wpłynęło, a zamówienia
 * czekające na płatność mają własne miejsce w sekcji „wymaga uwagi".
 */
const STATUSY_PRZYCHODU: OrderStatus[] = [
  OrderStatus.PAID,
  OrderStatus.PROCESSING,
  OrderStatus.SHIPPED,
  OrderStatus.DELIVERED,
]

const DZIEN = 24 * 60 * 60 * 1000

function poczatekDnia(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export interface PunktDnia {
  data: string      // ISO (YYYY-MM-DD)
  etykieta: string  // „26.08"
  obrot: number     // zł brutto
  zamowien: number
}

export interface DanePulpitu {
  dzis: { obrot: number; zamowien: number; sredniaKoszyka: number }
  /** ten sam dzień tygodnia, średnia z czterech poprzednich tygodni */
  typowyDzien: { obrot: number; zamowien: number }
  okresy: { etykieta: string; obrot: number; poprzednio: number; zamowien: number }[]
  dni: PunktDnia[]
  uwaga: { etykieta: string; ile: number; opis: string; href: string; pilne: boolean }[]
  ostatnieZamowienia: {
    numer: string; klient: string; kwota: number; status: string; kiedy: Date; pozycji: number
  }[]
  ostatnieLeady: { imie: string; email: string; temat: string; kiedy: Date; zrodlo: string | null }[]
  bestsellery: { nazwa: string; pn: string | null; sztuk: number; obrot: number }[]
  klienci: { wszyscy: number; nowiWMiesiacu: number }
}

async function obrotOd(gte: Date, lt?: Date) {
  const r = await prisma.order.aggregate({
    _sum: { totalBrutto: true },
    _count: { _all: true },
    where: {
      createdAt: { gte, ...(lt ? { lt } : {}) },
      status: { in: STATUSY_PRZYCHODU },
    },
  })
  return { obrot: (r._sum?.totalBrutto ?? 0) / 100, zamowien: r._count?._all ?? 0 }
}

export async function danePulpitu(): Promise<DanePulpitu> {
  const teraz = new Date()
  const dzisOd = poczatekDnia(teraz)

  // Trzydzieści dni po jednym zapytaniu — agregacja w pamięci jest tańsza niż
  // trzydzieści osobnych zapytań do bazy.
  const od30 = new Date(dzisOd.getTime() - 29 * DZIEN)
  const zamowienia30 = await prisma.order.findMany({
    where: { createdAt: { gte: od30 }, status: { in: STATUSY_PRZYCHODU } },
    select: { createdAt: true, totalBrutto: true },
  })

  const wgDnia = new Map<string, { obrot: number; zamowien: number }>()
  for (let i = 0; i < 30; i++) {
    const d = new Date(od30.getTime() + i * DZIEN)
    wgDnia.set(d.toISOString().slice(0, 10), { obrot: 0, zamowien: 0 })
  }
  for (const z of zamowienia30) {
    const klucz = poczatekDnia(z.createdAt).toISOString().slice(0, 10)
    const wpis = wgDnia.get(klucz)
    if (!wpis) continue
    wpis.obrot += z.totalBrutto / 100
    wpis.zamowien += 1
  }
  const dni: PunktDnia[] = Array.from(wgDnia.entries()).map(([data, v]) => ({
    data,
    etykieta: `${data.slice(8, 10)}.${data.slice(5, 7)}`,
    ...v,
  }))

  const [
    d7, d7poprz, d30, d30poprz, d365, d365poprz,
    czekaNaPlatnosc, doWysylki, zapytaniaOfertowe, kodyAktywne, allegroBledy, uzywkiWOfercie,
    ostatnieZamowienia, ostatnieLeady, klienciWszyscy, klienciNowi,
  ] = await Promise.all([
    obrotOd(new Date(teraz.getTime() - 7 * DZIEN)),
    obrotOd(new Date(teraz.getTime() - 14 * DZIEN), new Date(teraz.getTime() - 7 * DZIEN)),
    obrotOd(new Date(teraz.getTime() - 30 * DZIEN)),
    obrotOd(new Date(teraz.getTime() - 60 * DZIEN), new Date(teraz.getTime() - 30 * DZIEN)),
    obrotOd(new Date(teraz.getTime() - 365 * DZIEN)),
    obrotOd(new Date(teraz.getTime() - 730 * DZIEN), new Date(teraz.getTime() - 365 * DZIEN)),
    prisma.order.count({ where: { status: { in: [OrderStatus.PENDING_PAYMENT, OrderStatus.AWAITING_PAYMENT] } } }),
    prisma.order.count({ where: { status: { in: [OrderStatus.PAID, OrderStatus.PROCESSING] } } }),
    prisma.quote.count({ where: { status: 'REQUESTED' as never } }),
    prisma.promoCode.count({ where: { usedAt: null, revoked: false, expiresAt: { gte: teraz } } }),
    prisma.allegroOffer.count({ where: { status: 'ERROR' } }),
    prisma.usedDevice.count({ where: { status: 'AVAILABLE' } }),
    prisma.order.findMany({
      orderBy: { createdAt: 'desc' }, take: 6,
      select: {
        orderNumber: true, totalBrutto: true, status: true, createdAt: true,
        customer: { select: { company: true, firstName: true, lastName: true } },
        _count: { select: { items: true } },
      },
    }),
    prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }, take: 6,
      select: { name: true, email: true, subject: true, createdAt: true, utmSource: true, gclid: true },
    }),
    prisma.customer.count(),
    prisma.customer.count({ where: { createdAt: { gte: new Date(teraz.getTime() - 30 * DZIEN) } } }),
  ])

  // Bestsellery liczymy z pozycji zamówień, nie z odsłon kart — pulpit ma
  // pokazywać, co się sprzedaje, a nie co się ogląda.
  const pozycje30 = await prisma.orderItem.findMany({
    where: {
      order: {
        createdAt: { gte: new Date(teraz.getTime() - 30 * DZIEN) },
        status: { in: STATUSY_PRZYCHODU },
      },
    },
    select: { productName: true, partNumber: true, quantity: true, priceNetto: true },
  })
  const wgProduktu = new Map<string, { nazwa: string; pn: string | null; sztuk: number; obrot: number }>()
  for (const poz of pozycje30) {
    const klucz = poz.partNumber || poz.productName
    const wpis = wgProduktu.get(klucz) ?? { nazwa: poz.productName, pn: poz.partNumber, sztuk: 0, obrot: 0 }
    wpis.sztuk += poz.quantity
    wpis.obrot += (poz.priceNetto / 100) * poz.quantity
    wgProduktu.set(klucz, wpis)
  }
  const bestsellery = Array.from(wgProduktu.values()).sort((a, b) => b.obrot - a.obrot).slice(0, 5)

  const dzisiaj = dni[dni.length - 1] ?? { obrot: 0, zamowien: 0 }

  // Punkt odniesienia dla „dziś": ten sam dzień tygodnia z czterech poprzednich
  // tygodni. Poniedziałek porównany ze średnią z miesiąca myli — ruch B2B ma
  // tygodniowy rytm i weekend zawsze zaniża średnią.
  const tenSamDzien = dni.filter((d, i) => i !== dni.length - 1 && (dni.length - 1 - i) % 7 === 0)
  const typowyDzien = tenSamDzien.length
    ? {
        obrot: tenSamDzien.reduce((s, d) => s + d.obrot, 0) / tenSamDzien.length,
        zamowien: tenSamDzien.reduce((s, d) => s + d.zamowien, 0) / tenSamDzien.length,
      }
    : { obrot: 0, zamowien: 0 }

  return {
    dzis: {
      obrot: dzisiaj.obrot,
      zamowien: dzisiaj.zamowien,
      sredniaKoszyka: dzisiaj.zamowien ? dzisiaj.obrot / dzisiaj.zamowien : 0,
    },
    typowyDzien,
    okresy: [
      { etykieta: '7 dni', obrot: d7.obrot, poprzednio: d7poprz.obrot, zamowien: d7.zamowien },
      { etykieta: '30 dni', obrot: d30.obrot, poprzednio: d30poprz.obrot, zamowien: d30.zamowien },
      { etykieta: '12 miesięcy', obrot: d365.obrot, poprzednio: d365poprz.obrot, zamowien: d365.zamowien },
    ],
    dni,
    uwaga: [
      { etykieta: 'Czekają na płatność', ile: czekaNaPlatnosc, opis: 'pro forma i porzucone płatności online', href: '/admin/zamowienia', pilne: czekaNaPlatnosc > 5 },
      { etykieta: 'Do wysyłki', ile: doWysylki, opis: 'opłacone, czekają na wydanie', href: '/admin/zamowienia', pilne: doWysylki > 0 },
      { etykieta: 'Zapytania ofertowe', ile: zapytaniaOfertowe, opis: 'klient czeka na wycenę', href: '/admin/oferty', pilne: zapytaniaOfertowe > 0 },
      { etykieta: 'Kody bez vouchera', ile: kodyAktywne, opis: 'wystawione, voucher do zamówienia u Zebry', href: '/admin/kody', pilne: kodyAktywne > 0 },
      { etykieta: 'Oferty Allegro w błędzie', ile: allegroBledy, opis: 'nie wystawiły się poprawnie', href: '/admin/allegro/oferty', pilne: allegroBledy > 3 },
      { etykieta: 'Sprzęt używany w ofercie', ile: uzywkiWOfercie, opis: 'egzemplarze gotowe do sprzedaży', href: '/admin/uzywane', pilne: false },
    ],
    ostatnieZamowienia: ostatnieZamowienia.map((z) => ({
      numer: z.orderNumber,
      klient: z.customer?.company || [z.customer?.firstName, z.customer?.lastName].filter(Boolean).join(' ') || '—',
      kwota: z.totalBrutto / 100,
      status: z.status,
      kiedy: z.createdAt,
      pozycji: z._count.items,
    })),
    ostatnieLeady: ostatnieLeady.map((l) => ({
      imie: l.name ?? '—',
      email: l.email ?? '',
      temat: l.subject ?? 'Zapytanie',
      kiedy: l.createdAt,
      zrodlo: l.gclid ? 'Google Ads' : l.utmSource,
    })),
    bestsellery,
    klienci: { wszyscy: klienciWszyscy, nowiWMiesiacu: klienciNowi },
  }
}
