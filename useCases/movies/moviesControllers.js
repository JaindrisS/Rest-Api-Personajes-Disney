const obtenerPeliculas = require("./getMovies/getMovies");
const crearPelicula = require("./createMovies/createMovies");
const actualizarPelicula = require("./updateMovies/updateMovie");
const borrarPelicula = require("./deleteMovies/deleteMovie");

module.exports = {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
};
