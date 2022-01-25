const Sequelize = require('sequelize');
const sequelize = require('../database');

class Card extends Sequelize.Model {}

Card.init({
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  position: Sequelize.NUMBER
}, {
  sequelize,
  tableName: 'card'
});

module.exports = Card;