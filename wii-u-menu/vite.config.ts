import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Serve files from absolute local paths (outside project root) under /local-assets/
const LOCAL_ASSET_ROOTS: Record<string, string> = {
  '/local-assets/audio/': path.resolve('D:/tom9o/audio'),
  '/local-assets/backgroun/': path.resolve('D:/tom9o/backgroun'),
  '/local-assets/mii-animation/': path.resolve('D:/tom9o/Mii animation'),
  '/local-assets/models/': path.resolve('D:/tom9o/wii-u-menu/public/models'),
};

const localAssetsMiddleware = (req: any, res: any, next: () => void) => {
  const url = decodeURIComponent((req.url ?? '').split('?')[0].split('#')[0]);
  for (const [prefix, root] of Object.entries(LOCAL_ASSET_ROOTS)) {
    if (url.startsWith(prefix)) {
      const relPath = url.slice(prefix.length);
      const fullPath = path.join(root, relPath);
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        const ext = path.extname(fullPath).toLowerCase();
        const mime: Record<string, string> = {
          '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.png': 'image/png', '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
          '.dae': 'model/vnd.collada+xml', '.glb': 'model/gltf-binary',
        };
        res.setHeader('Content-Type', mime[ext] ?? 'application/octet-stream');
        res.setHeader('Cache-Control', 'no-cache');
        fs.createReadStream(fullPath).pipe(res);
        return;
      }
    }
  }
  next();
};

const miiCreatorAssetsMiddleware = (req, res, next) => {
  const url = decodeURIComponent(req.url ? req.url.split('?')[0].split('#')[0] : '');
  
  // Try to resolve inside "mii creator/public"
  const possiblePaths = [];
  
  // 1. Exact path inside public/ (if request is like /assets/audio/...)
  possiblePaths.push(path.join(__dirname, 'mii creator/public', url));
  
  // 2. Strip /mii-creator prefix (if request is like /mii-creator/assets/audio/...)
  if (url.startsWith('/mii-creator/')) {
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

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'mii-creator-static-assets',
        configureServer(server) {
          server.middlewares.use(localAssetsMiddleware);
          server.middlewares.use(miiCreatorAssetsMiddleware);
        },
        configurePreviewServer(server) {
          server.middlewares.use(localAssetsMiddleware);
          server.middlewares.use(miiCreatorAssetsMiddleware);
        },
        closeBundle() {
          const srcDir = path.resolve(__dirname, 'mii creator/public');
          const distDir = path.resolve(__dirname, 'dist');
          
          if (fs.existsSync(srcDir)) {
            // Copy entire mii creator/public assets to dist/assets and dist/mii-creator/assets
            const srcAssets = path.join(srcDir, 'assets');
            if (fs.existsSync(srcAssets)) {
              fs.cpSync(srcAssets, path.join(distDir, 'assets'), { recursive: true, force: true });
              fs.cpSync(srcAssets, path.join(distDir, 'mii-creator/assets'), { recursive: true, force: true });
            }
            
            // Copy other public files to dist/ and dist/mii-creator/
            ['cube_map.png', 'api-test.html'].forEach(file => {
              const filePath = path.join(srcDir, file);
              if (fs.existsSync(filePath)) {
                fs.copyFileSync(filePath, path.join(distDir, file));
                
                const miiCreatorDistPath = path.join(distDir, 'mii-creator');
                if (!fs.existsSync(miiCreatorDistPath)) {
                  fs.mkdirSync(miiCreatorDistPath, { recursive: true });
                }
                fs.copyFileSync(filePath, path.join(miiCreatorDistPath, file));
              }
            });
          }
        }
      }
    ],
    assetsInclude: ['**/*.zip'],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, '.') },
        { find: /.*node_modules\/three\/examples\/(.*)/, replacement: 'three/examples/$1' },
        { find: /.*node_modules\/buffer(\/index)?/, replacement: 'buffer' },
        { find: /.*assert\/assert/, replacement: path.resolve(__dirname, 'src/assert-shim.ts') },
      ],
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          'mii-creator': path.resolve(__dirname, 'mii-creator/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    },
  };
});
