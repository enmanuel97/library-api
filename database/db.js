const mysql 	= require('mysql2/promise');
const { Sequelize, Op, QueryTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

module.exports = db = {};

initialize();

async function initialize() {

	const { host, port, username, password, database } = config;
  
    const connection = await mysql.createConnection({ host, port, user: username, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(database, username, password, { 
        host: host,
        dialect: 'mysql',
    });
    
    db.Op 			= Op;
    db.QueryTypes 	= QueryTypes;
    db.query 		= sequelize.query.bind(sequelize);
    db.Books 		= require('../models/bookModel')(sequelize);
    db.Pages 		= require('../models/pagesModel')(sequelize);

    await sequelize.sync({ alter: true });
}