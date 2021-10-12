const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'El nombre es requerido.',
    trim: true,
  },
  email: {
    type: String,
    required: 'El email es requerido.',
    trim: true,
  },
  phone: {
    type: Number,
    required: 'El telefono es requerido.',
    trim: true,
  },
});

module.exports = mongoose.model('supplier', supplierSchema);
