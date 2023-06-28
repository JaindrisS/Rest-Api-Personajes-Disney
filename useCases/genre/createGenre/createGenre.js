const { create } = require("../../../repositories/mongo/genreRepository");
const { request, response, Genero } = require("../genreModules");

const crearGenero = async (req = request, res = response) => {
  const { ...body } = req.body;

  const response = await create(body);

  return res.status(201).json({
    response,
  });
};

module.exports = crearGenero;
