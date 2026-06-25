/**
 * vfs-sw.js — two jobs:
 *
 * 1. Serve installed bundle games from Cache Storage (/vfs/*). A "bundle" eShop
 *    title is unzipped at install into a per-title cache 'vfs-<titleId>' keyed by
 *    /vfs/<titleId>/<relpath>; we answer those from cache so the game runs
 *    same-origin (relative fetch + wasm streaming work). No server round-trip.
 *
 * 2. Act as the PRODUCTION replacement for the vite dev proxy. When the page
 *    registers this SW with ?base=<backendOrigin> (set in platform-config.js for
 *    a hosted frontend), requests to /platform, /local-assets and /games are
 *    rewritten to that backend origin — the same rewrites vite does in dev:
 *        /local-assets/*  ->  <base>/platform/assets/*
 *        /games/*         ->  <base>/platform/assets/games/*
 *        /platform/*      ->  <base>/platform/*
 *    With no base (dev), these are left alone so the vite proxy handles them.
 *
 * Plain dependency-free JS on purpose.
 */
const BACKEND_BASE = new URL(self.location).searchParams.get('base') || '';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Map a same-origin pathname onto the backend, mirroring the vite proxy rewrites.
function backendUrlFor(pathname) {
  if (!BACKEND_BASE) return null;
  if (pathname.startsWith('/local-assets/')) {
    return BACKEND_BASE + pathname.replace(/^\/local-assets/, '/platform/assets');
  }
  if (pathname.startsWith('/games/')) {
    return BACKEND_BASE + pathname.replace(/^\/games/, '/platform/assets/games');
  }
  if (pathname.startsWith('/platform/')) {
    return BACKEND_BASE + pathname;
  }
  return null;
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // (1) Installed bundle games — served from Cache Storage.
  if (url.origin === self.location.origin && url.pathname.startsWith('/vfs/')) {
    event.respondWith((async () => {
      const m = url.pathname.match(/^\/vfs\/([^/]+)\//);
      if (m) {
        const cache = await caches.open('vfs-' + m[1]);
        const hit = await cache.match(url.pathname);
        if (hit) return hit;
      }
      const anyHit = await caches.match(url.pathname);
      return anyHit || new Response('Not found in installed bundle', {
        status: 404, headers: { 'Content-Type': 'text/plain' },
      });
    })());
    return;
  }

  // (2) Backend proxy — only for our namespaces, only when a base is configured.
  if (url.origin === self.location.origin) {
    const target = backendUrlFor(url.pathname + url.search);
    if (target) {
      // Copy request headers (keeps Range for streamed payloads) and add the
      // ngrok header so free tunnels skip their browser-warning interstitial.
      const headers = new Headers(event.request.headers);
      headers.set('ngrok-skip-browser-warning', 'true');
      event.respondWith(
        fetch(target, {
          method: event.request.method,
          headers,
          redirect: 'follow',
          // GET/HEAD have no body; other methods pass theirs through.
          body: (event.request.method === 'GET' || event.request.method === 'HEAD')
            ? undefined : event.request.body,
        }).catch((e) => new Response('Backend unreachable: ' + e, { status: 502 })),
      );
    }
  }
});
