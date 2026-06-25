/**
 * eShop catalog — single source of truth for every title the platform server
 * can deliver. Shared by server.js (manifest + download) and
 * scripts/package-games.js (zip builder).
 *
 * Title types:
 *   - 'single'  one self-contained .html payload. Client stores it in the
 *               lightning-fs VFS and launches via a blob: URL. (Eaglercraft.)
 *   - 'bundle'  a multi-file game (Unity WebGL, Ren'Py, GameMaker, …). Shipped
 *               as ONE .zip; the client unzips it into Cache Storage under
 *               /vfs/<titleId>/* and launches that path through the service
 *               worker (same-origin, so relative fetch + wasm streaming work).
 *
 * Bundle-only fields:
 *   src    folder under BUNDLES_SRC ("games to put on eshop") to zip.
 *   entry  html file inside the bundle to load when launched.
 *
 * Presentation assets (all served from /platform/assets/*, on the server):
 *   icon       menu tile + eShop card icon.
 *   banner     eShop front-page hero banner.
 *   loadSplash full-screen image on the launch loading screen.
 *   jingle     loading-screen audio; null → falls back to the Minecraft jingle.
 */
module.exports = [
  {
    titleId: '20010000020451',
    type: 'single',
    name: 'EaglercraftX',
    file: '20010000020451.html',
    icon: '/platform/assets/icons/eaglercraft.png',
    banner: '/platform/assets/icons/minecraft_banner.png',
    loadSplash: '/platform/assets/icons/minecraft_banner.png',
    jingle: null,
  },
  {
    titleId: '20010000030001',
    type: 'bundle',
    name: "Baldi's Basics Plus",
    src: 'baldi-plus',
    entry: 'index.html',
    file: '20010000030001.zip',
    icon: '/platform/assets/icons/20010000030001.png',
    banner: '/platform/assets/game-banners/20010000030001.png',
    loadSplash: '/platform/assets/load-splash/20010000030001.png',
    jingle: '/platform/assets/load-jingles/20010000030001.mp3',
  },
  {
    titleId: '20010000030002',
    type: 'bundle',
    name: "Class of '09",
    src: 'class-of-09',
    entry: 'index.html',
    file: '20010000030002.zip',
    icon: '/platform/assets/icons/20010000030002.png',
    banner: '/platform/assets/game-banners/20010000030002.png',
    loadSplash: '/platform/assets/load-splash/20010000030002.png',
    jingle: null,
  },
  {
    titleId: '20010000030003',
    type: 'bundle',
    name: 'Kindergarten',
    src: 'kindergarten 1',
    entry: 'index.html',
    file: '20010000030003.zip',
    icon: '/platform/assets/icons/20010000030003.png',
    banner: '/platform/assets/game-banners/20010000030003.png',
    loadSplash: '/platform/assets/load-splash/20010000030003.png',
    jingle: null,
  },
  {
    titleId: '20010000030004',
    type: 'bundle',
    name: 'Kindergarten 2',
    src: 'kidnergarten 2',
    entry: 'index.html',
    file: '20010000030004.zip',
    icon: '/platform/assets/icons/20010000030004.png',
    banner: '/platform/assets/game-banners/20010000030004.png',
    loadSplash: '/platform/assets/load-splash/20010000030004.png',
    jingle: null,
  },
  {
    titleId: '20010000030005',
    type: 'bundle',
    name: 'Undertale Yellow',
    src: 'undertale-yellow',
    entry: 'index.html',
    file: '20010000030005.zip',
    icon: '/platform/assets/icons/20010000030005.png',
    banner: '/platform/assets/game-banners/20010000030005.png',
    loadSplash: '/platform/assets/load-splash/20010000030005.webp',
    jingle: '/platform/assets/load-jingles/20010000030005.mp3',
  },
  {
    titleId: '20010000030006',
    type: 'bundle',
    name: 'Super Mario 64',
    src: 'SuperMario64ONBrowser',
    entry: 'Mario.html',
    file: '20010000030006.zip',
    icon: '/platform/assets/icons/20010000030006.png',
    banner: '/platform/assets/game-banners/20010000030006.png',
    loadSplash: '/platform/assets/load-splash/20010000030006.png',
    jingle: '/platform/assets/load-jingles/20010000030006.mp3',
  },
];
