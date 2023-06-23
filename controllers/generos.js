const { response, request } = require("express");

const Genero = require("../models/genero");

const crearGenero = async (req = request, res = response) => {
  const { ...body } = req.body;

  const nombre = body.nombre.toUpperCase();

  const datos = {
    ...body,
    nombre,
  };

  const genero = await new Genero(datos);
  let date = new Date();
  resultado = date.toLocaleString();
  genero.createAt = resultado;
  await genero.save();

  res.json({
    genero,
  });
};

const actualizarGenero = async (req = request, res = response) => {
  const { id } = req.params;
  const { ...body } = req.body;
  const datos = {
    ...body,
    nombre: body.nombre.toUpperCase(),
  };

  const genero = await Genero.findByIdAndUpdate(id, datos);

  res.json({
    msg: "Genero actualizado",
    genero,
  });
};

const borrarGenero = async (req = request, res = response) => {
  const { id } = req.params;

  const borrarGenero = await Genero.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({
    msg: "Borrado con exito",
    borrarGenero,
  });
};

module.exports = { crearGenero, actualizarGenero, borrarGenero, obtenerGenero };
