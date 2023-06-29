const { Usuarios } = require("../../models/usuario");

const get = async () => {
  const response = await Usuarios.find({ estado: true });
return response
};

module.exports = { get };
