const { create } = require("../../../repositories/mongo/characterRepository");
const { request, response, Personaje } = require("../characterModules");

const crearPersonaje = async (req = request, res = response) => {
  const { estado, nombre, ...body } = req.body;

  const response = await create(body, nombre);

  return res.status(201).json({
    response,
  });
};

module.exports = crearPersonaje;
