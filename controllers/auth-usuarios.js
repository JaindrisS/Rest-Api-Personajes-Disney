const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuarios = require("../models/usuario");

// registrar el usuario
const registrarUsuarios = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;

  const usuario = await new Usuarios({ nombre, correo, password, rol });

  //Encriptar password
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);

  // guardar en db
  await usuario.save();

  res.status(201).json({ usuario });
};

const obtenerUsuarios = async (req = request, res = response) => {
  const usuario = await Usuarios.find({ estado: true });

  res.status(200).json({ usuario });
};

module.exports = { registrarUsuarios, obtenerUsuarios };
