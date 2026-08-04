import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { lookupStock } from '@/lib/jarltech'
import { products } from '@/data/products'

export const maxDuration = 300 // 5 minutes — now syncs ALL products, not just M3

// Protect with CRON_SECRET
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Collect ALL PNs from ALL products (Jarltech carries Zebra, Honeywell, Newland, M3 etc.)
  const allPNs: string[] = []

  for (const product of products) {
    // From variants
    if (product.variants) {
      for (const v of product.variants) {
        allPNs.push(v.partNumber)
      }
    }
    // From specifications (accessories with Part Number)
    const pnSpec = product.specifications.find(s => s.name === 'Part Number')
    if (pnSpec && !allPNs.includes(pnSpec.value)) {
      allPNs.push(pnSpec.value)
    }
    // From service plans
    if (product.servicePlans) {
      for (const sp of product.servicePlans) {
        allPNs.push(sp.partNumber)
      }
    }
  }

  // Pełna pula (~1600+ PN) NIE mieści się w maxDuration=300s (~350 PN/run) —
  // dawniej sync szedł zawsze w kolejności products.ts i Vercel ubijał go w tym
  // samym miejscu, więc ogon listy NIGDY się nie odświeżał (wpisy z kwietnia
  // pokazywały stany magazynowe sprzed miesięcy). Teraz: najpierw PN-y bez
  // wpisu w cache, potem od najdawniej synchronizowanych — pełna rotacja co ~4-5 dni.
  const cacheAges = new Map(
    (await prisma.jarltechStockCache.findMany({ select: { partNumber: true, lastSync: true } }))
      .map((r) => [r.partNumber, r.lastSync.getTime()]),
  )
  const uniquePNs = Array.from(new Set(allPNs))
    .sort((a, b) => (cacheAges.get(a) ?? 0) - (cacheAges.get(b) ?? 0))
  console.log(`[Jarltech Sync] Starting sync for ${uniquePNs.length} PNs (stale-first)`)

  // Process PNs in batches of 10 (Jarltech concurrency=4 inside lookupStock)
  const BATCH_SIZE = 10
  const DEADLINE = Date.now() + 270_000 // zapas 30s przed ubiciem funkcji (maxDuration=300)
  let synced = 0
  let found = 0
  let stoppedEarly = false

  for (let i = 0; i < uniquePNs.length; i += BATCH_SIZE) {
    if (Date.now() > DEADLINE) {
      stoppedEarly = true
      console.log(`[Jarltech Sync] Deadline — przerwano po ${synced} PN, reszta w kolejnym przebiegu (stale-first)`)
      break
    }
    const batch = uniquePNs.slice(i, i + BATCH_SIZE)

    try {
      const results = await lookupStock(batch)

      for (const result of results) {
        await prisma.jarltechStockCache.upsert({
          where: { partNumber: result.partNumber },
          create: {
            partNumber: result.partNumber,
            found: result.found,
            unitPrice: result.unitPrice ?? null,
            currency: result.currency ?? 'EUR',
            inventory: result.inventory,
            incomingQty: result.incomingQty,
            incomingDate: result.incomingDate ?? null,
            totalStock: result.totalStock,
            jarltechId: result.jarltechId ?? null,
            availability: result.availability,
            deliveryText: result.deliveryText,
          },
          update: {
            found: result.found,
            unitPrice: result.unitPrice ?? null,
            currency: result.currency ?? 'EUR',
            inventory: result.inventory,
            incomingQty: result.incomingQty,
            incomingDate: result.incomingDate ?? null,
            totalStock: result.totalStock,
            jarltechId: result.jarltechId ?? null,
            availability: result.availability,
            deliveryText: result.deliveryText,
          },
        })
        synced++
        if (result.found) found++
      }
    } catch (err) {
      console.error(`[Jarltech Sync] Batch error for ${batch.join(',')}:`, err)
    }

    // Small delay between batches to not overload Jarltech
    if (i + BATCH_SIZE < uniquePNs.length) {
      await new Promise(r => setTimeout(r, 500))
    }
  }

  console.log(`[Jarltech Sync] Done: ${synced}/${uniquePNs.length} synced, ${found} found`)

  return NextResponse.json({
    success: true,
    total: uniquePNs.length,
    synced,
    found,
    stoppedEarly,
    remaining: uniquePNs.length - synced,
    timestamp: new Date().toISOString(),
  })
}
