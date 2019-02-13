var Product = require('../model/appModel.js');

exports.list_all_product = function(req, res) {
  Product.getAllProduct(function(err, product) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', product);
    res.send(product);
  });
};



exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);

  //handles null error 
   if(!new_product.product || !new_product.status){

            res.status(400).send({ error:true, message: 'Please provide product/status' });

        }
else{
  
  Product.createProduct(new_product, function(err, product) {
    
    if (err)
      res.send(err);
    res.json(product);
  });
}
};


exports.read_a_product = function(req, res) {
  Product.getProductById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  Product.updateById(req.params.productId, new Product(req.body), function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
  Product.remove( req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};