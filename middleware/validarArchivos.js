const { response } = require("express");

const validarArchivos = (req, res = response, next) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    return res.status(400).json({ msg: "No ahy archivos que subir" });
  }
  next();
};
module.exports = { validarArchivos };
