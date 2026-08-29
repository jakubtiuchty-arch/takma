import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import { sendEmail } from '@/lib/email'
import { kursEur, adresPrzypomnienia } from '@/lib/koncesje'
import { buildKoncesjeWygasajaEmail } from '@/lib/email-templates'

/**
 * Przypomnienie o kończących się cenach specjalnych — 7 dni przed terminem.
 *
 * Koncesja przepada z dnia na dzień i nikt tego nie zauważa, dopóki nie
 * okaże się, że towar trzeba kupić po cenniku. Mail idzie tam, gdzie
 * wystawiono dokument: ceny TAKMY na handlowy@takma.com.pl, ceny Scantera na
 * biuro@scanter.pl. Wysyłamy raz na dokument (znacznik reminderSentAt), bo
 * cron chodzi codziennie i inaczej przypominałby przez cały tydzień.
 *
 * `?test=adres@firma.pl` wysyła podgląd na wskazany adres i niczego nie
 * stempluje — do sprawdzenia wyglądu poza terminem. Podgląd wymaga
 * zalogowania w panelu, bo inaczej dowolna osoba mogłaby wysłać sobie nasze
 * ceny zakupu na własny adres.
 */
export const maxDuration = 60

const DNI_PRZED = 7

export async function GET(request: NextRequest) {
  const test = request.nextUrl.searchParams.get('test')
  if (test && !(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Podgląd tylko dla zalogowanych.' }, { status: 401 })
  }
  const teraz = new Date()
  const granica = new Date(teraz.getTime() + DNI_PRZED * 86_400_000)

  const konczace = await prisma.priceConcession.findMany({
    where: {
      endDate: { gte: teraz, lte: granica },
      ...(test ? {} : { reminderSentAt: null }),
    },
    include: { items: { orderBy: { partNumber: 'asc' } } },
    orderBy: { endDate: 'asc' },
  })

  // Podgląd musi mieć co pokazać także wtedy, gdy nic akurat nie wygasa.
  const dokumenty = test && konczace.length === 0
    ? await prisma.priceConcession.findMany({
        include: { items: { orderBy: { partNumber: 'asc' } } },
        orderBy: { endDate: 'asc' },
        take: 2,
      })
    : konczace

  if (dokumenty.length === 0) {
    return NextResponse.json({ ok: true, wyslano: 0, info: 'Nic nie kończy się w najbliższym tygodniu.' })
  }

  const kurs = await kursEur()
  const zl = (grosze: number) => `${(grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł`
  const kwota = (setne: number) => (setne / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  // Jeden mail na adres — dwa dokumenty tego samego resellera nie mają powodu
  // przychodzić osobno.
  type Dokument = (typeof dokumenty)[number]
  const wgAdresu = new Map<string, Dokument[]>()
  for (const k of dokumenty) {
    const adres = test || adresPrzypomnienia(k.reseller)
    if (!wgAdresu.has(adres)) wgAdresu.set(adres, [])
    wgAdresu.get(adres)!.push(k)
  }

  const wyniki: { adres: string; dokumentow: number; ok: boolean; blad?: string }[] = []

  for (const [adres, lista] of Array.from(wgAdresu.entries())) {
    const html = buildKoncesjeWygasajaEmail({
      dokumenty: lista.map((k) => ({
        naglowek:
          k.source === 'JARLTECH'
            ? `Oferta Jarltecha ${k.docNumber ?? ''} do koncesji ${k.requestId} — ${k.reseller}`
            : `Koncesja ${k.requestId}${k.revision ? ` rev. ${k.revision}` : ''} — ${k.reseller}`,
        endUser: k.endUser,
        dniDoKonca: Math.max(0, Math.ceil((k.endDate.getTime() - teraz.getTime()) / 86_400_000)),
        dataKonca: k.endDate.toLocaleDateString('pl-PL'),
        pozycje: k.items.map((i) => ({
          partNumber: i.partNumber,
          cena: `${kwota(i.unitPrice)} ${k.currency}`,
          cenaPln: zl(k.currency === 'PLN' ? i.unitPrice : Math.round(i.unitPrice * kurs)),
          zostalo: i.maxQty != null ? `${Math.max(0, i.maxQty - i.usedQty)} z ${i.maxQty} szt.` : 'bez limitu',
        })),
      })),
    })

    const najblizszy = Math.min(
      ...lista.map((k) => Math.max(0, Math.ceil((k.endDate.getTime() - teraz.getTime()) / 86_400_000))),
    )
    const temat =
      lista.length === 1
        ? `Cena specjalna ${lista[0].source === 'JARLTECH' ? `z oferty ${lista[0].docNumber ?? lista[0].requestId}` : `${lista[0].requestId}`} kończy się ${najblizszy === 0 ? 'dzisiaj' : `za ${najblizszy} dni`}`
        : `${lista.length} ceny specjalne kończą się w ciągu ${DNI_PRZED} dni`

    const wynik = await sendEmail({
      to: adres,
      subject: test ? `[PODGLĄD] ${temat}` : temat,
      html,
      replyTo: 'takma@takma.com.pl',
    })
    wyniki.push({ adres, dokumentow: lista.length, ok: wynik.success, blad: wynik.error })

    if (wynik.success && !test) {
      await prisma.priceConcession.updateMany({
        where: { id: { in: lista.map((k) => k.id) } },
        data: { reminderSentAt: new Date() },
      })
    }
  }

  console.log('[koncesje] przypomnienia:', JSON.stringify(wyniki))
  return NextResponse.json({ ok: true, test: Boolean(test), wyslano: wyniki.filter((w) => w.ok).length, wyniki })
}
