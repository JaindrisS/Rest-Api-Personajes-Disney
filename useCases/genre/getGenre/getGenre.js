const { getAll } = require("../../../repositories/mongo/genreRepository");
const { request, response, Genero } = require("../genreModules");
const obtenerGenero = async (req = request, res = response) => {
  const response = await getAll();

  return res.status(200).json(response);
};

module.exports = obtenerGenero;
