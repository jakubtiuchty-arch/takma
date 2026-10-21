import type { Product } from '@/data/products'
import { variantAttributeTooltips } from '@/data/variant-attribute-tooltips'

/** Only explain connections actually offered on the current product. */
export function getProductVariantTooltips(product: Product): Record<string, string> | undefined {
  const scoped = ['bixolon', 'epson', 'cipherlab'].includes(product.manufacturerId)
    || (product.manufacturerId === 'datalogic' && product.categoryId === 'skanery-kodow-kreskowych')
    || product.subcategoryIds?.some(id => id.includes('rfid')) || /\bRFID\b/i.test(product.name)
  if (!scoped) return product.variantAttributeTooltips
  const result = { ...product.variantAttributeTooltips }
  const values = (key: string) => Array.from(new Set(product.variants?.map(v => v.attributes[key]).filter(Boolean))).join(' | ')
  for (const key of ['Łączność', 'Interfejsy', 'Łączność bezprzewodowa']) {
    const offered = values(key)
    if (!offered) continue
    const lines: string[] = []
    if (/USB(?! Host)/.test(offered)) lines.push('USB — przewód do komputera lub kasy.')
    if (/USB Host/.test(offered)) lines.push('USB Host — port dla akcesoriów, nie komputera.')
    if (/USB-C/.test(offered)) lines.push('USB-C — kształt złącza, nie gwarancja szybkiego ładowania.')
    if (/PoweredUSB/.test(offered)) lines.push('PoweredUSB — dane i zasilanie z portu POS, nie zwykłego USB.')
    if (/Ethernet/.test(offered)) lines.push('Ethernet — przewodowa sieć lokalna.')
    if (/RS-232/.test(offered)) lines.push('RS-232 — port szeregowy; wymaga zgodnego przewodu i ustawień.')
    if (/Równoległy/.test(offered)) lines.push('Równoległy — starszy port drukarkowy; wymaga zgodnego złącza i przewodu.')
    if (/Lightning/.test(offered)) lines.push('Lightning — połączenie ze zgodnym urządzeniem Apple.')
    if (/Wi-Fi/.test(offered)) lines.push(/6E/.test(offered)
      ? 'Wi-Fi 6E — obsługuje także pasmo 6 GHz, przy zgodnym punkcie dostępowym i lokalnych warunkach dostępu do pasma.'
      : 'Wi-Fi — sieć lokalna przez punkt dostępowy.')
    if (/4G|5G/.test(offered)) lines.push(`${/5G/.test(offered) ? '5G' : '4G LTE'} — internet przez sieć operatora; wymaga aktywnej usługi i zgodnej karty SIM lub eSIM.`)
    if (/Bluetooth/.test(offered)) lines.push(/MFi/.test(offered)
      ? 'Bluetooth MFi — połączenie ze zgodnymi urządzeniami Apple.'
      : 'Bluetooth — bezpośrednie połączenie; wymaga zgodnego profilu.')
    if (/BLE/.test(offered) && !result[key]) lines.push('BLE — Bluetooth Low Energy; dostępne funkcje zależą od urządzenia i aplikacji.')
    if (/Brak/.test(offered)) lines.push('Brak — wariant nie ma wskazanego modułu radiowego.')
    // Retain PN-specific restrictions such as configuration-only BLE and factory Wi-Fi.
    if (result[key]) lines.push(result[key])
    // Keep multi-interface help readable in the existing compact tooltip.
    if (lines.length > 4) lines.splice(0, 2, lines.slice(0, 2).join(' '))
    result[key] = ['Połączenia oferowane na tej karcie.', ...lines.map(line => `• ${line}`)].join('\n')
  }
  for (const key of ['Rozdzielczość', 'Prędkość druku', 'Obsługa etykiet']) {
    if (result[key]) result[key] = `${variantAttributeTooltips[key]}\n• ${result[key]}`
  }
  if (product.manufacturerId === 'epson') {
    for (const key of ['Czarny tusz', 'Wykończenie']) {
      if (values(key)) result[key] = variantAttributeTooltips[key]
    }
  }
  for (const key of ['Skaner', 'Skaner kodów']) {
    if (result[key] || !values(key)) continue
    const engines: Record<string, string> = {
      SE4107: 'odczyt kodów 1D i 2D ze standardowej odległości.',
      SE4750MR: 'Mid Range — średni zakres odczytu kodów 1D i 2D.',
      SE4850: 'Extended Range — odczyt kodów 1D i 2D z bliska i z większej odległości.',
      SE4770: 'standardowy zakres odczytu kodów 1D i 2D, celownik laserowy.',
      SE4100: 'standardowy zakres odczytu kodów 1D i 2D, celownik LED.',
      SE5500: 'rozszerzony zakres odczytu kodów 1D i 2D.',
      SE5800: 'Extended Range — daleki zakres odczytu kodów 1D i 2D.',
    }
    const lines = Object.entries(engines).filter(([engine]) => values(key).replace(/ /g, '').includes(engine)).map(([engine, text]) => `${engine} — ${text}`)
    if (/Brak/.test(values(key))) lines.push('Brak — bez optycznego skanera kodów; czytnik RFID to osobny moduł.')
    if (lines.length) result[key] = ['Moduł optyczny do odczytu kodów kreskowych.', ...lines.map(line => `• ${line}`), '• Zasięg zależy od wielkości, jakości i rodzaju kodu.'].join('\n')
  }
  if (values('Model')) {
    const models = Array.from(new Set(product.variants?.map(v => v.attributes['Model']).filter(Boolean)))
    result['Model'] = ['Odmiany drukarki i ich rozdzielczość nadruku.', ...models.map(model => {
      const resolutions = Array.from(new Set(product.variants?.filter(v => v.attributes['Model'] === model).map(v => v.attributes['Rozdzielczość']).filter(Boolean)))
      return `• ${model} — ${resolutions.join(' / ') || 'wyposażenie określone w wierszu wariantu'}.`
    })].join('\n')
  }
  if (values('Wersja') && product.manufacturerId === 'datalogic') result['Wersja'] = variantAttributeTooltips['Wersja Magellan']
  return result
}
