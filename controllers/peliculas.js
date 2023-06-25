const { response, request } = require("express");
const Pelicula = require("../models/pelicula");

const detallesPeliculas = async (req = request, res = response) => {
  const resultado = await Pelicula.aggregate([
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

  return res.json(resultado);
};

module.exports = {
  detallesPeliculas,
};
