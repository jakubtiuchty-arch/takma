import { ClipboardDocumentCheckIcon, TruckIcon, WrenchIcon, CheckIcon } from '@/components/ui/Icons'

const steps = [
  {
    name: 'Krok 1: Zgłoszenie RMA',
    description: 'Wypełnij krótki formularz zgłoszeniowy na dole tej strony, podając markę (np. Honeywell, Datalogic), model i opis usterki urządzenia. Otrzymasz numer zgłoszenia.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Krok 2: Wysyłka sprzętu',
    description: 'Bezpiecznie zapakuj urządzenie i wyślij je do naszego centrum serwisowego TAKMA. Możesz skorzystać z własnego kuriera lub poprosić nas o zamówienie odbioru.',
    icon: TruckIcon,
  },
  {
    name: 'Krok 3: Diagnoza i Wycena',
    description: 'Nasi inżynierowie dokładnie zbadają usterkę. W przypadku napraw pogwarancyjnych, w ciągu ok. 48 godzin otrzymasz darmowy, niezobowiązujący kosztorys naprawy.',
    icon: CheckIcon,
  },
  {
    name: 'Krok 4: Naprawa i Odesłanie',
    description: 'Po akceptacji kosztorysu przystępujemy do naprawy (korzystając z oryginalnych części). Sprawne, przetestowane urządzenie odsyłamy bezpośrednio do Twojej firmy.',
    icon: WrenchIcon,
  },
]

export function RmaProcessSteps() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Proces naprawy i zgłoszenia RMA – jak działamy?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Przejrzysty proces to podstawa. Sprawdź, jak krok po kroku realizujemy zgłoszenia serwisowe.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 hidden md:flex items-center justify-center" aria-hidden="true">
            <div className="h-0.5 w-full bg-gray-200 absolute top-1/2 -translate-y-1/2 left-0 z-0"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="relative flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white border-4 border-gray-100 shadow-md flex items-center justify-center mb-6 relative z-10 group hover:border-primary-500 transition-colors">
                  <step.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.name}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
