const db = require('./db');
const options = require('./options');
const Sequelize = require('sequelize');

module.exports = db.define('series', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING
}, options);