/**
 * gameFS — Anura-style browser virtual filesystem for the platform.
 * --------------------------------------------------------------------------
 * Backed by lightning-fs (a path-based, IndexedDB-backed VFS — the same family
 * of virtual filesystem Anura uses). The client downloads a game payload ONCE
 * from the platform server, writes it into this VFS, and from then on the title
 * is "installed" locally and runs entirely from the browser — no server
 * round-trip to launch.
 *
 * This replaces the old model where "installed" meant "a file exists in the
 * server's public/games directory" (global + permanent). Install state now
 * lives per-browser, here.
 *
 * Game payloads live at  /games/<titleId>.html  inside the VFS.
 */
import LightningFS from '@isomorphic-git/lightning-fs';
import JSZip from 'jszip';

const GAMES_DIR = '/games';

// Single shared filesystem instance (one IndexedDB store named 'wiiu-platform-fs').
const fs = new LightningFS('wiiu-platform-fs').promises as {
  mkdir: (p: string) => Promise<void>;
  readdir: (p: string) => Promise<string[]>;
  readFile: (p: string) => Promise<Uint8Array>;
  writeFile: (p: string, data: Uint8Array | string) => Promise<void>;
  unlink: (p: string) => Promise<void>;
  stat: (p: string) => Promise<{ size: number }>;
};

async function ensureGamesDir(): Promise<void> {
  try {
    await fs.mkdir(GAMES_DIR);
  } catch (e: any) {
    if (e && e.code === 'EEXIST') return;
    // Some filer builds throw a generic error on existing dirs — verify.
    try { await fs.readdir(GAMES_DIR); } catch { throw e; }
  }
}

const gamePath = (titleId: string) => `${GAMES_DIR}/${titleId}.html`;

/** Is this title installed in the local VFS? */
export async function isInstalled(titleId: string): Promise<boolean> {
  try {
    await fs.stat(gamePath(titleId));
    return true;
  } catch {
    return false;
  }
}

/** List installed title IDs (derived from /games/*.html in the VFS). */
export async function listInstalled(): Promise<{ titleId: string }[]> {
  try {
    await ensureGamesDir();
    const entries = await fs.readdir(GAMES_DIR);
    return entries
      .filter((f) => f.endsWith('.html'))
      .map((f) => ({ titleId: f.replace(/\.html$/, '') }));
  } catch {
    return [];
  }
}

/** List installed titles with their on-disk (VFS) byte size. */
export async function listInstalledDetailed(): Promise<{ titleId: string; size: number }[]> {
  try {
    await ensureGamesDir();
    const entries = await fs.readdir(GAMES_DIR);
    const out: { titleId: string; size: number }[] = [];
    for (const f of entries) {
      if (!f.endsWith('.html')) continue;
      const titleId = f.replace(/\.html$/, '');
      let size = 0;
      try { size = (await fs.stat(`${GAMES_DIR}/${f}`)).size; } catch { /* ignore */ }
      out.push({ titleId, size });
    }
    return out;
  } catch {
    return [];
  }
}

/**
 * Download a title from the platform server and store it in the VFS.
 * Streams the payload so large games report real progress (0..1).
 */
export async function installGame(
  titleId: string,
  onProgress?: (fraction: number) => void,
): Promise<void> {
  const res = await fetch(`/platform/download/${titleId}`);
  if (!res.ok) throw new Error(`Download failed for ${titleId}: HTTP ${res.status}`);

  const total = Number(res.headers.get('Content-Length')) || 0;
  const reader = res.body?.getReader();

  let bytes: Uint8Array;
  if (reader) {
    const chunks: Uint8Array[] = [];
    let received = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        received += value.length;
        if (onProgress && total) onProgress(Math.min(received / total, 1));
      }
    }
    bytes = new Uint8Array(received);
    let offset = 0;
    for (const c of chunks) { bytes.set(c, offset); offset += c.length; }
  } else {
    bytes = new Uint8Array(await res.arrayBuffer());
  }

  await ensureGamesDir();
  await fs.writeFile(gamePath(titleId), bytes);
  onProgress?.(1);
}

/** Remove an installed title from the VFS. */
export async function uninstallGame(titleId: string): Promise<void> {
  try { await fs.unlink(gamePath(titleId)); } catch { /* not installed */ }
}

/**
 * Return a blob: object URL for the installed game's HTML, suitable for an
 * <iframe src>. Caller should revoke it when the iframe closes.
 */
export async function getGameObjectURL(titleId: string): Promise<string> {
  const data = await fs.readFile(gamePath(titleId));
  const blob = new Blob([data], { type: 'text/html' });
  return URL.createObjectURL(blob);
}

