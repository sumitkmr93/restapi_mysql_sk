var sql = require('./db.js');

//product object constructor
var product = function(product){
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
};
product.createproduct = function createUser(newproduct, result) {    
        sql.query("INSERT INTO products list ?", newproduct, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
product.getproductById = function createUser(productId, result) {
        sql.query("Select name from products where id = ? ", productId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
product.getAllproduct = function getAllproduct(result) {
        sql.query("Select * from products", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('products : ', res);  

                 result(null, res);
                }
            });   
};
product.updateById = function(id, product, result){
  sql.query("UPDATE products SET name = ?, price = ?, stock =?, WHERE id = ?", [product.name,product.price,product.stock, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
product.remove = function(id, result){
     sql.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= product;