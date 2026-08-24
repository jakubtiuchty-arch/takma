import Link from 'next/link'
import UsedDeviceForm from '../UsedDeviceForm'
import { dodajUzywke } from '../actions'

export const dynamic = 'force-dynamic'

export default function NowaUzywkaPage() {
  return (
    <div>
      <Link href="/admin/uzywane" className="text-sm text-gray-500 hover:text-gray-700">← Urządzenia używane</Link>
      <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-1">Nowy egzemplarz</h1>
      <p className="text-sm text-gray-500 mb-6">
        Każdy wiersz to jedna sztuka z magazynu. Po sprzedaży znika z oferty automatycznie.
      </p>
      <UsedDeviceForm onSubmit={dodajUzywke} />
    </div>
  )
}
