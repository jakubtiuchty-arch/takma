import { allegroFetch } from './client'
import { getValidAccessToken } from './auth'

/**
 * Allegro Wiadomości (Centrum Wiadomości) — REST /messaging.
 * Scope: allegro:api:messaging (jest w tokenie). Limity list: max 20.
 */

const API_BASE = process.env.ALLEGRO_API_BASE || 'https://api.allegro.pl.allegrosandbox.pl'
const ALLEGRO_ACCEPT = 'application/vnd.allegro.public.v1+json'

export interface MessagingThread {
  id: string
  read: boolean
  lastMessageDateTime: string
  interlocutor: { login: string; avatarUrl?: string }
}

export interface MessageAttachment {
  fileName?: string
  mimeType?: string
  url?: string
}

export interface Message {
  id: string
  createdAt: string
  author: { login: string; isInterlocutor: boolean }
  text: string
  subject?: string
  attachments?: MessageAttachment[]
}

export async function listThreads(limit = 20, offset = 0): Promise<MessagingThread[]> {
  const lim = Math.min(limit, 20)
  const j = await allegroFetch<{ threads?: MessagingThread[] }>(`/messaging/threads?limit=${lim}&offset=${offset}`)
  return j.threads || []
}

export async function getThreadMessages(threadId: string, limit = 20): Promise<Message[]> {
  const lim = Math.min(limit, 20)
  const j = await allegroFetch<{ messages?: Message[] }>(`/messaging/threads/${threadId}/messages?limit=${lim}`)
  return j.messages || []
}

export async function sendMessage(threadId: string, text: string, attachmentIds: string[] = []): Promise<void> {
  const body: { text: string; attachments?: Array<{ id: string }> } = { text }
  if (attachmentIds.length) body.attachments = attachmentIds.map((id) => ({ id }))
  await allegroFetch(`/messaging/threads/${threadId}/messages`, { method: 'POST', body: JSON.stringify(body) })
}

/** Ustaw status przeczytania wątku (true = przeczytany, false = nieprzeczytany). */
export async function setThreadRead(threadId: string, read: boolean): Promise<void> {
  await allegroFetch(`/messaging/threads/${threadId}/read`, {
    method: 'PUT',
    body: JSON.stringify({ read }),
  }).catch(() => {})
}

/** Załącznik: krok 1 — deklaracja (filename + size) → id. */
export async function declareAttachment(filename: string, size: number): Promise<string> {
  const j = await allegroFetch<{ id: string }>(`/messaging/message-attachments`, {
    method: 'POST',
    body: JSON.stringify({ filename, size }),
  })
  return j.id
}

/** Załącznik: krok 2 — wgranie binarne pliku pod nadane id. */
export async function uploadAttachment(id: string, data: ArrayBuffer, mimeType: string): Promise<void> {
  const token = await getValidAccessToken()
  if (!token) throw new Error('Brak połączenia z Allegro.')
  const res = await fetch(`${API_BASE}/messaging/message-attachments/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: ALLEGRO_ACCEPT,
      'Content-Type': mimeType || 'application/octet-stream',
    },
    body: data,
  })
  if (!res.ok) {
    const t = await res.text()
    throw new Error(`Upload załącznika ${res.status}: ${t.slice(0, 150)}`)
  }
}
