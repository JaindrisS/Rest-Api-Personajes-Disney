const { details } = require("../../../repositories/mongo/moviesRepository");
const { request, response } = require("../moviesModules");
const detallesPeliculas = async (req = request, res = response) => {
  const response = details;

  return res.status(200).json(response);
};

module.exports = detallesPeliculas;
