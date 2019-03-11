//connecting with db.js
var sql = require('./db.js');

//product object constructor
var Product = function(product){
    this.pname = product.pname;
    this.price = product.price;
    this.stock = product.stock;
};

//function to create a new Product by actual sql query
Product.createproduct = function createUser(newproduct, result) {
        sql.query("insert into products set ?", newproduct, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    //console.log(res.insertId);
                    result(null, res);
                }
            });
};
//function to display a new Product by id using actual sql query
Product.getproductById = function createUser(productId, result) {
        sql.query("Select pid,pname,price,stock from products where pid = ? ", productId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};
//function to display all Products by actual sql query
Product.getAllproduct = function getAllproduct(result) {
        sql.query("Select * from products", function (err, res) {

                if(err) {
                    //console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('products : ', res);

                 result(null, res);
                }
            });
};
//function to upadte a Product by id using actual sql query
Product.updateById = function(id, product, result){
  sql.query("UPDATE products SET pname = ?, price = ?, stock = ? WHERE pid = ?", [product.pname,product.price,product.stock, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};
//function to delete a Product by id using actual sql query
Product.remove = function(id, result){
     sql.query("DELETE FROM products WHERE pid = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports= Product;
