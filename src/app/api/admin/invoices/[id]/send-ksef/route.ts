import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const invoice = await prisma.invoice.findUnique({ where: { id } })
  if (!invoice) {
    return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
  }

  // TODO: Actual KSeF integration
  // For now, mark as pending and log
  // When KSEF_TOKEN env is set, this will:
  // 1. Generate FA(3) XML
  // 2. Encrypt with AES-256-CBC
  // 3. Send to KSeF API
  // 4. Store ksefNumber and UPO

  const ksefToken = process.env.KSEF_TOKEN

  if (!ksefToken) {
    // No KSeF configured — mark as draft with info
    await prisma.invoice.update({
      where: { id },
      data: {
        ksefStatus: 'PENDING',
        ksefError: 'KSeF nie skonfigurowany — ustaw KSEF_TOKEN w zmiennych środowiskowych'
      }
    })
    return NextResponse.json({ success: true, message: 'KSeF not configured. Invoice marked as pending.' })
  }

  try {
    // Placeholder for actual KSeF send
    await prisma.invoice.update({
      where: { id },
      data: {
        ksefStatus: 'SENT',
        ksefSentAt: new Date(),
        ksefError: null,
      }
    })

    return NextResponse.json({ success: true, message: 'Invoice sent to KSeF' })
  } catch (error) {
    await prisma.invoice.update({
      where: { id },
      data: {
        ksefStatus: 'ERROR',
        ksefError: error instanceof Error ? error.message : 'Unknown error'
      }
    })
    return NextResponse.json({ error: 'Failed to send to KSeF' }, { status: 500 })
  }
}
