import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const status = searchParams.get('status')
  const perPage = 20

  const where = status ? { ksefStatus: status as any } : {}

  const [invoices, total] = await Promise.all([
    prisma.invoice.findMany({
      where,
      include: { order: { select: { orderNumber: true } }, customer: { select: { company: true, email: true } } },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.invoice.count({ where }),
  ])

  return NextResponse.json({ invoices, total, totalPages: Math.ceil(total / perPage) })
}
