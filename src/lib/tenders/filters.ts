import type { Prisma } from '@/generated/prisma/client'

export const VIEWS = ['trafienia', 'przeglad', 'wszystkie', 'slabsze', 'archiwum'] as const
export type View = typeof VIEWS[number]
export function tenderWhere(view: View, now: Date, q = '', source = ''): Prisma.TenderWhereInput {
  const active = { OR: [{ submittingOffersDate: null }, { submittingOffersDate: { gte: now } }] }
  const rules: Prisma.TenderWhereInput[] = []
  if (view === 'archiwum') rules.push({ submittingOffersDate: { lt: now } })
  else rules.push(active)
  if (view === 'trafienia') rules.push({ score: { gte: 40 } })
  if (view === 'przeglad') rules.push({ analysisStatus: { in: ['pending', 'error', 'review'] } })
  if (view === 'slabsze') rules.push({ score: { lt: 40 }, analysisStatus: 'done' })
  if (q) rules.push({ OR: ['orderObject', 'organizationName', 'noticeNumber', 'cpvCodes'].map(field => ({ [field]: { contains: q, mode: 'insensitive' as const } })) })
  if (source) rules.push({ source })
  return { AND: rules }
}
