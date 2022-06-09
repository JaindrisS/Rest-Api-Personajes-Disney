const validarCampos = require("../middleware/validarCampos");
const validarJwt = require("../middleware/validarJWT");
const tieneRol = require("../middleware/validarRoles");
const validarArchivos = require("./validarArchivos");
module.exports = {
  ...validarCampos,
  ...validarJwt,
  ...tieneRol,
  ...validarArchivos,
};
