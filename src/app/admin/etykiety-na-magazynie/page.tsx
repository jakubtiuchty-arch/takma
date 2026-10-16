import { redirect } from 'next/navigation'
import { getSessionFromCookie } from '@/lib/auth'
import { getTakmaWarehouse, warehouseCategories, type WarehouseData } from '@/lib/takma-warehouse'
import RefreshWarehouse from './RefreshWarehouse'
import WarehouseCategorySection from './WarehouseCategorySection'

export const dynamic = 'force-dynamic'
export const revalidate = 0
const number = (n: number) => n.toLocaleString('pl-PL')
const date = (n: number) => new Date(n).toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })

export default async function WarehousePage() {
  if (!await getSessionFromCookie()) redirect('/admin/login')
  let data: WarehouseData
  try { data = await getTakmaWarehouse() }
  catch (error) {
    console.error('Warehouse read failed:', error instanceof Error ? error.name : 'Error')
    return <div className="space-y-4"><h1 className="text-2xl font-bold text-gray-900">Etykiety na magazynie</h1>
      <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">Nie udało się pobrać magazynu. Odśwież widok i spróbuj ponownie.</p><RefreshWarehouse /></div>
  }
  return <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div><h1 className="text-2xl font-bold text-gray-900">Etykiety na magazynie</h1>
        <p className="mt-1 text-sm text-gray-500">Aktualny stan rolek w naszym magazynie. Pobrania z terminala pomniejszają dostępne ilości.</p></div>
      <RefreshWarehouse />
    </div>
    <div className="grid gap-4 sm:grid-cols-3">
      {[['Dostępne rolki',data.totalRolls],['Policzone kartony',data.totalCartons],['Produkty',data.products.length]].map(([label,value]) =>
        <div key={label} className="rounded-xl border border-gray-200 bg-white p-5"><p className="text-sm text-gray-500">{label}</p>
          <p className="mt-1 text-3xl font-semibold tabular-nums text-gray-900">{number(Number(value))}</p></div>)}
    </div>
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-4 text-sm">
      <div><span className={`mr-2 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${data.session?.state==='open'?'bg-amber-50 text-amber-800':'bg-green-50 text-green-800'}`}>
        {!data.session ? 'Inwentaryzacja nie rozpoczęta' : data.session.state==='open' ? 'Inwentaryzacja w toku' : 'Inwentaryzacja zakończona'}</span>
        <span className="text-gray-700">{data.session?.name}</span>
        {data.session?.state==='open' && <p className="mt-2 text-gray-500">Lista obejmuje kartony policzone do tej pory i uwzględnia zarejestrowane wydania.</p>}
      </div><p className="text-xs text-gray-500">Odczyt: {date(data.readAt)} · odświeżanie co 15 s</p>
    </div>
    <nav aria-label="Rodzaje materiałów" className="grid gap-3 sm:grid-cols-3">
      {warehouseCategories.map(c => {
        const products=data.products.filter(p=>p.category===c.key)
        return <a key={c.key} href={`#${c.id}`} className="rounded-xl border border-blue-100 bg-blue-50 p-4 hover:border-blue-300">
          <p className="font-semibold text-blue-900">{c.title}</p><p className="mt-1 text-sm text-blue-700">Rolki: {number(products.reduce((n,p)=>n+p.rolls,0))} · Produkty: {number(products.length)}</p>
        </a>
      })}
    </nav>
    {warehouseCategories.map(c => <WarehouseCategorySection key={c.key} category={c} products={data.products.filter(p => p.category === c.key)} />)}
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-5 py-4"><h2 className="text-lg font-semibold text-gray-900">Historia wydań</h2><p className="mt-1 text-sm text-gray-500">Wydane rolki: {number(data.totalIssuedRolls)}</p></div>
      {!data.issues.length ? <p className="p-5 text-sm text-gray-500">Nie zarejestrowano jeszcze wydań z magazynu.</p> : <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="px-5 py-3">Data</th><th className="px-5 py-3">PN</th><th className="px-5 py-3">Wydane rolki</th><th className="px-5 py-3">Pracownik</th><th className="px-5 py-3">Opis</th></tr></thead><tbody className="divide-y divide-gray-100">{data.issues.map(issue=><tr key={issue.id}><td className="whitespace-nowrap px-5 py-4">{date(issue.createdAt)}</td><td className="px-5 py-4 font-medium">{issue.pn}</td><td className="px-5 py-4 font-semibold">−{number(issue.rolls)}</td><td className="px-5 py-4">{issue.worker}</td><td className="px-5 py-4">{issue.note||'—'}</td></tr>)}</tbody></table></div>}
    </section>
  </div>
}
