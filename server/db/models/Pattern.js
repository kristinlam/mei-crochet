const Sequelize = require('sequelize');
const db = require('../db');

const Pattern = db.define('pattern', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  creator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: '/images/pending.jpg',
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    min: 0,
  },
});

module.exports = Pattern;
