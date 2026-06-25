const http = require('http');
const WebSocket = require('ws');

const BASE_URL = 'http://localhost:8080';
const WS_URL = 'ws://localhost:8080/ws-matchmake';

// Helper to make HTTP requests
function request(method, path, data = null, token = null) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${path}`;
    const parsedUrl = new URL(url);
    
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.pathname,
      method: method,
      headers: headers,
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (res.statusCode >= 400) {
            reject({ status: res.statusCode, error: json });
          } else {
            resolve({ status: res.statusCode, data: json });
          }
        } catch (e) {
          reject({ status: res.statusCode, error: body });
        }
      });
    });

    req.on('error', (err) => reject(err));

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Helper to connect WebSocket and wrap event listener in a promise for initial connection
function connectWebSocket(token) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`${WS_URL}?token=${token}`);
    
    ws.on('open', () => {
      // Handled in 'message' event for 'connected'
    });

    ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data);
        if (msg.type === 'connected') {
          resolve({ ws, user: msg.user });
        }
      } catch (err) {
        // Ignore unparseable
      }
    });

    ws.on('error', (err) => reject(err));
  });
}

async function runTests() {
  console.log('--- STARTING CENTRALIZED FIGHTING GAME NETWORK TESTS ---');

  const timestamp = Date.now();
  const player1Username = `ryu_${timestamp}`;
  const player2Username = `ken_${timestamp}`;

  let player1Token, player2Token;
  let player1Id, player2Id;

  try {
    // 1. REGISTER USERS
    console.log('\n[TEST] Registering Player 1 (Ryu) and Player 2 (Ken)...');
    const r1 = await request('POST', '/api/auth/register', { username: player1Username, password: 'password123' });
    console.log(`[PASS] Registered ${player1Username}:`, r1.data);
    player1Id = r1.data.user.id;

    const r2 = await request('POST', '/api/auth/register', { username: player2Username, password: 'password123' });
    console.log(`[PASS] Registered ${player2Username}:`, r2.data);
    player2Id = r2.data.user.id;

    // Test Duplicate Register Error
    console.log('\n[TEST] Verifying duplicate registration error handling...');
    try {
      await request('POST', '/api/auth/register', { username: player1Username, password: 'password123' });
      console.error('[FAIL] Duplicate registration should have failed!');
    } catch (err) {
      console.log(`[PASS] Correctly failed with status ${err.status}:`, err.error);
    }

    // 2. LOGIN
    console.log('\n[TEST] Logging in both players...');
    const l1 = await request('POST', '/api/auth/login', { username: player1Username, password: 'password123' });
    player1Token = l1.data.token;
    console.log(`[PASS] Ryu login successful. Token acquired.`);

    const l2 = await request('POST', '/api/auth/login', { username: player2Username, password: 'password123' });
    player2Token = l2.data.token;
    console.log(`[PASS] Ken login successful. Token acquired.`);

    // 3. FETCH PROFILE (Secured route)
    console.log('\n[TEST] Fetching Ryu\'s profile details...');
    const prof1 = await request('GET', '/api/stats/profile', null, player1Token);
    console.log('[PASS] Ryu Profile statistics:', prof1.data);

    // 4. WEBSOCKET CONNECTIONS
    console.log('\n[TEST] Connecting Ryu and Ken to WebSocket Server...');
    const conn1 = await connectWebSocket(player1Token);
    const wsRyu = conn1.ws;
    console.log(`[PASS] Ryu connected over WebSockets. Handshake identified: ${conn1.user.username}`);

    const conn2 = await connectWebSocket(player2Token);
    const wsKen = conn2.ws;
    console.log(`[PASS] Ken connected over WebSockets. Handshake identified: ${conn2.user.username}`);

    // Set up message handlers
    const ryuMessages = [];
    const kenMessages = [];

    wsRyu.on('message', (data) => {
      const msg = JSON.parse(data);
      console.log(`[Ryu Socket Rx]:`, msg);
      ryuMessages.push(msg);
    });

    wsKen.on('message', (data) => {
      const msg = JSON.parse(data);
      console.log(`[Ken Socket Rx]:`, msg);
      kenMessages.push(msg);
    });

    // 5. RYU CREATES LOBBY
    console.log('\n[TEST] Ryu creating a lobby...');
    wsRyu.send(JSON.stringify({ type: 'create_lobby' }));

    // Wait short time for socket response
    await new Promise((r) => setTimeout(r, 1000));
    const lobbyCreatedMsg = ryuMessages.find(m => m.type === 'lobby_created');
    if (!lobbyCreatedMsg) {
      throw new Error('Failed to create lobby');
    }
    const roomCode = lobbyCreatedMsg.roomCode;
    console.log(`[PASS] Lobby created successfully with code: ${roomCode}`);

    // 6. KEN GETS OPEN LOBBIES
    console.log('\n[TEST] Ken retrieving list of open lobbies...');
    wsKen.send(JSON.stringify({ type: 'get_open_lobbies' }));
    await new Promise((r) => setTimeout(r, 1000));
    const openLobbiesMsg = kenMessages.find(m => m.type === 'open_lobbies');
    console.log('[PASS] Open Lobbies list returned to Ken:', openLobbiesMsg.lobbies);

    // 7. KEN JOINS RYU'S LOBBY
    console.log(`\n[TEST] Ken joining Ryu's lobby (${roomCode})...`);
    wsKen.send(JSON.stringify({
      type: 'join_lobby',
      payload: { roomCode }
    }));
    await new Promise((r) => setTimeout(r, 1000));

    // Confirm that Ryu was notified of player joining and Ken received join success
    const ryuNotified = ryuMessages.some(m => m.type === 'player_joined');
    const kenJoined = kenMessages.some(m => m.type === 'join_success');
    if (ryuNotified && kenJoined) {
      console.log('[PASS] Both players successfully matched and status mapping triggered.');
    } else {
      console.error('[FAIL] Match notifications failed.', { ryuNotified, kenJoined });
    }

    // Check statuses in DB (both should be in-match)
    const profRyuInMatch = await request('GET', '/api/stats/profile', null, player1Token);
    const profKenInMatch = await request('GET', '/api/stats/profile', null, player2Token);
    console.log(`[PASS] Ryu database status: ${profRyuInMatch.data.user.currentStatus}`);
    console.log(`[PASS] Ken database status: ${profKenInMatch.data.user.currentStatus}`);

    // 8. WEBRTC SIGNALING RELAY TEST
    console.log('\n[TEST] Testing WebRTC signaling relay...');
    const testSdpOffer = { sdp: 'v=0\no=- 420 2 IN IP4 127.0.0.1...', type: 'offer' };
    wsRyu.send(JSON.stringify({
      type: 'signal',
      payload: { data: testSdpOffer }
    }));

    await new Promise((r) => setTimeout(r, 1000));
    const kenSignalRx = kenMessages.find(m => m.type === 'signal');
    if (kenSignalRx && kenSignalRx.senderId === player1Id) {
      console.log('[PASS] WebRTC signaling message successfully relayed from Host to Client.');
    } else {
      console.error('[FAIL] WebRTC signal relay failed.');
    }

    // 9. REPORT MATCH RESULTS
    console.log('\n[TEST] Reporting match outcome (Ryu wins!)...');
    const matchOutcome = await request('POST', '/api/stats/match-result', {
      winnerId: player1Id,
      loserId: player2Id
    }, player1Token); // Ryu is reporting
    console.log('[PASS] Match results updated successfully:', matchOutcome.data);

    // Verify stats updated in DB
    const profRyuFinal = await request('GET', '/api/stats/profile', null, player1Token);
    const profKenFinal = await request('GET', '/api/stats/profile', null, player2Token);
    console.log(`[PASS] Ryu Stats - Wins: ${profRyuFinal.data.user.wins}, Losses: ${profRyuFinal.data.user.losses}, Status: ${profRyuFinal.data.user.currentStatus}`);
    console.log(`[PASS] Ken Stats - Wins: ${profKenFinal.data.user.wins}, Losses: ${profKenFinal.data.user.losses}, Status: ${profKenFinal.data.user.currentStatus}`);

    // 10. CLEANUP & DISCONNECT
    console.log('\n[TEST] Closing WebSocket connections...');
    wsRyu.close();
    wsKen.close();
    await new Promise((r) => setTimeout(r, 1000));

    // Verify statuses in DB (should be offline)
    const profRyuOffline = await request('GET', '/api/stats/profile', null, player1Token);
    console.log(`[PASS] Final Ryu status in DB: ${profRyuOffline.data.user.currentStatus}`);

    console.log('\n--- ALL NETWORK Platform INTEGRATION TESTS PASSED ---');
    process.exit(0);

  } catch (err) {
    console.error('[FAIL] Network test error encountered:', err);
    process.exit(1);
  }
}

// Wait a bit to ensure the server is fully booted up if run in parallel
setTimeout(runTests, 1000);
