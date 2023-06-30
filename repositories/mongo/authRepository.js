const Usuarios = require("../../models/usuario");

const getAll = async () => {
  const response = await Usuarios.find({ estado: true });
  return response;
};

const getOne = async (correo) => {
  const response = await Usuarios.findOne({ correo });

  return response;
};

const create = async (data) => {
  const response = await new Usuarios(data);

  return response;
};

const getByIdAndUpdate = async (id, resto) => {
  const response = await Usuarios.findByIdAndUpdate(id, resto, {
    new: true,
  });

  return response;
};

module.exports = { getAll, getOne, create, getByIdAndUpdate };
