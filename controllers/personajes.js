const { response, request } = require("express");
const Personaje = require("../models/personaje");

const crearPersonaje = async (req = request, res = response) => {
  const { estado, nombre, ...body } = req.body;

  const datos = {
    ...body,
    nombre: nombre.toUpperCase(),
  };

  const personaje = await new Personaje(datos);

  let date = new Date();
  resultado = date.toLocaleString();
  personaje.createAt = resultado;

  // Guardar en BD
  await personaje.save();

  res.json({
    personaje,
  });
};

const actualizarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, upDate, ...body } = req.body;

  if (body.nombre) {
    body.nombre = body.nombre.toUpperCase();
  }

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  body.upDate = resultado;

  const datos = {
    ...body,
  };
  const personaje = await Personaje.findByIdAndUpdate(id, datos);

  res.json(personaje);
};

const borrarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const personaje = await Personaje.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({ msg: "Personaje Borrado ", personaje });
};

module.exports = {
  crearPersonaje,
  actualizarPersonaje,
  borrarPersonaje,
};
