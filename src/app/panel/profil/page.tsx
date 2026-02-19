'use client'

import { useState, useEffect } from 'react'
import { Button, Input, Checkbox } from '@/components/ui'

interface CustomerProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  company: string
  nip: string | null
  phone: string | null
  address: string | null
  shippingAddress: string | null
}

export default function ProfilPage() {
  const [profile, setProfile] = useState<CustomerProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Editable fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [hasDifferentShipping, setHasDifferentShipping] = useState(false)
  const [shippingAddress, setShippingAddress] = useState('')

  // Password change
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordSaving, setPasswordSaving] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    try {
      const res = await fetch('/api/panel/profil')
      if (!res.ok) throw new Error('Blad pobierania danych')
      const data: CustomerProfile = await res.json()
      setProfile(data)
      setFirstName(data.firstName)
      setLastName(data.lastName)
      setPhone(data.phone || '')
      setAddress(data.address || '')
      if (data.shippingAddress && data.shippingAddress !== data.address) {
        setHasDifferentShipping(true)
        setShippingAddress(data.shippingAddress)
      }
    } catch {
      setMessage({ type: 'error', text: 'Nie udalo sie pobrac danych profilu' })
    } finally {
      setLoading(false)
    }
  }

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    try {
      const res = await fetch('/api/panel/profil', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: phone || null,
          address: address || null,
          shippingAddress: hasDifferentShipping ? (shippingAddress || null) : (address || null),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Blad zapisu')
      }

      const updated: CustomerProfile = await res.json()
      setProfile(updated)
      setMessage({ type: 'success', text: 'Dane zostaly zapisane' })
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Blad zapisu danych' })
    } finally {
      setSaving(false)
    }
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault()
    setPasswordMessage(null)

    if (newPassword.length < 8) {
      setPasswordMessage({ type: 'error', text: 'Nowe haslo musi miec minimum 8 znakow' })
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage({ type: 'error', text: 'Nowe hasla nie sa identyczne' })
      return
    }

    setPasswordSaving(true)

    try {
      const res = await fetch('/api/panel/zmien-haslo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Blad zmiany hasla')
      }

      setPasswordMessage({ type: 'success', text: 'Haslo zostalo zmienione' })
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      setPasswordMessage({ type: 'error', text: err instanceof Error ? err.message : 'Blad zmiany hasla' })
    } finally {
      setPasswordSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin h-8 w-8 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Profil firmy</h1>

      {/* Komunikat */}
      {message && (
        <div
          className={`rounded-lg px-4 py-3 text-sm font-medium ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSaveProfile} className="space-y-6">
        {/* Dane firmy (readonly) */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Dane firmy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Firma"
              value={profile?.company || ''}
              disabled
              readOnly
            />
            <Input
              label="NIP"
              value={profile?.nip || 'Nie podano'}
              disabled
              readOnly
            />
            <div className="sm:col-span-2">
              <Input
                label="Email"
                value={profile?.email || ''}
                disabled
                readOnly
                helperText="Aby zmienic email, skontaktuj sie z opiekunem klienta"
              />
            </div>
          </div>
        </div>

        {/* Dane kontaktowe (edytowalne) */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Dane kontaktowe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Imie"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              label="Nazwisko"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className="sm:col-span-2">
              <Input
                label="Telefon"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+48 123 456 789"
              />
            </div>
          </div>
        </div>

        {/* Adres siedziby */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Adres siedziby</h2>
          <Input
            label="Adres (ulica, numer, kod pocztowy, miasto)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="ul. Przykladowa 10, 00-001 Warszawa"
          />
        </div>

        {/* Adres dostawy */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Adres dostawy</h2>
          <Checkbox
            label="Inny niz adres siedziby"
            checked={hasDifferentShipping}
            onChange={(e) => setHasDifferentShipping(e.target.checked)}
          />
          {hasDifferentShipping && (
            <div className="mt-4">
              <Input
                label="Adres dostawy (ulica, numer, kod pocztowy, miasto)"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="ul. Magazynowa 5, 00-002 Warszawa"
              />
            </div>
          )}
        </div>

        <Button type="submit" isLoading={saving} fullWidth>
          Zapisz zmiany
        </Button>
      </form>

      {/* Zmiana hasla */}
      <form onSubmit={handleChangePassword} className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Zmiana hasla</h2>

        {passwordMessage && (
          <div
            className={`rounded-lg px-4 py-3 text-sm font-medium mb-4 ${
              passwordMessage.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {passwordMessage.text}
          </div>
        )}

        <div className="space-y-4">
          <Input
            label="Aktualne haslo"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <Input
            label="Nowe haslo"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            helperText="Minimum 8 znakow"
          />
          <Input
            label="Powtorz nowe haslo"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="mt-6">
          <Button type="submit" variant="secondary" isLoading={passwordSaving}>
            Zmien haslo
          </Button>
        </div>
      </form>
    </div>
  )
}
