const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const Usuarios = require("../models/usuario");

const validarJwt = async (req = request, res = response, next) => {
  const token = req.header("key-token");

  if (!token) {
    return res.status(401).json({
      msg: "no ahy token en la peticion",
    });
  }

  try {
    // id del usuario con token ya verificado
    const { uid } = jwt.verify(token, process.env.KEYPRIVADA);
    // leer el usuario que corresponde al id
    const usuario = await Usuarios.findById(uid);
    if (!usuario) {
      res.status(401).json({
        msg: "token no valido usuario no existe en  la base de datos",
      });
    }

    // verificar si el usuario tiene estado true

    if (!usuario.estado) {
      res.status(401).json({
        msg: "token no valido usuario con estado false",
      });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    console.error(error);

    res.status(401).json({ msg: "token no valido" });
  }
};

module.exports = { validarJwt };
