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
  const rows = data.items.map((i, idx) => [
    String(idx + 1),
    `${esc(i.name)}${i.partNumber ? `<br /><span style="font-size:12px;color:#6b7280">PN: ${esc(i.partNumber)}</span>` : ''}`,
    String(i.quantity),
    `${fmtPLN(i.priceNetto)} z&#322;`,
    `${fmtPLN(i.totalNetto)} z&#322;`,
  ])

  const paymentLabel = data.paymentMethod === 'ONLINE' ? 'Karta / przelew online (Stripe)' : 'Przelew bankowy (pro forma)'
  const shippingLabel = data.shippingNetto > 0 ? `${fmtPLN(data.shippingNetto)} z&#322; netto` : 'Darmowa'
  const deliveryAddress = data.customer.shippingAddress || data.customer.address || '&mdash;'

  return emailLayout({
    preheader: `Potwierdzenie zamówienia ${data.orderNumber} — dziękujemy za zakup!`,
    content:
      emailHeader({ title: 'Dzi&#281;kujemy za zam&#243;wienie!', subtitle: `Nr zam&#243;wienia: ${esc(data.orderNumber)}`, accent: 'blue' }) +
      emailBody(
        emailGreeting(data.customer.firstName) +
        emailText('Twoje zam&#243;wienie zosta&#322;o przyj&#281;te i jest w realizacji. Poni&#380;ej znajdziesz szczeg&#243;&#322;y:') +

        emailSectionTitle('Zam&#243;wione produkty') +
        emailTable(['Lp.', 'Produkt', 'Ilo&#347;&#263;', 'Cena netto', 'Razem netto'], rows) +

        emailTotalBox([
          { label: 'Warto&#347;&#263; produkt&#243;w netto:', value: `${fmtPLN(data.subtotalNetto)} z&#322;` },
          { label: 'Dostawa netto:', value: shippingLabel },
          { label: 'VAT 23%:', value: `${fmtPLN(data.vatAmount)} z&#322;` },
          { label: 'Razem brutto:', value: `${fmtPLN(data.totalBrutto)} z&#322;`, bold: true },
        ]) +

        emailSectionTitle('Dane zamawiaj&#261;cego') +
        emailDataTable([
          { label: 'Firma', value: `<strong>${esc(data.customer.company)}</strong>` },
          ...(data.customer.nip ? [{ label: 'NIP', value: esc(data.customer.nip) }] : []),
          { label: 'Osoba', value: esc(`${data.customer.firstName} ${data.customer.lastName}`) },
          { label: 'Email', value: `<a href="mailto:${esc(data.customer.email)}" style="color:#2563eb">${esc(data.customer.email)}</a>` },
          ...(data.customer.phone ? [{ label: 'Telefon', value: esc(data.customer.phone) }] : []),
          ...(data.customer.address ? [{ label: 'Adres', value: esc(data.customer.address) }] : []),
        ]) +

        emailSectionTitle('Dane do wysy&#322;ki') +
        emailDataTable([
          { label: 'Adres dostawy', value: esc(deliveryAddress) },
          { label: 'Koszt dostawy', value: shippingLabel },
        ]) +

        emailSectionTitle('P&#322;atno&#347;&#263;') +
        emailDataTable([
          { label: 'Metoda', value: paymentLabel },
        ]) +
        (data.paymentMethod !== 'ONLINE' ? emailBankDetails(data.orderNumber) : '') +

        (data.customerNotes ? emailInfoAmber(`<strong>Uwagi do zam&#243;wienia:</strong><br />${esc(data.customerNotes)}`) : '') +

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
        emailButton('Otw&#243;rz zapytanie w panelu', `https://takma.com.pl/admin/oferty/${data.quoteId}`, '#0891b2')
      ),
  })
}
