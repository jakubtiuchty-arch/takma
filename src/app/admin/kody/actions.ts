'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

/**
 * Wycofuje kod rabatowy — od tej chwili koszyk go nie przyjmie. Używane, gdy
 * voucher Zebry na tego klienta nie przeszedł albo zgłoszenie okazało się
 * niepoważne. Kodu nie kasujemy: ma zostać ślad, komu i kiedy go wystawiliśmy.
 */
export async function wycofajKod(code: string) {
  await prisma.promoCode.updateMany({
    where: { code, usedAt: null },
    data: { revoked: true },
  })
  revalidatePath('/admin/kody')
}
