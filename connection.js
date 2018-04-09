var mysql = require('mysql');
console.log('Loading Connection...');

var connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: "greatbay_db"
});
// connection.connect();
module.exports = connection;

