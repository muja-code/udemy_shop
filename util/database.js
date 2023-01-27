const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '0000', {
  dialect: 'mysql',
  host: '127.0.0.1',
});

module.exports = sequelize;
