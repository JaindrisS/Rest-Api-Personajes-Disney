const { request, response, Pelicula } = require("../moviesModules");
const borrarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const Peliculas = await Pelicula.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({
    msg: "Pelicula Borrada",
    Peliculas,
  });
};

module.exports = borrarPelicula;
