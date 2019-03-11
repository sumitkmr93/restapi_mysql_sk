var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'demomysqldevops.mysql.database.azure.com',
    user     : 'sumit@demomysqldevops',
    password : 'Kiran@4693',
    database : 'productsdb',
    ssl:true
    // host     : 'localhost',
    // user     : 'root',
    // password : 'c0nygre',
    // database : 'productsdb'
});


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;





