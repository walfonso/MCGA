const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const messages = require("../utils/messages");

// Login
exports.login = async (req, res) => {
  try {
    const data = req.body;
    const resp = await User.findOne({ email: data.email });
    if (!resp) {
      return messages.messageGeneral(
        res,
        400,
        false,
        "",
        "El correo no existe"
      );
    }
    const match = await bcrypt.compare(data.password, resp.password);
    if (match) {
      //Crear token
      const token = jwt.sign({ _id: resp.id }, "produccion");
      return messages.messageGeneral(
        res,
        201,
        true,
        { ...resp._doc, password: null, token },
        "Bienvenido"
      );
    }
    messages.messageGeneral(res, 400, false, "", "La contraseña es incorrecta");
  } catch (error) {
    messages.messageGeneral(res, 500, false, "", error.message);
  }
};

//register user
exports.addUser = async (req, res) => {
  try {
    const data = req.body;
    //Verificar correo
    const resp = await User.findOne({ email: data.email });
    if (resp) {
      return messages.messageGeneral(
        res,
        400,
        false,
        "",
        "El correo ya existe"
      );
    }
    // encriptar password
    data.password = await bcrypt.hash(data.password, 10);
    const newUser = await User.create(data);
    const token = jwt.sign({ _id: newUser.id }, "produccion");
    messages.messageGeneral(
      res,
      201,
      true,
      { ...newUser._doc, password: null, token },
      "Usuario creado correctamente"
    );
  } catch (error) {
    return messages.messageGeneral(res, 500, false, "", error.message);
  }
};

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

// Actualizar Usuario
exports.updateUser = async (req, res) => {
  try {
    const body = req.body;
    const userId = req.params.userId;
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
