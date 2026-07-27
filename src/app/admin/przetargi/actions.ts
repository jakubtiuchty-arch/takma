'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'

export async function setTenderStatus(id: string, status: 'new' | 'watched' | 'dismissed') {
  const session = await getSessionFromCookie()
  if (!session) throw new Error('Unauthorized')
  await prisma.tender.update({ where: { id }, data: { status } })
  revalidatePath('/admin/przetargi')
}
