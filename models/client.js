const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'El nombre es requerido.',
    trim: true,
  },
  lastName: {
    type: String,
    required: 'El apellido es requerido.',
    trim: true,
  },
  email: {
    type: String,
    required: 'El email es requerido.',
    trim: true,
  },
  phone: {
    type: String,
    required: 'La telefono es requerido.',
    trim: true,
  },
});

module.exports = mongoose.model('client', clientSchema);
