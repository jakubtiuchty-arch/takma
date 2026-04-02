import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true, customer: true },
  })

  if (!order) {
    return new NextResponse('Zamówienie nie znalezione', { status: 404 })
  }

  const fmt = (v: number) =>
    (v / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

  const statusLabels: Record<string, string> = {
    PENDING_PAYMENT: 'Oczekuje na płatność',
    AWAITING_PAYMENT: 'Oczekuje na przelew',
    PAID: 'Opłacone',
    PROCESSING: 'W realizacji',
    SHIPPED: 'Wysłane',
    DELIVERED: 'Dostarczone',
    CANCELLED: 'Anulowane',
    EXPIRED: 'Wygasłe',
    REFUNDED: 'Zwrócone',
  }

  const paymentLabels: Record<string, string> = {
    ONLINE: 'Płatność online (Stripe)',
    PROFORMA: 'Przelew (pro forma)',
  }

  const itemsRows = order.items
    .map(
      (item, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>
          <div class="product-name">${esc(item.productName)}</div>
          <div class="product-pn">PN: ${esc(item.partNumber)}</div>
          ${item.note ? `<div class="product-note">${esc(item.note)}</div>` : ''}
        </td>
        <td style="text-align:center">${item.quantity}</td>
        <td class="amount">${fmt(item.priceNetto)} zł</td>
        <td class="amount">${fmt(item.totalNetto)} zł</td>
      </tr>`
    )
    .join('')

  const shippingRow =
    order.shippingNetto > 0
      ? `<tr>
          <td>${order.items.length + 1}</td>
          <td><div class="product-name">Dostawa kurierska</div></td>
          <td style="text-align:center">1</td>
          <td class="amount">${fmt(order.shippingNetto)} zł</td>
          <td class="amount">${fmt(order.shippingNetto)} zł</td>
        </tr>`
      : ''

  const customerName = [order.customer.firstName, order.customer.lastName].filter(Boolean).join(' ')
  const createdAt = order.createdAt.toLocaleDateString('pl-PL')
  const paidAt = order.paidAt?.toLocaleDateString('pl-PL')
  const shippedAt = order.shippedAt?.toLocaleDateString('pl-PL')

  const html = `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Zamówienie ${esc(order.orderNumber)} — TAKMA</title>
  <style>
    @media print {
      .no-print { display: none !important; }
      body { padding: 15mm; margin: 0; }
    }
    @page { size: A4; margin: 15mm; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 11px;
      line-height: 1.5;
      color: #333;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
      background: white;
    }
    .print-bar {
      background: #1e293b;
      color: white;
      padding: 14px 20px;
      margin-bottom: 24px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
    }
    .print-btn {
      background: white;
      color: #1e293b;
      border: none;
      padding: 9px 22px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
    }
    .print-btn:hover { background: #f1f5f9; }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 28px;
      padding-bottom: 14px;
      border-bottom: 3px solid #2563eb;
    }
    .header h1 { font-size: 22px; color: #1e3a5f; }
    .header .meta { font-size: 11px; color: #64748b; margin-top: 4px; }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    .info-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 14px;
    }
    .info-title {
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #2563eb;
      margin-bottom: 8px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 5px;
    }
    .info-row { font-size: 11px; margin-bottom: 2px; color: #444; }
    .info-row strong { color: #1e293b; }

    .status-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 600;
      background: #dbeafe;
      color: #1e40af;
    }

    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      padding: 9px 12px;
      text-align: left;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    td { padding: 10px 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    .amount { text-align: right; font-weight: 600; }
    .product-name { font-weight: 600; color: #1e3a5f; }
    .product-pn { font-size: 10px; color: #64748b; margin-top: 2px; }
    .product-note { font-size: 10px; color: #92400e; margin-top: 2px; font-style: italic; }

    .summary {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 24px;
    }
    .summary-box {
      width: 220px;
      background: #f8fafc;
      padding: 14px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    .summary-row { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 11px; }
    .summary-total {
      font-size: 15px;
      font-weight: bold;
      color: #2563eb;
      border-top: 2px solid #2563eb;
      padding-top: 8px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
    }

    .notes-box {
      background: #fef3c7;
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 20px;
      border: 1px solid #fcd34d;
    }
    .notes-box strong { color: #92400e; }
    .notes-box p { margin-top: 4px; color: #78350f; }

    .footer {
      text-align: center;
      color: #94a3b8;
      font-size: 9px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
    }
  </style>
</head>
<body>
  <div class="print-bar no-print">
    <span>Zamówienie <strong>${esc(order.orderNumber)}</strong></span>
    <button class="print-btn" onclick="window.print()">Drukuj / Zapisz PDF</button>
  </div>

  <div class="header">
    <div>
      <h1>Zamówienie ${esc(order.orderNumber)}</h1>
      <div class="meta">Data złożenia: ${createdAt}</div>
    </div>
    <div style="text-align:right">
      <div class="status-badge">${statusLabels[order.status] || order.status}</div>
      <div class="meta" style="margin-top:6px">${paymentLabels[order.paymentMethod] || order.paymentMethod}</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-box">
      <div class="info-title">Klient</div>
      <div class="info-row"><strong>${esc(order.customer.company)}</strong></div>
      ${customerName ? `<div class="info-row">${esc(customerName)}</div>` : ''}
      <div class="info-row">${esc(order.customer.email)}</div>
      ${order.customer.phone ? `<div class="info-row">Tel: ${esc(order.customer.phone)}</div>` : ''}
      ${order.customer.nip ? `<div class="info-row">NIP: ${esc(order.customer.nip)}</div>` : ''}
    </div>
    <div class="info-box">
      <div class="info-title">Adres${order.customer.shippingAddress ? ' (faktura)' : ''}</div>
      <div class="info-row">${esc(order.customer.address || '')}</div>
      ${order.customer.shippingAddress ? `
        <div class="info-title" style="margin-top:10px">Adres dostawy</div>
        <div class="info-row">${esc(order.customer.shippingAddress)}</div>
      ` : ''}
    </div>
  </div>

  <div class="info-grid" style="margin-bottom:20px">
    <div class="info-box">
      <div class="info-title">Daty</div>
      <div class="info-row">Utworzono: <strong>${createdAt}</strong></div>
      ${paidAt ? `<div class="info-row">Opłacono: <strong>${paidAt}</strong></div>` : ''}
      ${shippedAt ? `<div class="info-row">Wysłano: <strong>${shippedAt}</strong></div>` : ''}
    </div>
    ${order.trackingNumber ? `
    <div class="info-box">
      <div class="info-title">Przesyłka</div>
      ${order.carrierName ? `<div class="info-row">Kurier: <strong>${esc(order.carrierName)}</strong></div>` : ''}
      <div class="info-row">Nr przesyłki: <strong>${esc(order.trackingNumber)}</strong></div>
    </div>` : ''}
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:35px">Lp.</th>
        <th>Produkt</th>
        <th style="width:50px;text-align:center">Ilość</th>
        <th style="width:90px;text-align:right">Cena netto</th>
        <th style="width:100px;text-align:right">Razem netto</th>
      </tr>
    </thead>
    <tbody>
      ${itemsRows}
      ${shippingRow}
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-box">
      <div class="summary-row">
        <span>Netto:</span>
        <span>${fmt(order.subtotalNetto + order.shippingNetto)} zł</span>
      </div>
      <div class="summary-row">
        <span>VAT 23%:</span>
        <span>${fmt(order.vatAmount)} zł</span>
      </div>
      <div class="summary-total">
        <span>Brutto:</span>
        <span>${fmt(order.totalBrutto)} zł</span>
      </div>
    </div>
  </div>

  ${order.customerNotes ? `
  <div class="notes-box">
    <strong>Uwagi klienta:</strong>
    <p>${esc(order.customerNotes)}</p>
  </div>` : ''}

  ${order.adminNotes ? `
  <div class="notes-box" style="background:#eff6ff;border-color:#93c5fd">
    <strong style="color:#1e40af">Notatki wewnętrzne:</strong>
    <p style="color:#1e3a5f">${esc(order.adminNotes)}</p>
  </div>` : ''}

  <div class="footer">
    <p>Dokument wygenerowany z systemu takma.com.pl — ${new Date().toLocaleDateString('pl-PL')}</p>
    <p>TAKMA Tadeusz Tiuchty — Autoryzowany Partner Zebra Technologies</p>
  </div>
</body>
</html>`

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
