const { response, request } = require("express");
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);
const { Usuario, Personaje, Pelicula, Genero } = require("../../models/index");

module.exports = {
  response,
  request,
  cloudinary,
  Usuario,
  Personaje,
  Pelicula,
  Genero,
};
