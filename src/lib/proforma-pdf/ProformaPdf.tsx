import React from 'react'
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'
import { stawkaVat } from '@/lib/quotes-stawki'

/**
 * Pro forma jako PDF (react-pdf) — załącznik do maila z pro formą. Dział
 * zakupów klienta zwykle przyjmuje tylko plik, a sama treść maila w HTML
 * nie nadaje się do przekazania dalej. Układ i kolory jak w PDF oferty.
 * Kwoty w złotych (tak jak w danych maila), nie w groszach.
 */

export interface ProformaPdfData {
  orderNumber: string
  issuedAt: Date
  dueDate: Date
  items: { name: string; partNumber?: string | null; quantity: number; priceNetto: number; totalNetto: number }[]
  customer: {
    company: string
    nip?: string | null
    contactName: string
    email: string
    phone?: string | null
    address: string
  }
  subtotalNetto: number
  shippingNetto: number
  vatAmount: number
  totalBrutto: number
  notes?: string | null
  logoSrc: string
}

const C = {
  ink: '#0f172a',
  body: '#1f2937',
  muted: '#64748b',
  brand: '#2563eb',
  navy: '#1e3a5f',
  line: '#e2e8f0',
  soft: '#f8fafc',
}

const s = StyleSheet.create({
  page: { paddingTop: 30, paddingBottom: 56, paddingHorizontal: 44, fontFamily: 'DejaVu', fontSize: 9.5, color: C.body, lineHeight: 1.4 },
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
  bold: { fontWeight: 'bold' },

  summaryWrap: { flexDirection: 'row', alignItems: 'stretch', marginTop: 8, marginBottom: 8, gap: 10 },
  summary: { width: 210, backgroundColor: C.soft, borderWidth: 1, borderColor: C.line, borderRadius: 5, padding: 10 },
  sumRow: { flexDirection: 'row', marginBottom: 4 },
  sumLabel: { flex: 1 },
  sumValue: { width: 100, textAlign: 'right' },
  sumTotal: { flexDirection: 'row', borderTopWidth: 2, borderTopColor: C.brand, paddingTop: 6, marginTop: 4 },
  sumTotalText: { fontSize: 13, fontWeight: 'bold', color: C.brand },

  bank: { flex: 1, backgroundColor: '#eff6ff', borderWidth: 1, borderColor: '#93c5fd', borderRadius: 5, padding: 9 },
  bankTitle: { fontSize: 10.5, fontWeight: 'bold', color: '#1e40af', marginBottom: 6 },
  bankRow: { flexDirection: 'row', marginBottom: 3 },
  bankLabel: { width: 62, color: '#475569' },
  bankValue: { flex: 1, fontWeight: 'bold' },
  account: { flex: 1, fontWeight: 'bold', color: '#1e40af' },

  notes: { backgroundColor: '#fefce8', borderWidth: 1, borderColor: '#fde68a', borderRadius: 5, padding: 9, marginBottom: 10, color: '#78350f' },
  info: { fontSize: 8.5, color: C.muted, marginTop: 4 },

  footer: { position: 'absolute', bottom: 18, left: 44, right: 44, borderTopWidth: 1, borderTopColor: C.line, paddingTop: 7, fontSize: 7.5, color: C.muted },
  pageNo: { position: 'absolute', right: 0, top: 7, fontSize: 7.5, color: C.muted },
})

const pln = (zl: number) =>
  `${zl.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł`
const date = (d: Date) => d.toLocaleDateString('pl-PL', { timeZone: 'Europe/Warsaw' })

export function proformaNumber(orderNumber: string, issuedAt: Date): string {
  return `PF/${orderNumber}/${issuedAt.getFullYear()}`
}

