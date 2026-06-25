/**
 * Platform Server
 * --------------------------------------------------------------------------
 * The Wii U Menu PLATFORM backend. Completely separate from ../server (the
 * fighting-game network / future eShop title — do not touch that one).
 *
 * Responsibilities:
 *   - Host ALL client assets under /platform/assets/* (the client downloads
 *     these once into its browser virtual filesystem, then runs locally).
 *   - Serve the eShop catalog (/platform/manifest) and stream game payloads
 *     on demand (/platform/download/:titleId) — the only "online" part of the
 *     eShop. Games are NOT pre-installed; the client decides install state.
 *
 * Asset layout (populated in Phase 2 step 2):
 *   assets/audio, assets/models, assets/icons, assets/backgrounds,
 *   assets/fonts, assets/cursor, assets/eshop-cdn, assets/games
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PLATFORM_PORT || 8082;

const ASSETS_ROOT = path.resolve(__dirname, '../assets');
const GAMES_ROOT = path.join(ASSETS_ROOT, 'games');

// Allow the hosted frontend (different origin, e.g. GitHub Pages) to read the
// headers the client relies on: Content-Length (download progress) and the
// Range/Content-Range trio (streamed media seeking).
app.use(cors({
  exposedHeaders: ['Content-Length', 'Content-Range', 'Accept-Ranges'],
}));

const MIME = {
  '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ogg': 'audio/ogg',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml',
  '.dae': 'model/vnd.collada+xml', '.glb': 'model/gltf-binary',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.zip': 'application/zip', '.dat': 'application/octet-stream',
  '.wasm': 'application/wasm',
};
const mimeFor = (p) => MIME[path.extname(p).toLowerCase()] || 'application/octet-stream';

/**
 * Stream a file with HTTP Range support (crucial for large audio/video/game
 * payloads so the browser can seek and stream rather than buffer everything).
 */
function sendFile(req, res, fullPath) {
  const stat = fs.statSync(fullPath);
  const contentType = mimeFor(fullPath);
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': (end - start) + 1,
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    fs.createReadStream(fullPath, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache',
    });
    fs.createReadStream(fullPath).pipe(res);
  }
}

/**
 * GET /platform/assets/<relpath>
 * Static asset host. The client pulls from here once, then caches in its
 * browser virtual filesystem (filerjs) and reads locally afterward.
 */
app.get('/platform/assets/*', (req, res) => {
  const rel = decodeURIComponent(req.params[0] || '');
  const fullPath = path.join(ASSETS_ROOT, rel);

  // Prevent path traversal outside ASSETS_ROOT.
  if (!fullPath.startsWith(ASSETS_ROOT + path.sep)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    return res.status(404).json({ error: 'Asset not found' });
  }
  sendFile(req, res, fullPath);
});

/**
 * GET /platform/manifest
 * eShop catalog — every title the server can deliver. The eShop UI renders
 * from this; install state is tracked client-side (browser FS), NOT here.
 */
const CATALOG = require('./catalog');

app.get('/platform/manifest', (req, res) => {
  const catalog = CATALOG.map((g) => {
    const available = fs.existsSync(path.join(GAMES_ROOT, g.file));
    return {
      titleId: g.titleId,
      type: g.type || 'single',
      name: g.name,
      // `entry` (bundle html to launch) is needed client-side at install + run.
      entry: g.entry || null,
      icon: g.icon,
      banner: g.banner,
      loadSplash: g.loadSplash || null,
      jingle: g.jingle || null,
      available,
    };
  });
  res.json({ catalog });
});

/**
 * GET /platform/download/:titleId
 * Streams a game payload to the client. The client writes it into its browser
 * virtual filesystem and marks the title installed locally. The server does
 * NOT copy anything into any served public directory.
 */
app.get('/platform/download/:titleId', (req, res) => {
  const game = CATALOG.find((g) => g.titleId === req.params.titleId);
  if (!game) return res.status(404).json({ error: 'Title not found in catalog' });

  const fullPath = path.join(GAMES_ROOT, game.file);
  if (!fs.existsSync(fullPath)) {
    return res.status(404).json({ error: 'Title payload not available on server' });
  }
  console.log(`[PLATFORM] Streaming ${game.titleId} (${game.name})`);
  sendFile(req, res, fullPath);
});

app.get('/platform/health', (req, res) => res.json({ ok: true, assetsRoot: ASSETS_ROOT }));

app.listen(PORT, () => {
  console.log(`[PLATFORM] Asset + eShop server on http://localhost:${PORT}`);
  console.log(`[PLATFORM] Assets: ${ASSETS_ROOT}`);
});
