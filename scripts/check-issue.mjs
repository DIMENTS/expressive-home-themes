// The first job of the check: reads a submitted form from the event file, checks the theme and makes its previews. It
// may only read: what it makes goes to the next job, which checks all of it again before it writes anything.
//
//   node scripts/check-issue.mjs <event file> <folder to write to>
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { checkSubmission, themeJson, themePage } from '../check/check.mjs';

/** The form of an event, as plain values; what is not there is empty. */
export function issueOf(eventPath) {
  const event = JSON.parse(readFileSync(eventPath, 'utf8'));
  const issue = event?.issue ?? {};
  return { number: issue.number, body: typeof issue.body === 'string' ? issue.body : '', login: typeof issue.user?.login === 'string' ? issue.user.login : '' };
}

/** Today, as the pages write it. */
export const today = () => new Date().toISOString().slice(0, 10);

export async function checkIssue({ eventPath, outDir, previewDir, render, date = today(), id }) {
  const issue = issueOf(eventPath);
  const result = checkSubmission({ body: issue.body, maker: issue.login, issue: issue.number, id });
  const done = (outcome) => {
    writeFileSync(join(outDir, 'result.json'), `${JSON.stringify(outcome)}\n`);
    return outcome;
  };
  if (!result.ok) return done({ ok: false, reason: result.reason });
  const allowed = result.report.css !== null && result.report.css.notYet.length > 0;
  const pictures = await render({ file: result.file, previewDir, outDir, allowed });
  if (!pictures.ok) {
    for (const name of ['light.png', 'dark.png', 'allowed.png']) rmSync(join(outDir, name), { force: true });
    return done({ ok: false, reason: 'no-pictures' });
  }
  writeFileSync(join(outDir, 'theme.json'), themeJson(result.file));
  writeFileSync(join(outDir, 'README.md'), themePage({ ...result, date, allowed }));
  return done({ ok: true, folder: result.folder, allowed });
}

async function main() {
  const [eventPath, outDir] = process.argv.slice(2);
  if (!eventPath || !outDir) throw new Error('node scripts/check-issue.mjs <event file> <folder>');
  mkdirSync(outDir, { recursive: true });
  const { renderTheme } = await import('./render.mjs');
  const previewDir = fileURLToPath(new URL('../preview/', import.meta.url));
  const result = await checkIssue({ eventPath, outDir, previewDir, render: renderTheme });
  console.log(result.ok ? `checked: ${result.folder}` : `refused: ${result.reason}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
