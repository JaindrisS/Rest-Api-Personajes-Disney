const { ObjectId } = require("mongoose").Types;
const Pelicula = require("../../models/pelicula");
const Personaje = require("../../models/personaje");

const getMovie = async (termino) => {
  const esMongoId = ObjectId.isValid(termino);
  if (esMongoId) {
    const pelicula = await Pelicula.findById(termino).populate(
      "genero",
      "nombre"
    );
    if (pelicula && pelicula.estado) {
      return { msg: pelicula, status: 200 };
    } else {
      return { msg: "La pelicula no existe", status: 404 };
    }
  }

  // busqueda por parametros ASC | DES
  if (termino) {
    if (termino === "asc") {
      const pelicula = await Pelicula.find().sort({ fechadecreacion: 1 });

      return {
        status: 200,
        Peliculas: pelicula,
      };
    }
    if (termino === "desc") {
      const pelicula = await Pelicula.find().sort({ fechadecreacion: -1 });

      return {
        status: 200,
        msg: pelicula,
      };
    }
  }

  // Busqueda por nombre
  const regex = new RegExp(termino, "i");

  const response = await Pelicula.find({
    $and: [{ titulo: regex }, { estado: true }],
  });
  if (response.length === 0) {
    return {
      status: 404,
      msg: `La pelicula ${termino} no existe`,
    };
  }
  return { msg: response, status: 200 };
};

const getCharacter = async (termino) => {
  // busqueda por id de mongodb
  const esMongoId = ObjectId.isValid(termino);

  if (esMongoId) {
    const personaje = await Personaje.findById(termino);

    if (personaje && personaje.estado) {
      return { msg: personaje, status: 200 };
    } else {
      return { msg: "El personaje no existe", status: 404 };
    }
  }

  // buscar por nombre

  const regex = new RegExp(termino, "i");

  const response = await Personaje.find({
    $and: [{ nombre: regex }, { estado: true }],
  }).populate("peliculaoserie", "titulo");
  console.log(response);
  if (response.length === 0) {
    return {
      status: 404,
      msg: `El personaje ${termino} no existe`,
    };
  }
  return { msg: response, status: 200 };
};

module.exports = { getMovie, getCharacter };
