// Génère les captures desktop (1440×900) des réalisations en ligne.
// Usage : npm install && npx playwright install chromium && npm run screenshots
// Les fichiers sont écrits dans public/images/projects/desktop/ ; le site les utilise
// automatiquement et retombe sur les captures mobiles si un fichier est absent.
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const targets = [
  ['finance-pro', 'https://financepro.shalomdigitalsolutions.com/login'],
  ['menstruai', 'https://menstruai.shalomdigitalsolutions.com/'],
  ['shalom', 'https://shalomdigitalsolutions.com/'],
  ['mutlog', 'https://mutlog.shalomdigitalsolutions.com/'],
  ['mila-logistique', 'https://milalogistique.vercel.app/'],
  ['expertise-a-plus', 'https://expertisea.vercel.app/']
]
const outDir = new URL('../public/images/projects/desktop/', import.meta.url).pathname
await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'fr-FR' })
for (const [id, url] of targets) {
  const page = await context.newPage()
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
    await page.waitForTimeout(1500)
    await page.screenshot({ path: `${outDir}${id}.jpg`, type: 'jpeg', quality: 85 })
    console.log('OK  ', id)
  } catch (err) {
    console.error('ÉCHEC', id, err.message)
  }
  await page.close()
}
await browser.close()
