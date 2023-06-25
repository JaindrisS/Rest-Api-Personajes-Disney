const { request, response, Personaje } = require("../characterModules");

const listadoDePersonajes = async (req = request, res = response) => {
  const personaje = await Personaje.find(
    { estado: true },
    { nombre: 1 }
  ).populate("peliculaoserie", "titulo");

  res.status(201).json({ personaje });
};

module.exports = listadoDePersonajes;
