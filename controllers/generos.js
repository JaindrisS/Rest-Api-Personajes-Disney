const { response, request } = require("express");

const Genero = require("../models/genero");

const obtenerGenero = async (req = request, res = response) => {
  const genero = await Genero.aggregate([
    {
      $lookup: {
        from: "peliculas", //2
        localField: "_id", //referencia al id de pelicula, 1 (pelicula)
        foreignField: "genero", //id coincida con el campo de personaje 2
        as: "peliculaasociada",
      },
    },
    {
      $project: {
        nombre: 1,
        peliculaasociada: { titulo: 1, imagen: 1 },
      },
    },
  ]);

  res.json(genero);
};

const crearGenero = async (req = request, res = response) => {
  const { ...body } = req.body;

  const nombre = body.nombre.toUpperCase();

  const generoDB = await Genero.findOne({ nombre });

  if (generoDB) {
    return res.status(400).json({
      msg: `El genero ${nombre} ya existe`,
    });
  }

  const datos = {
    ...body,
    nombre,
  };

  const genero = await new Genero(datos);

  await genero.save();

  res.json({
    genero,
  });
};

const actualizarGenero = async (req = request, res = response) => {
  const { id } = req.params;
  const { ...body } = req.body;
  const datos = {
    ...body,
    nombre: req.body.nombre.toUpperCase(),
  };

  const generoDB = await Genero.findByIdAndUpdate(id, datos);

  res.json({
    msg: "Genero actualizado",
    generoDB,
  });
};

const borrarGenero = async (req = request, res = response) => {
  const { id } = req.params;

  const borrarGenero = await Genero.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({
    msg: "Borrado con exito",
    borrarGenero,
  });
};

module.exports = { crearGenero, actualizarGenero, borrarGenero, obtenerGenero };
