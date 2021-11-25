const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
module.exports = () => {
  router.get('/all', productController.getAllProducts);
  router.get('/:productId', productController.getProductById);
  router.delete('/:productId', productController.deleteProduct);
  router.post('/', productController.addProduct);
  router.put('/:productId', productController.updateProduct);
  return router;
};
