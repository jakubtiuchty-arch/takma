'use client'

import { useMemo, useState } from 'react'

/**
 * Porównanie kosztu etykiety w trzech wariantach: mono na termotransferze, kolorowa
 * etykieta z drukarni nadrukowana termotransferem i druk kolorowy na ColorWorks.
 * Ceny materiałów są domyślne, ale każdą da się nadpisać — klient zwykle zna własne
 * stawki z faktur i dopiero wtedy wynik jest dla niego wiarygodny.
 */

/** Domyślne stawki netto (wrzesień 2026). Kolejno: biała etykieta papierowa, taśma woskowa,
 *  nośnik Epson Premium Matte, tusz SJIC42P i zużycie tuszu przy pełnym pokryciu. */
const DOMYSLNE = {
  etykietaBialaZlM2: 4.7,
  tasmaZlM2: 0.8,
  nosnikEpsonZlM2: 7.4,
  tuszZlMl: 3.08,
  zuzycieMlM2: 12,
}

function zl(v: number, miejsca = 2) {
  return v.toLocaleString('pl-PL', { minimumFractionDigits: miejsca, maximumFractionDigits: miejsca })
}

interface Pole {
  etykieta: string
  wartosc: number
  ustaw: (v: number) => void
  krok?: number
  sufiks?: string
  opis?: string
}

function PoleLiczbowe({ etykieta, wartosc, ustaw, krok = 1, sufiks, opis }: Pole) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-900">{etykieta}</span>
      <span className="mt-1 flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={krok}
          value={wartosc}
          onChange={(e) => ustaw(Number(e.target.value))}
          className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-base text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:py-2 sm:text-sm"
        />
        {sufiks && <span className="shrink-0 text-sm text-gray-500">{sufiks}</span>}
      </span>
      {opis && <span className="mt-1 block text-xs text-gray-500">{opis}</span>}
    </label>
  )
}