// ===========================================================================
// BUNDLE titles (multi-file games: Unity / Ren'Py / GameMaker / …)
// ---------------------------------------------------------------------------
// Shipped as one .zip, unzipped into Cache Storage under /vfs/<titleId>/* and
// served same-origin by the service worker (public/vfs-sw.js). Install state =
// "the cache 'vfs-<titleId>' exists and holds the entry html".
// ===========================================================================

const BUNDLE_CACHE = (titleId: string) => `vfs-${titleId}`;
const vfsPath = (titleId: string, rel: string) => `/vfs/${titleId}/${rel}`;

/** Content-Type per extension. .wasm/.js/.html matter most (streaming compile,
 *  module eval, doc parsing); the rest are octet-stream-safe. */
function mimeFor(p: string): string {
  const ext = p.toLowerCase().slice(p.lastIndexOf('.'));
  switch (ext) {
    case '.html': case '.htm': return 'text/html; charset=utf-8';
    case '.js': case '.mjs': return 'text/javascript; charset=utf-8';
    case '.wasm': return 'application/wasm';
    case '.json': return 'application/json';
    case '.css': return 'text/css';
    case '.png': return 'image/png';
    case '.jpg': case '.jpeg': return 'image/jpeg';
    case '.gif': return 'image/gif';
    case '.webp': return 'image/webp';
    case '.svg': return 'image/svg+xml';
    case '.ico': return 'image/x-icon';
    case '.mp3': return 'audio/mpeg';
    case '.ogg': return 'audio/ogg';
    case '.wav': return 'audio/wav';
    case '.woff2': return 'font/woff2';
    case '.woff': return 'font/woff';
    case '.ttf': return 'font/ttf';
    default: return 'application/octet-stream';
  }
}

/**
 * Rewrite the entry HTML so it runs from the local VFS instead of the CDN it
 * was mirrored from. The games carry `<base href="https://cdn.jsdelivr.net/…">`;
 * point that at /vfs/<titleId>/ so every relative fetch (Build/*, *.part1, …)
 * resolves to a path the service worker serves from cache.
 */
function rewriteEntryHtml(html: string, titleId: string): string {
  const base = `/vfs/${titleId}/`;
  if (/<base\b[^>]*>/i.test(html)) {
    return html.replace(/<base\b[^>]*>/i, `<base href="${base}">`);
  }
  // No <base> present — inject one right after <head>.
  if (/<head\b[^>]*>/i.test(html)) {
    return html.replace(/(<head\b[^>]*>)/i, `$1<base href="${base}">`);
  }
  return `<base href="${base}">` + html;
}

/** Is this bundle title installed (cache present with its entry html)? */
export async function isBundleInstalled(titleId: string, entry: string): Promise<boolean> {
  try {
    if (!(await caches.has(BUNDLE_CACHE(titleId)))) return false;
    const cache = await caches.open(BUNDLE_CACHE(titleId));
    return !!(await cache.match(vfsPath(titleId, entry)));
  } catch {
    return false;
  }
}

/** List installed bundle title IDs (derived from vfs-* caches). */
export async function listInstalledBundles(): Promise<string[]> {
  try {
    const keys = await caches.keys();
    return keys.filter((k) => k.startsWith('vfs-')).map((k) => k.slice(4));
  } catch {
    return [];
  }
}

/** Total on-disk (cache) byte size of an installed bundle. */
export async function bundleSize(titleId: string): Promise<number> {
  try {
    const cache = await caches.open(BUNDLE_CACHE(titleId));
    const reqs = await cache.keys();
    let total = 0;
    for (const req of reqs) {
      const resp = await cache.match(req);
      if (resp) total += (await resp.clone().arrayBuffer()).byteLength;
    }
    return total;
  } catch {
    return 0;
  }
}

/**
 * Download a bundle title's .zip from the platform server, unzip it, and write
 * every file into Cache Storage under /vfs/<titleId>/*. Progress covers the
 * network download (the heavy part); unzip is reported as the final stretch.
 */
export async function installBundle(
  titleId: string,
  entry: string,
  onProgress?: (fraction: number) => void,
): Promise<void> {
  const res = await fetch(`/platform/download/${titleId}`);
  if (!res.ok) throw new Error(`Download failed for ${titleId}: HTTP ${res.status}`);

  const total = Number(res.headers.get('Content-Length')) || 0;
  const reader = res.body?.getReader();

  let zipBytes: Uint8Array;
  if (reader) {
    const chunks: Uint8Array[] = [];
    let received = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        received += value.length;
        // Reserve the last 5% for unzip/cache-write.
        if (onProgress && total) onProgress(Math.min(received / total, 1) * 0.95);
      }
    }
    zipBytes = new Uint8Array(received);
    let offset = 0;
    for (const c of chunks) { zipBytes.set(c, offset); offset += c.length; }
  } else {
    zipBytes = new Uint8Array(await res.arrayBuffer());
  }

  const zip = await JSZip.loadAsync(zipBytes);
  const cache = await caches.open(BUNDLE_CACHE(titleId));

  const entries = Object.values(zip.files).filter((f) => !f.dir);
  let done = 0;
  for (const f of entries) {
    let body: Uint8Array | string = await f.async('uint8array');
    if (f.name === entry) {
      // Rewrite the launch HTML so it runs locally, not from the source CDN.
      body = rewriteEntryHtml(new TextDecoder().decode(body), titleId);
    }
    await cache.put(
      vfsPath(titleId, f.name),
      new Response(body, { headers: { 'Content-Type': mimeFor(f.name) } }),
    );
    done++;
    if (onProgress) onProgress(0.95 + 0.05 * (done / entries.length));
  }
  onProgress?.(1);
}

