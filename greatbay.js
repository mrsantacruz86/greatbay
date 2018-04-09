const connection = require('./connection');
connection.connect();

connection.query('SELECT itemname FROM greatbay_db.auctions; ', function (error, results, fields) {
  if (error) throw error;
  console.log('The first item is: ', results[0]);
});
 
connection.end();