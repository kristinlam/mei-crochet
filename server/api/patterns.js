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

// DELETE /api/patterns/:id

// PUT /api/patterns/:id
