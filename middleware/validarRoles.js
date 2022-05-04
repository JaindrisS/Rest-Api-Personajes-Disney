const { request, response } = require("express");

const tieneRol = (...Roles) => {
  return (req = request, res = response, next) => {
    if (!req.usuario) {
      res
        .status(500)
        .json({ msg: "Se quiere validar el rol sin antes validar el token" });
    }
    // verificar el rol de usuarios
    if (!Roles.includes(req.usuario.rol)) {
      return res.status(400).json({
        msg: `El servidor requiere uno de estos roles ${Roles}`,
      });
    }

    next();
  };
};

module.exports = { tieneRol };
