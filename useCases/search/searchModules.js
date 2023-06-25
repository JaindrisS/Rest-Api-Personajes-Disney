const { response, request } = require("express");
const { ObjectId } = require("mongoose").Types;
const { Pelicula, Personaje } = require("../../models/index");
const coleccionesPermitidas = ["peliculas", "personajes"];

module.exports = {
  response,
  request,
  ObjectId,
  Pelicula,
  Personaje,
  coleccionesPermitidas,
};
