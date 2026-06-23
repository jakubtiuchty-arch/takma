import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'
import type { Manual, ManualBlock } from '@/data/manuals'

const C = {
  ink: '#0f172a',
  body: '#1f2937',
  muted: '#64748b',
  brand: '#2563eb',
  line: '#e2e8f0',
}

const s = StyleSheet.create({
  page: { paddingTop: 96, paddingBottom: 70, paddingHorizontal: 48, fontFamily: 'DejaVu', fontSize: 10, color: C.body, lineHeight: 1.5 },
  header: { position: 'absolute', top: 28, left: 48, right: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: C.line, paddingBottom: 12 },
  logo: { width: 118, height: 47, objectFit: 'contain' },
  brand: { fontSize: 18, fontWeight: 'bold', color: C.brand, letterSpacing: 1 },
  headerRight: { fontSize: 8, color: C.muted, textAlign: 'right' },
  footer: { position: 'absolute', bottom: 22, left: 48, right: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', borderTopWidth: 1, borderTopColor: C.line, paddingTop: 8, fontSize: 7.5, color: C.muted },
  h1: { fontSize: 18, fontWeight: 'bold', color: C.ink, lineHeight: 1.2, marginBottom: 12 },
  lead: { fontSize: 10.5, color: C.muted, marginBottom: 18 },
  h2: { fontSize: 12.5, fontWeight: 'bold', color: C.ink, marginTop: 14, marginBottom: 5 },
  p: { marginBottom: 5 },
  listRow: { flexDirection: 'row', marginBottom: 3, paddingLeft: 6 },
  bullet: { width: 14, color: C.brand },
  listText: { flex: 1 },
  note: { marginTop: 18, paddingTop: 8, borderTopWidth: 1, borderTopColor: C.line, fontSize: 8, color: C.muted },
})

/** Zamienia **pogrubienie** na <Text> z fontWeight bold. */
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <Text key={i} style={{ fontWeight: 'bold', color: C.ink }}>{part.slice(2, -2)}</Text>
      : <Text key={i}>{part}</Text>,
  )
}

function Block({ block }: { block: ManualBlock }) {
  if (block.type === 'p') return <Text style={s.p}>{inline(block.text)}</Text>
  return (
    <View style={{ marginBottom: 5 }}>
      {block.items.map((it, i) => (
        <View key={i} style={s.listRow}>
          <Text style={s.bullet}>{block.ordered ? `${i + 1}.` : '•'}</Text>
          <Text style={s.listText}>{inline(it)}</Text>
        </View>
      ))}
    </View>
  )
}

export function ManualPdfDoc({ manual, logoSrc }: { manual: Manual; logoSrc?: string }) {
  const pm = manual.polishManual!
  const title = `${manual.name} — skrócona instrukcja obsługi`
  return (
    <Document title={title} author="TAKMA" creator="TAKMA" producer="TAKMA">
      <Page size="A4" style={s.page}>
        <View fixed style={s.header}>
          {logoSrc ? <Image src={logoSrc} style={s.logo} /> : <Text style={s.brand}>TAKMA</Text>}
          <Text style={s.headerRight}>Skrócona instrukcja{'\n'}{manual.name}</Text>
        </View>

        <Text style={s.h1}>{title}</Text>
        {pm.intro ? <Text style={s.lead}>{pm.intro}</Text> : null}

        {pm.sections.map((sec, i) => (
          <View key={i}>
            {/* tytuł trzyma się początku treści; długie sekcje mogą przejść na kolejną stronę */}
            <Text style={s.h2} minPresenceAhead={28}>{i + 1}. {sec.title}</Text>
            {sec.blocks.map((b, j) => <Block key={j} block={b} />)}
          </View>
        ))}

        <Text style={s.note}>
          Dokument ma charakter informacyjny. Aktualizacja: {pm.updatedAt}.
        </Text>

        <View fixed style={s.footer}>
          <View style={{ flex: 1 }}>
            <Text>ul. Poświęcka 1a, 51-128 Wrocław · NIP 915-100-43-77</Text>
            <Text style={{ marginTop: 2 }}>takma@takma.com.pl · +48 607 819 688 · +48 71 781 71 28</Text>
          </View>
          <Text
            style={{ marginLeft: 12 }}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  )
}
