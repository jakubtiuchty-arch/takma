import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Produkt przeniesiony',
  description: 'Przebudowujemy stronę takma.com.pl. Produkty dostępne — skontaktuj się z nami po ofertę.',
  robots: 'noindex, follow',
}

export default function ProduktPrzeniesiony() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6">
          <Search className="w-10 h-10 text-orange-600" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Przebudowujemy stronę
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Strona, której szukasz, została przeniesiona w ramach modernizacji sklepu.
          Wszystkie produkty mamy nadal w ofercie — skontaktuj się z nami, a przygotujemy indywidualną wycenę.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <Mail className="w-5 h-5" />
            Skontaktuj się z nami
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/katalog"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 transition-colors text-lg"
          >
            <Search className="w-5 h-5" />
            Zobacz katalog
          </Link>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Szybki kontakt</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+48717221453" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">71 722 14 53</span>
            </a>
            <a href="mailto:takma@takma.com.pl" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">takma@takma.com.pl</span>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            25+ lat doświadczenia w branży AutoID. Doradzimy i dobierzemy odpowiednie urządzenie.
          </p>
        </div>
      </div>
    </div>
  )
}
