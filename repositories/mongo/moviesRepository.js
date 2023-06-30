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

const deleteMovie = async (id) => {
  const response = await Pelicula.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  return response;
};

const update = async (id, data) => {
  if (data.titulo) {
    data.titulo = data.titulo.toUpperCase();
  }

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  data.upDate = resultado;

  const result = {
    ...data,
  };

  const response = await Pelicula.findByIdAndUpdate(id, result);

  return response;
};

module.exports = { getAll, create, details, deleteMovie, update };
