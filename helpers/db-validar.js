const personaje = require("../models/personaje");
const pelicula = require("../models/pelicula");
const Usuario = require("../models/usuario");
const Rol = require("../models/rol");
const Genero = require("../models/genero");

const ExisteNombre = async (id) => {
  // Verificar si el correo existe
  const nombreExiste = await personaje.findOne({ nombre });
  if (nombreExiste) {
    throw new Error(`El nombre del personaje: ${nombre}, ya está registrado`);
  }
};

const existeNombreUsuario = async (nombre = "") => {
  const nombreExiste = await Usuario.findOne({ nombre });

  if (nombreExiste) {
    throw new Error(`El nombre de usuario ${nombre} ya esta registrado`);
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

const existeCorreo = async (correo = "") => {
  const correoExiste = await Usuario.findOne({ correo });

  if (correoExiste) {
    throw Error(`El correo ${correo} ya se encuentra registrado`);
  }
};

const existeRol = async (rol = "") => {
  const rolExiste = await Rol.findOne({ rol });

  if (!rolExiste) {
    throw new Error(`el rol ${rol} no esta registrado en la base de datos`);
  }
};

const existeGenero = async (id) => {
  const existeGenero = await Genero.findById(id);

  if (!existeGenero) {
    throw new Error(`el id ${id} no existe `);
  }
};

module.exports = {
  ExisteNombre,
  existePersonajePorId,
  ExisteTitulo,
  existePeliculaPorId,
  existeCorreo,
  existeNombreUsuario,
  existeRol,
  existeGenero,
};
