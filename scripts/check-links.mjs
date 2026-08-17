import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
const root = resolve('dist'),
  html = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    const file = join(dir, name);
    if ((await stat(file)).isDirectory()) await walk(file);
    else if (name.endsWith('.html')) html.push(file);
  }
}
await walk(root);
const failures = [];
for (const file of html) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (!value || value.startsWith('#') || /^(?:https?:|mailto:|tel:|data:)/.test(value)) continue;
    const pathname = value.split(/[?#]/)[0];
    const target = pathname.startsWith('/') ? join(root, pathname) : resolve(file, '..', pathname);
    const candidates = pathname.endsWith('/')
      ? [join(target, 'index.html')]
      : [target, `${target}.html`, join(target, 'index.html')];
    let ok = false;
    for (const candidate of candidates) {
      try {
        if ((await stat(candidate)).isFile()) {
          ok = true;
          break;
        }
      } catch {}
    }
    if (!ok) failures.push(`${file.replace(root, 'dist')} -> ${value}`);
  }
}
if (failures.length) {
  console.error(`Broken internal links:\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Checked ${html.length} HTML files: no broken internal links.`);
