import { NextRequest, NextResponse } from 'next/server'
import { adsQuery } from '@/lib/googleAds'
import { sendEmail } from '@/lib/email'

/**
 * Automatyczny demontaż promocji Zebra CEE po jej zakończeniu (4.10.2026).
 * Cron: 5 października 04:05 UTC (6:05 PL) — patrz vercel.json ("5 4 5 10 *").
 * Bez udziału użytkownika (jego decyzja z 6.08): zdejmuje z Google Ads wszystko,
 * co nie wygasa samo. Elementy strony (kafle, slajd hero, pin wariantu) gasną
 * same przez datę w src/data/promos.ts, promotion assets mają redemption end.
 *
 * Kroki (idempotentne — po wykonaniu kolejne wywołania nic nie robią):
 * 1. Odpina sitelinki `sitelink promo * [API]` i callouty `callout promo * [API]`
 *    od kampanii (assetów nie da się usunąć — zostają nieużywane w bibliotece).
 * 2. Pauzuje reklamy z cenami promo w grupach ZD230d/ZD230t; jeśli grupa ZD230t
 *    zostałaby bez reklam, najpierw tworzy zwykłe RSA bez cen.
 * 3. Mail z raportem do Jakuba.
 */

export const maxDuration = 120

const API_VERSION = process.env.GOOGLE_ADS_API_VERSION || 'v24'
const PROMO_GROUPS = ['161280154274', '202060863354'] // ZD230d, ZD230t [API]
const REPORT_TO = 'jakub.tiuchty@takma.com.pl'

async function adsToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
    }),
  })
  return ((await res.json()) as { access_token: string }).access_token
}

async function adsMutate(path: string, operations: object[]): Promise<unknown> {
  const cid = process.env.GOOGLE_ADS_CUSTOMER_ID!
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${cid}/${path}:mutate`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${await adsToken()}`,
      'content-type': 'application/json',
      'developer-token': process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
      'login-customer-id': process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID!,
    },
    body: JSON.stringify({ operations }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`${path}: ${JSON.stringify(json).slice(0, 300)}`)
  return json
}

export async function GET(request: NextRequest) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const cid = process.env.GOOGLE_ADS_CUSTOMER_ID!
  const now = new Date()
  // okno wykonania: od końca promocji do miesiąca po niej (cron roczny "5 4 5 10 *"
  // odpaliłby się też w 2027 — guard czyni go wtedy no-opem)
  const start = new Date('2026-10-05T00:00:00+02:00')
  const end = new Date('2026-11-04T00:00:00+01:00')
  if (now < start || now > end) {
    return NextResponse.json({ waiting: true, now: now.toISOString() })
  }

  const report: string[] = []
  try {
    // 1. odpięcie sitelinków i calloutów promo od kampanii
    const links = await adsQuery(
      `SELECT campaign_asset.resource_name, asset.name FROM campaign_asset
       WHERE asset.name LIKE '%promo%[API]' AND campaign_asset.status != 'REMOVED'`,
    ) as unknown as { campaignAsset?: { resourceName?: string }; asset?: { name?: string } }[]
    const toRemove = links.map((l) => l.campaignAsset?.resourceName).filter((x): x is string => !!x)
    if (toRemove.length) {
      await adsMutate('campaignAssets', toRemove.map((r) => ({ remove: r })))
      report.push(`Odpięte sitelinki/callouty promo: ${toRemove.length}`)
    } else {
      report.push('Sitelinki/callouty promo: już odpięte')
    }

    // 2. reklamy z cenami promo w grupach ZD230d/ZD230t
    const ads = await adsQuery(
      `SELECT ad_group.id, ad_group_ad.resource_name, ad_group_ad.ad.responsive_search_ad.headlines, ad_group_ad.ad.responsive_search_ad.descriptions
       FROM ad_group_ad WHERE ad_group.id IN (${PROMO_GROUPS.join(',')}) AND ad_group_ad.status = 'ENABLED'`,
    ) as unknown as { adGroup?: { id?: string }; adGroupAd?: { resourceName?: string; ad?: { responsiveSearchAd?: { headlines?: { text?: string }[]; descriptions?: { text?: string }[] } } } }[]

    const isPromoAd = (a: (typeof ads)[0]) => {
      const texts = [
        ...(a.adGroupAd?.ad?.responsiveSearchAd?.headlines || []),
        ...(a.adGroupAd?.ad?.responsiveSearchAd?.descriptions || []),
      ].map((t) => t.text || '')
      return texts.some((t) => t.includes('Promocja') || t.includes('promocj') || t.includes('879 zł') || t.includes('859 zł'))
    }
    const promoAds = ads.filter(isPromoAd)
    const zd230tNonPromo = ads.filter((a) => a.adGroup?.id === '202060863354' && !isPromoAd(a))

    // ZD230t nie może zostać bez reklam — najpierw zwykłe RSA
    if (promoAds.some((a) => a.adGroup?.id === '202060863354') && zd230tNonPromo.length === 0) {
      await adsMutate('adGroupAds', [{
        create: {
          adGroup: `customers/${cid}/adGroups/202060863354`,
          status: 'ENABLED',
          ad: {
            finalUrls: ['https://www.takma.com.pl/produkt/zebra-zd230t'],
            responsiveSearchAd: {
              headlines: [
                { text: 'Zebra ZD230t w TAKMA' },
                { text: 'Drukarka Zebra ZD230t' },
                { text: 'Termotransfer + Ethernet' },
                { text: 'Autoryzowany partner Zebra' },
                { text: 'Doradztwo i serwis' },
              ],
              descriptions: [
                { text: 'Drukarka termotransferowa Zebra ZD230t z Ethernetem. Doradzimy i skonfigurujemy.' },
                { text: 'Autoryzowany partner Zebra: wsparcie techniczne, serwis i szybka dostawa w całej Polsce.' },
              ],
              path1: 'drukarki', path2: 'zd230t',
            },
          },
        },
      }])
      report.push('ZD230t: utworzone zastępcze RSA bez cen')
    }
    if (promoAds.length) {
      await adsMutate('adGroupAds', promoAds.map((a) => ({
        update: { resourceName: a.adGroupAd!.resourceName, status: 'PAUSED' },
        updateMask: 'status',
      })))
      report.push(`Zapauzowane reklamy promo: ${promoAds.length}`)
    } else {
      report.push('Reklamy promo: już zapauzowane')
    }

    report.push('Strona (kafle, hero, pin wariantu) i promotion assets wygasły same 4.10.')

    await sendEmail({
      to: REPORT_TO,
      subject: '✅ Promocja Zebra CEE zdemontowana automatycznie',
      html: `<div style="font-family:sans-serif"><h2>Demontaż promocji Zebra CEE — wykonany</h2><ul>${report.map((r) => `<li>${r}</li>`).join('')}</ul><p style="color:#6b7280;font-size:13px">Cron promo-teardown, ${now.toLocaleString('pl-PL')}. W bibliotece Ads zostały nieużywane assety (Google nie pozwala ich usuwać) — nie emitują się.</p></div>`,
    })

    return NextResponse.json({ ok: true, report })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error('[promo-teardown]', msg)
    await sendEmail({
      to: REPORT_TO,
      subject: '⚠️ Demontaż promocji Zebra CEE — błąd, wymagana ręczna kontrola',
      html: `<div style="font-family:sans-serif"><p>Cron promo-teardown napotkał błąd:</p><pre>${msg.slice(0, 500)}</pre><p>Wykonane kroki: ${report.join('; ') || 'żadne'}</p></div>`,
    }).catch(() => {})
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
