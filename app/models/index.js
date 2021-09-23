const config = require("../config/db.config.js");
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

async function initialize() {
  const { host, PORT, user, password, database, port } = config;
  const connection = await mysql.createConnection({ host, PORT, user, password, port });
  const sequelize = new Sequelize(database, user, password,{ dialect: 'mysql', port });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  db.userSurvey = require("./userSurvey.model.js")(sequelize, Sequelize);
  db.user = require("./user.model.js")(sequelize, Sequelize);
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
  await sequelize.sync();
}

initialize();

module.exports = db = {};

