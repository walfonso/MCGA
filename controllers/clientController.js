const Client = require('../models/client');

// Agregar Cliente
exports.addClient = async (req, res) => {
  try {
    const body = req.body;
    const client = new Client(body);

    if (!client) return res.status(400).json('Error al crear el cliente.');

    await client.save();
    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar Cliente
exports.updateClient = async (req, res) => {
  try {
    const body = req.body;

    if (!body.clientId)
      return res.status(400).json('No existe cliente con ese Id.');

    const client = await Client.findByIdAndUpdate(body.clientId, body, {
      new: true,
    });

    if (!client) return res.status(400).json('Error al actualizar el cliente.');

    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar Cliente
exports.deleteClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findByIdAndDelete(clientId);

    if (!client) return res.status(400).json('Error al eliminar el cliente.');

    return res.status(200).json('El cliente ha sido eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener cliente por id
exports.getClientById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findById(clientId);

    if (!client) return res.status(400).json('No existe cliente con ese Id.');

    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener todos los clientes
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();

    if (clients.length === 0)
      return res.status(400).json('No se han encontrado clientes.');

    return res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
