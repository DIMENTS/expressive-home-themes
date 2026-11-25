// The previews of a theme: the example house of the built dashboard in preview/, with the theme as the theme of this
// browser, light and dark, 1280 by 800 made 640 by 400. Only the preview itself can be reached; everything else is
// refused. A page that does not finish in time is stopped, and the theme refused.
import { createReadStream, existsSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';
import { chromium } from 'playwright';
export { pngSize } from './png.mjs';

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
};
/** Where the preview reads the theme to show (theme-gallery-src/preview/seed.ts). */
const PREVIEW_KEY = 'gallery.preview';
/** Always the same moment, so a picture only changes when the theme does. */
const MOMENT = new Date('2026-11-24T10:08:00');
/** Serves one folder on a free port of this computer, and nothing outside it. */
export function serve(folder) {
  const root = resolve(folder);
  const server = createServer((request, response) => {
    let path;
    try {
      path = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
    } catch {
      response.writeHead(400).end();
      return;
    }
    const file = resolve(join(root, path.endsWith('/') ? `${path}index.html` : path));
    if ((file !== root && !file.startsWith(root + sep)) || !existsSync(file) || !statSync(file).isFile()) {
      response.writeHead(404).end();
      return;
    }
    response.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' });
    createReadStream(file).pipe(response);
  });
  return new Promise((done) => {
    server.listen(0, '127.0.0.1', () => done({ server, origin: `http://127.0.0.1:${server.address().port}` }));
  });
}

async function picture(browser, origin, { file, mode, allowed, path, blocked, csp }) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.5, locale: 'en-GB', timezoneId: 'Europe/Amsterdam',
    colorScheme: mode, reducedMotion: 'reduce', serviceWorkers: 'block',
  });
  try {
    await context.route('**/*', (route) => {
      const url = route.request().url();
      if (url.startsWith(`${origin}/`)) return route.continue();
      blocked.push(url);
      return route.abort('blockedbyclient');
    });
    await context.addInitScript(({ key, value }) => {
      window.localStorage.setItem(key, value);
      // the example house varies its readings by chance: always the same chance
      let state = 0x2f6b1d3;
      Math.random = () => {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        return state / 2 ** 32;
      };
    }, { key: PREVIEW_KEY, value: JSON.stringify({ theme: file, mode, allowed }) });
    const page = await context.newPage();
    page.on('console', (message) => { if (/Content.Security.Policy/i.test(message.text())) csp.push(message.text()); });
    await page.clock.install({ time: MOMENT });
    await page.goto(`${origin}/index.html`);
    await page.getByRole('button', { name: /example house/i }).click();
    await page.locator('mh-dashboard').waitFor();
    await page.mouse.move(0, 0);
    await page.clock.runFor(2500);
    // what moves has arrived
    await page.waitForTimeout(1500);
    writeFileSync(path, await page.screenshot());
  } finally {
    await context.close();
  }
}

/**
 * Light and dark pictures of a theme, and with `allowed` a third after allowing all its CSS.
 * @returns {Promise<{ ok: true, pictures: string[], blocked: string[], csp: string[] } | { ok: false, reason: 'no-pictures' }>}
 */
export async function renderTheme({ file, previewDir, outDir, allowed, timeoutMs = 60_000 }) {
  const { server, origin } = await serve(previewDir);
  const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
  const blocked = [];
  const csp = [];
  const shots = [
    { name: 'light.png', mode: 'light', allowed: false },
    { name: 'dark.png', mode: 'dark', allowed: false },
    ...(allowed ? [{ name: 'allowed.png', mode: 'dark', allowed: true }] : []),
  ];
  let timer;
  const late = new Promise((done) => { timer = setTimeout(() => done('late'), timeoutMs); });
  try {
    const work = (async () => {
      for (const shot of shots) await picture(browser, origin, { file, mode: shot.mode, allowed: shot.allowed, path: join(outDir, shot.name), blocked, csp });
      return 'done';
    })();
    work.catch(() => {});
    const outcome = await Promise.race([work.then(() => 'done', () => 'failed'), late]);
    if (outcome !== 'done') return { ok: false, reason: 'no-pictures' };
    return { ok: true, pictures: shots.map((shot) => shot.name), blocked, csp };
  } finally {
    clearTimeout(timer);
    // a page that hangs keeps its browser busy: closing the browser ends it
    await Promise.race([browser.close(), new Promise((done) => { setTimeout(done, 5_000); })]);
    server.closeAllConnections?.();
    server.close();
  }
}
