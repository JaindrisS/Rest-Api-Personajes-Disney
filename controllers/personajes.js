const { response, request } = require("express");
const Personaje = require("../models/personaje");

const listadoDePersonajes = async (req = request, res = response) => {
  const personaje = await Personaje.find(
    { estado: true },
    { nombre: 1 }
  ).populate("peliculaoserie", "titulo");

  res.status(201).json({ personaje });
};

const crearPersonaje = async (req = request, res = response) => {
  const { estado, ...body } = req.body;
  const nombre = body.nombre.toUpperCase();

  const personajeDB = await Personaje.findOne({ nombre });

  if (personajeDB) {
    return res.status(400).json({
      msg: `el personaje ${personajeDB.nombre} ya existe`,
    });
  }

  const datos = {
    ...body,
    nombre,
  };

  const personaje = await new Personaje(datos);

  // Guardar en BD
  await personaje.save();

  res.json({
    personaje,
  });
};

const actualizarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, ...resto } = req.body;
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
  listadoDePersonajes,
  crearPersonaje,
  actualizarPersonaje,
  borrarPersonaje,
};
