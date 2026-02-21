import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serwis drukarek etykiet, terminali i skanerów',
  description: 'Serwis pogwarancyjny urządzeń AutoID. Darmowa diagnostyka 48h. Autoryzowany serwis Zebra. Honeywell, Datalogic, Brother, M3 Mobile. Cała Polska.',
  openGraph: {
    title: 'Serwis drukarek etykiet, terminali i skanerów | TAKMA',
    description: 'Serwis pogwarancyjny urządzeń AutoID. Darmowa diagnostyka 48h. Autoryzowany serwis Zebra. Honeywell, Datalogic, Brother, M3 Mobile. Cała Polska.',
    type: 'website',
    url: 'https://takma.com.pl/serwis',
  },
  alternates: {
    canonical: 'https://takma.com.pl/serwis',
  },
}

export default function SerwisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqEntries = [
    {
      name: "Dlaczego drukarka etykiet przepuszcza puste strony?",
      text: "Najczęstszą przyczyną jest rozkalibrowany czujnik przerw (gap sensor), zabrudzenie czujnika lub użycie niewłaściwych materiałów eksploatacyjnych. Wymaga to autokalibracji sprzętu lub interwencji serwisu w celu naprawy optyki czujnika."
    },
    {
      name: "Terminal Honeywell CT40/EDA51 nie ładuje baterii",
      text: "W terminalach mobilnych Honeywell serii CT i EDA przyczyną może być uszkodzenie złącza ładowania, wyeksploatowanie pinów w stacji dokującej lub zużycie baterii. Serwis mierzy rezystancję złącza i przelutowuje moduł zasilania. Dotyczy również terminali Honeywell CK65, Dolphin i ScanPal."
    },
    {
      name: "Skaner Datalogic Gryphon / Honeywell Voyager pika, ale nie przesyła danych",
      text: "Zazwyczaj problem konfiguracji — brakuje sufiksu. W skanerach Datalogic Gryphon i Honeywell Voyager/Xenon można to naprawić skanując kod konfiguracyjny z instrukcji producenta. W przypadku poważniejszych problemów z modułem komunikacji wymagana jest diagnostyka serwisowa."
    },
    {
      name: "Drukarka wydrukowała etykietę z białymi, pionowymi pasami",
      text: "Pionowe nienadrukowane linie oznaczają wypalone punkty grzewcze na głowicy drukującej. Usterka wymaga fizycznej wymiany głowicy. Dobieramy i wymieniamy głowice do drukarek termicznych i termotransferowych."
    },
    {
      name: "Ekran dotykowy terminala Datalogic Memor / M3 Mobile nie reaguje na dotyk",
      text: "Uszkodzenie digitizera w terminalach Datalogic Memor 10/20/30/35, Skorpio X5 czy M3 Mobile następuje w wyniku upadku lub ekstremalnych temperatur. Naprawa polega na wymianie panelu LCD + Digitizer z oceną szczelności obudowy IP65/IP67."
    },
    {
      name: "Drukarka etykiet Godex / Citizen grzeje się i wyłącza w trakcie druku",
      text: "Przegrzewanie drukarek Godex (G500, RT700) i Citizen (CL-S, CL-E) może wskazywać na uszkodzony zasilacz, zablokowany wentylator lub nieaktualny firmware. Sprawdzamy napięcie zasilania, drożność wentylacji i aktualizujemy oprogramowanie. Dotyczy również drukarek TSC i SATO."
    },
    {
      name: "Terminal mobilny nie łączy się z siecią Wi-Fi",
      text: "Problem może wynikać z uszkodzonego modułu WLAN, nieprawidłowej konfiguracji profilu sieci lub nieaktualnych sterowników radiowych. Diagnozujemy moduł antenowy i w razie potrzeby wymieniamy podzespół."
    },
    {
      name: "Skaner Newland HR / Honeywell Xenon nie odczytuje kodów QR / 2D",
      text: "W skanerach Newland HR i Honeywell Xenon 1950/1900 brak odczytu kodów 2D (QR, DataMatrix) może wynikać z wyłączonej symbologii, zabrudzenia okna imager'a lub uszkodzenia modułu odczytującego. Diagnostyka serwisowa modułu imager."
    },
    {
      name: "Ile trwa naprawa terminala magazynowego w TAKMA?",
      text: "Standardowa diagnoza odbywa się w ciągu 48 godzin od dostarczenia urządzenia. Czas naprawy zależy od dostępności części, najczęściej nie przekracza 5-7 dni roboczych."
    },
    {
      name: "Ile kosztuje naprawa drukarki etykiet?",
      text: "Diagnostyka jest darmowa przy zleceniu naprawy. Orientacyjne ceny: wymiana głowicy biurkowej od 430 PLN netto, przemysłowej od 1 600 PLN netto, wałka dociskowego od 150 PLN netto, płyty głównej od 300 PLN netto."
    },
    {
      name: "Czy naprawiacie urządzenia AutoID po gwarancji?",
      text: "Tak, prowadzimy kompleksowe naprawy pogwarancyjne urządzeń marek Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen i Godex. Jako autoryzowany serwis Zebra mamy bezpośredni dostęp do oryginalnych części."
    },
    {
      name: "Czy naprawiacie urządzenia z całej Polski?",
      text: "Tak, obsługujemy klientów z całej Polski — Warszawa, Kraków, Poznań, Łódź, Gdańsk, Katowice i inne miasta. Urządzenie można dostarczyć osobiście do Wrocławia lub wysłać kurierem. Po naprawie odsyłamy sprzęt na nasz koszt (przy naprawach powyżej 200 PLN netto)."
    },
    {
      name: "Czym różni się serwis gwarancyjny od pogwarancyjnego?",
      text: "Serwis gwarancyjny pokrywa producent, my jako autoryzowany partner realizujemy naprawę. Serwis pogwarancyjny — klient pokrywa koszt naprawy i części, ale zyskuje naszą gwarancję 3-6 miesięcy."
    },
    {
      name: "Jakie są najczęstsze usterki drukarek etykiet Zebra?",
      text: "Najczęstsze usterki: zużyta głowica (białe pasy), rozkalibrowany czujnik przerw (puste etykiety), uszkodzony wałek dociskowy (nierówny nadruk), problem z zasilaczem i zużyte łożyska nawijaka taśmy."
    },
    {
      name: "Co to jest kontrakt serwisowy Zebra OneCare?",
      text: "Zebra OneCare to program rozszerzonych usług serwisowych producenta obejmujący naprawy gwarancyjne, wymianę urządzeń i wsparcie techniczne. Oferujemy sprzedaż i obsługę kontraktów OneCare Essential, Select i SV."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://takma.com.pl/#organization",
        "name": "TAKMA Tadeusz Tiuchty",
        "alternateName": "TAKMA",
        "url": "https://takma.com.pl",
        "logo": "https://takma.com.pl/images/takma_logo.png",
        "image": "https://takma.com.pl/images/hero_serwis.jpeg",
        "description": "Profesjonalny serwis pogwarancyjny urządzeń AutoID — drukarek etykiet, terminali mobilnych i skanerów kodów kreskowych. Autoryzowany serwis Zebra Technologies.",
        "telephone": "+48607819688",
        "email": "takma@takma.com.pl",
        "founder": {
          "@type": "Person",
          "name": "Tadeusz Tiuchty"
        },
        "employee": {
          "@type": "Person",
          "name": "Krzysztof Wójcik",
          "jobTitle": "Service Manager",
          "telephone": "+48601619898",
          "email": "serwis@takma.com.pl"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Poświęcka 1a",
          "addressLocality": "Wrocław",
          "postalCode": "51-128",
          "addressRegion": "dolnośląskie",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.1385,
          "longitude": 17.0578
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:30",
          "closes": "15:30"
        },
        "areaServed": [
          { "@type": "Country", "name": "Polska" },
          { "@type": "City", "name": "Wrocław" },
          { "@type": "City", "name": "Warszawa" },
          { "@type": "City", "name": "Kraków" },
          { "@type": "City", "name": "Poznań" },
          { "@type": "City", "name": "Łódź" },
          { "@type": "City", "name": "Gdańsk" },
          { "@type": "City", "name": "Katowice" }
        ],
        "knowsAbout": [
          "Naprawa drukarek etykiet",
          "Serwis terminali mobilnych",
          "Naprawa skanerów kodów kreskowych",
          "Serwis urządzeń AutoID",
          "Wymiana głowic drukujących",
          "Kalibracja czujników drukarek"
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Autoryzowany serwis",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Zebra Technologies",
            "url": "https://www.zebra.com"
          }
        },
        "priceRange": "PLN",
        "foundingDate": "2001"
      },
      {
        "@type": "Service",
        "serviceType": "Naprawa urządzeń AutoID i IT",
        "provider": {
          "@id": "https://takma.com.pl/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Polska"
        },
        "description": "Profesjonalny serwis pogwarancyjny drukarek etykiet, terminali mobilnych i skanerów kodów kreskowych. Autoryzowany serwis Zebra Technologies. Naprawiamy: Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen, Godex, TSC, Sato.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Usługi serwisowe AutoID",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Naprawa drukarek etykiet",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wymiana głowicy drukującej (biurkowe)", "description": "Wymiana głowicy w drukarkach biurkowych Zebra, Honeywell, Godex" }, "priceSpecification": { "@type": "PriceSpecification", "price": "430", "priceCurrency": "PLN", "minPrice": "430", "description": "Cena netto od" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wymiana głowicy drukującej (przemysłowe)", "description": "Wymiana głowicy w drukarkach przemysłowych Zebra ZT, 105SL, Xi4" }, "priceSpecification": { "@type": "PriceSpecification", "price": "1600", "priceCurrency": "PLN", "minPrice": "1600", "description": "Cena netto od" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wymiana wałka dociskowego", "description": "Wymiana platen roller w drukarkach termicznych i termotransferowych" }, "priceSpecification": { "@type": "PriceSpecification", "price": "150", "priceCurrency": "PLN", "minPrice": "150", "description": "Cena netto od" } }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Naprawa terminali mobilnych",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Naprawa ekranu terminala", "description": "Wymiana LCD i digitizera w terminalach Zebra TC, MC, Honeywell CT, CK" }, "priceSpecification": { "@type": "PriceSpecification", "price": "350", "priceCurrency": "PLN", "minPrice": "350", "description": "Cena netto od" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wymiana baterii", "description": "Wymiana baterii w terminalach mobilnych wszystkich marek" }, "priceSpecification": { "@type": "PriceSpecification", "price": "120", "priceCurrency": "PLN", "minPrice": "120", "description": "Cena netto od" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Naprawa modułu Wi-Fi/WLAN", "description": "Diagnostyka i naprawa modułów komunikacji bezprzewodowej" } }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Naprawa skanerów kodów",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Naprawa modułu skanującego", "description": "Wymiana modułu imager/laser w skanerach ręcznych i stacjonarnych" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Naprawa płyty głównej", "description": "Diagnostyka i naprawa elektroniki skanerów kodów kreskowych" }, "priceSpecification": { "@type": "PriceSpecification", "price": "300", "priceCurrency": "PLN", "minPrice": "300", "description": "Cena netto od" } }
              ]
            }
          ]
        }
      },
      {
        "@type": "HowTo",
        "name": "Jak zgłosić urządzenie do naprawy w TAKMA (proces RMA)",
        "description": "Przejrzysty 4-krokowy proces zgłoszenia urządzenia AutoID do serwisu TAKMA.",
        "totalTime": "P7D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Zgłoszenie RMA",
            "text": "Wypełnij formularz zgłoszeniowy na stronie serwisu, podając markę, model i opis usterki urządzenia. Otrzymasz numer zgłoszenia i dostęp do panelu serwisowego."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Odbiór sprzętu",
            "text": "Serwis TAKMA zamawia kuriera pod odbiór sprzętu ze wskazanego adresu. Bezpieczny odbiór odbywa się zazwyczaj w ciągu 24 godzin."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Diagnoza i wycena",
            "text": "Dostarczony sprzęt jest diagnozowany przez inżynierów w ciągu 48 godzin. Darmowa wycena naprawy jest przesyłana w panelu klienta. Płatność online lub pro forma."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Naprawa i odesłanie",
            "text": "Po akceptacji kosztorysu przystępujemy do naprawy (5-7 dni roboczych). Naprawione urządzenie odsyłamy kurierem z gwarancją 3-6 miesięcy."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona główna",
            "item": "https://takma.com.pl"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Serwis",
            "item": "https://takma.com.pl/serwis"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "dateModified": "2026-02-21",
        "mainEntity": faqEntries.map(faq => ({
          "@type": "Question",
          "name": faq.name,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.text
          }
        }))
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
