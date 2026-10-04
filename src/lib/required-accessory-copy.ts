const stationPowerCondition = 'zasilania zgodnej stacji TC201, TC501 lub TC701 albo ładowarki CRDCUP-TC5A7A-4B'

export function getRequiredAccessoryConditionText(condition: string): string {
  if (condition === stationPowerCondition) {
    return 'Zasilacz jest potrzebny do zasilania zgodnej stacji TC201, TC501 lub TC701 albo ładowarki baterii CRDCUP-TC5A7A-4B.'
  }
  if (/^TC\d/.test(condition)) {
    return `Jeśli używasz terminala ${condition.replace(' i ', ' lub ')}, potrzebujesz tego elementu.`
  }
  if (/^stacji\b/.test(condition)) {
    return `Jeśli używasz ${condition}, potrzebujesz tego elementu.`
  }
  return `Do ${condition} potrzebujesz tego elementu.`
}

export function getRequiredAccessoriesCopy(conditions: (string | undefined)[], subject: string) {
  if (conditions.length > 0 && conditions.every(condition => condition === stationPowerCondition)) {
    return {
      heading: 'Do zasilania stacji lub ładowarki potrzebujesz zasilacza.',
      description: 'Zasilacz jest sprzedawany osobno. Przy połączeniu przewodu z komputerem nie jest potrzebny.',
    }
  }
  const choices = Array.from(new Set(conditions.filter((condition): condition is string => !!condition)))
  if (choices.length === 2 && choices.includes('zasilania pojedynczej stacji') && choices.includes('zasilania połączonych stacji')) {
    return {
      heading: 'Wybierz zasilacz do liczby stacji.',
      description: 'Do jednej stacji użyj ADP710. Do połączonych stacji użyj AD60-D-M. Wybierz jeden zasilacz. Jest sprzedawany osobno.',
    }
  }
  const powerChoices = choices.filter(condition => /^(?:zasilania z |instalacji |ładowania z gniazda|ładowania w pojeździe)/.test(condition))
  const mountChoices = choices.filter(condition => /^(?:montażu|mocowania) (?:na|do)/.test(condition))
  if (choices.includes('codziennego ładowania baterii') && choices.includes('ładowania przez port Micro-USB')) {
    return {
      heading: 'Wybierz jeden sposób ładowania.',
      description: 'Możesz użyć ładowarki baterii lub przewodu Micro-USB. Potrzebujesz tylko jednego z tych rozwiązań. Elementy są sprzedawane osobno.',
    }
  }
  if (choices.length === 1 && choices[0] === 'lokalizowania wyłączonego terminala') {
    return {
      heading: 'Do lokalizowania wyłączonego terminala potrzebujesz licencji.',
      description: 'Licencja jest sprzedawana osobno. Nie jest potrzebna do zwykłego używania ani ładowania baterii.',
    }
  }
  if (choices.includes('ładowania z gniazda sieciowego') && choices.includes('ładowania w pojeździe')) {
    return {
      heading: 'Wybierz sposób zasilania do ładowania.',
      description: 'Wybierz zasilacz sieciowy lub ładowarkę samochodową. Do połączenia USB z komputerem nie potrzebujesz tych zasilaczy.',
    }
  }
  if (powerChoices.length > 1 || mountChoices.length > 1) {
    return {
      heading: powerChoices.length > 1 ? 'Wybierz sposób zasilania.' : 'Wybierz sposób montażu.',
      description: [
        powerChoices.length > 1 && 'Wybierz jeden sposób zasilania zgodny z miejscem użycia i napięciem instalacji.',
        mountChoices.length > 0 && 'Mocowanie dobierz do miejsca montażu.',
        'Elementy są sprzedawane osobno.',
      ].filter(Boolean).join(' '),
    }
  }
  if (choices.filter(condition => /^TC\d/.test(condition)).length > 1) {
    return {
      heading: 'Dobierz elementy do modelu terminala.',
      description: 'Wybierz elementy dla swojego modelu terminala. Elementy są sprzedawane osobno.',
    }
  }
  if (conditions.some(Boolean)) {
    return {
      heading: conditions.every(Boolean) ? 'Dobierz elementy do sposobu użycia.' : 'Sprawdź, których elementów potrzebujesz.',
      description: 'Elementy te są sprzedawane osobno. Przy każdym elemencie podajemy, kiedy jest potrzebny.',
    }
  }
  return {
    heading: `Aby korzystać ${subject}, potrzebujesz poniższych elementów.`,
    description: 'Elementy te nie są dołączone do zestawu.',
  }
}

/** Remove only the requirement lists rendered in the purchase box, not subsequent instructions. */
export function removeRequiredAccessoryBlocks(description: string): string {
  return description
    .replace(/\*\*Wymagane(?: dla [^*\n]+)? — sprzedawane osobno\*\*\r?\n\r?\n(?:- [^\n]+(?:\r?\n|$))+/g, '')
    .replace(/^(?:Dokup tylko te elementy, których jeszcze nie masz|Dobierz przewód do urządzenia lub stacji|Elementy są sprzedawane osobno\. Dobierz je do opisanej konfiguracji)\.\s*$/gm, '')
    .replace(/^## Co jest potrzebne do użycia\?\s*(?=## |$)/gm, '')
    .replace(/\n{3,}/g, '\n\n').trim()
}
