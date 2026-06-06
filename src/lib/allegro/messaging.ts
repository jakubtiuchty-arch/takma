import { allegroFetch } from './client'

/**
 * Allegro Wiadomości (Centrum Wiadomości) — REST /messaging.
 * Scope: allegro:api:messaging (jest w tokenie).
 */

export interface MessagingThread {
  id: string
  read: boolean
  lastMessageDateTime: string
  interlocutor: { login: string; avatarUrl?: string }
}

export interface Message {
  id: string
  createdAt: string
  author: { login: string; isInterlocutor: boolean }
  text: string
  subject?: string
}

export async function listThreads(limit = 20, offset = 0): Promise<MessagingThread[]> {
  const lim = Math.min(limit, 20) // Allegro: max 20
  const j = await allegroFetch<{ threads?: MessagingThread[] }>(`/messaging/threads?limit=${lim}&offset=${offset}`)
  return j.threads || []
}

export async function getThreadMessages(threadId: string, limit = 20): Promise<Message[]> {
  const lim = Math.min(limit, 20) // Allegro: max 20
  const j = await allegroFetch<{ messages?: Message[] }>(`/messaging/threads/${threadId}/messages?limit=${lim}`)
  return j.messages || []
}

export async function sendMessage(threadId: string, text: string): Promise<void> {
  await allegroFetch(`/messaging/threads/${threadId}/messages`, {
    method: 'POST',
    body: JSON.stringify({ text }),
  })
}

/** Oznacz wątek jako przeczytany (best-effort). */
export async function markThreadRead(threadId: string): Promise<void> {
  await allegroFetch(`/messaging/threads/${threadId}/read`, {
    method: 'PUT',
    body: JSON.stringify({ read: true }),
  }).catch(() => {})
}
