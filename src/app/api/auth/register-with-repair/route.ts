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
    let user: { id: string; email?: string } | null = null

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
      // Konto moglo juz powstac przez auto-rejestracje przy zgloszeniu —
      // wtedy nadpisz wygenerowane haslo haslem wybranym przez klienta,
      // ale tylko na koncie podpietym do tego zgloszenia i bez zadnego logowania
      const emailExists = authError.code === 'email_exists' ||
        authError.message.toLowerCase().includes('already been registered')

      if (emailExists) {
        const { data: repair } = await supabaseAdmin
          .from('repair_requests')
          .select('user_id, email')
          .eq('id', validatedData.repairId)
          .maybeSingle()

        if (repair?.user_id) {
          const { data: existingUser } = await supabaseAdmin.auth.admin.getUserById(repair.user_id)
          const u = existingUser?.user
          if (
            u &&
            u.email?.toLowerCase() === validatedData.email.toLowerCase() &&
            !u.last_sign_in_at
          ) {
            const { data: updated, error: pwError } = await supabaseAdmin.auth.admin.updateUserById(u.id, {
              password: validatedData.password,
              user_metadata: {
                ...u.user_metadata,
                marketing_consent: validatedData.marketingConsent,
                source: 'takma',
              },
            })
            if (!pwError && updated.user) {
              user = updated.user
            }
          }
        }
      }

      if (!user) {
        console.error('[REGISTER] Auth error:', authError)
        return NextResponse.json(
          { error: authError.message },
          { status: 400 }
        )
      }
    } else {
      user = authData.user
    }

    if (!user) {
      return NextResponse.json(
        { error: 'Nie udalo sie utworzyc uzytkownika' },
        { status: 500 }
      )
    }

    // 2. Link repair request with user_id
    const { error: updateError } = await supabaseAdmin
      .from('repair_requests')
      .update({ user_id: user.id })
      .eq('id', validatedData.repairId)

    if (updateError) {
      console.error('[REGISTER] Error linking repair:', updateError)
    }

    // 3. Update/create profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .upsert({
        id: user.id,
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

    // 4. Generate magic link token for auto-login on serwis-zebry.pl
    let tokenHash: string | null = null
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'magiclink',
      email: validatedData.email,
    })

    if (linkError) {
      console.error('[REGISTER] Magic link error:', linkError)
    } else {
      tokenHash = linkData.properties?.hashed_token || null
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
      },
      tokenHash,
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
