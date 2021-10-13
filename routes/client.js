const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
module.exports = () => {
  router.get('/all', clientController.getAllClients);
  router.get('/:clientId', clientController.getClientById);
  router.delete('/:clientId', clientController.deleteClient);
  router.post('/', clientController.addClient);
  router.put('/', clientController.updateClient);
  return router;
};
