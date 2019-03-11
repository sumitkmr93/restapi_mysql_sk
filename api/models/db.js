var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'azuredevopsdemodb.mysql.database.azure.com',
    user     : 'sumit@azuredevopsdemodb',
    password : 'Kiran@4693',
    database : 'ProductsDB',
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





