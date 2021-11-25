const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

module.exports = () => {
  router.post('/', supplierController.addNewSupplier);

  router.get('/all', supplierController.getAllSuppliers);
  router.get('/:supplierId', supplierController.getSupplierById);

  router.put('/:supplierId', supplierController.updateSupplier);

  router.delete('/:supplierId', supplierController.deleteSupplier);

  return router;
};
