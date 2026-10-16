/** Audyt doboru: docs/rfid-labels/powiazania-drukarek-2026-10-15.md.
 * Lista zamknięta: podobna nazwa modelu lub sam moduł UHF nie wystarczają.
 */
export type RfidLabelRequirement = 'standard' | 'adapter-76' | 'on-metal-t5'
type Link = { printerIds: string[]; requirement: RfidLabelRequirement; adapterPrinterIds?: string[] }

const industrial = ['zebra-zt231-rfid', 'zebra-zt610-rfid', 'zebra-zt411-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid']
const narrowIndustrial = industrial.slice(0, 3)
const desktop = ['zebra-zd621r']
// TSC: konkretne wkładki BT573 UCODE 9 i BT793 UCODE 9 w tabeli walidacji.
// Nie rozszerzamy zgodności na inne wkładki z tym samym chipem.
const t6000e = ['tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid', 'tsc-printronix-t6604e-rfid', 'tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid']

export const rfidLabelPrinterLinks: Record<string, Link> = {
  'zebra-etykiety-rfid-bt781-pp-przemyslowe': { printerIds: narrowIndustrial, requirement: 'standard' },
  'zebra-etykiety-rfid-bt781-pet-przemyslowe': { printerIds: narrowIndustrial, requirement: 'standard' },
  'zebra-etykiety-rfid-bt573-pp-przemyslowe': { printerIds: [...industrial, ...t6000e], requirement: 'standard' },
  'zebra-etykiety-rfid-zbr2000-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr2100-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr2200-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr4000-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-bt781-pp-biurkowe': { printerIds: [...desktop, 'zebra-zd611r', ...narrowIndustrial], requirement: 'standard', adapterPrinterIds: [...desktop, 'zebra-zd611r'] },
  'zebra-etykiety-rfid-bt573-pet-biurkowe': { printerIds: [...desktop, ...industrial, ...t6000e], requirement: 'standard', adapterPrinterIds: desktop },
  'zebra-etykiety-rfid-bt793-biurkowe': { printerIds: [...desktop, 'zebra-zd611r', ...industrial, ...t6000e], requirement: 'standard', adapterPrinterIds: [...desktop, 'zebra-zd611r'] },
  'zebra-etykiety-rfid-zbr2000-biurkowe': { printerIds: [...desktop, ...industrial], requirement: 'standard', adapterPrinterIds: desktop },
  'zebra-etykiety-rfid-zbr2100-biurkowe': { printerIds: [...desktop, ...industrial], requirement: 'standard', adapterPrinterIds: desktop },
  'zebra-etykiety-rfid-silverline-micro-ii': { printerIds: ['zebra-zt411-rfid'], requirement: 'on-metal-t5' },
  'zebra-etykiety-rfid-silverline-slim-ii': { printerIds: ['zebra-zt411-rfid'], requirement: 'on-metal-t5' },
  'zebra-etykiety-rfid-silverline-blade-ii': { printerIds: ['zebra-zt411-rfid'], requirement: 'on-metal-t5' },
  'zebra-etykiety-rfid-silverline-blade-ii-plus': { printerIds: ['zebra-zt411-rfid'], requirement: 'on-metal-t5' },
  'zebra-etykiety-rfid-silverline-classic-ii': { printerIds: ['zebra-zt411-rfid'], requirement: 'on-metal-t5' },
}

export function rfidLabelIdsForPrinter(printerId: string, onMetal = false): string[] {
  return Object.entries(rfidLabelPrinterLinks)
    .filter(([, link]) => link.printerIds.includes(printerId) && (link.requirement === 'on-metal-t5') === onMetal)
    .map(([labelId]) => labelId)
}

/** Wymóg dotyczy pary drukarka–rolka, nie całej rodziny etykiet.
 * Ta sama rolka 76 mm wymaga adaptera w ZD621R, ale nie w ZT411.
 */
export function rfidLabelRequirementForPrinter(labelId: string, printerId: string): RfidLabelRequirement | undefined {
  const link = rfidLabelPrinterLinks[labelId]
  if (!link?.printerIds.includes(printerId)) return undefined
  return link.adapterPrinterIds?.includes(printerId) ? 'adapter-76' : link.requirement
}
