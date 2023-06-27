const Personaje = require("../../models/personaje");

const getAll = async () => {

  const response = await Personaje.find(
    { estado: true },
    { nombre: 1 }
  ).populate("peliculaoserie", "titulo");

  return response

};


module.exports = getAll