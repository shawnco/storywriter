const db = require('./db');
const options = require('./options');
const Sequelize = require('sequelize');

module.exports = db.define('character', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    story: Sequelize.INTEGER,
    series: Sequelize.INTEGER
}, options);