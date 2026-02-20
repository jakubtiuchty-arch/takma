import { ChevronDownIcon } from '@/components/ui/Icons'

const faqs = [
  {
    question: "Ile trwa naprawa terminala magazynowego w TAKMA?",
    answer: "Standardowa diagnoza sprzętu odbywa się w ciągu 48 godzin od dostarczenia urządzenia do naszego centrum serwisowego. Czas właściwej naprawy zależy od skomplikowania usterki i dostępności części zamiennych, jednak najczęściej nie przekracza 5-7 dni roboczych."
  },
  {
    question: "Czy naprawiacie urządzenia AutoID po gwarancji?",
    answer: "Tak, jako specjalistyczny serwis AutoID prowadzimy kompleksowe naprawy pogwarancyjne urządzeń marek takich jak Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen i Godex. Przed naprawą zawsze przygotowujemy darmową wycenę."
  },
  {
    question: "Jak zgłosić skaner kodów kreskowych lub drukarkę do naprawy?",
    answer: "Wystarczy wypełnić formularz na dole tej strony. Po wysłaniu formularza, skontaktujemy się z Tobą podając instrukcje dotyczące wysyłki uszkodzonego sprzętu i nadamy mu unikalny numer RMA."
  },
  {
    question: "Czy otrzymam gwarancję na naprawiony sprzęt?",
    answer: "Oczywiście. Na każdą wykonaną przez nas naprawę pogwarancyjną (oraz użyte oryginalne części zamienne) udzielamy od 3 do 6 miesięcy gwarancji, w zależności od rodzaju wymienionego podzespołu."
  }
]

export function FaqAEO() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-12">
          Najczęściej zadawane pytania (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-200 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer py-2 font-medium text-gray-900">
                <span className="text-lg">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </span>
              </summary>
              <div className="pt-4 text-gray-600 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