/** Remove an installed bundle (drop its whole cache). */
export async function uninstallBundle(titleId: string): Promise<void> {
  try { await caches.delete(BUNDLE_CACHE(titleId)); } catch { /* not installed */ }
}

/** Configured backend origin (empty in dev → vite proxy). Set in platform-config.js. */
const PLATFORM_BASE: string = ((globalThis as any).PLATFORM_BASE as string) || '';

/**
 * Register the service worker. It both serves /vfs/* from Cache Storage and (when
 * a backend base is configured) proxies /platform, /local-assets and /games to it
 * — the production replacement for the vite proxy. Idempotent; awaits control.
 */
export async function ensureVfsServiceWorker(): Promise<void> {
  if (!('serviceWorker' in navigator)) {
    throw new Error('Service workers unavailable — bundle games cannot run.');
  }
  const url = '/vfs-sw.js' + (PLATFORM_BASE ? `?base=${encodeURIComponent(PLATFORM_BASE)}` : '');
  const reg = await navigator.serviceWorker.register(url, { scope: '/' });
  // Ensure an active controller before any /vfs/ launch or proxied fetch.
  if (!navigator.serviceWorker.controller) {
    await navigator.serviceWorker.ready;
  }
  return void reg;
}

/** Launch URL for an installed bundle (served by the SW). */
export function bundleEntryURL(titleId: string, entry: string): string {
  return vfsPath(titleId, entry);
}

// ===========================================================================
// Unified helpers over both title types (manifest-driven).
// ===========================================================================

export interface CatalogTitle {
  titleId: string;
  type: 'single' | 'bundle';
  name: string;
  entry: string | null;
  icon?: string | null;
  banner?: string | null;
  loadSplash?: string | null;
  jingle?: string | null;
  available?: boolean;
}

let _manifestCache: CatalogTitle[] | null = null;

/** eShop catalog from the platform server (cached for the session). */
export async function getCatalog(force = false): Promise<CatalogTitle[]> {
  if (_manifestCache && !force) return _manifestCache;
  // When a backend base is configured, the SW must be controlling the page so
  // this relative request gets proxied to the backend instead of 404ing.
  if (PLATFORM_BASE) { try { await ensureVfsServiceWorker(); } catch { /* fall through */ } }
  const m = await fetch('/platform/manifest').then((r) => r.json());
  _manifestCache = Array.isArray(m?.catalog) ? m.catalog : [];
  return _manifestCache!;
}

/**
 * Install any title by id — branches on its catalog type. Single titles land in
 * the lightning-fs VFS; bundles unzip into Cache Storage. Used by the eShop
 * download handler so it doesn't need to know the title's shape.
 */
export async function installTitle(
  titleId: string,
  onProgress?: (fraction: number) => void,
): Promise<void> {
  const t = (await getCatalog()).find((g) => g.titleId === titleId);
  if (t?.type === 'bundle') {
    await ensureVfsServiceWorker();
    await installBundle(titleId, t.entry || 'index.html', onProgress);
  } else {
    await installGame(titleId, onProgress);
  }
}

/** All installed titles (single VFS payloads + bundle caches), with type. */
export async function listInstalledAll(): Promise<{ titleId: string; type: 'single' | 'bundle' }[]> {
  const out: { titleId: string; type: 'single' | 'bundle' }[] = [];
  for (const g of await listInstalled()) out.push({ titleId: g.titleId, type: 'single' });
  for (const id of await listInstalledBundles()) out.push({ titleId: id, type: 'bundle' });
  return out;
}

/** Resolve the iframe src + whether it's a blob: URL (caller revokes blobs). */
export async function getTitleLaunchSrc(
  titleId: string,
): Promise<{ src: string; isBlob: boolean }> {
  const t = (await getCatalog()).find((g) => g.titleId === titleId);
  if (t?.type === 'bundle') {
    await ensureVfsServiceWorker();
    return { src: bundleEntryURL(titleId, t.entry || 'index.html'), isBlob: false };
  }
  return { src: await getGameObjectURL(titleId), isBlob: true };
}
