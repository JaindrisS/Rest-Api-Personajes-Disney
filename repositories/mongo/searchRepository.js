const { ObjectId } = require("mongoose").Types;
const Pelicula = require("../../models/pelicula");

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
  return response;
};

module.exports = getMovie;
