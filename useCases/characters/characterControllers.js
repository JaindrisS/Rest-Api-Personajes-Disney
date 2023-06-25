const listadoDePersonajes = require("./characterList/characterList");
const crearPersonaje = require("./createCharacter/createCharacter");
const actualizarPersonaje = require("./updateCharacter/updateCharacter");
const borrarPersonaje = require("./deleteCharacter/deleteCharacter");

module.exports = {
  listadoDePersonajes,
  crearPersonaje,
  actualizarPersonaje,
  borrarPersonaje,
};
