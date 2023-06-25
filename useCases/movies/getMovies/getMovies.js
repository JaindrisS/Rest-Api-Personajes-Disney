const { request, response, Pelicula } = require("../moviesModules");

const obtenerPeliculas = async (req = request, res = response) => {
  const pelicula = await Pelicula.find(
    { estado: true },
    { titulo: 1, imagen: 1, fechadecreacion: 1 }
  );

  return res.status(201).json({ pelicula });
};

module.exports = obtenerPeliculas;
