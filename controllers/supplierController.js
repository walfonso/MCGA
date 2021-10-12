const Supplier = require('../models/supplier');


// GET All Suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
  
      const suppliers = await Supplier.find();
      if (suppliers.length === 0)
        return res.status(400).json('No hay registros de proveedores.');
      return res.status(200).json(suppliers);
  
    } catch (error) {
  
      console.error(error);
      return res.status(500).json({ message: error.message });
  
    }
  };
  
  