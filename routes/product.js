const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
module.exports = () => {
  // router.get('/All', productController.getAllProducts);
  // router.get('/category/:category', productController.getProductByCategory);
  // router.get('/:productId', productController.getProductById);
  // router.delete('/:productId', productController.deleteProduct);
  router.post('/', productController.addProduct);
  //router.put('/', productController.updateProduct);
  return router;
};
