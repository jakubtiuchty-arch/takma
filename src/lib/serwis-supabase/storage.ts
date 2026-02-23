import { SupabaseClient } from '@supabase/supabase-js'

/**
 * Upload zdjec do Supabase Storage bucket "repair-photos"
 * Connects to serwis-zebry Supabase project.
 */
export async function uploadRepairPhotos(
  supabase: SupabaseClient,
  files: File[],
  requestId: string
): Promise<string[]> {
  const uploadedUrls: string[] = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fileExt = file.name.split('.').pop()
    const fileName = `${requestId}/${Date.now()}-${i}.${fileExt}`

    const { error } = await supabase.storage
      .from('repair-photos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) {
      console.error(`Upload error ${file.name}:`, error)
      continue
    }

    const { data: urlData } = supabase.storage
      .from('repair-photos')
      .getPublicUrl(fileName)

    uploadedUrls.push(urlData.publicUrl)
  }

  return uploadedUrls
}

export function validateFileType(file: File): boolean {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
  return allowedTypes.includes(file.type)
}

export function validateFileSize(file: File, maxSizeMB: number): boolean {
  return file.size <= maxSizeMB * 1024 * 1024
}
