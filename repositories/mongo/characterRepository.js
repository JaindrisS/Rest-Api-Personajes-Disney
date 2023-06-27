const Personaje = require("../../models/personaje");

const getAll = async () => {
  const response = await Personaje.find(
    { estado: true },
    { nombre: 1 }
  ).populate("peliculaoserie", "titulo");

  return response;
};

const create = async (data, nombre) => {
  const info = {
    ...data,
    nombre: nombre.toUpperCase(),
  };

  const personaje = await new Personaje(info);

  let date = new Date();
  let result = date.toLocaleString();
  personaje.createAt = result;

  // Guardar en BD
  await personaje.save();

  return personaje;
};

const deleteCharacter = async (id) => {
  const personaje = await Personaje.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });
};

module.exports = { getAll, create, deleteCharacter };
