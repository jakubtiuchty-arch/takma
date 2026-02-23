import { NextRequest, NextResponse } from 'next/server'
import { createSerwisServiceClient } from '@/lib/serwis-supabase/server'
import { uploadRepairPhotos, validateFileSize, validateFileType } from '@/lib/serwis-supabase/storage'
import { sendRepairSubmittedEmail, sendRepairSubmittedAdminEmail } from '@/lib/email'
import { z } from 'zod'

function generateRepairNumber(): string {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat('pl-PL', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  const parts = formatter.formatToParts(now)
  const get = (type: string) => parts.find(p => p.type === type)?.value || ''

  return `${get('year')}${get('month')}${get('day')}${get('hour')}${get('minute')}`
}

const repairRequestSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  company: z.string().optional(),
  nip: z.string().optional(),
  deviceType: z.enum(['drukarka', 'terminal', 'skaner', 'tablet', 'akcesoria', 'inne']),
  deviceModel: z.string().min(1),
  serialNumber: z.string().optional(),
  purchaseDate: z.string().optional(),
  isWarranty: z.enum(['tak', 'nie', 'nie_wiem']),
  issueDescription: z.string().min(20),
  urgency: z.enum(['standard', 'express']),
  street: z.string().min(3),
  zipCode: z.string().regex(/^\d{2}-\d{3}$/),
  city: z.string().min(2),
  contactPhone: z.string().min(9),
  pickupDate: z.string().min(1),
  courierNotes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  const supabase = createSerwisServiceClient()

  try {
    const formData = await request.formData()

    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: (formData.get('company') as string) || undefined,
      nip: (formData.get('nip') as string) || undefined,
      deviceType: formData.get('deviceType') as 'drukarka' | 'terminal' | 'skaner' | 'tablet' | 'akcesoria' | 'inne',
      deviceModel: formData.get('deviceModel') as string,
      serialNumber: (formData.get('serialNumber') as string) || undefined,
      purchaseDate: (formData.get('purchaseDate') as string) || undefined,
      isWarranty: formData.get('isWarranty') as 'tak' | 'nie' | 'nie_wiem',
      issueDescription: formData.get('issueDescription') as string,
      urgency: formData.get('urgency') as 'standard' | 'express',
      street: formData.get('street') as string,
      zipCode: formData.get('zipCode') as string,
      city: formData.get('city') as string,
      contactPhone: formData.get('contactPhone') as string,
      pickupDate: formData.get('pickupDate') as string,
      courierNotes: (formData.get('courierNotes') as string) || undefined,
    }

    const validatedData = repairRequestSchema.parse(data)

    // Wyciagnij pliki
    const files: File[] = []
    for (const [key, value] of Array.from(formData.entries())) {
      if (key.startsWith('photo_') && value instanceof File) {
        if (!validateFileType(value)) {
          return NextResponse.json(
            { error: 'Nieprawidlowy typ pliku. Dozwolone: JPG, PNG, WEBP' },
            { status: 400 }
          )
        }
        if (!validateFileSize(value, 5)) {
          return NextResponse.json(
            { error: `Plik ${value.name} jest za duzy. Max: 5MB` },
            { status: 400 }
          )
        }
        files.push(value)
      }
    }

    // Utworz zgloszenie w Supabase (serwis-zebry)
    const isWarrantyRepair = validatedData.isWarranty === 'tak'
    const repairType = isWarrantyRepair ? 'warranty' : 'paid'
    const repairNumber = generateRepairNumber()

    const { data: newRequest, error: insertError } = await supabase
      .from('repair_requests')
      .insert({
        repair_number: repairNumber,
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company || null,
        nip: validatedData.nip || null,
        device_type: validatedData.deviceType,
        device_model: validatedData.deviceModel,
        serial_number: validatedData.serialNumber || null,
        purchase_date: validatedData.purchaseDate || null,
        is_warranty: isWarrantyRepair,
        repair_type: repairType,
        issue_description: validatedData.issueDescription,
        urgency: validatedData.urgency,
        photo_urls: [],
        street: validatedData.street,
        zip_code: validatedData.zipCode,
        city: validatedData.city,
        contact_phone: validatedData.contactPhone,
        pickup_date: validatedData.pickupDate,
        courier_notes: validatedData.courierNotes || null,
        status: 'nowe',
        source: 'takma',
      })
      .select()
      .single()

    if (insertError) {
      console.error('Database insert error:', insertError)
      return NextResponse.json(
        { error: 'Blad zapisu do bazy danych', details: insertError.message },
        { status: 500 }
      )
    }

    // Upload zdjec
    let photoUrls: string[] = []
    if (files.length > 0) {
      try {
        photoUrls = await uploadRepairPhotos(supabase, files, newRequest.id)

        const { error: updateError } = await supabase
          .from('repair_requests')
          .update({ photo_urls: photoUrls })
          .eq('id', newRequest.id)

        if (updateError) {
          console.error('Photo URLs update error:', updateError)
        }
      } catch (uploadError) {
        console.error('Photo upload error:', uploadError)
      }
    }

    // Wyslij emaile
    try {
      await sendRepairSubmittedEmail({
        to: validatedData.email,
        customerName: `${validatedData.firstName} ${validatedData.lastName}`,
        repairId: newRequest.id,
        repairNumber: newRequest.repair_number,
        deviceType: validatedData.deviceType,
        deviceModel: validatedData.deviceModel,
        problemDescription: validatedData.issueDescription,
        isWarranty: isWarrantyRepair,
      })

      const ADMIN_EMAILS = ['jakub.tiuchty@takma.com.pl', 'serwis@takma.com.pl']
      await sendRepairSubmittedAdminEmail({
        to: ADMIN_EMAILS,
        repairId: newRequest.id,
        repairNumber: newRequest.repair_number,
        customerName: `${validatedData.firstName} ${validatedData.lastName}`,
        customerEmail: validatedData.email,
        customerPhone: validatedData.phone,
        deviceType: validatedData.deviceType,
        deviceModel: validatedData.deviceModel,
        problemDescription: validatedData.issueDescription,
        isWarranty: isWarrantyRepair,
        priority: validatedData.urgency === 'express' ? 'high' : 'normal',
      })
    } catch (emailError) {
      console.error('Email sending error:', emailError)
    }

    return NextResponse.json({
      success: true,
      requestId: newRequest.id,
      photoCount: photoUrls.length,
    })

  } catch (error: unknown) {
    console.error('API Error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Nieprawidlowe dane formularza', details: error.issues },
        { status: 400 }
      )
    }

    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Blad serwera', details: message },
      { status: 500 }
    )
  }
}
