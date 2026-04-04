import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCustomerFromCookie } from '@/lib/customer-auth'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getCustomerFromCookie()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { id } = await params

  const invoice = await prisma.invoice.findUnique({
    where: { id },
    include: { order: { select: { orderNumber: true } } },
  })

  if (!invoice || invoice.customerId !== session.customerId) {
    return new NextResponse('Faktura nie znaleziona', { status: 404 })
  }

  // Redirect to admin PDF endpoint (same HTML, just auth-checked here)
  // In production, this would generate a signed URL or render directly
  const adminPdfUrl = new URL(`/api/admin/invoices/${id}/pdf`, _request.url)
  const res = await fetch(adminPdfUrl)
  const html = await res.text()

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
