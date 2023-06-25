const obtenerGenero = require("../genre/getGenre/getGenre");
const crearGenero = require("../genre/createGenre/createGenre");
const actualizarGenero = require("../genre/updateGenre/updateGenre");
const borrarGenero = require("./deleteGenre/deleteGenre");

module.exports = { obtenerGenero, crearGenero, actualizarGenero, borrarGenero };
