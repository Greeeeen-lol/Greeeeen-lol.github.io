/**
 * package-games.js — build the eShop bundle payloads.
 *
 * For every 'bundle' title in the catalog, zip its source folder (under the
 * "games to put on eshop" directory at the repo root) into
 *   platform-server/assets/games/<titleId>.zip
 * which the platform server then streams to the client on download.
 *
 * Files are STORED (no compression): the heavy payloads are already-compressed
 * wasm/data/png, so deflating only burns CPU for ~no size win. The zip is just
 * a transport container so a whole folder ships in one request.
 *
 * jszip is resolved from the repo-root node_modules (this script lives under
 * platform-server, which has no own deps — Node walks up and finds it).
 *
 * Usage:  node platform-server/scripts/package-games.js
 */
const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const CATALOG = require('../src/catalog');

const REPO_ROOT = path.resolve(__dirname, '../..');
// Game sources. Default = repo root; override if backed up / moved off-drive:
//   BUNDLES_SRC="E:\game-sources" node platform-server/scripts/package-games.js
const BUNDLES_SRC = process.env.BUNDLES_SRC
  ? path.resolve(process.env.BUNDLES_SRC)
  : path.join(REPO_ROOT, 'games to put on eshop');
const GAMES_OUT = path.resolve(__dirname, '../assets/games');

/** Recursively collect files as { abs, rel } with forward-slash rel paths. */
function walk(dir, base = dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    if (fs.statSync(abs).isDirectory()) out.push(...walk(abs, base));
    else out.push({ abs, rel: path.relative(base, abs).split(path.sep).join('/') });
  }
  return out;
}

async function buildOne(game) {
  const srcDir = path.join(BUNDLES_SRC, game.src);
  if (!fs.existsSync(srcDir)) {
    console.warn(`[package] SKIP ${game.titleId} (${game.name}): missing source ${srcDir}`);
    return false;
  }
  const files = walk(srcDir);
  if (!files.some((f) => f.rel === game.entry)) {
    console.warn(`[package] WARN ${game.name}: entry "${game.entry}" not found in ${game.src}`);
  }

  const zip = new JSZip();
  for (const f of files) zip.file(f.rel, fs.readFileSync(f.abs));

  fs.mkdirSync(GAMES_OUT, { recursive: true });
  const outPath = path.join(GAMES_OUT, game.file);
  const buf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'STORE',
    streamFiles: true,
  });
  fs.writeFileSync(outPath, buf);
  const mb = (buf.length / 1048576).toFixed(1);
  console.log(`[package] ${game.name}  ->  ${game.file}  (${files.length} files, ${mb} MB)`);
  return true;
}

(async () => {
  const bundles = CATALOG.filter((g) => g.type === 'bundle');
  console.log(`[package] building ${bundles.length} bundle(s) from ${BUNDLES_SRC}`);
  let ok = 0;
  for (const g of bundles) { if (await buildOne(g)) ok++; }
  console.log(`[package] done: ${ok}/${bundles.length} bundles written to ${GAMES_OUT}`);
})().catch((err) => { console.error('[package] FAILED:', err); process.exit(1); });
