'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'

export async function setTenderStatus(id: string, status: 'new' | 'watched' | 'dismissed') {
  if (!['new', 'watched', 'dismissed'].includes(status)) throw new Error('Nieprawidłowy status')
  const session = await getSessionFromCookie()
  if (!session) throw new Error('Unauthorized')
  await prisma.tender.update({ where: { id }, data: { status } })
  revalidatePath('/admin/przetargi')
}

export async function retryTender(form: FormData) {
  const session = await getSessionFromCookie()
  if (!session) throw new Error('Unauthorized')
  const id = String(form.get('id') || '')
  await prisma.tender.update({ where: { id }, data: { analysisStatus: 'pending', nextCheckAt: new Date(), analysisAttempts: 0, analysisError: null } })
  revalidatePath('/admin/przetargi')
}

export async function addTenderLink(form: FormData) {
  const session = await getSessionFromCookie()
  if (!session) throw new Error('Unauthorized')
  const { publicUrl } = await import('@/lib/tenders/network')
  const { hash } = await import('@/lib/tenders/core')
  let url: string
  try { url = (await publicUrl(String(form.get('url') || '').trim())).href }
  catch { redirect('/admin/przetargi?komunikat=invalid-url') }
  const key = hash({ noticeNumber: '', source: '', orderObject: url, rawBody: '' }).slice(0, 32)
  const mode = String(form.get('mode') || 'notice')
  if (mode === 'source') {
    await prisma.tenderSource.upsert({ where: { id: `LIST/${key}` }, create: { id: `LIST/${key}`, name: new URL(url).hostname, url }, update: { enabled: true, error: null } })
  } else {
    await prisma.tender.upsert({ where: { noticeNumber: `URL/${key}` },
      create: { noticeNumber: `URL/${key}`, source: 'Link własny', orderObject: String(form.get('title') || '').slice(0, 1000) || `Postępowanie: ${new URL(url).hostname}`, url },
      update: { analysisStatus: 'pending', nextCheckAt: new Date(), analysisError: null },
    })
  }
  revalidatePath('/admin/przetargi')
  redirect('/admin/przetargi?widok=przeglad&komunikat=added')
}

export async function toggleTenderSource(form: FormData) {
  const session = await getSessionFromCookie()
  if (!session) throw new Error('Unauthorized')
  const id = String(form.get('id') || '')
  if (!id.startsWith('LIST/')) throw new Error('Nie można wyłączyć źródła podstawowego')
  await prisma.tenderSource.update({ where: { id }, data: { enabled: form.get('enabled') === 'true' } })
  revalidatePath('/admin/przetargi')
}
