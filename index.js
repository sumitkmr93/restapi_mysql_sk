const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3500;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
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

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var routes = require('./api/routes/productsRoutes'); //importing route
routes(app); //register the route
