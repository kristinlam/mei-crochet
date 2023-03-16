const router = require('express').Router();
const {
  models: { Order },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

module.exports = router;

// GET /api/orders
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
});
