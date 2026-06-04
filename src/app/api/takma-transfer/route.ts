import { NextResponse } from 'next/server'
import { supabaseAdmin, ensureBucket, safePath, transferConfigured, TRANSFER_BUCKET, MAX_FILE_BYTES } from '@/lib/supabase-transfer'

export const runtime = 'nodejs'

function notConfigured() {
  return NextResponse.json(
    { error: 'Transfer nieskonfigurowany. Dodaj SUPABASE_URL i SUPABASE_SERVICE_ROLE_KEY w env.' },
    { status: 503 },
  )
}

// Lista plików
export async function GET() {
  if (!transferConfigured()) return notConfigured()
  try {
    await ensureBucket()
    const sb = supabaseAdmin()
    const { data, error } = await sb.storage.from(TRANSFER_BUCKET).list('', {
      limit: 500,
      sortBy: { column: 'created_at', order: 'desc' },
    })
    if (error) throw error
    const files = (data ?? [])
      .filter(f => f.id) // pomiń pseudo-foldery
      .map(f => ({
        path: f.name,
        size: f.metadata?.size ?? 0,
        createdAt: f.created_at ?? null,
        mime: f.metadata?.mimetype ?? null,
      }))
    return NextResponse.json({ files })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}

// Podpis uploadu LUB pobrania
export async function POST(request: Request) {
  if (!transferConfigured()) return notConfigured()
  try {
    const body = await request.json()
    const sb = supabaseAdmin()

    if (body.action === 'sign-upload') {
      const name = String(body.name ?? '').slice(0, 200)
      if (!name) return NextResponse.json({ error: 'Brak nazwy pliku.' }, { status: 400 })
      if (typeof body.size === 'number' && body.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: 'Plik przekracza 40 MB.' }, { status: 413 })
      }
      await ensureBucket()
      const path = safePath(name)
      const { data, error } = await sb.storage.from(TRANSFER_BUCKET).createSignedUploadUrl(path)
      if (error) throw error
      return NextResponse.json({ path: data.path, token: data.token })
    }

    if (body.action === 'sign-download') {
      const path = String(body.path ?? '')
      if (!path) return NextResponse.json({ error: 'Brak ścieżki.' }, { status: 400 })
      const { data, error } = await sb.storage.from(TRANSFER_BUCKET).createSignedUrl(path, 3600, { download: true })
      if (error) throw error
      return NextResponse.json({ url: data.signedUrl })
    }

    return NextResponse.json({ error: 'Nieznana akcja.' }, { status: 400 })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}

// Usuwanie pliku
export async function DELETE(request: Request) {
  if (!transferConfigured()) return notConfigured()
  try {
    const body = await request.json()
    const path = String(body.path ?? '')
    if (!path) return NextResponse.json({ error: 'Brak ścieżki.' }, { status: 400 })
    const sb = supabaseAdmin()
    const { error } = await sb.storage.from(TRANSFER_BUCKET).remove([path])
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}
