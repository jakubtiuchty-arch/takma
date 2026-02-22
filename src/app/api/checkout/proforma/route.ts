import { NextRequest, NextResponse } from 'next/server'
import { sendOrderConfirmation, sendAdminNotification } from '@/lib/email'

interface ProformaItem {
  productName: string
  partNumber?: string
  quantity: number
  priceNetto: number
}

interface ProformaRequest {
  items: ProformaItem[]
  customer: {
    company: string
    nip: string
    contactName: string
    email: string
    phone: string
    street: string
    buildingNumber: string
    postalCode: string
    city: string
  }
  subtotalNetto: number
  shippingNetto: number
  vatAmount: number
  totalBrutto: number
  orderNumber: string
  notes?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ProformaRequest = await request.json()
    const {
      items,
      customer,
      subtotalNetto,
      shippingNetto,
      vatAmount,
      totalBrutto,
      orderNumber,
      notes,
    } = data

    const today = new Date().toLocaleDateString('pl-PL')
    const dueDate = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toLocaleDateString('pl-PL')

    const url = new URL(request.url)
    const baseUrl = `${url.protocol}//${url.host}`

    // Generuj wiersze tabeli
    const itemsRows = items
      .map((item, index) => {
        const totalNetto = item.priceNetto * item.quantity
        const totalBrutto = totalNetto * 1.23
        return `
        <tr>
          <td>${index + 1}</td>
          <td>
            <div class="service-name">${escapeHtml(item.productName)}</div>
            ${item.partNumber ? `<div class="service-notes">PN: ${escapeHtml(item.partNumber)}</div>` : ''}
          </td>
          <td>${item.quantity} szt.</td>
          <td class="amount">${formatPrice(item.priceNetto)} zł</td>
          <td style="text-align: center;">23%</td>
          <td class="amount">${formatPrice(totalBrutto)} zł</td>
        </tr>
      `
      })
      .join('')

    // Wiersz dostawy (jeśli jest koszt)
    const shippingRow =
      shippingNetto > 0
        ? `
        <tr>
          <td>${items.length + 1}</td>
          <td>
            <div class="service-name">Dostawa kurierska</div>
          </td>
          <td>1 szt.</td>
          <td class="amount">${formatPrice(shippingNetto)} zł</td>
          <td style="text-align: center;">23%</td>
          <td class="amount">${formatPrice(shippingNetto * 1.23)} zł</td>
        </tr>
      `
        : ''

    const fullAddress = `${customer.street} ${customer.buildingNumber}`

