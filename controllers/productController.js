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

// Eliminar Poucto Id
exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);

    if (!product) return res.status(400).json('Error al eliminar el Producto.');

    return res.status(200).json('El Producto ha sido eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar Producto
exports.updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const productId = req.params.productId;

    if (!productId)
      return res.status(400).json('No existe Producto con ese Id.');

    const product = await Product.findByIdAndUpdate(productId, body, {
      new: true,
    });

    if (!product)
      return res.status(400).json('Error al actualizar el Producto.');

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener todos los Productos de la DB
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0)
      return res.status(400).json('No se han encontrado Productos.');

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Producto por Id de la DB.
exports.getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product)
      return res.status(400).json('No existe el Producto con ese Id.');

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
