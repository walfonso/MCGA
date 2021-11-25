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

// GET A Supplier By ID
exports.getSupplierById = async (req, res) => {
  try {
    const { supplierId } = req.params;

    const supplier = await Supplier.findById(supplierId);

    if (!supplier)
      return res
        .status(400)
        .json('No existe registro de un proveedor con ese Id.');

    return res.status(200).json(supplier);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE Or MODIFY A Supplier By ID
exports.updateSupplier = async (req, res) => {
  try {
    const body = req.body;
    const supplierId = req.params.supplierId;
    if (!supplierId)
      return res
        .status(400)
        .json('No existe el Id especificado del proveedor.');

    const supplier = await Supplier.findByIdAndUpdate(supplierId, body, {
      new: true,
    });

    if (!supplier)
      return res.status(400).json('Error actualizando datos del proveedor.');

    return res.status(200).json(supplier);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// DELETE A Supplier By ID
exports.deleteSupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;

    const supplier = await Supplier.findByIdAndDelete(supplierId);

    if (!supplier)
      return res
        .status(400)
        .json('Error eliminando el registro del proveedor.');

    return res
      .status(200)
      .json('Registro de proveedor eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
