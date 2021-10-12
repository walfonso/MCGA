const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

module.exports = () => {
  router.get('/all', supplierController.getAllSuppliers);

  return router;
};
