import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { lookupStock } from '@/lib/jarltech'
import { products } from '@/data/products'

// Protect with CRON_SECRET
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Collect ALL M3 Mobile PNs from products data
  const m3Products = products.filter(p => p.manufacturerId === 'm3-mobile')
  const allPNs: string[] = []

  for (const product of m3Products) {
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

  const uniquePNs = Array.from(new Set(allPNs))
  console.log(`[Jarltech Sync] Starting sync for ${uniquePNs.length} PNs`)

  // Process PNs in small batches of 5
  const BATCH_SIZE = 5
  let synced = 0
  let found = 0

  for (let i = 0; i < uniquePNs.length; i += BATCH_SIZE) {
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
      await new Promise(r => setTimeout(r, 2000))
    }
  }

  console.log(`[Jarltech Sync] Done: ${synced}/${uniquePNs.length} synced, ${found} found`)

  return NextResponse.json({
    success: true,
    total: uniquePNs.length,
    synced,
    found,
    timestamp: new Date().toISOString(),
  })
}
