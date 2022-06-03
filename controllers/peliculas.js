const { response, request } = require("express");
const Pelicula = require("../models/pelicula");

const obtenerPeliculas = async (req = request, res = response) => {
  const pelicula = await Pelicula.find(
    { estado: true },
    { titulo: 1, imagen: 1, fechadecreacion: 1 }
  );

  res.status(201).json({ pelicula });
};

const crearPelicula = async (req = request, res = response) => {
  const { estado, titulo, ...body } = req.body;

  const datos = {
    ...body,
    titulo: titulo.toUpperCase(),
  };

  const peliculas = await new Pelicula(datos);

  await peliculas.save();

  res.json({
    peliculas,
  });
};

const actualizarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, ...body } = req.body;

  if (body.titulo) {
    body.titulo = body.titulo.toUpperCase();
  }

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  body.upDate = resultado;

  const datos = {
    ...body,
  };

  const peliculas = await Pelicula.findByIdAndUpdate(id, datos);

  res.json({
    peliculas,
  });
};

const borrarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const Peliculas = await Pelicula.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({
    msg: "Pelicula Borrada",
    Peliculas,
  });
};

const detallesPeliculas = async (req = request, res = response) => {
  const resultado = await Pelicula.aggregate([
    {
      $lookup: {
        from: "personajes", //2
        localField: "_id", //referencia al id de pelicula, 1 (pelicula)
        foreignField: "peliculaoserie", //id coincida con el campo de personaje 2
        as: "personajesAsociados",
      },
    },
    {
      $project: {
        fechaDeCreacion: 0,
      },
    },
  ]);

  return res.json(resultado);
};

module.exports = {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
  detallesPeliculas,
};
