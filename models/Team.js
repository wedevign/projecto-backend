const config = require("../config/config");
const { Sequelize, DataTypes } = require('sequelize');

const db = require('../config/database');

const Team = db.define('Team', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    ownerId: {
        type: DataTypes.INTEGER
    }
});

Team.sync();

module.exports = Team;