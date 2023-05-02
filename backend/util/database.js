const mysql = require('mysql2');
//const fs = require('fs');

const config = require('../config/config.json');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
  port: config.port,
  connectTimeout: config.connectTimeout,
  //ssl: {ca:fs.readFileSync("C:/Users/edgar/OneDrive/Escritorio/conn/BaltimoreCyberTrustRoot.crt.pem")}
});

module.exports = pool.promise();
