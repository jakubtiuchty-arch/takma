'use client'

/** Komunikat nad treścią strony w widokach błędu (global-error.tsx, error.tsx kart). */
export default function KomunikatBleduStrony() {
  return (
    <div className="container-main pt-4">
      <div
        role="alert"
        data-blad-strony=""
        className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>Strona nie załadowała się w pełni.</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="self-start rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:self-auto"
        >
          Odśwież stronę
        </button>
      </div>
    </div>
  )
}
