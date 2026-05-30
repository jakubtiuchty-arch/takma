/**
 * Usuwa podstawowe znaczniki markdown (`**bold**`, `*italic*`, `[link](url)`) z tekstu.
 * Używać dla pól które trafiają do JSON-LD (schema.org) — Google traktuje to jako plain
 * text i nie konwertuje markdown, więc literalne `**` w `text` / `name` to błąd.
 */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\[\[\?[^\]]+\]\]/g, '')           // `[[?tooltip]]` → '' (tooltip pomijany w schemie)
    .replace(/\*\*([^*]+)\*\*/g, '$1')          // **bold** → bold
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '$1') // *italic* → italic (nie zjada ** dzięki lookarounds)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')    // [text](url) → text
}
