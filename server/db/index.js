const db = require('./db');

const User = require('./models/User');
const Pattern = require('./models/Pattern');
const Order = require('./models/Order');

// associations
User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Pattern, { through: OrderPattern });
Pattern.belongsToMany(Order, { through: OrderPattern });

module.exports = {
  db,
  models: {
    User,
    Pattern,
    Order,
  },
};
