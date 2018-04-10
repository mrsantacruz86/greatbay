require('dotenv').config();
console.log('Loading Connection Setup...');

exports.config = {
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	port: process.env.PORT,
	database: process.env.DATABASE
};
// connection.connect();

