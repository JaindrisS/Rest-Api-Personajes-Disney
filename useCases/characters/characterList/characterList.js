const { getAll } = require("../../../repositories/mongo/characterRepository");
const { request, response } = require("../characterModules");

const listadoDePersonajes = async (req = request, res = response) => {
  const response = await getAll();

  return res.status(200).json({ response });
};

module.exports = listadoDePersonajes;
