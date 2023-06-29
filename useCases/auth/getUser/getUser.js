const { get } = require("../../../repositories/mongo/authRepository");

// Obtener usuarios guardados es la base de dats
const obtenerUsuarios = async (req = request, res = response) => {
  const response = await get();
  res.status(200).json({ response });
};

module.exports = {
  obtenerUsuarios,
};
