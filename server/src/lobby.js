const url = require('url');
const { User } = require('./db');
const { verifyToken } = require('./auth');

// In-memory state
// lobbies: Map<roomCode, { code, host: { socket, userId, username }, client: { socket, userId, username } | null }>
const lobbies = new Map();

// activeConnections: Map<userId, { socket, username }>
const activeConnections = new Map();

// Matchmaking queues for "For Fun" and "For Glory"
const matchmakingQueues = {
  for_fun: [],
  for_glory: []
};

/**
 * Helper to update user status in the database
 */
async function updateUserStatus(userId, status) {
  try {
    await User.update({ currentStatus: status }, { where: { id: userId } });
    console.log(`[DB] Status of User ID ${userId} updated to '${status}'`);
  } catch (error) {
    console.error(`[DB] Failed to update status for User ID ${userId}:`, error);
  }
}

/**
 * Generate a unique 4-letter room code
 */
function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code;
  do {
    code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (lobbies.has(code));
  return code;
}

/**
 * Find lobby by user ID and determine role
 */
function findLobbyByUser(userId) {
  for (const [code, lobby] of lobbies.entries()) {
    if (lobby.host.userId === userId) {
      return { lobby, role: 'host', code };
    }
    if (lobby.client && lobby.client.userId === userId) {
      return { lobby, role: 'client', code };
    }
  }
  return null;
}

/**
 * Safely send a JSON message to a client socket
 */
function sendJSON(socket, data) {
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(data));
  }
}

/**
 * Initialize WebSocket server logic
 */
