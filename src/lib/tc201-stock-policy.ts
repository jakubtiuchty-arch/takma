/** TC201 changes rapidly: both supplier and merged snapshots expire after one hour. */
export const isTc201PartNumber = (pn: string) => /^TC201[0G]-/.test(pn)
export const tc201CacheMaxAge = (pn: string, requested: number) => isTc201PartNumber(pn) ? Math.min(requested, 60 * 60 * 1000) : requested
