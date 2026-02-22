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

// ─── Logo (base64 inline — niezależne od CDN) ───────────────────────────────

const LOGO_BASE64 = 'data:image/png;base64,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'

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
            <td align="center" style="padding:28px 32px 16px;background-color:#ffffff">
              <img src="${LOGO_BASE64}" alt="TAKMA" width="180" style="display:block;max-width:180px;height:auto" />
              <p style="margin:8px 0 0;font-size:13px;color:#6b7280;letter-spacing:0.3px">Autoryzowany dystrybutor urz&#261;dze&#324; AutoID</p>
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
              <strong style="color:#6b7280">TAKMA</strong> &middot; Autoryzowany dystrybutor Zebra Technologies<br />
              ul. Po&#347;wi&#281;cka 1a, 51-128 Wroc&#322;aw &middot; NIP: 915-100-43-77<br />
              <a href="tel:+48607819688" style="color:#9ca3af;text-decoration:none">+48 607 819 688</a> &middot;
              <a href="mailto:takma@takma.com.pl" style="color:#9ca3af;text-decoration:none">takma@takma.com.pl</a> &middot;
              <a href="https://takma.com.pl" style="color:#9ca3af;text-decoration:none">takma.com.pl</a><br />
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
                    <a href="tel:+48607819688" style="color:#2563eb;text-decoration:none">+48 607 819 688</a> &middot;
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

function emailMessageBox(content: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0"><tr><td style="padding:14px 16px;border-left:4px solid #d1d5db;background-color:#f9fafb;border-radius:0 8px 8px 0;font-size:14px;line-height:1.6;color:#374151;white-space:pre-wrap">${content}</td></tr></table>`
}

// ─── Template Builders ──────────────────────────────────────────────────────

// #1 — Order Confirmation (Customer)
export function buildOrderConfirmationEmail(data: {
  orderNumber: string
  items: { name: string; quantity: number; priceNetto: number }[]
  totalBrutto: number
}): string {
  const rows = data.items.map(i => [
    esc(i.name),
    String(i.quantity),
    `${fmtPLN(i.priceNetto)} z&#322;`,
  ])

  return emailLayout({
    preheader: `Potwierdzenie zamówienia ${data.orderNumber} — dziękujemy za zakup!`,
    content:
      emailHeader({ title: 'Dzi&#281;kujemy za zam&#243;wienie!', subtitle: `Nr zam&#243;wienia: ${esc(data.orderNumber)}`, accent: 'blue' }) +
      emailBody(
        emailText('Twoje zam&#243;wienie zosta&#322;o przyj&#281;te i jest w realizacji.') +
        emailTable(['Produkt', 'Ilo&#347;&#263;', 'Cena netto'], rows) +
        emailTotalBox([
          { label: 'Razem brutto:', value: `${fmtPLN(data.totalBrutto)} z&#322;`, bold: true },
        ]) +
        emailInfoBlue('Otrzymasz powiadomienie o wys&#322;ance z numerem przesy&#322;ki, gdy paczka zostanie nadana.') +
        emailSignature()
      ),
  })
}

// #2 — Proforma Invoice (Customer)
export function buildProformaEmail(data: {
  orderNumber: string
}): string {
  return emailLayout({
    preheader: `Faktura pro forma ${data.orderNumber} — opłać przelew, aby zrealizować zamówienie`,
    content:
      emailHeader({ title: 'Faktura pro forma', subtitle: `Nr zam&#243;wienia: ${esc(data.orderNumber)}`, accent: 'blue' }) +
      emailBody(
        emailText('W za&#322;&#261;czniku znajduje si&#281; faktura pro forma. Po zaksi&#281;gowaniu wp&#322;aty Twoje zam&#243;wienie zostanie zrealizowane.') +
        emailBankDetails(data.orderNumber) +
        emailText('<span style="color:#6b7280;font-size:13px">Pro forma wa&#380;na 7 dni od daty wystawienia.</span>') +
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
  customerEmail: string
  totalBrutto: number
  paymentMethod: string
}): string {
  const paymentLabel = data.paymentMethod === 'ONLINE' ? 'Stripe (online)' : 'Pro forma (przelew)'

  return emailLayout({
    preheader: `Nowe zamówienie ${data.orderNumber} — ${fmtPLN(data.totalBrutto)} zł brutto`,
    content:
      emailHeader({ title: 'Nowe zam&#243;wienie', subtitle: `${esc(data.orderNumber)} &mdash; ${fmtPLN(data.totalBrutto)} z&#322; brutto`, accent: 'blue' }) +
      emailBody(
        emailDataTable([
          { label: 'Nr zam&#243;wienia', value: esc(data.orderNumber) },
          { label: 'Klient', value: `<a href="mailto:${esc(data.customerEmail)}" style="color:#2563eb">${esc(data.customerEmail)}</a>` },
          { label: 'Kwota brutto', value: `<strong>${fmtPLN(data.totalBrutto)} z&#322;</strong>` },
          { label: 'P&#322;atno&#347;&#263;', value: paymentLabel },
        ]) +
        emailButton('Otw&#243;rz w panelu', `https://takma.com.pl/admin/zamowienia/${data.orderNumber}`)
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
    preheader: 'Otrzymaliśmy Twoją wiadomość — odpowiemy w ciągu 1 godziny roboczej',
    content:
      emailHeader({ title: 'Dzi&#281;kujemy za wiadomo&#347;&#263;!', accent: 'blue' }) +
      emailBody(
        emailGreeting(data.name) +
        emailText('Otrzymali&#347;my Twoj&#261; wiadomo&#347;&#263; i odpowiemy najszybciej jak to mo&#380;liwe &mdash; zwykle w ci&#261;gu <strong>1 godziny roboczej</strong>.') +
        emailInfoBlue(`<strong style="color:#1e40af">Twoja wiadomo&#347;&#263;:</strong><br /><span style="white-space:pre-wrap">${esc(data.message)}</span>`) +
        emailText('<span style="color:#6b7280;font-size:14px">W razie pilnych spraw zadzwo&#324;: <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></span>') +
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
    preheader: `Otrzymaliśmy zapytanie o ${data.productName} — odpowiemy w ciągu 1h`,
    content:
      emailHeader({ title: 'Otrzymali&#347;my Twoje zapytanie!', accent: 'cyan' }) +
      emailBody(
        emailGreeting(data.name) +
        emailText(`Dzi&#281;kujemy za zainteresowanie produktem <strong>${esc(data.productName)}</strong>. Odpowiemy najszybciej jak to mo&#380;liwe &mdash; zwykle w ci&#261;gu <strong>1 godziny roboczej</strong>.`) +
        emailInfoCyan(`<strong style="color:#0e7490">Twoje zapytanie:</strong><br /><span style="white-space:pre-wrap">${esc(data.message)}</span>`) +
        emailText('<span style="color:#6b7280;font-size:14px">W razie pilnych spraw zadzwo&#324;: <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></span>') +
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
        emailButton('Otw&#243;rz zapytanie w panelu', `https://takma.com.pl/admin/oferty/${data.quoteId}`, '#0891b2')
      ),
  })
}
