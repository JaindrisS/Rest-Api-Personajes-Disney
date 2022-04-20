const { response, request } = require("express");
const Personaje = require("../models/personaje");

const obtenerPersonaje = async (req = request, res = response) => {
  const personaje = await Personaje.find({ estado: true });

  res.status(201).json({ personaje });
};

const crearPersonaje = async (req = request, res = response) => {
  const { nombre, historia, imagen, PeliculaOserie } = req.body;
  const personaje = new Personaje({ nombre, historia, imagen, PeliculaOserie });

  // Guardar en BD
  await personaje.save();

  res.json({
    personaje,
  });
};

const actualizarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  const personaje = await Personaje.findByIdAndUpdate(id, resto);

  res.json(personaje);
};

const borrarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const personaje = await Personaje.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json(personaje);
};

module.exports = {
  obtenerPersonaje,
  crearPersonaje,
  actualizarPersonaje,
  borrarPersonaje,
};
