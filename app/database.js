const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PGURL, {
  define: {
    timestamps: false
  },
  logging: true
});
module.exports = sequelize;