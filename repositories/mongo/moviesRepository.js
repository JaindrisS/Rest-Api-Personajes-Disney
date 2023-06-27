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

module.exports = { getAll, create };
