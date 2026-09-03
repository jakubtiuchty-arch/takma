import React from 'react'
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'

/**
 * Oferta handlowa jako prawdziwy PDF (react-pdf) — załącznik do maila ofertowego
 * i plik pod linkiem „Pobierz ofertę (PDF)”. Układ powtarza stronę drukowaną
 * z panelu: strony, daty, tabela pozycji, podsumowanie, gratis, warunki, uwagi,
 * boks autoryzowanego serwisu Zebra i stopka.
 */

export interface QuotePdfItem {
  position: number
  productName: string
  partNumber?: string | null
  quantity: number
  priceNetto: number
  totalNetto: number
  catalogPriceNetto?: number | null
}

export interface QuotePdfData {
  quoteNumber: string
  issuedAt: Date
  validUntil: Date
  clientCompany: string
  clientContact?: string | null
  clientAddress?: string | null
  clientNip?: string | null
  clientEmail?: string | null
  clientPhone?: string | null
  items: QuotePdfItem[]
  subtotalNetto: number
  vatAmount: number
  totalBrutto: number
  paymentTerms: string
  deliveryTerms: string
  freebiesNote?: string | null
  notes?: string | null
  /** boks „Autoryzowany serwis Zebra” — gdy w ofercie jest sprzęt Zebry */
  zebraService: boolean
  logoSrc: string
  zebraLogoSrc: string
}

const C = {
  ink: '#0f172a',
  body: '#1f2937',
  muted: '#64748b',
  brand: '#2563eb',
  navy: '#1e3a5f',
  line: '#e2e8f0',
  soft: '#f8fafc',
  lime: '#A8F000',
}

const s = StyleSheet.create({
  page: { paddingTop: 30, paddingBottom: 48, paddingHorizontal: 44, fontFamily: 'DejaVu', fontSize: 9.5, color: C.body, lineHeight: 1.4 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderBottomWidth: 2, borderBottomColor: C.brand, paddingBottom: 6, marginBottom: 8 },
  logo: { width: 120, height: 42, objectFit: 'contain', objectPositionX: 0 } as never,
  docTitleWrap: { alignItems: 'flex-end' },
  docTitle: { fontSize: 22, fontWeight: 'bold', color: C.navy, letterSpacing: 2, lineHeight: 1, marginBottom: 6 },
  docNumber: { fontSize: 9.5, color: C.muted, lineHeight: 1 },

  parties: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  party: { width: '47%' },
  partyTitle: { fontSize: 8, fontWeight: 'bold', color: C.brand, letterSpacing: 1, textTransform: 'uppercase', borderBottomWidth: 1, borderBottomColor: C.line, paddingBottom: 3, marginBottom: 5 },
  partyName: { fontSize: 11, fontWeight: 'bold', color: C.ink, marginBottom: 2 },
  partyText: { fontSize: 9.5, color: '#374151' },

  dates: { flexDirection: 'row', backgroundColor: C.soft, borderWidth: 1, borderColor: C.line, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, marginBottom: 6 },
  dateItem: { flex: 1, alignItems: 'center' },
  dateLabel: { fontSize: 7, color: C.muted, textTransform: 'uppercase', letterSpacing: 0.5 },
  dateValue: { fontSize: 11, fontWeight: 'bold', color: C.ink, marginTop: 2 },

  th: { flexDirection: 'row', backgroundColor: C.brand, paddingVertical: 6, paddingHorizontal: 8 },
  thText: { color: '#ffffff', fontSize: 8, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.5 },
  tr: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: C.line, paddingVertical: 4, paddingHorizontal: 8 },
  colLp: { width: 26 },
  colName: { flex: 1, paddingRight: 8 },
  colQty: { width: 44, textAlign: 'right' },
  colPrice: { width: 78, textAlign: 'right' },
  colVat: { width: 34, textAlign: 'center' },
  colTotal: { width: 84, textAlign: 'right' },
  name: { fontWeight: 'bold', color: C.navy },
  pn: { fontSize: 8, color: C.muted, marginTop: 1 },
  strike: { fontSize: 8, color: '#9ca3af', textDecoration: 'line-through' },
  bold: { fontWeight: 'bold' },

  summaryWrap: { flexDirection: 'row', alignItems: 'stretch', marginTop: 8, marginBottom: 8, gap: 10 },
  summary: { width: 250, backgroundColor: C.soft, borderWidth: 1, borderColor: C.line, borderRadius: 5, padding: 10 },
  sumRow: { flexDirection: 'row', marginBottom: 4 },
  sumLabel: { flex: 1 },
  sumValue: { width: 100, textAlign: 'right' },
  sumTotal: { flexDirection: 'row', borderTopWidth: 2, borderTopColor: C.brand, paddingTop: 6, marginTop: 4 },
  sumTotalText: { fontSize: 13, fontWeight: 'bold', color: C.brand },

  freebies: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0fdf4', borderWidth: 1.5, borderColor: '#15803d', borderRadius: 5, paddingVertical: 7, paddingHorizontal: 10, marginBottom: 8 },
  freebieBadge: { backgroundColor: '#15803d', color: '#ffffff', fontSize: 8, fontWeight: 'bold', letterSpacing: 1, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 3, marginRight: 10 },
  freebieName: { fontSize: 10.5, fontWeight: 'bold', color: '#14532d' },
  box: { flex: 1, backgroundColor: C.soft, borderWidth: 1, borderColor: C.line, borderRadius: 5, padding: 9 },
  boxTitle: { fontSize: 10.5, fontWeight: 'bold', color: C.navy, marginBottom: 6 },
  condRow: { flexDirection: 'row', marginBottom: 3 },
  condLabel: { width: 120, color: C.muted },
  condValue: { fontWeight: 'bold' },
  notes: { backgroundColor: '#fefce8', borderWidth: 1, borderColor: '#fde68a', borderRadius: 5, padding: 9, marginBottom: 12, color: '#78350f' },

  zebra: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: C.line, borderRadius: 5, paddingVertical: 7, paddingHorizontal: 10 },
  zebraLogo: { width: 92, height: 34, objectFit: 'contain', marginRight: 14 } as never,
  zebraAccent: { width: 2, height: 34, backgroundColor: C.lime, marginRight: 14 },
  zebraTitle: { fontSize: 10.5, fontWeight: 'bold', color: C.ink },
  zebraText: { fontSize: 8.5, color: '#374151', marginTop: 2 },

  footer: { position: 'absolute', bottom: 18, left: 44, right: 44, borderTopWidth: 1, borderTopColor: C.line, paddingTop: 7, fontSize: 7.5, color: C.muted },
  pageNo: { position: 'absolute', right: 0, top: 7, fontSize: 7.5, color: C.muted },
})

