const  Usuarios  = require("../../models/usuario");

const getAll = async () => {
  const response = await Usuarios.find({ estado: true });
  return response;
};

const getOne = async (correo) => {
  const response = await Usuarios.findOne({ correo });

  return response;
};

module.exports = { getAll, getOne };
