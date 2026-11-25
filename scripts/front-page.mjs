// After a merge: the front page made anew from every theme in themes/, committed by the bot on main, and the open forms
// of the themes in the gallery closed with where they are now. One at a time; a push that is refused because main moved
// fetches the newest and tries again.
//
//   node scripts/front-page.mjs
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { GALLERY_URL, frontPage, recheck } from '../check/check.mjs';
import { run as runFor } from './run.mjs';

const BOT = ['github-actions[bot]', '41898282+github-actions[bot]@users.noreply.github.com'];
const PAGES = ['README.md', 'README.nl.md'];
const FOLDER = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Every theme in the gallery the check still takes; anything else is left off the front page. */
export function themesIn(root) {
  const base = join(root, 'themes');
  if (!existsSync(base)) return [];
  return readdirSync(base, { withFileTypes: true }).filter((entry) => entry.isDirectory() && FOLDER.test(entry.name)).flatMap((entry) => {
    const path = join(base, entry.name, 'theme.json');
    const file = existsSync(path) ? recheck(readFileSync(path, 'utf8')) : null;
    if (file === null) console.warn(`left off the front page: themes/${entry.name}`);
    return file === null ? [] : [{ folder: entry.name, file }];
  });
}

/** Writes both front pages; whether anything changed. */
export function buildFrontPage(root) {
  const themes = themesIn(root);
  let changed = false;
  for (const [name, lang] of [[PAGES[0], 'en'], [PAGES[1], 'nl']]) {
    const path = join(root, name);
    const text = frontPage(themes, lang);
    if (existsSync(path) && readFileSync(path, 'utf8') === text) continue;
    writeFileSync(path, text);
    changed = true;
  }
  return changed;
}

/**
 * The open forms whose theme is in the gallery: the number at the end of a folder. Read from all folders, not from what
 * this push added, so a form that a skipped run left open is closed by the next.
 */
function formsToClose(run, themes) {
  let open = [];
  try {
    open = JSON.parse(run('gh', ['issue', 'list', '--label', 'theme-submission', '--state', 'open', '--limit', '500', '--json', 'number']) || '[]');
  } catch {
    return [];
  }
  if (!Array.isArray(open)) return [];
  const numbers = new Set(open.map((issue) => issue?.number).filter((number) => Number.isSafeInteger(number) && number > 0));
  return themes.flatMap(({ folder }) => {
    const number = Number(/-(\d+)$/.exec(folder)?.[1] ?? 0);
    return numbers.has(number) ? [[String(number), folder]] : [];
  });
}

export function publishFrontPage({ root, run = runFor, attempts = 3 }) {
  run('git', ['config', 'user.name', BOT[0]]);
  run('git', ['config', 'user.email', BOT[1]]);
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    buildFrontPage(root);
    if (run('git', ['status', '--porcelain', '--', ...PAGES]).trim() === '') break;
    run('git', ['add', '--', ...PAGES]);
    run('git', ['commit', '-m', 'Front page: the themes there are']);
    try {
      run('git', ['push', 'origin', 'HEAD:main']);
      break;
    } catch (error) {
      if (attempt === attempts) throw error;
      run('git', ['pull', '--rebase', 'origin', 'main']);
    }
  }
  for (const [number, folder] of formsToClose(run, themesIn(root))) {
    run('gh', ['issue', 'close', number, '--comment', `Added to the gallery / Toegevoegd aan de galerij: ${GALLERY_URL}/tree/main/themes/${folder}`]);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    publishFrontPage({ root: process.cwd() });
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
