const global = {};
const process = { env: { NODE_DEBUG: false } };

// Serverless Mock API Fetch Interceptor
(function() {
  const originalFetch = window.fetch;
  
  function extractNickname(miiData) {
    if (typeof miiData !== 'string') return null;
    try {
      const binaryString = atob(miiData);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      let offset = -1;
      let isBigEndian = false;

      if (len >= 122 && len <= 128) {
        offset = 40;
        isBigEndian = false;
      } else if ((len >= 92 && len <= 96) || (len >= 104 && len <= 108) || len === 114) {
        offset = 26;
        isBigEndian = false;
      } else if (len === 74 || len === 76) {
        offset = 2;
        isBigEndian = true;
      } else if (len === 46 || len === 47) {
        return "Mii";
      }

      if (offset !== -1 && len >= offset + 20) {
        let nickname = "";
        for (let i = 0; i < 10; i++) {
          const byteIndex = offset + i * 2;
          let codeUnit;
          if (isBigEndian) {
            codeUnit = (bytes[byteIndex] << 8) | bytes[byteIndex + 1];
          } else {
            codeUnit = bytes[byteIndex] | (bytes[byteIndex + 1] << 8);
          }
          if (codeUnit === 0) break;
          nickname += String.fromCharCode(codeUnit);
        }
        nickname = nickname.trim();
        if (nickname.length > 0) return nickname;
      }
    } catch (e) {
      console.error("Error extracting Mii nickname in mock-api:", e);
    }
    return null;
  }

  async function getLibrary() {
    let lib = localStorage.getItem('mii_library');
    if (!lib) {
      try {
        const res = await originalFetch('/library.json');
        if (res.ok) {
          const defaultLib = await res.json();
          defaultLib.forEach((item, idx) => {
            if (!item.id) item.id = 'default_' + idx;
            if (!item.nickname) item.nickname = extractNickname(item.data) || 'Default';
          });
          localStorage.setItem('mii_library', JSON.stringify(defaultLib));
          return defaultLib;
        }
      } catch (e) {
        console.error('Failed to load default library:', e);
      }
      return [];
    }
    return JSON.parse(lib);
  }

  function saveLibrary(lib) {
    localStorage.setItem('mii_library', JSON.stringify(lib));
  }

  window.fetch = async function(resource, options) {
    const urlStr = typeof resource === 'string' ? resource : (resource.url || '');
    let url;
    try {
      url = new URL(urlStr, window.location.href);
    } catch(e) {
      return originalFetch.apply(this, arguments);
    }

    const pathname = url.pathname;

    // Map FFLResHigh.dat request path
    if (pathname === '/FFLResHigh.dat') {
      return originalFetch('/assets/models/FFLResHigh.dat', options);
    }

    // Handle missing language files gracefully
    if (pathname.startsWith('/dist/lang/') && pathname.endsWith('.json')) {
      try {
        const response = await originalFetch(resource, options);
        if (response.ok) return response;
      } catch (e) {}
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Intercept API routes
    if (pathname.startsWith('/api/')) {
      const method = (options && options.method || 'GET').toUpperCase();
      let bodyObj = {};
      if (options && options.body) {
        try {
          bodyObj = JSON.parse(options.body);
        } catch (e) {}
      }

      const makeResponse = (data, status = 200) => {
        return new Response(JSON.stringify(data), {
          status: status,
          headers: { 'Content-Type': 'application/json' }
        });
      };

      // 1. Forward real account and stats routes to the server
      const serverRoutes = [
        '/api/auth/register',
        '/api/auth/login',
        '/api/stats/profile',
        '/api/stats/mii',
        '/api/stats/purchase',
        '/api/stats/balance',
        '/api/stats/change-password'
      ];
      if (serverRoutes.includes(pathname)) {
        try {
          const token = localStorage.getItem('authToken');
          const headers = { 'Content-Type': 'application/json' };
          if (token) {
            headers['Authorization'] = 'Bearer ' + token;
          }
          
          const fetchOptions = {
            method: method,
            headers: headers
          };
          if (method !== 'GET' && method !== 'HEAD' && options && options.body) {
            fetchOptions.body = options.body;
          }
          
          const response = await originalFetch('http://localhost:8080' + pathname, fetchOptions);
          const responseText = await response.text();
          
          // If login was successful, save the token locally
          if (response.ok) {
            try {
              const respData = JSON.parse(responseText);
              if (pathname === '/api/auth/login' && respData.token) {
                localStorage.setItem('authToken', respData.token);
              }
            } catch(e) {}
          }
          
          return new Response(responseText, {
            status: response.status,
            statusText: response.statusText,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error) {
          console.error("Mock-API proxy error for " + pathname + ":", error);
          return new Response(JSON.stringify({ error: "Server connection failed" }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // GET /api/session
      if (pathname === '/api/session' && method === 'GET') {
        return makeResponse({ status: 'ok' });
      }

      // GET /api/library
      if (pathname === '/api/library' && method === 'GET') {
        const lib = await getLibrary();
        return makeResponse(lib);
      }

      // PUT /api/library
      if (pathname === '/api/library' && method === 'PUT') {
        const lib = await getLibrary();
        const miiData = bodyObj.data;
        let miiObj = {};
        const extractedName = extractNickname(miiData);

        if (typeof miiData === 'string') {
          miiObj = {
            nickname: extractedName || 'Imported',
            creator: '',
            ffsd: '',
            data: miiData,
            studio: ''
          };
        } else if (miiData && typeof miiData === 'object') {
          miiObj = {
            nickname: miiData.nickname || extractedName || 'Imported',
            creator: miiData.creator || '',
            ffsd: miiData.ffsd || '',
            data: miiData.data || '',
            studio: miiData.studio || ''
          };
        } else {
          miiObj = {
            nickname: bodyObj.nickname || extractedName || 'Imported',
            creator: bodyObj.creator || '',
            ffsd: bodyObj.ffsd || '',
            data: bodyObj.data || '',
            studio: bodyObj.studio || ''
          };
        }

        // Check if this Mii is already in the library to avoid duplicates
        let existingIndex = lib.findIndex(m => m.data === miiObj.data || (miiObj.ffsd && m.ffsd === miiObj.ffsd));
        if (existingIndex !== -1) {
          miiObj.id = lib[existingIndex].id;
          lib[existingIndex] = miiObj;
        } else {
          miiObj.id = 'imported_' + Date.now();
          lib.push(miiObj);
        }

        saveLibrary(lib);
        return makeResponse(miiObj);
      }

      // PATCH /api/library/:id
      if (pathname.startsWith('/api/library/') && method === 'PATCH') {
        const id = pathname.substring('/api/library/'.length);
        const lib = await getLibrary();
        const miiIndex = lib.findIndex(m => m.id === id);
        if (miiIndex === -1) {
          return new Response('Mii not found', { status: 404 });
        }

        const updateData = bodyObj.data;
        if (typeof updateData === 'string') {
          lib[miiIndex].data = updateData;
        } else if (updateData && typeof updateData === 'object') {
          Object.assign(lib[miiIndex], updateData);
        } else {
          Object.assign(lib[miiIndex], bodyObj);
        }

        saveLibrary(lib);
        return makeResponse(lib[miiIndex]);
      }

      // DELETE /api/library (bulk)
      if (pathname === '/api/library' && method === 'DELETE') {
        const ids = bodyObj.data;
        if (Array.isArray(ids)) {
          let lib = await getLibrary();
          lib = lib.filter(m => !ids.includes(m.id));
          saveLibrary(lib);
        }
        return makeResponse({ status: 'ok' });
      }

      // DELETE /api/library/:id
      if (pathname.startsWith('/api/library/') && method === 'DELETE') {
        const id = pathname.substring('/api/library/'.length);
        let lib = await getLibrary();
        lib = lib.filter(m => m.id !== id);
        saveLibrary(lib);
        return makeResponse({ status: 'ok' });
      }

      // PATCH /api/library_sort
      if (pathname === '/api/library_sort' && method === 'PATCH') {
        let sortOrder = bodyObj.sort;
        if (typeof sortOrder === 'string') {
          try { sortOrder = JSON.parse(sortOrder); } catch(e) {}
        }
        if (Array.isArray(sortOrder)) {
          const lib = await getLibrary();
          lib.sort((a, b) => {
            const idxA = sortOrder.indexOf(a.id);
            const idxB = sortOrder.indexOf(b.id);
            if (idxA === -1 && idxB === -1) return 0;
            if (idxA === -1) return 1;
            if (idxB === -1) return -1;
            return idxA - idxB;
          });
          saveLibrary(lib);
        }
        return makeResponse({ status: 'ok' });
      }

      // GET /api/personal_mii
      if (pathname === '/api/personal_mii' && method === 'GET') {
        const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const res = await originalFetch('http://localhost:8080/api/stats/profile', {
              headers: { 'Authorization': 'Bearer ' + token }
            });
            if (res.ok) {
              const data = await res.json();
              if (data.user && data.user.mii) {
                return makeResponse(data.user.mii);
              }
            }
          } catch (e) {
            console.error("Failed to fetch Mii from server:", e);
          }
        }
        
        const personalId = localStorage.getItem('mii_personal_id');
        if (personalId) {
          const lib = await getLibrary();
          const mii = lib.find(m => m.id === personalId);
          if (mii) {
            return makeResponse(mii);
          }
        }
        return makeResponse({});
      }

      // POST /api/personal_mii
      if (pathname === '/api/personal_mii' && method === 'POST') {
        const id = bodyObj && bodyObj.id;
        if (id) {
          localStorage.setItem('mii_personal_id', id);
          const token = localStorage.getItem('authToken');
          if (token) {
            try {
              const lib = await getLibrary();
              const miiObj = lib.find(m => m.id === id);
              if (miiObj) {
                await originalFetch('http://localhost:8080/api/stats/mii', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                  },
                  body: JSON.stringify({ mii: miiObj })
                });
              }
            } catch (e) {
              console.error("Failed to sync Mii to server:", e);
            }
          }
        }
        return makeResponse({ status: 'ok' });
      }

      // POST /api/archive
      if (pathname === '/api/archive' && method === 'POST') {
        const { nickname, creator, ffsd, data, studio } = bodyObj;
        const lib = await getLibrary();
        
        let existingIndex = lib.findIndex(m => m.data === data || (ffsd && m.ffsd === ffsd));
        
        const miiObj = {
          nickname: nickname || extractNickname(data) || 'Mii',
          creator: creator || '',
          ffsd: ffsd || '',
          data: data || '',
          studio: studio || ''
        };

        if (existingIndex !== -1) {
          miiObj.id = lib[existingIndex].id;
          lib[existingIndex] = miiObj;
        } else {
          miiObj.id = 'archived_' + Date.now();
          lib.push(miiObj);
        }
        
        saveLibrary(lib);
        return makeResponse(miiObj);
      }
    }

    return originalFetch.apply(this, arguments);
  };
})();
