const config = require("../config/config");
const { Sequelize, DataTypes } = require('sequelize');

const db = require('../config/database');

const Project = db.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    ownerId: {
        type: DataTypes.INTEGER
    },
    members: {
        type: DataTypes.ARRAY
    }
});

User.sync();

module.exports = Project;