const { response, request } = require("express");
const { ObjectId } = require("mongoose").Types;
const { Pelicula, Personaje } = require("../models/index");
const coleccionesPermitidas = ["peliculas", "personajes"];

const buscarPersonaje = async (termino = "", res = response) => {
  // busqueda por id de mongodb
  const esMongoId = ObjectId.isValid(termino);

  if (esMongoId) {
    const personaje = await Personaje.find(termino);

    res.json({
      results:
        personaje && personaje.estado
          ? [personaje]
          : { msg: `El id del personaje ${termino} no existe o no es valido` },
    });
  }

  // buscar por nombre

  const regex = new RegExp(termino, "i");

  const personaje = await Personaje.find({
    $and: [{ nombre: regex }, { estado: true }],
  });
  return res.json({
    results: personaje
      ? personaje
      : { msg: `El nombre del personaje ${termino} no existe` },
  });
};

const buscarPeliculas = async (termino = "", res = response, req = request) => {
  const esMongoId = ObjectId.isValid(termino);

  if (esMongoId) {
    const pelicula = await Pelicula.findById(termino).populate(
      "genero",
      "nombre"
    );
    return res.json({
      Results:
        pelicula && pelicula.estado
          ? [pelicula]
          : { msg: "La pelicula no existe" },
    });
  }

  // busqueda por parametros ASC | DES
  if (termino) {
    if (termino === "asc") {
      const pelicula = await Pelicula.find().sort({ fechaDeCreacion: 1 });

      return res.json({
        Peliculas: pelicula,
      });
    }
    if (termino === "desc") {
      const pelicula = await Pelicula.find().sort({ fechaDeCreacion: -1 });

      return res.json({
        Peliculas: pelicula,
      });
    }
  }

  // Busqueda por nombre
  const regex = new RegExp(termino, "i");

  const pelicula = await Pelicula.find({
    $and: [{ titulo: regex }, { estado: true }],
  });

  return res.json({
    Results: pelicula ? pelicula : { msg: `La pelicula ${termino} no existe` },
  });
};

const buscar = (req = request, res = response) => {
  const { coleccion, termino } = req.params;

  if (!coleccionesPermitidas.includes(coleccion)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son ${coleccionesPermitidas}`,
    });
  }

  switch (coleccion) {
    case "peliculas":
      buscarPeliculas(termino, res, req);
      break;
    case "personajes":
      buscarPersonaje(termino, res);
      break;
    default:
      res.status(500).json({
        msg: " busqueda no agregada",
      });
      break;
  }
};

module.exports = { buscar };
