'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'

async function wymagajAdmina() {
  if (!(await getSessionFromCookie())) throw new Error('Unauthorized')
}

export async function usunKoncesje(id: string) {
  await wymagajAdmina()
  await prisma.priceConcession.delete({ where: { id } })
  revalidatePath('/admin/koncesje')
}

/** Ręczny licznik wykorzystania — limit dotyczy całej koncesji, nie jednego zamówienia. */
export async function zapiszWykorzystanie(itemId: string, ile: number) {
  await wymagajAdmina()
  await prisma.priceConcessionItem.update({
    where: { id: itemId },
    data: { usedQty: Math.max(0, ile) },
  })
  revalidatePath('/admin/koncesje')
}
