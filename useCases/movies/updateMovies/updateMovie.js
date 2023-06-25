const { request, response, Pelicula } = require("../moviesModules");
const actualizarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, ...body } = req.body;

  if (body.titulo) {
    body.titulo = body.titulo.toUpperCase();
  }

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  body.upDate = resultado;

  const datos = {
    ...body,
  };

  const peliculas = await Pelicula.findByIdAndUpdate(id, datos);

  res.json({
    peliculas,
  });
};

module.exports = actualizarPelicula;
