const mysql = require("mysql2")
require("dotenv").config({path: "./config.env"})

module.exports = mysql.createConnection({
  "host": process.env.MYSQL_HOST,
  "user": process.env.MYSQL_USER,
  "password": process.env.MYSQL_PASSWORD,
  "database": process.env.MYSQL_DB_NAME
})
