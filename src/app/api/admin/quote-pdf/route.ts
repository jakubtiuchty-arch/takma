import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function formatPrice(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export async function GET(request: NextRequest) {
  const quoteId = request.nextUrl.searchParams.get('id')

  if (!quoteId) {
    return new NextResponse('Brak ID oferty', { status: 400 })
  }

  const quote = await prisma.quote.findUnique({
    where: { id: quoteId },
    include: { items: { orderBy: { position: 'asc' } } },
  })

  if (!quote) {
    return new NextResponse('Oferta nie znaleziona', { status: 404 })
  }

  const today = new Date().toLocaleDateString('pl-PL')

  const url = new URL(request.url)
  const baseUrl = `${url.protocol}//${url.host}`

  const itemsRows = quote.items
    .map((item) => {
      const totalBrutto = Math.round(item.totalNetto * 1.23)
      return `
      <tr>
        <td>${item.position}</td>
        <td>
          <div class="service-name">${escapeHtml(item.productName)}</div>
          ${item.partNumber ? `<div class="service-notes">PN: ${escapeHtml(item.partNumber)}</div>` : ''}
          ${item.description ? `<div class="service-notes">${escapeHtml(item.description)}</div>` : ''}
        </td>
        <td>${item.quantity} szt.</td>
        <td class="amount">${formatPrice(item.priceNetto)} zł</td>
        <td style="text-align:center;">23%</td>
        <td class="amount">${formatPrice(totalBrutto)} zł</td>
      </tr>`
    })
    .join('')

  const html = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Oferta ${quote.quoteNumber} — TAKMA</title>
  <style>
    @media print {
      .no-print { display: none !important; }
      body { padding: 20px; margin: 0; }
    }
    @page { size: A4; margin: 15mm; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 11px; line-height: 1.4; color: #333;
      padding: 24px 40px; max-width: 800px; margin: 0 auto; background: white;
    }
    .print-controls {
      background: #2563eb; color: white; padding: 15px 20px; margin-bottom: 20px;
      border-radius: 8px; display: flex; justify-content: space-between; align-items: center;
    }
    .print-btn {
      background: white; color: #2563eb; border: none; padding: 10px 25px;
      border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 14px;
    }
    .print-btn:hover { background: #f0f0f0; }
    .header {
      display: flex; justify-content: space-between; align-items: flex-start;
      margin-bottom: 18px; padding-bottom: 12px; border-bottom: 3px solid #2563eb;
    }
    .logo-img { height: 60px; width: auto; }
    .doc-title { text-align: right; }
    .doc-title h1 { font-size: 26px; color: #1e3a5f; margin-bottom: 5px; letter-spacing: 2px; }
    .doc-title .number { font-size: 12px; color: #666; }
    .parties { display: flex; justify-content: space-between; margin-bottom: 16px; }
    .party { width: 47%; }
    .party-title {
      font-weight: bold; color: #2563eb; margin-bottom: 8px; font-size: 10px;
      text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px;
    }
    .party-name { font-weight: bold; font-size: 13px; margin-bottom: 4px; }
    .party-text { font-size: 11px; margin-bottom: 2px; color: #444; }
    .dates {
      display: flex; justify-content: space-between; margin-bottom: 16px;
      padding: 10px 14px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-radius: 6px; border: 1px solid #e2e8f0;
    }
    .date-item { text-align: center; flex: 1; }
    .date-label { font-size: 9px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
    .date-value { font-weight: bold; font-size: 13px; margin-top: 3px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    th {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white;
      padding: 10px 12px; text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    td { padding: 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    .amount { text-align: right; font-weight: bold; }
    .service-name { font-weight: 600; color: #1e3a5f; }
    .service-notes { font-size: 10px; color: #64748b; margin-top: 4px; }
    .summary { display: flex; justify-content: flex-end; margin-bottom: 14px; }
    .summary-box {
      width: 260px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;
    }
    .summary-row { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 11px; white-space: nowrap; }
    .summary-total {
      font-size: 16px; font-weight: bold; color: #2563eb;
      border-top: 2px solid #2563eb; padding-top: 10px; margin-top: 10px;
      display: flex; justify-content: space-between; white-space: nowrap;
    }
    .freebies {
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      padding: 12px 15px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #86efac;
    }
    .zebra-banner {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      padding: 10px 14px; border-radius: 6px; margin-bottom: 12px;
      border: 1px solid #e2e8f0;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .zebra-logos {
      display: flex; gap: 20px; align-items: center; justify-content: center;
      margin-bottom: 7px; flex-wrap: wrap;
    }
    .zebra-logos img { height: 26px; width: auto; object-fit: contain; }
    .zebra-banner-text { font-size: 9.5px; line-height: 1.4; color: #334155; text-align: center; }
    .zebra-banner-text strong { color: #1e3a5f; }
    .zebra-banner-link { margin-top: 4px; }
    .zebra-banner-link a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .conditions {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      padding: 12px 14px; border-radius: 6px; margin-bottom: 14px; border: 1px solid #e2e8f0;
    }
    .conditions-title { font-weight: bold; color: #1e3a5f; margin-bottom: 10px; font-size: 12px; }
    .conditions-row { display: flex; margin-bottom: 6px; }
    .conditions-label { width: 140px; color: #64748b; font-size: 11px; }
    .conditions-value { font-weight: 600; font-size: 11px; }
    .footer {
      text-align: center; color: #64748b; font-size: 9px;
      padding-top: 10px; border-top: 1px solid #e5e7eb;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .footer p { margin-bottom: 3px; }
  </style>
</head>
<body>
  <div class="print-controls no-print">
    <div><strong>Oferta ${escapeHtml(quote.quoteNumber)}</strong> — Kliknij przycisk aby wydrukować lub zapisać jako PDF</div>
    <button class="print-btn" onclick="window.print()">Drukuj / Zapisz PDF</button>
  </div>

  <div class="document">
    <div class="header">
      <div><img src="${baseUrl}/images/takma_logo.png" alt="TAKMA" class="logo-img" /></div>
      <div class="doc-title">
        <h1>OFERTA</h1>
        <div class="number">Nr: ${escapeHtml(quote.quoteNumber)}</div>
      </div>
    </div>

    <div class="parties">
      <div class="party">
        <div class="party-title">Sprzedawca</div>
        <div class="party-name">TAKMA</div>
        <div class="party-text">ul. Poświęcka 1a</div>
        <div class="party-text">51-128 Wrocław</div>
        <div class="party-text">NIP: 9151004377</div>
        <div class="party-text">Email: takma@takma.com.pl</div>
        <div class="party-text">Tel: +48 607 819 688</div>
      </div>
      <div class="party">
        <div class="party-title">Nabywca</div>
        <div class="party-name">${escapeHtml(quote.clientCompany)}</div>
        ${quote.clientContact ? `<div class="party-text">${escapeHtml(quote.clientContact)}</div>` : ''}
        ${quote.clientAddress ? quote.clientAddress.split(',').map((part: string) => `<div class="party-text">${escapeHtml(part.trim())}</div>`).join('') : ''}
        ${quote.clientNip ? `<div class="party-text"><strong>NIP: ${escapeHtml(quote.clientNip)}</strong></div>` : ''}
        ${quote.clientEmail ? `<div class="party-text">Email: ${escapeHtml(quote.clientEmail)}</div>` : ''}
        ${quote.clientPhone ? `<div class="party-text">Tel: ${escapeHtml(quote.clientPhone)}</div>` : ''}
      </div>
    </div>

    <div class="dates">
      <div class="date-item">
        <div class="date-label">Data wystawienia</div>
        <div class="date-value">${today}</div>
      </div>
      <div class="date-item">
        <div class="date-label">Ważna do</div>
        <div class="date-value">${quote.validUntil.toLocaleDateString('pl-PL')}</div>
      </div>
      <div class="date-item">
        <div class="date-label">Nr oferty</div>
        <div class="date-value">${escapeHtml(quote.quoteNumber)}</div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width:35px;">Lp.</th>
          <th>Nazwa produktu</th>
          <th style="width:60px;">Ilość</th>
          <th style="width:90px;text-align:right;">Cena netto</th>
          <th style="width:50px;text-align:center;">VAT</th>
          <th style="width:90px;text-align:right;">Brutto</th>
        </tr>
      </thead>
      <tbody>${itemsRows}</tbody>
    </table>

    <div class="summary">
      <div class="summary-box">
        <div class="summary-row">
          <span>Wartość netto:</span>
          <span>${formatPrice(quote.subtotalNetto)} zł</span>
        </div>
        <div class="summary-row">
          <span>VAT 23%:</span>
          <span>${formatPrice(quote.vatAmount)} zł</span>
        </div>
        <div class="summary-total">
          <span>Razem brutto:</span>
          <span>${formatPrice(quote.totalBrutto)} zł</span>
        </div>
      </div>
    </div>

    ${quote.freebiesNote ? `
    <div class="freebies">
      <strong style="color:#166534;">Gratis:</strong> ${escapeHtml(quote.freebiesNote)}
    </div>` : ''}

    <div class="conditions">
      <div class="conditions-title">Warunki oferty</div>
      <div class="conditions-row">
        <span class="conditions-label">Ważność oferty:</span>
        <span class="conditions-value">do ${quote.validUntil.toLocaleDateString('pl-PL')}</span>
      </div>
      <div class="conditions-row">
        <span class="conditions-label">Warunki płatności:</span>
        <span class="conditions-value">${escapeHtml(quote.paymentTerms)}</span>
      </div>
      <div class="conditions-row">
        <span class="conditions-label">Termin dostawy:</span>
        <span class="conditions-value">${escapeHtml(quote.deliveryTerms)}</span>
      </div>
    </div>

    ${quote.notes ? `
    <div style="background:#fefce8;padding:12px;border-radius:6px;margin-bottom:20px;border:1px solid #fde68a;">
      <strong style="color:#92400e;">Uwagi:</strong>
      <p style="margin-top:5px;color:#78350f;">${escapeHtml(quote.notes)}</p>
    </div>` : ''}

    ${quote.zebraServiceBanner ? `
    <div class="zebra-banner">
      <div class="zebra-logos">
        <img src="${baseUrl}/images/certifications/zebra-printer-repair-specialist.png" alt="Zebra Premier Solution Partner — Printer Repair Specialist" />
        <img src="${baseUrl}/images/certifications/zebra-public-sector-specialist.png" alt="Zebra Premier Solution Partner — Public Sector Specialist" />
        <img src="${baseUrl}/images/certifications/zebra-premier-solution-partner.png" alt="Zebra Premier Solution Partner" />
      </div>
      <div class="zebra-banner-text">
        <strong>Wsparcie gwarancyjne i pogwarancyjne urządzeń Zebra</strong> — TAKMA autoryzowany serwis Zebra. Naprawy w kraju, oryginalne części, gwarancja 3–6 mies.
        <div class="zebra-banner-link">Zgłoszenia serwisowe: <a href="https://www.serwis-zebry.pl">www.serwis-zebry.pl</a></div>
      </div>
    </div>` : ''}

    <div class="footer">
      <p>Dokument wygenerowany automatycznie przez system takma.com.pl</p>
      <p>TAKMA — Autoryzowany Partner Zebra Technologies | www.takma.com.pl | +48 607 819 688</p>
    </div>
  </div>

  <script>window.onload = function() { setTimeout(function() { window.print(); }, 500); }</script>
</body>
</html>`

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
