import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

interface InvoiceItem {
  name: string
  partNumber?: string
  quantity: number
  unitPriceNetto: number
  totalNetto: number
  vatRate: number
  vatAmount: number
  totalBrutto: number
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const invoice = await prisma.invoice.findUnique({
    where: { id },
    include: { order: { select: { orderNumber: true } } }
  })

  if (!invoice) {
    return new NextResponse('Faktura nie znaleziona', { status: 404 })
  }

  const items = invoice.items as unknown as InvoiceItem[]
  const fmt = (v: number) => (v / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const issueDate = invoice.issueDate.toLocaleDateString('pl-PL')
  const saleDate = invoice.saleDate?.toLocaleDateString('pl-PL') || issueDate
  const dueDate = invoice.dueDate?.toLocaleDateString('pl-PL') || ''

  const itemsRows = items.map((item, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="product-name">${esc(item.name)}</div>
        ${item.partNumber ? `<div class="product-pn">PN: ${esc(item.partNumber)}</div>` : ''}
      </td>
      <td style="text-align:center">${item.quantity}</td>
      <td class="amount">${fmt(item.unitPriceNetto)} zl</td>
      <td class="amount">${fmt(item.totalNetto)} zl</td>
      <td style="text-align:center">${item.vatRate}%</td>
      <td class="amount">${fmt(item.vatAmount)} zl</td>
      <td class="amount">${fmt(item.totalBrutto)} zl</td>
    </tr>
  `).join('')

  const html = `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Faktura ${esc(invoice.invoiceNumber)}</title>
  <style>
    @media print { .no-print { display: none !important; } body { padding: 15mm; margin: 0; } }
    @page { size: A4; margin: 15mm; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, sans-serif; font-size: 11px; line-height: 1.5; color: #333; padding: 40px; max-width: 800px; margin: 0 auto; }
    .print-bar { background: #1e293b; color: white; padding: 14px 20px; margin-bottom: 24px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
    .print-btn { background: white; color: #1e293b; border: none; padding: 9px 22px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 13px; }
    .header { display: flex; justify-content: space-between; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 3px solid #2563eb; }
    .header h1 { font-size: 22px; color: #1e3a5f; }
    .parties { display: flex; justify-content: space-between; margin-bottom: 24px; }
    .party { width: 47%; }
    .party-title { font-weight: bold; color: #2563eb; margin-bottom: 8px; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
    .party-name { font-weight: bold; font-size: 13px; margin-bottom: 4px; }
    .party-text { font-size: 11px; margin-bottom: 2px; color: #444; }
    .dates { display: flex; gap: 20px; margin-bottom: 24px; padding: 12px 15px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0; }
    .date-item { flex: 1; }
    .date-label { font-size: 9px; color: #64748b; text-transform: uppercase; }
    .date-value { font-weight: bold; font-size: 13px; margin-top: 2px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 9px 8px; text-align: left; font-size: 10px; text-transform: uppercase; }
    td { padding: 8px; border-bottom: 1px solid #e5e7eb; vertical-align: top; font-size: 11px; }
    .amount { text-align: right; font-weight: 600; }
    .product-name { font-weight: 600; color: #1e3a5f; }
    .product-pn { font-size: 10px; color: #64748b; }
    .summary { display: flex; justify-content: flex-end; margin-bottom: 24px; }
    .summary-box { width: 260px; background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; }
    .summary-row { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 11px; }
    .summary-total { font-size: 15px; font-weight: bold; color: #2563eb; border-top: 2px solid #2563eb; padding-top: 8px; margin-top: 8px; display: flex; justify-content: space-between; }
    .bank { background: #eff6ff; padding: 14px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #93c5fd; }
    .bank-title { font-weight: bold; color: #1e40af; margin-bottom: 8px; }
    .bank-row { display: flex; margin-bottom: 4px; }
    .bank-label { width: 100px; color: #475569; font-size: 11px; }
    .bank-value { font-weight: 600; font-size: 11px; }
    .ksef-info { background: #f0fdf4; padding: 10px 14px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #86efac; font-size: 11px; color: #166534; }
    .footer { text-align: center; color: #94a3b8; font-size: 9px; padding-top: 16px; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="print-bar no-print">
    <span>Faktura <strong>${esc(invoice.invoiceNumber)}</strong></span>
    <button class="print-btn" onclick="window.print()">Drukuj / Zapisz PDF</button>
  </div>

  <div class="header">
    <div>
      <h1>FAKTURA VAT</h1>
      <div style="color:#64748b; margin-top:4px;">Nr: ${esc(invoice.invoiceNumber)}</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:11px; color:#64748b;">Zamowienie: ${esc(invoice.order.orderNumber)}</div>
    </div>
  </div>

  <div class="parties">
    <div class="party">
      <div class="party-title">Sprzedawca</div>
      <div class="party-name">${esc(invoice.sellerName)}</div>
      <div class="party-text">${esc(invoice.sellerAddress)}</div>
      <div class="party-text">NIP: ${esc(invoice.sellerNip)}</div>
    </div>
    <div class="party">
      <div class="party-title">Nabywca</div>
      <div class="party-name">${esc(invoice.buyerName)}</div>
      ${invoice.buyerAddress ? `<div class="party-text">${esc(invoice.buyerAddress)}</div>` : ''}
      ${invoice.buyerNip ? `<div class="party-text">NIP: ${esc(invoice.buyerNip)}</div>` : ''}
    </div>
  </div>

  <div class="dates">
    <div class="date-item">
      <div class="date-label">Data wystawienia</div>
      <div class="date-value">${issueDate}</div>
    </div>
    <div class="date-item">
      <div class="date-label">Data sprzedazy</div>
      <div class="date-value">${saleDate}</div>
    </div>
    ${dueDate ? `<div class="date-item">
      <div class="date-label">Termin platnosci</div>
      <div class="date-value">${dueDate}</div>
    </div>` : ''}
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:30px">Lp.</th>
        <th>Nazwa</th>
        <th style="width:40px;text-align:center">Ilosc</th>
        <th style="width:80px;text-align:right">Cena netto</th>
        <th style="width:90px;text-align:right">Wartosc netto</th>
        <th style="width:40px;text-align:center">VAT</th>
        <th style="width:80px;text-align:right">Kwota VAT</th>
        <th style="width:90px;text-align:right">Brutto</th>
      </tr>
    </thead>
    <tbody>
      ${itemsRows}
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-box">
      <div class="summary-row"><span>Wartosc netto:</span><span>${fmt(invoice.subtotalNetto)} zl</span></div>
      <div class="summary-row"><span>VAT ${invoice.vatRate}%:</span><span>${fmt(invoice.vatAmount)} zl</span></div>
      <div class="summary-total"><span>Do zaplaty:</span><span>${fmt(invoice.totalBrutto)} zl</span></div>
    </div>
  </div>

  <div class="bank">
    <div class="bank-title">Dane do przelewu</div>
    <div class="bank-row"><span class="bank-label">Odbiorca:</span><span class="bank-value">TAKMA Tadeusz Tiuchty</span></div>
    <div class="bank-row"><span class="bank-label">Bank:</span><span class="bank-value">PKO BP</span></div>
    <div class="bank-row"><span class="bank-label">Nr konta:</span><span class="bank-value" style="font-family:monospace;letter-spacing:1px;">39 1020 5297 0000 1902 0283 3069</span></div>
    <div class="bank-row"><span class="bank-label">Tytul:</span><span class="bank-value">Faktura ${esc(invoice.invoiceNumber)}</span></div>
  </div>

  ${invoice.ksefNumber ? `<div class="ksef-info">Numer KSeF: <strong>${esc(invoice.ksefNumber)}</strong></div>` : ''}

  <div class="footer">
    <p>Dokument wygenerowany automatycznie — takma.com.pl</p>
    <p>TAKMA Tadeusz Tiuchty — Autoryzowany Partner Zebra Technologies</p>
  </div>
</body>
</html>`

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}
