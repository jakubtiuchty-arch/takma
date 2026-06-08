import { listAllPackages, type FurgPackageSummary } from './furgonetka-rest'

export interface DuplicateGroup {
  ref: string
  packages: FurgPackageSummary[]
}

function isCanceled(state: string): boolean {
  return /cancel|anulow/i.test(state)
}

/**
 * Grupy zduplikowanych przesyłek — wiele AKTYWNYCH paczek z tym samym
 * user_reference_number (= nasz orderId). To efekt starego buga (ponowny
 * klik tworzył kolejnego kuriera). Anulowane pomijamy.
 */
export async function findDuplicateGroups(): Promise<DuplicateGroup[]> {
  const all = await listAllPackages()
  const byRef = new Map<string, FurgPackageSummary[]>()
  for (const p of all) {
    if (!p.ref || isCanceled(p.state)) continue
    const arr = byRef.get(p.ref) || []
    arr.push(p)
    byRef.set(p.ref, arr)
  }
  return Array.from(byRef.entries())
    .filter(([, pkgs]) => pkgs.length > 1)
    .map(([ref, packages]) => ({
      // „Zostaw" pierwsza: z numerem listu + ruchem (nie waiting/new); reszta = kandydaci do anulowania.
      ref,
      packages: packages.sort((a, b) => {
        const rank = (p: FurgPackageSummary) => (p.tracking ? 2 : 0) + (/waiting|new|nowa/i.test(p.state) ? 0 : 1)
        return rank(b) - rank(a)
      }),
    }))
}
