const db = require('./db');
const options = require('./options');
const Sequelize = require('sequelize');

const model = db.define('series', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING
}, options);

console.log('model',model)

module.exports = model;