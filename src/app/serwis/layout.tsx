import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serwis drukarek etykiet i terminali AutoID | TAKMA',
  description: 'Profesjonalny serwis urządzeń AutoID. Naprawa terminali mobilnych, skanerów i drukarek. Autoryzowany serwis Zebra. Obsługujemy Honeywell, Datalogic i inne.',
  openGraph: {
    title: 'Serwis drukarek etykiet i terminali AutoID | TAKMA',
    description: 'Profesjonalny serwis urządzeń AutoID. Naprawa terminali mobilnych, skanerów i drukarek. Autoryzowany serwis Zebra. Obsługujemy Honeywell, Datalogic i inne.',
    type: 'website',
  }
}

export default function SerwisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Naprawa urządzeń AutoID i IT",
        "provider": {
          "@type": "Organization",
          "name": "TAKMA",
          "url": "https://takma.pl"
        },
        "areaServed": "PL",
        "description": "Profesjonalny serwis pogwarancyjny drukarek etykiet, terminali mobilnych i skanerów kodów kreskowych (Honeywell, Datalogic, Brother, M3 Mobile)."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego drukarka etykiet przepuszcza puste strony?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęstszą przyczyną jest rozkalibrowany czujnik przerw (gap sensor) lub użycie niewłaściwych materiałów eksploatacyjnych. Wymaga to autokalibracji sprzętu lub interwencji serwisu w celu naprawy optyki czujnika."
            }
          },
          {
            "@type": "Question",
            "name": "Ile trwa naprawa terminala magazynowego w TAKMA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowa diagnoza sprzętu odbywa się w ciągu 48 godzin od dostarczenia urządzenia do naszego centrum serwisowego. Czas naprawy zależy od dostępności części, najczęściej nie przekracza 5-7 dni roboczych."
            }
          },
          {
            "@type": "Question",
            "name": "Czy naprawiacie urządzenia AutoID po gwarancji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, prowadzimy kompleksowe naprawy pogwarancyjne urządzeń marek takich jak Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen i Godex."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* Wstrzykiwanie danych strukturalnych dla AI i wyszukiwarek */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
