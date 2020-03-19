const config = require("../config/config");
const { Sequelize, DataTypes } = require('sequelize');

const db = require('../config/database');

const Token = db.define('Token', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER
    },
    authToken: {
        type: DataTypes.TEXT
    },
    expirationDateTime: {
        type: DataTypes.BIGINT
    }
});

Token.sync();

module.exports = Token;