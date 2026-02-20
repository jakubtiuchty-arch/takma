'use client'

import { useState, useEffect, useRef } from 'react'
import { ClipboardDocumentCheckIcon, TruckIcon, WrenchIcon, CheckIcon } from '@/components/ui/Icons'

const steps = [
  {
    name: 'Krok 1: Zgłoszenie RMA',
    description: 'Wypełnij formularz zgłoszeniowy na dole tej strony, podając markę (np. Honeywell, Datalogic), model i opis usterki urządzenia. Otrzymasz numer zgłoszenia i dostęp do panelu serwisowego.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Krok 2: Odbiór sprzętu',
    description: 'Serwis TAKMA zamawia kuriera pod odbiór sprzętu ze wskazanego w formularzu adresu. Bezpieczny odbiór odbywa się zazwyczaj w ciągu 24h.',
    icon: TruckIcon,
  },
  {
    name: 'Krok 3: Diagnoza i Wycena',
    description: 'Dostarczony sprzęt jest dokładnie diagnozowany przez naszych inżynierów. Wycena naprawy jest przesyłana bezpośrednio w Twoim panelu. Płatność online lub pro forma.',
    icon: CheckIcon,
  },
  {
    name: 'Krok 4: Naprawa i Odesłanie',
    description: 'Po akceptacji kosztorysu niezwłocznie przystępujemy do naprawy. W przypadku rezygnacji – bezpiecznie odsyłamy urządzenie z powrotem do Ciebie.',
    icon: WrenchIcon,
  },
]

export function RmaProcessSteps() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Przestajemy obserwować po pierwszej aktywacji animacji
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        }
      },
      {
        threshold: 0.2, // Aktywuj gdy 20% sekcji jest widoczne na ekranie
        rootMargin: '50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
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
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, stepIdx) => (
              <div 
                key={step.name} 
                className={`relative flex flex-col items-center text-center transition-all duration-[1200ms] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${isVisible ? stepIdx * 600 : 0}ms` }}
              >
                <div className={`h-16 w-16 rounded-full bg-white border-4 shadow-md flex items-center justify-center mb-6 relative z-10 transition-all duration-[1000ms] ${isVisible ? 'border-blue-500 scale-100' : 'border-gray-200 scale-90'}`}>
                  <step.icon className={`h-7 w-7 transition-colors duration-[1000ms] ${isVisible ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
