var product = require('../models/productsModels.js');

exports.list_all_product = function(req, res) {
  product.getAllproduct(function(err, product) {

    //console.log('controller')
    if (err)
      res.send(err);
      //console.log('res', product);
    res.send(product);
  });
};

exports.create_a_product = function(req, res) {
  var new_product = new product(req.body);  
  product.createproduct(new_product, function(err, product) {
    
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.read_a_product = function(req, res) {
  product.getproductById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  product.updateById(req.params.productId, new product(req.body), function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
  product.remove( req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};