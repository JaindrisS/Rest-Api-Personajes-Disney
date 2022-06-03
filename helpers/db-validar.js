const { Pelicula, Usuario, Personaje, Genero } = require("../models/index");
const Rol = require("../models/rol");

const ExisteNombrePersonaje = async (nombre) => {
  // Verificar si el personaje existe
  const personajeDB = await Personaje.findOne({
    nombre: { $regex: nombre, $options: "i" },
  });

  if (personajeDB) {
    throw new Error(`el personaje ${personajeDB.nombre} ya existe`);
  }
};
const existePersonajePorId = async (id) => {
  // Verificar si el correo existe
  const existePersonaje = await Personaje.findById(id);
  if (!existePersonaje) {
    throw new Error(`El id no existe ${id}`);
  }
};

const existeNombreUsuario = async (nombre = "") => {
  const nombreExiste = await Usuario.findOne({
    nombre: { $regex: nombre, $options: "i" },
  });

  if (nombreExiste) {
    throw new Error(`El nombre de usuario ${nombre} ya esta registrado`);
  }
};
const existeCorreo = async (correo = "") => {
  const correoExiste = await Usuario.findOne({
    correo: { $regex: correo, $options: "i" },
  });

  if (correoExiste) {
    throw Error(`El correo ${correo} ya se encuentra registrado`);
  }
};

const ExisteTituloPelicula = async (titulo = "") => {
  // Verificar si la pelicula  existe

  const peliculasDB = await Pelicula.findOne({
    titulo: { $regex: titulo, $options: "i" },
  });
  if (peliculasDB) {
    throw new Error(`La pelicula ${peliculasDB.titulo} ya existe`);
  }
};
const existePeliculaPorId = async (id) => {
  const existePelicula = await Pelicula.findById(id);
  if (!existePelicula) {
    throw new Error(`El id no existe ${id}`);
  }
};

const existeRol = async (rol = "") => {
  const rolExiste = await Rol.findOne({ rol });

  if (!rolExiste) {
    throw new Error(`el rol ${rol} no esta registrado en la base de datos`);
  }
};

const existeGeneroPorId = async (id) => {
  const existeGeneroPorId = await Genero.findById(id);

  if (!existeGeneroPorId) {
    throw new Error(`el id ${id} no existe `);
  }
};

const ExisteNombreGenero = async (nombre = "") => {
  const generosDB = await Genero.findOne({
    nombre: { $regex: nombre, $options: "i" },
  });

  if (generosDB) {
    throw new Error(`El nombre del genero ${generosDB.nombre} ya existe`);
  }
};

module.exports = {
  ExisteNombrePersonaje,
  existePersonajePorId,
  ExisteTituloPelicula,
  existePeliculaPorId,
  existeCorreo,
  existeNombreUsuario,
  existeRol,
  existeGeneroPorId,
  ExisteNombreGenero,
};
