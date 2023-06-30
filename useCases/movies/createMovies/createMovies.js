const { response, request } = require("../moviesModules");
const { create } = require("../../../repositories/mongo/moviesRepository");

const crearPelicula = async (req = request, res = response) => {
  const response = await create(req.body);

  return res.status(201).json({
    response,
  });
};

module.exports = crearPelicula;