export default function KalkulatorKosztuEtykiet({ cenaDrukarki = 7518 }: { cenaDrukarki?: number }) {
  const [szerokosc, setSzerokosc] = useState(100)
  const [wysokosc, setWysokosc] = useState(150)
  const [dziennie, setDziennie] = useState(500)
  const [dniRoboczych, setDniRoboczych] = useState(21)
  const [pokrycie, setPokrycie] = useState(25)
  const [cenaZDrukarni, setCenaZDrukarni] = useState(0.35)
  const [cenaColorWorks, setCenaColorWorks] = useState(cenaDrukarki)
  const [pokazStawki, setPokazStawki] = useState(false)
  const [stawki, setStawki] = useState(DOMYSLNE)

  const wynik = useMemo(() => {
    const m2 = (szerokosc * wysokosc) / 1_000_000
    const miesiecznie = dziennie * dniRoboczych

    const mono = m2 * (stawki.etykietaBialaZlM2 + stawki.tasmaZlM2)
    const drukarnia = cenaZDrukarni + m2 * stawki.tasmaZlM2
    const tusz = m2 * stawki.zuzycieMlM2 * (pokrycie / 100) * stawki.tuszZlMl
    const colorworks = m2 * stawki.nosnikEpsonZlM2 + tusz

    const oszczednoscMies = (drukarnia - colorworks) * miesiecznie
    const zwrotMies = oszczednoscMies > 0 ? cenaColorWorks / oszczednoscMies : null

    return { m2, miesiecznie, mono, drukarnia, colorworks, tusz, oszczednoscMies, zwrotMies }
  }, [szerokosc, wysokosc, dziennie, dniRoboczych, pokrycie, cenaZDrukarni, cenaColorWorks, stawki])

  const warianty = [
    {
      nazwa: 'Termotransfer, jeden kolor',
      opis: 'Biała etykieta i taśma barwiąca. Bez koloru, bez logo w barwach firmowych.',
      koszt: wynik.mono,
    },
    {
      nazwa: 'Etykieta z drukarni + nadruk',
      opis: 'Kolorowa etykieta zamówiona w drukarni, dane zmienne dodrukowane termotransferem.',
      koszt: wynik.drukarnia,
    },
    {
      nazwa: 'ColorWorks, cała etykieta na miejscu',
      opis: 'Biały nośnik Epson i tusz. Kolor, dane zmienne i grafika w jednym przebiegu.',
      koszt: wynik.colorworks,
      wyroznij: true,
    },
  ]

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-4">
        <h3 className="text-lg font-semibold text-gray-900">Kalkulator kosztu etykiety</h3>
        <p className="mt-1 text-sm text-gray-600">
          Policz, ile kosztuje jedna etykieta w trzech wariantach i po ilu miesiącach zwraca się kolorowa drukarka.
        </p>
      </div>

      <div className="grid gap-4 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3">
        <PoleLiczbowe etykieta="Szerokość etykiety" wartosc={szerokosc} ustaw={setSzerokosc} sufiks="mm" />
        <PoleLiczbowe etykieta="Wysokość etykiety" wartosc={wysokosc} ustaw={setWysokosc} sufiks="mm" />
        <PoleLiczbowe etykieta="Etykiet dziennie" wartosc={dziennie} ustaw={setDziennie} krok={10} sufiks="szt." />
        <PoleLiczbowe etykieta="Dni roboczych w miesiącu" wartosc={dniRoboczych} ustaw={setDniRoboczych} sufiks="dni" />
        <PoleLiczbowe
          etykieta="Pokrycie kolorem"
          wartosc={pokrycie}
          ustaw={setPokrycie}
          krok={5}
          sufiks="%"
          opis="Logo i tekst to zwykle 10–20 %, etykieta ze zdjęciem produktu 40–60 %."
        />
        <PoleLiczbowe
          etykieta="Etykieta kolorowa z drukarni"
          wartosc={cenaZDrukarni}
          ustaw={setCenaZDrukarni}
          krok={0.01}
          sufiks="zł/szt."
          opis="Wpisz stawkę z własnej faktury — zależy od nakładu i liczby wzorów."
        />
      </div>

      <div className="border-t border-gray-200 px-5 py-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {warianty.map((w) => (
            <div
              key={w.nazwa}
              className={`rounded-lg border p-4 ${w.wyroznij ? 'border-primary-300 bg-primary-50' : 'border-gray-200 bg-gray-50'}`}
            >
              <p className="text-sm font-medium text-gray-900">{w.nazwa}</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-gray-900">
                {zl(w.koszt, 3)} <span className="text-base font-normal text-gray-500">zł/szt.</span>
              </p>
              <p className="mt-1 text-sm tabular-nums text-gray-600">
                {zl(w.koszt * wynik.miesiecznie, 0)} zł miesięcznie
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{w.opis}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-gray-200 p-4">
          {wynik.oszczednoscMies > 0 ? (
            <p className="text-sm leading-relaxed text-gray-700">
              Przy {wynik.miesiecznie.toLocaleString('pl-PL')} etykietach miesięcznie druk na ColorWorks kosztuje
              o <strong className="tabular-nums">{zl(wynik.oszczednoscMies, 0)} zł</strong> mniej niż zamawianie
              etykiet w drukarni. Drukarka za{' '}
              <input
                type="number"
                value={cenaColorWorks}
                step={100}
                onChange={(e) => setCenaColorWorks(Number(e.target.value))}
                className="mx-1 w-28 rounded-md border border-gray-300 px-2 py-1 text-base tabular-nums sm:text-sm"
                aria-label="Cena drukarki netto"
              />{' '}
              zł netto zwraca się po{' '}
              <strong className="tabular-nums">
                {wynik.zwrotMies! < 1
                  ? 'niecałym miesiącu'
                  : `${Math.ceil(wynik.zwrotMies!)} ${Math.ceil(wynik.zwrotMies!) === 1 ? 'miesiącu' : 'miesiącach'}`}
              </strong>
              .
            </p>
          ) : (
            <p className="text-sm leading-relaxed text-gray-700">
              Przy tych stawkach etykieta z drukarni wychodzi taniej niż druk na miejscu. Kolorowa drukarka zwróci się
              dopiero wtedy, gdy dojdzie krótka seria, częsta zmiana wzoru albo koszt nieużytych etykiet — tego
              kalkulator nie liczy.
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Jeżeli etykieta nie musi być kolorowa, termotransfer zostaje najtańszy: {zl(wynik.mono, 3)} zł wobec{' '}
            {zl(wynik.colorworks, 3)} zł za sztukę. Kolor ma sens tam, gdzie zastępuje etykietę z drukarni, a nie tam,
            gdzie wystarczy czarny nadruk.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setPokazStawki((v) => !v)}
          className="mt-4 text-sm text-primary-600 underline-offset-2 hover:underline"
        >
          {pokazStawki ? 'Ukryj stawki materiałów' : 'Pokaż i popraw stawki materiałów'}
        </button>

        {pokazStawki && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PoleLiczbowe
              etykieta="Biała etykieta papierowa"
              wartosc={stawki.etykietaBialaZlM2}
              ustaw={(v) => setStawki({ ...stawki, etykietaBialaZlM2: v })}
              krok={0.1}
              sufiks="zł/m²"
            />
            <PoleLiczbowe
              etykieta="Taśma termotransferowa"
              wartosc={stawki.tasmaZlM2}
              ustaw={(v) => setStawki({ ...stawki, tasmaZlM2: v })}
              krok={0.1}
              sufiks="zł/m²"
            />
            <PoleLiczbowe
              etykieta="Nośnik Epson Premium Matte"
              wartosc={stawki.nosnikEpsonZlM2}
              ustaw={(v) => setStawki({ ...stawki, nosnikEpsonZlM2: v })}
              krok={0.1}
              sufiks="zł/m²"
              opis="Rolka 800 etykiet 102 × 152 mm z naszej oferty."
            />
            <PoleLiczbowe
              etykieta="Tusz"
              wartosc={stawki.tuszZlMl}
              ustaw={(v) => setStawki({ ...stawki, tuszZlMl: v })}
              krok={0.1}
              sufiks="zł/ml"
              opis="Wkład SJIC42P 50 ml do C4000e."
            />
            <PoleLiczbowe
              etykieta="Zużycie tuszu przy 100 % pokrycia"
              wartosc={stawki.zuzycieMlM2}
              ustaw={(v) => setStawki({ ...stawki, zuzycieMlM2: v })}
              krok={1}
              sufiks="ml/m²"
              opis="Wartość szacunkowa dla czterech kolorów pigmentowych."
            />
          </div>
        )}

        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Wynik jest szacunkiem: nie obejmuje kosztu pojemnika konserwacyjnego, energii, serwisu ani etykiet
          wyrzuconych przy zmianie wzoru. Dokładne zużycie tuszu dla konkretnego projektu policzy narzędzie
          w sterowniku ColorWorks albo my — prześlij plik etykiety, a zmierzymy je na maszynie.
        </p>
      </div>
    </div>
  )
}
