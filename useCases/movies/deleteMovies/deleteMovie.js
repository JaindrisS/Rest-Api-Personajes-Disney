const { deleteMovie } = require("../../../repositories/mongo/moviesRepository");
const { request, response } = require("../moviesModules");
const borrarPelicula = async (req = request, res = response) => {
  const { id } = req.params;

  const response = await deleteMovie(id);

  res.status(200).json({
    msg: "Pelicula Borrada",
    response,
  });
};

module.exports = borrarPelicula;
