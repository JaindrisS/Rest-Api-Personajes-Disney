const Pelicula = require("../../models/pelicula");

const getAll = async () => {
  const response = await Pelicula.find(
    { estado: true },
    { titulo: 1, imagen: 1, fechadecreacion: 1 }
  );

  return response;
};

module.exports = { getAll };
