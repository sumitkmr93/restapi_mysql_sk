var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'myfirstdbinstance.cjg6seskxovx.us-east-2.rds.amazonaws.com',
    user     : 'root',
    password : 'password',
    database : 'ProductsDB'
    // host     : 'localhost',
    // user     : 'root',
    // password : 'c0nygre',
    // database : 'productsdb'
});


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;





