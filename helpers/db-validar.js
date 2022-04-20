const personaje = require("../models/personaje");
const pelicula = require("../models/pelicula");

const ExisteNombre = async (nombre = "") => {
  // Verificar si el correo existe
  const nombreExiste = await personaje.findOne({ nombre });
  if (nombreExiste) {
    throw new Error(`El nombre del personaje: ${nombre}, ya está registrado`);
  }
};

const ExisteTitulo = async (titulo = "") => {
  // Verificar si el correo existe
  const tituloExiste = await pelicula.findOne({ titulo });
  if (tituloExiste) {
    throw new Error(`El titulo de la pelicula: ${titulo}, ya está registrado`);
  }
};

const existePersonajePorId = async (id) => {
  // Verificar si el correo existe
  const existePersonaje = await personaje.findById(id);
  if (!existePersonaje) {
    throw new Error(`El id no existe ${id}`);
  }
};

const existePeliculaPorId = async (id) => {
  // Verificar si el correo existe
  const existePelicula = await pelicula.findById(id);
  if (!existePelicula) {
    throw new Error(`El id no existe ${id}`);
  }
};

module.exports = {
  ExisteNombre,
  existePersonajePorId,
  ExisteTitulo,
  existePeliculaPorId,
};
