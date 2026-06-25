const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { User, sequelize } = require('./db');
const { hashPassword, comparePassword, generateToken, authenticateToken } = require('./auth');

/**
 * POST /api/auth/register
 * Registers a new user. Hashes the password and initializes stats.
 */
router.post('/auth/register', async (req, res) => {
  try {
    const { username, password, mii } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    if (username.length < 3 || username.length > 20) {
      return res.status(400).json({ error: 'Username must be between 3 and 20 characters long' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const passwordHash = await hashPassword(password);

    const newUser = await User.create({
      username,
      passwordHash,
      mii: mii || null,
      purchasedTitles: [],
      balance: 0,
    });

    console.log(`[AUTH] Registered new user: ${username} (ID: ${newUser.id})`);

    // Return username and id, do not return passwordHash
    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        mii: newUser.mii,
        purchasedTitles: newUser.purchasedTitles,
        balance: newUser.balance,
      },
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Username already exists' });
    }
    console.error('[AUTH] Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/auth/login
 * Authenticates user, issues JWT.
 */
router.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const isValidPassword = await comparePassword(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const token = generateToken(user);
    console.log(`[AUTH] User logged in: ${username} (ID: ${user.id})`);

    return res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        wins: user.wins,
        losses: user.losses,
        forGloryWins: user.forGloryWins || 0,
        forFunWins: user.forFunWins || 0,
        currentStatus: user.currentStatus,
        mii: user.mii,
        purchasedTitles: user.purchasedTitles,
        balance: user.balance,
      },
    });
  } catch (error) {
    console.error('[AUTH] Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/stats/profile
 * Secures with JWT. Returns profile data for the authenticated user.
 */
router.get('/stats/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user });
  } catch (error) {
    console.error('[STATS] Fetch profile error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/stats/match-result
 * Secures with JWT. Increments wins and losses securely.
 * Request body: { winnerId, loserId }
 */
router.post('/stats/match-result', authenticateToken, async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { winnerId, loserId, gameMode } = req.body;

    if (!winnerId || !loserId) {
      await transaction.rollback();
      return res.status(400).json({ error: 'winnerId and loserId are required' });
    }

    if (parseInt(winnerId) === parseInt(loserId)) {
      await transaction.rollback();
      return res.status(400).json({ error: 'Winner and loser must be different players' });
    }

    // Security check: The reporting player must be either the winner or the loser
    const requesterId = req.user.id;
    if (requesterId !== parseInt(winnerId) && requesterId !== parseInt(loserId)) {
      await transaction.rollback();
      return res.status(403).json({ error: 'You are not authorized to report results for this match' });
    }

    const winner = await User.findByPk(winnerId, { transaction });
    const loser = await User.findByPk(loserId, { transaction });

    if (!winner || !loser) {
      await transaction.rollback();
      return res.status(404).json({ error: 'One or both players do not exist' });
    }

    // Update stats
    winner.wins += 1;
    loser.losses += 1;

    if (gameMode === 'for_glory') {
      winner.forGloryWins = (winner.forGloryWins || 0) + 1;
    } else if (gameMode === 'for_fun') {
      winner.forFunWins = (winner.forFunWins || 0) + 1;
    }

    // Reset status back to lobby (or keep in-match, let's set back to lobby once match completes)
    winner.currentStatus = 'lobby';
    loser.currentStatus = 'lobby';

    await winner.save({ transaction });
    await loser.save({ transaction });

    await transaction.commit();

    console.log(`[STATS] Match outcome reported by User ${requesterId}: Winner ${winner.username} (Wins: ${winner.wins}, Glory: ${winner.forGloryWins || 0}, Fun: ${winner.forFunWins || 0}), Loser ${loser.username} (Losses: ${loser.losses})`);

    return res.json({
      message: 'Match results recorded successfully',
      winner: {
        id: winner.id,
        username: winner.username,
        wins: winner.wins,
        forGloryWins: winner.forGloryWins || 0,
        forFunWins: winner.forFunWins || 0,
      },
      loser: {
        id: loser.id,
        username: loser.username,
        losses: loser.losses,
      },
    });
  } catch (error) {
    await transaction.rollback();
    console.error('[STATS] Report match result error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/stats/mii
 * Secures with JWT. Saves/updates the Mii data for the authenticated user.
 */
router.post('/stats/mii', authenticateToken, async (req, res) => {
  try {
    const { mii } = req.body;
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.mii = mii || null;
    await user.save();
    console.log(`[STATS] Updated Mii data for user: ${user.username} (ID: ${user.id})`);
    return res.json({
      message: 'Mii updated successfully',
      mii: user.mii,
    });
  } catch (error) {
    console.error('[STATS] Update Mii error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/stats/mii', authenticateToken, async (req, res) => {
  try {
    const { mii } = req.body;
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.mii = mii || null;
    await user.save();
    return res.json({
      message: 'Mii updated successfully',
      mii: user.mii,
    });
  } catch (error) {
    console.error('[STATS] Update Mii error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/stats/purchase
 * Secures with JWT. Saves/records a title purchase for the authenticated user.
 */
router.post('/stats/purchase', authenticateToken, async (req, res) => {
  try {
    const { titleId } = req.body;
    if (!titleId) {
      return res.status(400).json({ error: 'titleId is required' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const tidString = String(titleId);
    if (!user.purchasedTitles.includes(tidString)) {
      user.purchasedTitles.push(tidString);
      await user.save();
      console.log(`[STATS] User ${user.username} (ID: ${user.id}) purchased Title ID: ${tidString}`);
    }
    
    return res.json({
      message: 'Purchase recorded successfully',
      purchasedTitles: user.purchasedTitles,
    });
  } catch (error) {
    console.error('[STATS] Purchase title error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/stats/purchase', authenticateToken, async (req, res) => {
  try {
    const { titleId } = req.body;
    if (!titleId) {
      return res.status(400).json({ error: 'titleId is required' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const tidString = String(titleId);
    if (!user.purchasedTitles.includes(tidString)) {
      user.purchasedTitles.push(tidString);
      await user.save();
    }
    
    return res.json({
      message: 'Purchase recorded successfully',
      purchasedTitles: user.purchasedTitles,
    });
  } catch (error) {
    console.error('[STATS] Purchase title error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/stats/balance
 * Secures with JWT. Sets/adds to the eShop balance for the authenticated user.
 */
router.post('/stats/balance', authenticateToken, async (req, res) => {
  try {
    const { amount } = req.body;
    if (amount === undefined || typeof amount !== 'number') {
      return res.status(400).json({ error: 'amount must be a number' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.balance = amount;
    await user.save();
    console.log(`[STATS] Updated balance for user: ${user.username} (ID: ${user.id}) to ¥${user.balance}`);
    return res.json({
      message: 'Balance updated successfully',
      balance: user.balance,
    });
  } catch (error) {
    console.error('[STATS] Update balance error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/stats/balance', authenticateToken, async (req, res) => {
  try {
    const { amount } = req.body;
    if (amount === undefined || typeof amount !== 'number') {
      return res.status(400).json({ error: 'amount must be a number' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.balance = amount;
    await user.save();
    return res.json({
      message: 'Balance updated successfully',
      balance: user.balance,
    });
  } catch (error) {
    console.error('[STATS] Update balance error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/stats/change-password
 * Secures with JWT. Updates the user's password.
 */
router.post('/stats/change-password', authenticateToken, async (req, res) => {
  try {
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.passwordHash = await hashPassword(password);
    await user.save();
    console.log(`[AUTH] Updated password for user: ${user.username} (ID: ${user.id})`);
    return res.json({
      message: 'Password updated successfully'
    });
  } catch (error) {
    console.error('[AUTH] Change password error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/eshop/download
 * Downloads a game from the eShop by Title ID.
 */
router.post('/eshop/download', async (req, res) => {
  try {
    const { titleId } = req.body;
    
    if (!titleId) {
      return res.status(400).json({ error: 'titleId is required' });
    }

    if (titleId === '20010000020451') {
      const sourceFile = path.resolve(__dirname, '../../eshop apps/EaglercraftX_1.8_WASM-GC_Offline_Download.html');
      // Ensure the games directory exists
      const gamesDir = path.resolve(__dirname, '../../wii-u-menu/public/games');
      if (!fs.existsSync(gamesDir)) {
        fs.mkdirSync(gamesDir, { recursive: true });
      }

      const destFile = path.join(gamesDir, '20010000020451.html');
      
      // Copy the file physically to the filesystem
      fs.copyFileSync(sourceFile, destFile);
      console.log(`[ESHOP] Downloaded ${titleId} to ${destFile}`);

      return res.json({ message: 'Download successful', titleId });
    } else {
      return res.status(404).json({ error: 'Game not found on eShop server' });
    }
  } catch (error) {
    console.error('[ESHOP] Download error:', error);
    return res.status(500).json({ error: 'Failed to download game' });
  }
});

/**
 * GET /api/system/installed_games
 * Returns a list of installed games based on files in the games directory.
 */
router.get('/system/installed_games', async (req, res) => {
  try {
    const gamesDir = path.resolve(__dirname, '../../wii-u-menu/public/games');
    if (!fs.existsSync(gamesDir)) {
      return res.json({ installedGames: [] });
    }

    const files = fs.readdirSync(gamesDir);
    const installedGames = files
      .filter(file => file.endsWith('.html'))
      .map(file => {
        const titleId = file.replace('.html', '');
        return { titleId, path: `/games/${file}` }; // Vite serves public directory at the root
      });

    return res.json({ installedGames });
  } catch (error) {
    console.error('[SYSTEM] Fetch installed games error:', error);
    return res.status(500).json({ error: 'Failed to check installed games' });
  }
});

module.exports = router;
