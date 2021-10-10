const Product = require('../models/product');
// Agregar Producto
exports.addProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = new Product(body);

    if (!product) return res.status(400).json('Error al crear el Producto.');

    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
