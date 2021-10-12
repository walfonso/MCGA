const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'El nombre es requerido.',
    trim: true,
  },
  price: {
    type: Number,
    required: 'El precio es requerido.',
    trim: true,
  },
  detail: {
    type: String,
    required: 'El detalle es requerido.',
    trim: true,
  },
  category: {
    type: String,
    required: 'La categoría es requerida.',
    trim: true,
  },
});

module.exports = mongoose.model('product', productSchema);
