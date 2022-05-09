const { response, request } = require("express");
const { body } = require("express-validator");
const query = require("express/lib/middleware/query");
const Pelicula = require("../models/pelicula");

const obtenerPeliculas = async (req = request, res = response) => {
  const pelicula = await Pelicula.find(
    { estado: true },
    { titulo: 1, imagen: 1, fechadecreacion: 1 }
  );

  res.status(201).json({ pelicula });
};

const crearPelicula = async (req = request, res = response) => {
  const { estado, ...body } = req.body;
  const titulo = body.titulo.toUpperCase();
  // validar que un string que contengaun numero
  const peliculasDB = await Pelicula.findOne({ titulo });

  if (peliculasDB) {
    return res.status(400).json({
      msg: `La pelicula ${peliculasDB.titulo} ya existe`,
    });
  }
  const datos = {
    ...body,
  };

  const peliculas = await new Pelicula(datos);

  await peliculas.save();

  res.json({
    peliculas,
  });
};

const actualizarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, ...body } = req.body;

  if (body.titulo) {
    body.titulo = body.titulo.toUpperCase();
  }

  const datos = {
    ...body,
  };

  const peliculas = await Pelicula.findByIdAndUpdate(id, datos);

  res.json({
    peliculas,
  });
};

const borrarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const Peliculas = await Pelicula.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({
    msg: "Pelicula Borrada",
    Peliculas,
  });
};

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
    { $unionWith: "personajesAsociados" },
  ]);

  return res.json(resultado);
};

module.exports = {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
  detallesPeliculas,
};
