const { response, request } = require("express");
const Pelicula = require("../models/pelicula");

const obtenerPelicula = async (req = request, res = response) => {
  const pelicula = await Pelicula.find({ estado: true });

  res.status(201).json({ pelicula });
};

const crearPelicula = async (req = request, res = response) => {
  const { imagen, titulo, fechaDeCreacion, calificacion, PersonajesAsociados } =
    req.body;

  const peliculas = await new Pelicula({
    imagen,
    titulo,
    fechaDeCreacion,
    calificacion,
    PersonajesAsociados,
  });

  await peliculas.save();

  res.json({
    peliculas,
  });
};

const actualizarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  const peliculas = await Pelicula.findByIdAndUpdate(id, resto);

  res.json(peliculas);
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
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
};
