import { prisma } from '@/lib/db'

export async function generateInvoiceNumber(): Promise<string> {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')

  // Count invoices this month
  const startOfMonth = new Date(year, now.getMonth(), 1)
  const endOfMonth = new Date(year, now.getMonth() + 1, 1)

  const count = await prisma.invoice.count({
    where: {
      issueDate: { gte: startOfMonth, lt: endOfMonth }
    }
  })

  const seq = String(count + 1).padStart(3, '0')
  return `FV/${year}/${month}/${seq}`
}

export function formatInvoiceAmount(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
