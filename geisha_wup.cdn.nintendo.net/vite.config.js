import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { cpSync, existsSync, readFileSync } from 'fs';

// Custom plugin to serve mock API .html files containing XML without HTML parsing
function serveXmlHtmlFilesPlugin() {
  return {
    name: 'serve-xml-html-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Strip query parameters
        const urlPath = req.url.split('?')[0];

        if (urlPath.endsWith('.html')) {
          const filePath = join(process.cwd(), decodeURIComponent(urlPath));
          if (existsSync(filePath)) {
            try {
              // Read a small prefix first or check content
              const content = readFileSync(filePath, 'utf8');
              if (content.trim().startsWith('<?xml')) {
                res.setHeader('Content-Type', 'application/xml; charset=utf-8');
                res.end(content);
                return; // Intercepted and served successfully!
              }
            } catch (err) {
              console.error('Error in XML-HTML middleware:', err);
            }
          }
        }
        next();
      });
    }
  };
}

// Custom plugin to copy static host subdirectories to dist after build
function copyCdnAssetsPlugin() {
  return {
    name: 'copy-cdn-assets',
    closeBundle() {
      const foldersToCopy = [
        'edge.microsoft.com',
        'geisha-wup.cdn.nintendo.net',
        'kanzashi-wup.cdn.nintendo.net',
        'ninja.wup.shop.nintendo.net',
        'samurai-wup.cdn.nintendo.net',
        'www.googletagmanager.com'
      ];

      for (const folder of foldersToCopy) {
        const src = resolve(process.cwd(), folder);
        const dest = resolve(process.cwd(), 'dist', folder);
        if (existsSync(src)) {
          console.log(`Copying ${folder} to dist/${folder}...`);
          cpSync(src, dest, { recursive: true, force: true });
        }
      }

      // Copy favicon.ico to dist if exists
      const faviconSrc = resolve(process.cwd(), 'favicon.ico');
      const faviconDest = resolve(process.cwd(), 'dist', 'favicon.ico');
      if (existsSync(faviconSrc)) {
        console.log('Copying favicon.ico to dist/favicon.ico...');
        cpSync(faviconSrc, faviconDest, { force: true });
      }
    }
  };
}

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html')
      }
    }
  },
  plugins: [
    serveXmlHtmlFilesPlugin(),
    copyCdnAssetsPlugin()
  ],
  server: {
    port: 5173,
    host: true
  }
});
