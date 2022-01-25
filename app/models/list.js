const Sequelize = require('sequelize');
const sequelize = require('../database');

class List extends Sequelize.Model {}

List.init({
  name: Sequelize.STRING,
  position: Sequelize.NUMBER
}, {
  sequelize,
  tableName: 'list'
});

module.exports = List;