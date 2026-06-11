// Jednorazowa analiza lejka GA4 vs zamówienia w DB (28 dni)
import { SignJWT, importPKCS8 } from 'jose'
import { readFileSync } from 'fs'
import pgPkg from 'pg'
const { Client: PgClient } = pgPkg

// --- env z .env.local + .env ---
for (const f of ['.env.local', '.env']) {
  try {
    for (const line of readFileSync(f, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
      if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^"|"$/g, '')
    }
  } catch {}
}

const TOKEN_URL = 'https://oauth2.googleapis.com/token'
async function token() {
  const key = await importPKCS8(process.env.GA_SA_PRIVATE_KEY.replace(/\\n/g, '\n'), 'RS256')
  const assertion = await new SignJWT({ scope: 'https://www.googleapis.com/auth/analytics.readonly' })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuer(process.env.GA_SA_CLIENT_EMAIL)
    .setSubject(process.env.GA_SA_CLIENT_EMAIL)
    .setAudience(TOKEN_URL)
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key)
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  })
  return (await res.json()).access_token
}

const tk = await token()
async function report(body) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${process.env.GA_PROPERTY_ID}:runReport`,
    { method: 'POST', headers: { authorization: `Bearer ${tk}`, 'content-type': 'application/json' }, body: JSON.stringify(body) }
  )
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

const cur = { startDate: '28daysAgo', endDate: 'today' }
const EVENTS = ['view_item', 'add_to_cart', 'begin_checkout', 'add_payment_info', 'purchase']

const [funnel, funnelUsers, tx, products, srcCart, srcPurchase, cartByDay] = await Promise.all([
  report({ dateRanges: [cur], dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], dimensionFilter: { filter: { fieldName: 'eventName', inListFilter: { values: EVENTS } } } }),
  report({ dateRanges: [cur], dimensions: [{ name: 'eventName' }], metrics: [{ name: 'totalUsers' }], dimensionFilter: { filter: { fieldName: 'eventName', inListFilter: { values: EVENTS } } } }),
  report({ dateRanges: [cur], dimensions: [{ name: 'date' }, { name: 'transactionId' }], metrics: [{ name: 'purchaseRevenue' }, { name: 'transactions' }] }),
  report({ dateRanges: [cur], dimensions: [{ name: 'itemName' }], metrics: [{ name: 'itemsViewed' }, { name: 'itemsAddedToCart' }, { name: 'itemsPurchased' }, { name: 'itemRevenue' }], orderBys: [{ metric: { metricName: 'itemsAddedToCart' }, desc: true }], limit: 60 }),
  report({ dateRanges: [cur], dimensions: [{ name: 'sessionSourceMedium' }], metrics: [{ name: 'eventCount' }], dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { value: 'add_to_cart' } } }, orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 15 }),
  report({ dateRanges: [cur], dimensions: [{ name: 'sessionSourceMedium' }], metrics: [{ name: 'eventCount' }], dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { value: 'purchase' } } } }),
  report({ dateRanges: [cur], dimensions: [{ name: 'date' }, { name: 'eventName' }], metrics: [{ name: 'eventCount' }], dimensionFilter: { filter: { fieldName: 'eventName', inListFilter: { values: ['add_to_cart', 'begin_checkout', 'add_payment_info', 'purchase'] } } }, orderBys: [{ dimension: { dimensionName: 'date' } }] }),
])

const out = { funnel: {}, funnelUsers: {}, transactions: [], products: [], srcCart: [], srcPurchase: [], byDay: {} }
for (const r of funnel.rows || []) out.funnel[r.dimensionValues[0].value] = +r.metricValues[0].value
for (const r of funnelUsers.rows || []) out.funnelUsers[r.dimensionValues[0].value] = +r.metricValues[0].value
for (const r of tx.rows || []) out.transactions.push({ date: r.dimensionValues[0].value, id: r.dimensionValues[1].value, revenue: +r.metricValues[0].value, tx: +r.metricValues[1].value })
for (const r of products.rows || []) {
  const [viewed, added, purchased, revenue] = r.metricValues.map(m => +m.value)
  if (added > 0) out.products.push({ name: r.dimensionValues[0].value, viewed, added, purchased, revenue })
}
for (const r of srcCart.rows || []) out.srcCart.push({ src: r.dimensionValues[0].value, addToCart: +r.metricValues[0].value })
for (const r of srcPurchase.rows || []) out.srcPurchase.push({ src: r.dimensionValues[0].value, purchases: +r.metricValues[0].value })
for (const r of cartByDay.rows || []) {
  const d = r.dimensionValues[0].value
  out.byDay[d] = out.byDay[d] || {}
  out.byDay[d][r.dimensionValues[1].value] = +r.metricValues[0].value
}

console.log('=== GA4 (28 dni) ===')
console.log(JSON.stringify(out, null, 1))

// --- DB: faktyczne zamówienia ---
const pg = new PgClient({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
await pg.connect()
const { rows: orders } = await pg.query(`
  SELECT o."orderNumber", o.status, o."paymentMethod", o."totalBrutto", o."createdAt", o."paidAt",
         COALESCE(json_agg(json_build_object('name', i."productName", 'qty', i.quantity)) FILTER (WHERE i.id IS NOT NULL), '[]') AS items
  FROM "Order" o LEFT JOIN "OrderItem" i ON i."orderId" = o.id
  WHERE o."createdAt" >= NOW() - INTERVAL '28 days'
  GROUP BY o.id ORDER BY o."createdAt" ASC`)
console.log('=== DB zamówienia (28 dni) ===')
console.log(JSON.stringify(orders.map(o => ({ ...o, totalBrutto: o.totalBrutto / 100 })), null, 1))
await pg.end()
