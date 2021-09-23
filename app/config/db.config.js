module.exports = {
  host : "localhost",
  user : "root",
  password : "root",
  database : "survey",
  dialect: "mysql",
  port: 3306,
  PORT:8080,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
