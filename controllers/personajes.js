const { response, request } = require("express");
const Personaje = require("../models/personaje");

const borrarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const personaje = await Personaje.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({ msg: "Personaje Borrado ", personaje });
};

module.exports = {
  borrarPersonaje,
};
