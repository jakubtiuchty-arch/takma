export function ServiceManagerContact() {
  return (
    <section className="bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lewa kolumna — tekst */}
          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              Naszym celem jest ścisła współpraca z klientem w zakresie serwisowania
              sprzętu, której efektem ma być zmniejszenie ilości napraw.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Zawsze proponujemy naszym klientom wcześniejsze nawiązanie kontaktu
              z działem serwisu — przed przesłaniem sprzętu. Bardzo często pozwala to na
              usunięcie usterki — pracownik serwisu instruując użytkownika lepiej
              rozpoznaje i diagnozuje usterkę.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Kontakt bezpośredni z działem serwisu TAKMA — przed wysyłką sprzętu.
            </p>
          </div>

          {/* Prawa kolumna — wizytówka */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">
              Krzysztof Wójcik
            </h3>
            <p className="mt-1 text-base font-medium text-lime-600">
              Service Manager
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:serwis@takma.com.pl" className="text-gray-900 hover:text-lime-600 transition-colors">
                  serwis@takma.com.pl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+48601619898" className="text-gray-900 hover:text-lime-600 transition-colors">
                  +48 601 619 898
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+48781712900" className="text-gray-900 hover:text-lime-600 transition-colors">
                  +48 781 71 29 wew. 103
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
