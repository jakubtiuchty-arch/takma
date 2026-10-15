import 'server-only'
import { prisma } from '@/lib/db'

// Own inventory only. Customer companies and demonstration sessions are excluded.
const TAKMA_TENANT_ID = 'c997f004-a28d-4459-a5dd-593d155be728'
export const warehouseCategories = [
  { key: 'thermal', id: 'termiczne', title: 'Etykiety termiczne' },
  { key: 'transfer', id: 'termotransferowe', title: 'Etykiety termotransferowe' },
  { key: 'ribbon', id: 'tasmy', title: 'Taśmy termotransferowe' },
] as const
export type WarehouseCategory = typeof warehouseCategories[number]['key']
type SessionRow = { id: string; name: string; state: 'open' | 'closed'; created_at: bigint; closed_at: bigint | null }
type EntryRow = { id: string; carton: string; product_id: string; product_snapshot: string; rolls: bigint; location: string; created_at: bigint; worker_name: string }
export type WarehouseCarton = { id: string; number: string; rolls: number; location: string; countedAt: number; worker: string }
export type WarehouseProduct = { id: string; pn: string; name: string; variant: string; category: WarehouseCategory; url: string; rolls: number; countedRolls: number; issuedRolls: number; cartons: WarehouseCarton[] }
export type WarehouseIssue = { id: string; pn: string; rolls: number; note: string; worker: string; createdAt: number }
export type WarehouseData = { session: { id: string; name: string; state: 'open' | 'closed' } | null; products: WarehouseProduct[]; totalRolls: number; totalCartons: number; issues: WarehouseIssue[]; totalIssuedRolls: number; readAt: number }

export async function getTakmaWarehouse(): Promise<WarehouseData> {
  // A new stocktake replaces the previous snapshot; never sum separate stocktakes.
  const sessions = await prisma.$queryRaw<SessionRow[]>`
    SELECT id,name,state,created_at,closed_at FROM takma_magazyn.inventory_sessions
    WHERE tenant_id=${TAKMA_TENANT_ID} AND purpose='warehouse'
    ORDER BY created_at DESC,id LIMIT 1`
  const session = sessions[0]
  if (!session) return { session: null, products: [], totalRolls: 0, totalCartons: 0, issues: [], totalIssuedRolls: 0, readAt: Date.now() }
  const entries = await prisma.$queryRaw<EntryRow[]>`
    SELECT e.id,e.carton,e.product_id,e.product_snapshot,e.rolls,e.location,e.created_at,w.name AS worker_name
    FROM takma_magazyn.inventory_entries e JOIN takma_magazyn.workers w ON w.id=e.worker_id
    WHERE e.tenant_id=${TAKMA_TENANT_ID} AND e.session_id=${session.id} AND e.cancelled_at IS NULL
    ORDER BY e.created_at DESC,e.id`
  const issues = await prisma.$queryRaw<Array<{ id: string; product_id: string; product_snapshot: string; rolls: bigint; note: string; created_at: bigint; worker_name: string }>>`
    SELECT i.id,i.product_id,i.product_snapshot,i.rolls,i.note,i.created_at,w.name AS worker_name
    FROM takma_magazyn.inventory_issues i JOIN takma_magazyn.workers w ON w.id=i.worker_id
    WHERE i.tenant_id=${TAKMA_TENANT_ID} AND i.session_id=${session.id}
    ORDER BY i.created_at DESC,i.id`
  const issuedByProduct = new Map<string, number>()
  for (const issue of issues) issuedByProduct.set(issue.product_id, (issuedByProduct.get(issue.product_id)||0)+Number(issue.rolls))
  const grouped = new Map<string, WarehouseProduct>()
  for (const entry of entries) {
    const p = JSON.parse(entry.product_snapshot) as { pn: string; name: string; variant: string; category: WarehouseCategory; url: string }
    if (!warehouseCategories.some(c => c.key === p.category)) throw new Error('Unknown warehouse category')
    let product = grouped.get(entry.product_id)
    if (!product) {
      product = { id: entry.product_id, pn: p.pn, name: p.name, variant: p.variant, category: p.category,
        url: p.url.startsWith('https://www.takma.com.pl/produkt/') ? p.url : '', rolls: 0, countedRolls: 0, issuedRolls: 0, cartons: [] }
      grouped.set(entry.product_id, product)
    }
    const rolls = Number(entry.rolls)
    if (!Number.isSafeInteger(rolls) || rolls < 1) throw new Error('Invalid warehouse quantity')
    product.rolls += rolls
    product.cartons.push({ id: entry.id, number: entry.carton, rolls, location: entry.location,
      countedAt: Number(entry.created_at), worker: entry.worker_name })
  }
  for (const product of Array.from(grouped.values())) {
    product.countedRolls=product.rolls
    product.issuedRolls=issuedByProduct.get(product.id)||0
    product.rolls-=product.issuedRolls
    if (product.rolls<0) throw new Error('Negative warehouse stock')
  }
  const products = Array.from(grouped.values()).sort((a,b) => a.pn.localeCompare(b.pn,'pl'))
  return { session: { id: session.id, name: session.name, state: session.state }, products,
    totalRolls: products.reduce((n,p) => n+p.rolls,0), totalCartons: entries.length, totalIssuedRolls: issues.reduce((n,i)=>n+Number(i.rolls),0), issues: issues.map(i=>({id:i.id,pn:JSON.parse(i.product_snapshot).pn,rolls:Number(i.rolls),note:i.note,worker:i.worker_name,createdAt:Number(i.created_at)})), readAt: Date.now() }
}
