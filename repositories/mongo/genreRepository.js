const Genero = require("../../models/genero");

const getAll = async () => {
  const response = await Genero.aggregate([
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

  return response;
};

module.exports = { getAll };
