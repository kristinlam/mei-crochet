const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: { isBoolean: true },
  },
  totalCost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    min: 0,
  },
});

module.exports = Order;
