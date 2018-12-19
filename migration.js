var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'abc123',
  database : 'payment'
});

migration.init(connection, __dirname + '/migrations');