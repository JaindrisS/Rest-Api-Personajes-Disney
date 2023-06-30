const {
  deleteCharacter,
} = require("../../../repositories/mongo/characterRepository");
const { request, response } = require("../characterModules");

const borrarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;

  const response = await deleteCharacter(id);

  return res.status(200).json({ msg: "Personaje Borrado ", response });
};

module.exports = borrarPersonaje;
