'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

export function ServiceContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [loadedAt] = useState(() => Date.now())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = (formData.get('phone') as string) || ''
    const producent = formData.get('producent') as string
    const model = formData.get('model') as string
    const sn = formData.get('sn') as string
    const opis = formData.get('opis') as string

    const message = [
      `[Zgłoszenie serwisowe RMA]`,
      ``,
      `Producent: ${producent}`,
      `Model: ${model}`,
      `Numer seryjny: ${sn}`,
      ``,
      `Opis usterki:`,
      opis,
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          reason: 'service',
          message,
          _ts: loadedAt,
          _hp: '',
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Błąd wysyłania zgłoszenia')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Wystąpił błąd. Spróbuj ponownie.')
      setStatus('error')
    }
  }

  return (
    <section id="zgloszenie" className="bg-white py-16 sm:py-24 border-t border-gray-100 scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Zgłoś usterkę urządzenia AutoID (RMA)
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Masz sprzęt marki Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen lub Godex? Wypełnij formularz, a&nbsp;TAKMA zajmie się resztą.
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
            {status === 'error' && errorMsg && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700 ring-1 ring-inset ring-red-600/20">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
                <Input id="name" name="name" required placeholder="Jan Kowalski" />
              </div>
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
                  <option value="TSC">TSC</option>
                  <option value="SATO">SATO</option>
                  <option value="Inne">Inne (wpisz w uwagach)</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Dla urządzeń Zebra przejdź na <a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="text-primary-600 hover:underline">serwis-zebry.pl</a></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model urządzenia *</label>
                <Input id="model" name="model" required placeholder="np. ScanPal EDA51" />
              </div>
              <div>
                <label htmlFor="sn" className="block text-sm font-medium text-gray-700 mb-1">Numer seryjny (S/N) *</label>
                <Input id="sn" name="sn" required placeholder="Odnajdziesz go na etykiecie znamionowej" />
              </div>
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
