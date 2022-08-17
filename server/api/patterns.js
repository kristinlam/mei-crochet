const router = require('express').Router();
const {
  models: { Pattern },
} = require('../db');
module.exports = router;

// GET /api/patterns
router.get('/', async (req, res, next) => {
  try {
    const patterns = await Pattern.findAll();
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});

// GET /api/patterns/:id
router.get('/:id', async (req, res, next) => {
  try {
    const pattern = await Pattern.findByPk(req.params.id);
    res.json(pattern);
  } catch (err) {
    next(err);
  }
});

// Admin Routes
// POST /api/patterns/
router.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await Pattern.create(req.body));
  } catch (err) {
    next(err);
  }
});

// PUT /api/patterns/:id
router.put('/:id', async (req, res, next) => {
  try {
    const pattern = await Pattern.findByPk(req.params.id);
    res.json(await pattern.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/patterns/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const pattern = await Pattern.findByPk(req.params.id);
    await pattern.destroy();
    res.json(pattern);
  } catch (err) {
    next(err);
  }
});
