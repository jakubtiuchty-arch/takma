'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

export function ServiceContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    // Symulacja wysyłki - to można w przyszłości podpiąć pod API
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section id="zgloszenie" className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Zgłoś usterkę urządzenia AutoID (RMA)
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Masz sprzęt marki Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen lub Godex? Wypełnij poniższy formularz, a my zajmiemy się resztą.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-xl bg-green-50 p-8 text-center ring-1 ring-inset ring-green-600/20">
            <h3 className="text-xl font-bold text-green-800 mb-2">Dziękujemy za zgłoszenie!</h3>
            <p className="text-green-700">Wkrótce skontaktujemy się z Tobą na podany adres e-mail, przekazując instrukcje dotyczące wysyłki urządzenia (numer RMA).</p>
            <Button 
              className="mt-6" 
              variant="secondary" 
              onClick={() => setStatus('idle')}
            >
              Wyślij kolejne zgłoszenie
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="producent" className="block text-sm font-medium text-gray-700 mb-1">Marka / Producent *</label>
                <select 
                  id="producent" 
                  name="producent" 
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                >
                  <option value="" disabled>Wybierz producenta...</option>
                  <option value="Honeywell">Honeywell</option>
                  <option value="Datalogic">Datalogic</option>
                  <option value="Brother">Brother</option>
                  <option value="M3 Mobile">M3 Mobile</option>
                  <option value="Newland">Newland</option>
                  <option value="Citizen">Citizen</option>
                  <option value="Godex">Godex</option>
                  <option value="Inne">Inne (wpisz w uwagach)</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Dla urządzeń Zebra przejdź na serwis-zebry.pl</p>
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model urządzenia *</label>
                <Input id="model" name="model" required placeholder="np. ScanPal EDA51" />
              </div>
            </div>

            <div>
              <label htmlFor="sn" className="block text-sm font-medium text-gray-700 mb-1">Numer seryjny (S/N) *</label>
              <Input id="sn" name="sn" required placeholder="Odnajdziesz go na etykiecie znamionowej" />
            </div>

            <div>
              <label htmlFor="opis" className="block text-sm font-medium text-gray-700 mb-1">Opis usterki / objawy *</label>
              <Textarea 
                id="opis" 
                name="opis" 
                rows={4} 
                required 
                placeholder="Np. Skaner przestał reagować na przycisk spustu po upadku." 
              />
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h4 className="text-base font-medium text-gray-900 mb-4">Dane kontaktowe</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail *</label>
                  <Input id="email" name="email" type="email" required placeholder="twoj@email.pl" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numer telefonu</label>
                  <Input id="phone" name="phone" type="tel" placeholder="+48..." />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full md:w-auto">
                {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zgłoszenie RMA'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
