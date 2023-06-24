const { response, request, Pelicula } = require("../moviesModules");
const crearPelicula = async (req = request, res = response) => {
  const { estado, titulo, ...body } = req.body;

  const datos = {
    ...body,
    titulo: titulo.toUpperCase(),
  };

  const peliculas = await new Pelicula(datos);

  await peliculas.save();

  res.json({
    peliculas,
  });
};

module.exports = crearPelicula;
