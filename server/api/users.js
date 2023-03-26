const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

module.exports = router;

// Admin Routes
// GET /api/users/
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'isAdmin'],
    });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:id
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/users/:id
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});
