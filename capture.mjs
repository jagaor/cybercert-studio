import { chromium } from 'playwright';

const BASE = 'http://localhost:8765/index.html';
const OUT = './screenshots';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

async function shoot(name, fn) {
  console.log('→', name);
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(400);
  if (fn) await fn(page);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
}

async function pickCert(p, id) {
  await p.click(`.cert-card[data-id="${id}"]`);
  await p.waitForTimeout(500);
}

// 1. Cert selector (landing fresh) — now shows new branding "CyberCert Studio"
await shoot('01-cert-selector');

// 2. Dashboard (after picking Sec+)
await shoot('02-dashboard', async (p) => { await pickCert(p, 'secplus'); });

// 3. Theory with tooltip visible
await shoot('03-theory', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('button[data-route="theory"]');
  await p.waitForTimeout(800);
  const tt = await p.$('.theory-content .tt');
  if (tt) await tt.hover();
  await p.waitForTimeout(500);
});

// 4. Flashcards
await shoot('04-flashcards', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('button[data-route="flashcards"]');
  await p.waitForTimeout(600);
});

// 5. Acronyms trainer
await shoot('05-acronyms', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('button[data-route="acronyms"]');
  await p.waitForTimeout(600);
});

// 6. Quiz with question feedback
await shoot('06-quiz', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('button[data-route="quiz"]');
  await p.waitForTimeout(400);
  await p.click('#qstart');
  await p.waitForTimeout(500);
  const opt = await p.$('.opt');
  if (opt) await opt.click();
  await p.waitForTimeout(500);
});

// 7. Exam intro
await shoot('07-exam', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('button[data-route="exam"]');
  await p.waitForTimeout(500);
});

// 8. Bot assistant open
await shoot('08-bot', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('#botBtn');
  await p.waitForTimeout(600);
  await p.fill('#botInput', '¿Qué es TLS?');
  await p.click('#botSend');
  await p.waitForTimeout(800);
});

// 9. English mode theory
await shoot('09-theory-english', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('#langToggle');
  await p.waitForTimeout(400);
  await p.click('button[data-route="theory"]');
  await p.waitForTimeout(800);
});

// 10. Glossary
await shoot('10-glossary', async (p) => {
  await pickCert(p, 'secplus');
  await p.click('button[data-route="glossary"]');
  await p.waitForTimeout(600);
});

// 11. Other cert example — OSCP theory (shows multi-cert content)
await shoot('11-oscp-theory', async (p) => {
  await pickCert(p, 'oscp');
  await p.click('button[data-route="theory"]');
  await p.waitForTimeout(800);
});

// 12. CISSP theory (shows GRC/management cert)
await shoot('12-cissp-theory', async (p) => {
  await pickCert(p, 'cissp');
  await p.click('button[data-route="theory"]');
  await p.waitForTimeout(800);
});

// 13. AWS Security cert example
await shoot('13-aws-quiz', async (p) => {
  await pickCert(p, 'awssec');
  await p.click('button[data-route="quiz"]');
  await p.waitForTimeout(400);
  await p.click('#qstart');
  await p.waitForTimeout(500);
});

// 14. Cert selector scrolled — all certs ready
await shoot('14-all-certs-ready', async (p) => {
  await p.evaluate(() => window.scrollTo(0, 600));
});

await browser.close();
console.log('✓ Done');
