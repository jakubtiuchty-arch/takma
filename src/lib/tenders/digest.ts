import { prisma } from '@/lib/db'
import { sendEmail } from '@/lib/email'
const escape = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))
/** Zachowuje istniejący dzienny e-mail. Testy i ręczne uruchomienia używają notify=0. */
export async function sendTenderDigest() {
  const state = await prisma.tenderSource.upsert({ where: { id: '_digest' }, create: { id: '_digest', name: 'Dzienny e-mail' }, update: {} })
  if (state.lastSuccessAt && Date.now() - +state.lastSuccessAt < 24 * 3600000) return
  const rows = await prisma.tender.findMany({ where: { digestSentAt: null, status: { not: 'dismissed' }, score: { gte: 40 }, analysisStatus: { in: ['done', 'review'] }, OR: [{ submittingOffersDate: { gte: new Date() } }, { submittingOffersDate: null }] }, orderBy: { score: 'desc' }, take: 100 })
  if (!rows.length) return
  const result = await sendEmail({ to: 'jakub.tiuchty@takma.com.pl', subject: `Przetargi AutoID: ${rows.length} nowych dopasowań`,
    html: `<h2>Nowe przetargi dla TAKMA</h2>${rows.map(n => `<p><strong>${n.score}/100</strong> <a href="${escape(n.url || 'https://www.takma.com.pl/admin/przetargi')}">${escape(n.orderObject)}</a><br/>${escape(n.aiReason || '')}${n.analysisStatus === 'review' ? '<br/>Dokumentacja niepełna — sprawdź załączniki.' : ''}</p>`).join('')}<p><a href="https://www.takma.com.pl/admin/przetargi">Panel przetargów</a></p>` })
  if (!result.success) { await prisma.tenderSource.update({ where: { id: '_digest' }, data: { error: result.error } }); return }
  await prisma.$transaction([
    prisma.tender.updateMany({ where: { id: { in: rows.map(n => n.id) } }, data: { digestSentAt: new Date() } }),
    prisma.tenderSource.update({ where: { id: '_digest' }, data: { lastSuccessAt: new Date(), error: null } }),
  ])
}
