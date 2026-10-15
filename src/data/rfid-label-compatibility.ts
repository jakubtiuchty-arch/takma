/** Audyt doboru: docs/rfid-labels/powiazania-drukarek-2026-10-15.md.
 * Lista zamknięta: podobna nazwa modelu lub sam moduł UHF nie wystarczają.
 */
export type RfidLabelRequirement = 'standard' | 'adapter-76' | 'on-metal-t5'
type Link = { printerIds: string[]; requirement: RfidLabelRequirement }

const industrial = ['zebra-zt231-rfid', 'zebra-zt610-rfid', 'zebra-zt411-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid']
const narrowIndustrial = industrial.slice(0, 3)
const desktop = ['zebra-zd621r']

export const rfidLabelPrinterLinks: Record<string, Link> = {
  'zebra-etykiety-rfid-bt781-pp-przemyslowe': { printerIds: narrowIndustrial, requirement: 'standard' },
  'zebra-etykiety-rfid-bt781-pet-przemyslowe': { printerIds: narrowIndustrial, requirement: 'standard' },
  'zebra-etykiety-rfid-bt573-pp-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr2000-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr2100-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr2200-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-zbr4000-przemyslowe': { printerIds: industrial, requirement: 'standard' },
  'zebra-etykiety-rfid-bt781-pp-biurkowe': { printerIds: [...desktop, 'zebra-zd611r'], requirement: 'adapter-76' },
  'zebra-etykiety-rfid-bt573-pet-biurkowe': { printerIds: desktop, requirement: 'adapter-76' },
  'zebra-etykiety-rfid-bt793-biurkowe': { printerIds: [...desktop, 'zebra-zd611r'], requirement: 'adapter-76' },
  'zebra-etykiety-rfid-zbr2000-biurkowe': { printerIds: desktop, requirement: 'adapter-76' },
  'zebra-etykiety-rfid-zbr2100-biurkowe': { printerIds: desktop, requirement: 'adapter-76' },
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
