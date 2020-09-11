const db = require('./db');
const options = require('./options');
const Sequelize = require('sequelize');

module.exports = db.define('chapter', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    story: Sequelize.INTEGER,
    position: Sequelize.INTEGER
}, options);