const { update } = require("../../../repositories/mongo/characterRepository");
const { request, response, Personaje } = require("../characterModules");

const actualizarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, upDate, ...body } = req.body;

  const response = await update(id, body);

  return res.status(200).json(response);
};

module.exports = actualizarPersonaje;
