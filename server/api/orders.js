const router = require('express').Router();
const {
  models: { Order, User },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

module.exports = router;

// User routes
// GET /api/orders/
// Get all orders associated with user
router.get('/', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const orders = await Order.findAll({
      where: {
        userId: user.id,
      },
    });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

// PUT /api/orders/
// user: when user checks out, find cart that has isFulfilled:false and update to true.
// add authorization to header

// PUT /api/orders/:patternId
// user: when user adds a pattern to cart, findOrCreate cart associated with user that has isFulfilled: false. Add item.
// add authorization to header

// Guest route
// POST /api/orders
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
