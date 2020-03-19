const config = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
module.exports = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    logging: false
});