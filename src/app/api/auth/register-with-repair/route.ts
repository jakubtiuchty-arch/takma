import { NextResponse } from 'next/server'
import { createSerwisServiceClient } from '@/lib/serwis-supabase/server'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email('Nieprawidlowy email'),
  password: z.string().min(8, 'Haslo musi miec minimum 8 znakow'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  repairId: z.string().uuid('Nieprawidlowy ID zgloszenia'),
  marketingConsent: z.boolean().optional().default(false),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = registerSchema.parse(body)

    const supabaseAdmin = createSerwisServiceClient()

    // 1. Create user in Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: validatedData.email,
      password: validatedData.password,
      email_confirm: true,
      user_metadata: {
        first_name: validatedData.firstName || '',
        last_name: validatedData.lastName || '',
        phone: validatedData.phone || '',
        marketing_consent: validatedData.marketingConsent,
        source: 'takma',
      },
    })

    if (authError) {
      console.error('[REGISTER] Auth error:', authError)
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      )
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: 'Nie udalo sie utworzyc uzytkownika' },
        { status: 500 }
      )
    }

    // 2. Link repair request with user_id
    const { error: updateError } = await supabaseAdmin
      .from('repair_requests')
      .update({ user_id: authData.user.id })
      .eq('id', validatedData.repairId)

    if (updateError) {
      console.error('[REGISTER] Error linking repair:', updateError)
    }

    // 3. Update/create profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .upsert({
        id: authData.user.id,
        email: validatedData.email,
        first_name: validatedData.firstName || null,
        last_name: validatedData.lastName || null,
        phone: validatedData.phone || null,
      }, {
        onConflict: 'id'
      })

    if (profileError) {
      console.error('[REGISTER] Error updating profile:', profileError)
    }

    return NextResponse.json({
      success: true,
      user: {
        id: authData.user.id,
        email: authData.user.email,
      },
      message: 'Konto utworzone pomyslnie',
    })
  } catch (error) {
    console.error('[REGISTER] Unexpected error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Wystapil blad podczas rejestracji' },
      { status: 500 }
    )
  }
}