export function ProformaPdfDoc({ p }: { p: ProformaPdfData }) {
  const netto = p.subtotalNetto + p.shippingNetto
  const stawka = stawkaVat(netto, p.vatAmount)
  const numer = proformaNumber(p.orderNumber, p.issuedAt)
  const rows = [
    ...p.items,
    ...(p.shippingNetto > 0
      ? [{ name: 'Dostawa kurierska', partNumber: null, quantity: 1, priceNetto: p.shippingNetto, totalNetto: p.shippingNetto }]
      : []),
  ]
  return (
    <Document title={`Pro forma ${numer} — TAKMA`} author="TAKMA" creator="TAKMA" producer="TAKMA">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Image src={p.logoSrc} style={s.logo} />
          <View style={s.docTitleWrap}>
            <Text style={s.docTitle}>PRO FORMA</Text>
            <Text style={s.docNumber}>Nr: {numer}</Text>
          </View>
        </View>

        <View style={s.parties}>
          <View style={s.party}>
            <Text style={s.partyTitle}>Sprzedawca</Text>
            <Text style={s.partyName}>TAKMA Tadeusz Tiuchty</Text>
            <Text style={s.partyText}>ul. Poświęcka 1a</Text>
            <Text style={s.partyText}>51-128 Wrocław</Text>
            <Text style={s.partyText}>NIP: 9151004377</Text>
            <Text style={s.partyText}>Email: takma@takma.com.pl</Text>
            <Text style={s.partyText}>Tel: +48 607 819 688</Text>
          </View>
          <View style={s.party}>
            <Text style={s.partyTitle}>Nabywca</Text>
            <Text style={s.partyName}>{p.customer.company}</Text>
            {p.customer.contactName ? <Text style={s.partyText}>{p.customer.contactName}</Text> : null}
            {p.customer.address.split(',').map((part, i) => <Text key={i} style={s.partyText}>{part.trim()}</Text>)}
            {p.customer.nip ? <Text style={[s.partyText, s.bold]}>NIP: {p.customer.nip}</Text> : null}
            <Text style={s.partyText}>Email: {p.customer.email}</Text>
            {p.customer.phone ? <Text style={s.partyText}>Tel: {p.customer.phone}</Text> : null}
          </View>
        </View>

        <View style={s.dates}>
          <View style={s.dateItem}><Text style={s.dateLabel}>Data wystawienia</Text><Text style={s.dateValue}>{date(p.issuedAt)}</Text></View>
          <View style={s.dateItem}><Text style={s.dateLabel}>Termin płatności</Text><Text style={s.dateValue}>{date(p.dueDate)}</Text></View>
          <View style={s.dateItem}><Text style={s.dateLabel}>Nr zamówienia</Text><Text style={s.dateValue}>{p.orderNumber}</Text></View>
        </View>

        <View style={s.th}>
          <Text style={[s.thText, s.colLp]}>Lp.</Text>
          <Text style={[s.thText, s.colName]}>Nazwa produktu</Text>
          <Text style={[s.thText, s.colQty]}>Ilość</Text>
          <Text style={[s.thText, s.colPrice]}>Cena netto</Text>
          <Text style={[s.thText, s.colVat]}>VAT</Text>
          <Text style={[s.thText, s.colTotal]}>Razem netto</Text>
        </View>
        {rows.map((it, i) => (
          <View key={i} style={s.tr} wrap={false}>
            <Text style={s.colLp}>{i + 1}</Text>
            <View style={s.colName}>
              <Text style={s.name}>{it.name}</Text>
              {it.partNumber ? <Text style={s.pn}>PN: {it.partNumber}</Text> : null}
            </View>
            <Text style={s.colQty}>{it.quantity} szt.</Text>
            <Text style={[s.colPrice, s.bold]}>{pln(it.priceNetto)}</Text>
            <Text style={s.colVat}>{stawka}%</Text>
            <Text style={[s.colTotal, s.bold]}>{pln(it.totalNetto)}</Text>
          </View>
        ))}

        <View style={s.summaryWrap} wrap={false}>
          <View style={s.bank}>
            <Text style={s.bankTitle}>Dane do przelewu</Text>
            <View style={s.bankRow}><Text style={s.bankLabel}>Odbiorca:</Text><Text style={s.bankValue}>TAKMA Tadeusz Tiuchty, ul. Poświęcka 1a, 51-128 Wrocław</Text></View>
            <View style={s.bankRow}><Text style={s.bankLabel}>Bank:</Text><Text style={s.bankValue}>PKO BP</Text></View>
            <View style={s.bankRow}><Text style={s.bankLabel}>Nr konta:</Text><Text style={s.account}>39 1020 5297 0000 1902 0283 3069</Text></View>
            <View style={s.bankRow}><Text style={s.bankLabel}>Tytuł:</Text><Text style={s.bankValue}>Zamówienie {p.orderNumber}</Text></View>
          </View>
          <View style={s.summary}>
            <View style={s.sumRow}><Text style={s.sumLabel}>Wartość netto:</Text><Text style={s.sumValue}>{pln(netto)}</Text></View>
            <View style={s.sumRow}><Text style={s.sumLabel}>VAT {stawka}%:</Text><Text style={s.sumValue}>{pln(p.vatAmount)}</Text></View>
            <View style={s.sumTotal}>
              <Text style={[s.sumLabel, s.sumTotalText]}>Do zapłaty:</Text>
              <Text style={[s.sumValue, s.sumTotalText]}>{pln(p.totalBrutto)}</Text>
            </View>
          </View>
        </View>

        {p.notes ? (
          <View style={s.notes} wrap={false}>
            <Text><Text style={[s.bold, { color: '#92400e' }]}>Uwagi do zamówienia: </Text>{p.notes}</Text>
          </View>
        ) : null}

        <Text style={s.info}>
          Pro forma jest ważna 7 dni od daty wystawienia i nie jest dokumentem księgowym. Fakturę VAT wystawimy po zaksięgowaniu płatności.
        </Text>

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