const pln = (grosze: number) =>
  `${(grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł`
const date = (d: Date) => d.toLocaleDateString('pl-PL')
/** Pole „gratis” z panelu to lista po przecinku; zdejmujemy też powtórzone „gratis”. */
const splitFreebies = (note: string): string[] => {
  const strip = (t: string) =>
    t.replace(/^\s*gratis\s*[:\-–—]?\s*/i, '').replace(/\s*[\-–—(]?\s*gratis\s*[)]?\s*[.!]?\s*$/i, '').trim()
  const parts = note.split(/\r?\n|;|,/).map(strip).filter(Boolean)
  return parts.length ? parts : [note.trim()]
}

export function QuotePdfDoc({ q }: { q: QuotePdfData }) {
  const items = [...q.items].sort((a, b) => a.position - b.position)
  return (
    <Document title={`Oferta ${q.quoteNumber} — TAKMA`} author="TAKMA" creator="TAKMA" producer="TAKMA">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Image src={q.logoSrc} style={s.logo} />
          <View style={s.docTitleWrap}>
            <Text style={s.docTitle}>OFERTA</Text>
            <Text style={s.docNumber}>Nr: {q.quoteNumber}</Text>
          </View>
        </View>

        <View style={s.parties}>
          <View style={s.party}>
            <Text style={s.partyTitle}>Sprzedawca</Text>
            <Text style={s.partyName}>TAKMA</Text>
            <Text style={s.partyText}>ul. Poświęcka 1a</Text>
            <Text style={s.partyText}>51-128 Wrocław</Text>
            <Text style={s.partyText}>NIP: 9151004377</Text>
            <Text style={s.partyText}>Email: takma@takma.com.pl</Text>
            <Text style={s.partyText}>Tel: +48 607 819 688</Text>
          </View>
          <View style={s.party}>
            <Text style={s.partyTitle}>Nabywca</Text>
            <Text style={s.partyName}>{q.clientCompany}</Text>
            {q.clientContact ? <Text style={s.partyText}>{q.clientContact}</Text> : null}
            {q.clientAddress
              ? q.clientAddress.split(',').map((part, i) => <Text key={i} style={s.partyText}>{part.trim()}</Text>)
              : null}
            {q.clientNip ? <Text style={[s.partyText, s.bold]}>NIP: {q.clientNip}</Text> : null}
            {q.clientEmail ? <Text style={s.partyText}>Email: {q.clientEmail}</Text> : null}
            {q.clientPhone ? <Text style={s.partyText}>Tel: {q.clientPhone}</Text> : null}
          </View>
        </View>

        <View style={s.dates}>
          <View style={s.dateItem}><Text style={s.dateLabel}>Data wystawienia</Text><Text style={s.dateValue}>{date(q.issuedAt)}</Text></View>
          <View style={s.dateItem}><Text style={s.dateLabel}>Ważna do</Text><Text style={s.dateValue}>{date(q.validUntil)}</Text></View>
          <View style={s.dateItem}><Text style={s.dateLabel}>Nr oferty</Text><Text style={s.dateValue}>{q.quoteNumber}</Text></View>
        </View>

        <View style={s.th} fixed={false}>
          <Text style={[s.thText, s.colLp]}>Lp.</Text>
          <Text style={[s.thText, s.colName]}>Nazwa produktu</Text>
          <Text style={[s.thText, s.colQty]}>Ilość</Text>
          <Text style={[s.thText, s.colPrice]}>Cena netto</Text>
          <Text style={[s.thText, s.colVat]}>VAT</Text>
          <Text style={[s.thText, s.colTotal]}>Razem netto</Text>
        </View>
        {items.map((it) => {
          const discounted = !!it.catalogPriceNetto && it.catalogPriceNetto > it.priceNetto
          return (
            <View key={it.position} style={s.tr} wrap={false}>
              <Text style={s.colLp}>{it.position}</Text>
              <View style={s.colName}>
                <Text style={s.name}>{it.productName}</Text>
                {it.partNumber ? <Text style={s.pn}>PN: {it.partNumber}</Text> : null}
              </View>
              <Text style={s.colQty}>{it.quantity} szt.</Text>
              <View style={s.colPrice}>
                {discounted ? <Text style={s.strike}>{pln(it.catalogPriceNetto!)}</Text> : null}
                <Text style={[s.bold, { textAlign: 'right' }]}>{pln(it.priceNetto)}</Text>
              </View>
              <Text style={s.colVat}>23%</Text>
              <Text style={[s.colTotal, s.bold]}>{pln(it.totalNetto)}</Text>
            </View>
          )
        })}

        {/* podsumowanie po prawej, warunki po lewej — jeden wiersz zamiast dwóch bloków */}
        <View style={s.summaryWrap} wrap={false}>
          <View style={s.box}>
            <Text style={s.boxTitle}>Warunki oferty</Text>
            <View style={s.condRow}><Text style={s.condLabel}>Ważność oferty:</Text><Text style={s.condValue}>do {date(q.validUntil)}</Text></View>
            <View style={s.condRow}><Text style={s.condLabel}>Warunki płatności:</Text><Text style={s.condValue}>{q.paymentTerms}</Text></View>
            <View style={s.condRow}><Text style={s.condLabel}>Termin dostawy:</Text><Text style={s.condValue}>{q.deliveryTerms}</Text></View>
          </View>
          <View style={s.summary}>
            <View style={s.sumRow}><Text style={s.sumLabel}>Wartość netto:</Text><Text style={s.sumValue}>{pln(q.subtotalNetto)}</Text></View>
            <View style={s.sumRow}><Text style={s.sumLabel}>VAT 23%:</Text><Text style={s.sumValue}>{pln(q.vatAmount)}</Text></View>
            <View style={s.sumTotal}>
              <Text style={[s.sumLabel, s.sumTotalText]}>Razem brutto:</Text>
              <Text style={[s.sumValue, s.sumTotalText]}>{pln(q.totalBrutto)}</Text>
            </View>
          </View>
        </View>

        {q.freebiesNote ? (
          <View style={s.freebies} wrap={false}>
            <Text style={s.freebieBadge}>GRATIS</Text>
            <View style={{ flex: 1 }}>
              {splitFreebies(q.freebiesNote).map((f, i) => <Text key={i} style={s.freebieName}>{f}</Text>)}
            </View>
          </View>
        ) : null}

        {q.notes ? (
          <View style={s.notes} wrap={false}>
            <Text><Text style={[s.bold, { color: '#92400e' }]}>Uwagi: </Text>{q.notes}</Text>
          </View>
        ) : null}

        {q.zebraService ? (
          <View style={s.zebra} wrap={false}>
            <Image src={q.zebraLogoSrc} style={s.zebraLogo} />
            <View style={s.zebraAccent} />
            <View style={{ flex: 1 }}>
              <Text style={s.zebraTitle}>Autoryzowany serwis Zebra</Text>
              <Text style={s.zebraText}>Naprawy gwarancyjne i pogwarancyjne wykonujemy we własnym serwisie.</Text>
            </View>
          </View>
        ) : null}

        <View fixed style={s.footer}>
          <Text style={{ textAlign: 'center' }}>
            TAKMA — Autoryzowany Partner Zebra Technologies · www.takma.com.pl · +48 607 819 688
          </Text>
          <Text style={s.pageNo} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  )
}
