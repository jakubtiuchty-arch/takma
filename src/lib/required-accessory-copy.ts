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
