const Pelicula = require("../../models/pelicula");

const getAll = async () => {
  const response = await Pelicula.find(
    { estado: true },
    { titulo: 1, imagen: 1, fechadecreacion: 1 }
  );

  return response;
};

const create = async (data) => {
  const { estado, titulo, ...body } = data;

  const datos = {
    ...body,
    titulo: titulo.toUpperCase(),
  };
  const peliculas = await new Pelicula(datos);

  await peliculas.save();

  return peliculas;
};

const details = async () => {
  const response = await Pelicula.aggregate([
    {
      $lookup: {
        from: "personajes", //2
        localField: "_id", //referencia al id de pelicula, 1 (pelicula)
        foreignField: "peliculaoserie", //id coincida con el campo de personaje 2
        as: "personajesAsociados",
      },
    },
    {
      $project: {
        fechaDeCreacion: 0,
      },
    },
  ]);

  return response;
};

module.exports = { getAll, create, details };
