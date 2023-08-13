const User = require("../models/user");

// Obtener todos los Usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0)
      return res.status(400).json("No se han encontrado Usuarios.");

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Agregar Usuario
exports.addUser = async (req, res) => {
  try {
    const body = req.body;
    const user = new User(body);
    if (!user) return res.status(400).json("Error al crear el Usuario.");
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar Usuario
exports.updateUser = async (req, res) => {
  try {
    const body = req.body;
    const usertId = req.params.userId;
    if (!userId) return res.status(400).json("No existe Usuario con ese Id.");
    const user = await User.findByIdAndUpdate(userId, body, {
      new: true,
    });
    if (!user) return res.status(400).json("Error al actualizar el Usuario.");
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar Usuario
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) return res.status(400).json("Error al eliminar el Usuario.");
    return res.status(200).json("El Usuario ha sido eliminado correctamente.");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Usuario por id
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(400).json("No existe Usuario con ese Id.");
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
