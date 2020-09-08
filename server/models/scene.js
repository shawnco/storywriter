const db = require('./db');
const options = require('./options');
const Sequelize = require('sequelize');

module.exports = db.define('scene', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.STRING,
    description: Sequelize.STRING,
    story: Sequelize.INTEGER,
    position: Sequelize.INTEGER,
    chapter: Sequelize.INTEGER
}, options);