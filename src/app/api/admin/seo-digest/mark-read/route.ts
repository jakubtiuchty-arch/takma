import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST() {
  await prisma.seoDigestArticle.updateMany({
    where: { isRead: false },
    data: { isRead: true },
  })
  return NextResponse.json({ success: true })
}
