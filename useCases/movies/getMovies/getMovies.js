const { request, response } = require("../moviesModules");
const { getAll } = require("../../../repositories/mongo/moviesRepository");

const obtenerPeliculas = async (req = request, res = response) => {
  const pelicula = await getAll();

  return res.status(201).json({ pelicula });
};

module.exports = obtenerPeliculas;
