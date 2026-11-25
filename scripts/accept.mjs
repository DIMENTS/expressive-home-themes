// The second job of the check: trusts nothing of the first. It checks the form again itself, works out the folder
// itself, takes only a few files of fixed names, makes sure the theme is exactly what the check writes and the pictures
// are PNGs of the right size, and only then writes the folder, opens or updates the pull request and answers the form.
//
//   node scripts/accept.mjs <event file> <folder of the first job>
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { REASONS, checkSubmission, commentText, recheck, themeJson, themePage } from '../check/check.mjs';
import { issueOf, today as todayIs } from './check-issue.mjs';
import { pngSize } from './png.mjs';
import { run as runFor } from './run.mjs';

/** The only files the first job may hand over. */
export const ALLOWED_FILES = new Set(['result.json', 'theme.json', 'README.md', 'light.png', 'dark.png', 'allowed.png']);
const PICTURE = { width: 640, height: 400, bytes: 2_000_000 };
const BOT = ['github-actions[bot]', '41898282+github-actions[bot]@users.noreply.github.com'];

const fail = (why) => { throw new Error(`Not taken: ${why}`); };

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
}

/** A text in a file of its own, for a program that reads it with --body-file. */
function textFile(text) {
  const path = join(mkdtempSync(join(tmpdir(), 'gallery-')), 'text.md');
  writeFileSync(path, text);
  return path;
}

export function acceptTheme({ eventPath, incoming, root, run = runFor, today = todayIs() }) {
  const issue = issueOf(eventPath);
  const answer = (text) => run('gh', ['issue', 'comment', String(issue.number), '--body-file', textFile(text)]);

  // what was handed over: only files of the fixed names
  const entries = existsSync(incoming) ? readdirSync(incoming, { withFileTypes: true }) : [];
  for (const entry of entries) if (!entry.isFile() || !ALLOWED_FILES.has(entry.name)) fail(`unexpected ${JSON.stringify(entry.name)}`);

  // the form, checked again here
  const first = checkSubmission({ body: issue.body, maker: issue.login, issue: issue.number });
  if (!first.ok) {
    answer(commentText(first));
    return { ok: false, reason: first.reason };
  }
  if (readJson(join(incoming, 'result.json'))?.ok !== true) {
    answer(commentText({ ok: false, reason: 'no-pictures', message: REASONS['no-pictures'] }));
    return { ok: false, reason: 'no-pictures' };
  }

  // the theme: exactly what this check writes for this form
  const path = join(incoming, 'theme.json');
  if (!existsSync(path)) fail('no theme.json');
  const text = readFileSync(path, 'utf8');
  const stored = recheck(text);
  if (stored === null) fail('theme.json is not a theme the check writes');
  const own = checkSubmission({ body: issue.body, maker: issue.login, issue: issue.number, id: stored.id });
  if (!own.ok || themeJson(own.file) !== text) fail('theme.json is not what the check writes for this form');

  // the pictures: PNGs of the right size, the third only when someone else's CSS waits for permission
  const allowed = own.report.css !== null && own.report.css.notYet.length > 0;
  const pictures = ['light.png', 'dark.png', ...(allowed ? ['allowed.png'] : [])];
  for (const entry of entries) if (entry.name.endsWith('.png') && !pictures.includes(entry.name)) fail(`unexpected ${entry.name}`);
  const bytes = new Map();
  for (const name of pictures) {
    const file = join(incoming, name);
    if (!existsSync(file) || statSync(file).size > PICTURE.bytes) fail(`${name} missing or too large`);
    const picture = readFileSync(file);
    const size = pngSize(picture);
    if (size === null || size.width !== PICTURE.width || size.height !== PICTURE.height) fail(`${name} is not a PNG of ${PICTURE.width} by ${PICTURE.height}`);
    bytes.set(name, picture);
  }

  // the folder, worked out here
  const { folder } = own;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(folder)) fail('folder');
  const branch = `theme/${issue.number}`;
  const entry = { ...own, date: today, allowed };

  run('git', ['fetch', 'origin', 'main']);
  run('git', ['checkout', '-B', branch, 'origin/main']);
  const dir = join(root, 'themes', folder);
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'theme.json'), text);
  writeFileSync(join(dir, 'README.md'), themePage(entry));
  for (const [name, picture] of bytes) writeFileSync(join(dir, name), picture);

  run('git', ['config', 'user.name', BOT[0]]);
  run('git', ['config', 'user.email', BOT[1]]);
  run('git', ['add', '--', `themes/${folder}`]);
  run('git', ['commit', '-m', `Theme from #${issue.number}: themes/${folder}`]);
  run('git', ['push', '--force', 'origin', branch]);

  const title = `Theme from #${issue.number}: ${folder}`;
  const body = textFile(`Theme from #${issue.number}, checked by the gallery's check. / Thema uit #${issue.number}, nagekeken door de controle van de galerij.\n\n${commentText(entry)}`);
  let open = [];
  try {
    open = JSON.parse(run('gh', ['pr', 'list', '--head', branch, '--state', 'open', '--json', 'number']) || '[]');
  } catch {
    open = [];
  }
  const number = Array.isArray(open) && Number.isSafeInteger(open[0]?.number) ? open[0].number : null;
  if (number === null) run('gh', ['pr', 'create', '--base', 'main', '--head', branch, '--title', title, '--body-file', body]);
  else run('gh', ['pr', 'edit', String(number), '--title', title, '--body-file', body]);
  answer(commentText(entry));
  return { ok: true, folder, branch };
}

function main() {
  const [eventPath, incoming] = process.argv.slice(2);
  if (!eventPath || !incoming) throw new Error('node scripts/accept.mjs <event file> <folder of the first job>');
  const result = acceptTheme({ eventPath, incoming, root: process.cwd() });
  console.log(result.ok ? `pull request for themes/${result.folder}` : `refused: ${result.reason}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
