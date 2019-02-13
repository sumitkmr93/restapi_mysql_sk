var sql = require('./db.js');

//product object constructor
var Product = function(product){
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
};
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
Product.getproductById = function createUser(productId, result) {
        sql.query("Select name,price,stock from products where id = ? ", productId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
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
Product.updateById = function(id, product, result){
  sql.query("UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?", [product.name,product.price,product.stock, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Product.remove = function(id, result){
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

module.exports= Product;