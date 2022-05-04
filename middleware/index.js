const validarCampos = require("../middleware/validarCampos");
const validarJwt = require("../middleware/validarJWT");
const tieneRol = require("../middleware/validarRoles");
module.exports = { ...validarCampos, ...validarJwt, ...tieneRol };