function initWebSocketServer(wss) {
  console.log('[WS] WebSocket matchmaker manager initialized.');

  wss.on('connection', async (socket, req) => {
    // 1. Authenticate user from query parameter or Sec-WebSocket-Protocol
    const reqUrl = url.parse(req.url, true);
    let token = reqUrl.query.token;

    // Fallback: check sec-websocket-protocol header
    if (!token && req.headers['sec-websocket-protocol']) {
      token = req.headers['sec-websocket-protocol'];
    }

    if (!token) {
      console.log('[WS] Connection rejected: No token provided');
      socket.close(4001, 'Unauthorized: Token required');
      return;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      console.log('[WS] Connection rejected: Invalid or expired token');
      socket.close(4002, 'Unauthorized: Invalid token');
      return;
    }

    const userId = decoded.id;
    const username = decoded.username;

    // Prevent duplicate active connections for the same user
    if (activeConnections.has(userId)) {
      console.log(`[WS] User ${username} (ID: ${userId}) reconnected. Closing old connection.`);
      const oldConn = activeConnections.get(userId);
      oldConn.socket.close(4003, 'Logged in from another device');
      activeConnections.delete(userId);
    }

    // Map connection
    activeConnections.set(userId, { socket, username });
    console.log(`[WS] Player connected: ${username} (ID: ${userId})`);

    // Set player database status to 'lobby' on connection
    await updateUserStatus(userId, 'lobby');

    // Send connection success message
    sendJSON(socket, { type: 'connected', user: { id: userId, username } });

    // 2. Handle incoming WebSocket messages
    socket.on('message', async (messageData) => {
      try {
        const message = JSON.parse(messageData);
        const { type, payload } = message;

        switch (type) {
          case 'create_lobby': {
            // Check if player is already hosting/in a lobby
            const existing = findLobbyByUser(userId);
            if (existing) {
              return sendJSON(socket, { type: 'error', error: `Already in lobby ${existing.code}` });
            }

            const { gameMode } = payload || {};
            const mode = gameMode === 'for_glory' ? 'for_glory' : 'for_fun';

            const roomCode = generateRoomCode();
            lobbies.set(roomCode, {
              code: roomCode,
              host: { socket, userId, username },
              client: null,
              gameMode: mode
            });

            await updateUserStatus(userId, 'lobby');
            console.log(`[WS] Lobby created: Code ${roomCode} by Host ${username} (ID: ${userId}) under mode [${mode}]`);
            sendJSON(socket, { type: 'lobby_created', roomCode, gameMode: mode });
            break;
          }

          case 'find_match': {
            const { gameMode, character } = payload || {};
            const mode = gameMode === 'for_glory' ? 'for_glory' : 'for_fun';

            // Clean existing instances from all queues
            matchmakingQueues.for_fun = matchmakingQueues.for_fun.filter(p => p.userId !== userId);
            matchmakingQueues.for_glory = matchmakingQueues.for_glory.filter(p => p.userId !== userId);

            // Matchmaking process
            if (matchmakingQueues[mode].length > 0) {
              const opponent = matchmakingQueues[mode].shift();

              // Match found! Auto-generate a room
              const roomCode = generateRoomCode();
              lobbies.set(roomCode, {
                code: roomCode,
                host: { socket: opponent.socket, userId: opponent.userId, username: opponent.username, character: opponent.character },
                client: { socket, userId, username, character },
                gameMode: mode,
                isMatchmaking: true
              });

              await updateUserStatus(opponent.userId, 'in-match');
              await updateUserStatus(userId, 'in-match');

              console.log(`[WS] Matchmaking found! Mode: ${mode}, Room Code: ${roomCode}, Players: ${opponent.username} vs. ${username}`);

              // Notify opponent (host)
              sendJSON(opponent.socket, {
                type: 'match_found',
                role: 'host',
                roomCode,
                gameMode: mode,
                opponent: { id: userId, username, character }
              });

              // Notify self (client)
              sendJSON(socket, {
                type: 'match_found',
                role: 'client',
                roomCode,
                gameMode: mode,
                opponent: { id: opponent.userId, username: opponent.username, character: opponent.character }
              });
            } else {
              // Add to queue
              matchmakingQueues[mode].push({ socket, userId, username, character });
              console.log(`[WS] Player ${username} (ID: ${userId}) queued in [${mode}]. Queue length: ${matchmakingQueues[mode].length}`);
              sendJSON(socket, { type: 'searching_match', gameMode: mode });
            }
            break;
          }

          case 'leave_queue': {
            matchmakingQueues.for_fun = matchmakingQueues.for_fun.filter(p => p.userId !== userId);
            matchmakingQueues.for_glory = matchmakingQueues.for_glory.filter(p => p.userId !== userId);
            console.log(`[WS] Player ${username} (ID: ${userId}) left matchmaking queue`);
            sendJSON(socket, { type: 'left_queue' });
            break;
          }

          case 'get_open_lobbies': {
            // Get lobbies that have only 1 player (host) and no client
            const openLobbies = [];
            for (const [code, lobby] of lobbies.entries()) {
              if (!lobby.client) {
                openLobbies.push({
                  roomCode: code,
                  host: {
                    id: lobby.host.userId,
                    username: lobby.host.username,
                  },
                });
              }
            }
            sendJSON(socket, { type: 'open_lobbies', lobbies: openLobbies });
            break;
          }

          case 'join_lobby': {
            const { roomCode } = payload || {};
            if (!roomCode) {
              return sendJSON(socket, { type: 'error', error: 'roomCode is required to join' });
            }

            const formattedCode = roomCode.toUpperCase();
            const lobby = lobbies.get(formattedCode);

            if (!lobby) {
              return sendJSON(socket, { type: 'error', error: `Lobby ${formattedCode} not found` });
            }

            if (lobby.client) {
              return sendJSON(socket, { type: 'error', error: `Lobby ${formattedCode} is full` });
            }

            if (lobby.host.userId === userId) {
              return sendJSON(socket, { type: 'error', error: 'You cannot join your own lobby' });
            }

            // Check if player is already in another lobby
            const existing = findLobbyByUser(userId);
            if (existing) {
              return sendJSON(socket, { type: 'error', error: `Already in lobby ${existing.code}` });
            }

            // Assign client to the lobby
            lobby.client = { socket, userId, username };

            // Set both player statuses in DB to 'in-match'
            await updateUserStatus(lobby.host.userId, 'in-match');
            await updateUserStatus(userId, 'in-match');

            console.log(`[WS] Player ${username} (ID: ${userId}) joined Lobby ${formattedCode} hosted by ${lobby.host.username} (ID: ${lobby.host.userId})`);

            // Notify host that client joined
            sendJSON(lobby.host.socket, {
              type: 'player_joined',
              opponent: {
                id: userId,
                username: username,
              },
            });

            // Confirm join to client
            sendJSON(socket, {
              type: 'join_success',
              roomCode: formattedCode,
              host: {
                id: lobby.host.userId,
                username: lobby.host.username,
              },
            });
            break;
          }

          case 'signal': {
            const { data } = payload || {};
            if (!data) {
              return sendJSON(socket, { type: 'error', error: 'Signal data is required' });
            }

            const userLobbyInfo = findLobbyByUser(userId);
            if (!userLobbyInfo) {
              return sendJSON(socket, { type: 'error', error: 'You are not in an active lobby to signal' });
            }

            const { lobby, role } = userLobbyInfo;

            // Secure signaling: Relay only to the counterpart in the same room
            if (role === 'host') {
              if (lobby.client) {
                sendJSON(lobby.client.socket, {
                  type: 'signal',
                  data,
                  senderId: userId,
                });
              } else {
                sendJSON(socket, { type: 'error', error: 'No client connected in lobby to signal to' });
              }
            } else if (role === 'client') {
              sendJSON(lobby.host.socket, {
                type: 'signal',
                data,
                senderId: userId,
              });
            }
            break;
          }

          default:
            sendJSON(socket, { type: 'error', error: `Unknown message type: ${type}` });
        }
      } catch (error) {
        console.error('[WS] Error processing message:', error);
        sendJSON(socket, { type: 'error', error: 'Invalid message format' });
      }
    });

    // 3. Handle connection close and cleanup
    socket.on('close', async (code, reason) => {
      console.log(`[WS] Connection closed for Player ${username} (ID: ${userId}). Code: ${code}, Reason: ${reason}`);

      // Remove from matchmaking queues
      matchmakingQueues.for_fun = matchmakingQueues.for_fun.filter(p => p.userId !== userId);
      matchmakingQueues.for_glory = matchmakingQueues.for_glory.filter(p => p.userId !== userId);

      // Remove from active connections
      activeConnections.delete(userId);

      // Set user status in DB to offline
      await updateUserStatus(userId, 'offline');

      // Check if user was in a lobby
      const userLobbyInfo = findLobbyByUser(userId);
      if (userLobbyInfo) {
        const { lobby, role, code: roomCode } = userLobbyInfo;

        if (role === 'host') {
          console.log(`[WS] Host ${username} disconnected. Closing Lobby ${roomCode}.`);
          // Host disconnected: Close lobby entirely
          lobbies.delete(roomCode);

          if (lobby.client) {
            // Notify client that host left
            sendJSON(lobby.client.socket, { type: 'opponent_left', reason: 'Host disconnected' });
            // Reset client status back to lobby
            await updateUserStatus(lobby.client.userId, 'lobby');
          }
        } else if (role === 'client') {
          console.log(`[WS] Client ${username} disconnected from Lobby ${roomCode}.`);
          // Client disconnected: Reset lobby client slot
          lobby.client = null;

          // Notify host that client left
          sendJSON(lobby.host.socket, { type: 'opponent_left', reason: 'Opponent disconnected' });
          // Reset host status back to lobby
          await updateUserStatus(lobby.host.userId, 'lobby');
        }
      }
    });

    socket.on('error', (error) => {
      console.error(`[WS] Socket error for ${username} (ID: ${userId}):`, error);
    });
  });
}

module.exports = {
  initWebSocketServer,
};
