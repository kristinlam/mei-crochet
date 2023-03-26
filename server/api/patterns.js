const router = require('express').Router();
const {
  models: { Pattern },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

module.exports = router;

// GET /api/patterns
router.get('/', async (req, res, next) => {
  try {
    const patterns = await Pattern.findAll();
    res.status(200).json(patterns);
  } catch (err) {
    next(err);
  }
});

// GET /api/patterns/:id
router.get('/:id', async (req, res, next) => {
  try {
    const pattern = await Pattern.findByPk(req.params.id);
    res.status(200).json(pattern);
  } catch (err) {
    next(err);
  }
});

// Admin Routes
// POST /api/patterns/
router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    res.status(201).json(await Pattern.create(req.body));
  } catch (err) {
    next(err);
  }
});

// PUT /api/patterns/:id
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const pattern = await Pattern.findByPk(req.params.id);
    res.status(200).json(await pattern.update(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/patterns/:id
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const pattern = await Pattern.findByPk(req.params.id);
    await pattern.destroy();
    res.status(200).json(pattern);
  } catch (err) {
    next(err);
  }
});
