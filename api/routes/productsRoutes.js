module.exports = function(app) {

var productList = require('../controllers/productsController');
  
    // productList Routes
    app.route('/products')
      .get(productList.list_all_product)
      .post(productList.create_a_product);
     
     app.route('/products/:productId')
       .get(productList.read_a_product)
       .put(productList.update_a_product)
       .delete(productList.delete_a_product);

    // app.get('/',(req,res)=>{
    //     res.sendFile(__dirname+'/listproducts.html');
    //   });
  };