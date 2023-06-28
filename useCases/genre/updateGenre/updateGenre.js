const { update } = require("../../../repositories/mongo/genreRepository");
const { request, response } = require("../genreModules");
const actualizarGenero = async (req = request, res = response) => {
  const { id } = req.params;
  const { ...body } = req.body;

  const response = await update(id, body);

  return res.status(200).json({
    msg: "Genero actualizado",
    response,
  });
};

module.exports = actualizarGenero;
