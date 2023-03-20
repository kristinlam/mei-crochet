const router = require('express').Router();
const {
  models: { Order, OrderPattern },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

module.exports = router;

// GET /api/orders
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

// POST /api/orders
// guest: checkout
router.post('/', async (req, res, next) => {
  try {
    // create Order instance for guest
    const newOrder = await Order.create({
      isFulfilled: true,
      totalCost: req.body.totalCost,
    });

    // create a OrderPattern instance for each pattern purchased
    for (const pattern of req.body.cartItems) {
      await newOrder.addPattern(pattern.id);
    }

    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
});

// PUT /api/orders
// user: when user checks out, find cart thatt has isFulfilled:false and update to true.

// PUT /api/orders/:patternId
// user: when user adds a pattern to cart, findOrCreate cart associated with user that has isFulfilled: false. Add item.
