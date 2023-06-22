const obtener = require("./getUser/getUser");
const acceso = require("./loginUSer/loginUser");
const registrarUsuarios = require("./registerUser/registerUser");
const actualizarUsuarios = require("./updateUser/updateUser");

module.exports = {
  obtener,
  acceso,
  registrarUsuarios,
  actualizarUsuarios,
};
