const { response, request } = require("express");

const Genero = require("../models/genero");



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

module.exports = { borrarGenero, crearGenero, actualizarGenero };
