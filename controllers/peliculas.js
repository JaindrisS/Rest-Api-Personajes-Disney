const { response, request } = require("express");
const Pelicula = require("../models/pelicula");

const obtenerPeliculas = async (req = request, res = response) => {
  const pelicula = await Pelicula.find(
    { estado: true },
    { titulo: 1, imagen: 1, fechaDeCreacion: 1 }
  );

  res.status(201).json({ pelicula });
};

const crearPelicula = async (req = request, res = response) => {
  const { estado, ...body } = req.body;
  const titulo = body.titulo.toUpperCase();

  const peliculasDB = await Pelicula.find({ titulo });

  if (peliculasDB) {
    return res.status(400).json({
      msg: `La pelicula ${titulo} ya existe`,
    });
  }

  const peliculas = await new Pelicula({
    body,
    titulo,
  });

  await peliculas.save();

  res.json({
    peliculas,
  });
};

const actualizarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, ...resto } = req.body;

  const datos = {
    ...resto,
    titulo: req.body.titulo.toUpperCase(),
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

  res.json(Peliculas);
};

module.exports = {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
};
