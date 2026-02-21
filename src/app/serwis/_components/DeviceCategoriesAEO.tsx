import { PrinterIcon, SmartphoneIcon, ScanIcon, CheckIcon } from '@/components/ui/Icons'

const categories = [
  {
    title: 'Serwis drukarek etykiet i opasek',
    icon: PrinterIcon,
    description: 'Diagnostyka i naprawa drukarek termicznych i termotransferowych — biurkowych, przemysłowych i mobilnych.',
    brands: ['Zebra', 'Citizen', 'Godex', 'SATO', 'TSC', 'Brother'],
    keywords: [
      'wymiana głowicy drukującej (printhead)',
      'wymiana wałka dociskowego (platen roller)',
      'naprawa płyty głównej',
      'błąd kalibracji nośnika (Media Out)',
      'naprawa czujników szczeliny i czarnego znaku'
    ]
  },
  {
    title: 'Naprawa terminali mobilnych i tabletów',
    icon: SmartphoneIcon,
    description: 'Przywracamy do życia terminale magazynowe PDA i tablety przemysłowe po upadkach i zalaniach.',
    brands: ['Zebra TC/MC/EC', 'Honeywell CT/CK/EDA', 'Datalogic Memor', 'M3 Mobile'],
    keywords: [
      'wymiana rozbitego ekranu dotykowego (digitizera)',
      'naprawa uszkodzonego złącza ładowania',
      'wymiana modułu skanującego (imager 1D/2D)',
      'problemy z baterią i szybkim rozładowywaniem',
      'reinstalacja systemu Android / Windows CE'
    ]
  },
  {
    title: 'Serwis skanerów kodów kreskowych',
    icon: ScanIcon,
    description: 'Naprawiamy czytniki ręczne, bezprzewodowe oraz stacjonarne skanery kodów.',
    brands: ['Zebra', 'Honeywell Voyager/Xenon', 'Datalogic Gryphon', 'Newland HR'],
    keywords: [
      'naprawa przycisku spustu (triggera)',
      'wymiana uszkodzonego kabla komunikacyjnego',
      'problemy z łącznością Bluetooth i parowaniem',
      'kalibracja układu optycznego i silnika skanera',
      'skaner pika, ale nie przesyła danych (Enter/Suffix)'
    ]
  }
]

export function DeviceCategoriesAEO() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Co naprawiamy? Zakres usług serwisowych
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Świadczymy specjalistyczne naprawy sprzętowe i programowe. Oferujemy darmową wstępną wycenę diagnozy urządzeń poza okresem gwarancyjnym.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center mb-6">
                <category.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {category.brands.map((brand) => (
                  <span key={brand} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {brand}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Najczęstsze naprawy:</h4>
                <ul className="space-y-3">
                  {category.keywords.map((keyword, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