    const html = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Pro Forma ${orderNumber} — TAKMA</title>
  <style>
    @media print {
      .no-print { display: none !important; }
      body { padding: 20px; margin: 0; }
    }
    @page {
      size: A4;
      margin: 15mm;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 11px;
      line-height: 1.4;
      color: #333;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
      background: white;
    }
    .print-controls {
      background: #2563eb;
      color: white;
      padding: 15px 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .print-btn {
      background: white;
      color: #2563eb;
      border: none;
      padding: 10px 25px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      font-size: 14px;
    }
    .print-btn:hover { background: #f0f0f0; }
    .document {
      background: white;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 30px;
      padding-bottom: 15px;
      border-bottom: 3px solid #2563eb;
    }
    .logos-row {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .logo-img { height: 55px; width: auto; }
    .badge-img { height: 45px; width: auto; }
    .doc-title { text-align: right; }
    .doc-title h1 { font-size: 26px; color: #1e3a5f; margin-bottom: 5px; letter-spacing: 2px; }
    .doc-title .number { font-size: 12px; color: #666; }

    .parties { display: flex; justify-content: space-between; margin-bottom: 25px; }
    .party { width: 47%; }
    .party-title {
      font-weight: bold;
      color: #2563eb;
      margin-bottom: 8px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 5px;
    }
    .party-name { font-weight: bold; font-size: 13px; margin-bottom: 4px; }
    .party-text { font-size: 11px; margin-bottom: 2px; color: #444; }

    .dates {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      padding: 12px 15px;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    .date-item { text-align: center; flex: 1; }
    .date-label { font-size: 9px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
    .date-value { font-weight: bold; font-size: 13px; margin-top: 3px; }

    table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
    th {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      padding: 10px 12px;
      text-align: left;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    td { padding: 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    .amount { text-align: right; font-weight: bold; }
    .service-name { font-weight: 600; color: #1e3a5f; }
    .service-notes { font-size: 10px; color: #64748b; margin-top: 4px; }

    .summary {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 25px;
    }
    .summary-box {
      width: 220px;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    .summary-row { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 11px; }
    .summary-total {
      font-size: 16px;
      font-weight: bold;
      color: #2563eb;
      border-top: 2px solid #2563eb;
      padding-top: 10px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    .bank-details {
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      padding: 18px;
      border-radius: 8px;
      margin-bottom: 25px;
      border: 1px solid #93c5fd;
    }
    .bank-title { font-weight: bold; color: #1e40af; margin-bottom: 12px; font-size: 12px; }
    .bank-row { display: flex; margin-bottom: 6px; }
    .bank-label { width: 110px; color: #475569; font-size: 11px; }
    .bank-value { font-weight: 600; font-size: 11px; }
    .bank-account { font-family: 'Courier New', monospace; font-size: 13px; letter-spacing: 1px; color: #1e40af; }

    .footer {
      text-align: center;
      color: #64748b;
      font-size: 9px;
      padding-top: 15px;
      border-top: 1px solid #e5e7eb;
    }
    .footer p { margin-bottom: 3px; }
  </style>
</head>
<body>
  <div class="print-controls no-print">
    <div>
      <strong>Pro Forma ${escapeHtml(orderNumber)}</strong> — Kliknij przycisk aby wydrukować lub zapisać jako PDF
    </div>
    <button class="print-btn" onclick="window.print()">Drukuj / Zapisz PDF</button>
  </div>

  <div class="document">
    <div class="header">
      <div class="logo-section">
        <div class="logos-row">
          <img src="${baseUrl}/images/takma_logo.png" alt="TAKMA" class="logo-img" />
        </div>
      </div>
      <div class="doc-title">
        <h1>PRO FORMA</h1>
        <div class="number">Nr: PF/${escapeHtml(orderNumber)}/${new Date().getFullYear()}</div>
      </div>
    </div>

    <div class="parties">
      <div class="party">
        <div class="party-title">Sprzedawca</div>
        <div class="party-name">TAKMA Tadeusz Tiuchty</div>
        <div class="party-text">ul. Poświęcka 1a</div>
        <div class="party-text">51-128 Wrocław</div>
        <div class="party-text">NIP: 9151004377</div>
        <div class="party-text">Email: takma@takma.com.pl</div>
      </div>
      <div class="party">
        <div class="party-title">Nabywca</div>
        <div class="party-name">${escapeHtml(customer.company)}</div>
        ${customer.contactName ? `<div class="party-text">${escapeHtml(customer.contactName)}</div>` : ''}
        <div class="party-text">${escapeHtml(fullAddress)}</div>
        <div class="party-text">${escapeHtml(customer.postalCode)} ${escapeHtml(customer.city)}</div>
        <div class="party-text"><strong>NIP: ${escapeHtml(customer.nip)}</strong></div>
        <div class="party-text">Email: ${escapeHtml(customer.email)}</div>
        ${customer.phone ? `<div class="party-text">Tel: ${escapeHtml(customer.phone)}</div>` : ''}
      </div>
    </div>

    <div class="dates">
      <div class="date-item">
        <div class="date-label">Data wystawienia</div>
        <div class="date-value">${today}</div>
      </div>
      <div class="date-item">
        <div class="date-label">Termin płatności</div>
        <div class="date-value">${dueDate}</div>
      </div>
      <div class="date-item">
        <div class="date-label">Nr zamówienia</div>
        <div class="date-value">${escapeHtml(orderNumber)}</div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 35px;">Lp.</th>
          <th>Nazwa produktu</th>
          <th style="width: 60px;">Ilość</th>
          <th style="width: 90px; text-align: right;">Cena netto</th>
          <th style="width: 50px; text-align: center;">VAT</th>
          <th style="width: 90px; text-align: right;">Brutto</th>
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
          <span>Wartość netto:</span>
          <span>${formatPrice(subtotalNetto + shippingNetto)} zł</span>
        </div>
        <div class="summary-row">
          <span>VAT 23%:</span>
          <span>${formatPrice(vatAmount)} zł</span>
        </div>
        <div class="summary-total">
          <span>Do zapłaty:</span>
          <span>${formatPrice(totalBrutto)} zł</span>
        </div>
      </div>
    </div>

    <div class="bank-details">
      <div class="bank-title">Dane do przelewu</div>
      <div class="bank-row">
        <span class="bank-label">Odbiorca:</span>
        <span class="bank-value">TAKMA Tadeusz Tiuchty, ul. Poświęcka 1a, 51-128 Wrocław</span>
      </div>
      <div class="bank-row">
        <span class="bank-label">Bank:</span>
        <span class="bank-value">PKO BP</span>
      </div>
      <div class="bank-row">
        <span class="bank-label">Nr konta:</span>
        <span class="bank-value bank-account">39 1020 5297 0000 1902 0283 3069</span>
      </div>
      <div class="bank-row">
        <span class="bank-label">Tytuł przelewu:</span>
        <span class="bank-value">Zamówienie ${escapeHtml(orderNumber)}</span>
      </div>
      <div class="bank-row">
        <span class="bank-label">Kwota:</span>
        <span class="bank-value">${formatPrice(totalBrutto)} zł brutto</span>
      </div>
    </div>

    ${
      notes
        ? `
    <div style="background: #fef3c7; padding: 12px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #fcd34d;">
      <strong style="color: #92400e;">Uwagi do zamówienia:</strong>
      <p style="margin-top: 5px; color: #78350f;">${escapeHtml(notes)}</p>
    </div>
    `
        : ''
    }

    <div class="footer">
      <p>Dokument wygenerowany automatycznie przez system takma.com.pl</p>
      <p>Pro forma nie jest dokumentem księgowym. Faktura VAT zostanie wystawiona po zaksięgowaniu płatności.</p>
      <p style="margin-top: 8px;">TAKMA — Autoryzowany Dystrybutor Zebra Technologies</p>
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    }
  </script>
</body>
</html>
`

    // Wysyłka maili (nie blokuje odpowiedzi — fire and forget)
    const emailItems = items.map(i => ({
      name: i.productName,
      quantity: i.quantity,
      priceNetto: i.priceNetto,
    }))

    sendOrderConfirmation(customer.email, orderNumber, emailItems, totalBrutto)
      .then(r => { if (!r.success) console.error('[Proforma] Błąd maila do klienta:', r.error) })
      .catch(err => console.error('[Proforma] Exception mail klient:', err))

    sendAdminNotification(orderNumber, customer.email, totalBrutto, 'PROFORMA')
      .then(r => { if (!r.success) console.error('[Proforma] Błąd maila do admina:', r.error) })
      .catch(err => console.error('[Proforma] Exception mail admin:', err))

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  } catch (error: unknown) {
    console.error('Error generating proforma:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new NextResponse(`Błąd generowania pro formy: ${message}`, {
      status: 500,
    })
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function formatPrice(value: number): string {
  return value.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
