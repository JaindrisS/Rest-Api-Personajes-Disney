const getMovie = require("../../../repositories/mongo/searchRepository");
const { response, request } = require("../searchModules");

const buscarPeliculas = async (termino = "", res = response, req = request) => {
  const response = await getMovie(termino);

  return res.status(response.status).json(response.msg);
};

module.exports = buscarPeliculas;
