const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuarios = require("../models/usuario");
const { generarJWT } = require("../helpers/generarJWT");

// Obtener usuarios guardados es la base de dats
const obtenerUsuarios = async (req = request, res = response) => {
  const usuario = await Usuarios.find({ estado: true });

  res.status(200).json({ usuario });
};

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

// acesso de usuarios

const acceso = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    // verificando si el correo existe
    const usuario = await Usuarios.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "El usuario o el password no es valido",
      });
    }

    // verificar si el estado es true o a sido borrado

    if (!usuario.estado) {
      return res.status(400).json({
        msg: "el usuario o el password no es valido - estado true",
      });
    }

    // veficar el password

    const passwordValido = bcryptjs.compareSync(password, usuario.password);

    if (!passwordValido) {
      res.status(400).json({
        msg: "el usuario o password no es valido -  password false",
      });
    }

    // crear jwt
    const token = await generarJWT(usuario.id);

    res.json({
      msg: "acceso listo",
      usuario,
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ msg: "comunicarse con el administrador" });
  }
};

module.exports = { registrarUsuarios, obtenerUsuarios, acceso };
