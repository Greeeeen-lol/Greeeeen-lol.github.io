/**
 * platform-config.js — backend location for the deployed frontend.
 *
 * Leave EMPTY for local dev (the vite proxy forwards /platform, /local-assets,
 * /games to the platform server on :8082).
 *
 * For a hosted frontend (e.g. GitHub Pages) with the backend on your PC behind
 * ngrok / Cloudflare Tunnel, set this to the backend's PUBLIC HTTPS origin —
 * NO trailing slash, NO path. Example:
 *
 *   window.PLATFORM_BASE = "https://abcd-1234.ngrok-free.app";
 *
 * The service worker (vfs-sw.js) then routes all /platform, /local-assets and
 * /games requests to that origin. Update this one file whenever the URL changes.
 */
// Host-aware: on localhost (dev) stay EMPTY so the vite proxy forwards to the
// local platform-server (:8082) — no ngrok needed to develop. On any other host
// (the hosted frontend, e.g. GitHub Pages) use the public backend.
//
// HTTPS (not http): a hosted frontend is HTTPS and browsers block an HTTPS page
// from fetching http:// (mixed content). ngrok serves the same host over https.
// No trailing slash.
(function () {
  var h = location.hostname;
  var isLocal = (h === 'localhost' || h === '127.0.0.1' || h === '');
  window.PLATFORM_BASE = isLocal ? '' : 'https://basically-immense-rat.ngrok-free.app';
})();
