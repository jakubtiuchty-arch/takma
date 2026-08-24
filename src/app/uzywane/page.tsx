import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { prisma } from '@/lib/db'
import { KATEGORIE, stanOpis } from '@/lib/used-devices'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Sprzęt używany — terminale, drukarki i skanery Zebra | TAKMA',
  description:
    'Używane terminale, drukarki etykiet i skanery Zebra ze sprawdzonym stanem technicznym. Każdy egzemplarz z gwarancją TAKMA, faktura VAT, wysyłka z Wrocławia.',
  alternates: { canonical: 'https://www.takma.com.pl/uzywane' },
}

const fmt = (grosze: number) => (grosze / 100).toLocaleString('pl-PL', { maximumFractionDigits: 0 })

export default async function UzywanePage() {
  const sztuki = await prisma.usedDevice.findMany({
    where: { status: 'AVAILABLE' },
    orderBy: { createdAt: 'desc' },
  })

  const grupy = Object.entries(KATEGORIE)
    .map(([klucz, etykieta]) => ({ klucz, etykieta, items: sztuki.filter(s => s.category === klucz) }))
    .filter(g => g.items.length > 0)

  return (
    <div className="container-main py-10 lg:py-14">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sprzęt używany</h1>
      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
        Terminale, drukarki i skanery po serwisie i testach. Każdy egzemplarz opisujemy takim, jaki
        jest — ze stanem obudowy, wyposażeniem i długością gwarancji. Sztuk jest po jednej, więc to,
        co widać na liście, jest tym, co mamy na magazynie.
      </p>

      {sztuki.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center">
          <p className="text-gray-900 font-semibold mb-2">Chwilowo nie mamy sprzętu używanego</p>
          <p className="text-gray-600 mb-6">
            Egzemplarze pojawiają się nieregularnie — po wymianie floty u klienta albo po zwrocie z dzierżawy.
            Napisz, czego szukasz, a odezwiemy się, gdy coś takiego wpadnie.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Napisz, czego szukasz
          </Link>
        </div>
      ) : (
        grupy.map(grupa => (
          <section key={grupa.klucz} className="mb-12 last:mb-0">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">{grupa.etykieta}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {grupa.items.map(s => (
                <Link
                  key={s.id}
                  href={`/uzywane/${s.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all hover:border-gray-300 hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[4/3] bg-gray-50">
                    {s.images[0] ? (
                      <Image
                        src={s.images[0]}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
                        Zdjęcia w przygotowaniu
                      </div>
                    )}
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700 border border-gray-200">
                      {stanOpis(s.conditionGrade).etykieta}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-gray-900 leading-snug mb-1">{s.name}</p>
                    {s.conditionNote && (
                      <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{s.conditionNote}</p>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">{fmt(s.priceNetto)} zł</span>
                      <span className="text-sm text-gray-500">netto</span>
                      {s.newPriceNetto && s.newPriceNetto > s.priceNetto && (
                        <span className="text-sm text-gray-400 line-through ml-auto">{fmt(s.newPriceNetto)} zł nowy</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Gwarancja {s.warrantyMonths} mies. · jedna sztuka
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}

      <section className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Co znaczy &bdquo;używany&rdquo; u nas</h2>
        <div className="grid gap-6 sm:grid-cols-3 text-gray-600 leading-relaxed">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Sprawdzony w serwisie</p>
            <p className="text-sm">
              Każdy egzemplarz przechodzi przez nasz serwis: test skanera, baterii, portów i wyświetlacza.
              Co wymagało wymiany, wymieniamy przed wystawieniem.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Gwarancja i faktura</p>
            <p className="text-sm">
              Sprzedajemy na fakturę VAT, z gwarancją liczoną od dnia zakupu. Długość gwarancji podajemy
              przy każdej sztuce — zależy od modelu i jego przebiegu.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Opis bez upiększania</p>
            <p className="text-sm">
              Stan obudowy opisujemy wprost i pokazujemy na zdjęciach tę konkretną sztukę, nie zdjęcie
              katalogowe. Rysa na obudowie nie wpływa na pracę, ale wolimy, żebyś wiedział o niej wcześniej.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
