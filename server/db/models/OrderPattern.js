const Sequelize = require('sequelize');
const db = require('../db');

const OrderPattern = db.define('order_pattern', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = OrderPattern;
