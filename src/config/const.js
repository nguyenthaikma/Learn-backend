require("dotenv").config();

const { PORT, HOST_NAME, DB_HOST, DB_PORT, DB_PASSWORD, DB_USER, DB_NAME } =
  process.env;

module.exports = {
  PORT,
  HOST_NAME,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USER,
  DB_NAME,
};
