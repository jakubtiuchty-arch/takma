import { empikFetch } from '@/lib/empik/client'

/**
 * Wiadomości EmpikPlace (Mirakl Inbox API).
 * Wątki: GET /api/inbox/threads, szczegóły: GET /api/inbox/threads/{id},
 * odpowiedź: POST /api/inbox/threads/{id}/message (multipart z message_input).
 */

export interface EmpikThread {
  id: string
  topic?: { type?: string; value?: string }
  date_updated?: string
  date_created?: string
  entities?: Array<{ type?: string; id?: string; label?: string }>
  current_participants?: Array<{ type?: string; display_name?: string }>
}

export interface EmpikMessage {
  id?: string
  body?: string
  date_created?: string
  from?: { type?: string; display_name?: string; organization_details?: { display_name?: string } }
}

export async function listEmpikThreads(limit = 30): Promise<EmpikThread[]> {
  const d = await empikFetch<{ data: EmpikThread[] }>(`/inbox/threads?limit=${limit}`)
  return d.data || []
}

export async function getEmpikThread(threadId: string): Promise<{ thread?: EmpikThread; messages: EmpikMessage[] }> {
  const d = await empikFetch<{ messages?: EmpikMessage[]; data?: { messages?: EmpikMessage[] } } & Record<string, unknown>>(
    `/inbox/threads/${encodeURIComponent(threadId)}`
  )
  const messages = d.messages || d.data?.messages || []
  return { thread: d as unknown as EmpikThread, messages }
}

export async function replyEmpikThread(threadId: string, body: string): Promise<void> {
  const key = process.env.EMPIK_API_KEY
  if (!key) throw new Error('Brak EMPIK_API_KEY w env')
  const form = new FormData()
  form.append('message_input', JSON.stringify({ body }))
  const res = await fetch(`https://marketplace.empik.com/api/inbox/threads/${encodeURIComponent(threadId)}/message`, {
    method: 'POST',
    headers: { Authorization: key },
    body: form,
  })
  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(`Empik reply ${res.status}: ${t.slice(0, 300)}`)
  }
}
