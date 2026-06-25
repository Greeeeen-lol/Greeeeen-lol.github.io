const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(process.cwd(), 'database_json.json');

// Memory storage representing SQLite DB rows
let memoryUsers = [];
let nextUserId = 1;

function loadDbFromFile() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        memoryUsers = parsed;
        const maxId = memoryUsers.reduce((max, u) => Math.max(max, u.id || 0), 0);
        nextUserId = maxId + 1;
        console.log(`[DB-MOCK] Loaded ${memoryUsers.length} users from persistent JSON store.`);
      }
    } else {
      console.log('[DB-MOCK] Persistent JSON store not found, starting fresh.');
      saveDbToFile();
    }
  } catch (error) {
    console.error('[DB-MOCK] Error loading database file:', error);
  }
}

function saveDbToFile() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(memoryUsers, null, 2), 'utf-8');
  } catch (error) {
    console.error('[DB-MOCK] Error writing database file:', error);
  }
}

const sequelize = {
  transaction: async () => {
    return {
      commit: async () => {},
      rollback: async () => {},
    };
  },
  authenticate: async () => {
    loadDbFromFile();
  },
  sync: async () => {
    // Already in-sync
  },
};

class User {
  constructor(data) {
    this.id = Number(data.id);
    this.username = data.username;
    this.passwordHash = data.passwordHash;
    this.wins = Number(data.wins || 0);
    this.forGloryWins = Number(data.forGloryWins || 0);
    this.forFunWins = Number(data.forFunWins || 0);
    this.losses = Number(data.losses || 0);
    this.currentStatus = data.currentStatus || 'offline';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.mii = data.mii || null;
    this.purchasedTitles = data.purchasedTitles ? (typeof data.purchasedTitles === 'string' ? JSON.parse(data.purchasedTitles) : data.purchasedTitles) : [];
    this.balance = typeof data.balance === 'number' ? data.balance : Number(data.balance || 0);
  }

  async save(options) {
    const idx = memoryUsers.findIndex(u => u.id === this.id);
    if (idx !== -1) {
      memoryUsers[idx] = {
        id: this.id,
        username: this.username,
        passwordHash: this.passwordHash,
        wins: this.wins,
        forGloryWins: this.forGloryWins,
        forFunWins: this.forFunWins,
        losses: this.losses,
        currentStatus: this.currentStatus,
        createdAt: this.createdAt.toISOString(),
        mii: this.mii,
        purchasedTitles: this.purchasedTitles,
        balance: this.balance,
      };
      saveDbToFile();
    }
    return this;
  }

  static async create(values) {
    const existing = memoryUsers.find(u => u.username.toLowerCase() === values.username.toLowerCase());
    if (existing) {
      const error = new Error('Validation error: Username already exists');
      error.name = 'SequelizeUniqueConstraintError';
      throw error;
    }

    const payload = {
      id: nextUserId++,
      username: values.username,
      passwordHash: values.passwordHash,
      wins: 0,
      forGloryWins: 0,
      forFunWins: 0,
      losses: 0,
      currentStatus: 'offline',
      createdAt: new Date().toISOString(),
      mii: values.mii || null,
      purchasedTitles: values.purchasedTitles || [],
      balance: typeof values.balance === 'number' ? values.balance : 0,
    };

    memoryUsers.push(payload);
    saveDbToFile();
    return new User(payload);
  }

  static async findOne(options) {
    if (!options || !options.where || !options.where.username) return null;
    const found = memoryUsers.find(u => u.username.toLowerCase() === options.where.username.toLowerCase());
    if (!found) return null;
    return new User(found);
  }

  static async findByPk(id, options) {
    const numericId = Number(id);
    const found = memoryUsers.find(u => u.id === numericId);
    if (!found) return null;
    return new User(found);
  }

  static async update(values, options) {
    const targetId = Number(options.where.id);
    let count = 0;
    
    memoryUsers = memoryUsers.map(u => {
      if (u.id === targetId) {
        count++;
        return {
          ...u,
          ...values,
        };
      }
      return u;
    });

    if (count > 0) {
      saveDbToFile();
    }

    return [count];
  }
}

async function initDb() {
  try {
    await sequelize.authenticate();
    console.log('[DB] Custom JSON Persistent database loaded and connected successfully.');
    await sequelize.sync();
    console.log('[DB] Custom DB schemas initialized.');
  } catch (error) {
    console.error('[DB] Unable to initialize custom user DB:', error);
    process.exit(1);
  }
}

module.exports = {
  sequelize,
  User,
  initDb,
};
