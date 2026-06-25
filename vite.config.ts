import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// NOTE: assets formerly served from local root folders under /local-assets/ now
// live in platform-server/assets/ and are served by the platform server (port
// 8082). They are reached via the dev-server proxy below (/local-assets, /games).

const miiCreatorAssetsMiddleware = (req: any, res: any, next: () => void) => {
  const url = decodeURIComponent(req.url ? req.url.split('?')[0].split('#')[0] : '');
  
  // Try to resolve inside "mii-creator/public" or "mii creator/public"
  const possiblePaths = [
    path.join(__dirname, 'mii-creator/public', url),
    path.join(__dirname, 'mii creator/public', url),
  ];
  
  if (url.startsWith('/mii-creator/')) {
    possiblePaths.push(path.join(__dirname, 'mii-creator/public', url.slice('/mii-creator/'.length)));
    possiblePaths.push(path.join(__dirname, 'mii creator/public', url.slice('/mii-creator/'.length)));
  }

  for (const fullPath of possiblePaths) {
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      let contentType = 'application/octet-stream';
      if (ext === '.mp3') contentType = 'audio/mpeg';
      else if (ext === '.zip') contentType = 'application/zip';
      else if (ext === '.woff2') contentType = 'font/woff2';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.glb') contentType = 'model/gltf-binary';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      else if (ext === '.js') contentType = 'application/javascript';
      else if (ext === '.css') contentType = 'text/css';
      else if (ext === '.html') contentType = 'text/html';

      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'no-cache');
      
      const stream = fs.createReadStream(fullPath);
      stream.pipe(res);
      return;
    }
  }
  next();
};

const eshopMiddleware = (req: any, res: any, next: () => void) => {
  const url = decodeURIComponent((req.url ?? '').split('?')[0].split('#')[0]);
  
  // Check if it matches any of the eShop paths
  const eshopPrefixes = [
    '/geisha-wup.cdn.nintendo.net/',
    '/kanzashi-wup.cdn.nintendo.net/',
    '/ninja.wup.shop.nintendo.net/',
    '/samurai-wup.cdn.nintendo.net/',
    '/edge.microsoft.com/',
    '/www.googletagmanager.com/'
  ];

  let targetPath = '';
  if (url.startsWith('/geisha_wup.cdn.nintendo.net/')) {
    const relPath = url.slice('/geisha_wup.cdn.nintendo.net/'.length);
    targetPath = path.join(__dirname, 'geisha_wup.cdn.nintendo.net', relPath);
  } else {
    for (const prefix of eshopPrefixes) {
      if (url.startsWith(prefix)) {
        targetPath = path.join(__dirname, 'geisha_wup.cdn.nintendo.net', url);
        break;
      }
    }
  }

  if (targetPath && fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
    try {
      const ext = path.extname(targetPath).toLowerCase();
      
      // XML/JSON/No-Content detection/override for eShop API endpoints
      if (ext === '.html') {
        const content = fs.readFileSync(targetPath, 'utf8');
        const trimmed = content.replace(/^\uFEFF/, '').trim();
        if (trimmed.startsWith('No Content:')) {
          res.statusCode = 204;
          res.setHeader('Cache-Control', 'no-cache');
          res.end();
          return;
        } else if (trimmed.startsWith('<?xml')) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
          return;
        } else if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
          return;
        }
      }

      // Standard content types
      const mimeTypes: Record<string, string> = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.xml': 'application/xml',
        '.mp3': 'audio/mpeg',
        '.wav': 'audio/wav',
        '.woff2': 'font/woff2',
      };
      
      res.setHeader('Content-Type', mimeTypes[ext] ?? 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-cache');
      fs.createReadStream(targetPath).pipe(res);
      return;
    } catch (e) {
      console.error("Error serving eShop file:", e);
    }
  }
  next();
};

// eShop CDN mirrors. In dev these are served by eshopMiddleware from
// geisha_wup.cdn.nintendo.net/<dir>; for a static build (GitHub Pages) we copy
// each one to the dist root so /<dir>/... resolves the same way.
const ESHOP_COPY_DIRS = [
  'geisha-wup.cdn.nintendo.net',
  'kanzashi-wup.cdn.nintendo.net',
  'ninja.wup.shop.nintendo.net',
  'samurai-wup.cdn.nintendo.net',
  'edge.microsoft.com',
  'www.googletagmanager.com',
];

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'local-static-assets',
      configureServer(server) {
        server.middlewares.use(miiCreatorAssetsMiddleware);
        server.middlewares.use(eshopMiddleware);
      },
      configurePreviewServer(server) {
        server.middlewares.use(miiCreatorAssetsMiddleware);
        server.middlewares.use(eshopMiddleware);
      }
    },
    {
      // Build-only: bake the eShop static trees into dist for static hosting.
      name: 'copy-eshop-static',
      apply: 'build',
      closeBundle() {
        const outDir = path.resolve(__dirname, 'dist');
        for (const dir of ESHOP_COPY_DIRS) {
          const from = path.resolve(__dirname, 'geisha_wup.cdn.nintendo.net', dir);
          if (fs.existsSync(from)) {
            fs.cpSync(from, path.join(outDir, dir), { recursive: true });
          }
        }
      }
    }
  ],
  resolve: {
    // Force a single React instance across the dual entry points (the mii-maker
    // bundle + the React app) so hooks don't break with "Invalid hook call".
    dedupe: ['react', 'react-dom'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'wii-u-menu') },
      { find: /.*node_modules\/three\/examples\/(.*)/, replacement: 'three/examples/$1' },
      { find: /.*node_modules\/buffer(\/index)?/, replacement: 'buffer' },
      { find: /.*assert\/assert/, replacement: path.resolve(__dirname, 'wii-u-menu/src/assert-shim.ts') },
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-dev-runtime'],
  },
  server: {
    port: 8081,
    strictPort: true,
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {
      ignored: ['**/server/**', '**/platform-server/**', '**/database_json.json', '**/*.sqlite']
    },
    proxy: {
      // Fighting-game network backend (separate, untouched).
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      // Platform server: assets + eShop game payloads (port 8082).
      // Existing client URLs (/local-assets/*, /games/*) are preserved here and
      // rewritten onto the platform server's /platform/assets/* namespace.
      '/local-assets': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/local-assets/, '/platform/assets'),
      },
      '/games': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/games/, '/platform/assets/games'),
      },
      '/platform': {
        target: 'http://localhost:8082',
        changeOrigin: true,
      }
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'mii-creator': path.resolve(__dirname, 'mii-creator/index.html'),
      },
    },
  }
});
