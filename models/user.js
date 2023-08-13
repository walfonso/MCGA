const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "El nombre es requerido.",
    trim: true,
  },
  email: {
    type: String,
    required: "El email es requerido.",
    trim: true,
  },
  password: {
    type: String,
    required: "La contraseña es requerida.",
    trim: true,
  },
});

module.exports = mongoose.model("user", userSchema);
