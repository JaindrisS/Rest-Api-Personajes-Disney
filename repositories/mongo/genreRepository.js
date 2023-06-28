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

const create = async (data) => {
  const nombre = data.nombre.toUpperCase();

  const info = {
    ...data,
    nombre,
  };

  const genero = await new Genero(info);
  let date = new Date();
  result = date.toLocaleString();
  genero.createAt = result;
  await genero.save();

  return genero;
};

module.exports = { getAll, create };
