const { response, request } = require("express");

const Genero = require("../models/genero");

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

module.exports = { borrarGenero };
