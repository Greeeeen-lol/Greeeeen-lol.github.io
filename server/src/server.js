require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { WebSocketServer } = require('ws');

const { initDb } = require('./db');
const routes = require('./routes');
const { initWebSocketServer } = require('./lobby');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable Cross-Origin Resource Sharing
app.use(cors({
  origin: '*', // Allow all origins for dev/ngrok compatibility, adjust for production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[HTTP] ${req.method} ${req.url}`);
  next();
});

// REST API routes
app.use('/api', routes);

// Base route for checkups
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Fighting Game Network central server is running',
    port: PORT,
  });
});

// Create HTTP Server
const server = http.createServer(app);

// Create WebSocket Server integrated on the HTTP server instance with route path separating it from standard Vite dev channel
const wss = new WebSocketServer({ server, path: '/ws-matchmake' });

// Start HTTP and WebSocket server
async function startServer() {
  // 1. Initialize SQLite Database
  await initDb();

  // 2. Initialize WebSocket Matchmaking Logic
  initWebSocketServer(wss);

  // 3. Listen on Port 8080 (as tunnels require)
  server.listen(PORT, () => {
    console.log(`========================================================`);
    console.log(`  Fighting Game Server is listening on PORT: ${PORT}`);
    console.log(`  REST API base: http://localhost:${PORT}/api`);
    console.log(`  WebSocket base: ws://localhost:${PORT}`);
    console.log(`========================================================`);
  });
}

// Handle unexpected errors
process.on('uncaughtException', (err) => {
  console.error('[CRITICAL] Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[CRITICAL] Unhandled Rejection at:', promise, 'reason:', reason);
});

// Graceful shutdown
const gracefulShutdown = () => {
  console.log('[SHUTDOWN] Terminating server, closing connections...');
  server.close(() => {
    console.log('[SHUTDOWN] HTTP/WebSocket server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

startServer();
