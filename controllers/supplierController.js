const Supplier = require('../models/supplier');

// Create A New Supplier
exports.addNewSupplier = async (req, res) => {
  try {
    const body = req.body;
    const supplier = new Supplier(body);

    if (!supplier)
      return res.status(400).json('Error creando el registro de caldera.');

    await supplier.save();
    return res.status(200).json(supplier);
  } catch (error) {
    console.error(error); //error
    return res.status(500).json({ message: error.message });
  }
};

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
