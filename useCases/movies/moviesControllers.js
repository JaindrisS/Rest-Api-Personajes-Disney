const actualizarPelicula = require("./updateMovies/updateMovie");
const obtenerPeliculas = require("./getMovies/getMovies");
const crearPelicula = require("./createMovies/createMovies");
const detallesPeliculas = require("./detailsMovies/detailsMovies");
const borrarPelicula = require("./deleteMovies/deleteMovie");

module.exports = {
  actualizarPelicula,
  borrarPelicula,
  crearPelicula,
  detallesPeliculas,
  obtenerPeliculas,
};
