const { Usuarios } = require("../userModules");

// Obtener usuarios guardados es la base de dats
const obtenerUsuarios = async (req = request, res = response) => {
  const usuario = await Usuarios.find({ estado: true });

  res.status(200).json({ usuario });
};

module.exports = {
  obtenerUsuarios,
};
