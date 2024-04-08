const mysql = require("mysql2/promise");
const { DB_HOST, DB_USER, DB_NAME, DB_PORT, DB_PASSWORD } = require("./const");

const connection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  port: DB_PORT,
  password: DB_PASSWORD,

  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = connection;
