//connecting with the productsModel file in model folder
var product = require('../models/productsModels.js');

//function to display all products
exports.list_all_product = function(req, res) {
    //calling the function from productsModel.js
  product.getAllproduct(function(err, product) {
    if (err)
      res.send(err);
      //displaying the output in JSON format
    res.send(product);
  });
};

//function for create a new product
exports.create_a_product = function(req, res) {
    //creating new product object for adding
  var new_product = new product(req.body);  
    //calling the function from productsModel.js
  product.createproduct(new_product, function(err, product) {
    if (err)
      res.send(err);
      //displaying the output in JSON format
    res.json(product);
  });
};

//function to display product based on "id"
exports.read_a_product = function(req, res) {
    //calling the function from productsModel.js
  product.getproductById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
      //displaying the output in JSON format
    res.json(product);
  });
};

//function to upadte a product based on "id"
exports.update_a_product = function(req, res) {
    //calling the function from productsModel.js
  product.updateById(req.params.productId, new product(req.body), function(err, product) {
    if (err)
      res.send(err);
      //displaying the output in JSON format
    res.json(product);
  });
};

//function to delete a  product based on "id"
exports.delete_a_product = function(req, res) {
    //calling the function from productsModel.js
  product.remove( req.params.productId, function(err, product) {
    if (err)
      res.send(err);
      //displaying the output in JSON format
    res.json({ message: 'Product successfully deleted' });
  });
};