const config = require("../config/config");
const { Sequelize, DataTypes } = require('sequelize');

const db = require('../config/database');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    activated: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
});

User.sync();

module.exports = User;