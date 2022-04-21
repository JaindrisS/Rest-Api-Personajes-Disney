const validarCampos = require("../middleware/validarCampos");
const validarJwt = require("../middleware/validarJWT");

module.exports = { ...validarCampos, ...validarJwt };
