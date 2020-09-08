const path = require('path');
const Sequelize = require('sequelize');
const db = new Sequelize('database', 'shawn', 'password', {
    dialect: 'sqlite',
    storage: path.join(__dirname) + '/../db/database.sqlite3'
});

module.exports = db;