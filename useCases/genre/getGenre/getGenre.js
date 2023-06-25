const { request, response, Genero } = require("../genreModules");
const obtenerGenero = async (req = request, res = response) => {
  const genero = await Genero.aggregate([
    {
      $lookup: {
        from: "peliculas", //2
        localField: "_id", //referencia al id gel genero, 1 (pelicula)
        foreignField: "genero", //id coincida con el campo de pelicula 2
        as: "peliculaasociada",
      },
    },
    {
      $project: {
        nombre: 1,
        peliculaasociada: { titulo: 1, imagen: 1 },
      },
    },
  ]);

  res.json(genero);
};

module.exports = obtenerGenero;
