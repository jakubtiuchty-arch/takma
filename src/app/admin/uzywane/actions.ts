'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import { slugFromName } from '@/lib/used-devices'
import { createSerwisServiceClient } from '@/lib/serwis-supabase/server'

const BUCKET = 'uzywane'

async function wymagajAdmina() {
  const session = await getSessionFromCookie()
  if (!session) throw new Error('Unauthorized')
}

/** Grosze z pola tekstowego: „1 299,50" i „1299.5" znaczą to samo. */
function groszeZPola(wartosc: FormDataEntryValue | null): number {
  const tekst = String(wartosc ?? '').replace(/\s/g, '').replace(',', '.')
  const liczba = Number(tekst)
  return Number.isFinite(liczba) ? Math.round(liczba * 100) : 0
}

function specyfikacjaZPola(wartosc: FormDataEntryValue | null) {
  // Jedna linia = jeden wiersz tabeli: „Ekran: 5 cali, 1280×720".
  const linie = String(wartosc ?? '')
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
    .map(l => {
      const i = l.indexOf(':')
      return i === -1 ? null : { nazwa: l.slice(0, i).trim(), wartosc: l.slice(i + 1).trim() }
    })
    .filter((x): x is { nazwa: string; wartosc: string } => !!x)
  return linie.length > 0 ? linie : undefined
}

/** Zdjęcia lecą do publicznego bucketa Supabase — te same, z których korzysta serwis. */
async function wgrajZdjecia(pliki: File[], slug: string): Promise<string[]> {
  const gotowe = pliki.filter(p => p && p.size > 0)
  if (gotowe.length === 0) return []

  const supabase = createSerwisServiceClient()
  const adresy: string[] = []

  for (let i = 0; i < gotowe.length; i++) {
    const plik = gotowe[i]
    const ext = (plik.name.split('.').pop() || 'jpg').toLowerCase()
    const sciezka = `${slug}/${Date.now()}-${i}.${ext}`
    const bytes = Buffer.from(await plik.arrayBuffer())
    const { error } = await supabase.storage.from(BUCKET).upload(sciezka, bytes, {
      contentType: plik.type || 'image/jpeg',
      upsert: true,
    })
    if (error) {
      console.error('[UsedDevice] Upload zdjęcia nie przeszedł:', error.message)
      continue
    }
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(sciezka)
    adresy.push(data.publicUrl)
  }

  return adresy
}

function daneZFormularza(form: FormData) {
  return {
    name: String(form.get('name') || '').trim(),
    brand: String(form.get('brand') || 'Zebra').trim(),
    category: String(form.get('category') || 'terminal'),
    partNumber: String(form.get('partNumber') || '').trim() || null,
    serialNumber: String(form.get('serialNumber') || '').trim() || null,
    conditionGrade: String(form.get('conditionGrade') || 'B'),
    conditionNote: String(form.get('conditionNote') || '').trim() || null,
    accessories: String(form.get('accessories') || '').trim() || null,
    description: String(form.get('description') || '').trim() || null,
    specs: specyfikacjaZPola(form.get('specs')) ?? undefined,
    priceNetto: groszeZPola(form.get('priceNetto')),
    newPriceNetto: groszeZPola(form.get('newPriceNetto')) || null,
    warrantyMonths: Number(form.get('warrantyMonths') || 6),
    status: String(form.get('status') || 'AVAILABLE'),
  }
}

export async function dodajUzywke(form: FormData) {
  await wymagajAdmina()

  const dane = daneZFormularza(form)
  if (!dane.name || dane.priceNetto <= 0) {
    throw new Error('Nazwa i cena są wymagane.')
  }

  // Slug musi być unikatowy — przy drugim TC57 dopisujemy kolejny numer.
  const bazowy = slugFromName(dane.name)
  let slug = bazowy
  for (let i = 2; await prisma.usedDevice.findUnique({ where: { slug } }); i++) {
    slug = `${bazowy}-${i}`
  }

  const images = await wgrajZdjecia(form.getAll('images') as File[], slug)

  await prisma.usedDevice.create({ data: { ...dane, slug, images } })

  revalidatePath('/admin/uzywane')
  revalidatePath('/uzywane')
  redirect('/admin/uzywane')
}

export async function zapiszUzywke(id: string, form: FormData) {
  await wymagajAdmina()

  const dane = daneZFormularza(form)
  const sztuka = await prisma.usedDevice.findUnique({ where: { id } })
  if (!sztuka) throw new Error('Nie ma takiego egzemplarza.')

  const nowe = await wgrajZdjecia(form.getAll('images') as File[], sztuka.slug)
  const zostawione = form.getAll('keepImages').map(String)

  await prisma.usedDevice.update({
    where: { id },
    data: {
      ...dane,
      images: [...zostawione, ...nowe],
      // Ręczne zdjęcie ze sprzedaży czyści ślad po zamówieniu, żeby lista
      // nie pokazywała numeru zamówienia przy sztuce, która wróciła do oferty.
      ...(dane.status === 'AVAILABLE' ? { orderNumber: null, soldAt: null } : {}),
      ...(dane.status === 'SOLD' && !sztuka.soldAt ? { soldAt: new Date() } : {}),
    },
  })

  revalidatePath('/admin/uzywane')
  revalidatePath('/uzywane')
  revalidatePath(`/uzywane/${sztuka.slug}`)
  redirect('/admin/uzywane')
}

export async function usunUzywke(id: string) {
  await wymagajAdmina()
  const sztuka = await prisma.usedDevice.findUnique({ where: { id } })
  if (!sztuka) return

  await prisma.usedDevice.delete({ where: { id } })

  // Zdjęcia idą razem z wpisem — inaczej bucket puchnie od sprzętu sprzed lat.
  try {
    const supabase = createSerwisServiceClient()
    const sciezki = sztuka.images
      .map(u => u.split(`/${BUCKET}/`)[1])
      .filter((s): s is string => !!s)
    if (sciezki.length > 0) await supabase.storage.from(BUCKET).remove(sciezki)
  } catch (e) {
    console.error('[UsedDevice] Nie udało się usunąć zdjęć:', (e as Error).message)
  }

  revalidatePath('/admin/uzywane')
  revalidatePath('/uzywane')
}

export async function zmienStatus(id: string, status: 'AVAILABLE' | 'RESERVED' | 'SOLD') {
  await wymagajAdmina()
  await prisma.usedDevice.update({
    where: { id },
    data: {
      status,
      ...(status === 'SOLD' ? { soldAt: new Date() } : { orderNumber: null, soldAt: null }),
    },
  })
  revalidatePath('/admin/uzywane')
  revalidatePath('/uzywane')
}
