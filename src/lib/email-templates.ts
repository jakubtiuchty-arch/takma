// ─── TAKMA Email Design System ───────────────────────────────────────────────
// Profesjonalny system szablonów email B2B — table-based layout, Outlook compatible
// Zero dependencies — plain TypeScript helpers returning HTML strings

// ─── Accent Colors ──────────────────────────────────────────────────────────

type AccentColor = 'blue' | 'green' | 'cyan'

const ACCENT: Record<AccentColor, { bg: string; light: string }> = {
  blue:  { bg: '#1e40af', light: '#dbeafe' },
  green: { bg: '#059669', light: '#d1fae5' },
  cyan:  { bg: '#0891b2', light: '#cffafe' },
}

// ─── Images (hosted on serwis-zebry.pl) ─────────────────────────────────────

const IMG = {
  logo: 'https://www.serwis-zebry.pl/takma_logo_white.png',
  premierPartner: 'https://www.serwis-zebry.pl/premier-partner-1.png',
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fmtPLN(amount: number): string {
  return amount.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// ─── Layout Components ──────────────────────────────────────────────────────

function emailLayout(opts: { preheader: string; content: string }): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pl">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>TAKMA</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    body, table, td { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
    img { border: 0; display: block; }
    a { color: #2563eb; }
    @media only screen and (max-width: 620px) {
      .outer { width: 100% !important; }
      .inner { padding: 20px 16px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%">
  <span style="display:none;font-size:1px;color:#f3f4f6;max-height:0;overflow:hidden;mso-hide:all">${esc(opts.preheader)}&#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6">
    <tr>
      <td align="center" style="padding:24px 8px">
        <table role="presentation" class="outer" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
          ${opts.content}
        </table>
        ${emailFooter()}
      </td>
    </tr>
  </table>
</body>
</html>`
}

function emailHeader(opts: { title: string; subtitle?: string; accent: AccentColor }): string {
  const color = ACCENT[opts.accent]
  return `
          <tr>
            <td style="background-color:#1f2937;padding:20px 32px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" valign="middle" style="width:180px">
                    <img src="${IMG.logo}" alt="TAKMA" width="160" style="display:block;max-width:160px;height:auto" />
                  </td>
                  <td align="right" valign="middle">
                    <img src="${IMG.premierPartner}" alt="Zebra Premier Partner" width="100" style="display:block;max-width:100px;height:auto" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:${color.bg};padding:24px 32px">
              <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;line-height:1.3">${opts.title}</h1>
              ${opts.subtitle ? `<p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.9)">${opts.subtitle}</p>` : ''}
            </td>
          </tr>`
}

function emailBody(content: string): string {
  return `
          <tr>
            <td class="inner" style="padding:28px 32px 32px">${content}</td>
          </tr>`
}

function emailFooter(): string {
  return `
        <table role="presentation" width="600" class="outer" cellpadding="0" cellspacing="0" style="margin-top:16px">
          <tr>
            <td align="center" style="padding:0 32px 8px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="border-top:1px solid #d1d5db"></td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 32px 24px;font-size:12px;color:#9ca3af;line-height:1.6">
              <strong style="color:#6b7280">TAKMA</strong><br />
              ul. Po&#347;wi&#281;cka 1a, 51-128 Wroc&#322;aw &middot; NIP: 915-100-43-77<br />
              <a href="mailto:takma@takma.com.pl" style="color:#9ca3af;text-decoration:none">takma@takma.com.pl</a> &middot;
              <a href="https://www.takma.com.pl" style="color:#9ca3af;text-decoration:none">takma.com.pl</a><br />
              &#169; ${new Date().getFullYear()} TAKMA &middot; Wiadomo&#347;&#263; wygenerowana automatycznie
            </td>
          </tr>
        </table>`
}

// ─── Content Components ─────────────────────────────────────────────────────

function emailText(text: string): string {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151">${text}</p>`
}

function emailGreeting(name?: string): string {
  return emailText(name ? `Dzie&#324; dobry${name.startsWith(',') ? '' : ', '}${esc(name)},` : 'Dzie&#324; dobry,')
}

function emailSignature(): string {
  return `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-top:1px solid #e5e7eb;padding-top:20px">
                <tr>
                  <td style="font-size:14px;color:#6b7280;line-height:1.6">
                    Z pozdrowieniami,<br />
                    <strong style="color:#374151">Zesp&#243;&#322; TAKMA</strong><br />
                    <a href="mailto:takma@takma.com.pl" style="color:#2563eb;text-decoration:none">takma@takma.com.pl</a>
                  </td>
                </tr>
              </table>`
}

function emailDivider(): string {
  return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0"><tr><td style="border-top:1px solid #e5e7eb"></td></tr></table>'
}

function emailInfoBox(content: string, bgColor: string, borderColor: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0"><tr><td style="padding:14px 16px;background-color:${bgColor};border:1px solid ${borderColor};border-radius:8px;font-size:14px;line-height:1.6;color:#374151">${content}</td></tr></table>`
}

function emailInfoBlue(content: string): string {
  return emailInfoBox(content, '#eff6ff', '#bfdbfe')
}

function emailInfoGreen(content: string): string {
  return emailInfoBox(content, '#f0fdf4', '#bbf7d0')
}

function emailInfoAmber(content: string): string {
  return emailInfoBox(content, '#fefce8', '#fde68a')
}

function emailInfoCyan(content: string): string {
  return emailInfoBox(content, '#ecfeff', '#a5f3fc')
}

function emailTable(headers: string[], rows: string[][]): string {
  const ths = headers.map((h, i) => {
    const align = i === 0 ? 'left' : i === headers.length - 1 ? 'right' : 'center'
    return `<th style="padding:10px 8px;text-align:${align};font-size:13px;font-weight:600;color:#374151;background-color:#f9fafb;border-bottom:2px solid #e5e7eb">${h}</th>`
  }).join('')

  const trs = rows.map(row => {
    const tds = row.map((cell, i) => {
      const align = i === 0 ? 'left' : i === row.length - 1 ? 'right' : 'center'
      return `<td style="padding:10px 8px;text-align:${align};font-size:14px;color:#374151;border-bottom:1px solid #f3f4f6">${cell}</td>`
    }).join('')
    return `<tr>${tds}</tr>`
  }).join('')

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`
}

function emailTotalBox(lines: { label: string; value: string; bold?: boolean }[]): string {
  const rows = lines.map(l => `
    <tr>
      <td style="padding:4px 0;font-size:${l.bold ? '17px' : '14px'};color:${l.bold ? '#1e293b' : '#6b7280'};text-align:right">${l.label}</td>
      <td style="padding:4px 0 4px 16px;font-size:${l.bold ? '17px' : '14px'};font-weight:${l.bold ? '700' : '600'};color:#1e293b;text-align:right;white-space:nowrap">${l.value}</td>
    </tr>`).join('')

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0"><tr><td style="padding:16px;background-color:#f0f9ff;border-radius:8px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr></table>`
}

function emailButton(text: string, url: string, color: string = '#1e40af'): string {
  return `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
                <tr>
                  <td align="center">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:44px;v-text-anchor:middle;width:260px;" arcsize="18%" strokecolor="${color}" fillcolor="${color}">
                      <w:anchorlock/>
                      <center style="color:#ffffff;font-family:sans-serif;font-size:15px;font-weight:bold;">${esc(text)}</center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <a href="${url}" target="_blank" style="display:inline-block;padding:12px 32px;background-color:${color};color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;border-radius:8px;line-height:1.2">${esc(text)}</a>
                    <!--<![endif]-->
                  </td>
                </tr>
              </table>`
}

function emailBankDetails(orderNumber: string): string {
  return emailInfoAmber(`
    <strong style="color:#92400e">Dane do przelewu:</strong><br />
    TAKMA &middot; NIP: 915-100-43-77<br />
    Nr konta: <strong>39 1020 5297 0000 1902 0283 3069</strong><br />
    Tytu&#322;: <strong>${esc(orderNumber)}</strong>
  `)
}

function emailDataTable(rows: { label: string; value: string }[]): string {
  const trs = rows.map(r => `
    <tr>
      <td style="padding:8px 0;font-size:14px;color:#6b7280;width:140px;vertical-align:top">${r.label}</td>
      <td style="padding:8px 0;font-size:14px;font-weight:600;color:#1e293b">${r.value}</td>
    </tr>`).join('')

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:12px 0">${trs}</table>`
}

function emailSectionTitle(title: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0 8px"><tr><td style="padding-bottom:8px;border-bottom:2px solid #e5e7eb;font-size:15px;font-weight:700;color:#1e293b">${title}</td></tr></table>`
}

function emailMessageBox(content: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0"><tr><td style="padding:14px 16px;border-left:4px solid #d1d5db;background-color:#f9fafb;border-radius:0 8px 8px 0;font-size:14px;line-height:1.6;color:#374151;white-space:pre-wrap">${content}</td></tr></table>`
}

// ─── Template Builders ──────────────────────────────────────────────────────

// #1 — Order Confirmation (Customer)
export function buildOrderConfirmationEmail(data: {
  orderNumber: string
  items: { name: string; partNumber?: string; quantity: number; priceNetto: number; totalNetto: number }[]
  customer: {
    firstName: string
    lastName: string
    company: string
    nip?: string | null
    phone?: string | null
    email: string
    address?: string | null
    shippingAddress?: string | null
  }
  subtotalNetto: number
  vatAmount: number
  shippingNetto: number
  totalBrutto: number
  paymentMethod: string
  customerNotes?: string | null
}): string {
  // Tabela produktów — kompaktowa, bez Lp.
  const itemRows = data.items.map(i => {
    const label = i.partNumber ? `${esc(i.name)} <span style="color:#6b7280">(${esc(i.partNumber)})</span>` : esc(i.name)
    return `
      <tr>
        <td style="padding:10px 0;font-size:14px;color:#1e293b;border-bottom:1px solid #f3f4f6">${label}</td>
        <td style="padding:10px 8px;font-size:14px;color:#374151;border-bottom:1px solid #f3f4f6;text-align:center">${i.quantity} szt.</td>
        <td style="padding:10px 0;font-size:14px;font-weight:600;color:#1e293b;border-bottom:1px solid #f3f4f6;text-align:right">${fmtPLN(i.totalNetto)} z&#322;</td>
      </tr>`
  }).join('')

  const paymentLabel = data.paymentMethod === 'ONLINE' ? 'Online (Stripe)' : 'Przelew (pro forma)'
  const shippingLabel = data.shippingNetto > 0 ? `${fmtPLN(data.shippingNetto)} z&#322;` : 'Gratis'
  const deliveryAddress = data.customer.shippingAddress || data.customer.address || '&mdash;'
  const c = data.customer

  // Kompaktowy blok: zamawiający + dostawa
  const buyerHtml = [
    `<strong>${esc(c.company)}</strong>`,
    c.nip ? `NIP: ${esc(c.nip)}` : '',
    esc(`${c.firstName} ${c.lastName}`),
    c.address ? esc(c.address) : '',
    `<a href="mailto:${esc(c.email)}" style="color:#2563eb">${esc(c.email)}</a>`,
    c.phone ? esc(c.phone) : '',
  ].filter(Boolean).join('<br />')

  const shippingHtml = [
    `<strong>Adres dostawy</strong>`,
    `${esc(c.firstName)} ${esc(c.lastName)}`,
    c.company ? esc(c.company) : '',
    esc(deliveryAddress),
    c.phone ? `Tel: ${esc(c.phone)}` : '',
    `<br /><strong>Wysy&#322;ka:</strong> ${shippingLabel}`,
    `<strong>P&#322;atno&#347;&#263;:</strong> ${paymentLabel}`,
  ].filter(Boolean).join('<br />')

  return emailLayout({
    preheader: `Zamówienie ${data.orderNumber} — ${fmtPLN(data.totalBrutto)} zł brutto`,
    content:
      emailHeader({ title: 'Dzi&#281;kujemy za zam&#243;wienie!', subtitle: `Nr zam&#243;wienia: ${esc(data.orderNumber)}`, accent: 'blue' }) +
      emailBody(
        // Tabela produktów
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 4px">
          <thead><tr>
            <th style="padding:10px 0;text-align:left;font-size:12px;font-weight:600;color:#6b7280;border-bottom:2px solid #e5e7eb;text-transform:uppercase;letter-spacing:0.5px">Produkt</th>
            <th style="padding:10px 8px;text-align:center;font-size:12px;font-weight:600;color:#6b7280;border-bottom:2px solid #e5e7eb;text-transform:uppercase;letter-spacing:0.5px">Ilo&#347;&#263;</th>
            <th style="padding:10px 0;text-align:right;font-size:12px;font-weight:600;color:#6b7280;border-bottom:2px solid #e5e7eb;text-transform:uppercase;letter-spacing:0.5px">Netto</th>
          </tr></thead>
          <tbody>${itemRows}</tbody>
        </table>` +

        // Podsumowanie cenowe — kompaktowe
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px">
          <tr><td style="padding:8px 0;font-size:13px;color:#6b7280;text-align:right">Produkty netto</td><td style="padding:8px 0 8px 12px;font-size:13px;color:#1e293b;text-align:right;width:120px">${fmtPLN(data.subtotalNetto)} z&#322;</td></tr>
          <tr><td style="padding:4px 0;font-size:13px;color:#6b7280;text-align:right">Dostawa</td><td style="padding:4px 0 4px 12px;font-size:13px;color:#1e293b;text-align:right">${shippingLabel}</td></tr>
          <tr><td style="padding:4px 0;font-size:13px;color:#6b7280;text-align:right">VAT 23%</td><td style="padding:4px 0 4px 12px;font-size:13px;color:#1e293b;text-align:right">${fmtPLN(data.vatAmount)} z&#322;</td></tr>
          <tr><td style="padding:10px 0 0;font-size:17px;font-weight:700;color:#1e293b;text-align:right;border-top:2px solid #1e40af">Do zap&#322;aty</td><td style="padding:10px 0 0 12px;font-size:17px;font-weight:700;color:#1e40af;text-align:right;border-top:2px solid #1e40af">${fmtPLN(data.totalBrutto)} z&#322;</td></tr>
        </table>` +

        // Dane: zamawiający | dostawa — dwa bloki obok siebie
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px">
          <tr>
            <td valign="top" width="50%" style="padding:14px 12px 14px 16px;background-color:#f9fafb;border-radius:8px 0 0 8px;border:1px solid #e5e7eb;border-right:none;font-size:13px;line-height:1.7;color:#374151">${buyerHtml}</td>
            <td valign="top" width="50%" style="padding:14px 16px 14px 12px;background-color:#f9fafb;border-radius:0 8px 8px 0;border:1px solid #e5e7eb;border-left:1px solid #e5e7eb;font-size:13px;line-height:1.7;color:#374151">${shippingHtml}</td>
          </tr>
        </table>` +

        // Pro forma — dane do przelewu
        (data.paymentMethod !== 'ONLINE' ? emailBankDetails(data.orderNumber) : '') +

        // Uwagi klienta
        (data.customerNotes ? emailInfoAmber(`<strong>Uwagi:</strong> ${esc(data.customerNotes)}`) : '') +

        emailSignature()
      ),
  })
}

// #2 — Proforma Invoice (Customer)
export function buildProformaEmail(data: {
  orderNumber: string
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
}): string {
  const today = new Date().toLocaleDateString('pl-PL')
  const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('pl-PL')
  const shippingLabel = data.shippingNetto > 0 ? `${fmtPLN(data.shippingNetto)} z&#322;` : 'Gratis'

  const itemRows = data.items.map((i, idx) => {
    const label = i.partNumber ? `${esc(i.name)} <span style="color:#6b7280">(${esc(i.partNumber)})</span>` : esc(i.name)
    return `
      <tr>
        <td style="padding:10px 8px;font-size:13px;color:#6b7280;border-bottom:1px solid #f3f4f6;text-align:center">${idx + 1}</td>
        <td style="padding:10px 0;font-size:14px;color:#1e293b;border-bottom:1px solid #f3f4f6">${label}</td>
        <td style="padding:10px 8px;font-size:14px;color:#374151;border-bottom:1px solid #f3f4f6;text-align:center">${i.quantity}&nbsp;szt.</td>
        <td style="padding:10px 8px;font-size:14px;color:#374151;border-bottom:1px solid #f3f4f6;text-align:right">${fmtPLN(i.priceNetto)}&nbsp;z&#322;</td>
        <td style="padding:10px 0;font-size:14px;font-weight:600;color:#1e293b;border-bottom:1px solid #f3f4f6;text-align:right">${fmtPLN(i.totalNetto)}&nbsp;z&#322;</td>
      </tr>`
  }).join('')

  return emailLayout({
    preheader: `Pro forma ${data.orderNumber} — ${fmtPLN(data.totalBrutto)} zł brutto — opłać przelew`,
    content:
      emailHeader({ title: 'PRO FORMA', subtitle: `Nr: PF/${esc(data.orderNumber)}/${new Date().getFullYear()}`, accent: 'blue' }) +
      emailBody(
        // Daty
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;background-color:#f9fafb;border-radius:8px;border:1px solid #e5e7eb">
          <tr>
            <td style="padding:12px 16px;font-size:12px;color:#6b7280;text-align:center">Data wystawienia<br/><strong style="font-size:14px;color:#1e293b">${today}</strong></td>
            <td style="padding:12px 16px;font-size:12px;color:#6b7280;text-align:center;border-left:1px solid #e5e7eb">Termin p&#322;atno&#347;ci<br/><strong style="font-size:14px;color:#1e293b">${dueDate}</strong></td>
            <td style="padding:12px 16px;font-size:12px;color:#6b7280;text-align:center;border-left:1px solid #e5e7eb">Nr zam&#243;wienia<br/><strong style="font-size:14px;color:#1e293b">${esc(data.orderNumber)}</strong></td>
          </tr>
        </table>` +

        // Sprzedawca / Nabywca
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px">
          <tr>
            <td valign="top" width="50%" style="padding:14px 12px 14px 16px;background-color:#f9fafb;border-radius:8px 0 0 8px;border:1px solid #e5e7eb;border-right:none;font-size:13px;line-height:1.7;color:#374151">
              <span style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px">Sprzedawca</span><br/>
              <strong>TAKMA Tadeusz Tiuchty</strong><br/>
              ul. Po&#347;wi&#281;cka 1a<br/>
              51-128 Wroc&#322;aw<br/>
              NIP: 9151004377<br/>
              <a href="mailto:takma@takma.com.pl" style="color:#2563eb">takma@takma.com.pl</a>
            </td>
            <td valign="top" width="50%" style="padding:14px 16px 14px 12px;background-color:#f9fafb;border-radius:0 8px 8px 0;border:1px solid #e5e7eb;border-left:1px solid #e5e7eb;font-size:13px;line-height:1.7;color:#374151">
              <span style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px">Nabywca</span><br/>
              <strong>${esc(data.customer.company)}</strong><br/>
              ${data.customer.nip ? `NIP: ${esc(data.customer.nip)}<br/>` : ''}
              ${esc(data.customer.contactName)}<br/>
              ${esc(data.customer.address)}<br/>
              <a href="mailto:${esc(data.customer.email)}" style="color:#2563eb">${esc(data.customer.email)}</a>
              ${data.customer.phone ? `<br/>Tel: ${esc(data.customer.phone)}` : ''}
            </td>
          </tr>
        </table>` +

        // Tabela produktów
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 4px">
          <thead><tr>
            <th style="padding:10px 8px;text-align:center;font-size:11px;font-weight:600;color:white;background:#1e40af;border-radius:6px 0 0 0;width:35px">Lp.</th>
            <th style="padding:10px 0;text-align:left;font-size:11px;font-weight:600;color:white;background:#1e40af">Nazwa produktu</th>
            <th style="padding:10px 8px;text-align:center;font-size:11px;font-weight:600;color:white;background:#1e40af;width:60px">Ilo&#347;&#263;</th>
            <th style="padding:10px 8px;text-align:right;font-size:11px;font-weight:600;color:white;background:#1e40af;width:90px">Cena netto</th>
            <th style="padding:10px 0;text-align:right;font-size:11px;font-weight:600;color:white;background:#1e40af;border-radius:0 6px 0 0;width:100px">Warto&#347;&#263; netto</th>
          </tr></thead>
          <tbody>${itemRows}</tbody>
        </table>` +

        // Podsumowanie
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px">
          <tr><td style="padding:8px 0;font-size:13px;color:#6b7280;text-align:right">Warto&#347;&#263; netto</td><td style="padding:8px 0 8px 12px;font-size:13px;color:#1e293b;text-align:right;width:120px">${fmtPLN(data.subtotalNetto)}&nbsp;z&#322;</td></tr>
          <tr><td style="padding:4px 0;font-size:13px;color:#6b7280;text-align:right">Dostawa</td><td style="padding:4px 0 4px 12px;font-size:13px;color:#1e293b;text-align:right">${shippingLabel}</td></tr>
          <tr><td style="padding:4px 0;font-size:13px;color:#6b7280;text-align:right">VAT 23%</td><td style="padding:4px 0 4px 12px;font-size:13px;color:#1e293b;text-align:right">${fmtPLN(data.vatAmount)}&nbsp;z&#322;</td></tr>
          <tr><td style="padding:10px 0 0;font-size:17px;font-weight:700;color:#1e293b;text-align:right;border-top:2px solid #1e40af">Do zap&#322;aty brutto</td><td style="padding:10px 0 0 12px;font-size:17px;font-weight:700;color:#1e40af;text-align:right;border-top:2px solid #1e40af">${fmtPLN(data.totalBrutto)}&nbsp;z&#322;</td></tr>
        </table>` +

        // Dane do przelewu
        emailBankDetails(data.orderNumber) +

        emailText('<span style="color:#6b7280;font-size:13px">Pro forma wa&#380;na 7 dni od daty wystawienia. Po zaksi&#281;gowaniu wp&#322;aty zam&#243;wienie zostanie zrealizowane. Faktura VAT zostanie wystawiona po zaksiegowaniu p&#322;atno&#347;ci.</span>') +
        emailSignature()
      ),
  })
}

// #3 — Shipping Notification (Customer)
export function buildShippingNotificationEmail(data: {
  orderNumber: string
  trackingNumber: string
  carrierName: string
}): string {
  return emailLayout({
    preheader: `Zamówienie ${data.orderNumber} wysłane kurierem ${data.carrierName}`,
    content:
      emailHeader({ title: 'Twoje zam&#243;wienie jest w drodze!', subtitle: `Nr zam&#243;wienia: ${esc(data.orderNumber)}`, accent: 'green' }) +
      emailBody(
        emailInfoGreen(`
          <strong>Kurier:</strong> ${esc(data.carrierName)}<br />
          <strong>Nr przesy&#322;ki:</strong> ${esc(data.trackingNumber)}
        `) +
        emailText('Przesy&#322;k&#281; mo&#380;esz &#347;ledzi&#263; na stronie przewo&#378;nika po numerze przesy&#322;ki.') +
        emailSignature()
      ),
  })
}

// #4 — Admin Order Notification
export function buildAdminOrderNotificationEmail(data: {
  orderNumber: string
  customer: {
    firstName: string
    lastName: string
    company: string
    nip?: string | null
    phone?: string | null
    email: string
    address?: string | null
    shippingAddress?: string | null
  }
  items: { name: string; partNumber?: string; quantity: number; priceNetto: number; totalNetto: number }[]
  subtotalNetto: number
  vatAmount: number
  shippingNetto: number
  totalBrutto: number
  paymentMethod: string
  customerNotes?: string | null
}): string {
  const paymentLabel = data.paymentMethod === 'ONLINE' ? 'Stripe (online)' : 'Pro forma (przelew)'

  const itemRows = data.items.map((i, idx) => [
    String(idx + 1),
    `${esc(i.name)}${i.partNumber ? `<br /><span style="font-size:12px;color:#6b7280">PN: ${esc(i.partNumber)}</span>` : ''}`,
    String(i.quantity),
    `${fmtPLN(i.priceNetto)} z&#322;`,
    `${fmtPLN(i.totalNetto)} z&#322;`,
  ])

  const shippingLabel = data.shippingNetto > 0 ? `${fmtPLN(data.shippingNetto)} z&#322; netto` : 'Darmowa'

  const customerRows: { label: string; value: string }[] = [
    { label: 'Firma', value: `<strong>${esc(data.customer.company)}</strong>` },
    { label: 'Kontakt', value: esc(`${data.customer.firstName} ${data.customer.lastName}`) },
    { label: 'Email', value: `<a href="mailto:${esc(data.customer.email)}" style="color:#2563eb">${esc(data.customer.email)}</a>` },
  ]
  if (data.customer.nip) customerRows.push({ label: 'NIP', value: esc(data.customer.nip) })
  if (data.customer.phone) customerRows.push({ label: 'Telefon', value: esc(data.customer.phone) })
  if (data.customer.address) customerRows.push({ label: 'Adres', value: esc(data.customer.address) })
  if (data.customer.shippingAddress) customerRows.push({ label: 'Adres dostawy', value: esc(data.customer.shippingAddress) })

  return emailLayout({
    preheader: `Nowe zamówienie ${data.orderNumber} — ${fmtPLN(data.totalBrutto)} zł brutto od ${data.customer.company}`,
    content:
      emailHeader({ title: 'Nowe zam&#243;wienie', subtitle: `${esc(data.orderNumber)} &mdash; ${fmtPLN(data.totalBrutto)} z&#322; brutto`, accent: 'blue' }) +
      emailBody(
        emailSectionTitle('Klient') +
        emailInfoCyan(customerRows.map(r => `<strong>${r.label}:</strong> ${r.value}`).join('<br />')) +

        emailSectionTitle('Produkty') +
        emailTable(['Lp.', 'Produkt', 'Ilo&#347;&#263;', 'Cena netto', 'Razem netto'], itemRows) +

        emailTotalBox([
          { label: 'Netto:', value: `${fmtPLN(data.subtotalNetto)} z&#322;` },
          { label: 'Dostawa:', value: shippingLabel },
          { label: 'VAT 23%:', value: `${fmtPLN(data.vatAmount)} z&#322;` },
          { label: 'Brutto:', value: `${fmtPLN(data.totalBrutto)} z&#322;`, bold: true },
        ]) +

        emailDataTable([
          { label: 'P&#322;atno&#347;&#263;', value: paymentLabel },
        ]) +

        (data.customerNotes ? emailInfoAmber(`<strong>Uwagi klienta:</strong><br />${esc(data.customerNotes)}`) : '') +

        emailButton('Otwórz w panelu', `https://www.takma.com.pl/admin/zamowienia/${data.orderNumber}`)
      ),
  })
}

// #5 — Admin Contact Notification
export function buildAdminContactNotificationEmail(data: {
  name: string
  email: string
  phone?: string
  company?: string
  reasonLabel: string
  message: string
}): string {
  const rows: { label: string; value: string }[] = [
    { label: 'Imi&#281; i nazwisko', value: `<strong>${esc(data.name)}</strong>` },
    { label: 'Email', value: `<a href="mailto:${esc(data.email)}" style="color:#2563eb">${esc(data.email)}</a>` },
  ]
  if (data.phone) rows.push({ label: 'Telefon', value: `<a href="tel:${esc(data.phone)}" style="color:#2563eb">${esc(data.phone)}</a>` })
  if (data.company) rows.push({ label: 'Firma', value: esc(data.company) })
  rows.push({ label: 'Temat', value: esc(data.reasonLabel) })

  return emailLayout({
    preheader: `Wiadomość od ${data.name} — ${data.reasonLabel}`,
    content:
      emailHeader({ title: 'Nowa wiadomo&#347;&#263; z formularza', subtitle: esc(data.reasonLabel), accent: 'cyan' }) +
      emailBody(
        emailDataTable(rows) +
        emailMessageBox(esc(data.message)) +
        emailText('<span style="font-size:12px;color:#9ca3af">Wiadomo&#347;&#263; wys&#322;ana z formularza kontaktowego na takma.com.pl</span>')
      ),
  })
}

// #6 — Contact Confirmation (Customer)
export function buildContactConfirmationEmail(data: {
  name: string
  message: string
}): string {
  return emailLayout({
    preheader: 'Otrzymaliśmy Twoją wiadomość — odpowiemy najszybciej jak to możliwe',
    content:
      emailHeader({ title: 'Dzi&#281;kujemy za wiadomo&#347;&#263;!', accent: 'blue' }) +
      emailBody(
        emailGreeting(data.name) +
        emailText('Otrzymali&#347;my Twoj&#261; wiadomo&#347;&#263; i odpowiemy najszybciej jak to mo&#380;liwe.') +
        emailInfoBlue(`<strong style="color:#1e40af">Twoja wiadomo&#347;&#263;:</strong><br /><span style="white-space:pre-wrap">${esc(data.message)}</span>`) +
        emailSignature()
      ),
  })
}

// #7 — Notify Subscription Confirmation (Customer)
export function buildNotifySubscriptionEmail(data: {
  email: string
  displayName: string
  partNumber: string
}): string {
  return emailLayout({
    preheader: `Powiadomimy Cię gdy ${data.displayName} będzie dostępny`,
    content:
      emailHeader({ title: 'Zapisali&#347;my Ci&#281; na powiadomienie', accent: 'green' }) +
      emailBody(
        emailText(`Gdy produkt <strong>${esc(data.displayName)}</strong> (PN: ${esc(data.partNumber)}) b&#281;dzie dost&#281;pny, wy&#347;lemy Ci wiadomo&#347;&#263; na adres <strong>${esc(data.email)}</strong>.`) +
        emailInfoGreen('Mo&#380;esz spokojnie czeka&#263; &mdash; powiadomimy Ci&#281; jak tylko produkt pojawi si&#281; na magazynie.') +
        emailSignature()
      ),
  })
}

// #8 — Admin Notify Subscription
export function buildAdminNotifySubscriptionEmail(data: {
  email: string
  displayName: string
  partNumber: string
  createdAt: string
}): string {
  return emailLayout({
    preheader: `Nowa subskrypcja: ${data.email} → ${data.partNumber}`,
    content:
      emailHeader({ title: 'Nowa subskrypcja dost&#281;pno&#347;ci', accent: 'green' }) +
      emailBody(
        emailDataTable([
          { label: 'Email', value: `<a href="mailto:${esc(data.email)}" style="color:#2563eb">${esc(data.email)}</a>` },
          { label: 'Produkt', value: `<strong>${esc(data.displayName)}</strong>` },
          { label: 'Part Number', value: esc(data.partNumber) },
          { label: 'Data', value: esc(data.createdAt) },
        ])
      ),
  })
}

// #9 — Admin Inquiry Notification
export function buildAdminInquiryEmail(data: {
  name: string
  email: string
  phone?: string
  productName: string
  productLink?: string
  message: string
}): string {
  const rows: { label: string; value: string }[] = [
    { label: 'Imi&#281; i nazwisko', value: `<strong>${esc(data.name)}</strong>` },
    { label: 'Email', value: `<a href="mailto:${esc(data.email)}" style="color:#2563eb">${esc(data.email)}</a>` },
  ]
  if (data.phone) rows.push({ label: 'Telefon', value: `<a href="tel:${esc(data.phone)}" style="color:#2563eb">${esc(data.phone)}</a>` })
  if (data.productLink) {
    rows.push({ label: 'Produkt', value: `<a href="${esc(data.productLink)}" style="color:#2563eb">${esc(data.productName)}</a>` })
  } else {
    rows.push({ label: 'Produkt', value: esc(data.productName) })
  }

  return emailLayout({
    preheader: `Zapytanie o ${data.productName} od ${data.name}`,
    content:
      emailHeader({ title: 'Nowe zapytanie o produkt', subtitle: esc(data.productName), accent: 'cyan' }) +
      emailBody(
        emailDataTable(rows) +
        emailMessageBox(esc(data.message)) +
        emailText('<span style="font-size:12px;color:#9ca3af">Zapytanie wys&#322;ane z karty produktu na takma.com.pl</span>')
      ),
  })
}

// #10 — Inquiry Confirmation (Customer)
export function buildInquiryConfirmationEmail(data: {
  name: string
  productName: string
  message: string
}): string {
  return emailLayout({
    preheader: `Otrzymaliśmy zapytanie o ${data.productName} — odpowiemy najszybciej jak to możliwe`,
    content:
      emailHeader({ title: 'Otrzymali&#347;my Twoje zapytanie!', accent: 'cyan' }) +
      emailBody(
        emailGreeting(data.name) +
        emailText(`Dzi&#281;kujemy za zainteresowanie produktem <strong>${esc(data.productName)}</strong>. Odpowiemy najszybciej jak to mo&#380;liwe.`) +
        emailInfoCyan(`<strong style="color:#0e7490">Twoje zapytanie:</strong><br /><span style="white-space:pre-wrap">${esc(data.message)}</span>`) +
        emailSignature()
      ),
  })
}

// #11 — Quote Email (Customer)
export function buildQuoteEmail(data: {
  quoteNumber: string
  clientContact?: string | null
  items: { position: number; productName: string; partNumber?: string | null; quantity: number; priceNetto: number; totalNetto: number }[]
  subtotalNetto: number
  vatAmount: number
  totalBrutto: number
  validUntil: Date
  paymentTerms: string
  deliveryTerms: string
  notes?: string | null
  freebiesNote?: string | null
}): string {
  const rows = data.items
    .sort((a, b) => a.position - b.position)
    .map(item => [
      String(item.position),
      `${esc(item.productName)}${item.partNumber ? `<br /><span style="font-size:12px;color:#6b7280">PN: ${esc(item.partNumber)}</span>` : ''}`,
      String(item.quantity),
      `${fmtPLN(item.priceNetto / 100)} z&#322;`,
      `${fmtPLN(item.totalNetto / 100)} z&#322;`,
    ])

  const contactName = data.clientContact ? `, ${data.clientContact}` : ''

  return emailLayout({
    preheader: `Oferta ${data.quoteNumber} — ${fmtPLN(data.totalBrutto / 100)} zł brutto`,
    content:
      emailHeader({ title: 'Oferta handlowa', subtitle: `Nr: ${esc(data.quoteNumber)}`, accent: 'blue' }) +
      emailBody(
        emailGreeting(contactName) +
        emailText('Przesy&#322;amy ofert&#281; na poni&#380;sze produkty:') +
        emailTable(['Lp.', 'Produkt', 'Ilo&#347;&#263;', 'Cena netto', 'Razem netto'], rows) +
        emailTotalBox([
          { label: 'Netto:', value: `${fmtPLN(data.subtotalNetto / 100)} z&#322;` },
          { label: 'VAT 23%:', value: `${fmtPLN(data.vatAmount / 100)} z&#322;` },
          { label: 'Brutto:', value: `${fmtPLN(data.totalBrutto / 100)} z&#322;`, bold: true },
        ]) +
        (data.freebiesNote ? emailInfoGreen(`<strong>Gratis:</strong> ${esc(data.freebiesNote)}`) : '') +
        emailDataTable([
          { label: 'Wa&#380;no&#347;&#263; oferty', value: `do ${data.validUntil.toLocaleDateString('pl-PL')}` },
          { label: 'Warunki p&#322;atno&#347;ci', value: esc(data.paymentTerms) },
          { label: 'Termin dostawy', value: esc(data.deliveryTerms) },
        ]) +
        (data.notes ? emailInfoAmber(esc(data.notes)) : '') +
        emailSignature()
      ),
  })
}

// #12 — Admin RFQ Notification
export function buildAdminRfqEmail(data: {
  quoteNumber: string
  quoteId: string
  customer: {
    company: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    nip?: string | null
  }
  items: { productName: string; partNumber?: string; quantity: number; note?: string }[]
  message?: string | null
}): string {
  const rows = data.items.map((item, i) => [
    String(i + 1),
    `${esc(item.productName)}${item.partNumber ? `<br /><span style="font-size:12px;color:#6b7280">PN: ${esc(item.partNumber)}</span>` : ''}`,
    String(item.quantity),
    item.note ? esc(item.note) : '&mdash;',
  ])

  const customerRows: { label: string; value: string }[] = [
    { label: 'Firma', value: `<strong>${esc(data.customer.company)}</strong>` },
    { label: 'Kontakt', value: esc(`${data.customer.firstName} ${data.customer.lastName}`) },
    { label: 'Email', value: `<a href="mailto:${esc(data.customer.email)}" style="color:#2563eb">${esc(data.customer.email)}</a>` },
  ]
  if (data.customer.phone) customerRows.push({ label: 'Telefon', value: esc(data.customer.phone) })
  if (data.customer.nip) customerRows.push({ label: 'NIP', value: esc(data.customer.nip) })

  return emailLayout({
    preheader: `Nowe zapytanie ofertowe ${data.quoteNumber} od ${data.customer.company}`,
    content:
      emailHeader({ title: 'Nowe zapytanie ofertowe', subtitle: `Nr: ${esc(data.quoteNumber)}`, accent: 'cyan' }) +
      emailBody(
        emailInfoCyan(customerRows.map(r => `<strong>${r.label}:</strong> ${r.value}`).join('<br />')) +
        emailTable(['Lp.', 'Produkt', 'Ilo&#347;&#263;', 'Uwagi'], rows) +
        (data.message ? emailInfoAmber(`<strong>Wiadomo&#347;&#263; klienta:</strong><br />${esc(data.message)}`) : '') +
        emailButton('Otwórz zapytanie w panelu', `https://www.takma.com.pl/admin/oferty/${data.quoteId}`, '#0891b2')
      ),
  })
}

// #13 — Repair Submitted (Customer)
export function buildRepairSubmittedEmail(data: {
  customerName: string
  repairNumber: string
  deviceType: string
  deviceModel: string
  problemDescription: string
  isWarranty: boolean
}): string {
  const deviceTypeText: Record<string, string> = {
    drukarka: 'Drukarka etykiet',
    terminal: 'Terminal mobilny',
    skaner: 'Skaner kod&#243;w',
    tablet: 'Tablet przemys&#322;owy',
    akcesoria: 'Akcesoria',
    inne: 'Urz&#261;dzenie',
  }
  const typeLabel = deviceTypeText[data.deviceType] || 'Urz&#261;dzenie'

  return emailLayout({
    preheader: `Zgloszenie naprawy ${data.deviceModel} #${data.repairNumber} przyjete`,
    content:
      emailHeader({ title: 'Zg&#322;oszenie naprawy przyj&#281;te!', subtitle: `Nr: ${esc(data.repairNumber)}`, accent: 'green' }) +
      emailBody(
        emailGreeting(data.customerName) +
        emailText('Twoje zg&#322;oszenie serwisowe zosta&#322;o przyj&#281;te. Oto podsumowanie:') +
        emailDataTable([
          { label: 'Nr zg&#322;oszenia', value: `<strong>${esc(data.repairNumber)}</strong>` },
          { label: 'Typ urz&#261;dzenia', value: typeLabel },
          { label: 'Model', value: `<strong>${esc(data.deviceModel)}</strong>` },
          { label: 'Gwarancja', value: data.isWarranty ? 'Tak' : 'Nie / Nie wiem' },
        ]) +
        emailSectionTitle('Opis usterki') +
        emailMessageBox(esc(data.problemDescription)) +
        emailInfoGreen(
          '<strong>Co dalej?</strong><br />' +
          '1. Kurier odbierze urz&#261;dzenie z podanego adresu<br />' +
          '2. Przeprowadzimy diagnostyk&#281; w ci&#261;gu 48h<br />' +
          '3. Otrzymasz wycen&#281; naprawy na email<br />' +
          '4. Po akceptacji &mdash; naprawa i wysy&#322;ka zwrotna'
        ) +
        emailInfoBlue(
          '&#346;led&#378; status naprawy i pisz z serwisem w <a href="https://www.serwis-zebry.pl/logowanie" style="color:#1e40af;font-weight:600">panelu klienta</a>.'
        ) +
        emailSignature()
      ),
  })
}

// #14 — Repair Submitted Admin Notification
export function buildRepairSubmittedAdminEmail(data: {
  repairNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  deviceType: string
  deviceModel: string
  problemDescription: string
  isWarranty: boolean
  priority: string
}): string {
  const priorityLabels: Record<string, string> = {
    normal: 'Zwyk&#322;y',
    high: 'Wysoki',
  }

  const customerRows: { label: string; value: string }[] = [
    { label: 'Klient', value: `<strong>${esc(data.customerName)}</strong>` },
    { label: 'Email', value: `<a href="mailto:${esc(data.customerEmail)}" style="color:#2563eb">${esc(data.customerEmail)}</a>` },
    { label: 'Telefon', value: esc(data.customerPhone) },
  ]

  return emailLayout({
    preheader: `[TAKMA] Nowe zgloszenie naprawy #${data.repairNumber} - ${data.deviceModel}`,
    content:
      emailHeader({ title: 'Nowe zg&#322;oszenie naprawy', subtitle: `[TAKMA] Nr: ${esc(data.repairNumber)}`, accent: 'green' }) +
      emailBody(
        emailInfoCyan(customerRows.map(r => `<strong>${r.label}:</strong> ${r.value}`).join('<br />')) +
        emailDataTable([
          { label: 'Model', value: `<strong>${esc(data.deviceModel)}</strong>` },
          { label: 'Typ', value: esc(data.deviceType) },
          { label: 'Gwarancja', value: data.isWarranty ? '<strong style="color:#059669">Tak</strong>' : 'Nie' },
          { label: 'Priorytet', value: priorityLabels[data.priority] || esc(data.priority) },
          { label: '&#377;r&#243;d&#322;o', value: '<strong style="color:#1e40af">takma.com.pl</strong>' },
        ]) +
        emailSectionTitle('Opis usterki') +
        emailMessageBox(esc(data.problemDescription)) +
        emailButton('Otwórz w panelu admina', `https://www.serwis-zebry.pl/admin`)
      ),
  })
}
